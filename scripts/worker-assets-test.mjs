import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire, stripTypeScriptTypes } from 'node:module';
const wranglerRequire = createRequire(import.meta.resolve('wrangler'));
const { Miniflare, convertV4MiniflareOptions } = wranglerRequire('miniflare');
const script = stripTypeScriptTypes(await readFile('src/worker.ts', 'utf8'));
// The installed local workerd predates the production compatibility date.
const mf = new Miniflare(convertV4MiniflareOptions({ name: 'monumensd-test', modules: true, script, compatibilityDate: '2026-08-11', assets: {
  directory: 'dist', binding: 'ASSETS', run_worker_first: true, routerConfig: { has_user_worker: true, invoke_user_worker_ahead_of_assets: true },
  assetConfig: { html_handling: 'drop-trailing-slash', not_found_handling: '404-page' }
} }));
try {
  for (const path of ['/404', '/404/', '/404.html', '/404?ref=a%2Fb&ref=2', '/404/?ref=a%2Fb&ref=2', '/404.html?ref=a%2Fb&ref=2', '/missing-error-probe']) {
    for (const method of ['GET', 'HEAD']) {
      const response = await mf.dispatchFetch(`https://monumensd.com${path}`, { method, redirect: 'manual' });
      if (response.status !== 404) console.error(await response.clone().text());
      assert.equal(response.status, 404, `${method} ${path}`);
      assert.equal(response.headers.get('X-Robots-Tag'), 'noindex, follow');
      assert.equal(response.headers.get('Location'), null);
      const text = await response.text();
      if (method === 'HEAD') assert.equal(text, '');
      else { assert.match(text, /Halaman tidak ditemukan/); assert.match(text, /name="robots" content="noindex,follow"/); }
    }
  }
  for (const path of ['/', '/privacy-policy', '/cookie-settings', '/sejarah', '/transportasi', '/sekitar', '/terms-of-service', '/consent.js']) {
    const response = await mf.dispatchFetch(`https://monumensd.com${path}`, { redirect: 'manual' });
    assert.equal(response.status, 200, path); assert.equal(response.headers.get('X-Robots-Tag'), null);
  }
  const response = await mf.dispatchFetch('https://monumensd.com/privacy-policy/', { redirect: 'manual' });
  assert.equal(response.status, 307);
  console.log('PASS actual local Worker+Assets: error aliases GET/HEAD/query and unknown404; all visitor routes/assets200; normal trailing-slash canonicalization preserved. Local compatibility override2026-08-11; production config unchanged.');
} finally { await mf.dispose(); }
