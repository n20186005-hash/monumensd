interface Env { ASSETS: { fetch(request: Request): Promise<Response> } }
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.protocol !== 'https:' || url.hostname === 'www.monumensd.com') {
      url.protocol = 'https:'; url.hostname = 'monumensd.com'; url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    const explicitError = /^\/404(?:\.html|\/)?$/.test(url.pathname);
    // Request the extensionless asset directly so HTML canonicalization cannot
    // redirect an explicit error URL to a successful (200) error document.
    const assetUrl = new URL(url);
    if (explicitError) assetUrl.pathname = '/404';
    const response = await env.ASSETS.fetch(explicitError ? new Request(assetUrl, request) : request);
    if (!explicitError && response.status !== 404) return response;
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, follow');
    return new Response(response.body, { status: 404, headers });
  }
};
