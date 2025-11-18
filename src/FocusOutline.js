// FocusOutline.js: Only show outlines for keyboard navigation
let useKB;
document.addEventListener('keydown',()=>useKB=true);
document.addEventListener('mousedown',()=>useKB=false);
document.body.addEventListener('focusin',e=>{
  document.body.classList.toggle('show-focus',useKB);
});
