const revealItems = document.querySelectorAll(".reveal");
const progressBar = document.querySelector(".scroll-progress");
const hero = document.querySelector(".hero");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

const updateEffects = () => {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;

  progressBar.style.width = `${progress}%`;

  // Subtle "Apple-style" depth movement on hero elements.
  if (hero) {
    const translateValue = Math.min(scrollTop * 0.18, 100);
    hero.style.transform = `translateY(${translateValue}px)`;
  }
};

window.addEventListener("scroll", updateEffects, { passive: true });
updateEffects();
