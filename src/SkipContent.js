// SkipContent.js: Insert skip to content link
window.addEventListener('DOMContentLoaded', ()=>{
  let btn = document.createElement('a');
  btn.textContent = 'Skip to main content';
  btn.href = '#main';
  btn.style = 'position:absolute;top:2px;left:2px;background:#fff;padding:6px;';
  btn.className = 'skip-link';
  document.body.prepend(btn);
});
