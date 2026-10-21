import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import worker from '../src/worker.ts';

const errorHtml = '<meta name="robots" content="noindex,follow"><h1>Halaman tidak ditemukan.</h1>';
for (const path of ['/404', '/404/', '/404.html']) {
  for (const method of ['GET', 'HEAD']) {
    let assetRequest;
    const response = await worker.fetch(new Request(`https://monumensd.com${path}?ref=test`, { method }), {
      ASSETS: { fetch: async request => {
        assetRequest = request;
        assert.equal(new URL(request.url).pathname, '/404');
        return new Response(method === 'HEAD' ? null : errorHtml, { headers: { 'Content-Type': 'text/html' } });
      } }
    });
    assert.equal(response.status, 404);
    assert.equal(response.headers.get('X-Robots-Tag'), 'noindex, follow');
    assert.equal(response.headers.get('Location'), null);
    assert.equal(new URL(assetRequest.url).search, '?ref=test');
    assert.equal(assetRequest.method, method);
    assert.equal(await response.text(), method === 'HEAD' ? '' : errorHtml);
  }
}
for (const [path, status] of [['/', 200], ['/privacy-policy', 200], ['/missing', 404], ['/consent.js', 200], ['/sejarah/', 307]]) {
  const response = await worker.fetch(new Request(`https://monumensd.com${path}`), { ASSETS: { fetch: async () => new Response('asset', { status }) } });
  assert.equal(response.status, status);
  assert.equal(response.headers.has('X-Robots-Tag'), status === 404);
}
const redirect = await worker.fetch(new Request('http://monumensd.com/sejarah?q=1'), {});
assert.equal(redirect.status, 301);
assert.equal(redirect.headers.get('Location'), 'https://monumensd.com/sejarah?q=1');
console.log('PASS Worker: explicit aliases GET/HEAD/query, unknown404, normal pages/assets/redirects');

const runtime = await readFile(new URL('../public/consent.js', import.meta.url), 'utf8');
const builtSettings = await readFile(new URL('../dist/cookie-settings/index.html', import.meta.url), 'utf8');
const builtScripts = Array.from(builtSettings.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g));
const formIndex = builtScripts.findIndex(match => match[2].includes('cookie-form'));
const runtimeIndex = builtScripts.findIndex(match => match[1].includes('/consent.js'));
assert.ok(formIndex >= 0 && runtimeIndex > formIndex, 'Replay the actual built initializer order');
const formSource = builtScripts[formIndex][2];
assert.equal(await readFile(new URL('../dist/consent.js', import.meta.url), 'utf8'), runtime);
assert.equal(formSource.trim(), (await readFile(new URL('../src/pages/cookie-settings.astro', import.meta.url), 'utf8')).match(/<script is:inline>([\s\S]*?)<\/script>/)[1].trim());
const pref = 'memorial-cookie-preferences', veto = 'memorial-analytics-denied', disable = 'ga-disable-G-HXM22WWPKP';
const grant = JSON.stringify({ analytics: true });
function storage(map = new Map()) {
  return { map, fail: {}, getItem(k) { if (this.fail.read) throw Error('read'); return map.get(k) ?? null; }, setItem(k,v) { if (this.fail.write) throw Error('write'); map.set(k,v); }, removeItem(k) { if (this.fail.remove) throw Error('remove'); map.delete(k); } };
}
function tab(local = storage(), session = storage()) {
  const listeners = new Map(), nodes = {}, scripts = [];
  for (const id of ['cookie-form', 'analytics-consent', 'reject-all', 'cookie-status']) nodes[id] = { checked: false, textContent: '', addEventListener(type, fn) { this[type] = fn; } };
  const context = { localStorage: local, sessionStorage: session, location: { hostname: 'monumensd.com' }, Event: class { constructor(type) { this.type = type; } }, document: { cookie: '_ga=example', getElementById: id => nodes[id], createElement: () => ({}), head: { appendChild: script => scripts.push(script) } }, addEventListener(type, fn) { (listeners.get(type) || listeners.set(type, []).get(type)).push(fn); }, dispatchEvent(event) { for (const fn of listeners.get(event.type) || []) fn(event); } };
  context.window = context;
  vm.createContext(context); vm.runInContext(formSource, context); vm.runInContext(runtime, context);
  return { context, nodes, scripts, local, session, allow() { nodes['analytics-consent'].checked = true; nodes['cookie-form'].submit({ preventDefault() {} }); }, deny() { nodes['reject-all'].click(); }, storageEvent() { context.dispatchEvent(new context.Event('storage')); } };
}
const effective = t => t.context[disable];
const latestConsent = t => Array.from(t.context.dataLayer || []).filter(x => x[0] === 'consent').at(-1)?.[2]?.analytics_storage;
let t = tab(); assert.equal(t.scripts.length, 0); assert.equal(effective(t), true);
t.allow(); assert.equal(effective(t), false); assert.equal(t.scripts.length, 1);
t.deny(); assert.equal(effective(t), true); assert.equal(latestConsent(t), 'denied');
t.allow(); assert.equal(effective(t), false); assert.equal(latestConsent(t), 'granted'); assert.equal(t.scripts.length, 1);
const local = storage(new Map([[pref, grant]])); t = tab(local); local.fail.write = true; t.deny();
assert.equal(local.getItem(pref), grant); assert.equal(effective(t), true); assert.equal(t.session.getItem(veto), '1');
const reload = tab(local, t.session); assert.equal(effective(reload), true); assert.equal(reload.scripts.length, 0);
const unreadableSession = storage(); unreadableSession.fail.read = true; t = tab(storage(new Map([[pref, grant]])), unreadableSession); assert.equal(effective(t), true); t.allow(); assert.equal(effective(t), true); assert.equal(t.nodes['analytics-consent'].checked, false);
// Read and write failures are independent. A failed read must not publish a
// grant or claim permission while the effective runtime remains disabled.
const unreadableLocal = storage(new Map([[pref, JSON.stringify({ analytics: false })]]));
unreadableLocal.fail.read = true;
const healthyTab = tab(storage(unreadableLocal.map));
t = tab(unreadableLocal); t.allow(); healthyTab.storageEvent();
assert.equal(JSON.parse(unreadableLocal.map.get(pref)).analytics, false);
assert.equal(effective(t), true); assert.equal(t.nodes['analytics-consent'].checked, false);
assert.match(t.nodes['cookie-status'].textContent, /dinonaktifkan/);
assert.doesNotMatch(t.nodes['cookie-status'].textContent, /diizinkan/);
assert.equal(healthyTab.scripts.length, 0);
// If readability disappears only after a successful write, feedback still
// describes the applied disabled state rather than the requested allowance.
const lateRead = storage(); const setItem = lateRead.setItem;
lateRead.setItem = function(k, v) { setItem.call(this, k, v); this.fail.read = true; };
t = tab(lateRead); t.allow();
assert.equal(effective(t), true); assert.equal(t.nodes['analytics-consent'].checked, false);
assert.match(t.nodes['cookie-status'].textContent, /tetap nonaktif pada halaman ini/);
assert.doesNotMatch(t.nodes['cookie-status'].textContent, /diizinkan/);
const shared = storage(new Map([[pref, JSON.stringify({ analytics: false })]]));
const first = tab(shared, storage(new Map([[veto, '1']]))), second = tab(shared);
first.session.fail.remove = true; first.allow(); second.storageEvent();
assert.equal(JSON.parse(shared.getItem(pref)).analytics, false); assert.equal(effective(first), true); assert.equal(effective(second), true);
first.session.fail.remove = false; first.allow(); second.storageEvent(); assert.equal(effective(second), false);
first.deny(); second.storageEvent(); assert.equal(effective(second), true); assert.equal(second.nodes['analytics-consent'].checked, false); assert.equal(latestConsent(second), 'denied'); assert.match(second.nodes['cookie-status'].textContent, /dinonaktifkan/);
const broken = storage(); broken.fail.write = true; broken.fail.read = true; const brokenLocal = storage(new Map([[pref, grant]])); brokenLocal.fail.write = true; t = tab(brokenLocal, broken); t.deny(); assert.equal(effective(t), true); assert.match(t.nodes['cookie-status'].textContent, /halaman ini/);
t = tab(storage(new Map([[pref, '{malformed']]))); assert.equal(effective(t), true);
console.log('PASS consent: actual built initializer order, default-off, allow/deny/regrant, old-grant write failure+reload, independent local/session read failures, no shared grant on unreadable local storage, effective feedback after late read failure, session write failures, failed veto removal across separate tabs, shared denial, malformed preference');
