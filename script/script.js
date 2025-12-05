// STAGGERED TAG ENTRY
document.addEventListener("DOMContentLoaded", () => {
  const tags = document.querySelectorAll(".hero-tags .tag");
  tags.forEach((tag, index) => {
    tag.style.setProperty("--delay", `${0.4 + index * 0.15}s`);
  });
});

// PARALLAX HERO MOUSE MOVE
const hero = document.querySelector(".hero-banner-content");

if (hero) {
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });

  hero.addEventListener("mouseleave", () => {
    hero.style.backgroundPosition = "50% 50%";
  });
}

// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// FOR CONTACT PAGE
function showMessage() {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("messageBox");
  const messageText = document.getElementById("messageText");

  messageText.innerHTML =
    "Thank you for reaching out! Your message has been received. I will get back to you soon. (This is just a simulation; I did not actually receive the message.)";
  messageBox.classList.remove("hidden");
  form.reset();
}

function hideMessage() {
  document.getElementById("messageBox").classList.add("hidden");
}

// Navbar
document.querySelector("nav").addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
