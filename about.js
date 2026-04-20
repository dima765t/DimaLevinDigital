const reveals = document.querySelectorAll(".reveal");
const bar = document.querySelector(".scroll-progress");
const heroInner = document.querySelector(".hero-inner");
const langToggle = document.querySelector(".lang-toggle");

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_portfolio: "Portfolio",
    contact_cta: "Contact Us",
    hero_eyebrow: "About our studio",
    hero_title: "Design precision. Business impact.",
    hero_desc: "PurpleFlow Studio focuses on one thing: helping small businesses win online with websites that look premium and perform reliably.",
    panel_1_title: "Our approach",
    panel_1_desc: "We start by understanding your business model, then define a visual and technical architecture that supports growth.",
    panel_2_title: "Our process",
    panel_2_desc: "Discovery, wireframing, visual system, development, launch, and ongoing optimization. Each phase is clear and collaborative.",
    panel_3_title: "Our promise",
    panel_3_desc: "Every website we ship is crafted for speed, clarity, and trust so visitors can become customers faster.",
    footer_copy: "Ready to build your digital flagship? Let’s create it."
  },
  he: {
    nav_home: "דף הבית",
    nav_about: "אודות",
    nav_portfolio: "פורטפוליו",
    contact_cta: "צור קשר",
    hero_eyebrow: "על הסטודיו שלנו",
    hero_title: "דיוק בעיצוב. השפעה עסקית.",
    hero_desc: "PurpleFlow Studio מתמקד בדבר אחד: לעזור לעסקים קטנים לנצח אונליין עם אתרים שנראים פרימיום ופועלים בצורה אמינה.",
    panel_1_title: "הגישה שלנו",
    panel_1_desc: "אנחנו מתחילים בהבנת המודל העסקי שלך ואז בונים ארכיטקטורה ויזואלית וטכנית שתומכת בצמיחה.",
    panel_2_title: "תהליך העבודה",
    panel_2_desc: "אפיון, וויירפריימים, שפה חזותית, פיתוח, השקה ואופטימיזציה שוטפת. כל שלב ברור ושיתופי.",
    panel_3_title: "ההבטחה שלנו",
    panel_3_desc: "כל אתר שאנחנו משיקים בנוי למהירות, בהירות ואמון כדי להפוך מבקרים ללקוחות מהר יותר.",
    footer_copy: "מוכנים לבנות את ספינת הדגל הדיגיטלית שלכם? בואו ניצור אותה יחד."
  }
};

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
};

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
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = localStorage.getItem("siteLang") || "en";
    applyLanguage(current === "en" ? "he" : "en");
  });
}
applyLanguage(localStorage.getItem("siteLang") || "en");
updateScrollUI();
