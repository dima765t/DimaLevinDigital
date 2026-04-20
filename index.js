const revealItems = document.querySelectorAll(".reveal");
const progressBar = document.querySelector(".scroll-progress");
const hero = document.querySelector(".hero");
const langToggle = document.querySelector(".lang-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".site-nav .nav-link");
const storySteps = document.querySelectorAll(".story-step");
const screenStepNumber = document.querySelector(".screen-step-number");
const screenStepTitle = document.querySelector(".screen-step-title");
const screenStepDesc = document.querySelector(".screen-step-desc");

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_portfolio: "Portfolio",
    contact_cta: "Contact Us",
    hero_eyebrow: "Websites that move business forward",
    hero_title: "Outstanding web experiences for growing small businesses.",
    hero_desc: "We create, manage, and evolve modern websites that are visually bold, fast, and conversion-focused.",
    hero_btn_1: "See Portfolio",
    hero_btn_2: "How We Work",
    deliver_title: "What we deliver",
    feature_1_title: "Creation",
    feature_1_desc: "From strategy to launch, we craft digital storefronts tailored to your goals and your audience.",
    feature_2_title: "Management",
    feature_2_desc: "We keep your site healthy, updated, and secure so you can focus on your business operations.",
    feature_3_title: "Development",
    feature_3_desc: "Need growth? We continuously improve performance, UX, and SEO to support measurable outcomes.",
    story_step_1_title: "Discover & plan",
    story_step_1_desc: "We map business goals and customer intent before design begins.",
    story_step_2_title: "Design with clarity",
    story_step_2_desc: "Your brand is translated into clean, premium visuals with a clear hierarchy.",
    story_step_3_title: "Launch & optimize",
    story_step_3_desc: "We ship fast, measure behavior, and improve continuously for growth.",
    motion_title: "Tech-style visuals with smooth motion",
    motion_desc: "Inspired by modern product storytelling pages, this site uses scroll-triggered animations, layered depth, and a clean visual hierarchy.",
    stat_1: "Clients from referrals",
    stat_2: "Monitoring options",
    stat_3: "Personal collaboration",
    footer_copy: "© 2026 PurpleFlow Studio. Crafted for ambitious small businesses."
  },
  he: {
    nav_home: "דף הבית",
    nav_about: "אודות",
    nav_portfolio: "פורטפוליו",
    contact_cta: "צור קשר",
    hero_eyebrow: "אתרים שמקדמים את העסק",
    hero_title: "חוויות ווב יוצאות דופן לעסקים קטנים בצמיחה.",
    hero_desc: "אנחנו יוצרים, מנהלים ומשדרגים אתרים מודרניים בעיצוב מרשים, מהירים ובעלי מיקוד בהמרות.",
    hero_btn_1: "לצפייה בפורטפוליו",
    hero_btn_2: "איך אנחנו עובדים",
    deliver_title: "מה אנחנו מספקים",
    feature_1_title: "הקמה",
    feature_1_desc: "משלב האסטרטגיה ועד העלייה לאוויר, אנחנו בונים נכס דיגיטלי שמותאם למטרות ולקהל שלך.",
    feature_2_title: "ניהול",
    feature_2_desc: "אנחנו שומרים על האתר מעודכן, מאובטח ויציב כדי שתוכל להתמקד בניהול העסק.",
    feature_3_title: "פיתוח",
    feature_3_desc: "צריך לגדול? אנחנו משפרים באופן רציף ביצועים, חוויית משתמש ו-SEO לתוצאות מדידות.",
    story_step_1_title: "מחקר ותכנון",
    story_step_1_desc: "ממפים יעדים עסקיים וכוונת לקוח לפני שמתחילים לעצב.",
    story_step_2_title: "עיצוב ממוקד בהירות",
    story_step_2_desc: "מתרגמים את המותג שלך לשפה ויזואלית נקייה, יוקרתית וברורה.",
    story_step_3_title: "השקה ואופטימיזציה",
    story_step_3_desc: "משיקים מהר, מנתחים התנהגות ומשפרים באופן קבוע לצמיחה.",
    motion_title: "ויזואל טכנולוגי עם תנועה חלקה",
    motion_desc: "בהשראת דפי מוצר מודרניים, האתר משלב אנימציות בגלילה, עומק שכבות והיררכיה חזותית נקייה.",
    stat_1: "לקוחות מהמלצות",
    stat_2: "אפשרויות ניטור",
    stat_3: "ליווי אישי",
    footer_copy: "© 2026 PurpleFlow Studio. נבנה עבור עסקים קטנים עם שאיפות גדולות."
  }
};

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

const closeMenu = () => {
  if (!siteHeader || !menuToggle) {
    return;
  }

  siteHeader.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

if (menuToggle && siteHeader) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) {
    closeMenu();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const applyLanguage = (lang) => {
  const selected = translations[lang] ? lang : "en";
  localStorage.setItem("siteLang", selected);
  document.documentElement.lang = selected;
  document.documentElement.dir = selected === "he" ? "rtl" : "ltr";

  if (langToggle) {
    langToggle.textContent = selected === "he" ? "EN" : "עב";
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = translations[selected][key];
    if (value) {
      element.textContent = value;
    }
  });

  updateStoryDisplay();
};

const updateStoryDisplay = () => {
  const activeStep = document.querySelector(".story-step.is-active");
  if (!activeStep || !screenStepTitle || !screenStepDesc || !screenStepNumber) {
    return;
  }

  const stepIndex = Number(activeStep.getAttribute("data-step")) || 1;
  const lang = localStorage.getItem("siteLang") || "en";
  const titleKey = `story_step_${stepIndex}_title`;
  const descKey = `story_step_${stepIndex}_desc`;
  screenStepNumber.textContent = `0${stepIndex}`;
  screenStepTitle.textContent = translations[lang][titleKey];
  screenStepDesc.textContent = translations[lang][descKey];
};

const updateActiveStoryStep = () => {
  if (!storySteps.length) {
    return;
  }

  let closest = storySteps[0];
  let minDistance = Number.POSITIVE_INFINITY;

  storySteps.forEach((step) => {
    const rect = step.getBoundingClientRect();
    const distance = Math.abs(rect.top - window.innerHeight * 0.35);
    if (distance < minDistance) {
      minDistance = distance;
      closest = step;
    }
  });

  storySteps.forEach((step) => step.classList.remove("is-active"));
  closest.classList.add("is-active");
  updateStoryDisplay();
};

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

  updateActiveStoryStep();
};

window.addEventListener("scroll", updateEffects, { passive: true });
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = localStorage.getItem("siteLang") || "en";
    applyLanguage(current === "en" ? "he" : "en");
  });
}

applyLanguage(localStorage.getItem("siteLang") || "en");
updateEffects();
