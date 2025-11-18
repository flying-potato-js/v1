// Modal.js: Minimal modal popup
window.showModal = html => {
  let m = document.createElement('div');
  Object.assign(m.style, {
    position:'fixed',left:0,top:0,width:'100vw',height:'100vh',
    background:'rgba(0,0,0,0.3)',display:'flex',alignItems:'center',
    justifyContent:'center',zIndex:9999
  });
  m.innerHTML = `<div style="background:#fff;padding:20px;border-radius:6px;">${html}<br>
    <button onclick="this.closest('div').parentNode.remove()">Close</button></div>`;
  document.body.appendChild(m);
};
