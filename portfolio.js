const revealTargets = document.querySelectorAll(".reveal");
const scrollProgress = document.querySelector(".scroll-progress");
const heroContent = document.querySelector(".hero-content");

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealTargets.forEach((node) => cardObserver.observe(node));

const onScroll = () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const width = max > 0 ? (y / max) * 100 : 0;
  scrollProgress.style.width = `${width}%`;

  if (heroContent) {
    const depth = Math.min(y * 0.1, 70);
    heroContent.style.transform = `translateY(${depth}px)`;
  }
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
