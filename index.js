/* =========================================================================
   PurpleFlow Studio — Home
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
      nav_home: "Home",
      nav_about: "About",
      nav_portfolio: "Work",
      contact_cta: "Start a project",

      hero_eyebrow_text: "Independent web studio — Tel Aviv",
      hero_title_1: "Websites that",
      hero_title_2: "quietly",
      hero_title_3: "do",
      hero_title_4: "the heavy lifting.",
      hero_desc: "We design, build and maintain editorial websites for small businesses — considered, fast, and measurably better for revenue.",
      hero_btn_1: "See the work",
      hero_btn_2: "How we work",

      deliver_kicker: "What we deliver",
      deliver_title: "Three services, tuned to the life cycle of a small business website.",
      feature_1_title: "Creation",
      feature_1_desc: "From positioning to launch — a digital storefront built around the exact customer you want to reach.",
      feature_2_title: "Management",
      feature_2_desc: "Hosting, updates, backups, monitoring. The quiet infrastructure that lets you stop thinking about your website.",
      feature_3_title: "Development",
      feature_3_desc: "Continuous improvements to speed, UX and SEO — always grounded in measurable outcomes.",

      story_kicker: "Process",
      story_step_1_title: "Discover & plan",
      story_step_1_desc: "We map business goals and customer intent before a single pixel is drawn.",
      story_step_2_title: "Design with clarity",
      story_step_2_desc: "Your brand becomes a calm, confident visual system — with a hierarchy the user feels before they read.",
      story_step_3_title: "Build & ship",
      story_step_3_desc: "Hand-written, accessible code. Core Web Vitals in the green from day one.",
      story_step_4_title: "Measure & evolve",
      story_step_4_desc: "Launch is the start. Every month we review behavior data and make the site a little sharper.",

      stat_1: "of new clients arrive through referrals.",
      stat_2: "monitoring and uptime coverage.",
      stat_3: "senior-led collaboration, no account layers.",

      cta_line_1: "Let's build",
      cta_line_2: "something quietly excellent.",
      cta_button: "Start a conversation",

      footer_copy: "© 2026 — Crafted for ambitious small businesses."
    },
    he: {
      nav_home: "בית",
      nav_about: "אודות",
      nav_portfolio: "עבודות",
      contact_cta: "להתחיל פרויקט",

      hero_eyebrow_text: "סטודיו עצמאי לאתרים — תל אביב",
      hero_title_1: "אתרים",
      hero_title_2: "שבשקט",
      hero_title_3: "עושים",
      hero_title_4: "את כל העבודה.",
      hero_desc: "מעצבים, בונים ומתחזקים אתרים מוקפדים לעסקים קטנים — מעודנים, מהירים, ומדידים מבחינת הכנסות.",
      hero_btn_1: "לצפייה בעבודות",
      hero_btn_2: "איך עובדים",

      deliver_kicker: "מה אנחנו מספקים",
      deliver_title: "שלושה שירותים, מותאמים למחזור החיים של אתר עסק קטן.",
      feature_1_title: "הקמה",
      feature_1_desc: "מהמיצוב ועד להשקה — חלון ראווה דיגיטלי שנבנה סביב הלקוח המדויק שאליו אתם פונים.",
      feature_2_title: "ניהול",
      feature_2_desc: "אחסון, עדכונים, גיבויים, ניטור. התשתית השקטה שמאפשרת לכם להפסיק לחשוב על האתר.",
      feature_3_title: "פיתוח",
      feature_3_desc: "שיפור מתמשך של מהירות, חוויית משתמש ו-SEO — תמיד מעוגן בתוצאות מדידות.",

      story_kicker: "תהליך",
      story_step_1_title: "מחקר ותכנון",
      story_step_1_desc: "ממפים את מטרות העסק ואת כוונת הלקוח עוד לפני שמציירים פיקסל אחד.",
      story_step_2_title: "עיצוב ברור",
      story_step_2_desc: "המותג שלכם הופך לשפה חזותית רגועה ובטוחה — עם היררכיה שמרגישים עוד לפני שקוראים.",
      story_step_3_title: "בנייה והשקה",
      story_step_3_desc: "קוד שנכתב ביד, נגיש ומהיר. Core Web Vitals בירוק מהיום הראשון.",
      story_step_4_title: "מדידה ושיפור",
      story_step_4_desc: "ההשקה היא רק ההתחלה. בכל חודש אנחנו בוחנים נתונים ומשפרים את האתר עוד קצת.",

      stat_1: "מהלקוחות החדשים מגיעים מהמלצות.",
      stat_2: "ניטור וזמינות ברציפות.",
      stat_3: "ליווי אישי, בלי שכבות ניהול.",

      cta_line_1: "בואו נבנה",
      cta_line_2: "משהו מצוין בשקט.",
      cta_button: "לפתוח בשיחה",

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

    const toggle = $(".lang-toggle");
    if (toggle) toggle.textContent = selected === "he" ? "EN" : "עב";

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = translations[selected][key];
      if (value) el.textContent = value;
    });

    $$("[data-i18n-text]").forEach((el) => {
      const parent = el.closest("[data-i18n-parent], .eyebrow");
      if (!parent) return;
      const key = "hero_eyebrow_text";
      const value = translations[selected][key];
      if (value) el.textContent = value;
    });

    // Refresh story stage (in case Hebrew was just loaded)
    updateStoryDisplay(getActiveStep());
  };

  /* ---------------------------------------------------------------------
     Mobile menu
     --------------------------------------------------------------------- */
  const header    = $(".site-header");
  const menuBtn   = $(".menu-toggle");
  const navLinks  = $$(".site-nav .nav-link");

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
     Reveal on scroll (IntersectionObserver)
     --------------------------------------------------------------------- */
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

  /* ---------------------------------------------------------------------
     Story / process — clickable + scroll-synced stage
     --------------------------------------------------------------------- */
  const storySteps = $$(".story-step");
  const storyCards = $$(".story-card");

  const getActiveStep = () => {
    const act = storySteps.find((s) => s.classList.contains("is-active"));
    return act ? Number(act.dataset.step) || 1 : 1;
  };

  const setActiveStep = (index) => {
    storySteps.forEach((s) => s.classList.toggle("is-active", Number(s.dataset.step) === index));
    updateStoryDisplay(index);
  };

  function updateStoryDisplay(index) {
    storyCards.forEach((c) => c.classList.toggle("is-active", Number(c.dataset.slide) === index));
  }

  storySteps.forEach((step) => {
    step.addEventListener("click", () => setActiveStep(Number(step.dataset.step) || 1));
  });

  /* ---------------------------------------------------------------------
     Count-up stats
     --------------------------------------------------------------------- */
  const countUp = (el) => {
    const target = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  $$(".stat-number[data-count]").forEach((n) => countObserver.observe(n));

  /* ---------------------------------------------------------------------
     Scroll-driven UI (progress bar, header state, story sync, orb parallax)
     ---------------------------------------------------------------------
     Single rAF loop. No janky scroll-event thrash. */
  const progressBar = $(".scroll-progress");
  const orbA        = $(".orb-a");
  const orbB        = $(".orb-b");
  const storySection = $(".story");

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y     = window.scrollY;
      const max   = document.documentElement.scrollHeight - window.innerHeight;
      const pct   = max > 0 ? (y / max) * 100 : 0;

      if (progressBar) progressBar.style.width = pct + "%";

      if (header) header.classList.toggle("is-scrolled", y > 24);

      if (orbA) orbA.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
      if (orbB) orbB.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;

      // Sync story stage with scroll position through the story section
      if (storySection && storySteps.length) {
        const rect = storySection.getBoundingClientRect();
        const total = rect.height - window.innerHeight * 0.6;
        if (total > 0 && rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
          const passed = Math.min(Math.max(-rect.top + window.innerHeight * 0.4, 0), total);
          const ratio  = passed / total;
          const idx    = Math.min(
            storySteps.length,
            Math.max(1, Math.floor(ratio * storySteps.length) + 1)
          );
          if (idx !== getActiveStep()) setActiveStep(idx);
        }
      }

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

  const initialLang = (() => { try { return localStorage.getItem("siteLang"); } catch (_) { return null; } })() || "en";
  applyLanguage(initialLang);
  onScroll();
})();
