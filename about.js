const reveals = document.querySelectorAll(".reveal");
const bar = document.querySelector(".scroll-progress");
const heroInner = document.querySelector(".hero-inner");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.25 }
);

reveals.forEach((item) => revealObserver.observe(item));

const updateScrollUI = () => {
  const top = window.scrollY;
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percent = available > 0 ? (top / available) * 100 : 0;
  bar.style.width = `${percent}%`;

  if (heroInner) {
    const shift = Math.min(top * 0.12, 80);
    heroInner.style.transform = `translateY(${shift}px)`;
  }
};

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();
