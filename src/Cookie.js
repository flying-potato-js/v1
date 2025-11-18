// Cookie.js: Simple cookie get/set/del
window.cookie = {
  get: n => (document.cookie.match('(^|;) ?'+n+'=([^;]*)(;|$)')||[])[2],
  set: (n, v, d) => {
    let exp = d ? ";expires=" + new Date(Date.now()+d*864e5).toUTCString() : "";
    document.cookie = n + "=" + v + exp + ";path=/";
  },
  del: n => window.cookie.set(n, "", -1)
};
