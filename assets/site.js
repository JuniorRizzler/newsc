(() => {
  const tokenRoutes = {
    "{{DATA:SCREEN:SCREEN_5}}": "curation.html",
    "{{DATA:SCREEN:SCREEN_12}}": "membership.html",
    "{{DATA:SCREEN:SCREEN_13}}": "profile.html",
    "{{DATA:SCREEN:SCREEN_18}}": "settings.html",
    "{{DATA:SCREEN:SCREEN_21}}": "dashboard.html",
    "{{DATA:SCREEN:SCREEN_24}}": "research.html",
    "{{DATA:SCREEN:SCREEN_32}}": "discover.html",
    "{{DATA:SCREEN:SCREEN_33}}": "library.html",
    "{{DATA:SCREEN:SCREEN_37}}": "analytics.html"
  };

  const exactRoutes = new Map([
    ["home", "index.html"],
    ["discover", "discover.html"],
    ["dashboard", "dashboard.html"],
    ["overview", "dashboard.html"],
    ["library", "library.html"],
    ["subjects", "subjects.html"],
    ["subject library", "library.html"],
    ["all subjects", "library.html"],
    ["featured", "disciplines.html"],
    ["recent activity", "dashboard.html"],
    ["saved modules", "library.html"],
    ["research", "research.html"],
    ["network", "profile.html"],
    ["archive", "archive.html"],
    ["curation", "curation.html"],
    ["curations", "curation.html"],
    ["profile", "profile.html"],
    ["settings", "settings.html"],
    ["achievements", "achievements.html"],
    ["subscriptions", "membership.html"],
    ["membership", "membership.html"],
    ["insights", "analytics.html"],
    ["analytics", "analytics.html"],
    ["academic precision", "concept-academic-precision.html"],
    ["anthemis pro", "concept-anthemis-pro.html"],
    ["scholar vibrant", "concept-scholar-vibrant.html"],
    ["flashcards", "grade-9-advanced.html"],
    ["exam prep", "schedule.html"],
    ["quiz", "schedule.html"],
    ["support", "settings.html#support"],
    ["help center", "settings.html#support"],
    ["sign out", "index.html"],
    ["contact", "settings.html#support"],
    ["grade 8", "discover.html"],
    ["grade 9", "grade-9.html"],
    ["grade 10", "grade-10.html"],
    ["grade 11", "grade-11.html"],
    ["grade 12", "grade-12.html"],
    ["view all subjects", "subjects.html"],
    ["start study session", "dashboard.html"],
    ["explore library", "library.html"],
    ["enter library", "library.html"],
    ["establish access", "membership.html"],
    ["view the manifesto", "discover.html"],
    ["request research assistant", "research.html"],
    ["upgrade to premium", "membership.html"],
    ["upgrade to fellow", "membership.html"],
    ["complete secure checkout", "membership.html"],
    ["deep dive", "analytics-overview.html"],
    ["view archive", "archive.html"],
    ["clear completed", "dashboard.html"],
    ["terms of knowledge", "membership.html"],
    ["terms of research", "membership.html"],
    ["curator privacy", "settings.html"],
    ["privacy policy", "settings.html"],
    ["institutional access", "membership.html"]
  ]);

  const topLinks = [
    { href: "discover.html", label: "Discover" },
    { href: "dashboard.html", label: "Dashboard" },
    { href: "library.html", label: "Library" },
    { href: "research.html", label: "Research" },
    { href: "analytics.html", label: "Analytics" }
  ];

  const sideLinks = [
    { href: "index.html", label: "Home", icon: "home" },
    { href: "dashboard.html", label: "Overview", icon: "dashboard" },
    { href: "library.html", label: "Library", icon: "auto_stories" },
    { href: "analytics.html", label: "Analytics", icon: "analytics" },
    { href: "research.html", label: "Research", icon: "biotech" },
    { href: "curriculum.html", label: "Curriculum", icon: "school" },
    { href: "schedule.html", label: "Planner", icon: "event_note" },
    { href: "achievements.html", label: "Achievements", icon: "military_tech" },
    { href: "membership.html", label: "Membership", icon: "workspace_premium" }
  ];

  const secondaryLinks = [
    { href: "profile.html", label: "Profile", icon: "account_circle" },
    { href: "settings.html", label: "Settings", icon: "settings" }
  ];

  const pageMeta = {
    "index.html": { title: "Home", kicker: "Soul Concept" },
    "discover.html": { title: "Discover", kicker: "Editorial Home" },
    "dashboard.html": { title: "Dashboard", kicker: "Scholar Workspace" },
    "library.html": { title: "Library", kicker: "Subject Collections" },
    "subjects.html": { title: "Subjects", kicker: "Library Index" },
    "disciplines.html": { title: "Disciplines", kicker: "Academic Catalog" },
    "grade-9.html": { title: "Grade 9", kicker: "Core Modules" },
    "grade-9-alt.html": { title: "Grade 9 Studio", kicker: "Focused Library" },
    "grade-9-studio.html": { title: "Grade 9 Archive", kicker: "Subject View" },
    "grade-9-advanced.html": { title: "Advanced Library", kicker: "Flashcards" },
    "grade-10.html": { title: "Grade 10", kicker: "Expanded Curriculum" },
    "grade-11.html": { title: "Grade 11", kicker: "Upper School" },
    "grade-12.html": { title: "Grade 12", kicker: "Senior Modules" },
    "research.html": { title: "Research", kicker: "Repository" },
    "archive.html": { title: "Archive", kicker: "Manuscripts" },
    "archive-classic.html": { title: "Archive Classic", kicker: "Historical Collection" },
    "curation.html": { title: "Curation", kicker: "Editorial Console" },
    "analytics.html": { title: "Analytics", kicker: "Scholar Metrics" },
    "analytics-overview.html": { title: "Analytics Deep Dive", kicker: "Performance Review" },
    "achievements.html": { title: "Achievements", kicker: "Scholar Profile" },
    "profile.html": { title: "Profile", kicker: "Academic Identity" },
    "settings.html": { title: "Settings", kicker: "Account Controls" },
    "membership.html": { title: "Membership", kicker: "Plans and Access" },
    "schedule.html": { title: "Planner", kicker: "Study Scheduler" },
    "curriculum.html": { title: "Curriculum", kicker: "Program Flow" },
    "concept-academic-precision.html": { title: "Academic Precision", kicker: "Design Concept" },
    "concept-anthemis-pro.html": { title: "Anthemis Pro", kicker: "Design Concept" },
    "concept-scholar-vibrant.html": { title: "Scholar Vibrant", kicker: "Design Concept" }
  };

  function normalize(text) {
    return (text || "")
      .replace(/\s+/g, " ")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .toLowerCase();
  }

  function ensureStylesheet() {
    if (document.querySelector('link[href="assets/site.css"]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "assets/site.css";
    document.head.appendChild(link);
  }

  function ensureFonts() {
    if (!document.querySelector('link[data-sc-fonts="preconnect-a"]')) {
      const preconnectA = document.createElement("link");
      preconnectA.rel = "preconnect";
      preconnectA.href = "https://fonts.googleapis.com";
      preconnectA.dataset.scFonts = "preconnect-a";
      document.head.appendChild(preconnectA);
    }

    if (!document.querySelector('link[data-sc-fonts="preconnect-b"]')) {
      const preconnectB = document.createElement("link");
      preconnectB.rel = "preconnect";
      preconnectB.href = "https://fonts.gstatic.com";
      preconnectB.crossOrigin = "anonymous";
      preconnectB.dataset.scFonts = "preconnect-b";
      document.head.appendChild(preconnectB);
    }

    if (document.querySelector('link[data-sc-fonts="main"]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=DM+Sans:wght@400;500;700&display=swap";
    link.dataset.scFonts = "main";
    document.head.appendChild(link);
  }

  function hydrateIcons(root = document) {
    root.querySelectorAll(".material-symbols-outlined").forEach((icon) => {
      const dataIcon = icon.dataset.icon;
      if (dataIcon && !icon.textContent.trim()) {
        icon.textContent = dataIcon;
      }
      if (icon.textContent.includes("Ã¢")) {
        icon.textContent = dataIcon || "circle";
      }
    });
  }

  function routeFromKeyword(text) {
    const label = normalize(text);
    if (!label) return "";
    if (exactRoutes.has(label)) return exactRoutes.get(label);
    if (label.includes("science")) return "grade-9.html";
    if (label.includes("geography")) return "grade-9-alt.html";
    if (label.includes("mathematics") || label.includes("math")) return "grade-10.html";
    if (label.includes("history")) return "curriculum.html";
    if (label.includes("research")) return "research.html";
    if (label.includes("archive")) return "archive.html";
    if (label.includes("analytics")) return "analytics.html";
    if (label.includes("profile")) return "profile.html";
    if (label.includes("settings")) return "settings.html";
    if (label.includes("membership") || label.includes("premium") || label.includes("checkout")) return "membership.html";
    if (label.includes("scheduler") || label.includes("calendar") || label.includes("plan")) return "schedule.html";
    if (label.includes("curriculum")) return "curriculum.html";
    return "";
  }

  function contextualRoute(el) {
    const ownText = el.getAttribute("aria-label") || el.textContent || "";
    let route = routeFromKeyword(ownText);
    if (route) return route;
    const card = el.closest("article, section, div");
    if (!card) return "";
    const heading = card.querySelector("h1, h2, h3, h4, h5, h6");
    route = routeFromKeyword(heading && heading.textContent);
    return route || "";
  }

  function replaceTokens(value) {
    let next = value || "";
    Object.entries(tokenRoutes).forEach(([token, route]) => {
      next = next.split(token).join(route);
    });
    return next;
  }

  function setButtonRoute(button, route) {
    if (!route) return;
    button.dataset.route = route;
    button.addEventListener("click", () => {
      window.location.href = route;
    });
  }

  function wireRoutes() {
    document.querySelectorAll("a").forEach((anchor) => {
      const href = anchor.getAttribute("href");
      const route = contextualRoute(anchor);
      if (href && href.includes("{{DATA:SCREEN:")) {
        anchor.setAttribute("href", replaceTokens(href));
      } else if (!href || href === "#" || href === "") {
        anchor.setAttribute("href", route || "index.html");
      }
    });

    document.querySelectorAll("button").forEach((button) => {
      const onclick = button.getAttribute("onclick");
      const route = contextualRoute(button);
      if (onclick && onclick.includes("{{DATA:SCREEN:")) {
        button.setAttribute("onclick", replaceTokens(onclick));
      } else if (!onclick && route) {
        setButtonRoute(button, route);
      }
    });

    document.querySelectorAll("[onclick]").forEach((node) => {
      const onclick = node.getAttribute("onclick");
      if (onclick && onclick.includes("{{DATA:SCREEN:")) {
        node.setAttribute("onclick", replaceTokens(onclick));
      }
    });
  }

  function currentPath() {
    const value = window.location.pathname.split("/").pop();
    return value || "index.html";
  }

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function activeMatch(href, pathname) {
    if (pathname === "index.html" && href === "index.html") return true;
    if (href === pathname) return true;
    if (href === "library.html" && ["subjects.html", "disciplines.html"].includes(pathname)) return true;
    if (href === "research.html" && ["archive.html", "archive-classic.html", "curation.html"].includes(pathname)) return true;
    if (href === "membership.html" && pathname === "settings.html") return false;
    return false;
  }

  function buildShell() {
    const pathname = currentPath();
    const meta = pageMeta[pathname] || {
      title: document.title.replace(/^Soul Concept\s*\|\s*/i, "") || "Soul Concept",
      kicker: "Connected Site"
    };

    const topLinksHtml = topLinks
      .map((item) => `<a href="${item.href}"${activeMatch(item.href, pathname) ? ' aria-current="page"' : ""}>${escapeHtml(item.label)}</a>`)
      .join("");

    const sideLinksHtml = sideLinks
      .map((item) => `<a class="sc-shell-link" href="${item.href}" data-active="${activeMatch(item.href, pathname)}"><span class="material-symbols-outlined">${item.icon}</span><span>${escapeHtml(item.label)}</span></a>`)
      .join("");

    const secondaryLinksHtml = secondaryLinks
      .map((item) => `<a class="sc-shell-link" href="${item.href}" data-active="${activeMatch(item.href, pathname)}"><span class="material-symbols-outlined">${item.icon}</span><span>${escapeHtml(item.label)}</span></a>`)
      .join("");

    const shell = document.createElement("div");
    shell.innerHTML = `
      <div class="sc-shell-scrim" data-sc-shell-close></div>
      <aside class="sc-shell-sidebar" aria-label="Primary navigation">
        <div class="sc-shell-sidebar-head">
          <a class="sc-shell-brand" href="index.html">
            <span class="sc-shell-brandmark"><span class="material-symbols-outlined">school</span></span>
            <span class="sc-shell-brandtext">Soul Concept</span>
          </a>
          <button class="sc-shell-iconbtn sc-shell-close" type="button" aria-label="Close navigation" data-sc-shell-close>
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="sc-shell-profile">
          <span class="sc-shell-profile-name">Academic Curator</span>
          <span class="sc-shell-profile-meta">Unified Scholar Portal</span>
        </div>
        <nav class="sc-shell-nav">${sideLinksHtml}</nav>
        <div class="sc-shell-sidebar-foot">
          <nav class="sc-shell-nav-secondary">${secondaryLinksHtml}</nav>
          <div style="padding:0.75rem;">
            <a class="sc-shell-cta" href="dashboard.html">Start Study Session</a>
          </div>
        </div>
      </aside>
      <header class="sc-shell-topbar">
        <div style="display:flex;align-items:center;gap:1rem;min-width:0;">
          <button class="sc-shell-iconbtn sc-shell-collapse" type="button" aria-label="Collapse sidebar" data-sc-shell-collapse>
            <span class="material-symbols-outlined">left_panel_close</span>
          </button>
          <button class="sc-shell-iconbtn sc-shell-toggle" type="button" aria-label="Open navigation" data-sc-shell-open>
            <span class="material-symbols-outlined">menu</span>
          </button>
          <div class="sc-shell-page">
            <span class="sc-shell-kicker">${escapeHtml(meta.kicker)}</span>
            <span class="sc-shell-title">${escapeHtml(meta.title)}</span>
          </div>
        </div>
        <nav class="sc-shell-toplinks">${topLinksHtml}</nav>
        <div class="sc-shell-actions">
          <a class="sc-shell-iconbtn" href="research.html" aria-label="Search">
            <span class="material-symbols-outlined">search</span>
          </a>
          <a class="sc-shell-iconbtn" href="profile.html" aria-label="Profile">
            <span class="material-symbols-outlined">account_circle</span>
          </a>
        </div>
      </header>
    `;

    document.body.prepend(shell);
    hydrateIcons(shell);

    shell.querySelectorAll("[data-sc-shell-open]").forEach((button) => {
      button.addEventListener("click", () => document.body.classList.add("sc-shell-open"));
    });
    shell.querySelectorAll("[data-sc-shell-close]").forEach((button) => {
      button.addEventListener("click", () => document.body.classList.remove("sc-shell-open"));
    });

    const collapseButton = shell.querySelector("[data-sc-shell-collapse]");
    const collapseIcon = collapseButton && collapseButton.querySelector(".material-symbols-outlined");
    const storageKey = "sc-sidebar-collapsed";

    function syncCollapsedState(collapsed) {
      document.body.classList.toggle("sc-sidebar-collapsed", collapsed);
      if (collapseIcon) {
        collapseIcon.textContent = collapsed ? "left_panel_open" : "left_panel_close";
      }
      if (collapseButton) {
        collapseButton.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
      }
    }

    const persisted = localStorage.getItem(storageKey) === "true";
    syncCollapsedState(persisted);

    if (collapseButton) {
      collapseButton.addEventListener("click", () => {
        const collapsed = !document.body.classList.contains("sc-sidebar-collapsed");
        localStorage.setItem(storageKey, String(collapsed));
        syncCollapsedState(collapsed);
      });
    }
  }

  function hideLegacyShell() {
    const legacy = new Set();
    document.querySelectorAll("body > header, body > nav, body > aside").forEach((node) => legacy.add(node));
    document.querySelectorAll("body > footer").forEach((node) => legacy.add(node));
    document.querySelectorAll("body > div").forEach((node) => {
      const hasMainChild = Array.from(node.children).some((child) => child.tagName === "MAIN");
      if (!hasMainChild) return;
      Array.from(node.children).forEach((child) => {
        if (["HEADER", "NAV", "ASIDE", "FOOTER"].includes(child.tagName)) {
          legacy.add(child);
        }
      });
    });
    legacy.forEach((node) => node.classList.add("sc-legacy-shell"));
  }

  function cleanupLayout() {
    const main = document.querySelector("main");
    if (main) {
      main.style.marginLeft = "0";
      main.style.paddingTop = "0";
    }

    const wrapper = main && main.parentElement;
    if (wrapper && wrapper !== document.body && wrapper.children.length <= 3) {
      const hasLegacyAside = Array.from(wrapper.children).some((child) => child.classList && child.classList.contains("sc-legacy-shell"));
      if (hasLegacyAside) {
        wrapper.style.paddingTop = "0";
      }
    }
  }

  function addMotionOrbs() {
    const layer = document.createElement("div");
    layer.setAttribute("aria-hidden", "true");
    layer.innerHTML = `
      <div class="sc-motion-orb sc-motion-orb-a"></div>
      <div class="sc-motion-orb sc-motion-orb-b"></div>
    `;
    document.body.prepend(layer);
  }

  function buildFooter() {
    const footer = document.createElement("footer");
    footer.className = "sc-site-footer";
    footer.innerHTML = `
      <div class="sc-site-footer-inner">
        <div class="sc-site-footer-block">
          <h2 class="sc-site-footer-heading">Soul Concept</h2>
          <p class="sc-site-footer-copy">Defining the standard for digital study tools through curation and intentionality.</p>
        </div>
        <div class="sc-site-footer-block">
          <h3 class="sc-site-footer-label">Resources</h3>
          <a href="dashboard.html">Study Dashboard</a>
          <a href="library.html">Subject Library</a>
          <a href="grade-9-advanced.html">Flashcards</a>
        </div>
        <div class="sc-site-footer-block">
          <h3 class="sc-site-footer-label">Legal</h3>
          <a href="settings.html">Privacy Policy</a>
          <a href="settings.html#support">Accessibility Statement</a>
          <a href="membership.html">Cookie Policy</a>
        </div>
        <div class="sc-site-footer-block">
          <h3 class="sc-site-footer-label">Contact</h3>
          <a href="https://www.instagram.com/deanacious/" target="_blank" rel="noopener noreferrer">@deanacious on Instagram</a>
          <a href="https://ca.linkedin.com/in/dean-concepcion-ba32983a9" target="_blank" rel="noopener noreferrer">Dean Concepcion on LinkedIn</a>
          <p class="sc-site-footer-meta">© 2026 Soul Concept. All Rights Reserved.</p>
          <a href="membership.html">Terms of Scholarship</a>
          <a href="settings.html#support">Honor Code</a>
        </div>
      </div>
    `;
    document.body.appendChild(footer);
  }

  function setupRevealAnimations() {
    const selectors = [
      "main > section",
      "main > div",
      "section > div",
      "article",
      "[class*='card']",
      "[class*='panel']",
      "[class*='rounded-2xl']",
      "[class*='rounded-3xl']"
    ];
    const seen = new Set();
    let order = 0;

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((node) => {
        if (seen.has(node)) return;
        if (node.closest(".sc-shell-sidebar, .sc-shell-topbar")) return;
        seen.add(node);
        node.setAttribute("data-sc-reveal", order % 3 === 0 ? "left" : order % 3 === 1 ? "right" : "zoom");
        node.style.setProperty("--sc-delay", `${Math.min(order * 45, 280)}ms`);
        order += 1;
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    document.querySelectorAll("[data-sc-reveal]").forEach((node) => observer.observe(node));
  }

  function setupTiltCards() {
    const tiltTargets = [
      ...document.querySelectorAll("article"),
      ...document.querySelectorAll("[class*='rounded-2xl']"),
      ...document.querySelectorAll("[class*='rounded-3xl']")
    ];

    tiltTargets.forEach((node) => {
      if (node.closest(".sc-shell-sidebar, .sc-shell-topbar")) return;
      if (node.offsetWidth < 180 || node.offsetHeight < 100) return;
      node.setAttribute("data-sc-tilt", "");

      node.addEventListener("pointermove", (event) => {
        const rect = node.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rx = (0.5 - py) * 7;
        const ry = (px - 0.5) * 9;
        node.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      });

      node.addEventListener("pointerleave", () => {
        node.style.transform = "";
      });
    });
  }

  function setupProgressAnimations() {
    document.querySelectorAll(".h-full[class*='w-']").forEach((node) => {
      const parent = node.parentElement;
      if (!parent || !parent.className.includes("overflow-hidden")) return;
      parent.setAttribute("data-sc-progress", "");
    });
  }

  function setupHeroParallax() {
    const hero = document.querySelector("main section");
    if (!hero) return;
    hero.setAttribute("data-sc-hero", "");

    const targets = [
      ...hero.querySelectorAll("img"),
      ...hero.querySelectorAll("[class*='blur-3xl']"),
      ...hero.querySelectorAll("[class*='glass-header']"),
      ...hero.querySelectorAll("[class*='editorial-shadow']")
    ].slice(0, 4);

    targets.forEach((node) => node.setAttribute("data-sc-parallax", ""));

    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      targets.forEach((node, index) => {
        const depth = (index + 1) * 7;
        node.style.transform = `translate3d(${px * depth}px, ${py * depth * -1}px, 0)`;
      });
    });

    hero.addEventListener("pointerleave", () => {
      targets.forEach((node) => {
        node.style.transform = "";
      });
    });
  }

  function repairBrokenText() {
    document.querySelectorAll("*").forEach((node) => {
      if (node.children.length) return;
      const text = node.textContent;
      if (!text || !text.includes("Ã¢")) return;
      node.textContent = text
        .replaceAll("Ã¢Ë†Â«", "âˆ«")
        .replaceAll("mcÃ‚Â²", "mcÂ²")
        .replaceAll("aÃ‚Â²", "aÂ²")
        .replaceAll("Ã¢Ë†â€š", "âˆ‚")
        .replaceAll("ÃŽÂ±", "Î±")
        .replaceAll("Ã¢Ë†â€¡", "âˆ‡")
        .replaceAll("ÃŽÂ¦", "Î¦")
        .replaceAll("Ã¢Ë†Å¡", "âˆš")
        .replaceAll("ÃŽÂ£", "Î£");
    });
  }

  ensureStylesheet();
  ensureFonts();
  wireRoutes();
  addMotionOrbs();
  buildShell();
  hideLegacyShell();
  cleanupLayout();
  buildFooter();
  hydrateIcons();
  repairBrokenText();
  setupRevealAnimations();
  setupTiltCards();
  setupProgressAnimations();
  setupHeroParallax();
  document.body.classList.add("sc-shell-ready");
  document.body.classList.add("sc-page-enter");
})();
