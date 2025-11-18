// QueryString.js: URL param parser
window.qs = (() => {
  let u = window.location.search.replace(/^\?/, '').split('&');
  return Object.fromEntries(u.filter(Boolean).map(x=>x.split('=').map(decodeURIComponent)));
})();
