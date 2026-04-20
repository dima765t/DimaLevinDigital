const revealTargets = document.querySelectorAll(".reveal");
const scrollProgress = document.querySelector(".scroll-progress");
const heroContent = document.querySelector(".hero-content");
const langToggle = document.querySelector(".lang-toggle");

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_portfolio: "Portfolio",
    contact_cta: "Contact Us",
    hero_eyebrow: "Selected work",
    hero_title: "Projects built to help local businesses grow online.",
    hero_desc: "Each project combines visual storytelling, performance engineering, and business-driven UX.",
    p1_tag: "Hospitality",
    p1_title: "Moonlight Bistro",
    p1_desc: "A polished restaurant site with online reservations and seasonal menu updates.",
    p2_tag: "Health & Wellness",
    p2_title: "Flow Therapy Clinic",
    p2_desc: "Trust-centered brand presence with service booking and educational content architecture.",
    p3_tag: "Professional Services",
    p3_title: "Northline Accounting",
    p3_desc: "Modern service pages with lead-focused forms, optimized for clarity and conversion.",
    p4_tag: "Retail",
    p4_title: "Vela Home Decor",
    p4_desc: "Elegant product storytelling page that supports rapid catalog updates and promotions.",
    footer_copy: "Want your business featured here next? Let’s build it together."
  },
  he: {
    nav_home: "דף הבית",
    nav_about: "אודות",
    nav_portfolio: "פורטפוליו",
    contact_cta: "צור קשר",
    hero_eyebrow: "עבודות נבחרות",
    hero_title: "פרויקטים שנבנו כדי לעזור לעסקים מקומיים לצמוח אונליין.",
    hero_desc: "כל פרויקט משלב סיפור ויזואלי, הנדסת ביצועים וחוויית משתמש עם מטרות עסקיות.",
    p1_tag: "אירוח",
    p1_title: "Moonlight Bistro",
    p1_desc: "אתר מסעדה מלוטש עם הזמנות אונליין ועדכוני תפריט עונתיים.",
    p2_tag: "בריאות ולייף-סטייל",
    p2_title: "Flow Therapy Clinic",
    p2_desc: "נוכחות מותגית מבוססת אמון עם הזמנת שירותים וארכיטקטורת תוכן חינוכית.",
    p3_tag: "שירותים מקצועיים",
    p3_title: "Northline Accounting",
    p3_desc: "עמודי שירות מודרניים עם טפסים ממוקדי לידים, מותאמים לבהירות ולהמרה.",
    p4_tag: "קמעונאות",
    p4_title: "Vela Home Decor",
    p4_desc: "עמוד סיפור מוצר אלגנטי שמאפשר עדכוני קטלוג ומבצעים במהירות.",
    footer_copy: "רוצים שהעסק שלכם יופיע כאן הבא בתור? בואו נבנה את זה יחד."
  }
};

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
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = localStorage.getItem("siteLang") || "en";
    applyLanguage(current === "en" ? "he" : "en");
  });
}
applyLanguage(localStorage.getItem("siteLang") || "en");
onScroll();
