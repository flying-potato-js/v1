// Confetti.js: Simple confetti burst
window.confetti = () => {
  for(let i=0;i<60;i++) {
    let d = document.createElement('div');
    Object.assign(d.style, {
      position:'fixed',left: Math.random()*100+'vw',top:'10vh',
      width:'6px',height:'15px',background:'hsl('+(Math.random()*360)+',80%,60%)',
      transform:'rotate('+Math.random()*360+'deg)', zIndex:9999
    });
    document.body.appendChild(d);
    setTimeout(() => d.style.top='75vh', 20);
    setTimeout(() => d.remove(), 2200);
  }
};
