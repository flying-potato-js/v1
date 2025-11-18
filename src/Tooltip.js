// Tooltip.js: Adds tooltips to elements with [data-tip]
document.addEventListener('mouseover', e => {
  let t = e.target.closest('[data-tip]');
  if (t) {
    let tip = document.createElement('div');
    tip.className = 'tip';
    tip.textContent = t.dataset.tip;
    Object.assign(tip.style, {
      position: 'absolute',
      left: (e.pageX+12) + 'px',
      top: (e.pageY+12) + 'px',
      background: '#222',
      color: '#fff',
      padding: '2px 5px',
      borderRadius: '3px',
      zIndex: 9999,
      pointerEvents: 'none'
    });
    tip.id = 'tip-pop';
    document.body.appendChild(tip);
    t.addEventListener('mouseleave', () => tip.remove(), {once:true});
  }
});
