// Selector.js: Simple $() for querySelector/all
window.$ = (sel, ctx = document) => {
  return sel[0] === '#' ? ctx.getElementById(sel.slice(1))
       : sel[0] === '.' ? ctx.getElementsByClassName(sel.slice(1))
       : ctx.querySelectorAll(sel);
};
