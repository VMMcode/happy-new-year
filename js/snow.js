const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let snowflakes = [];
const numFlakes = 220;

for (let i = 0; i < numFlakes; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() * numFlakes
  });
}

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  for (let i = 0; i < snowflakes.length; i++) {
    const f = snowflakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  updateSnow();
}

let angle = 0;

function updateSnow() {
  angle += 0.01;
  for (let i = 0; i < snowflakes.length; i++) {
    const f = snowflakes[i];
    f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
    f.x += Math.sin(angle) * 1;

    if (f.x > canvas.width + 5 || f.x < -5 || f.y > canvas.height) {
      f.x = Math.random() * canvas.width;
      f.y = -10;
    }
  }
}

let snowing = false;
let snowInterval;

document.getElementById('toggleSnow').addEventListener('click', () => {
  snowing = !snowing;
  if (snowing) {
    snowInterval = setInterval(drawSnow, 30);
  } else {
    clearInterval(snowInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});
