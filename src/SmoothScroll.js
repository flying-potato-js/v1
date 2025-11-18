// SmoothScroll.js: Anchor smooth scrolling
document.addEventListener('click', e => {
  let a = e.target.closest('a[href^="#"]');
  if (a) {
    let tgt = document.getElementById(a.getAttribute('href').slice(1));
    if (tgt) {
      e.preventDefault();
      tgt.scrollIntoView({behavior:"smooth"});
    }
  }
});
