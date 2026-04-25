/* =========================================================================
   DimaLevin Digital — About
   ========================================================================= */

(() => {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const translations = {
    en: {
      page_title: "About — DimaLevin Digital",
      meta_description: "DimaLevin Digital — a small studio obsessed with quiet details, building websites that look premium, perform reliably and convert visitors into customers.",
      nav_home: "Home",
      nav_about: "About",
      nav_portfolio: "Work",
      contact_cta: "Start a project",
      skip_link: "Skip to main content",
      footer_accessibility: "Accessibility Statement",

      hero_eyebrow: "About the studio",
      hero_title_1: "A small studio",
      hero_title_2: "obsessed",
      hero_title_3: "with",
      hero_title_4: "the quiet details.",
      hero_desc: "DimaLevin Digital exists for one reason — to give small businesses websites that look premium, perform reliably and convert visitors into customers.",

      manifesto_kicker: "Manifesto",
      manifesto_1: "We believe a website is a hard-working employee, not a billboard. It should qualify leads, tell the story, reassure the skeptic and get out of the way.",
      manifesto_2: "We believe speed is design. Typography is design. Trust is design. Every technical decision we make is a design decision.",
      manifesto_3: "We believe a studio should be small enough to care and senior enough to deliver. That's why you will always work directly with the people building your site.",

      pillars_kicker: "The approach",
      pillars_title: "Three principles that guide every decision, from kickoff to launch.",
      pillar_1_title: "Clarity over cleverness",
      pillar_1_desc: "A confused visitor is a lost customer. We lead with what a business does, for whom, and why it matters — then let the craft carry the tone.",
      pillar_2_title: "Speed as a feature",
      pillar_2_desc: "Every site ships with Core Web Vitals in the green. Hand-written code, aggressive image handling, no unnecessary JavaScript.",
      pillar_3_title: "Long after launch",
      pillar_3_desc: "Launch is day one. We monitor, iterate, and tune the site monthly — because websites should age well, not go stale.",

      timeline_kicker: "Process",
      timeline_title: "Six phases. One conversation from start to finish.",
      phase_1_title: "Discovery",
      phase_1_desc: "A short, focused workshop to map business goals, customer archetypes and competitive landscape.",
      phase_2_title: "Architecture",
      phase_2_desc: "Sitemap, user flows and wireframes. We commit to structure before we commit to style.",
      phase_3_title: "Visual system",
      phase_3_desc: "Typography, color, spacing, motion — a system that scales across every page you'll ever add.",
      phase_4_title: "Build",
      phase_4_desc: "Hand-coded, accessible, fast. Reviewed on real devices, not just the designer's laptop.",
      phase_5_title: "Launch",
      phase_5_desc: "QA, analytics wiring, SEO foundations and a calm deployment. No surprise Monday morning.",
      phase_6_title: "Evolve",
      phase_6_desc: "Ongoing care, iteration and new sections as your business changes. Month after month.",

      cta_line_1: "Think we might",
      cta_line_2: "fit your project?",
      cta_button: "Say hello on WhatsApp",

      footer_copy: "© 2026 — Crafted for ambitious small businesses."
    },
    he: {
      nav_home: "בית",
      nav_about: "אודות",
      nav_portfolio: "עבודות",
      contact_cta: "להתחיל פרויקט",

      hero_eyebrow: "על הסטודיו",
      hero_title_1: "סטודיו קטן",
      hero_title_2: "אובססיבי",
      hero_title_3: "לגבי",
      hero_title_4: "הפרטים השקטים.",
      hero_desc: "DimaLevin Digital קיים מסיבה אחת — לתת לעסקים קטנים אתרים שנראים פרימיום, פועלים בצורה אמינה והופכים מבקרים ללקוחות.",

      manifesto_kicker: "מניפסט",
      manifesto_1: "אנחנו מאמינים שאתר הוא עובד חרוץ, לא שלט חוצות. הוא צריך לסנן לידים, לספר את הסיפור, להרגיע את הספקן, ולהתפנות מהדרך.",
      manifesto_2: "אנחנו מאמינים שמהירות היא עיצוב. טיפוגרפיה היא עיצוב. אמון הוא עיצוב. כל החלטה טכנית היא החלטה עיצובית.",
      manifesto_3: "אנחנו מאמינים שסטודיו צריך להיות קטן מספיק כדי שיהיה אכפת לו, ומנוסה מספיק כדי לספק. לכן תמיד תעבדו ישירות מול האנשים שבונים את האתר שלכם.",

      pillars_kicker: "הגישה",
      pillars_title: "שלושה עקרונות שמנחים כל החלטה, מהתחלה ועד להשקה.",
      pillar_1_title: "בהירות לפני חוכמה",
      pillar_1_desc: "מבקר מבולבל הוא לקוח שאבד. אנחנו פותחים במה העסק עושה, למי, ולמה זה חשוב — ואז נותנים למלאכה לשאת את הטון.",
      pillar_2_title: "מהירות כפיצ'ר",
      pillar_2_desc: "כל אתר יוצא לאוויר עם Core Web Vitals בירוק. קוד שנכתב ביד, טיפול אגרסיבי בתמונות, בלי JavaScript מיותר.",
      pillar_3_title: "הרבה אחרי ההשקה",
      pillar_3_desc: "ההשקה היא יום אחד. אנחנו מנטרים, משפרים ומכווננים את האתר מדי חודש — כי אתרים צריכים להזדקן טוב, לא להתיישן.",

      timeline_kicker: "תהליך",
      timeline_title: "שישה שלבים. שיחה אחת מהתחלה ועד הסוף.",
      phase_1_title: "גילוי",
      phase_1_desc: "וורקשופ קצר וממוקד למיפוי מטרות עסקיות, דמויות לקוח ושדה תחרותי.",
      phase_2_title: "ארכיטקטורה",
      phase_2_desc: "מפת אתר, זרימות משתמש ו-wireframes. מתחייבים למבנה לפני שמתחייבים לסגנון.",
      phase_3_title: "שפה ויזואלית",
      phase_3_desc: "טיפוגרפיה, צבע, מרווחים, תנועה — מערכת שתגדל איתכם בכל עמוד עתידי.",
      phase_4_title: "בנייה",
      phase_4_desc: "קוד בכתב יד, נגיש ומהיר. נבדק על מכשירים אמיתיים, לא רק על הלפטופ של המעצב.",
      phase_5_title: "השקה",
      phase_5_desc: "QA, חיווט אנליטיקה, יסודות SEO, ופריסה רגועה. בלי הפתעות ביום שני בבוקר.",
      phase_6_title: "התפתחות",
      phase_6_desc: "ליווי מתמשך, איטרציות וסקשנים חדשים ככל שהעסק משתנה. חודש אחרי חודש.",

      cta_line_1: "חושבים שנוכל",
      cta_line_2: "להתאים לפרויקט שלכם?",
      cta_button: "לשלוח הודעה ב-WhatsApp",

      page_title: "אודות | דימה לוין דיגיטל",
      meta_description: "דימה לוין דיגיטל — סטודיו קטן שמעצב, בונה ומתחזק אתרים לעסקים קטנים שמקפידים על נוכחות דיגיטלית חזקה.",
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
