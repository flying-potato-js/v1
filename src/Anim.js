// Anim.js: Fade/slide toggler
window.fadeToggle = el => 
  el.style.transition="opacity 0.3s", 
  el.style.opacity = el.style.opacity === "0" ? "1" : "0";

window.slideToggle = el =>
  el.style.transition="max-height 0.3s",
  el.style.overflow="hidden",
  el.style.maxHeight = el.style.maxHeight === "0px" ? "300px" : "0px";
