(function () {
  const scriptSrc = document.currentScript && document.currentScript.src;
  const projectRoot = new URL("../", scriptSrc || window.location.href);
  const root = projectRoot.href.replace(/\/$/, "");
  const guideHome = `${root}/guide/html/SQLBolt%20Compressed%20Map.html`;
  const logoSrc = `${root}/guide/html/assets/tidyweb_logo.png`;
  const groups = [
    {
      title: "Guide",
      links: [
        { label: "Learner's Guide", href: guideHome }
      ]
    },
    {
      title: "Chapters",
      links: [
        { label: "1 Reading One Table", href: `${root}/guide/html/chapters/1-reading-one-table.html` },
        { label: "2 Shaping Results", href: `${root}/guide/html/chapters/2-shaping-results.html` },
        { label: "3 Joins And Missing Data", href: `${root}/guide/html/chapters/3-joins-and-missing-data.html` },
        { label: "4 Expressions And Aggregates", href: `${root}/guide/html/chapters/4-expressions-and-aggregates.html` },
        { label: "5 Query Order And Thinking", href: `${root}/guide/html/chapters/5-query-order-and-thinking.html` },
        { label: "6 Changing Data And Schema", href: `${root}/guide/html/chapters/6-changing-data-and-schema.html` }
      ]
    },
    {
      title: "Reference",
      links: [
        { label: "1 SQL Glossary Reference", href: `${root}/guide/html/reference/1-sql-glossary-reference.html` },
        { label: "2 Common SQL Mistakes", href: `${root}/guide/html/reference/2-common-sql-mistakes.html` }
      ]
    },
    {
      title: "Exercises For Chapters 1 And 2",
      links: [
        { label: "Football SQL Practice Lab", href: `${root}/exercises/html/Football%20SQL%20Practice%20Lab.html` },
        { label: "Movie SQL Practice Lab", href: `${root}/exercises/html/Movie%20SQL%20Practice%20Lab.html` },
        { label: "Tomato SQL Practice Lab", href: `${root}/exercises/html/Tomato%20SQL%20Practice%20Lab.html` }
      ]
    },
    {
      title: "Exercises For Chapters 3 And 4",
      links: [
        { label: "Relationships SQL Practice Lab", href: `${root}/exercises/html/Relationships%20SQL%20Practice%20Lab.html` },
        { label: "Retail SQL Practice Lab", href: `${root}/exercises/html/Retail%20SQL%20Practice%20Lab.html` }
      ]
    },
    {
      title: "Exercises For Chapters 5 And 6",
      links: [
        { label: "Travel SQL Practice Lab", href: `${root}/exercises/html/Travel%20SQL%20Practice%20Lab.html` },
        { label: "Workshop SQL Practice Lab", href: `${root}/exercises/html/Workshop%20SQL%20Practice%20Lab.html` }
      ]
    },
    {
      title: "Python To SQL Bridge",
      links: [
        { label: "Coffee Python SQL Bridge", href: `${root}/exercises/html/Coffee%20Python%20SQL%20Bridge%20Prototype.html` }
      ]
    }
  ];

  function buildNavHTML() {
    return `
      <div class="site-nav-block">
        ${groups.map((group, index) => `
          <div class="site-nav-group">
            <div class="site-nav-title site-nav-title-${index + 1}">${group.title}</div>
            ${group.links.map(link => `<a class="site-nav-link" href="${link.href}">${link.label}</a>`).join("")}
          </div>
        `).join("")}
      </div>
    `;
  }

  function injectStyles() {
    if (document.getElementById("sql-data-site-nav-style")) return;
    const style = document.createElement("style");
    style.id = "sql-data-site-nav-style";
    style.textContent = `
      .site-nav-block { margin-top: 18px; }
      .site-home-link {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        color: inherit;
        margin-bottom: 14px;
      }
      .site-home-logo {
        width: 42px;
        height: 42px;
        object-fit: contain;
        border-radius: 10px;
        background: rgba(255,255,255,.92);
        padding: 4px;
      }
      .site-home-text strong {
        display: block;
        color: #fff;
        font: 700 18px/1.1 'Atkinson Hyperlegible', sans-serif;
      }
      .site-home-text span {
        display: block;
        color: #9eb2c1;
        font-size: 12px;
        line-height: 1.4;
      }
      .site-nav-group + .site-nav-group { margin-top: 14px; }
      .site-nav-title {
        font: 600 10px 'IBM Plex Mono', monospace;
        text-transform: uppercase;
        letter-spacing: .08em;
        color: #8ea4b5;
        margin-bottom: 8px;
      }
      .site-nav-title-1 { color: #d9c47a; }
      .site-nav-title-2 { color: #8dbb98; }
      .site-nav-title-3 { color: #d28f6b; }
      .site-nav-title-4 { color: #b7a3cf; }
      .site-nav-title-5 { color: #7fb7c8; }
      .site-nav-title-6 { color: #d2a7b4; }
      .site-nav-title-7 { color: #b7a3cf; }
      .site-nav-link {
        display: block;
        color: inherit;
        text-decoration: none;
        padding: 8px 10px;
        border: 1px solid rgba(255,255,255,.06);
        background: rgba(255,255,255,.03);
        border-radius: 12px;
        margin-bottom: 8px;
        line-height: 1.35;
        font-size: 13px;
      }
      .site-nav-link:hover { color: #fff; }
      .site-rail {
        position: fixed;
        left: 20px;
        top: 20px;
        width: 250px;
        max-height: calc(100vh - 40px);
        overflow-y: auto;
        background: #17212b;
        color: #dbe7ef;
        border: 1px solid rgba(255,255,255,.06);
        border-radius: 18px;
        padding: 22px 18px 22px;
        box-shadow: 0 18px 44px rgba(28,41,52,.22);
        z-index: 10;
      }
      .site-rail h2 {
        margin: 0 0 8px;
        color: #fff;
        font: 700 22px/1.1 'Atkinson Hyperlegible', sans-serif;
      }
      .site-rail p {
        margin: 0 0 14px;
        color: #9eb2c1;
        font-size: 13px;
        line-height: 1.55;
      }
      body.has-site-rail .page {
        margin-left: 294px !important;
        margin-right: 24px !important;
      }
      @media (max-width: 1060px) {
        .site-rail { display: none; }
        body.has-site-rail .page {
          margin-left: auto !important;
          margin-right: auto !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function addToExistingRail(rail) {
    if (!rail.querySelector(".site-home-link")) {
      const home = document.createElement("a");
      home.className = "site-home-link";
      home.href = guideHome;
      home.innerHTML = `
        <img class="site-home-logo" src="${logoSrc}" alt="Guide home logo">
        <div class="site-home-text">
          <strong>SQL Library</strong>
          <span>Guide home</span>
        </div>
      `;
      rail.prepend(home);
    }
    const nav = document.createElement("div");
    nav.innerHTML = buildNavHTML();
    const firstNav = rail.querySelector(".nav-block, .rail-nav");
    if (firstNav) {
      firstNav.before(nav.firstElementChild);
    } else {
      rail.appendChild(nav.firstElementChild);
    }
  }

  function createStandaloneRail() {
    document.body.classList.add("has-site-rail");
    const rail = document.createElement("aside");
    rail.className = "site-rail";
    rail.innerHTML = `
      <a class="site-home-link" href="${guideHome}">
        <img class="site-home-logo" src="${logoSrc}" alt="Guide home logo">
        <div class="site-home-text">
          <strong>SQL Library</strong>
          <span>Guide home</span>
        </div>
      </a>
      <p>Guide, chapters, reference, and practice labs.</p>
      ${buildNavHTML()}
    `;
    document.body.prepend(rail);
  }

  injectStyles();
  const existingRail = document.querySelector(".rail");
  if (existingRail) {
    addToExistingRail(existingRail);
  } else {
    createStandaloneRail();
  }
})();
