(() => {
  const script = document.currentScript;
  const pathParts = decodeURIComponent(location.pathname).split('/').filter(Boolean);
  const fileName = pathParts[pathParts.length - 1] || '';
  const sourceMode = Boolean(script && /^[A-Z]/.test(fileName));
  const notesIndex = pathParts.lastIndexOf('notes');
  const relativeParts = notesIndex >= 0 ? pathParts.slice(notesIndex) : pathParts;
  const rootPrefix = '../'.repeat(Math.max(0, relativeParts.length - 1));
  const root = target => /^https?:\/\//.test(target) ? target : rootPrefix + target;
  const sqlCourse = 'https://tidyweb.github.io/tidyweb-learn-sql/';
  const sqlBridge = `${sqlCourse}exercises/html/Coffee%20Python%20SQL%20Bridge%20Prototype.html`;

  const notes = sourceMode ? {
    overview: 'notes/Data Analysis Field Overview.html',
    block1: 'notes/Block 1 Table Literacy Bridge.html',
    block2: 'notes/Block 2 Selection and Filtering.html',
    block3: 'notes/Block 3 Missing Data and Cleaning.html',
    block4: 'notes/Block 4 Grouping and Insight.html',
    handoff: 'notes/sql_readiness_handoff.html',
    bridge: sqlBridge,
    book2: sqlCourse,
    block5: 'notes/Block 5 Visualisation.html',
    block6: 'notes/Block 6 Statistics Foundations.html',
    block7: 'notes/Block 7 Hypothesis and Evidence.html',
    block8: 'notes/Block 8 Full EDA Cycle.html',
    block9: 'notes/Block 9 ETL Drill.html',
    block10: 'notes/Block 10 Dashboard and Presentation.html',
    seaborn: 'notes/Seaborn Foundations.html',
    git: 'notes/Git and GitHub/Git and GitHub Reference.html'
  } : {
    overview: 'notes/data_analysis_field_overview.html',
    block1: 'notes/block_1_table_literacy_bridge.html',
    block2: 'notes/block_2_selection_and_filtering.html',
    block3: 'notes/block_3_missing_data_and_cleaning.html',
    block4: 'notes/block_4_grouping_and_insight.html',
    handoff: 'notes/sql_readiness_handoff.html',
    bridge: sqlBridge,
    book2: sqlCourse,
    block5: 'notes/block_5_visualisation.html',
    block6: 'notes/block_6_statistics_foundations.html',
    block7: 'notes/block_7_hypothesis_and_evidence.html',
    block8: 'notes/block_8_full_eda_cycle.html',
    block9: 'notes/block_9_etl_drill.html',
    block10: 'notes/block_10_dashboard_and_presentation.html',
    seaborn: 'notes/seaborn_foundations.html',
    git: 'notes/git_and_github/git_and_github_reference.html'
  };

  const home = root(sourceMode ? 'release_shell/index.html' : 'index.html');
  const notebookRoot = sourceMode ? 'release_shell/notebooks' : 'notebooks';
  const jupyterLab = path => `http://localhost:8888/lab/tree/${path}`;
  const notebooks = {
    hub: `${notebookRoot}/index.html`,
    block1: jupyterLab('notebooks/blocks_1_10/block_01_table_literacy.ipynb'),
    block2: jupyterLab('notebooks/blocks_1_10/block_02_selection_and_filtering.ipynb'),
    block3: jupyterLab('notebooks/blocks_1_10/block_03_missing_data_and_cleaning.ipynb'),
    block4: jupyterLab('notebooks/blocks_1_10/block_04_grouping_and_insight.ipynb')
  };
  document.querySelectorAll('[data-course-home]').forEach(link => {
    link.href = home;
  });
  document.querySelectorAll('[data-notebook-hub]').forEach(link => {
    link.href = root(notebooks.hub);
  });
  const groups = [
    {
      label: 'Bookshelf Home',
      links: [{ number: '00', text: 'Main Shelf', href: home }]
    },
    {
      label: 'Primary Route',
      links: [
        { number: '01', text: 'Block 1 · Table Literacy', href: root(notes.block1) },
        { number: '02', text: 'Block 2 · Selection', href: root(notes.block2) },
        { number: '03', text: 'Block 3 · Cleaning', href: root(notes.block3) },
        { number: '04', text: 'Block 4 · Grouping', href: root(notes.block4) },
        { number: '05', text: 'SQL Readiness Hand-off', href: root(notes.handoff) }
      ]
    },
    {
      label: 'Jupyter Notebooks',
      accent: 'jupyter',
      links: [
        { number: 'J0', text: 'Notebook Hub', href: root(notebooks.hub) },
        { number: 'J1', text: 'Block 1 · JupyterLab', href: notebooks.block1 },
        { number: 'J2', text: 'Block 2 · JupyterLab', href: notebooks.block2 },
        { number: 'J3', text: 'Block 3 · JupyterLab', href: notebooks.block3 },
        { number: 'J4', text: 'Block 4 · JupyterLab', href: notebooks.block4 },
        { number: 'J5', text: 'Foundations And Transfer Check', href: root(`${notebooks.hub}#foundations`) },
        { number: 'J6', text: 'SQL Hand-off Notebook', href: root(`${notebooks.hub}#handoff`) },
        { number: 'J+', text: 'Refresh Checks And Optional Blocks', href: root(`${notebooks.hub}#refresh`) }
      ]
    },
    {
      label: 'Optional Continuation',
      links: [
        { number: '06', text: 'Field Overview', href: root(notes.overview) },
        { number: '07', text: 'Block 5 · Visualisation', href: root(notes.block5) },
        { number: '08', text: 'Block 6 · Statistics', href: root(notes.block6) },
        { number: '09', text: 'Block 7 · Evidence', href: root(notes.block7) },
        { number: '10', text: 'Block 8 · Full EDA', href: root(notes.block8) },
        { number: '11', text: 'Block 9 · ETL', href: root(notes.block9) },
        { number: '12', text: 'Block 10 · Dashboard', href: root(notes.block10) }
      ]
    },
    {
      label: 'References',
      links: [
        { number: 'R1', text: 'Seaborn Foundations', href: root(notes.seaborn) },
        { number: 'R2', text: 'Git and GitHub', href: root(notes.git) }
      ]
    }
  ];
  const finishGroup = {
    label: 'End of Python Route',
    links: [
      { number: '05', text: 'SQL Readiness Hand-off', href: root(notes.handoff) },
      { number: '06', text: 'Python-to-SQL Bridge', href: root(notes.bridge) },
      { number: '07', text: 'Learning SQL · Book 2', href: root(notes.book2) }
    ]
  };

  const rail = document.querySelector('.rail');
  if (!rail) return;

  if (!document.getElementById('learn-python-data-site-nav-style')) {
    const style = document.createElement('style');
    style.id = 'learn-python-data-site-nav-style';
    style.textContent = [
      '.rail-logo-link { display:block; line-height:0; }',
      '.rail-logo { width:min(84px, 100%); }',
      '.course-nav { margin-top:22px; }',
      '.course-nav a { overflow-wrap:anywhere; }',
      '.jupyter-nav { margin:28px -8px 0; padding:14px 8px 10px; border-top:5px solid #f6c85f; border-bottom:5px solid #f6c85f; background:linear-gradient(180deg, rgba(246,200,95,.18), rgba(246,200,95,.05)); box-shadow:0 0 0 1px rgba(246,200,95,.24); }',
      '.jupyter-nav .rail-nav-label { color:#f6c85f; }',
      '.jupyter-nav a { color:#fff8df; padding:8px 6px; border-bottom-color:rgba(246,200,95,.18); }',
      '.jupyter-nav a:hover { background:rgba(246,200,95,.18); color:#fff; }',
      '.jupyter-nav a .num { color:#f6c85f; }'
    ].join('');
    document.head.appendChild(style);
  }

  const logoWrap = rail.querySelector('.rail-logo-wrap');
  const logo = rail.querySelector('.rail-logo');
  const existingLogoLink = logo && logo.closest('a');
  if (existingLogoLink) {
    existingLogoLink.href = home;
    existingLogoLink.title = 'Return to the Learn Python Data home page';
    existingLogoLink.setAttribute('aria-label', 'Return to the Learn Python Data home page');
  } else if (logoWrap && logo) {
    const link = document.createElement('a');
    link.className = 'rail-logo-link';
    link.href = home;
    link.title = 'Return to the Learn Python Data home page';
    link.setAttribute('aria-label', 'Return to the Learn Python Data home page');
    logoWrap.insertBefore(link, logo);
    link.appendChild(logo);
  }

  if (rail.querySelector('.course-nav')) return;
  const firstNav = rail.querySelector('.rail-nav');
  const addGroup = group => {
    const nav = document.createElement('nav');
    nav.className = `rail-nav course-nav${group.accent ? ` ${group.accent}-nav` : ''}`;
    const label = document.createElement('div');
    label.className = 'rail-nav-label';
    label.textContent = group.label;
    nav.appendChild(label);
    group.links.forEach(item => {
      const link = document.createElement('a');
      link.href = item.href;
      const number = document.createElement('span');
      number.className = 'num';
      number.textContent = item.number;
      const text = document.createElement('span');
      text.textContent = item.text;
      link.append(number, text);
      nav.appendChild(link);
    });
    return nav;
  };
  groups.forEach(group => rail.insertBefore(addGroup(group), firstNav));
  rail.appendChild(addGroup(finishGroup));
})();
