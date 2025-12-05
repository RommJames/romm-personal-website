/* ---------- FLYING LETTER TYPEWRITER ---------- */
const text = "Welcome to the World of Romm";
const container = document.getElementById("loading-text");

let i = 0;
function flyType() {
  if (i < text.length) {
    const span = document.createElement("span");

    span.innerHTML = text[i] === " " ? "&nbsp;" : text[i].toUpperCase();

    span.style.animationDelay = i * 0.04 + "s";
    container.appendChild(span);

    i++;
    setTimeout(flyType, 40);
  }
}
flyType();

/* ---------- GALAXY PARTICLE BACKGROUND ---------- */
const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const stars = [];

class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.4 + 0.1;
  }

  draw() {
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#f7d540";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.y -= this.speed;
    if (this.y < 0) this.y = canvas.height;
  }
}

for (let x = 0; x < 150; x++) stars.push(new Star());

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((s) => {
    s.update();
    s.draw();
  });

  requestAnimationFrame(animateStars);
}
animateStars();
