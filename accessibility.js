/* =========================================================================
   DimaLevin Digital — Accessibility Statement
   ========================================================================= */

(() => {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------------------------------------------------------------------
     i18n dictionary
     --------------------------------------------------------------------- */
  const translations = {
    en: {
      page_title: "Accessibility Statement — DimaLevin Digital",
      meta_description: "DimaLevin Digital accessibility statement in accordance with Israeli Standard IS 5568 and the Equal Rights for Persons with Disabilities Law.",
      nav_home: "Home",
      nav_about: "About",
      nav_portfolio: "Work",
      contact_cta: "Start a project",
      skip_link: "Skip to main content",

      hero_eyebrow: "Accessibility",
      hero_title: "Accessibility Statement",
      hero_desc: "DimaLevin Digital is committed to making this website accessible and usable for everyone, including people with disabilities.",

      s1_kicker: "Legal basis",
      s1_head: "Israeli accessibility law",
      s1_body: "This website operates in accordance with the Equal Rights for Persons with Disabilities Law (5758-1998) and the Equal Rights for Persons with Disabilities Regulations (Service Accessibility Adjustments) (5773-2013). We strive to conform to Level AA of Israeli Standard IS 5568, which is based on WCAG 2.0 Level AA.",

      s2_kicker: "Status",
      s2_head: "Conformance level",
      s2_status_label: "Partial conformance",
      s2_body: "This website partially conforms to WCAG 2.0 Level AA. Some content or functionality may not yet fully meet all criteria.",

      s3_kicker: "What we've done",
      s3_head: "Accessibility measures",
      s3_intro: "The following accessibility features are implemented across this site:",
      s3_item_1: "Semantic HTML5 structure with logical heading hierarchy",
      s3_item_2: "ARIA landmark roles, labels and descriptions throughout",
      s3_item_3: "Full keyboard navigation support",
      s3_item_4: "Language and reading-direction attributes for Hebrew (RTL) and English (LTR)",
      s3_item_5: "Descriptive alternative text on all meaningful images",
      s3_item_6: "Sufficient color contrast ratios",
      s3_item_7: "Responsive layout for all screen sizes and zoom levels",
      s3_item_8: "Reduced motion support (respects prefers-reduced-motion)",
      s3_item_9: "Visible focus indicators for keyboard users",
      s3_item_10: "Skip-to-main-content link on every page",

      s4_kicker: "Limitations",
      s4_head: "Known limitations",
      s4_body: "Third-party services integrated into this site — including external fonts (Google Fonts) and linked platforms (WhatsApp) — may not fully meet all accessibility requirements. These are outside our direct control. We continue to review and improve the site's accessibility on an ongoing basis.",

      s5_kicker: "Contact",
      s5_head: "Accessibility feedback",
      s5_body: "If you encounter any accessibility barriers on this website, or if you need content in an alternative format, please contact us — we will do our best to respond promptly and address the issue.",
      s5_name_label: "Accessibility coordinator",
      s5_name_value: "Dima Levin",
      s5_email_label: "Email",
      s5_email_link: "dima765t@gmail.com",
      s5_response_label: "Response time",
      s5_response_value: "Within 2 business days",

      s6_kicker: "Statement",
      s6_head: "Date of this statement",
      s6_issued: "Statement issued:",
      s6_issued_value: "April 2026",
      s6_reviewed: "Last reviewed:",
      s6_reviewed_value: "April 2026",

      footer_accessibility: "Accessibility Statement",
      footer_copy: "© 2026 — Crafted for ambitious small businesses."
    },
    he: {
      nav_home: "בית",
      nav_about: "אודות",
      nav_portfolio: "עבודות",
      contact_cta: "להתחיל פרויקט",
      page_title: "הצהרת נגישות | דימה לוין דיגיטל",
      meta_description: "הצהרת נגישות של דימה לוין דיגיטל בהתאם לתקן ישראלי 5568 וחוק שוויון זכויות לאנשים עם מוגבלות, תשנ\"ח-1998.",
      skip_link: "דלג לתוכן הראשי",

      hero_eyebrow: "נגישות",
      hero_title: "הצהרת נגישות",
      hero_desc: "DimaLevin Digital מחויבת להנגשת אתר זה לאנשים עם מוגבלות ולכל משתמש.",

      s1_kicker: "בסיס חוקי",
      s1_head: "חוק הנגישות הישראלי",
      s1_body: "אתר זה פועל בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, תשנ\"ח-1998, ותקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע\"ג-2013. אנחנו שואפים לעמוד בדרישות תקן ישראלי 5568 ברמת AA, המבוסס על הנחיות נגישות לתוכן אינטרנט WCAG 2.0 ברמת AA.",

      s2_kicker: "מצב נוכחי",
      s2_head: "רמת תאימות",
      s2_status_label: "תאימות חלקית",
      s2_body: "אתר זה עומד חלקית בדרישות WCAG 2.0 ברמת AA. חלק מהתכנים או הפונקציות עשויים שלא לעמוד בכל הקריטריונים במלואם.",

      s3_kicker: "מה עשינו",
      s3_head: "התאמות נגישות",
      s3_intro: "ההתאמות הבאות מיושמות לאורך כל האתר:",
      s3_item_1: "מבנה HTML5 סמנטי עם היררכיית כותרות הגיונית",
      s3_item_2: "תגיות ARIA לנקודות ציון, תוויות ותיאורים",
      s3_item_3: "תמיכה מלאה בניווט באמצעות מקלדת",
      s3_item_4: "מאפייני שפה וכיוון קריאה לעברית (ימין-לשמאל) ואנגלית (שמאל-לימין)",
      s3_item_5: "טקסט חלופי תיאורי לכל התמונות המשמעותיות",
      s3_item_6: "יחסי ניגודיות צבעים מספקים",
      s3_item_7: "עיצוב רספונסיבי לכל גדלי המסך ורמות הזום",
      s3_item_8: "תמיכה בהגדרת הפחתת תנועה (prefers-reduced-motion)",
      s3_item_9: "אינדיקטורי פוקוס גלויים למשתמשי מקלדת",
      s3_item_10: "קישור \"דלג לתוכן הראשי\" בכל עמוד",

      s4_kicker: "מגבלות",
      s4_head: "מגבלות ידועות",
      s4_body: "שירותי צד שלישי המשולבים באתר — כולל גופנים חיצוניים (Google Fonts) ופלטפורמות מקושרות (WhatsApp) — עשויים לא לעמוד בכל דרישות הנגישות; אלה אינם בשליטתנו הישירה. אנו פועלים לשיפור מתמיד של רמת הנגישות.",

      s5_kicker: "פנייה",
      s5_head: "פנייה בנושא נגישות",
      s5_body: "נתקלתם במחסום נגישות באתר, או שתוכן מסוים אינו נגיש לכם? אנא פנו אלינו — נשתדל להגיב בהקדם ולפתור את הבעיה.",
      s5_name_label: "רכז/ת נגישות",
      s5_name_value: "Dima Levin",
      s5_email_label: "דואר אלקטרוני",
      s5_email_link: "dima765t@gmail.com",
      s5_response_label: "זמן תגובה",
      s5_response_value: "תוך 2 ימי עסקים",

      s6_kicker: "מסמך",
      s6_head: "תאריך ההצהרה",
      s6_issued: "תאריך הוצאת ההצהרה:",
      s6_issued_value: "אפריל 2026",
      s6_reviewed: "תאריך בדיקה אחרון:",
      s6_reviewed_value: "אפריל 2026",

      footer_accessibility: "הצהרת נגישות",
      footer_copy: "© 2026 — נבנה עבור עסקים קטנים עם שאיפות גדולות."
    }
  };

  /* ---------------------------------------------------------------------
     Language
     --------------------------------------------------------------------- */
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

  /* ---------------------------------------------------------------------
     Mobile menu
     --------------------------------------------------------------------- */
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

  /* ---------------------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------------------- */
  const revealTargets = $$(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
  );
  revealTargets.forEach((t) => revealObserver.observe(t));

  /* ---------------------------------------------------------------------
     Scroll-driven UI (progress bar + header state)
     --------------------------------------------------------------------- */
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

  /* ---------------------------------------------------------------------
     Lang toggle + init
     --------------------------------------------------------------------- */
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
