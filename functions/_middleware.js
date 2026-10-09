// Zweite Domain für die Faden-App (flux-faden / flux-notizen .pages.dev): Startseite leitet auf /faden/ um.
export async function onRequest({ request, next }) {
  const u = new URL(request.url);
  if ((u.hostname.startsWith('flux-faden') || u.hostname.startsWith('flux-notizen')) && (u.pathname === '/' || u.pathname === '/index.html')) {
    return Response.redirect(u.origin + '/faden/', 302);
  }
  return next();
}
