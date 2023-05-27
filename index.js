const target = document.getElementById('target');
const kanan = document.getElementById('kanan');
const kiri = document.getElementById('kiri');
const atas = document.getElementById('atas');
const bawah = document.getElementById('bawah');

let move = 50;

window.addEventListener('load', () =>{
  target.style.position = 'absolute';
  target.style.left = '0';
  target.style.top = '0';
})
window.addEventListener('keyup', (e) =>{
  console.log(e.code)
  switch(e.code){
    case 'ArrowRight':
      target.style.left = parseInt(target.style.left) + move + 'px';
      break;
      case 'ArrowLeft':
      target.style.left = parseInt(target.style.left) - move + 'px';
      break;
      case 'ArrowUp':
      target.style.top = parseInt(target.style.top) - move + 'px';
      break;
      case 'ArrowDown':
      target.style.top = parseInt(target.style.top) + move + 'px';
      break;
  }
})
kanan.addEventListener('click', () => {
   target.style.left = parseInt(target.style.left) + move + 'px';
})
kiri.addEventListener('click', () => {
  target.style.left = parseInt(target.style.left) - move + 'px';
})
atas.addEventListener('click', () => {
  target.style.top = parseInt(target.style.top) - move + 'px';
})
bawah.addEventListener('click', () => {
  target.style.top = parseInt(target.style.top) + move + 'px';
})

