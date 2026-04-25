/* =========================================================================
   DimaLevin Digital — Portfolio
   ========================================================================= */

(() => {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const translations = {
    en: {
      page_title: "Work — DimaLevin Digital",
      meta_description: "Selected projects by DimaLevin Digital for small businesses in hospitality, wellness, professional services and retail.",
      nav_home: "Home",
      nav_about: "About",
      nav_portfolio: "Work",
      contact_cta: "Start a project",
      skip_link: "Skip to main content",
      footer_accessibility: "Accessibility Statement",

      hero_eyebrow: "Selected work",
      hero_title_1: "Small businesses,",
      hero_title_2: "serious",
      hero_title_3: "websites.",
      hero_desc: "Four recent projects across hospitality, wellness, professional services and retail.",

      meta_projects: "Projects",
      meta_years: "Years",
      meta_sectors: "Sectors",

      p1_tag: "Hospitality",
      p1_title: "Moonlight Bistro",
      p1_desc: "A polished restaurant site with online reservations, a seasonal menu and reviews that load instantly on a 3G phone.",

      p2_tag: "Health & wellness",
      p2_title: "Flow Therapy Clinic",
      p2_desc: "A trust-centered brand presence with online booking and a content architecture built around patient questions.",

      p3_tag: "Professional services",
      p3_title: "Northline Accounting",
      p3_desc: "Modern service pages and lead-focused forms — rewritten for clarity and tuned for conversion from search traffic.",

      p4_tag: "Retail",
      p4_title: "Vela Home Decor",
      p4_desc: "Elegant product storytelling with a catalog that the client can update themselves without breaking the aesthetic.",

      view_case: "View case study",

      cta_line_1: "Your business,",
      cta_line_2: "featured here next.",
      cta_button: "Say hello on WhatsApp",

      footer_copy: "© 2026 — Crafted for ambitious small businesses."
    },
    he: {
      nav_home: "בית",
      nav_about: "אודות",
      nav_portfolio: "עבודות",
      contact_cta: "להתחיל פרויקט",

      hero_eyebrow: "עבודות נבחרות",
      hero_title_1: "עסקים קטנים,",
      hero_title_2: "אתרים",
      hero_title_3: "רציניים.",
      hero_desc: "ארבעה פרויקטים אחרונים בתחומי האירוח, הבריאות, השירותים המקצועיים והקמעונאות.",

      meta_projects: "פרויקטים",
      meta_years: "שנים",
      meta_sectors: "ענפים",

      p1_tag: "אירוח",
      p1_title: "Moonlight Bistro",
      p1_desc: "אתר מסעדה מוקפד עם הזמנות שולחן אונליין, תפריט עונתי וביקורות שנטענות מיידית גם ברשת 3G.",

      p2_tag: "בריאות ורווחה",
      p2_title: "Flow Therapy Clinic",
      p2_desc: "נוכחות מותגית מבוססת אמון עם מערכת זימון אונליין וארכיטקטורת תוכן סביב השאלות של המטופלים.",

      p3_tag: "שירותים מקצועיים",
      p3_title: "Northline Accounting",
      p3_desc: "עמודי שירות מודרניים וטפסים ממוקדי לידים — נכתבו מחדש לבהירות וכווננו להמרה מתנועת חיפוש.",

      p4_tag: "קמעונאות",
      p4_title: "Vela Home Decor",
      p4_desc: "סיפור מוצר אלגנטי עם קטלוג שהלקוח יכול לעדכן בעצמו בלי לפגוע באסתטיקה.",

      view_case: "לצפייה בתיק עבודה",

      cta_line_1: "העסק שלכם,",
      cta_line_2: "המוצג הבא כאן.",
      cta_button: "לשלוח הודעה ב-WhatsApp",

      page_title: "עבודות | דימה לוין דיגיטל",
      meta_description: "עבודות נבחרות של דימה לוין דיגיטל — פרויקטים בתחומי האירוח, הבריאות, השירותים המקצועיים והקמעונאות.",
      skip_link: "דלג לתוכן הראשי",
      footer_accessibility: "הצהרת נגישות",
      footer_copy: "© 2026 — נבנה עבור עסקים קטנים עם שאיפות גדולות."
    }
  };

  /* Language */
  const applyLanguage = (lang) => {
    const selected = translations[lang] ? lang : "en";
    try { localStorage.setItem("siteLang", selected); } catch (_) {}
    document.documentElement.lang = selected;
    document.documentElement.dir = selected === "he" ? "rtl" : "ltr";

    const t = translations[selected];
    if (t.page_title) document.title = t.page_title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl && t.meta_description) descEl.setAttribute("content", t.meta_description);

    const toggle = $(".lang-toggle");
    if (toggle) toggle.textContent = selected === "he" ? "EN" : "עב";

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = translations[selected][key];
      if (value) el.textContent = value;
    });
  };

  /* Menu */
  const header   = $(".site-header");
  const menuBtn  = $(".menu-toggle");
  const navLinks = $$(".site-nav .nav-link");

  const closeMenu = () => {
    if (!header) return;
    header.classList.remove("menu-open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  };

  if (menuBtn && header) {
    menuBtn.addEventListener("click", () => {
      const isOpen = header.classList.toggle("menu-open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
  navLinks.forEach((l) => l.addEventListener("click", closeMenu));
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 900) closeMenu(); });

  /* Reveal */
  const revealTargets = $$(".reveal, .reveal-line");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
  );
  revealTargets.forEach((t) => revealObserver.observe(t));

  /* Scroll-driven UI */
  const progressBar = $(".scroll-progress");
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y   = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (y / max) * 100 : 0;
      if (progressBar) progressBar.style.width = pct + "%";
      if (header) header.classList.toggle("is-scrolled", y > 24);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* Lang toggle + init */
  const langBtn = $(".lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const current = (() => { try { return localStorage.getItem("siteLang"); } catch (_) { return null; } })() || "en";
      applyLanguage(current === "en" ? "he" : "en");
    });
  }
  const initialLang = (() => { try { return localStorage.getItem("siteLang"); } catch (_) { return null; } })() || "he";
  applyLanguage(initialLang);
  onScroll();
})();
