/* ======================
   THEME TOGGLE
====================== */
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ======================
   CURSOR GLOW FOLLOW
====================== */
const glow = document.querySelector(".cursor-glow");
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlow() {
  currentX += (mouseX - currentX) * 0.12;
  currentY += (mouseY - currentY) * 0.12;
  glow.style.left = currentX + "px";
  glow.style.top = currentY + "px";
  requestAnimationFrame(animateGlow);
}
animateGlow();

/* ======================
   SKILL PROGRESS (SCROLL)
====================== */
const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const value = entry.target.dataset.progress;
        entry.target.style.width = value + "%";
      }
    });
  },
  { threshold: 0.5 }
);

skillBars.forEach(bar => skillObserver.observe(bar));

/* ======================
   TIMELINE ANIMATION
====================== */
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.4 }
);

timelineItems.forEach(item => timelineObserver.observe(item));

/* ======================
   SECTION FADE-IN
====================== */
const sections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(sec => sectionObserver.observe(sec));
