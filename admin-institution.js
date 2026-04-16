/* Medical Survey System — Institution Admin Dashboard © 2026
 * REDESIGNED: Home page with shelf navigation
 * HazzinBR · Great Lakes University · Nyamache
 */

function showInstAdminHome(){
  const existing = document.getElementById('inst-admin-dashboard');
  if(existing){ existing.style.display='flex'; return; }
  if(typeof initInstAdminDashboard==='function') initInstAdminDashboard();
}

function isSuperAdmin() {
  if (localStorage.getItem('chsa_is_admin_bypass') === '1') return true;
  try { return JSON.parse(localStorage.getItem('chsa_session')||'{}').role === 'super_admin'; }
  catch(e) { return false; }
}
function isInstitutionAdmin() {
  if (localStorage.getItem('chsa_is_inst_admin') === '1') return true;
  try {
    const r = JSON.parse(localStorage.getItem('chsa_session')||'{}').role;
    return r === 'institution_admin';
  } catch(e) { return false; }
}

//  LOGO SVG (reusable) 
function _phLogoSVG() {
  return `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2 L12 8"/>
    <path d="M12 8 C12 8 7 10 7 14 C7 17 9.5 19 12 19 C14.5 19 17 17 17 14 C17 10 12 8 12 8Z"/>
    <path d="M9 13.5 L11 15.5 L15 11"/>
  </svg>`;
}

//  INIT 
function initInstAdminDashboard() {
  if (!isInstitutionAdmin() && !isSuperAdmin()) return;
  _renderInstAdminDashboard();
}

function _renderInstAdminDashboard() {
  const instName = (typeof getSessionInstitutionName==='function' && getSessionInstitutionName()) || 'My Institution';
  const instId   = typeof getSessionInstitutionId==='function' ? getSessionInstitutionId() : null;
  const user     = JSON.parse(localStorage.getItem('chsa_auth')||'{}');
  const userName = user.full_name || user.name || 'Administrator';

  const home = document.getElementById('home-page');
  if (home) home.style.display = 'none';

  const existing = document.getElementById('inst-admin-dashboard');
  if (existing) { existing.remove(); }

  const dash = document.createElement('div');
  dash.id = 'inst-admin-dashboard';

  // The dashboard renders the HOME PAGE by default (not tabs immediately)
  dash.innerHTML = `
    <!-- HEADER BAR -->
    <div style="background:linear-gradient(135deg,#000000,#0a1628);color:#fff;padding:12px 16px;flex-shrink:0;box-shadow:0 2px 12px rgba(0,0,0,.3);border-bottom:1px solid rgba(46,124,246,.18);">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <!-- Logo + Title -->
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="./medisync-logo.png" alt="MSS" style="height:30px;width:auto;filter:drop-shadow(0 1px 6px rgba(46,124,246,.4));">
          <div>
            <div style="font-size:.82rem;font-weight:800;color:#fff;letter-spacing:-.01em;" id="inst-hdr-name">${instName || 'Institution Admin'}</div>
            <div style="font-size:.52rem;color:rgba(255,255,255,.4);letter-spacing:.4px;">Institution Admin · MSS</div>
          </div>
        </div>
        
      </div>
    </div>

    <!-- MAIN CONTENT AREA (home page shown first) -->
    <div id="inst-main-content" class="adm-home-page">
      <!-- hero + shelves rendered by _instRenderHomePage() -->
    </div>

    <!-- LOADING OVERLAY -->
    <div id="inst-loading" style="position:absolute;inset:0;background:rgba(246,248,247,.9);display:flex;align-items:center;justify-content:center;z-index:10;">
      <div style="text-align:center;color:#0e3d22;">
        <div style="width:36px;height:36px;border:3px solid #3db86a;border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 12px;"></div>
        <div style="font-size:.85rem;font-weight:600;">Loading dashboard…</div>
      </div>
    </div>`;

  document.body.appendChild(dash);


  // Load data then render home
  _instAdminLoadData(instId).then(() => {
    document.getElementById('inst-loading').style.display = 'none';
    _instRenderHomePage(instName, userName, instId);
  }).catch(e => {
    document.getElementById('inst-loading').style.display = 'none';
    document.getElementById('inst-main-content').innerHTML =
      `<div style="text-align:center;padding:40px;color:#c0392b;">
        <div style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--amber,#fbbf24);margin-bottom:10px">Warning</div>
        <div style="font-weight:700;margin-bottom:6px;">Failed to load</div>
        <div style="font-size:.8rem;color:#888;margin-bottom:16px;">${e.message||'Network error'}</div>
        <button onclick="_instAdminLoadData('${instId}').then(()=>_instRenderHomePage('${instName}','${userName}','${instId}'))" 
          style="padding:10px 20px;background:var(--blue-mid);color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:inherit;">
          Retry
        </button>
      </div>`;
  });
}

//  HOME PAGE — shelved navigation 
function _instRenderHomePage(instName, userName, instId) {
  const main = document.getElementById('inst-main-content');
  if (!main) return;

  const recs    = _instData.records;
  const studs   = _instData.students;
  const today   = new Date().toISOString().split('T')[0];
  const todayN  = recs.filter(r => (r.interview_date||'').startsWith(today)).length;
  const ivCount = new Set(recs.map(r => r.interviewer_name||r.interviewer).filter(Boolean)).size;
  const quality = window.admMetrics?.data_quality?.overall_quality_score;

  main.innerHTML = `
    <!-- HERO CARD -->
    <div class="adm-home-hero">
      <div class="adm-home-hero-greeting">${instName}</div>
      <div class="adm-home-hero-name">Welcome, ${userName || 'Admin'}</div>
      <div class="adm-home-hero-stats">
        <div class="adm-home-hero-stat">
          <div class="adm-home-hero-stat-n" id="iah-total">${recs.length}</div>
          <div class="adm-home-hero-stat-l">Surveys</div>
        </div>
        <div class="adm-home-hero-stat">
          <div class="adm-home-hero-stat-n" id="iah-today">${todayN}</div>
          <div class="adm-home-hero-stat-l">Today</div>
        </div>
        <div class="adm-home-hero-stat">
          <div class="adm-home-hero-stat-n" id="iah-quality">${quality ? quality+'%' : '—'}</div>
          <div class="adm-home-hero-stat-l">Quality</div>
        </div>
      </div>
    </div>

    <!-- SHELF 1: PRIMARY ACTIONS -->
    <div class="adm-shelf-label">Quick Access</div>
    <div class="adm-shelf-primary" style="margin-bottom:20px;">

      <button class="adm-shelf-card" onclick="_instSwitchView('overview','${instId}')">
        <div class="adm-shelf-card-icon green"></div>
        <div class="adm-shelf-card-title">Overview</div>
        <div class="adm-shelf-card-sub">Trends, charts, health indicators</div>
      </button>

      <button class="adm-shelf-card" onclick="_instSwitchView('team','${instId}')">
        <div class="adm-shelf-card-icon navy"></div>
        <div class="adm-shelf-card-title">People</div>
        <div class="adm-shelf-card-sub">Team performance &amp; students</div>
        <span class="adm-shelf-card-badge">${ivCount} enumerators</span>
      </button>

      <button class="adm-shelf-card" onclick="_instSwitchView('data','${instId}')">
        <div class="adm-shelf-card-icon amber"></div>
        <div class="adm-shelf-card-title">Survey Data</div>
        <div class="adm-shelf-card-sub">Browse &amp; search all records</div>
        <span class="adm-shelf-card-badge">${recs.length} records</span>
      </button>

      <button class="adm-shelf-card" onclick="_instSwitchView('reports','${instId}')">
        <div class="adm-shelf-card-icon purple"></div>
        <div class="adm-shelf-card-title">Reports</div>
        <div class="adm-shelf-card-sub">Generate &amp; download reports</div>
      </button>

    </div>

    <!-- SHELF 2: INSTITUTION STATS -->
    <div class="adm-shelf-label">Institution Snapshot</div>
    <div class="adm-shelf-rows" style="margin-bottom:20px;">
      <button class="adm-quick-stat" onclick="_instSwitchView('data','${instId}')">
        <div class="adm-quick-stat-left">
          <div class="adm-quick-stat-dot green"></div>
          <span class="adm-quick-stat-label">Total Surveys Collected</span>
        </div>
        <div class="adm-quick-stat-right">
          <span class="adm-quick-stat-value">${recs.length}</span>
          <span class="adm-quick-stat-arrow">›</span>
        </div>
      </button>
      <button class="adm-quick-stat" onclick="_instSwitchView('overview','${instId}')">
        <div class="adm-quick-stat-left">
          <div class="adm-quick-stat-dot amber"></div>
          <span class="adm-quick-stat-label">Submitted Today</span>
        </div>
        <div class="adm-quick-stat-right">
          <span class="adm-quick-stat-value">${todayN}</span>
          <span class="adm-quick-stat-arrow">›</span>
        </div>
      </button>
      <button class="adm-quick-stat" onclick="_instSwitchView('team','${instId}')">
        <div class="adm-quick-stat-left">
          <div class="adm-quick-stat-dot navy"></div>
          <span class="adm-quick-stat-label">Active Enumerators</span>
        </div>
        <div class="adm-quick-stat-right">
          <span class="adm-quick-stat-value">${ivCount}</span>
          <span class="adm-quick-stat-arrow">›</span>
        </div>
      </button>
      <button class="adm-quick-stat" onclick="_instSwitchView('team','${instId}')">
        <div class="adm-quick-stat-left">
          <div class="adm-quick-stat-dot green"></div>
          <span class="adm-quick-stat-label">Registered Students</span>
        </div>
        <div class="adm-quick-stat-right">
          <span class="adm-quick-stat-value">${studs.length}</span>
          <span class="adm-quick-stat-arrow">›</span>
        </div>
      </button>
      ${quality ? `
      <button class="adm-quick-stat" onclick="_instSwitchView('reports','${instId}')">
        <div class="adm-quick-stat-left">
          <div class="adm-quick-stat-dot ${quality>=90?'green':quality>=75?'amber':'red'}"></div>
          <span class="adm-quick-stat-label">Data Quality Score</span>
        </div>
        <div class="adm-quick-stat-right">
          <span class="adm-quick-stat-value">${quality}%</span>
          <span class="adm-quick-stat-arrow">›</span>
        </div>
      </button>` : ''}
    </div>

    <!-- SHELF 3: SETTINGS -->
    <div class="adm-shelf-label">Management</div>
    <div class="adm-shelf-rows">
      <button class="adm-quick-stat" onclick="_instSwitchView('settings','${instId}')">
        <div class="adm-quick-stat-left">
          <div style="font-size:1.1rem;">️</div>
          <span class="adm-quick-stat-label" style="margin-left:6px;">Settings &amp; Account</span>
        </div>
        <div class="adm-quick-stat-right">
          <span class="adm-quick-stat-arrow">›</span>
        </div>
      </button>
      <button class="adm-quick-stat" onclick="if(typeof exportSurveysAsCSV==='function')exportSurveysAsCSV(_instData.records)">
        <div class="adm-quick-stat-left">
          <div style="font-size:1.1rem;"></div>
          <span class="adm-quick-stat-label" style="margin-left:6px;">Export All Data (CSV)</span>
        </div>
        <div class="adm-quick-stat-right">
          <span class="adm-quick-stat-arrow">›</span>
        </div>
      </button>
    </div>
  `;
}

// Switch from home to a section view (with back button)
function _instSwitchView(view, instId) {
  const main = document.getElementById('inst-main-content');
  if (!main) return;

  const instName = (typeof getSessionInstitutionName==='function' && getSessionInstitutionName()) || 'Institution';
  const userName = JSON.parse(localStorage.getItem('chsa_auth')||'{}').full_name || 'Admin';

  const viewTitles = {
    overview: ' Overview',
    team:     ' People & Team',
    data:     ' Survey Data',
    reports:  ' Reports',
    settings: '️ Settings'
  };

  main.style.padding = '0';
  main.innerHTML = `
    <!-- SECTION HEADER -->
    <div style="background:var(--grad-brand);padding:14px 16px;flex-shrink:0;box-shadow:0 2px 10px rgba(0,0,0,.15);">
      <div style="display:flex;align-items:center;gap:12px;">
        <button onclick="_instGoHome('${instName}','${userName}','${instId}')" 
          style="background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);color:#fff;border-radius:8px;padding:7px 12px;font-size:.8rem;cursor:pointer;font-family:inherit;font-weight:700;">
          ← Home
        </button>
        <span style="color:#fff;font-weight:700;font-size:.92rem;">${viewTitles[view]||view}</span>
      </div>
    </div>
    <div id="inst-section-body" style="flex:1;overflow-y:auto;padding:16px 16px 40px;">
      <div style="text-align:center;padding:24px;color:#aaa;">Loading…</div>
    </div>
  `;
  main.style.display = 'flex';
  main.style.flexDirection = 'column';
  main.style.flex = '1';
  main.style.overflow = 'hidden';

  const body = document.getElementById('inst-section-body');
  switch(view) {
    case 'overview': _instTabOverview(body); break;
    case 'team':     _instTabTeam(body);     break;
    case 'data':     _instTabData(body);     break;
    case 'reports':  _instTabReports(body);  break;
    case 'settings': _instTabSettings(body, instId); break;
  }
}

function _instGoHome(instName, userName, instId) {
  const main = document.getElementById('inst-main-content');
  if (!main) return;
  main.style.cssText = '';
  main.className = 'adm-home-page';
  _instRenderHomePage(instName, userName, instId);
}

//  DATA LOADING 
let _instData = { records: [], students: [] };

async function _instAdminLoadData(instId) {
  const [recordsData, studentsData] = await Promise.all([
    window.HS.HSAdmin.getRecords(instId || null).catch(() => ({ records: [] })),
    window.HS.HSAdmin.getStudents(instId || null).catch(() => ({ students: [] })),
  ]);
  const records  = recordsData.records  || [];
  const students = studentsData.students || [];
  _instData = { records, students };

  if (typeof computeSurveyMetrics === 'function' && records.length) {
    window.admMetrics = computeSurveyMetrics(records);
  }
}

//  TAB: Overview 
function _instTabOverview(el) {
  const recs = _instData.records;
  const today = new Date().toISOString().split('T')[0];

  const byLoc = {};
  recs.forEach(r => {
    const loc = r.interview_location || r.location || 'Unknown';
    byLoc[loc] = (byLoc[loc] || 0) + 1;
  });
  const topLocs = Object.entries(byLoc).sort((a,b) => b[1]-a[1]).slice(0,6);

  const dateMap = {};
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate()-i);
    dateMap[d.toISOString().split('T')[0]] = 0;
  }
  recs.forEach(r => {
    const d = r.interview_date || (r.synced_at||'').split('T')[0];
    if (dateMap[d] !== undefined) dateMap[d]++;
  });
  const maxDaily = Math.max(...Object.values(dateMap), 1);

  const metrics = window.admMetrics;

  el.innerHTML = `
    <!-- Activity Chart -->
    <div class="ins-section">
      <div class="ins-hdr">
        <div class="ins-hdr-icon"></div>
        <div><div class="ins-hdr-title">Daily Activity</div><div class="ins-hdr-sub">Last 7 days</div></div>
      </div>
      <div class="ins-body">
        <div style="display:flex;align-items:flex-end;gap:5px;height:70px;">
          ${Object.entries(dateMap).map(([date, count]) =>
            `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;">
              <div style="font-size:.6rem;color:var(--forest-glow);font-weight:700;">${count||''}</div>
              <div style="width:100%;background:var(--forest-glow);border-radius:4px 4px 0 0;height:${Math.round(count/maxDaily*56)}px;min-height:${count>0?'4':'0'}px;"></div>
              <div style="font-size:.55rem;color:var(--muted);">${date.slice(5)}</div>
            </div>`
          ).join('')}
        </div>
      </div>
    </div>

    <!-- Top Locations -->
    ${topLocs.length ? `
    <div class="ins-section">
      <div class="ins-hdr">
        <div class="ins-hdr-icon"></div>
        <div><div class="ins-hdr-title">Top Locations</div><div class="ins-hdr-sub">${topLocs.length} areas</div></div>
      </div>
      <div class="ins-body">
        ${topLocs.map(([loc, count]) => `
          <div class="ins-progress">
            <div class="ins-progress-label"><span>${loc}</span><span>${count}</span></div>
            <div class="ins-progress-bar">
              <div class="ins-progress-fill" style="width:${Math.round(count/topLocs[0][1]*100)}%;background:var(--forest-glow);"></div>
            </div>
          </div>`).join('')}
      </div>
    </div>` : ''}

    <!-- Health Indicators -->
    ${metrics ? `
    <div class="ins-section">
      <div class="ins-hdr">
        <div class="ins-hdr-icon"></div>
        <div><div class="ins-hdr-title">Key Health Indicators</div></div>
      </div>
      <div class="ins-body">
        <div class="ins-metric-row">
          <div class="ins-metric ok"><div class="ins-metric-n">${metrics.infrastructure?.pct_pit_latrine||'—'}%</div><div class="ins-metric-l">Pit Latrine</div></div>
          <div class="ins-metric ok"><div class="ins-metric-n">${metrics.infrastructure?.pct_water_treated||'—'}%</div><div class="ins-metric-l">Treats Water</div></div>
          <div class="ins-metric ok"><div class="ins-metric-n">${metrics.health?.pct_hiv_aware||'—'}%</div><div class="ins-metric-l">HIV Aware</div></div>
        </div>
        <div class="ins-metric-row">
          <div class="ins-metric ok"><div class="ins-metric-n">${metrics.nutrition?.pct_food_sufficient||'—'}%</div><div class="ins-metric-l">Food Secure</div></div>
          <div class="ins-metric ok"><div class="ins-metric-n">${metrics.maternal_child?.pct_immunised||'—'}%</div><div class="ins-metric-l">Immunised</div></div>
          <div class="ins-metric ok"><div class="ins-metric-n">${metrics.environmental?.pct_mosquito_net||'—'}%</div><div class="ins-metric-l">Mosquito Net</div></div>
        </div>
      </div>
    </div>` : ''}

    ${!recs.length ? '<div class="adm-empty">No surveys yet for this institution.</div>' : ''}
  `;
}

//  TAB: Team 
function _instTabTeam(el) {
  const students = _instData.students;
  const recs     = _instData.records;

  const ivMap = {};
  recs.forEach(r => {
    const iv = r.interviewer_name || r.interviewer || 'Unknown';
    if (!ivMap[iv]) ivMap[iv] = { count: 0, lastDate: null };
    ivMap[iv].count++;
    const d = r.interview_date || (r.synced_at||'').split('T')[0];
    if (d && (!ivMap[iv].lastDate || d > ivMap[iv].lastDate)) ivMap[iv].lastDate = d;
  });
  const ivList = Object.entries(ivMap).sort((a,b) => b[1].count - a[1].count);
  const maxCount = ivList[0]?.[1].count || 1;

  el.innerHTML = `
    <div class="ins-section">
      <div class="ins-hdr">
        <div class="ins-hdr-icon"></div>
        <div><div class="ins-hdr-title">Enumerator Performance</div><div class="ins-hdr-sub">${ivList.length} active</div></div>
      </div>
      <div class="ins-body">
        ${!ivList.length
          ? '<div class="adm-empty">No surveys submitted yet.</div>'
          : ivList.map(([name, data]) => `
            <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);">
              <div style="width:36px;height:36px;border-radius:50%;background:var(--grad-brand);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;flex-shrink:0;">
                ${name.charAt(0).toUpperCase()}
              </div>
              <div style="flex:1;min-width:0;">
                <div style="font-weight:700;font-size:.84rem;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</div>
                <div style="font-size:.68rem;color:var(--muted);margin-top:2px;">Last: ${data.lastDate||'—'}</div>
                <div style="height:5px;background:#f0f0f0;border-radius:99px;margin-top:4px;overflow:hidden;">
                  <div style="height:100%;background:var(--forest-glow);border-radius:99px;width:${Math.round(data.count/maxCount*100)}%;"></div>
                </div>
              </div>
              <div style="text-align:right;flex-shrink:0;">
                <div style="font-size:1.1rem;font-weight:800;color:var(--blue-mid);">${data.count}</div>
                <div style="font-size:.62rem;color:var(--muted);">surveys</div>
              </div>
            </div>`).join('')}
      </div>
    </div>

    <div class="ins-section">
      <div class="ins-hdr">
        <div class="ins-hdr-icon"></div>
        <div><div class="ins-hdr-title">Registered Students</div><div class="ins-hdr-sub">${students.length} total</div></div>
      </div>
      <div class="ins-body">
        ${!students.length
          ? '<div class="adm-empty">No students registered yet.</div>'
          : students.slice(0,20).map(s => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f5f5f5;">
              <div>
                <div style="font-size:.82rem;font-weight:600;color:var(--text);">${s.full_name||s.name||'Unknown'}</div>
                <div style="font-size:.68rem;color:var(--muted);">${s.reg_number||s.admission_number||''}</div>
              </div>
              <div style="font-size:.68rem;color:${s.role==='institution_admin'?'var(--forest-mid)':'var(--muted)'};font-weight:600;">${s.role||'Enumerator'}</div>
            </div>`).join('')
          + (students.length>20 ? `<div style="text-align:center;font-size:.75rem;color:var(--muted);padding-top:8px;">+${students.length-20} more</div>` : '')}
      </div>
    </div>
  `;
}

//  TAB: Data 
function _instTabData(el) {
  el.innerHTML = `
    <div style="display:flex;gap:8px;margin-bottom:12px;">
      <input id="inst-data-search" placeholder="Search location or name…"
        style="flex:1;padding:10px 12px;border:1.5px solid var(--border);border-radius:9px;font-family:inherit;font-size:.82rem;outline:none;background:#fafcfb;"
        oninput="_instDataFilter()">
      <button onclick="if(typeof exportSurveysAsCSV==='function')exportSurveysAsCSV(window._instData?.records||[])"
        style="padding:10px 13px;background:var(--blue-mid);color:#fff;border:none;border-radius:9px;font-size:.78rem;cursor:pointer;font-family:inherit;white-space:nowrap;font-weight:700;">
         CSV
      </button>
    </div>
    <div id="inst-data-table" style="font-size:.78rem;"></div>
  `;
  _instDataFilter();
}

function _instDataFilter() {
  const q = (document.getElementById('inst-data-search')?.value||'').toLowerCase();
  const recs = _instData.records;
  const filtered = q ? recs.filter(r => {
    const loc = (r.interview_location||r.location||'').toLowerCase();
    const iv  = (r.interviewer_name||r.interviewer||'').toLowerCase();
    return loc.includes(q) || iv.includes(q);
  }) : recs;

  const table = document.getElementById('inst-data-table');
  if (!table) return;
  if (!filtered.length) { table.innerHTML = '<div class="adm-empty">No records found.</div>'; return; }

  table.innerHTML = `
    <div style="font-size:.7rem;color:var(--muted);margin-bottom:8px;">Showing ${filtered.length} of ${recs.length}</div>
    <div style="display:flex;flex-direction:column;gap:6px;">
      ${filtered.slice(0,50).map((r,i) => {
        const loc = r.interview_location||r.location||'—';
        const iv  = r.interviewer_name||r.interviewer||'—';
        const dt  = r.interview_date||(r.synced_at||'').slice(0,10);
        return `<div class="ins-section" style="margin-bottom:0;border-radius:10px;">
          <div style="padding:10px 14px;display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-weight:700;font-size:.82rem;color:var(--text);"> ${loc}</div>
              <div style="font-size:.7rem;color:var(--muted);margin-top:2px;"> ${iv} ·  ${dt}</div>
            </div>
            <div style="font-size:.65rem;color:var(--muted);">#${i+1}</div>
          </div>
        </div>`;
      }).join('')}
      ${filtered.length>50 ? `<div style="text-align:center;font-size:.75rem;color:var(--muted);padding:8px;">+${filtered.length-50} more — export CSV</div>` : ''}
    </div>
  `;
}

//  TAB: Reports (drawers, not popup windows) 
function _instTabReports(el) {
  el.innerHTML = `
    <div class="adm-shelf-label">Available Reports</div>

    <div class="ins-section">
      <div class="ins-hdr">
        <div class="ins-hdr-icon"></div>
        <div><div class="ins-hdr-title">Summary Report</div><div class="ins-hdr-sub">Health indicators overview · PDF</div></div>
      </div>
      <div class="ins-body">
        <p style="font-size:.78rem;color:var(--muted);margin-bottom:12px;line-height:1.5;">A printable summary of all collected health data including infrastructure, disease burden, and nutrition indicators.</p>
        <button onclick="_instGenerateSummaryReport()" style="padding:10px 18px;background:var(--grad-brand);color:#fff;border:none;border-radius:9px;cursor:pointer;font-family:inherit;font-size:.82rem;font-weight:700;">
          Generate PDF
        </button>
      </div>
    </div>

    <div class="ins-section">
      <div class="ins-hdr">
        <div class="ins-hdr-icon"></div>
        <div><div class="ins-hdr-title">Data Export</div><div class="ins-hdr-sub">Raw survey data · CSV / Excel</div></div>
      </div>
      <div class="ins-body">
        <p style="font-size:.78rem;color:var(--muted);margin-bottom:12px;line-height:1.5;">Download all ${_instData.records.length} survey records as a spreadsheet-compatible file.</p>
        <button onclick="if(typeof exportSurveysAsCSV==='function')exportSurveysAsCSV(_instData.records)" style="padding:10px 18px;background:var(--navy-mid);color:#fff;border:none;border-radius:9px;cursor:pointer;font-family:inherit;font-size:.82rem;font-weight:700;">
          Download CSV
        </button>
      </div>
    </div>

    <div class="ins-section">
      <div class="ins-hdr">
        <div class="ins-hdr-icon"></div>
        <div><div class="ins-hdr-title">Risk Assessment</div><div class="ins-hdr-sub">High &amp; moderate risk households</div></div>
      </div>
      <div class="ins-body" id="rpt-risk-body">
        <p style="font-size:.78rem;color:var(--muted);margin-bottom:12px;line-height:1.5;">Households scored HIGH or MODERATE on composite risk factors.</p>
        <button onclick="_instRiskReportDrawer()" style="padding:10px 18px;background:var(--danger);color:#fff;border:none;border-radius:9px;cursor:pointer;font-family:inherit;font-size:.82rem;font-weight:700;">
          View Risk Report
        </button>
      </div>
    </div>

    <div class="ins-section">
      <div class="ins-hdr">
        <div class="ins-hdr-icon"></div>
        <div><div class="ins-hdr-title">Data Quality</div><div class="ins-hdr-sub">Completeness &amp; field accuracy</div></div>
      </div>
      <div class="ins-body" id="rpt-quality-body">
        ${_instQualityInline()}
      </div>
    </div>
  `;
}

function _instQualityInline() {
  const q = window.admMetrics?.data_quality;
  if (!q) return '<div style="color:var(--muted);font-size:.8rem;">Quality data not available yet.</div>';
  const c = q.field_completeness || [];
  if (!c.length) return '<div style="color:var(--muted);font-size:.8rem;">No quality data available.</div>';
  return `
    <div style="display:flex;gap:10px;margin-bottom:14px;">
      <div style="flex:1;text-align:center;background:var(--mint);border-radius:10px;padding:10px;">
        <div style="font-size:1.5rem;font-weight:800;color:var(--success);">${q.overall_quality_score}%</div>
        <div style="font-size:.65rem;color:var(--muted);">Overall Quality</div>
      </div>
      <div style="flex:1;text-align:center;background:var(--danger-pale);border-radius:10px;padding:10px;">
        <div style="font-size:1.5rem;font-weight:800;color:var(--danger);">${q.missing_critical_count||0}</div>
        <div style="font-size:.65rem;color:var(--muted);">Missing Critical</div>
      </div>
    </div>
    ${c.slice(0,8).map(f => `
      <div class="ins-progress">
        <div class="ins-progress-label"><span>${f.field}</span><span style="color:${f.pct>=95?'var(--success)':f.pct>=80?'var(--warn)':'var(--danger)'};">${f.pct}%</span></div>
        <div class="ins-progress-bar">
          <div class="ins-progress-fill" style="width:${f.pct}%;background:${f.pct>=95?'var(--forest-glow)':f.pct>=80?'var(--warn)':'var(--danger)'};"></div>
        </div>
      </div>`).join('')}
  `;
}

function _instRiskReportDrawer() {
  const risks = window.admMetrics?.risk_profiles || [];
  const high  = risks.filter(r => r.level === 'HIGH' || r.level === 'MODERATE');
  if (!high.length) { alert('No high-risk households identified in current data.'); return; }
  const body = document.getElementById('rpt-risk-body');
  if (!body) return;
  body.innerHTML = `
    <div style="font-size:.75rem;color:var(--muted);margin-bottom:10px;">${high.length} high/moderate risk households found</div>
    ${high.slice(0,10).map(r => `
      <div class="rec-card ${r.level==='HIGH'?'critical':'warning'}" style="margin-bottom:8px;">
        <div class="rec-card-title"> ${r.location} — ${r.level}</div>
        <div class="rec-card-body"> ${r.interviewer} · Score: ${r.score} · Factors: ${r.factors?.join(', ')||'—'}</div>
      </div>`).join('')}
    ${high.length>10 ? `<div style="text-align:center;font-size:.75rem;color:var(--muted);margin-top:6px;">+${high.length-10} more in full PDF export</div>` : ''}
  `;
}

function _instGenerateSummaryReport() {
  if (!window.admMetrics) { alert('Metrics still loading — try again in a moment.'); return; }
  if (typeof openGroupReport === 'function') { openGroupReport(); return; }
  alert('Report generator not available. Use CSV Export instead.');
}

//  TAB: Settings 
function _instTabSettings(el, instId) {
  const instName = (typeof getSessionInstitutionName==='function'&&getSessionInstitutionName()) || '—';
  el.innerHTML = `
    <div class="ins-section">
      <div class="ins-hdr"><div class="ins-hdr-icon"></div><div><div class="ins-hdr-title">Institution Details</div></div></div>
      <div class="ins-body">
        <div style="margin-bottom:10px;">
          <div style="font-size:.65rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px;">Institution Name</div>
          <div style="font-size:.9rem;font-weight:700;color:var(--text);">${instName}</div>
        </div>
        <div>
          <div style="font-size:.65rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px;">Institution ID</div>
          <div style="font-size:.72rem;color:var(--muted);word-break:break-all;">${instId||'—'}</div>
        </div>
      </div>
    </div>

    <div class="ins-section">
      <div class="ins-hdr"><div class="ins-hdr-icon"></div><div><div class="ins-hdr-title">Data Summary</div></div></div>
      <div class="ins-body">
        <div class="ins-metric-row">
          <div class="ins-metric ok"><div class="ins-metric-n">${_instData.records.length}</div><div class="ins-metric-l">Surveys</div></div>
          <div class="ins-metric ok"><div class="ins-metric-n">${_instData.students.length}</div><div class="ins-metric-l">Students</div></div>
          <div class="ins-metric ok"><div class="ins-metric-n">${window.admMetrics?.data_quality?.overall_quality_score||'—'}%</div><div class="ins-metric-l">Quality</div></div>
        </div>
      </div>
    </div>

    <div class="ins-section">
      <div class="ins-hdr"><div class="ins-hdr-icon">⚙</div><div><div class="ins-hdr-title">Actions</div></div></div>
      <div class="ins-body" style="display:flex;flex-direction:column;gap:8px;">
        <button onclick="window._mssToggleTheme && window._mssToggleTheme()"
          style="width:100%;padding:12px;background:var(--surface);color:var(--text);border:1.5px solid var(--border);border-radius:9px;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:600;">
          🌓 Toggle Light / Dark Mode
        </button>
        <button onclick="if(typeof exportSurveysAsCSV==='function')exportSurveysAsCSV(_instData.records)"
          style="width:100%;padding:12px;background:var(--navy-mid);color:#fff;border:none;border-radius:9px;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:700;">
          📥 Export All Data (CSV)
        </button>
        <button onclick="_instAdminLoadData('${instId||''}')"
          style="width:100%;padding:12px;background:var(--surface);color:var(--text);border:1.5px solid var(--border);border-radius:9px;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:600;">
          🔄 Refresh Data
        </button>
      </div>
    </div>

    <div class="ins-section">
      <div class="ins-hdr"><div class="ins-hdr-icon"></div><div><div class="ins-hdr-title">Account</div></div></div>
      <div class="ins-body">
        <button id="inst-settings-signout"
          style="width:100%;padding:12px;background:var(--danger-pale);color:var(--danger);border:1px solid #f5c6c6;border-radius:9px;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:700;">
          ⏻ Sign Out
        </button>
      </div>
    </div>
  `;

  document.getElementById('inst-settings-signout')?.addEventListener('click', () => {
    if(!confirm('Sign out and return to login?\n\nLocal records are kept safely.')) return;
    document.getElementById('inst-admin-dashboard')?.remove();
    if(window.HS?.Auth) window.HS.Auth.clearToken();
    if(typeof authClearSession==='function') authClearSession();
    ['chsa_auth','chsa_user_name','chsa_is_admin_bypass','chsa_is_inst_admin'].forEach(k=>localStorage.removeItem(k));
    location.reload();
  });
}
