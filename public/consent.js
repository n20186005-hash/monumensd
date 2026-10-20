(() => {
  const key = 'memorial-cookie-preferences';
  const id = 'G-HXM22WWPKP';
  function allowed() { try { return JSON.parse(localStorage.getItem(key) || '{}')?.analytics === true; } catch { return false; } }
  function apply() {
    const consent = allowed();
    window['ga-disable-' + id] = !consent;
    if (!consent) {
      for (const cookie of document.cookie.split(';')) {
        const name = cookie.split('=')[0].trim();
        if (/^_ga(?:_|$)/.test(name)) {
          for (const domain of ['', '; domain=' + location.hostname, '; domain=.monumensd.com']) document.cookie = name + '=; Max-Age=0; path=/' + domain;
        }
      }
      if (window.__memorialAnalyticsLoaded) location.reload();
      return;
    }
    if (window.__memorialAnalyticsLoaded) return;
    window.__memorialAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', id);
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  }
  apply(); window.addEventListener('memorial:consent', apply); window.addEventListener('storage', apply);
})();
