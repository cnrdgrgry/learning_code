let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;

let opacity = 1;
let red = 128;
let blue = 128;
let green = 128;
let radius = 10;

function drawCircle(x, y) {
  ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fill();
}

canvas.addEventListener('click', e => {
  drawCircle(e.offsetX, e.offsetY);
});

// Reset/Clear buttons //

document.querySelector('#clear').addEventListener('click', () => {
  ctx.clearRect(0, 0, width, height);
});

document.querySelector('#resetr').addEventListener('click', () => {
  red = 128; 
});
   adjustment sliders //bin
document.querySelector('#resetg').addEventListener('click', () => {
  green = 128; 
});
 
document.querySelector('#resetb').addEventListener('click', () => {
  blue = 128; 
});

document.querySelector('#resetrad').addEventListener('click', () => {
  radius = 20; 
});

// adjustment sliders //

document.querySelector('#red').addEventListener('change', e => {
  red = e.target.value;
});

document.querySelector('#green').addEventListener('change', e => {
  green = e.target.value;
});

document.querySelector('#blue').addEventListener('change', e => {
  blue = e.target.value;
});

document.querySelector('#radius').addEventListener('change', e => {
  radius = e.target.value;
});

document.querySelector('#opacity').addEventListener('change', e => {
  opacity = e.target.value;
});
