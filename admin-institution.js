/* Medical Survey System — Institution Admin Dashboard © 2026
 * ENHANCED: Mirrors Super Admin detail level, scoped to own institution only
 * Full analytics · Individual & group reports · Delete own data · Rich tables
 * HazzinBR · Great Lakes University · Community Health Survey System
 */

// ─── SVG ICON LIBRARY (shared with super-admin style) ────────────────────────

const _IA_ICONS = {
  home:        `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L10 3l7 6.5"/><path d="M5 8v9h4v-5h2v5h4V8"/></svg>`,
  analytics:   `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,14 7,9 11,12 18,5"/><line x1="2" y1="18" x2="18" y2="18"/></svg>`,
  people:      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="6" r="3"/><path d="M2 18v-2a5 5 0 0 1 10 0v2"/><circle cx="15" cy="7" r="2.5"/><path d="M13 18v-1.5a4 4 0 0 1 5 0V18"/></svg>`,
  survey:      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="12" height="16" rx="2"/><line x1="8" y1="7" x2="14" y2="7"/><line x1="8" y1="10" x2="14" y2="10"/><line x1="8" y1="13" x2="11" y2="13"/><circle cx="6" cy="7" r="0.8" fill="currentColor"/><circle cx="6" cy="10" r="0.8" fill="currentColor"/><circle cx="6" cy="13" r="0.8" fill="currentColor"/></svg>`,
  export:      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v3h12v-3"/><polyline points="10,3 10,13"/><polyline points="7,10 10,13 13,10"/></svg>`,
  settings:    `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="3"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"/></svg>`,
  download:    `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v2h12v-2"/><polyline points="10,4 10,13"/><polyline points="7,10 10,13 13,10"/></svg>`,
  refresh:     `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10a7 7 0 1 1 1.5 4.5"/><polyline points="3,15 3,10 8,10"/></svg>`,
  delete:      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="5,5 15,15"/><polyline points="15,5 5,15"/></svg>`,
  trash:       `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,6 16,6"/><path d="M8 6V4h4v2"/><rect x="5" y="6" width="10" height="11" rx="1"/><line x1="8" y1="9" x2="8" y2="14"/><line x1="12" y1="9" x2="12" y2="14"/></svg>`,
  warning:     `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2L2 17h16L10 2z"/><line x1="10" y1="8" x2="10" y2="12"/><circle cx="10" cy="15" r="0.7" fill="currentColor"/></svg>`,
  check:       `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3,10 8,15 17,5"/></svg>`,
  health:      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17s-7-4.5-7-9a4 4 0 0 1 7-2.67A4 4 0 0 1 17 8c0 4.5-7 9-7 9z"/></svg>`,
  shield:      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2L4 5v5c0 4 2.5 7 6 8 3.5-1 6-4 6-8V5L10 2z"/></svg>`,
  signout:     `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4h4v12h-4"/><polyline points="8,13 12,10 8,7"/><line x1="2" y1="10" x2="12" y2="10"/></svg>`,
  nutrition:   `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2c-2 3-6 4-6 8a6 6 0 0 0 12 0c0-4-4-5-6-8z"/><path d="M10 10v6"/></svg>`,
  water:       `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2l-5 8a5 5 0 0 0 10 0L10 2z"/></svg>`,
  risk:        `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="8"/><line x1="10" y1="7" x2="10" y2="11"/><circle cx="10" cy="14" r="0.8" fill="currentColor"/></svg>`,
  filter:      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="17" y2="6"/><line x1="6" y1="10" x2="14" y2="10"/><line x1="9" y1="14" x2="11" y2="14"/></svg>`,
  person:      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="7" r="3.5"/><path d="M3 18v-1.5a7 7 0 0 1 14 0V18"/></svg>`,
  chevron_right:`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7,4 13,10 7,16"/></svg>`,
  chevron_down: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,7 10,13 16,7"/></svg>`,
  calendar:    `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="14" height="14" rx="2"/><line x1="3" y1="8" x2="17" y2="8"/><line x1="7" y1="2" x2="7" y2="6"/><line x1="13" y1="2" x2="13" y2="6"/></svg>`,
  location:    `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2a6 6 0 0 0-6 6c0 5 6 10 6 10s6-5 6-10a6 6 0 0 0-6-6z"/><circle cx="10" cy="8" r="2"/></svg>`,
  medal:       `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="13" r="5"/><path d="M7 2h6l1 4H6L7 2z"/><line x1="10" y1="8" x2="10" y2="10"/></svg>`,
  institution: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="16" height="12" rx="1"/><path d="M6 7V5a4 4 0 0 1 8 0v2"/><line x1="10" y1="11" x2="10" y2="15"/><line x1="8" y1="13" x2="12" y2="13"/></svg>`,
  profile:     `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="7" r="3.5"/><path d="M3 18v-1.5a7 7 0 0 1 14 0V18"/><circle cx="16" cy="5" r="3" fill="var(--ia-accent)" stroke="none"/><text x="16" y="6.5" text-anchor="middle" font-size="4" fill="#fff" font-weight="800">✎</text></svg>`,
  camera:      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7h2l2-3h8l2 3h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="10" cy="11" r="3"/></svg>`,
  pin:         `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2a5 5 0 0 0-5 5c0 4.5 5 11 5 11s5-6.5 5-11a5 5 0 0 0-5-5z"/><circle cx="10" cy="7" r="2"/></svg>`,
  toggle_on:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="22" height="12" rx="6"/><circle cx="17" cy="12" r="4" fill="var(--ia-accent)" stroke="none"/></svg>`,
  toggle_off:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="22" height="12" rx="6"/><circle cx="7" cy="12" r="4" fill="var(--ia-muted)" stroke="none"/></svg>`,
  users_limit: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="3"/><path d="M1 17v-1a6 6 0 0 1 9.9-4.5"/><circle cx="15" cy="13" r="4"/><line x1="15" y1="11" x2="15" y2="13"/><circle cx="15" cy="14.5" r=".4" fill="currentColor"/></svg>`,
};

function _iaIcon(name, size=16, color='currentColor') {
  const svg = _IA_ICONS[name];
  if (!svg) return '';
  return svg.replace('<svg ', `<svg width="${size}" height="${size}" color="${color}" `);
}

// ─── AUTH ────────────────────────────────────────────────────────────────────

function showInstAdminHome() {
  const existing = document.getElementById('inst-admin-dashboard');
  if (existing) { existing.style.display = 'flex'; return; }
  if (typeof initInstAdminDashboard === 'function') initInstAdminDashboard();
}

function isSuperAdmin() {
  // Delegate to unified Auth if api-client.js is loaded
  if (window.HS && window.HS.Auth) return window.HS.Auth.isSuperAdmin();
  if (localStorage.getItem('chsa_is_admin_bypass') === '1') return true;
  try { return JSON.parse(localStorage.getItem('chsa_session') || '{}').role === 'super_admin'; }
  catch(e) { return false; }
}
function isInstitutionAdmin() {
  // Delegate to unified Auth if api-client.js is loaded
  if (window.HS && window.HS.Auth) {
    const role = window.HS.Auth.getRole();
    return role === 'institution_admin';
  }
  if (localStorage.getItem('chsa_is_inst_admin') === '1') return true;
  try {
    const r = JSON.parse(localStorage.getItem('chsa_session') || '{}').role;
    return r === 'institution_admin';
  } catch(e) { return false; }
}

// ─── INIT ────────────────────────────────────────────────────────────────────

function initInstAdminDashboard() {
  if (!isInstitutionAdmin() && !isSuperAdmin()) return;
  _injectIAStyles();
  _iaVillageInit(); // expose window.IA_VILLAGE_LIST immediately
  _renderInstAdminDashboard();
  setTimeout(function(){ if(typeof checkAppVersion==='function') checkAppVersion(); }, 3000);
}

// ─── STYLES ──────────────────────────────────────────────────────────────────

function _injectIAStyles() {
  if (document.getElementById('ia-enhanced-styles')) return;
  const s = document.createElement('style');
  s.id = 'ia-enhanced-styles';
  s.textContent = `
    /* ── Palette: Dark (default) ── */
    #inst-admin-dashboard {
      --ia-bg:       #0b0f1a;
      --ia-surface:  #111827;
      --ia-card:     #1a2236;
      --ia-border:   rgba(255,255,255,.07);
      --ia-border2:  rgba(255,255,255,.13);
      --ia-text:     #f1f5f9;
      --ia-muted:    #6b7280;
      --ia-dim:      #374151;
      --ia-accent:   #0ea572;
      --ia-accent2:  #34d399;
      --ia-blue:     #2e7cf6;
      --ia-blue2:    #38bdf8;
      --ia-green:    #22c55e;
      --ia-amber:    #f59e0b;
      --ia-red:      #ef4444;
      --ia-purple:   #a78bfa;
      --ia-teal:     #14b8a6;
      --ia-glow:     rgba(14,165,114,.18);
      --ia-hero-from:#051a10;
      --ia-hero-to:  #060d1a;
      --ia-header-from:#040e09;
      --ia-header-to:#0a1e12;
      --ia-nav-hover:#152b1e;
      --ia-progress-track:rgba(255,255,255,.07);
      --ia-table-head:rgba(255,255,255,.04);
      --ia-table-row-hover:rgba(255,255,255,.03);
      --ia-table-border:rgba(255,255,255,.04);
      --ia-rec-critical-bg:rgba(239,68,68,.08);
      --ia-rec-high-bg:rgba(245,158,11,.08);
      --ia-rec-medium-bg:rgba(34,197,94,.08);
      --ia-metric-bg:rgba(255,255,255,.04);
      --ia-input-bg:#1a2236;
      --ia-danger-hdr:rgba(239,68,68,.07);
      --ia-danger-notice-bg:rgba(239,68,68,.06);
      --ia-spinner-track:rgba(14,165,114,.2);
      --ia-btn-bg:       rgba(255,255,255,.07);
      --ia-btn-bg-hover: rgba(255,255,255,.12);
      --ia-btn-border-hover:rgba(255,255,255,.22);
      --ia-back-bg:      rgba(255,255,255,.08);
      --ia-back-bg-hover:rgba(255,255,255,.13);
      --ia-action-icon-bg:rgba(255,255,255,.06);
      --ia-export-bg:    rgba(255,255,255,.04);
      --ia-export-bg-hover:rgba(255,255,255,.08);
      --ia-tag-bg:       rgba(255,255,255,.06);
      --ia-user-row-border:rgba(255,255,255,.05);
      --ia-avatar-bg:    rgba(14,165,114,.2);
      --ia-loading-bg:   rgba(11,15,26,.92);
      --ia-danger-btn-bg:rgba(255,255,255,.04);
      --ia-generic-btn-bg:rgba(255,255,255,.05);
      --ia-rec-body-color:rgba(241,245,249,.75);
      --ia-chart-line:   rgba(255,255,255,.05);
      --ia-disease-track:rgba(255,255,255,.07);
    }

    /* ── Palette: Light ── */
    #inst-admin-dashboard.ia-light {
      --ia-bg:       #f0f4f8;
      --ia-surface:  #e4eaf2;
      --ia-card:     #ffffff;
      --ia-border:   rgba(0,0,0,.08);
      --ia-border2:  rgba(0,0,0,.14);
      --ia-text:     #0f172a;
      --ia-muted:    #64748b;
      --ia-dim:      #94a3b8;
      --ia-accent:   #059669;
      --ia-accent2:  #10b981;
      --ia-blue:     #1d63d4;
      --ia-blue2:    #0284c7;
      --ia-green:    #16a34a;
      --ia-amber:    #d97706;
      --ia-red:      #dc2626;
      --ia-purple:   #7c3aed;
      --ia-teal:     #0f766e;
      --ia-glow:     rgba(5,150,105,.12);
      --ia-hero-from:#d1fae5;
      --ia-hero-to:  #ecfdf5;
      --ia-header-from:#065f46;
      --ia-header-to:#065f46;
      --ia-nav-hover:#f0fdf4;
      --ia-progress-track:rgba(0,0,0,.07);
      --ia-table-head:rgba(0,0,0,.04);
      --ia-table-row-hover:rgba(0,0,0,.02);
      --ia-table-border:rgba(0,0,0,.05);
      --ia-rec-critical-bg:rgba(220,38,38,.06);
      --ia-rec-high-bg:rgba(217,119,6,.06);
      --ia-rec-medium-bg:rgba(22,163,74,.06);
      --ia-metric-bg:rgba(0,0,0,.03);
      --ia-input-bg:#ffffff;
      --ia-danger-hdr:rgba(220,38,38,.05);
      --ia-danger-notice-bg:rgba(220,38,38,.04);
      --ia-spinner-track:rgba(5,150,105,.15);
      --ia-btn-bg:       rgba(255,255,255,.6);
      --ia-btn-bg-hover: rgba(255,255,255,.9);
      --ia-btn-border-hover:rgba(0,0,0,.18);
      --ia-back-bg:      rgba(255,255,255,.7);
      --ia-back-bg-hover:rgba(255,255,255,1);
      --ia-action-icon-bg:rgba(0,0,0,.05);
      --ia-export-bg:    rgba(0,0,0,.02);
      --ia-export-bg-hover:rgba(0,0,0,.05);
      --ia-tag-bg:       rgba(0,0,0,.04);
      --ia-user-row-border:rgba(0,0,0,.06);
      --ia-avatar-bg:    rgba(5,150,105,.12);
      --ia-loading-bg:   rgba(240,244,248,.94);
      --ia-danger-btn-bg:rgba(0,0,0,.02);
      --ia-generic-btn-bg:rgba(0,0,0,.03);
      --ia-rec-body-color:rgba(15,23,42,.7);
      --ia-chart-line:   rgba(0,0,0,.05);
      --ia-disease-track:rgba(0,0,0,.07);
    }

    /* ── Base ── */
    #inst-admin-dashboard {
      position:fixed;inset:0;z-index:9000;
      background:var(--ia-bg);
      color:var(--ia-text);
      font-family:'DM Sans',system-ui,sans-serif;
      display:flex;flex-direction:column;
      overflow:hidden;
      transition:background .2s,color .2s;
    }
    #inst-admin-dashboard *, #inst-admin-dashboard *::before, #inst-admin-dashboard *::after {
      box-sizing:border-box;
    }
    #inst-admin-dashboard input,
    #inst-admin-dashboard button,
    #inst-admin-dashboard select,
    #inst-admin-dashboard textarea {
      background-color:var(--ia-input-bg);
      color:var(--ia-text);
      border-color:var(--ia-border2);
      -webkit-appearance:none;
      appearance:none;
    }

    /* ── Header ── */
    .ia-header {
      background:linear-gradient(135deg,var(--ia-header-from),var(--ia-header-to));
      border-bottom:1px solid var(--ia-border2);
      padding:11px 16px;
      flex-shrink:0;
      display:flex;align-items:center;justify-content:space-between;
      box-shadow:0 2px 20px rgba(0,0,0,.4);
    }
    .ia-header-brand { display:flex;align-items:center;gap:10px; }
    .ia-header-logo { height:28px;filter:drop-shadow(0 0 8px rgba(14,165,114,.5)); }
    .ia-header-title { font-size:.8rem;font-weight:800;letter-spacing:-.01em; }
    .ia-header-sub { font-size:.52rem;color:rgba(255,255,255,.5);letter-spacing:.5px;text-transform:uppercase; }
    .ia-header-btn {
      display:flex;align-items:center;gap:6px;
      background:var(--ia-btn-bg);
      border:1px solid var(--ia-border2);
      color:var(--ia-text);
      border-radius:8px;padding:7px 12px;
      font-size:.72rem;cursor:pointer;font-family:inherit;font-weight:700;
      transition:background .15s,border-color .15s;
    }
    .ia-header-btn:hover { background:var(--ia-btn-bg-hover);border-color:var(--ia-btn-border-hover); }

    /* ── Scroll container ── */
    #ia-main-content {
      flex:1;overflow-y:auto;
      scrollbar-width:thin;scrollbar-color:var(--ia-dim) transparent;
    }
    #ia-main-content::-webkit-scrollbar { width:4px; }
    #ia-main-content::-webkit-scrollbar-thumb { background:var(--ia-dim);border-radius:2px; }

    /* ── Hero ── */
    .ia-hero {
      background:linear-gradient(160deg,var(--ia-hero-from) 0%,var(--ia-hero-to) 60%,var(--ia-hero-from) 100%);
      padding:20px 16px 16px;
      border-bottom:1px solid var(--ia-border);
      position:relative;overflow:hidden;
    }
    .ia-hero::before {
      content:'';position:absolute;top:-60px;right:-40px;
      width:220px;height:220px;border-radius:50%;
      background:radial-gradient(circle,rgba(14,165,114,.15) 0%,transparent 70%);
      pointer-events:none;
    }
    .ia-hero-label { font-size:.6rem;text-transform:uppercase;letter-spacing:1.2px;color:var(--ia-accent2);font-weight:700;margin-bottom:4px; }
    .ia-hero-name { font-size:1.3rem;font-weight:800;letter-spacing:-.02em;margin-bottom:4px; }
    .ia-hero-welcome { font-size:.72rem;color:var(--ia-muted);margin-bottom:14px; }
    .ia-hero-kpi-row { display:grid;grid-template-columns:repeat(4,1fr);gap:8px; }
    .ia-hero-kpi {
      background:var(--ia-metric-bg);
      border:1px solid var(--ia-border);
      border-radius:12px;padding:10px 8px;text-align:center;
      cursor:pointer;transition:border-color .15s,background .15s;
    }
    .ia-hero-kpi:hover { border-color:var(--ia-border2); }
    .ia-hero-kpi-n { font-size:1.1rem;font-weight:800;letter-spacing:-.02em; }
    .ia-hero-kpi-l { font-size:.55rem;color:var(--ia-muted);text-transform:uppercase;letter-spacing:.6px;margin-top:2px; }

    /* ── Section label ── */
    .ia-label {
      font-size:.6rem;text-transform:uppercase;letter-spacing:1.2px;
      color:var(--ia-muted);font-weight:700;
      padding:14px 16px 6px;
    }

    /* ── Nav shelf cards ── */
    .ia-shelf-grid { display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 16px 12px; }
    .ia-nav-card {
      background:var(--ia-card);
      border:1px solid var(--ia-border);
      border-radius:14px;padding:14px 13px;
      cursor:pointer;text-align:left;
      transition:border-color .15s,transform .1s,background .15s;
      position:relative;overflow:hidden;
    }
    .ia-nav-card:hover { border-color:var(--ia-border2);background:var(--ia-nav-hover);transform:translateY(-1px); }
    .ia-nav-card:active { transform:translateY(0); }
    .ia-nav-card-icon {
      width:32px;height:32px;border-radius:9px;
      display:flex;align-items:center;justify-content:center;
      margin-bottom:10px;
    }
    .ia-nav-card-icon.green  { background:rgba(14,165,114,.15);color:var(--ia-accent); }
    .ia-nav-card-icon.blue   { background:rgba(46,124,246,.15);color:var(--ia-blue); }
    .ia-nav-card-icon.amber  { background:rgba(245,158,11,.15);color:var(--ia-amber); }
    .ia-nav-card-icon.purple { background:rgba(167,139,250,.15);color:var(--ia-purple); }
    .ia-nav-card-icon.red    { background:rgba(239,68,68,.15);color:var(--ia-red); }
    .ia-nav-card-title { font-size:.85rem;font-weight:800;margin-bottom:3px; }
    .ia-nav-card-sub { font-size:.65rem;color:var(--ia-muted);line-height:1.4; }
    .ia-nav-card-badge {
      display:inline-block;margin-top:8px;
      background:rgba(14,165,114,.12);color:var(--ia-accent2);
      border:1px solid rgba(14,165,114,.2);
      border-radius:6px;padding:2px 7px;font-size:.6rem;font-weight:700;
    }
    .ia-nav-card-badge.alert { background:rgba(239,68,68,.12);color:#fca5a5;border-color:rgba(239,68,68,.2); }

    /* ── Stat rows ── */
    .ia-stat-rows { display:flex;flex-direction:column;gap:0;padding:0 16px 12px; }
    .ia-stat-row {
      display:flex;align-items:center;justify-content:space-between;
      padding:11px 14px;
      background:var(--ia-card);border:1px solid var(--ia-border);
      cursor:pointer;transition:background .15s;
    }
    .ia-stat-row:first-child { border-radius:12px 12px 0 0; }
    .ia-stat-row:last-child  { border-radius:0 0 12px 12px; }
    .ia-stat-row:not(:last-child) { border-bottom-color:transparent; }
    .ia-stat-row:hover { background:var(--ia-nav-hover); }
    .ia-stat-row-left { display:flex;align-items:center;gap:10px; }
    .ia-stat-dot { width:8px;height:8px;border-radius:50%;flex-shrink:0; }
    .ia-stat-dot.green  { background:var(--ia-green);box-shadow:0 0 6px rgba(34,197,94,.5); }
    .ia-stat-dot.amber  { background:var(--ia-amber);box-shadow:0 0 6px rgba(245,158,11,.5); }
    .ia-stat-dot.blue   { background:var(--ia-blue);box-shadow:0 0 6px rgba(46,124,246,.5); }
    .ia-stat-dot.red    { background:var(--ia-red);box-shadow:0 0 6px rgba(239,68,68,.5); }
    .ia-stat-dot.teal   { background:var(--ia-teal);box-shadow:0 0 6px rgba(20,184,166,.5); }
    .ia-stat-label { font-size:.78rem;color:var(--ia-text);font-weight:500; }
    .ia-stat-value { font-size:.88rem;font-weight:800; }
    .ia-stat-arrow { color:var(--ia-dim);margin-left:6px;display:flex;align-items:center; }

    /* ── Quick action rows ── */
    .ia-action-rows { display:flex;flex-direction:column;gap:0;padding:0 16px 20px; }
    .ia-action-row {
      display:flex;align-items:center;gap:12px;
      padding:12px 14px;
      background:var(--ia-card);border:1px solid var(--ia-border);
      cursor:pointer;transition:background .15s;
      font-family:inherit;width:100%;text-align:left;color:var(--ia-text);
    }
    .ia-action-row:first-child { border-radius:12px 12px 0 0; }
    .ia-action-row:last-child  { border-radius:0 0 12px 12px; }
    .ia-action-row:not(:last-child) { border-bottom-color:transparent; }
    .ia-action-row:hover { background:var(--ia-nav-hover); }
    .ia-action-icon { width:28px;height:28px;border-radius:7px;background:var(--ia-action-icon-bg);display:flex;align-items:center;justify-content:center;flex-shrink:0; }
    .ia-action-label { font-size:.8rem;font-weight:600;flex:1; }

    /* ── SVG Bar Chart ── */
    .ia-chart-wrap { padding:4px 0 0;overflow:hidden; }
    .ia-bar-chart svg text { font-family:'DM Sans',system-ui,sans-serif; }

    /* ── Donut ── */
    .ia-donut-row { display:flex;align-items:center;gap:14px;padding:10px 0; }
    .ia-donut-legend { flex:1; }
    .ia-donut-legend-item { display:flex;align-items:center;gap:7px;margin-bottom:6px;font-size:.72rem; }
    .ia-donut-dot { width:9px;height:9px;border-radius:2px;flex-shrink:0; }

    /* ── Collapsible card ── */
    .ia-collapse {
      background:var(--ia-card);border:1px solid var(--ia-border);
      border-radius:13px;margin-bottom:10px;overflow:hidden;
    }
    .ia-collapse-hdr {
      display:flex;align-items:center;gap:12px;
      padding:13px 14px;cursor:pointer;
      transition:background .15s;user-select:none;
      border:none;background:transparent;width:100%;text-align:left;color:var(--ia-text);font-family:inherit;
    }
    .ia-collapse-hdr:hover { background:var(--ia-table-row-hover); }
    .ia-collapse-hdr-icon { width:32px;height:32px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
    .ia-collapse-hdr-text { flex:1; }
    .ia-collapse-hdr-title { font-size:.85rem;font-weight:700; }
    .ia-collapse-hdr-sub { font-size:.65rem;color:var(--ia-muted);margin-top:1px; }
    .ia-collapse-hdr-arrow { color:var(--ia-muted);transition:transform .2s;display:flex;align-items:center; }
    .ia-collapse-hdr-arrow.open { transform:rotate(90deg); }
    .ia-collapse-body { padding:0 14px 14px;display:none; }
    .ia-collapse-body.open { display:block; }

    /* ── Progress bars ── */
    .ia-progress { margin-bottom:10px; }
    .ia-progress-header { display:flex;justify-content:space-between;align-items:baseline;margin-bottom:5px; }
    .ia-progress-label { font-size:.74rem;color:var(--ia-text); }
    .ia-progress-pct { font-size:.74rem;font-weight:700; }
    .ia-progress-track { height:6px;background:var(--ia-progress-track);border-radius:3px;overflow:hidden; }
    .ia-progress-fill { height:100%;border-radius:3px;transition:width .4s ease; }

    /* ── Table ── */
    .ia-table-wrap { overflow-x:auto;margin-bottom:2px; }
    .ia-table { width:100%;border-collapse:collapse;font-size:.74rem; }
    .ia-table th {
      background:var(--ia-table-head);color:var(--ia-muted);
      font-weight:700;font-size:.62rem;text-transform:uppercase;letter-spacing:.7px;
      padding:8px 10px;text-align:left;border-bottom:1px solid var(--ia-border);
    }
    .ia-table td { padding:9px 10px;border-bottom:1px solid var(--ia-table-border);vertical-align:middle; }
    .ia-table tr:last-child td { border-bottom:none; }
    .ia-table tr:hover td { background:var(--ia-table-row-hover); }
    .ia-table .badge { display:inline-block;padding:2px 7px;border-radius:5px;font-size:.62rem;font-weight:700; }
    .ia-table .badge-green  { background:rgba(34,197,94,.12);color:#86efac; }
    .ia-table .badge-amber  { background:rgba(245,158,11,.12);color:#fcd34d; }
    .ia-table .badge-red    { background:rgba(239,68,68,.12);color:#fca5a5; }
    .ia-table .badge-blue   { background:rgba(46,124,246,.12);color:#93c5fd; }
    .ia-table .badge-purple { background:rgba(167,139,250,.12);color:#c4b5fd; }
    .ia-table .badge-teal   { background:rgba(20,184,166,.12);color:#5eead4; }

    /* ── Section view (subpages) ── */
    .ia-view-header {
      background:linear-gradient(135deg,var(--ia-header-from),var(--ia-header-to));
      border-bottom:1px solid var(--ia-border2);
      padding:12px 16px;flex-shrink:0;display:flex;align-items:center;gap:12px;
    }
    .ia-back-btn {
      display:flex;align-items:center;gap:6px;
      background:var(--ia-back-bg);border:1px solid var(--ia-border2);
      color:var(--ia-text);border-radius:8px;padding:7px 11px;
      font-size:.75rem;cursor:pointer;font-family:inherit;font-weight:700;
      transition:background .15s;
    }
    .ia-back-btn:hover { background:var(--ia-back-bg-hover); }
    .ia-view-title { font-size:.92rem;font-weight:800; }

    /* ── Metric trio ── */
    .ia-metric-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px; }
    .ia-metric {
      background:var(--ia-metric-bg);border:1px solid var(--ia-border);
      border-radius:11px;padding:12px 8px;text-align:center;
    }
    .ia-metric-n { font-size:1.1rem;font-weight:800; }
    .ia-metric-l { font-size:.6rem;color:var(--ia-muted);text-transform:uppercase;letter-spacing:.5px;margin-top:2px; }
    .ia-metric.good  { border-color:rgba(34,197,94,.2); }
    .ia-metric.warn  { border-color:rgba(245,158,11,.2); }
    .ia-metric.bad   { border-color:rgba(239,68,68,.2); }
    .ia-metric.good .ia-metric-n  { color:var(--ia-green); }
    .ia-metric.warn .ia-metric-n  { color:var(--ia-amber); }
    .ia-metric.bad .ia-metric-n   { color:var(--ia-red); }

    /* ── Rec cards ── */
    .ia-rec { border-radius:10px;padding:11px 13px;margin-bottom:8px;border-left:3px solid; }
    .ia-rec.critical { background:var(--ia-rec-critical-bg);border-color:var(--ia-red); }
    .ia-rec.high     { background:var(--ia-rec-high-bg);border-color:var(--ia-amber); }
    .ia-rec.medium   { background:var(--ia-rec-medium-bg);border-color:var(--ia-green); }
    .ia-rec-title { font-size:.73rem;font-weight:800;margin-bottom:3px;text-transform:uppercase;letter-spacing:.5px; }
    .ia-rec-body  { font-size:.74rem;color:var(--ia-rec-body-color);line-height:1.5; }

    /* ── User rows ── */
    .ia-user-row {
      display:flex;align-items:center;gap:10px;
      padding:10px 0;border-bottom:1px solid var(--ia-user-row-border);
    }
    .ia-user-row:last-child { border-bottom:none; }
    .ia-user-avatar {
      width:34px;height:34px;border-radius:50%;
      background:linear-gradient(135deg,var(--ia-accent),var(--ia-accent2));
      color:#fff;display:flex;align-items:center;justify-content:center;
      font-weight:800;font-size:.85rem;flex-shrink:0;
    }
    .ia-user-avatar.dim { background:var(--ia-avatar-bg);color:var(--ia-muted); }
    .ia-user-name { font-weight:700;font-size:.82rem; }
    .ia-user-sub  { font-size:.67rem;color:var(--ia-muted);margin-top:1px; }
    .ia-del-btn {
      padding:4px 9px;border-radius:6px;cursor:pointer;font-size:.63rem;font-weight:700;
      border:1px solid rgba(239,68,68,.25);background:rgba(239,68,68,.08);color:#fca5a5;
      transition:background .15s;white-space:nowrap;display:flex;align-items:center;gap:4px;
      font-family:inherit;
    }
    .ia-del-btn:hover { background:rgba(239,68,68,.15); }

    /* ── Search input ── */
    .ia-search {
      width:100%;padding:9px 12px 9px 36px;
      border:1px solid var(--ia-border2);border-radius:10px;
      background:var(--ia-card);color:var(--ia-text);
      font-family:inherit;font-size:.8rem;outline:none;
      box-sizing:border-box;margin-bottom:12px;
      transition:border-color .15s;
    }
    .ia-search:focus { border-color:var(--ia-accent); }
    .ia-search-wrap { position:relative; }
    .ia-search-icon { position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--ia-muted);pointer-events:none; }

    /* ── Danger zone ── */
    .ia-danger-section { border:1px solid rgba(239,68,68,.2);border-radius:13px;overflow:hidden;margin-bottom:10px; }
    .ia-danger-hdr { background:var(--ia-danger-hdr);padding:12px 14px;border-bottom:1px solid rgba(239,68,68,.15); }
    .ia-danger-hdr-title { font-size:.85rem;font-weight:700;color:var(--ia-red); }
    .ia-danger-hdr-sub { font-size:.65rem;color:var(--ia-muted);margin-top:2px; }
    .ia-danger-body { padding:12px 14px;display:flex;flex-direction:column;gap:8px; }
    .ia-danger-notice { background:var(--ia-danger-notice-bg);border:1px solid rgba(239,68,68,.15);border-radius:8px;padding:10px 12px;font-size:.74rem;color:var(--ia-red);line-height:1.6; }
    .ia-danger-btn {
      width:100%;padding:12px;border-radius:9px;cursor:pointer;
      font-family:inherit;font-size:.83rem;font-weight:700;
      background:var(--ia-danger-btn-bg);color:#fca5a5;
      border:1px solid rgba(239,68,68,.2);
      display:flex;align-items:center;justify-content:center;gap:8px;
      transition:background .15s,border-color .15s;
    }
    .ia-danger-btn:hover { background:rgba(239,68,68,.1);border-color:rgba(239,68,68,.3); }
    .ia-danger-btn.full { background:linear-gradient(135deg,rgba(220,38,38,.7),rgba(153,27,27,.8));color:#fff;border-color:transparent; }
    .ia-danger-btn.full:hover { background:linear-gradient(135deg,#dc2626,#991b1b); }
    .ia-danger-btn-sub { display:block;font-size:.63rem;font-weight:400;opacity:.65;margin-top:2px; }

    /* ── Export buttons ── */
    .ia-export-btn {
      display:flex;align-items:center;gap:10px;
      width:100%;padding:12px 14px;
      background:var(--ia-export-bg);border:1px solid var(--ia-border);
      border-radius:10px;color:var(--ia-text);font-family:inherit;font-size:.82rem;font-weight:600;
      cursor:pointer;text-align:left;transition:background .15s,border-color .15s;
      margin-bottom:8px;
    }
    .ia-export-btn:hover { background:var(--ia-export-bg-hover);border-color:var(--ia-border2); }
    .ia-export-btn-icon { width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
    .ia-export-btn-text-main { font-size:.82rem;font-weight:700; }
    .ia-export-btn-text-sub { font-size:.65rem;color:var(--ia-muted);margin-top:1px; }

    /* ── Disease list ── */
    .ia-disease-item { display:flex;align-items:center;gap:8px;margin-bottom:8px; }
    .ia-disease-name { font-size:.74rem;width:130px;flex-shrink:0;color:var(--ia-text); }
    .ia-disease-track { flex:1;height:5px;background:var(--ia-disease-track);border-radius:3px;overflow:hidden; }
    .ia-disease-fill { height:100%;background:linear-gradient(90deg,var(--ia-accent),var(--ia-accent2));border-radius:3px; }
    .ia-disease-count { font-size:.7rem;font-weight:700;color:var(--ia-muted);width:28px;text-align:right; }

    /* ── Mini grid ── */
    .ia-mini-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px; }
    .ia-mini-stat { background:var(--ia-export-bg);border:1px solid var(--ia-border);border-radius:9px;padding:8px 6px;text-align:center; }
    .ia-mini-stat-n { font-size:.85rem;font-weight:800; }
    .ia-mini-stat-l { font-size:.57rem;color:var(--ia-muted);margin-top:1px; }

    /* ── Tag ── */
    .ia-tag { display:inline-flex;align-items:center;gap:4px;background:var(--ia-tag-bg);border:1px solid var(--ia-border);border-radius:6px;padding:3px 8px;font-size:.65rem;font-weight:600; }

    /* ── Loading ── */
    #ia-loading {
      position:absolute;inset:0;
      background:var(--ia-loading-bg);
      display:flex;align-items:center;justify-content:center;z-index:10;
    }
    .ia-spinner {
      width:36px;height:36px;border:3px solid var(--ia-spinner-track);
      border-top-color:var(--ia-accent);border-radius:50%;
      animation:ia-spin 1s linear infinite;
    }
    @keyframes ia-spin { to { transform:rotate(360deg); } }
    @keyframes ia-fadein { from { opacity:0;transform:translateY(6px); } to { opacity:1;transform:none; } }
    .ia-anim { animation:ia-fadein .25s ease both; }

    /* ── Divider ── */
    .ia-divider { height:1px;background:var(--ia-border);margin:14px 0; }
    .ia-empty { text-align:center;padding:32px;color:var(--ia-muted);font-size:.82rem; }

    /* ── Profile section ── */
    .ia-profile-banner {
      position:relative;width:100%;height:110px;background:linear-gradient(135deg,var(--ia-hero-from),var(--ia-hero-to));
      border-radius:12px;overflow:hidden;margin-bottom:14px;border:1px solid var(--ia-border);
      display:flex;align-items:center;justify-content:center;
    }
    .ia-profile-banner img { width:100%;height:100%;object-fit:cover; }
    .ia-profile-banner-placeholder { color:var(--ia-muted);font-size:.75rem;text-align:center; }
    .ia-profile-logo-wrap {
      position:absolute;bottom:-18px;left:16px;
      width:60px;height:60px;border-radius:14px;
      border:3px solid var(--ia-bg);overflow:hidden;
      background:var(--ia-card);display:flex;align-items:center;justify-content:center;
    }
    .ia-profile-logo-wrap img { width:100%;height:100%;object-fit:cover; }
    .ia-profile-logo-placeholder { color:var(--ia-muted); }
    .ia-profile-upload-btn {
      position:absolute;bottom:6px;right:8px;
      padding:5px 10px;background:rgba(0,0,0,.5);color:#fff;
      border:1px solid rgba(255,255,255,.2);border-radius:7px;
      font-size:.63rem;font-weight:700;cursor:pointer;font-family:inherit;
      display:flex;align-items:center;gap:5px;transition:background .15s;
    }
    .ia-profile-upload-btn:hover { background:rgba(0,0,0,.7); }
    .ia-profile-logo-upload-btn {
      position:absolute;bottom:0;right:0;
      width:20px;height:20px;background:var(--ia-accent);border-radius:50%;border:none;
      display:flex;align-items:center;justify-content:center;cursor:pointer;
    }
    .ia-field-group { margin-bottom:14px; }
    .ia-field-label { font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--ia-muted);margin-bottom:5px; }
    .ia-field-input {
      width:100%;padding:9px 12px;background:var(--ia-input-bg);color:var(--ia-text);
      border:1px solid var(--ia-border2);border-radius:9px;font-family:inherit;font-size:.83rem;
      outline:none;transition:border-color .15s;
    }
    .ia-field-input:focus { border-color:var(--ia-accent); }
    .ia-field-input[disabled] { opacity:.45;cursor:not-allowed; }
    .ia-field-row { display:grid;grid-template-columns:1fr 1fr;gap:10px; }
    .ia-toggle-row {
      display:flex;align-items:center;justify-content:space-between;
      padding:10px 12px;background:var(--ia-metric-bg);border:1px solid var(--ia-border);
      border-radius:10px;margin-bottom:8px;
    }
    .ia-toggle-label { font-size:.8rem;font-weight:600; }
    .ia-toggle-sub { font-size:.65rem;color:var(--ia-muted);margin-top:1px; }
    .ia-toggle-btn {
      background:none;border:none;cursor:pointer;padding:0;
      display:flex;align-items:center;flex-shrink:0;
    }
    .ia-save-bar {
      display:flex;gap:8px;padding-top:6px;margin-top:4px;
    }
    .ia-save-btn {
      flex:1;padding:11px;background:linear-gradient(135deg,var(--ia-accent),var(--ia-accent2));
      color:#fff;border:none;border-radius:10px;font-family:inherit;font-size:.85rem;font-weight:800;
      cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;
      transition:opacity .15s;
    }
    .ia-save-btn:hover { opacity:.88; }
    .ia-save-btn:disabled { opacity:.4;cursor:not-allowed; }
    .ia-cancel-btn {
      padding:11px 16px;background:var(--ia-generic-btn-bg);color:var(--ia-muted);
      border:1px solid var(--ia-border);border-radius:10px;font-family:inherit;font-size:.85rem;
      font-weight:600;cursor:pointer;transition:background .15s;
    }
    .ia-cancel-btn:hover { background:var(--ia-btn-bg-hover); }
    .ia-profile-section-title {
      font-size:.65rem;font-weight:800;text-transform:uppercase;letter-spacing:.8px;
      color:var(--ia-accent2);margin:16px 0 10px;display:flex;align-items:center;gap:6px;
    }
    .ia-survey-counter {
      display:flex;align-items:center;justify-content:space-between;
      padding:10px 12px;background:var(--ia-metric-bg);border:1px solid var(--ia-border);border-radius:10px;margin-bottom:8px;
    }
    .ia-survey-counter-n { font-size:1.1rem;font-weight:800;color:var(--ia-accent2); }
    .ia-survey-counter-l { font-size:.62rem;color:var(--ia-muted);text-transform:uppercase;letter-spacing:.4px;margin-top:2px; }

    /* ── Village list manager ── */
    .ia-village-wrap {
      border:1px solid var(--ia-border2);border-radius:10px;
      background:var(--ia-input-bg);padding:8px 10px 6px;
    }
    .ia-village-tags {
      display:flex;flex-wrap:wrap;gap:5px;min-height:28px;margin-bottom:6px;
    }
    .ia-village-tag {
      display:inline-flex;align-items:center;gap:5px;
      background:rgba(14,165,114,.12);color:var(--ia-accent2);
      border:1px solid rgba(14,165,114,.25);
      border-radius:6px;padding:3px 8px;font-size:.72rem;font-weight:600;
    }
    .ia-village-tag-x {
      cursor:pointer;opacity:.6;font-size:.8rem;line-height:1;
      background:none;border:none;color:inherit;padding:0;font-family:inherit;
    }
    .ia-village-tag-x:hover { opacity:1; }
    .ia-village-add-row { display:flex;gap:6px; }
    .ia-village-inp {
      flex:1;background:transparent;border:none;outline:none;
      color:var(--ia-text);font-size:.78rem;font-family:inherit;
      padding:2px 0;min-width:0;
    }
    .ia-village-inp::placeholder { color:var(--ia-muted); }
    .ia-village-add-btn {
      background:var(--ia-accent);color:#fff;border:none;border-radius:6px;
      padding:4px 10px;font-size:.72rem;font-weight:700;cursor:pointer;font-family:inherit;
      white-space:nowrap;flex-shrink:0;
    }
    .ia-village-add-btn:hover { opacity:.88; }
    .ia-village-hint { font-size:.62rem;color:var(--ia-muted);margin-top:5px; }

    /* ── Responsive: narrow screens (≤360px) ── */
    @media (max-width:360px) {
      .ia-hero-kpi-row { grid-template-columns:repeat(2,1fr); }
      .ia-shelf-grid   { grid-template-columns:1fr; }
      .ia-metric-grid  { grid-template-columns:repeat(2,1fr); }
      .ia-mini-grid    { grid-template-columns:repeat(2,1fr); }
      .ia-field-row    { grid-template-columns:1fr; }
      .ia-header-btn span { display:none; }
    }

    /* ── Responsive: medium screens (≤480px) ── */
    @media (max-width:480px) {
      .ia-hero { padding:16px 12px 12px; }
      .ia-label { padding:12px 12px 5px; }
      .ia-shelf-grid, .ia-stat-rows, .ia-action-rows { padding-left:12px; padding-right:12px; }
      .ia-view-title { font-size:.82rem; }
    }
  `;
  document.head.appendChild(s);
}

// ─── SVG CHARTS ──────────────────────────────────────────────────────────────

function _iaBarChartSVG(data, { width=320, height=120, colors, unit='%' } = {}) {
  if (!data || !data.length) return '';
  const pad = { top:10, right:10, bottom:30, left:30 };
  const W = width - pad.left - pad.right;
  const H = height - pad.top - pad.bottom;
  const max = Math.max(...data.map(d=>d.value), 1);
  const cols = colors || ['#0ea572','#34d399','#22c55e','#14b8a6','#2e7cf6','#a78bfa'];
  const bw = Math.floor((W / data.length) * 0.62);
  const gap = (W - bw * data.length) / (data.length + 1);

  const bars = data.map((d, i) => {
    const bh = Math.max(2, Math.round((d.value / max) * H));
    const x  = pad.left + gap + i * (bw + gap);
    const y  = pad.top + H - bh;
    const col = cols[i % cols.length];
    return `
      <rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="3" fill="${col}" opacity=".85"/>
      <text x="${x + bw/2}" y="${pad.top + H + 14}" text-anchor="middle" font-size="8" fill="#6b7280"
        font-family="DM Sans,system-ui,sans-serif">${d.label}</text>
      <text x="${x + bw/2}" y="${y - 4}" text-anchor="middle" font-size="8" fill="${col}" font-weight="700"
        font-family="DM Sans,system-ui,sans-serif">${d.value}${unit}</text>
    `;
  }).join('');

  const yLines = [0, 25, 50, 75, 100].filter(v => v <= max + 10).map(v => {
    const y = pad.top + H - Math.round((v / max) * H);
    return `<line x1="${pad.left}" x2="${width - pad.right}" y1="${y}" y2="${y}" stroke="rgba(128,128,128,.12)" stroke-dasharray="3,3"/>
      <text x="${pad.left - 3}" y="${y + 3}" text-anchor="end" font-size="7" fill="#4b5563" font-family="DM Sans,system-ui,sans-serif">${v}</text>`;
  }).join('');

  return `<div class="ia-chart-wrap">
    <svg width="100%" viewBox="0 0 ${width} ${height}" class="ia-bar-chart" style="display:block;">
      ${yLines}${bars}
    </svg>
  </div>`;
}

function _iaHBarSVG(data, { width=300, barH=14, gap=8, unit='%' } = {}) {
  if (!data || !data.length) return '';
  const padLeft = 120, padRight = 45;
  const W = width - padLeft - padRight;
  const max = Math.max(...data.map(d=>d.value), 1);
  const H = data.length * (barH + gap) + gap;

  const rows = data.map((d, i) => {
    const y = gap + i * (barH + gap);
    const bw = Math.round((d.value / max) * W);
    const col = (d.value >= 80) ? '#22c55e' : (d.value >= 60) ? '#f59e0b' : '#ef4444';
    return `
      <text x="${padLeft - 6}" y="${y + barH - 3}" text-anchor="end" font-size="9" fill="#9ca3af" font-family="DM Sans,system-ui,sans-serif">${d.label}</text>
      <rect x="${padLeft}" y="${y}" width="${Math.max(2, bw)}" height="${barH}" rx="3" fill="${col}" opacity=".8"/>
      <text x="${padLeft + bw + 5}" y="${y + barH - 3}" font-size="9" fill="${col}" font-weight="700" font-family="DM Sans,system-ui,sans-serif">${d.value}${unit}</text>
    `;
  }).join('');

  return `<svg width="100%" viewBox="0 0 ${width} ${H}" style="display:block;overflow:visible;">${rows}</svg>`;
}

function _iaDonutSVG(slices, size=72) {
  const total = slices.reduce((s,d)=>s+d.value,0) || 1;
  const cx = size/2, cy = size/2, r = size/2 - 6, inner = r - 11;
  let angle = -Math.PI/2;
  const paths = slices.map(s => {
    const a = (s.value / total) * Math.PI * 2;
    const x1 = cx + r * Math.cos(angle), y1 = cy + r * Math.sin(angle);
    const x2 = cx + r * Math.cos(angle+a), y2 = cy + r * Math.sin(angle+a);
    const xi1 = cx + inner * Math.cos(angle), yi1 = cy + inner * Math.sin(angle);
    const xi2 = cx + inner * Math.cos(angle+a), yi2 = cy + inner * Math.sin(angle+a);
    const large = a > Math.PI ? 1 : 0;
    const path = `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${xi2} ${yi2} A ${inner} ${inner} 0 ${large} 0 ${xi1} ${yi1} Z`;
    angle += a;
    return `<path d="${path}" fill="${s.color}" opacity=".85"/>`;
  }).join('');
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${paths}</svg>`;
}

// ─── SHELL ───────────────────────────────────────────────────────────────────

function _renderInstAdminDashboard() {
  const existing = document.getElementById('inst-admin-dashboard');
  if (existing) existing.remove();
  const home = document.getElementById('home-page');
  if (home) home.style.display = 'none';

  const instName = (typeof getSessionInstitutionName === 'function' && getSessionInstitutionName()) || 'My Institution';
  const instId   = typeof getSessionInstitutionId === 'function' ? getSessionInstitutionId() : null;

  const dash = document.createElement('div');
  dash.id = 'inst-admin-dashboard';
  if (localStorage.getItem('ia_theme') === 'light') dash.classList.add('ia-light');

  dash.innerHTML = `
    <div class="ia-header">
      <div class="ia-header-brand">
        <img src="./medisync-logo.png" alt="MSS" class="ia-header-logo">
        <div>
          <div class="ia-header-title" id="ia-hdr-name">${instName}</div>
          <div class="ia-header-sub">Institution Admin · MSS</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;">
        <button class="ia-header-btn" onclick="_iaSwitchView('profile')">
          ${_iaIcon('person',14)} Profile
        </button>
        <button class="ia-header-btn" onclick="_iaSwitchView('settings')">
          ${_iaIcon('settings',14)} Settings
        </button>
      </div>
    </div>

    <div id="ia-main-content"></div>

    <div id="ia-loading">
      <div style="text-align:center;">
        <div class="ia-spinner" style="margin:0 auto 14px;"></div>
        <div style="font-size:.8rem;font-weight:600;color:var(--ia-muted);">Loading institution data…</div>
      </div>
    </div>`;

  document.body.appendChild(dash);

  _iaLoadData(instId).then(() => {
    document.getElementById('ia-loading').style.display = 'none';
    // Update header with the real name loaded from the profile (may differ from session name)
    const hdr = document.getElementById('ia-hdr-name');
    if (hdr && _iaInstName && _iaInstName !== 'Institution') hdr.textContent = _iaInstName;
    _iaRenderHomePage();
  }).catch(e => {
    document.getElementById('ia-loading').style.display = 'none';
    document.getElementById('ia-main-content').innerHTML = `
      <div style="text-align:center;padding:50px 20px;">
        <div style="color:var(--ia-red);margin-bottom:10px;">${_iaIcon('warning',32,'var(--ia-red)')}</div>
        <div style="font-weight:700;margin-bottom:6px;">Failed to load data</div>
        <div style="font-size:.78rem;color:var(--ia-muted);margin-bottom:18px;">${e.message||'Network error — check your connection'}</div>
        <button onclick="_iaLoadData('${instId||''}').then(()=>{document.getElementById('ia-loading').style.display='none';_iaRenderHomePage()}).catch(()=>{})"
          style="padding:10px 22px;background:var(--ia-accent);color:#fff;border:none;border-radius:9px;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:700;">
          Retry
        </button>
      </div>`;
  });
}

// ─── DATA LOADING ─────────────────────────────────────────────────────────────

let _iaData = { records: [], students: [] };
let _iaInstId = null;
let _iaInstName = 'Institution';

async function _iaLoadData(instId) {
  _iaInstId   = instId || (typeof getSessionInstitutionId === 'function' ? getSessionInstitutionId() : null);
  _iaInstName = (typeof getSessionInstitutionName === 'function' && getSessionInstitutionName()) || 'Institution';
  console.log('[LOAD] _iaLoadData called | instId:', _iaInstId, '| instName:', _iaInstName);

  const [recordsData, studentsData] = await Promise.all([
    window.HS.HSAdmin.getRecords(_iaInstId || null).catch(e => { console.error('[LOAD] getRecords failed:', e); return { records: [] }; }),
    window.HS.HSAdmin.getStudents(_iaInstId || null).catch(e => { console.error('[LOAD] getStudents failed:', e); return { students: [] }; }),
  ]);

  _iaData = {
    records:  recordsData.records  || [],
    students: studentsData.students || [],
  };
  console.log('[LOAD] Data loaded | records:', _iaData.records.length, '| students:', _iaData.students.length);

  if (typeof computeSurveyMetrics === 'function' && _iaData.records.length) {
    window.iaMetrics = computeSurveyMetrics(_iaData.records);
    console.log('[LOAD] computeSurveyMetrics ran | summary:', window.iaMetrics?.summary);
  } else {
    console.warn('[LOAD] Skipped computeSurveyMetrics | available:', typeof computeSurveyMetrics, '| records:', _iaData.records.length);
  }

  // Pull latest institution profile from backend API (JWT-authenticated — never direct Supabase)
  if (_iaInstId && window.HS?.HSAdmin?.getInstitutionProfile) {
    try {
      const profRow = await window.HS.HSAdmin.getInstitutionProfile(_iaInstId);
      if (profRow && typeof profRow === 'object' && profRow.institution_id) {
        localStorage.setItem(_IA_PROFILE_KEY, JSON.stringify(profRow));
        if (profRow.inst_name) _iaInstName = profRow.inst_name;
        console.log('[LOAD] Profile loaded | inst_name:', profRow.inst_name);
      }
    } catch(e) { console.warn('[LOAD] getInstitutionProfile failed (offline?):', e.message); }
  } else {
    console.warn('[LOAD] Skipped profile fetch | instId:', _iaInstId, '| getInstitutionProfile available:', !!window.HS?.HSAdmin?.getInstitutionProfile);
  }
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function _iaRenderHomePage() {
  const main = document.getElementById('ia-main-content');
  if (!main) return;
  main.className = '';
  main.style.cssText = 'flex:1;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--ia-dim) transparent;';

  const { records, students } = _iaData;
  const metrics = window.iaMetrics;
  const quality = metrics?.data_quality?.overall_quality_score;
  const riskHigh = (metrics?.risk_profiles || []).filter(r => r.level === 'HIGH').length;
  const today = new Date().toISOString().split('T')[0];
  const todayN = records.filter(r => (r.interview_date || '').startsWith(today)).length;
  const ivCount = new Set(records.map(r => r.interviewer_name || r.interviewer).filter(Boolean)).size;
  const user = JSON.parse(localStorage.getItem('chsa_auth') || '{}');
  const userName = user.full_name || user.name || 'Admin';

  // 7-day sparkline
  const last7 = Array.from({length:7}).map((_,i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    const key = d.toISOString().split('T')[0];
    const day = d.toLocaleDateString('en', {weekday:'short'}).slice(0,2);
    return { label: day, value: records.filter(r => (r.interview_date||'').startsWith(key)).length };
  });

  main.innerHTML = `
    <div class="ia-anim">
      <!-- HERO -->
      <div class="ia-hero">
        <div class="ia-hero-label">${_iaInstName} · Institution Dashboard</div>
        <div class="ia-hero-name">${_iaInstName}</div>
        <div class="ia-hero-welcome">Welcome back, ${userName}</div>
        <div class="ia-hero-kpi-row">
          <div class="ia-hero-kpi" onclick="_iaSwitchView('data')">
            <div class="ia-hero-kpi-n" style="color:var(--ia-accent2);">${records.length}</div>
            <div class="ia-hero-kpi-l">Surveys</div>
          </div>
          <div class="ia-hero-kpi" onclick="_iaSwitchView('overview')">
            <div class="ia-hero-kpi-n" style="color:var(--ia-amber);">${todayN}</div>
            <div class="ia-hero-kpi-l">Today</div>
          </div>
          <div class="ia-hero-kpi" onclick="_iaSwitchView('analytics')">
            <div class="ia-hero-kpi-n" style="color:${quality>=80?'var(--ia-green)':quality>=60?'var(--ia-amber)':'var(--ia-red)'};">${quality ? quality+'%' : '—'}</div>
            <div class="ia-hero-kpi-l">Quality</div>
          </div>
          <div class="ia-hero-kpi" onclick="_iaSwitchView('people')">
            <div class="ia-hero-kpi-n" style="color:var(--ia-blue2);">${ivCount}</div>
            <div class="ia-hero-kpi-l">Enumerators</div>
          </div>
        </div>
      </div>

      <!-- 7-day chart -->
      <div class="ia-label">7-Day Submission Activity</div>
      <div style="padding:0 16px 14px;">
        <div class="ia-collapse" style="margin-bottom:0;">
          <div style="padding:10px 14px 0;">
            ${_iaBarChartSVG(last7, {width:340, height:110, unit:''})}
          </div>
        </div>
      </div>

      <!-- NAV SECTIONS -->
      <div class="ia-label">Sections</div>
      <div class="ia-shelf-grid">
        <button class="ia-nav-card" onclick="_iaSwitchView('analytics')">
          <div class="ia-nav-card-icon green">${_iaIcon('analytics',17)}</div>
          <div class="ia-nav-card-title">Analytics</div>
          <div class="ia-nav-card-sub">Health indicators, trends & charts</div>
          <span class="ia-nav-card-badge">${records.length} surveys</span>
        </button>
        <button class="ia-nav-card" onclick="_iaSwitchView('people')">
          <div class="ia-nav-card-icon blue">${_iaIcon('people',17)}</div>
          <div class="ia-nav-card-title">People</div>
          <div class="ia-nav-card-sub">Enumerators & registered students</div>
          <span class="ia-nav-card-badge">${students.length} registered</span>
        </button>
        <button class="ia-nav-card" onclick="_iaSwitchView('data')">
          <div class="ia-nav-card-icon amber">${_iaIcon('survey',17)}</div>
          <div class="ia-nav-card-title">Survey Data</div>
          <div class="ia-nav-card-sub">Browse, search & filter all records</div>
          <span class="ia-nav-card-badge">${records.length} records</span>
        </button>
        <button class="ia-nav-card" onclick="_iaSwitchView('reports')">
          <div class="ia-nav-card-icon purple">${_iaIcon('export',17)}</div>
          <div class="ia-nav-card-title">Reports</div>
          <div class="ia-nav-card-sub">Individual & group PDF/CSV reports</div>
          ${riskHigh > 0 ? `<span class="ia-nav-card-badge alert">${riskHigh} high risk</span>` : ''}
        </button>
        <button class="ia-nav-card" onclick="_iaSwitchView('profile')">
          <div class="ia-nav-card-icon" style="background:rgba(167,139,250,.12);">${_iaIcon('person',17,'var(--ia-purple)')}</div>
          <div class="ia-nav-card-title">Profile</div>
          <div class="ia-nav-card-sub">Institution details, branding & settings</div>
        </button>
      </div>

      <!-- INSTITUTION SNAPSHOT -->
      <div class="ia-label">Institution Snapshot</div>
      <div class="ia-stat-rows">
        <button class="ia-stat-row" onclick="_iaSwitchView('data')">
          <div class="ia-stat-row-left"><div class="ia-stat-dot green"></div><span class="ia-stat-label">Total Surveys Collected</span></div>
          <div style="display:flex;align-items:center;"><span class="ia-stat-value">${records.length}</span><span class="ia-stat-arrow">${_iaIcon('chevron_right',16)}</span></div>
        </button>
        <button class="ia-stat-row" onclick="_iaSwitchView('overview')">
          <div class="ia-stat-row-left"><div class="ia-stat-dot amber"></div><span class="ia-stat-label">Submitted Today</span></div>
          <div style="display:flex;align-items:center;"><span class="ia-stat-value">${todayN}</span><span class="ia-stat-arrow">${_iaIcon('chevron_right',16)}</span></div>
        </button>
        <button class="ia-stat-row" onclick="_iaSwitchView('people')">
          <div class="ia-stat-row-left"><div class="ia-stat-dot blue"></div><span class="ia-stat-label">Active Enumerators</span></div>
          <div style="display:flex;align-items:center;"><span class="ia-stat-value">${ivCount}</span><span class="ia-stat-arrow">${_iaIcon('chevron_right',16)}</span></div>
        </button>
        <button class="ia-stat-row" onclick="_iaSwitchView('people')">
          <div class="ia-stat-row-left"><div class="ia-stat-dot teal"></div><span class="ia-stat-label">Registered Students</span></div>
          <div style="display:flex;align-items:center;"><span class="ia-stat-value">${students.length}</span><span class="ia-stat-arrow">${_iaIcon('chevron_right',16)}</span></div>
        </button>
        ${quality ? `
        <button class="ia-stat-row" onclick="_iaSwitchView('reports')">
          <div class="ia-stat-row-left"><div class="ia-stat-dot ${quality>=80?'green':quality>=60?'amber':'red'}"></div><span class="ia-stat-label">Data Quality Score</span></div>
          <div style="display:flex;align-items:center;"><span class="ia-stat-value" style="color:${quality>=80?'var(--ia-green)':quality>=60?'var(--ia-amber)':'var(--ia-red)'};">${quality}%</span><span class="ia-stat-arrow">${_iaIcon('chevron_right',16)}</span></div>
        </button>` : ''}
        ${riskHigh > 0 ? `
        <button class="ia-stat-row" onclick="_iaSwitchView('reports')">
          <div class="ia-stat-row-left"><div class="ia-stat-dot red"></div><span class="ia-stat-label">High Risk Households</span></div>
          <div style="display:flex;align-items:center;"><span class="ia-stat-value" style="color:var(--ia-red);">${riskHigh}</span><span class="ia-stat-arrow">${_iaIcon('chevron_right',16)}</span></div>
        </button>` : ''}
      </div>

      <!-- QUICK ACTIONS -->
      <div class="ia-label">Quick Actions</div>
      <div class="ia-action-rows">
        <button class="ia-action-row" onclick="_iaExportCSV(_iaData.records,'${_iaInstName.replace(/'/g,"\\'")}')">
          <div class="ia-action-icon">${_iaIcon('download',16,'var(--ia-accent)')}</div>
          <span class="ia-action-label">Export All Surveys (CSV)</span>
          ${_iaIcon('chevron_right',16,'var(--ia-dim)')}
        </button>
        <button class="ia-action-row" onclick="_iaGenerateInstitutionReport()">
          <div class="ia-action-icon">${_iaIcon('analytics',16,'var(--ia-blue)')}</div>
          <span class="ia-action-label">Generate Institution Report</span>
          ${_iaIcon('chevron_right',16,'var(--ia-dim)')}
        </button>
        <button class="ia-action-row" onclick="_iaLoadData('${_iaInstId||''}').then(_iaRenderHomePage)">
          <div class="ia-action-icon">${_iaIcon('refresh',16,'var(--ia-amber)')}</div>
          <span class="ia-action-label">Refresh Data</span>
          ${_iaIcon('chevron_right',16,'var(--ia-dim)')}
        </button>
      </div>
    </div>
  `;
}

// ─── SECTION SWITCHER ────────────────────────────────────────────────────────

function _iaSwitchView(view) {
  const main = document.getElementById('ia-main-content');
  if (!main) return;

  const titles = {
    overview:  'Overview',
    analytics: 'Analytics',
    people:    'People & Team',
    data:      'Survey Data',
    reports:   'Reports',
    settings:  'Settings',
    profile:   'Institution Profile',
  };

  main.style.cssText = 'display:flex;flex-direction:column;flex:1;overflow:hidden;';
  main.innerHTML = `
    <div class="ia-view-header">
      <button class="ia-back-btn" onclick="_iaGoHome()">${_iaIcon('chevron_right',14,'currentColor')} <span style="transform:scaleX(-1);display:inline-block;">Back</span></button>
      <span class="ia-view-title">${titles[view] || view}</span>
    </div>
    <div id="ia-view-body" style="flex:1;overflow-y:auto;padding:14px 16px 50px;scrollbar-width:thin;scrollbar-color:var(--ia-dim) transparent;">
      <div style="text-align:center;padding:24px;color:var(--ia-muted);">Loading…</div>
    </div>
  `;

  const body = document.getElementById('ia-view-body');
  switch(view) {
    case 'overview':  _iaTabOverview(body);  break;
    case 'analytics': _iaTabAnalytics(body); break;
    case 'people':    _iaTabPeople(body);    break;
    case 'data':      _iaTabData(body);      break;
    case 'reports':   _iaTabReports(body);   break;
    case 'settings':  _iaTabSettings(body);  break;
    case 'profile':   _iaTabProfile(body);   break;
  }
}

function _iaGoHome() {
  const main = document.getElementById('ia-main-content');
  if (!main) return;
  main.style.cssText = 'flex:1;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--ia-dim) transparent;';
  main.className = '';
  _iaRenderHomePage();
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function _iaToggleCollapse(btn) {
  const body  = btn.nextElementSibling;
  const arrow = btn.querySelector('.ia-collapse-hdr-arrow');
  if (!body) return;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  if (arrow) arrow.classList.toggle('open', !isOpen);
}

function _iaProgressRows(pairs) {
  return pairs.map(([label, pct]) => {
    const v = pct ?? 0;
    const col = v>=80?'var(--ia-green)':v>=60?'var(--ia-amber)':'var(--ia-red)';
    return `<div class="ia-progress">
      <div class="ia-progress-header">
        <span class="ia-progress-label">${label}</span>
        <span class="ia-progress-pct" style="color:${col};">${v}%</span>
      </div>
      <div class="ia-progress-track"><div class="ia-progress-fill" style="width:${v}%;background:${col};"></div></div>
    </div>`;
  }).join('');
}

function _iaBadge(pct) {
  const v = pct ?? 0;
  if (v >= 80) return `<span class="badge badge-green">Good</span>`;
  if (v >= 60) return `<span class="badge badge-amber">Fair</span>`;
  return `<span class="badge badge-red">Attention</span>`;
}
function _iaBadgeInv(pct) {
  const v = pct ?? 0;
  if (v <= 20) return `<span class="badge badge-green">Good</span>`;
  if (v <= 40) return `<span class="badge badge-amber">Fair</span>`;
  return `<span class="badge badge-red">High</span>`;
}

// ─── TAB: Overview ────────────────────────────────────────────────────────────

function _iaTabOverview(el) {
  const recs  = _iaData.records;
  const today = new Date().toISOString().split('T')[0];
  const metrics = window.iaMetrics;

  const byLoc = {};
  recs.forEach(r => {
    const loc = r.interview_location || r.location || 'Unknown';
    byLoc[loc] = (byLoc[loc] || 0) + 1;
  });
  const topLocs = Object.entries(byLoc).sort((a,b) => b[1]-a[1]).slice(0,6);
  const locData = topLocs.map(([loc, count]) => ({ label: loc.split(' ')[0].slice(0,8), value: count }));

  const dateMap = {};
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    const day = d.toLocaleDateString('en', {weekday:'short'}).slice(0,2);
    dateMap[key] = { label: day, value: 0 };
  }
  recs.forEach(r => {
    const d = r.interview_date || (r.synced_at||'').split('T')[0];
    if (dateMap[d]) dateMap[d].value++;
  });

  const ivMap = {};
  recs.forEach(r => {
    const iv = r.interviewer_name || r.interviewer || 'Unknown';
    ivMap[iv] = (ivMap[iv] || 0) + 1;
  });
  const topIVs = Object.entries(ivMap).sort((a,b) => b[1]-a[1]).slice(0,5);

  el.innerHTML = `
    <div class="ia-anim">

      <!-- Daily Activity -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon green">${_iaIcon('calendar',16,'var(--ia-accent)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Daily Activity</div>
            <div class="ia-collapse-hdr-sub">Last 7 days</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          ${_iaBarChartSVG(Object.values(dateMap), {width:340, height:110, unit:''})}
        </div>
      </div>

      <!-- Top Locations -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon amber">${_iaIcon('location',16,'var(--ia-amber)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Top Locations</div>
            <div class="ia-collapse-hdr-sub">${topLocs.length} unique areas</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          ${_iaHBarSVG(topLocs.slice(0,6).map(([loc, count]) => ({ label: loc.length>16?loc.slice(0,16)+'…':loc, value: count })), {width:300, barH:14, gap:10, unit:''})}
          <div class="ia-divider"></div>
          <div class="ia-table-wrap">
            <table class="ia-table">
              <thead><tr><th>#</th><th>Location</th><th>Surveys</th><th>Share</th></tr></thead>
              <tbody>
                ${topLocs.map(([loc, count], i) => `<tr>
                  <td style="color:var(--ia-muted);font-size:.7rem;">${i+1}</td>
                  <td style="font-weight:600;">${loc}</td>
                  <td style="font-weight:700;color:var(--ia-accent2);">${count}</td>
                  <td><span class="badge badge-teal">${recs.length ? Math.round(count/recs.length*100) : 0}%</span></td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Top Enumerators -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon blue">${_iaIcon('medal',16,'var(--ia-blue)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Top Enumerators</div>
            <div class="ia-collapse-hdr-sub">By survey count</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          <div class="ia-table-wrap">
            <table class="ia-table">
              <thead><tr><th>Rank</th><th>Name</th><th>Surveys</th><th>Share</th></tr></thead>
              <tbody>
                ${topIVs.map(([name, count], i) => `<tr>
                  <td><span class="badge ${i===0?'badge-amber':i<=2?'badge-blue':'badge-teal'}">${i===0?'🥇':i===1?'🥈':i===2?'🥉':`#${i+1}`}</span></td>
                  <td style="font-weight:700;">${name}</td>
                  <td style="font-weight:800;color:var(--ia-accent2);">${count}</td>
                  <td>${recs.length ? Math.round(count/recs.length*100) : 0}%</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Key Health Indicators snapshot -->
      ${metrics ? `
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon green">${_iaIcon('health',16,'var(--ia-green)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Key Health Indicators</div>
            <div class="ia-collapse-hdr-sub">Institution snapshot</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          <div class="ia-metric-grid" style="grid-template-columns:repeat(3,1fr);">
            <div class="ia-metric good"><div class="ia-metric-n">${metrics.infrastructure?.pct_pit_latrine??'—'}%</div><div class="ia-metric-l">Pit Latrine</div></div>
            <div class="ia-metric good"><div class="ia-metric-n">${metrics.infrastructure?.pct_water_treated??'—'}%</div><div class="ia-metric-l">Water Treated</div></div>
            <div class="ia-metric good"><div class="ia-metric-n">${metrics.health?.pct_hiv_aware??'—'}%</div><div class="ia-metric-l">HIV Aware</div></div>
            <div class="ia-metric good"><div class="ia-metric-n">${metrics.nutrition?.pct_food_sufficient??'—'}%</div><div class="ia-metric-l">Food Secure</div></div>
            <div class="ia-metric good"><div class="ia-metric-n">${metrics.maternal_child?.pct_immunised??'—'}%</div><div class="ia-metric-l">Immunised</div></div>
            <div class="ia-metric good"><div class="ia-metric-n">${metrics.environmental?.pct_mosquito_net??'—'}%</div><div class="ia-metric-l">Mosquito Net</div></div>
          </div>
          <div style="text-align:center;margin-top:6px;">
            <button onclick="_iaSwitchView('analytics')"
              style="padding:8px 16px;background:rgba(14,165,114,.12);color:var(--ia-accent2);border:1px solid rgba(14,165,114,.2);border-radius:8px;cursor:pointer;font-family:inherit;font-size:.76rem;font-weight:700;">
              ${_iaIcon('analytics',13,'var(--ia-accent2)')} Full Analytics →
            </button>
          </div>
        </div>
      </div>` : ''}

      ${!recs.length ? '<div class="ia-empty">No surveys yet for this institution.</div>' : ''}
    </div>`;
}

// ─── TAB: Analytics ──────────────────────────────────────────────────────────

function _iaTabAnalytics(el) {
  const metrics = window.iaMetrics;
  const recs    = _iaData.records;
  if (!recs.length) { el.innerHTML = '<div class="ia-empty">No survey data yet for this institution.</div>'; return; }
  if (!metrics) {
    el.innerHTML = '<div style="text-align:center;padding:24px;color:var(--ia-muted);">Computing metrics…</div>';
    if (typeof computeSurveyMetrics === 'function') { window.iaMetrics = computeSurveyMetrics(recs); _iaTabAnalytics(el); }
    return;
  }

  const infra  = metrics.infrastructure || {};
  const health = metrics.health || {};
  const nutr   = metrics.nutrition || {};
  const mat    = metrics.maternal_child || {};
  const env    = metrics.environmental || {};
  const riskH  = (metrics.risk_profiles||[]).filter(r => r.level==='HIGH').length;
  const riskM  = (metrics.risk_profiles||[]).filter(r => r.level==='MODERATE').length;
  const riskL  = (metrics.risk_profiles||[]).length - riskH - riskM;

  const infraData  = [
    {label:'Perm. House', value: infra.pct_permanent_house||0},
    {label:'Latrine',     value: infra.pct_pit_latrine||0},
    {label:'Water Trtd',  value: infra.pct_water_treated||0},
    {label:'Electric',    value: infra.pct_electricity||0},
    {label:'Imp. Water',  value: infra.pct_improved_water||0},
  ];
  const healthData = [
    {label:'HIV Aware',  value: health.pct_hiv_aware||0},
    {label:'HIV Tested', value: health.pct_hiv_tested||0},
    {label:'Facility',   value: health.pct_consult_facility||0},
    {label:'Immunised',  value: mat.pct_immunised||0},
    {label:'Fac. Birth', value: mat.pct_facility_delivery||0},
  ];

  el.innerHTML = `
    <div class="ia-anim">

      <!-- Population Overview -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon green">${_iaIcon('people',16,'var(--ia-green)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Population Overview</div>
            <div class="ia-collapse-hdr-sub">${recs.length} surveys · ${_iaInstName}</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          <div class="ia-metric-grid">
            <div class="ia-metric good"><div class="ia-metric-n">${metrics.summary?.total_population||'—'}</div><div class="ia-metric-l">Population</div></div>
            <div class="ia-metric good"><div class="ia-metric-n">${metrics.summary?.avg_hh_size||'—'}</div><div class="ia-metric-l">Avg HH Size</div></div>
            <div class="ia-metric good"><div class="ia-metric-n">${metrics.summary?.total_locations||'—'}</div><div class="ia-metric-l">Locations</div></div>
          </div>
          <div class="ia-table-wrap">
            <table class="ia-table">
              <thead><tr><th>Indicator</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Total Survey Records</td><td style="font-weight:700;">${recs.length}</td></tr>
                <tr><td>Total Population Covered</td><td style="font-weight:700;">${metrics.summary?.total_population||'—'}</td></tr>
                <tr><td>Average Household Size</td><td style="font-weight:700;">${metrics.summary?.avg_hh_size||'—'}</td></tr>
                <tr><td>Unique Locations</td><td style="font-weight:700;">${metrics.summary?.total_locations||'—'}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Infrastructure -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon blue">${_iaIcon('institution',16,'var(--ia-blue)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Infrastructure Coverage</div>
            <div class="ia-collapse-hdr-sub">Housing, sanitation &amp; utilities</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          ${_iaHBarSVG(infraData, {width:300, barH:14, gap:10})}
          <div class="ia-divider"></div>
          ${_iaProgressRows([
            ['Permanent Houses', infra.pct_permanent_house],
            ['Pit Latrine Access', infra.pct_pit_latrine],
            ['Water Treated', infra.pct_water_treated],
            ['Electricity Access', infra.pct_electricity],
            ['Improved Water Source', infra.pct_improved_water],
          ])}
        </div>
      </div>

      <!-- Health Indicators -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon green">${_iaIcon('health',16,'var(--ia-green)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Health Indicators</div>
            <div class="ia-collapse-hdr-sub">HIV, consultation &amp; chronic illness</div>
          </div>
          <div class="ia-collapse-hdr-arrow">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body">
          ${_iaHBarSVG(healthData, {width:300, barH:14, gap:10})}
          <div class="ia-divider"></div>
          ${_iaProgressRows([
            ['HIV Awareness', health.pct_hiv_aware],
            ['HIV Testing Coverage', health.pct_hiv_tested],
            ['Facility Consultation', health.pct_consult_facility],
            ['No Chronic Illness', 100-(health.pct_chronic_illness||0)],
          ])}
          <div class="ia-divider"></div>
          <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.8px;color:var(--ia-muted);font-weight:700;margin-bottom:8px;">Top Illnesses</div>
          ${(health.top_illnesses||[]).slice(0,10).map(ill => `
            <div class="ia-disease-item">
              <span class="ia-disease-name">${ill.name}</span>
              <div class="ia-disease-track"><div class="ia-disease-fill" style="width:${Math.min(ill.pct,100)}%;"></div></div>
              <span class="ia-disease-count">${ill.count}</span>
            </div>`).join('')}
        </div>
      </div>

      <!-- Maternal & Nutrition -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon amber">${_iaIcon('nutrition',16,'var(--ia-amber)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Maternal &amp; Nutrition</div>
            <div class="ia-collapse-hdr-sub">Immunisation, delivery &amp; food security</div>
          </div>
          <div class="ia-collapse-hdr-arrow">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body">
          ${_iaProgressRows([
            ['Children Immunised', mat.pct_immunised],
            ['Facility Delivery', mat.pct_facility_delivery],
            ['Food Sufficiency', nutr.pct_food_sufficient],
            ['Not Skipping Meals', 100-(nutr.pct_skipping_meals||0)],
          ])}
          <div class="ia-divider"></div>
          <div class="ia-table-wrap">
            <table class="ia-table">
              <thead><tr><th>Indicator</th><th>Value</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>Food Sufficiency</td><td style="font-weight:700;">${nutr.pct_food_sufficient??'—'}%</td><td>${_iaBadge(nutr.pct_food_sufficient)}</td></tr>
                <tr><td>Skipping Meals</td><td style="font-weight:700;">${nutr.pct_skipping_meals??'—'}%</td><td>${_iaBadgeInv(nutr.pct_skipping_meals)}</td></tr>
                <tr><td>Avg Meals/Day</td><td style="font-weight:700;">${nutr.avg_meals_per_day??'—'}</td><td>—</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Environmental -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon green">${_iaIcon('water',16,'var(--ia-teal)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Environmental</div>
            <div class="ia-collapse-hdr-sub">Mosquito nets, drainage &amp; hygiene</div>
          </div>
          <div class="ia-collapse-hdr-arrow">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body">
          ${_iaProgressRows([
            ['Mosquito Net Owned', env.pct_mosquito_net],
            ['Net In Use', env.pct_net_in_use],
            ['No Drainage Issues', 100-(env.pct_drainage_issues||0)],
          ])}
        </div>
      </div>

      <!-- Risk Profiles -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon" style="background:rgba(239,68,68,.15);">${_iaIcon('risk',16,'var(--ia-red)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Risk Profiles</div>
            <div class="ia-collapse-hdr-sub">${riskH} high · ${riskM} moderate · institution only</div>
          </div>
          <div class="ia-collapse-hdr-arrow">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body">
          <div class="ia-donut-row">
            ${_iaDonutSVG([
              {value:riskH||1, color:'#ef4444'},
              {value:riskM||1, color:'#f59e0b'},
              {value:Math.max(riskL,1), color:'#22c55e'},
            ], 80)}
            <div class="ia-donut-legend">
              <div class="ia-donut-legend-item"><div class="ia-donut-dot" style="background:#ef4444;"></div><span>${riskH} High Risk</span></div>
              <div class="ia-donut-legend-item"><div class="ia-donut-dot" style="background:#f59e0b;"></div><span>${riskM} Moderate</span></div>
              <div class="ia-donut-legend-item"><div class="ia-donut-dot" style="background:#22c55e;"></div><span>${Math.max(riskL,0)} Low/Normal</span></div>
            </div>
          </div>
          <div class="ia-divider"></div>
          ${(metrics.recommendations||[]).slice(0,5).map(rec => `
            <div class="ia-rec ${rec.priority==='CRITICAL'?'critical':rec.priority==='HIGH'?'high':'medium'}">
              <div class="ia-rec-title">${rec.priority} · ${rec.category}</div>
              <div class="ia-rec-body">${rec.issue}<br><span style="color:var(--ia-accent2);">&#8594; ${rec.action}</span> <span style="color:var(--ia-muted);font-size:.7rem;">(${rec.households_affected} households)</span></div>
            </div>`).join('')}
        </div>
      </div>

      <!-- Full metrics table -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon blue">${_iaIcon('survey',16,'var(--ia-blue)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Full Metrics Table</div>
            <div class="ia-collapse-hdr-sub">All indicators for ${_iaInstName}</div>
          </div>
          <div class="ia-collapse-hdr-arrow">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body">
          <div class="ia-table-wrap">
            <table class="ia-table">
              <thead><tr><th>Category</th><th>Indicator</th><th>Value</th><th>Status</th></tr></thead>
              <tbody>
                ${[
                  ['Infrastructure','Permanent Houses', infra.pct_permanent_house],
                  ['Infrastructure','Pit Latrine Access', infra.pct_pit_latrine],
                  ['Infrastructure','Water Treated', infra.pct_water_treated],
                  ['Infrastructure','Electricity Access', infra.pct_electricity],
                  ['Infrastructure','Improved Water Source', infra.pct_improved_water],
                  ['Health','HIV Awareness', health.pct_hiv_aware],
                  ['Health','HIV Testing', health.pct_hiv_tested],
                  ['Health','Facility Consultation', health.pct_consult_facility],
                  ['Maternal','Children Immunised', mat.pct_immunised],
                  ['Maternal','Facility Delivery', mat.pct_facility_delivery],
                  ['Nutrition','Food Sufficiency', nutr.pct_food_sufficient],
                  ['Environmental','Mosquito Net Owned', env.pct_mosquito_net],
                  ['Environmental','Net In Use', env.pct_net_in_use],
                ].map(([cat,lbl,pct]) => `
                  <tr>
                    <td><span class="ia-tag">${cat}</span></td>
                    <td style="font-size:.76rem;">${lbl}</td>
                    <td style="font-weight:700;">${pct??'—'}%</td>
                    <td>${_iaBadge(pct)}</td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
}

// ─── TAB: People ─────────────────────────────────────────────────────────────

function _iaDeleteUser(regNumber, name) {
  if (!confirm(`Delete "${name}"?\n\nThis removes their account permanently. Survey records are kept.\n\nCannot be undone.`)) return;
  window.HS.HSAdmin.deleteStudent(regNumber)
    .then(() => {
      _iaData.students = _iaData.students.filter(s => s.reg_number !== regNumber);
      const body = document.getElementById('ia-view-body');
      if (body) _iaTabPeople(body);
    })
    .catch(err => alert('Delete failed: ' + (err.message || err)));
}

function _iaDeleteUserAndRecords(regNumber, name) {
  if (!confirm(`Delete "${name}" AND all their survey records?\n\nCannot be undone.`)) return;
  const theirRecords = (_iaData.records||[]).filter(r => r.interviewer_name===name || r.submitted_by===regNumber);
  Promise.all(theirRecords.map(r => window.HS.HSAdmin.deleteRecord(r.id).catch(()=>{})))
    .then(() => window.HS.HSAdmin.deleteStudent(regNumber))
    .then(() => {
      _iaData.students = _iaData.students.filter(s => s.reg_number !== regNumber);
      _iaData.records  = _iaData.records.filter(r => r.interviewer_name !== name && r.submitted_by !== regNumber);
      if (typeof computeSurveyMetrics === 'function' && _iaData.records.length) window.iaMetrics = computeSurveyMetrics(_iaData.records);
      const body = document.getElementById('ia-view-body');
      if (body) _iaTabPeople(body);
    })
    .catch(err => alert('Delete failed: ' + (err.message || err)));
}

function _iaTabPeople(el) {
  const { students, records } = _iaData;
  const ivMap = {};
  records.forEach(r => {
    const key = r.interviewer_name || r.submitted_by || '?';
    ivMap[key] = (ivMap[key] || 0) + 1;
  });

  // Split into admins and enumerators (all scoped to this institution)
  const admins = students.filter(s => s.role === 'institution_admin');
  const enums  = students.filter(s => s.role !== 'institution_admin');

  // Enumerator performance from records
  const enumPerf = {};
  records.forEach(r => {
    const iv = r.interviewer_name || r.interviewer || 'Unknown';
    if (!enumPerf[iv]) enumPerf[iv] = { count:0, lastDate:null };
    enumPerf[iv].count++;
    const d = r.interview_date || (r.synced_at||'').split('T')[0];
    if (d && (!enumPerf[iv].lastDate || d > enumPerf[iv].lastDate)) enumPerf[iv].lastDate = d;
  });
  const perfList = Object.entries(enumPerf).sort((a,b) => b[1].count - a[1].count);

  const userRow = (s, isAdmin) => {
    const name = s.full_name || s.name || 'Unknown';
    const safeName = name.replace(/'/g,"\\'");
    const recCount = ivMap[name] || 0;
    return `
      <div class="ia-user-row">
        <div class="ia-user-avatar ${isAdmin?'':'dim'}">${name.charAt(0).toUpperCase()}</div>
        <div style="flex:1;min-width:0;">
          <div class="ia-user-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</div>
          <div class="ia-user-sub">${s.reg_number||''} · ${recCount} surveys</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0;">
          <button class="ia-del-btn" onclick="_iaDeleteUser('${s.reg_number}','${safeName}')">
            ${_iaIcon('delete',11)} Account
          </button>
          <button class="ia-del-btn" onclick="_iaDeleteUserAndRecords('${s.reg_number}','${safeName}')">
            ${_iaIcon('delete',11)} + Records
          </button>
        </div>
      </div>`;
  };

  el.innerHTML = `
    <div class="ia-anim">

      <!-- Summary -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon blue">${_iaIcon('people',16,'var(--ia-blue)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">People Summary</div>
            <div class="ia-collapse-hdr-sub">${students.length} total in ${_iaInstName}</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          <div class="ia-metric-grid">
            <div class="ia-metric good"><div class="ia-metric-n">${admins.length}</div><div class="ia-metric-l">Admins</div></div>
            <div class="ia-metric good"><div class="ia-metric-n">${enums.length}</div><div class="ia-metric-l">Enumerators</div></div>
            <div class="ia-metric good"><div class="ia-metric-n">${perfList.length}</div><div class="ia-metric-l">Active IVs</div></div>
          </div>
        </div>
      </div>

      <!-- Enumerator Performance -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon amber">${_iaIcon('medal',16,'var(--ia-amber)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Enumerator Performance</div>
            <div class="ia-collapse-hdr-sub">${perfList.length} active</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          ${!perfList.length ? '<div class="ia-empty">No surveys submitted yet.</div>' : `
          <div class="ia-table-wrap">
            <table class="ia-table">
              <thead><tr><th>Rank</th><th>Enumerator</th><th>Surveys</th><th>Last Active</th></tr></thead>
              <tbody>
                ${perfList.map(([name, data], i) => `<tr>
                  <td><span class="badge ${i===0?'badge-amber':i<=2?'badge-blue':'badge-teal'}">${i+1}</span></td>
                  <td style="font-weight:700;">${name}</td>
                  <td style="font-weight:800;color:var(--ia-accent2);">${data.count}</td>
                  <td style="color:var(--ia-muted);font-size:.72rem;">${data.lastDate||'—'}</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>`}
        </div>
      </div>

      <!-- Institution Admins -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon amber">${_iaIcon('shield',16,'var(--ia-amber)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Institution Admins</div>
            <div class="ia-collapse-hdr-sub">${admins.length} total</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          ${!admins.length ? '<div class="ia-empty">No institution admins found.</div>' : admins.map(s => userRow(s, true)).join('')}
        </div>
      </div>

      <!-- Registered Students/Enumerators -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon green">${_iaIcon('people',16,'var(--ia-green)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Registered Enumerators</div>
            <div class="ia-collapse-hdr-sub">${enums.length} total</div>
          </div>
          <div class="ia-collapse-hdr-arrow">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body">
          ${!enums.length ? '<div class="ia-empty">No enumerators registered yet.</div>' : enums.map(s => userRow(s, false)).join('')}
        </div>
      </div>

      <div style="font-size:.67rem;color:var(--ia-muted);text-align:center;padding:8px 0;">Account — removes login only &nbsp;·&nbsp; + Records — removes login and all their surveys</div>
    </div>`;
}

// ─── TAB: Survey Data ─────────────────────────────────────────────────────────

function _iaTabData(el) {
  const recs = _iaData.records;
  el.innerHTML = `
    <div style="display:flex;gap:8px;margin-bottom:12px;align-items:center;">
      <div class="ia-search-wrap" style="flex:1;">
        <span class="ia-search-icon">${_iaIcon('filter',14)}</span>
        <input id="ia-data-search" class="ia-search" placeholder="Search location or interviewer…" oninput="_iaDataFilter()">
      </div>
      <button id="ia-data-export-csv" data-sa-export-inst="csv-all"
        style="padding:9px 13px;background:var(--ia-accent);color:#fff;border:none;border-radius:9px;cursor:pointer;font-size:.74rem;font-family:inherit;font-weight:700;display:flex;align-items:center;gap:6px;white-space:nowrap;">
        ${_iaIcon('download',14)} CSV
      </button>
    </div>
    <div id="ia-data-table"></div>`;
  document.getElementById('ia-data-export-csv')?.addEventListener('click', () => _iaExportCSV(_iaData.records, _iaInstName));
  _iaDataFilter();
}

function _iaDataFilter() {
  const q    = (document.getElementById('ia-data-search')?.value || '').toLowerCase();
  const recs = _iaData.records;
  const fil  = q ? recs.filter(r =>
    (r.interview_location||r.location||'').toLowerCase().includes(q) ||
    (r.interviewer_name||r.interviewer||'').toLowerCase().includes(q)
  ) : recs;

  const el = document.getElementById('ia-data-table');
  if (!el) return;

  const rows = fil.slice(0, 80).map(r => `
    <tr>
      <td><span style="font-size:.74rem;font-weight:600;">${r.interview_location||r.location||'Unknown'}</span></td>
      <td style="color:var(--ia-muted);font-size:.72rem;">${r.interviewer_name||r.interviewer||'—'}</td>
      <td style="color:var(--ia-muted);font-size:.7rem;white-space:nowrap;">${r.interview_date||(r.synced_at||'').slice(0,10)}</td>
      <td><span class="badge badge-teal" style="font-size:.6rem;">View</span></td>
    </tr>`).join('');

  el.innerHTML = `
    <div style="font-size:.65rem;color:var(--ia-muted);margin-bottom:8px;font-weight:600;">Showing ${Math.min(fil.length,80)} of ${fil.length} records</div>
    <div class="ia-table-wrap">
      <table class="ia-table">
        <thead><tr><th>Location</th><th>Interviewer</th><th>Date</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    ${fil.length > 80 ? `<div style="text-align:center;font-size:.72rem;color:var(--ia-muted);padding:8px;">+${fil.length-80} more — export CSV for full list</div>` : ''}`;
}

// ─── TAB: Reports ─────────────────────────────────────────────────────────────

function _iaTabReports(el) {
  const risks  = (window.iaMetrics?.risk_profiles||[]).filter(r => r.level==='HIGH'||r.level==='MODERATE');
  const enums  = Object.entries((() => {
    const m = {};
    _iaData.records.forEach(r => { const iv = r.interviewer_name||r.interviewer||'Unknown'; m[iv] = (m[iv]||0)+1; });
    return m;
  })()).sort((a,b) => b[1]-a[1]);

  el.innerHTML = `
    <div class="ia-anim">
      <div class="ia-label" style="padding:0 0 8px;">Institution Reports</div>

      <button id="ia-rpt-institution" class="ia-export-btn">
        <div class="ia-export-btn-icon" style="background:rgba(14,165,114,.12);">${_iaIcon('analytics',16,'var(--ia-accent)')}</div>
        <div><div class="ia-export-btn-text-main">Full Institution Report (Print/PDF)</div>
        <div class="ia-export-btn-text-sub">Health indicators, risks &amp; recommendations for ${_iaInstName}</div></div>
      </button>

      <button id="ia-rpt-csv-all" class="ia-export-btn">
        <div class="ia-export-btn-icon" style="background:rgba(46,124,246,.12);">${_iaIcon('download',16,'var(--ia-blue)')}</div>
        <div><div class="ia-export-btn-text-main">All Surveys — CSV Export</div>
        <div class="ia-export-btn-text-sub">${_iaData.records.length} records · ${_iaInstName}</div></div>
      </button>

      <button id="ia-rpt-group" class="ia-export-btn">
        <div class="ia-export-btn-icon" style="background:rgba(184,144,42,.12);">${_iaIcon('people',16,'var(--ia-amber)')}</div>
        <div><div class="ia-export-btn-text-main">Class Group Report (Full PDF)</div>
        <div class="ia-export-btn-text-sub">All interviewers · cover page · per-student tables · ${_iaData.records.length} records</div></div>
      </button>

      <button id="ia-rpt-individual-picker" class="ia-export-btn">
        <div class="ia-export-btn-icon" style="background:rgba(14,165,114,.12);">${_iaIcon('person',16,'var(--ia-accent)')}</div>
        <div><div class="ia-export-btn-text-main">Individual Interviewer Reports (PDF)</div>
        <div class="ia-export-btn-text-sub">Select an interviewer → full report with cover page</div></div>
      </button>

      <!-- Individual (per enumerator) Reports -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button id="ia-rpt-collapse-hdr" class="ia-collapse-hdr">
          <div class="ia-collapse-hdr-icon amber">${_iaIcon('person',16,'var(--ia-amber)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Individual Reports</div>
            <div class="ia-collapse-hdr-sub">Per-enumerator PDF &amp; CSV</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          <div class="ia-table-wrap">
            <table class="ia-table">
              <thead><tr><th>Enumerator</th><th>Surveys</th><th>PDF</th><th>CSV</th></tr></thead>
              <tbody>
                ${enums.map(([name, count], idx) => `<tr>
                  <td style="font-weight:700;">${name}</td>
                  <td style="font-weight:800;color:var(--ia-accent2);">${count}</td>
                  <td><button data-rpt-enum-pdf="${idx}"
                    style="padding:4px 10px;background:rgba(14,165,114,.12);color:var(--ia-accent2);border:1px solid rgba(14,165,114,.2);border-radius:6px;cursor:pointer;font-size:.67rem;font-weight:700;font-family:inherit;display:flex;align-items:center;gap:4px;">
                    ${_iaIcon('export',12)} PDF</button></td>
                  <td><button data-rpt-enum-csv="${idx}"
                    style="padding:4px 10px;background:rgba(46,124,246,.12);color:var(--ia-blue2);border:1px solid rgba(46,124,246,.2);border-radius:6px;cursor:pointer;font-size:.67rem;font-weight:700;font-family:inherit;display:flex;align-items:center;gap:4px;">
                    ${_iaIcon('download',12)} CSV</button></td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Risk Data -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button id="ia-rpt-risk-hdr" class="ia-collapse-hdr">
          <div class="ia-collapse-hdr-icon" style="background:rgba(239,68,68,.12);">${_iaIcon('risk',16,'var(--ia-red)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Risk Household Data</div>
            <div class="ia-collapse-hdr-sub">${risks.filter(r=>r.level==='HIGH').length} high · ${risks.filter(r=>r.level==='MODERATE').length} moderate</div>
          </div>
          <div class="ia-collapse-hdr-arrow">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body">
          ${!risks.length ? '<div class="ia-empty">No risk data. Surveys will be analysed automatically.</div>' : `
            <div class="ia-metric-grid">
              <div class="ia-metric bad"><div class="ia-metric-n">${risks.filter(r=>r.level==='HIGH').length}</div><div class="ia-metric-l">High Risk</div></div>
              <div class="ia-metric warn"><div class="ia-metric-n">${risks.filter(r=>r.level==='MODERATE').length}</div><div class="ia-metric-l">Moderate</div></div>
              <div class="ia-metric"><div class="ia-metric-n">${risks.length}</div><div class="ia-metric-l">Total Flagged</div></div>
            </div>
            <div class="ia-table-wrap">
              <table class="ia-table">
                <thead><tr><th>Location</th><th>Interviewer</th><th>Score</th><th>Level</th><th>Factors</th></tr></thead>
                <tbody>
                  ${risks.slice(0,25).map(r => `<tr>
                    <td style="font-size:.76rem;">${r.location||'—'}</td>
                    <td style="font-size:.72rem;color:var(--ia-muted);">${r.interviewer||'—'}</td>
                    <td style="font-weight:700;">${r.score||'—'}</td>
                    <td><span class="badge ${r.level==='HIGH'?'badge-red':'badge-amber'}">${r.level}</span></td>
                    <td style="font-size:.68rem;color:var(--ia-muted);">${(r.factors||[]).slice(0,2).join(', ')}</td>
                  </tr>`).join('')}
                </tbody>
              </table>
            </div>
            ${risks.length > 25 ? `<div style="text-align:center;font-size:.72rem;color:var(--ia-muted);padding:6px;">+${risks.length-25} more in full PDF report</div>` : ''}`}
        </div>
      </div>

      <!-- Data Quality -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button id="ia-rpt-quality-hdr" class="ia-collapse-hdr">
          <div class="ia-collapse-hdr-icon blue">${_iaIcon('check',16,'var(--ia-blue)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Data Quality</div>
            <div class="ia-collapse-hdr-sub">Completeness &amp; field accuracy</div>
          </div>
          <div class="ia-collapse-hdr-arrow">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body">
          ${_iaQualitySection()}
        </div>
      </div>
    </div>`;

  // ── Wire ALL buttons via addEventListener — no inline onclick ──────────────
  // (inline onclick is blocked by CSP in many Android/Chrome environments)
  el.querySelector('#ia-rpt-institution')?.addEventListener('click', () => {
    console.log('[RPT] Full Institution Report clicked');
    console.log('[RPT] _iaData.records.length:', _iaData.records.length);
    console.log('[RPT] window.iaMetrics:', window.iaMetrics);
    console.log('[RPT] typeof computeSurveyMetrics:', typeof computeSurveyMetrics);
    if (!_iaData.records.length) {
      alert('No survey records found. Please refresh data first.');
      return;
    }
    _iaGenerateInstitutionReport();
  });
  el.querySelector('#ia-rpt-csv-all')?.addEventListener('click', () => _iaExportCSV(_iaData.records, _iaInstName));
  el.querySelector('#ia-rpt-group')?.addEventListener('click', () => {
    console.log('[RPT] Group Report clicked');
    console.log('[RPT] typeof admShowGroupReport:', typeof admShowGroupReport);
    console.log('[RPT] _iaData.records.length:', _iaData.records.length);
    if (typeof admShowGroupReport !== 'function') {
      console.error('[RPT] admShowGroupReport is NOT defined — is survey-reports.js loaded?');
      alert('Group Report is not available.\n\nThe report engine (survey-reports.js) does not appear to be loaded. Please refresh the page and try again, or contact your administrator.');
      return;
    }
    if (!_iaData.records.length) {
      alert('No survey records found. Please refresh data first.');
      return;
    }
    admShowGroupReport();
  });
  el.querySelector('#ia-rpt-individual-picker')?.addEventListener('click', () => {
    console.log('[RPT] Individual Picker clicked');
    console.log('[RPT] typeof admShowIndividualReports:', typeof admShowIndividualReports);
    if (typeof admShowIndividualReports !== 'function') {
      console.error('[RPT] admShowIndividualReports is NOT defined — is survey-reports.js loaded?');
      alert('Individual Reports are not available.\n\nThe report engine (survey-reports.js) does not appear to be loaded. Please refresh the page and try again, or contact your administrator.');
      return;
    }
    if (!_iaData.records.length) {
      alert('No survey records found. Please refresh data first.');
      return;
    }
    admShowIndividualReports();
  });
  el.querySelector('#ia-rpt-collapse-hdr')?.addEventListener('click', function(){ _iaToggleCollapse(this); });
  el.querySelector('#ia-rpt-risk-hdr')?.addEventListener('click', function(){ _iaToggleCollapse(this); });
  el.querySelector('#ia-rpt-quality-hdr')?.addEventListener('click', function(){ _iaToggleCollapse(this); });

  // Per-enumerator PDF/CSV buttons
  const enumNames = enums.map(([name]) => name);
  el.querySelectorAll('[data-rpt-enum-pdf]').forEach(btn => {
    const name = enumNames[parseInt(btn.getAttribute('data-rpt-enum-pdf'))];
    if (name) btn.addEventListener('click', () => _iaGenerateIndividualReport(name));
  });
  el.querySelectorAll('[data-rpt-enum-csv]').forEach(btn => {
    const name = enumNames[parseInt(btn.getAttribute('data-rpt-enum-csv'))];
    if (name) btn.addEventListener('click', () => _iaExportCSV(
      _iaData.records.filter(r => (r.interviewer_name||r.interviewer) === name), name
    ));
  });
}

function _iaQualitySection() {
  const q = window.iaMetrics?.data_quality;
  if (!q) return '<div style="color:var(--ia-muted);font-size:.8rem;text-align:center;padding:16px;">Quality data not available. Ensure surveys are loaded.</div>';
  const c = q.field_completeness || [];
  if (!c.length) return '<div style="color:var(--ia-muted);font-size:.8rem;">No quality data available.</div>';
  return `
    <div class="ia-metric-grid">
      <div class="ia-metric ${q.overall_quality_score>=80?'good':q.overall_quality_score>=60?'warn':'bad'}">
        <div class="ia-metric-n">${q.overall_quality_score}%</div><div class="ia-metric-l">Overall</div>
      </div>
      <div class="ia-metric bad"><div class="ia-metric-n">${q.missing_critical_count||0}</div><div class="ia-metric-l">Missing Critical</div></div>
      <div class="ia-metric"><div class="ia-metric-n">${c.length}</div><div class="ia-metric-l">Fields Tracked</div></div>
    </div>
    ${c.slice(0,10).map(f => `
      <div class="ia-progress">
        <div class="ia-progress-header">
          <span class="ia-progress-label">${f.field}</span>
          <span class="ia-progress-pct" style="color:${f.pct>=95?'var(--ia-green)':f.pct>=80?'var(--ia-amber)':'var(--ia-red)'};">${f.pct}%</span>
        </div>
        <div class="ia-progress-track"><div class="ia-progress-fill" style="width:${f.pct}%;background:${f.pct>=95?'var(--ia-green)':f.pct>=80?'var(--ia-amber)':'var(--ia-red)'};"></div></div>
      </div>`).join('')}`;
}

// ─── TAB: Institution Profile ─────────────────────────────────────────────────

/* ─── INSTITUTION PROFILES — Supabase SQL schema ──────────────────────────────
   Run this once in your Supabase SQL editor to create the profiles table:

   create table if not exists institution_profiles (
     institution_id   text primary key,
     inst_name        text,
     admin_name       text,
     contact_email    text,
     contact_phone    text,
     county           text,
     sub_county       text,
     village          text,
     gps              text,
     max_students     integer default 0,
     survey_enabled   boolean default true,
     cover_image      text,      -- base64 or storage URL
     logo_image       text,      -- base64 or storage URL
     village_list     jsonb default '[]',  -- array of village names for enumerator dropdown
     login_date       text,
     updated_at       timestamptz default now()
   );

   -- Row-level security: institution admins can only read/write their own row
   alter table institution_profiles enable row level security;

   create policy "inst_admin_own" on institution_profiles
     using (institution_id = current_setting('app.institution_id', true))
     with check (institution_id = current_setting('app.institution_id', true));
   ─────────────────────────────────────────────────────────────────────────── */

/* LocalStorage keys for profile data */
const _IA_PROFILE_KEY = 'ia_institution_profile';

function _iaGetProfile() {
  try { return JSON.parse(localStorage.getItem(_IA_PROFILE_KEY) || '{}'); }
  catch(e) { return {}; }
}
function _iaSaveProfile(data) {
  const existing = _iaGetProfile();
  const merged = Object.assign({}, existing, data, { institution_id: _iaInstId });
  merged.updated_at = new Date().toISOString();
  localStorage.setItem(_IA_PROFILE_KEY, JSON.stringify(merged));

  if (_iaInstId && window.HS?.HSAdmin?.updateInstitutionProfile) {
    const isBase64 = v => typeof v === 'string' && v.startsWith('data:');
    const { cover_image, logo_image, ...rest } = merged;

    // Ensure village_list is always a clean array before sending
    if (rest.village_list !== undefined) {
      if (typeof rest.village_list === 'string') {
        try { rest.village_list = JSON.parse(rest.village_list); } catch { rest.village_list = []; }
      }
      if (!Array.isArray(rest.village_list)) rest.village_list = [];
    }

    const apiPayload = {
      ...rest,
      ...(cover_image && !isBase64(cover_image) ? { cover_image } : {}),
      ...(logo_image  && !isBase64(logo_image)  ? { logo_image  } : {}),
    };

    window.HS.HSAdmin.updateInstitutionProfile(_iaInstId, apiPayload)
      .catch(e => {
        // Show the real error — never silently pretend it worked
        const msg = e?.data?.error || e.message || 'Unknown error';
        console.error('[profile] Cloud sync failed:', msg);
        _iaProfileMsg('Cloud sync failed: ' + msg, 'red');
      });
  }
  return merged;
}

// Upload a profile image (cover or logo) to Supabase Storage via the backend,
// then save the returned public URL into the profile row.
async function _iaUploadProfileImage(base64DataUrl, field) {
  if (!base64DataUrl || !base64DataUrl.startsWith('data:')) return null;
  if (!window.HS?.HSAdmin?.uploadImage) {
    // API not available — keep base64 locally only
    return null;
  }
  try {
    const ext      = base64DataUrl.split(';')[0].split('/')[1] || 'jpg';
    const filename = `${_iaInstId}_${field}_${Date.now()}.${ext}`;
    const result   = await window.HS.HSAdmin.uploadImage(base64DataUrl, 'profiles', filename);
    if (result?.url) {
      // Save the public URL back into the profile (replaces local base64)
      _iaSaveProfile({ [field]: result.url });
      return result.url;
    }
  } catch (e) {
    console.warn('[profile] Image upload error:', e.message);
  }
  return null;
}

function _iaProfileImageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function _iaTabProfile(el) {
  const prof = _iaGetProfile();
  const session = JSON.parse(localStorage.getItem('chsa_session') || localStorage.getItem('chsa_auth') || '{}');
  const loginDate = localStorage.getItem('ia_login_date') || session.login_date || session.created_at || '';

  // Survey control values
  const surveyEnabled  = prof.survey_enabled !== false; // default on
  const maxStudents    = prof.max_students   || '';
  const activeUsers    = _iaData.students.filter(s => s.role !== 'institution_admin').length;

  el.innerHTML = `
    <div class="ia-anim">

      <!-- ── GROUP PHOTO BANNER ── -->
      <div class="ia-profile-section-title">${_iaIcon('camera',13,'var(--ia-accent2)')} Group Photo & Branding</div>
      <div style="font-size:.7rem;color:var(--ia-muted);margin:-6px 0 10px;line-height:1.5;">
        The group photo appears on all student group reports for this institution. Upload a photo of all students or the institution.
      </div>

      <!-- Group Photo -->
      <div class="ia-profile-banner" id="ia-cover-banner">
        ${prof.cover_image
          ? `<img src="${prof.cover_image}" alt="Group Photo">`
          : `<div class="ia-profile-banner-placeholder">${_iaIcon('people',22,'var(--ia-dim)')}<br><span style="margin-top:6px;display:block;">Group photo — shown in all student reports</span></div>`}
        <!-- Logo inset -->
        <div class="ia-profile-logo-wrap" id="ia-logo-wrap">
          ${prof.logo_image
            ? `<img src="${prof.logo_image}" alt="Logo">`
            : `<span class="ia-profile-logo-placeholder">${_iaIcon('institution',22,'var(--ia-muted)')}</span>`}
          <button class="ia-profile-logo-upload-btn" title="Upload logo" onclick="document.getElementById('ia-logo-file').click()">
            ${_iaIcon('camera',10,'#fff')}
          </button>
        </div>
        <button class="ia-profile-upload-btn" onclick="document.getElementById('ia-cover-file').click()">
          ${_iaIcon('camera',11)} Change Group Photo
        </button>
      </div>
      <!-- hidden file inputs -->
      <input type="file" id="ia-cover-file" accept="image/*" style="display:none">
      <input type="file" id="ia-logo-file"  accept="image/*" style="display:none">

      <div style="margin-top:26px;"></div>

      <!-- ── INSTITUTION DETAILS ── -->
      <div class="ia-profile-section-title">${_iaIcon('institution',13,'var(--ia-accent2)')} Institution Details</div>

      <div class="ia-field-group">
        <div class="ia-field-label">Institution / School Name</div>
        <input id="ia-prof-instname" class="ia-field-input" type="text" placeholder="e.g. Great Lakes University"
          value="${_escHtml(prof.inst_name || _iaInstName)}">
      </div>

      <div class="ia-field-group">
        <div class="ia-field-label">Admin Name</div>
        <input id="ia-prof-adminname" class="ia-field-input" type="text" placeholder="Your full name"
          value="${_escHtml(prof.admin_name || session.full_name || session.name || '')}">
      </div>

      <div class="ia-field-row">
        <div class="ia-field-group">
          <div class="ia-field-label">Contact Email (optional)</div>
          <input id="ia-prof-email" class="ia-field-input" type="email" placeholder="admin@school.ac.ke"
            value="${_escHtml(prof.contact_email || session.email || '')}">
        </div>
        <div class="ia-field-group">
          <div class="ia-field-label">Contact Phone (optional)</div>
          <input id="ia-prof-phone" class="ia-field-input" type="tel" placeholder="+254 7XX XXX XXX"
            value="${_escHtml(prof.contact_phone || '')}">
        </div>
      </div>

      <!-- ── LOCATION ── -->
      <div class="ia-profile-section-title">${_iaIcon('pin',13,'var(--ia-accent2)')} Location</div>

      <!-- OSM Map preview -->
      <div id="ia-osm-map-wrap" style="width:100%;height:180px;border-radius:10px;overflow:hidden;border:1px solid var(--ia-border2);margin-bottom:10px;background:var(--ia-input-bg);display:flex;align-items:center;justify-content:center;">
        ${prof.gps
          ? `<iframe id="ia-osm-frame" src="https://www.openstreetmap.org/export/embed.html?bbox=${(() => { const [lat,lng] = (prof.gps||'').split(',').map(Number); return `${lng-.01},${lat-.01},${lng+.01},${lat+.01}&marker=${lat},${lng}`; })()}" style="width:100%;height:100%;border:none;" loading="lazy"></iframe>`
          : `<div style="text-align:center;color:var(--ia-muted);font-size:.74rem;">${_iaIcon('pin',22,'var(--ia-dim)')}<br><span style="margin-top:6px;display:block;">Map will appear after GPS detection</span></div>`}
      </div>

      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <button id="ia-gps-btn" onclick="_iaDetectGPS()"
          style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;background:linear-gradient(135deg,var(--ia-accent),var(--ia-accent2));color:#fff;border:none;border-radius:9px;padding:9px 12px;font-family:inherit;font-size:.78rem;font-weight:700;cursor:pointer;">
          ${_iaIcon('pin',13,'#fff')} Detect My Location
        </button>
        <button onclick="_iaOpenOSM()"
          style="display:flex;align-items:center;justify-content:center;gap:5px;background:var(--ia-generic-btn-bg);color:var(--ia-muted);border:1px solid var(--ia-border2);border-radius:9px;padding:9px 12px;font-family:inherit;font-size:.72rem;cursor:pointer;">
          ${_iaIcon('location',13)} View Map
        </button>
      </div>
      <div id="ia-gps-status" style="font-size:.7rem;color:var(--ia-muted);margin-bottom:10px;min-height:16px;"></div>

      <!-- County dropdown -->
      <div class="ia-field-row">
        <div class="ia-field-group">
          <div class="ia-field-label">County</div>
          <select id="ia-prof-county" class="ia-field-input" onchange="_iaOnCountyChange()">
            <option value="">— Select County —</option>
            ${_KE_DATA.counties.map(c=>`<option value="${_escHtml(c)}" ${prof.county===c?'selected':''}>${_escHtml(c)}</option>`).join('')}
          </select>
        </div>
        <div class="ia-field-group">
          <div class="ia-field-label">Sub-County</div>
          <select id="ia-prof-subcounty" class="ia-field-input" onchange="_iaOnSubCountyChange()">
            <option value="">— Select Sub-County —</option>
            ${(prof.county && _KE_DATA.subcounties[prof.county]
              ? _KE_DATA.subcounties[prof.county].map(s=>`<option value="${_escHtml(s)}" ${prof.sub_county===s?'selected':''}>${_escHtml(s)}</option>`)
              : []).join('')}
          </select>
        </div>
      </div>

      <!-- Ward dropdown -->
      <div class="ia-field-row">
        <div class="ia-field-group" style="grid-column:1/-1;">
          <div class="ia-field-label">Ward</div>
          <select id="ia-prof-ward" class="ia-field-input" onchange="_iaOnWardChange()">
            <option value="">— Select Ward —</option>
            ${(prof.sub_county && _KE_DATA.wards[prof.sub_county]
              ? _KE_DATA.wards[prof.sub_county].map(w=>`<option value="${_escHtml(w)}" ${prof.ward===w?'selected':''}>${_escHtml(w)}</option>`)
              : []).join('')}
          </select>
        </div>
      </div>

      <!-- Village — smart: typed by admin, auto-promoted to dropdown after 10 uses -->
      <div class="ia-field-row">
        <div class="ia-field-group" style="grid-column:1/-1;">
          <div class="ia-field-label" style="display:flex;align-items:center;justify-content:space-between;">
            <span>Village <span style="color:var(--ia-muted);font-weight:400;" id="ia-village-mode-hint">(type to add — saved to database)</span></span>
            <span id="ia-village-count" style="font-size:.65rem;color:var(--ia-muted);">${(prof.village_list||[]).length} saved</span>
          </div>
          <!-- If popular villages exist (≥10 uses), show dropdown first -->
          <div id="ia-village-dropdown-wrap" style="display:none;margin-bottom:6px;">
            <select id="ia-village-select" class="ia-field-input" onchange="_iaOnVillageSelect()">
              <option value="">— Select known village —</option>
            </select>
          </div>
          <!-- Always show text input (admin types new ones) -->
          <div class="ia-village-add-row">
            <input id="ia-village-inp" class="ia-village-inp" type="text"
              list="ia-village-datalist"
              placeholder="Type village name…"
              autocomplete="off"
              value="${_escHtml(prof.village||'')}"
              onkeydown="if(event.key==='Enter'){event.preventDefault();_iaVillageAdd();}"
              onblur="_iaVillageLearn()">
            <datalist id="ia-village-datalist">
              ${(prof.village_list||[]).map(v=>`<option value="${_escHtml(v)}">`).join('')}
            </datalist>
            <button class="ia-village-add-btn" onclick="_iaVillageAdd()">+ Add</button>
          </div>
          <!-- Tag list of admin-managed villages -->
          <div class="ia-village-wrap" style="margin-top:8px;">
            <div class="ia-village-tags" id="ia-village-tags">
              ${(prof.village_list||[]).map(v=>`
                <span class="ia-village-tag">
                  ${_escHtml(v)}
                  <button class="ia-village-tag-x" onclick="_iaVillageRemove(this)" title="Remove">×</button>
                </span>`).join('')}
            </div>
          </div>
          <div class="ia-village-hint">
            ${_iaIcon('location',11,'var(--ia-muted)')}
            Villages typed here are saved to the database. Once a village appears in <strong>10+ surveys</strong> it becomes a dropdown option automatically.
          </div>
        </div>
      </div>

      <div class="ia-field-row">
        <div class="ia-field-group" style="grid-column:1/-1;">
          <div class="ia-field-label">GPS Coordinates</div>
          <input id="ia-prof-gps" class="ia-field-input" type="text" placeholder="-0.7490, 34.9701"
            value="${_escHtml(prof.gps || '')}" onchange="_iaUpdateMapFromInput()">
        </div>
      </div>

      <!-- ── SURVEY CONTROL ── -->
      <div class="ia-profile-section-title">${_iaIcon('survey',13,'var(--ia-accent2)')} Survey Control</div>

      <div class="ia-toggle-row">
        <div>
          <div class="ia-toggle-label">Survey Access</div>
          <div class="ia-toggle-sub">Allow enumerators to submit surveys</div>
        </div>
        <button class="ia-toggle-btn" id="ia-survey-toggle" onclick="_iaToggleSurveyAccess(this)"
          data-on="${surveyEnabled ? '1' : '0'}">
          ${surveyEnabled ? _iaIcon('toggle_on',32,'var(--ia-accent)') : _iaIcon('toggle_off',32,'var(--ia-muted)')}
        </button>
      </div>

      <div class="ia-survey-counter">
        <div>
          <div class="ia-survey-counter-n">${activeUsers}</div>
          <div class="ia-survey-counter-l">Active Enumerators</div>
        </div>
        <div style="text-align:right;">
          <div class="ia-survey-counter-n">${_iaData.records.length}</div>
          <div class="ia-survey-counter-l">Total Submissions</div>
        </div>
      </div>

      <div class="ia-field-group">
        <div class="ia-field-label">Max Students / Concurrent Users</div>
        <input id="ia-prof-maxstudents" class="ia-field-input" type="number" min="1"
          placeholder="e.g. 50 (leave blank for unlimited)"
          value="${maxStudents}">
        <div style="font-size:.63rem;color:var(--ia-muted);margin-top:4px;">
          Currently ${activeUsers} active enumerator${activeUsers !== 1 ? 's' : ''}
        </div>
      </div>

      <!-- ── SESSION DATE ── -->
      <div class="ia-profile-section-title">${_iaIcon('calendar',13,'var(--ia-accent2)')} Session Date</div>

      <div class="ia-field-group">
        <div class="ia-field-label">Login / Session Date</div>
        <input id="ia-prof-logindate" class="ia-field-input" type="date"
          value="${loginDate ? loginDate.slice(0,10) : new Date().toISOString().slice(0,10)}">
        <div style="font-size:.63rem;color:var(--ia-muted);margin-top:4px;">
          Changes here sync back to the session store. Institution ID cannot be changed.
        </div>
      </div>

      <!-- ID (readonly) -->
      <div class="ia-field-group">
        <div class="ia-field-label">Institution ID (read-only)</div>
        <input class="ia-field-input" type="text" disabled value="${_escHtml(_iaInstId || '—')}">
      </div>

      <!-- ── SAVE BAR ── -->
      <div class="ia-save-bar">
        <button class="ia-save-btn" id="ia-prof-save" onclick="_iaSaveProfileForm()">
          ${_iaIcon('check',15,'#fff')} Save Profile
        </button>
        <button class="ia-cancel-btn" onclick="_iaGoHome()">Cancel</button>
      </div>

      <div id="ia-prof-msg" style="text-align:center;font-size:.75rem;padding:8px 0;min-height:24px;"></div>

    </div>
  `;

  // ── File upload listeners ──
  document.getElementById('ia-cover-file').addEventListener('change', async function() {
    const file = this.files[0]; if (!file) return;
    const b64 = await _iaProfileImageToBase64(file);

    // Show preview immediately from local base64
    document.getElementById('ia-cover-banner').innerHTML = `
      <img src="${b64}" alt="Group Photo" style="width:100%;height:100%;object-fit:cover;">
      <div class="ia-profile-logo-wrap" id="ia-logo-wrap">
        ${_iaGetProfile().logo_image
          ? `<img src="${_iaGetProfile().logo_image}" alt="Logo">`
          : `<span class="ia-profile-logo-placeholder">${_iaIcon('institution',22,'var(--ia-muted)')}</span>`}
        <button class="ia-profile-logo-upload-btn" title="Upload logo" onclick="document.getElementById('ia-logo-file').click()">
          ${_iaIcon('camera',10,'#fff')}
        </button>
      </div>
      <button class="ia-profile-upload-btn" onclick="document.getElementById('ia-cover-file').click()">
        ${_iaIcon('camera',11)} Change Cover
      </button>`;

    // Save base64 locally so it shows while upload happens
    _iaSaveProfile({ cover_image: b64 });
    _iaProfileMsg('Uploading group photo…', 'green');

    // Upload to Supabase Storage — replaces base64 with a permanent URL
    const url = await _iaUploadProfileImage(b64, 'cover_image');
    _iaProfileMsg(url ? 'Group photo saved to cloud ✓' : 'Group photo saved locally ✓', 'green');
  });

  document.getElementById('ia-logo-file').addEventListener('change', async function() {
    const file = this.files[0]; if (!file) return;
    const b64 = await _iaProfileImageToBase64(file);

    // Show preview immediately
    const wrap = document.getElementById('ia-logo-wrap');
    if (wrap) wrap.innerHTML = `<img src="${b64}" alt="Logo" style="width:100%;height:100%;object-fit:cover;">
      <button class="ia-profile-logo-upload-btn" title="Upload logo" onclick="document.getElementById('ia-logo-file').click()">
        ${_iaIcon('camera',10,'#fff')}
      </button>`;

    _iaSaveProfile({ logo_image: b64 });
    _iaProfileMsg('Uploading logo…', 'green');

    // Upload to Supabase Storage — replaces base64 with a permanent URL
    const url = await _iaUploadProfileImage(b64, 'logo_image');
    _iaProfileMsg(url ? 'Logo saved to cloud ✓' : 'Logo saved locally ✓', 'green');
  });

  // Load popular villages (≥10 uses) to show dropdown if applicable
  _iaLoadPopularVillages();
}

function _iaToggleSurveyAccess(btn) {
  const isOn = btn.dataset.on === '1';
  const nowOn = !isOn;
  btn.dataset.on = nowOn ? '1' : '0';
  btn.innerHTML = nowOn ? _iaIcon('toggle_on',32,'var(--ia-accent)') : _iaIcon('toggle_off',32,'var(--ia-muted)');
  _iaSaveProfile({ survey_enabled: nowOn });
  _iaProfileMsg(`Survey access ${nowOn ? 'enabled' : 'disabled'} ✓`, nowOn ? 'green' : 'amber');
}

function _iaSaveProfileForm() {
  const btn = document.getElementById('ia-prof-save');
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }

  const loginDate = document.getElementById('ia-prof-logindate')?.value || '';

  const data = {
    inst_name:      document.getElementById('ia-prof-instname')?.value.trim()    || _iaInstName,
    admin_name:     document.getElementById('ia-prof-adminname')?.value.trim()   || '',
    contact_email:  document.getElementById('ia-prof-email')?.value.trim()       || '',
    contact_phone:  document.getElementById('ia-prof-phone')?.value.trim()       || '',
    county:         document.getElementById('ia-prof-county')?.value.trim()      || '',
    sub_county:     document.getElementById('ia-prof-subcounty')?.value.trim()   || '',
    ward:           document.getElementById('ia-prof-ward')?.value.trim()        || '',
    village:        document.getElementById('ia-village-inp')?.value.trim()      || '',
    gps:            document.getElementById('ia-prof-gps')?.value.trim()         || '',
    max_students:   parseInt(document.getElementById('ia-prof-maxstudents')?.value) || 0,
    survey_enabled: document.getElementById('ia-survey-toggle')?.dataset.on === '1',
    login_date:     loginDate,
    village_list:   _iaVillageGetList(),
  };

  // Sync login date back into session stores
  if (loginDate) {
    ['chsa_session','chsa_auth'].forEach(key => {
      try {
        const s = JSON.parse(localStorage.getItem(key) || '{}');
        if (Object.keys(s).length) {
          s.login_date = loginDate;
          localStorage.setItem(key, JSON.stringify(s));
        }
      } catch(e) {}
    });
    localStorage.setItem('ia_login_date', loginDate);
  }

  // Update in-memory name if changed
  if (data.inst_name && data.inst_name !== _iaInstName) {
    _iaInstName = data.inst_name;
    const hdr = document.getElementById('ia-hdr-name');
    if (hdr) hdr.textContent = _iaInstName;
    // Persist the new name back into both session keys so it survives a page reload
    ['chsa_session', 'chsa_auth'].forEach(key => {
      try {
        const s = JSON.parse(localStorage.getItem(key) || '{}');
        if (Object.keys(s).length) {
          s.institution_name = _iaInstName;
          localStorage.setItem(key, JSON.stringify(s));
        }
      } catch(e) {}
    });
  }

  const isBase64 = v => typeof v === 'string' && v.startsWith('data:');
  const existing = (() => { try { return JSON.parse(localStorage.getItem('ia_institution_profile') || '{}'); } catch { return {}; } })();
  const { cover_image, logo_image, ...existingRest } = existing;
  const merged = { ...existingRest, ...data, institution_id: _iaInstId };

  // Ensure village_list is a clean array
  if (typeof merged.village_list === 'string') {
    try { merged.village_list = JSON.parse(merged.village_list); } catch { merged.village_list = []; }
  }
  if (!Array.isArray(merged.village_list)) merged.village_list = [];

  // Always save locally first
  localStorage.setItem('ia_institution_profile', JSON.stringify({ ...merged, cover_image, logo_image }));

  if (!_iaInstId || !window.HS?.HSAdmin?.updateInstitutionProfile) {
    if (btn) { btn.disabled = false; btn.innerHTML = `${_iaIcon('check',15,'#fff')} Saved Locally`; }
    _iaProfileMsg('Saved locally (no cloud connection)', 'amber');
    return;
  }

  const apiPayload = {
    ...merged,
    ...(cover_image && !isBase64(cover_image) ? { cover_image } : {}),
    ...(logo_image  && !isBase64(logo_image)  ? { logo_image  } : {}),
  };

  window.HS.HSAdmin.updateInstitutionProfile(_iaInstId, apiPayload)
    .then(() => {
      if (btn) { btn.disabled = false; btn.innerHTML = `${_iaIcon('check',15,'#fff')} Saved ✓`; }
      _iaProfileMsg('Profile saved to cloud ✓', 'green');
      setTimeout(() => { if (btn) btn.innerHTML = `${_iaIcon('check',15,'#fff')} Save Profile`; }, 2000);
    })
    .catch(e => {
      const msg = e?.data?.error || e.message || 'Unknown error';
      if (btn) { btn.disabled = false; btn.innerHTML = `${_iaIcon('warning',15,'#fff')} Retry`; }
      _iaProfileMsg('Cloud save failed: ' + msg, 'red');
    });
}

function _iaProfileMsg(msg, type='green') {
  const el = document.getElementById('ia-prof-msg');
  if (!el) return;
  const colors = { green: 'var(--ia-green)', amber: 'var(--ia-amber)', red: 'var(--ia-red)' };
  el.style.color = colors[type] || colors.green;
  el.textContent = msg;
  setTimeout(() => { if (el) el.textContent = ''; }, 3500);
}

// ─── VILLAGE LIST MANAGER ─────────────────────────────────────────────────────

function _iaVillageGetList() {
  const tags = document.getElementById('ia-village-tags');
  if (!tags) return _iaGetProfile().village_list || [];
  return Array.from(tags.querySelectorAll('.ia-village-tag'))
    .map(t => t.childNodes[0].textContent.trim())
    .filter(Boolean);
}

function _iaVillageAdd() {
  const inp = document.getElementById('ia-village-inp');
  if (!inp) return;
  const name = inp.value.trim();
  if (!name) return;

  // Deduplicate (case-insensitive)
  const existing = _iaVillageGetList().map(v => v.toLowerCase());
  if (existing.includes(name.toLowerCase())) {
    inp.value = '';
    inp.focus();
    return;
  }

  const tags = document.getElementById('ia-village-tags');
  if (!tags) return;

  const tag = document.createElement('span');
  tag.className = 'ia-village-tag';
  tag.innerHTML = `${_escHtml(name)}<button class="ia-village-tag-x" onclick="_iaVillageRemove(this)" title="Remove">×</button>`;
  tags.appendChild(tag);
  inp.value = '';
  inp.focus();
  _iaVillageSave();
}

function _iaVillageRemove(btn) {
  btn.closest('.ia-village-tag').remove();
  _iaVillageSave();
}

function _iaVillageAddFromGPS(villageName) {
  if (!villageName) return;
  const existing = _iaVillageGetList().map(v => v.toLowerCase());
  if (existing.includes(villageName.toLowerCase())) return; // already there
  const tags = document.getElementById('ia-village-tags');
  if (!tags) return;
  const tag = document.createElement('span');
  tag.className = 'ia-village-tag';
  tag.innerHTML = `${_escHtml(villageName)}<button class="ia-village-tag-x" onclick="_iaVillageRemove(this)" title="Remove">×</button>`;
  tags.appendChild(tag);
  _iaVillageSave();
}

function _iaVillageSave() {
  const list = _iaVillageGetList();
  // Update counter label
  const counter = document.getElementById('ia-village-count');
  if (counter) counter.textContent = `${list.length} village${list.length!==1?'s':''}`;
  // Persist immediately
  _iaSaveProfile({ village_list: list });
  // Expose globally so survey form can consume it
  window.IA_VILLAGE_LIST = list;
}

function _iaVillageInit() {
  // On page load: expose current list globally so survey form can use it immediately
  const prof = _iaGetProfile();
  window.IA_VILLAGE_LIST = prof.village_list || [];
}

// ─── KENYA ADMINISTRATIVE DATA ────────────────────────────────────────────────
// Counties → Sub-Counties → Wards (all 47 counties, major sub-counties & wards)

const _KE_DATA = (() => {
  // Raw structure: county → { subcounties: [...], wards: { subcounty: [...] } }
  const raw = {
    'Mombasa':       { sc:['Changamwe','Jomvu','Kisauni','Likoni','Mvita','Nyali'],
      w:{ 'Changamwe':['Changamwe','Kipevu','Airport','Miritini','Chaani'],
          'Jomvu':['Jomvu Kuu','Mikindani','Miritini'],
          'Kisauni':['Mjambere','Junda','Bamburi','Mwakirunge','Mtopanga','Kisauni','Magogoni'],
          'Likoni':['Mtongwe','Shika Adabu','Bofu','Likoni','Timbwani'],
          'Mvita':['Mji Wa Kale/Makadara','Tudor','Tononoka','Shimanzi/Ganjoni','Majengo'],
          'Nyali':['Frere Town','Ziwa La Ng\'ombe','Mkomani','Kongowea','Kadzandani'] }},
    'Kwale':         { sc:['Kinango','Lungalunga','Matuga','Msambweni'],
      w:{ 'Kinango':['Kinango','Mackinnon Road','Chengoni/Samburu','Mwavumbo','Kasemeni'],
          'Lungalunga':['Pongwe/Kikoneni','Dzombo','Mwereni','Vanga'],
          'Matuga':['Tsimba Golini','Waa','Tiwi','Kubo South','Mkongani'],
          'Msambweni':['Gombato Bongwe','Ukunda','Kinondo','Ramisi'] }},
    'Kilifi':        { sc:['Ganze','Kaloleni','Kilifi North','Kilifi South','Magarini','Malindi','Rabai'],
      w:{ 'Kilifi North':['Tezo','Soku','Mnarani','Junju','Mwarakaya','Shimo La Tewa'],
          'Kilifi South':['Amani/Sabaki','Mavueni','Kayafungo','Mariakani'],
          'Malindi':['Shella','Ganda','Malindi Town','Barani','Kakuyuni','Jilore','Dakatcha'],
          'Magarini':['Magarini','Marafa','Gongoni','Adu','Garashi','Sabaki'],
          'Kaloleni':['Kaloleni','Mariakani','Kayafungo','Mwanamwinga'],
          'Ganze':['Bamba','Jaribuni','Sokoni','Ganze','Chasimba'],
          'Rabai':['Rabai/Kisurutini','Ruruma','Mwawesa','Mtepeni'] }},
    'Tana River':    { sc:['Bura','Galole','Garsen'],
      w:{ 'Bura':['Chewele','Tana North','Wayu','Waldena'],
          'Galole':['Mikinduni','Chara','Kinakomba','Mrima/Tana'],
          'Garsen':['Garsen South','Garsen Central','Garsen North (Zubaki)','Garsen West','Kipini East','Kipini West'] }},
    'Lamu':          { sc:['Lamu East','Lamu West'],
      w:{ 'Lamu East':['Faza','Kiunga','Basuba'],
          'Lamu West':['Shella','Hindi','Mkunumbi','Hongwe','Witu','Bahari'] }},
    'Taita-Taveta':  { sc:['Mwatate','Taveta','Voi','Wundanyi'],
      w:{ 'Mwatate':['Ronge','Mwatate','Bura (Taita)','Chawia','Wumingu/Kishushe','Mgange Dawida'],
          'Taveta':['Chala','Mahoo','Bomani','Mboghoni','Mata'],
          'Voi':['Mbololo','Sagalla','Kaloleni (Taita)','Marungu','Ngolia','Voi'],
          'Wundanyi':['Wundanyi/Mbolia','Mwanda','Mgange','Werugha'] }},
    'Garissa':       { sc:['Daadab','Fafi','Garissa Township','Hulugho','Ijara','Lagdera'],
      w:{ 'Garissa Township':['Township','Galbet','Iftin','Waberi','Industrial','Madina'],
          'Daadab':['Daadab','Danyere','Jarajila','Liboi','Dertu'],
          'Fafi':['Nanighi','Bura East','Dekaharia','Jarajila','Fafi'],
          'Hulugho':['Hulugho','Masalani'],
          'Ijara':['Masalani','Ijara','Sangailu'],
          'Lagdera':['Modogashe','Benane','Goreale','Maalimin','Sabena','Baraki'] }},
    'Wajir':         { sc:['Eldas','Tarbaj','Wajir East','Wajir North','Wajir South','Wajir West'],
      w:{ 'Wajir East':['Township','Khorof/Harar','Hadado/Athibohol'],
          'Wajir West':['Ganyure/Wagberi','War','Adan','Kamuthe','Griftu','Hadado'],
          'Wajir North':['Wajir North','Bute','Korondille','Gurar','Batalu'],
          'Wajir South':['Wajir South','Ademasajida','Habasswein','Lagboghol South','Diif'],
          'Tarbaj':['Tarbaj','Wargadud','Sarman'],
          'Eldas':['Eldas','Birqacha','Dambala/Fachana'] }},
    'Mandera':       { sc:['Banissa','Lafey','Mandera East','Mandera North','Mandera South','Mandera West'],
      w:{ 'Mandera East':['Neboi','Ngamia','Libehia','Khalalio'],
          'Mandera West':['Mandera West','Takaba South','Takaba','Dandu','Lagsure','Gither'],
          'Mandera North':['Ashabito','Morothile','Rhamu','Rhamu Dimtu'],
          'Mandera South':['Mandera South','Wargadud','Shimbir Fatuma'],
          'Lafey':['Lafey','Fino','Arabia'],
          'Banissa':['Banissa','Gari','Malkamari','Derkhale','Gub Gub'] }},
    'Marsabit':      { sc:['Laisamis','Moyale','North Horr','Saku'],
      w:{ 'Saku':['Sagante/Jaldesa','Karare','Marsabit Central'],
          'Laisamis':['Laisamis','Loiyangalani','Korr/Ngurunit','Logologo'],
          'North Horr':['North Horr','Illeret','Maikona','Turbi'],
          'Moyale':['Moyale','Sololo','Butiye','Uran','Obbu'] }},
    'Isiolo':        { sc:['Garbatulla','Isiolo','Merti'],
      w:{ 'Isiolo':['Wabera','Chari','Bula Pesa','Oldo/Nyiro','Cherab','Eastern'],
          'Merti':['Merti','Kinna'],
          'Garbatulla':['Garbatulla','Sericho','Chari'] }},
    'Meru':          { sc:['Buuri','Igembe Central','Igembe North','Igembe South','Imenti North','Imenti South','Tigania East','Tigania West'],
      w:{ 'Imenti North':['Municipality','Ntima East','Ntima West','Nyaki West','Nyaki East'],
          'Imenti South':['Abothuguchi West','Abothuguchi Central','Kiagu','Abogeta East','Abogeta West','Mitunguu'],
          'Buuri':['Timau','Kisima','Kiirua/Naari','Ruiri/Rwarera','Meru North'],
          'Tigania East':['Athiru Gaiti','Akachiu','Karama','Athiru Ruujine','Tigi'],
          'Tigania West':['Athwana','Akithi','Kiguchwa','Mikinduri','Thangatha'],
          'Igembe South':['Maua','Kiegoi/Antubetwe Kiongo','Akirang\'ondu','Athiru Gaiti'],
          'Igembe Central':['Igembe Central','Kangeta','Njia'],
          'Igembe North':['Igembe North','Antuambui','Ntunene','Antubetwe Kiongo','Akirang\'ondu'] }},
    'Tharaka-Nithi': { sc:['Chuka/Igambang\'ombe','Maara','Tharaka North','Tharaka South'],
      w:{ 'Chuka/Igambang\'ombe':['Chuka','Karingani','Mugwe','Igambang\'ombe'],
          'Maara':['Muthambi','Murugi/Mugumango','Kibung\'a','Gatunga','Nkuene'],
          'Tharaka North':['Tharaka North','Marimanti'],
          'Tharaka South':['Tharaka South','Gaturi South','Nkondi'] }},
    'Embu':          { sc:['Manyatta','Mbeere North','Mbeere South','Runyenjes'],
      w:{ 'Manyatta':['Ruguru','Kirimari','Gaturi','Ngandori/Nginda','Embu East','Embu West','Kamiu','Nembure'],
          'Runyenjes':['Runyenjes Central','Gaturi North','Kyeni North','Kyeni South'],
          'Mbeere North':['Mwea','Makima','Mbeti North','Mavuria','Kiambere'],
          'Mbeere South':['Riandu','Mbeti South','Murenga','Ishiara','Nthawa'] }},
    'Kitui':         { sc:['Kitui Central','Kitui East','Kitui Rural','Kitui South','Kitui West','Mwingi Central','Mwingi North','Mwingi West'],
      w:{ 'Kitui Central':['Mutonguni','Kauwi','Matinyani','Kwa Mutonga/Kithumula'],
          'Kitui West':['Mutomo','Kallikakya','Nguumo','Kanziku'],
          'Kitui Rural':['Kisasi','Mweasya','Kanyangi'],
          'Mwingi North':['Kyuso','Mumoni','Tseikuru','Ngomeni'],
          'Mwingi Central':['Kivou','Nguni','Nuu','Migration','Kyome/Thaana'],
          'Mwingi West':['Mui','Waita','Mwingi Central'],
          'Kitui East':['Chuluni','Nzambani','Voo/Kyamatu','Endau/Malalani','Mutito/Kaliku'],
          'Kitui South':['Ikanga/Kyatune','Mutito','Ikutha','Kwa Vonza/Yatta'] }},
    'Machakos':      { sc:['Kathiani','Machakos Town','Masinga','Matungulu','Mavoko','Mwala','Yatta'],
      w:{ 'Machakos Town':['Mutituni','Machakos Central','Mua','Kalama','Mbiuni','Muvuti/Kiima Kimwe','Kola'],
          'Mavoko':['Mavoko','Syokimau/Mulolongo','Athi River'],
          'Masinga':['Masinga Central','Ekalakala','Muthesya','Ndithini'],
          'Yatta':['Yatta','Ndalani','Matuu','Kithimani','Ikombe','Katangi'],
          'Mwala':['Mbee/Mwania','Mwala','Kibauni','Kathama'],
          'Matungulu':['Matungulu North','Matungulu East','Matungulu West','Kyeleni'],
          'Kathiani':['Mitaboni','Kathiani Central','Upper Kaewa/Iveti','Lower Kaewa'] }},
    'Makueni':       { sc:['Kaiti','Kibwezi East','Kibwezi West','Kilome','Makueni','Mbooni'],
      w:{ 'Makueni':['Makueni','Mavindini','Kitise/Kithuki','Kathonzweni','Nzaui/Kilili/Kalamba','Mbitini'],
          'Mbooni':['Tulimani','Mbooni','Kithungo/Kitundu','Kisau/Winzilu'],
          'Kaiti':['Ukia','Kee','Kilungu','Ilima'],
          'Kibwezi West':['Makindu','Nguumo','Kikumbulyu North','Kikumbulyu South','Nguu/Masumba','Emali/Mulala'],
          'Kibwezi East':['Kibwezi','Masongaleni','Mtito Andei','Thange','Ivingoni/Nzambani'],
          'Kilome':['Kasikeu','Mukaa','Kiima Kimwe'] }},
    'Nyandarua':     { sc:['Kinangop','Kipipiri','Ndaragwa','Ol Kalou','Ol Joro Orok'],
      w:{ 'Ol Kalou':['Gathanji','Gatimu','Wanjohi','Ol Kalou','Ol Joro Orok','Karau'],
          'Ol Joro Orok':['Manunga','Mugumo-Ini','Charagita','Leshau','Pondo'],
          'Ndaragwa':['Ndaragwa','Shamata','Nyakio','Engineer'],
          'Kipipiri':['Kipipiri','Wanjohi','Kirima','Geta','Rurii'],
          'Kinangop':['North Kinangop','South Kinangop','Murungaru','Nyakio','Engineer','Gathara'] }},
    'Nyeri':         { sc:['Kieni East','Kieni West','Mathira East','Mathira West','Mukurweini','Nyeri Town','Tetu','Othaya'],
      w:{ 'Nyeri Town':['Rware','Gatitu/Muruguru','Iria-Ini','Mahiga','Karangai'],
          'Mathira East':['Ruguru','Kirimukuyu','Iria Ini','Karima'],
          'Mathira West':['Gakawa','Kabaru','Githithi','Konyu/Chieni'],
          'Tetu':['Aguthi/Gaaki','Wamagana','Chinga','Iria-Ini'],
          'Kieni East':['Naromoru Kiamathaga','Mwiyogo/Endarasha','Mugunda','Gatarakwa'],
          'Kieni West':['Gakawa','Kabaru','Githithi'],
          'Othaya':['Gaki','Chinga','Iruri','North Tetu'],
          'Mukurweini':['Gikondi','Rugi','Mukurwe-Ini West','Mukurwe-Ini Central'] }},
    'Kirinyaga':     { sc:['Gichugu','Kirinyaga Central','Mwea East','Mwea West','Ndia'],
      w:{ 'Kirinyaga Central':['Mutithi','Kerugoya','Inoi','Kabare'],
          'Mwea East':['Mwea East','Thiba','Mutithi','Kangai'],
          'Mwea West':['Mwea West','Murinduko','Gathigiriri','Tebere'],
          'Ndia':['Kiine','Karumandi','Mukure','Ndia','Gitombani','Ngariama'],
          'Gichugu':['Kabare','Baragwi','Njukiini','Ngariama','Kariti'] }},
    'Murang\'a':     { sc:['Gatanga','Kahuro','Kandara','Kangema','Kigumo','Kiharu','Mathioya','Murang\'a South'],
      w:{ 'Kiharu':['Wangu','Mugoiri','Mbiri','Township','Murarandia','Gaturi'],
          'Kigumo':['Kigumo','Kinyona','Kiru','Kamacharia'],
          'Kangema':['Kanyenya-Ini','Muguru','Rwathia'],
          'Mathioya':['Gitugi','Kiru','Kamacharia'],
          'Kahuro':['Kahuro','Gaichanjiru','Wempa','Mugoiri'],
          'Kandara':['Ng\'araria','Muruka','Kagundu-Ini','Gaichanjiru','Ithiru','Ruchu'],
          'Gatanga':['Ithanga','Kakuzi/Mitubiri','Mugumo-Ini','Kihumbu-Ini','Gatanga'],
          'Murang\'a South':['Kimorori/Mabanda','Maragua Ridge','Ichagaki','Nginda','Maragua'] }},
    'Kiambu':        { sc:['Gatundu North','Gatundu South','Githunguri','Juja','Kabete','Kiambaa','Kiambu','Kikuyu','Limuru','Ruiru','Thika Town','Lari'],
      w:{ 'Kiambu':['Kiambu','Ting\'ang\'a','Ndenderu','Muchatha','Kihara'],
          'Thika Town':['Hospital','Gatuanyaga','Ngoliba','Kamenu','Township'],
          'Ruiru':['Ruiru East','Gitothua','Biashara','Gatongora','Kahawa Wendani','Mwiki','Murera','Theta'],
          'Juja':['Murera','Theta','Juja','Kalimoni','Witeithie'],
          'Kikuyu':['Muguga','Nindiri','Rironi','Kikuyu','Kinoo'],
          'Limuru':['Bibirioni','Limuru Central','Ndeiya','Limuru East','Tigoni'],
          'Lari':['Kijabe','Nyanduma','Kirenga','Lari/Kijabe'],
          'Kabete':['Gitaru','Muguga','Nyathuna','Kabete','Plateau'],
          'Gatundu South':['Gatundu','Kiganjo','Ndarugu','Ng\'enda'],
          'Gatundu North':['Gachika','Igogo','Mwenye','Chania'],
          'Githunguri':['Githunguri','Githiga','Ikinu','Ngewa','Komothai'],
          'Kiambaa':['Cianda','Karuri','Ndenderu','Muguga North','Kihara'] }},
    'Turkana':       { sc:['Kibish','Loima','Turkana Central','Turkana East','Turkana North','Turkana South','Turkana West'],
      w:{ 'Turkana Central':['Kanamkemer','Lobei','Kerio/Turkwel','Natirnalulung','Lodwar Township'],
          'Turkana North':['Turkana North','Lapur'],
          'Turkana South':['Kerio','Turkana South','Kaputir'],
          'Turkana East':['Kapedo/Napeitom','Katilu','Lobokat','Kalapata','Lokori/Kochodin'],
          'Turkana West':['Kakuma','Lopur','Nasiger','Oropoi','Kaaleng/Kaikor'],
          'Loima':['Loima','Turkwel','Kotaruk/Lobei'],
          'Kibish':['Kibish','Kaaleng/Kaikor','Oropoi'] }},
    'West Pokot':    { sc:['Kacheliba','Kapenguria','Pokot Central','Pokot South'],
      w:{ 'Kapenguria':['Kapenguria','Mnagei','Riwo','Sook','Kerelwa','Chepareria'],
          'Kacheliba':['Kacheliba','Kodich','Kasei','Alale','Loos','Kositei'],
          'Pokot South':['Sekerr','Tapach','Masol','Weiwei','Lelan'],
          'Pokot Central':['Batei','Lomut','Weiwei','Sekerr','Tapach'] }},
    'Samburu':       { sc:['Samburu East','Samburu North','Samburu West'],
      w:{ 'Samburu East':['Waso','Archer\'s Post','Merti','Ngare Mara'],
          'Samburu North':['Suguta Marmar','Ndoto','Nyiro','El Barta'],
          'Samburu West':['Loosuk','Poro','El Barta','Nachola','Kirisia'] }},
    'Trans-Nzoia':   { sc:['Cherangany','Endebess','Kiminini','Kwanza','Saboti'],
      w:{ 'Kiminini':['Kiminini','Waitaluk','St.Monica Kaplamai','Motosiet','Sikhendu'],
          'Kwanza':['Kwanza','Keiyo','Bidii','Kapomboi'],
          'Saboti':['Matisi','Tuwani','Saboti','Kinyoro','Machewa'],
          'Endebess':['Endebess','Matumbei','Chepchoina','Motosiet'],
          'Cherangany':['Cherangany','Kaplamai','Motosiet','Kiplombe','Kapseret','Sinyerere'] }},
    'Uasin Gishu':   { sc:['Ainabkoi','Kapseret','Kesses','Moiben','Soy','Turbo'],
      w:{ 'Kapseret':['Megun','Simat/Kapseret','Kipkenyo','Ngeria','Kimumu'],
          'Ainabkoi':['Ainabkoi/Olare','Kaptagat','Kapsoya'],
          'Kesses':['Kesses','Megun','Tarakwa'],
          'Soy':['Moi\'s Bridge','Ziwa','Soy','Burnt Forest/Turbo'],
          'Turbo':['Turbo','Huruma','Ngenyilel','Tapsagoi'],
          'Moiben':['Moiben','Sergoit','Karuna/Meibeki','Tembelio','Ziwa'] }},
    'Elgeyo-Marakwet':{ sc:['Keiyo North','Keiyo South','Marakwet East','Marakwet West'],
      w:{ 'Keiyo North':['Kaptiony','Kamariny','Metkei','Emsoo'],
          'Keiyo South':['Keiyo South','Chepkorio','Soin','Kamariny'],
          'Marakwet East':['Embobut/Embulot','Lelan','Sengwer','Kiptaber'],
          'Marakwet West':['Chebiemit','Lelan','Metkei','Tot/Tambach'] }},
    'Nandi':         { sc:['Aldai','Chesumei','Emgwen','Mosop','Nandi Hills','Tinderet'],
      w:{ 'Nandi Hills':['Nandi Hills','Chepkunyuk','Ol\'lessos','Kapchorua'],
          'Chesumei':['Chesumei','Kabwareng','Terik','Kobujoi','Kaptumo/Kaboi'],
          'Emgwen':['Kapsabet','Kosirai','Lelmokwo/Ngechek','Chepterit','Megun'],
          'Mosop':['Songhor/Soba','Kaboswa','Chemundu/Kapng\'etuny','Ndalat'],
          'Tinderet':['Tinderet','Tumoi','Murundu','Chemelil/Chemase','Koyo/Ndurio'],
          'Aldai':['Kabwareng','Terik','Kemeloi-Maraba','Ngerines','Ol\'lessos','Sirikwa'] }},
    'Baringo':       { sc:['Baringo Central','Baringo North','Baringo South','Eldama Ravine','Mogotio','Tiaty'],
      w:{ 'Baringo Central':['Kabarnet','Kabimoi','Tenges','Sacho','Ewalel/Chapchap','Kapropita'],
          'Baringo North':['Baringo North','Mochongoi','Mukutani','Baringo North'],
          'Baringo South':['Marigat','Ilchamus','Mochongoi','Mukutani'],
          'Eldama Ravine':['Ravine','Mogotio','Emining','Mumberes/Maji Mazuri'],
          'Mogotio':['Mogotio','Emining','Koibatek'],
          'Tiaty':['Tiaty East','Tiaty West','Ribkwo','Churo/Amaya'] }},
    'Laikipia':      { sc:['Laikipia Central','Laikipia East','Laikipia North','Laikipia West','Nyahururu'],
      w:{ 'Nyahururu':['Nyahururu','Kinamba','Mairo Inya','Igwamiti'],
          'Laikipia Central':['Ngobit','Tigithi','Laikipia Central','Githiga'],
          'Laikipia East':['Ngobit','Tigithi','Mukogodo East'],
          'Laikipia North':['Segera','Mukogodo West'],
          'Laikipia West':['Ol Moran','Rumuruti','Githiga','Marmanet','Igwamiti'] }},
    'Nakuru':        { sc:['Bahati','Gilgil','Kuresoi North','Kuresoi South','Molo','Naivasha','Nakuru Town East','Nakuru Town West','Njoro','Rongai','Subukia'],
      w:{ 'Nakuru Town East':['Biashara','Kivumbini','Flamingo','Menengai','Nakuru East'],
          'Nakuru Town West':['London','Kaptembwo','Kapkures','Shabab','Pipeline'],
          'Naivasha':['Mai Mahiu','Maiella','Olkaria','Naivasha East','Viwandani','Hells Gate'],
          'Gilgil':['Gilgil','Elementaita','Mbaruk/Eburu','Malewa West'],
          'Molo':['Elburgon','Marioshoni','Molo','Turi'],
          'Njoro':['Njoro','Mauche','Mau Narok','Kihingo'],
          'Kuresoi North':['Kuresoi North','Amalo','Keringet','Birrech'],
          'Kuresoi South':['Kedowa/Kimugul','Sirikwa','Amalo','Keringet'],
          'Bahati':['Bahati','Dundori','Kabatini','Kiamaina','Lanet/Umoja'],
          'Rongai':['Rongai','Menengai West','Visoi','Mosop'],
          'Subukia':['Subukia','Waseges','Kabazi'] }},
    'Narok':         { sc:['Narok East','Narok North','Narok South','Narok West','Transmara East','Transmara West'],
      w:{ 'Narok North':['Narok Town','Nkareta','Olposimoru','Olokurto','Narok North','Melelo'],
          'Narok East':['Ololulunga','Melelo','Loita','Mosiro'],
          'Narok South':['Majimoto/Naroosura','Olkeri','Siana','Nairage Enkare'],
          'Narok West':['Ilkisonko','Keekonyokie','Naikarra'],
          'Transmara East':['Kimintet','Shankoe','Kilegoris Central','Isuria'],
          'Transmara West':['Kilgoris Central','Shankoe','Lemek','Angata Barikoi','Ol Posimoru','Lolgorian'] }},
    'Kajiado':       { sc:['Isinya','Kajiado Central','Kajiado North','Kajiado South','Loitokitok','Mashuuru'],
      w:{ 'Kajiado Central':['Kajiado Central','Ildamat','Dalalekutuk','Purko'],
          'Kajiado North':['Ngong','Olkeri','Rongai','Oloolua','Nkaimurunya'],
          'Kajiado South':['Kajiado South','Loitokitok','Entonet/Lenkisem'],
          'Loitokitok':['Rombo','Mbirikani/Eselenkei','Kuku','Kimana','Entonet/Lenkisem'],
          'Isinya':['Isinya','Kitengela','Kaputiei North','Imaroro'],
          'Mashuuru':['Nkaimurunya','Isinya','Kaputiei North'] }},
    'Kericho':       { sc:['Ainamoi','Belgut','Bureti','Kipkelion East','Kipkelion West','Soin/Sigowet'],
      w:{ 'Ainamoi':['Ainamoi','Kapkugerwet','Kapsoit','Kipchebor/Cheboin'],
          'Belgut':['Belgut','Kabianga','Kembu','Waldai','Kapsoit'],
          'Bureti':['Kisiara','Tebesonik','Cheboin','Litein','Roret','Cheplanget'],
          'Kipkelion East':['Londiani','Kedowa/Kimugul','Sirikwa'],
          'Kipkelion West':['Kipkelion','Chemosot','Tilil','Kunyak','Chilchila'],
          'Soin/Sigowet':['Soin','Fort Tenan','Sigowet','Kamasian'] }},
    'Bomet':         { sc:['Bomet Central','Bomet East','Chepalungu','Konoin','Sotik'],
      w:{ 'Bomet Central':['Singorwet','Chemaner','Ndaraweta','Sigor','Silibwet Township'],
          'Bomet East':['Merigi','Kembu','Longisa','Kipreres','Chesoen'],
          'Chepalungu':['Chepalungu','Kongasis','Sigor','Silibwet'],
          'Konoin':['Konoin','Mogogosiek','Chebirbei','Kimulot','Mogogosiek'],
          'Sotik':['Sotik','Ndanai/Abosi','Chemagel','Rongena/Manaret'] }},
    'Kakamega':      { sc:['Butere','Ikolomani','Khwisero','Likuyani','Lugari','Lurambi','Matungu','Mumias East','Mumias West','Navakholo','Shinyalu'],
      w:{ 'Lurambi':['Butsotso East','Butsotso Central','Butsotso South','East Bunyore','Mahiakalo'],
          'Shinyalu':['Shinyalu','Isukha South','Isukha North','Isukha Central','Murhanda'],
          'Ikolomani':['Shikoti','Idakho East','Idakho West','Idakho Central','Idakho South'],
          'Mumias East':['Mumias Central','East Wanga','Musanda','Lusheya/Lubinu'],
          'Mumias West':['Mumias West','Malaha/Isongo/Makunga'],
          'Matungu':['Koyonzo','Kholera','Mayoni','Namamali','Khalaba'],
          'Butere':['Butere','South Kabras','East Kabras','North Kabras','West Kabras'],
          'Navakholo':['Bunyala Central','Bunyala East','Ingotse-Matungu'],
          'Likuyani':['Sango','Sinoko','Nzoia East','Lumakanda','Kongoni'],
          'Lugari':['Lugari','Mautuma','Lumakanda','Kongoni','Likuyani'],
          'Khwisero':['West Kabras','Butere East','Khwisero','Marama Central'] }},
    'Vihiga':        { sc:['Emuhaya','Hamisi','Luanda','Sabatia','Vihiga'],
      w:{ 'Sabatia':['Sabatia','Wodanga','Busali','Chavakali','Tambua'],
          'Vihiga':['Vihiga','Lugaga-Wamuluma','South Maragoli','Central Maragoli','Mungoma'],
          'Emuhaya':['North East Bunyore','Central Bunyore','West Bunyore'],
          'Luanda':['Luanda Township','Wemilabi','Mwibona','Luanda South','Emabungo'],
          'Hamisi':['Shiru','Gisambai','Shamakhokho','Banja','Muhudu','Tambua','Jepkoyai'] }},
    'Bungoma':       { sc:['Bumula','Kabuchai','Kanduyi','Kimilili','Mt. Elgon','Sirisia','Tongaren','Webuye East','Webuye West'],
      w:{ 'Kanduyi':['Musikoma','East Sang\'alo','Township','West Sang\'alo','Bukembe West','Bukembe East'],
          'Webuye East':['Ndivisi','Maraka','Kuywa','Mihuu','Nzoia'],
          'Webuye West':['Webuye West','Maraka','Chwele'],
          'Kimilili':['Kimilili','Kibingei','Maeni','Kamukuywa'],
          'Mt. Elgon':['Kapkateny','Kaptama','Cheptais','Chesikaki','Chepyuk','Kapsokwony','Kaberwa','Kaboywo'],
          'Sirisia':['Namwela','Malakisi/South Kulisiru','Lwandanyi'],
          'Tongaren':['Tongaren','Naitiri/Kabuyefwe','Milima','Ndalu/Tabani','Mbakalo'],
          'Kabuchai':['Kabuchai/Chwele','West Nalondo','Bwake/Luuya','Mukuyuni'],
          'Bumula':['Bumula','North Nalondo','Bungoma South','Kabuchai','Khasoko','Sang\'alo Hills','Siboti'] }},
    'Busia':         { sc:['Bunyala','Butula','Funyula','Nambale','Samia','Teso North','Teso South'],
      w:{ 'Teso North':['Malaba Central','Malaba North','Ang\'urai South','Ang\'urai North','Ang\'urai East'],
          'Teso South':['Busia Central','Amukura East','Amukura West','Amukura Central'],
          'Nambale':['Nambale Township','Bukhayo North/Waltsi','Bukhayo Central','Bukhayo East'],
          'Butula':['Butula','Busibwabo','Lunganyiro','Bukiri West'],
          'Funyula':['Funyula','Budalangi Central','Budubusi','Mundere','Nandwa'],
          'Bunyala':['West Bunyala','East Bunyala','North Bunyala','South Bunyala'],
          'Samia':['Port Victoria','Sio Port','Nangina','Ageng\'a Nanguba'] }},
    'Siaya':         { sc:['Alego Usonga','Bondo','Gem','Rarieda','Ugenya','Ugunja'],
      w:{ 'Alego Usonga':['Central Alego','Usonga','West Alego','Siaya Township','South East Alego','North Alego','North East Alego'],
          'Gem':['North Gem','South Gem','East Gem','West Gem','Central Gem','Yala Township'],
          'Ugenya':['West Ugenya','Ukwala','North Ugenya','East Ugenya'],
          'Ugunja':['Ugunja','Sigomere','North Ugenya'],
          'Bondo':['Bondo Township','Usigu','Got Regea','Nyang\'oma','Yimbo East','Yimbo West'],
          'Rarieda':['East Asembo','West Asembo','North Asembo','South Sakwa','East Sakwa','North Sakwa'] }},
    'Kisumu':        { sc:['Kisumu Central','Kisumu East','Kisumu West','Muhoroni','Nyakach','Nyando','Seme'],
      w:{ 'Kisumu Central':['Railways','Migosi','Shaurimoyo/Kaloleni','Market Milimani','Kondele','Central Kisumu'],
          'Kisumu East':['Nyalenda A','Kolwa Central','Manyatta B','Nyalenda B','Kolwa East'],
          'Kisumu West':['South West Kisumu','Kisumu North','West Kisumu','Central Kisumu'],
          'Muhoroni':['Muhoroni/Koru','Miwani','Ombeyi','Masogo/Nyang\'oma'],
          'Nyakach':['West Nyakach','North Nyakach','South Central Nyakach','East Nyakach','Seme'],
          'Nyando':['East Kano/Wawidhi','Kobiero','Awasi/Onjiko','Ahero','Kabonyo/Kanyagwal'],
          'Seme':['West Seme','Central Seme','East Seme','North Seme'] }},
    'Homa Bay':      { sc:['Homabay Town','Kabondo Kasipul','Karachuonyo','Kasipul','Mbita','Ndhiwa','Rachuonyo North','Rachuonyo South','Suba North','Suba South'],
      w:{ 'Homa Bay Town':['Homa Bay Central','Homa Bay Arujo','Homa Bay West','Homa Bay East'],
          'Kasipul':['South Kasipul','Central Kasipul','Kasipul Kabondo','West Kasipul'],
          'Karachuonyo':['Karachuonyo North','Central','West','East','Kanyaluo'],
          'Kabondo Kasipul':['Kabondo East','Kokwanyo/Kakelo','Kojwach','Kabondo West'],
          'Mbita':['Mfangano Island','Rusinga Island','Sindo','Gembe'],
          'Ndhiwa':['Kanyikela','Kabuoch North','Kabuoch South/Pala','Kanyamwa Kosewe','Kanyamwa Kologi','Ndhiwa'],
          'Rachuonyo South':['Oyugis','Rachuonyo South','Kanyada','Kagan'],
          'Rachuonyo North':['Rachuonyo North','West Kamagak','East Kamagak'],
          'Suba North':['Gwassi South','Gwassi North','Kaksingri West'],
          'Suba South':['Kaksingri East','Gembe East','Gembe West','Ruma Kaksingri'] }},
    'Migori':        { sc:['Awendo','Kuria East','Kuria West','Mabera','Nyatike','Rongo','Suna East','Suna West','Uriri'],
      w:{ 'Suna East':['God Jope','Suna Central','Kakrao','Kwa','Migori Township'],
          'Suna West':['Suna West','Wasweta II','Ragana-Oruba','Wasimbete'],
          'Rongo':['North Kamagambo','Central Kamagambo','East Kamagambo','South Kamagambo','Rongo Township'],
          'Awendo':['North Sakwa','South Sakwa','West Sakwa','East Sakwa','Awendo Central'],
          'Uriri':['North Uriri','Central Uriri','West Uriri','Uriri','Kuria South'],
          'Nyatike':['Macalder/Kanyarwanda','Kaler','Got Kachola','Muhuru','Kachieng\'','Kanyasa','North Kadem'],
          'Kuria East':['Kuria East','Ntimaru West','Ntimaru East','Nyabasi East','Nyabasi West'],
          'Kuria West':['Kuria West','Masaba North','Bukira East','Bukira West/Ikerege','Isibania'],
          'Mabera':['Tagare','Mabera','Gekomoni','Ntimaru East'] }},
    'Kisii':         { sc:['Bobasi','Bomachoge Borabu','Bomachoge Chache','Bonchari','Kitutu Chache North','Kitutu Chache South','Nyamache','South Mugirango','West Mugirango'],
      w:{ 'Kitutu Chache North':['Bogiakumu','Monyerero','Sensi','Marani','Kiogoro','Birongo'],
          'Kitutu Chache South':['Kitutu Chache South','Bogichora','Boochi/Tendere','Nyacheki'],
          'Nyamache':['Nyamache','Bombaba Borabu','Boikang\'a','Gachuba','Kembu','Manga'],
          'Bomachoge Chache':['Bomachoge Chache','Masige West','Masige East','Basi Central','Nyaribari Chache'],
          'Bobasi':['Bobasi Central','Bobasi Chache','Bobasi North Boitang\'o','Modosha','Sengera','Basi North'],
          'Bonchari':['Bogeka','Nyabiosi','Masige','Bonchari','South Mugirango'],
          'Bomachoge Borabu':['Bokimonge','Magenche','Boochi/Bosamaro','Nyaboneka'],
          'South Mugirango':['Nyacheki','Boochi Borabu','Rigoma','Getenga','Tombe','Magombo','Gesima'],
          'West Mugirango':['Bokeira','Magwagwa','Moticho','Gunda'] }},
    'Nyamira':       { sc:['Borabu','Manga','Masaba North','Nyamira North','Nyamira South'],
      w:{ 'Nyamira South':['Nyamira South','Magwagwa','Ekerenyo','Manga'],
          'Nyamira North':['Nyamira North','Nyansiongo','Itibo','Kiabonyoru'],
          'Masaba North':['Masaba North','Itibo','Kiabonyoru','Gesieka'],
          'Manga':['Manga','Gesima','Tombe','Magombo'],
          'Borabu':['Metembe','Bosamaro','Mokubo','Esise'] }},
    'Nairobi':       { sc:['Dagoretti North','Dagoretti South','Embakasi Central','Embakasi East','Embakasi North','Embakasi South','Embakasi West','Kamukunji','Kasarani','Kibra','Lang\'ata','Makadara','Mathare','Njiru','Roysambu','Ruaraka','Starehe','Westlands'],
      w:{ 'Westlands':['Kitisuru','Parklands/Highridge','Karura','Kangemi','Mountain View'],
          'Dagoretti North':['Kilimani','Kawangware','Gatina','Kileleshwa','Kabiro'],
          'Dagoretti South':['Mutu-Ini','Ngando','Riruta','Uthiru/Ruthimitu','Waithaka'],
          'Lang\'ata':['Karen','Nairobi West','Mugumu-Ini','South C','Nyayo Highrise'],
          'Kibra':['Laini Saba','Lindi','Makina','Woodley/Kenyatta Golf Course','Sarang\'ombe'],
          'Roysambu':['Githurai','Kahawa West','Roysambu','Zimmerman','Roysambu'],
          'Kasarani':['Clay City','Mwiki','Kasarani','Njiru','Ruai'],
          'Ruaraka':['Baba Dogo','Utalii','Mathare North','Lucky Summer','Korogocho'],
          'Embakasi South':['Imara Daima','Kwa Njenga','Kwa Ruben','Pipeline','Mombasa Road'],
          'Embakasi North':['Kariobangi North','Dandora Area I','Dandora Area II','Dandora Area III','Dandora Area IV'],
          'Embakasi Central':['Kayole North','Kayole South','Kayole Central','Komarock','Matopeni/Spring Valley'],
          'Embakasi East':['Upper Savanna','Lower Savanna','Embakasi','Utawala','Mihango'],
          'Embakasi West':['Umoja I','Umoja II','Mowlem','Kariobangi South','Komarock'],
          'Makadara':['Maringo/Hamza','Viwandani','Harambee','Makongeni'],
          'Kamukunji':['Pumwani','Eastleighwood','Eastleigh North','Airbase','California'],
          'Starehe':['Nairobi Central','Ngara','Pangani','Ziwani/Kariokor','Landimawe','Nairobi South'],
          'Mathare':['Hospital','Mabatini','Huruma','Ngei','Mlango Kubwa','Kiamaiko'],
          'Njiru':['Njiru','Roysambu','Clay City','Mwiki'],
          'Kamukunji':['Pumwani','Eastleighwood','Eastleigh North','Airbase','California'] }}
  };

  const counties = Object.keys(raw).sort();
  const subcounties = {};
  const wards = {};
  for (const county of counties) {
    subcounties[county] = raw[county].sc.sort();
    for (const sc of raw[county].sc) {
      if (raw[county].w[sc]) wards[sc] = raw[county].w[sc].sort();
    }
  }
  return { counties, subcounties, wards };
})();

// ─── DROPDOWN CASCADE ─────────────────────────────────────────────────────────

function _iaOnCountyChange() {
  const county = document.getElementById('ia-prof-county')?.value || '';
  const scSel = document.getElementById('ia-prof-subcounty');
  const wardSel = document.getElementById('ia-prof-ward');
  if (!scSel) return;
  scSel.innerHTML = '<option value="">— Select Sub-County —</option>' +
    (_KE_DATA.subcounties[county] || []).map(s => `<option value="${_escHtml(s)}">${_escHtml(s)}</option>`).join('');
  if (wardSel) wardSel.innerHTML = '<option value="">— Select Ward —</option>';
}

function _iaOnSubCountyChange() {
  const sc = document.getElementById('ia-prof-subcounty')?.value || '';
  const wardSel = document.getElementById('ia-prof-ward');
  if (!wardSel) return;
  wardSel.innerHTML = '<option value="">— Select Ward —</option>' +
    (_KE_DATA.wards[sc] || []).map(w => `<option value="${_escHtml(w)}">${_escHtml(w)}</option>`).join('');
}

function _iaOnWardChange() {
  // Ward selected — could update village hints in future
}

// ─── VILLAGE LEARN (backend sync) ─────────────────────────────────────────────

async function _iaVillageLearn() {
  const inp = document.getElementById('ia-village-inp');
  const name = (inp?.value || '').trim();
  if (!name || !_iaInstId) return;

  // Add to local tag list immediately
  const existing = _iaVillageGetList().map(v => v.toLowerCase());
  if (!existing.includes(name.toLowerCase())) {
    _iaVillageAddFromGPS(name); // reuses the DOM add helper
  }

  // POST to backend to persist & track usage count
  try {
    const ward = document.getElementById('ia-prof-ward')?.value || '';
    const session = JSON.parse(localStorage.getItem('chsa_session') || '{}');
    await fetch('/api/villages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        institution_id: _iaInstId,
        village_name: name,
        ward: ward,
        created_by: session.user_id || session.id || 'admin'
      })
    });
  } catch(e) { /* silent — profile save will sync the list anyway */ }

  // Load popular villages (≥10 uses) into dropdown
  _iaLoadPopularVillages();
}

async function _iaLoadPopularVillages() {
  if (!_iaInstId) return;
  try {
    const res = await fetch(`/api/villages?institution_id=${encodeURIComponent(_iaInstId)}`);
    if (!res.ok) return;
    const { popular = [] } = await res.json();
    const wrap = document.getElementById('ia-village-dropdown-wrap');
    const sel  = document.getElementById('ia-village-select');
    const dl   = document.getElementById('ia-village-datalist');
    const hint = document.getElementById('ia-village-mode-hint');
    if (popular.length > 0) {
      if (wrap) wrap.style.display = 'block';
      if (hint) hint.textContent = '(popular villages shown as dropdown — or type a new one below)';
      if (sel) {
        sel.innerHTML = '<option value="">— Select known village —</option>' +
          popular.map(v => `<option value="${_escHtml(v)}">${_escHtml(v)}</option>`).join('');
      }
    }
    if (dl) {
      dl.innerHTML = popular.map(v => `<option value="${_escHtml(v)}">`).join('');
    }
  } catch(e) { /* silent */ }
}

function _iaOnVillageSelect() {
  const val = document.getElementById('ia-village-select')?.value;
  if (val) {
    const inp = document.getElementById('ia-village-inp');
    if (inp) inp.value = val;
  }
}

function _iaDetectGPS() {
  if (!navigator.geolocation) { alert('Geolocation is not supported by your browser.'); return; }
  const btn = document.getElementById('ia-gps-btn');
  const status = document.getElementById('ia-gps-status');
  if (btn) { btn.disabled = true; btn.innerHTML = `<span style="opacity:.6;">Detecting…</span>`; }
  if (status) status.textContent = 'Requesting GPS…';

  navigator.geolocation.getCurrentPosition(
    async pos => {
      const lat = pos.coords.latitude.toFixed(6);
      const lng = pos.coords.longitude.toFixed(6);
      const coords = `${lat}, ${lng}`;

      // Fill GPS field
      const gpsInp = document.getElementById('ia-prof-gps');
      if (gpsInp) { gpsInp.value = coords; gpsInp.style.borderColor = 'var(--ia-accent)'; }

      // Update map
      _iaRenderOSMMap(lat, lng);

      // Confirm GPS success immediately — visible even if geocoding fails
      if (status) status.innerHTML = `<span style="color:var(--ia-green);">✓ GPS detected (${lat}, ${lng})</span>`;

      // Reverse geocode via Nominatim
      if (status) status.innerHTML += `<span style="color:var(--ia-muted);"> · Getting address…</span>`;
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`);
        const data = await res.json();
        const addr = data.address || {};
        console.log('OSM address:', addr); // Debug: see how Kenya locations are structured

        // Fill location fields (only if currently empty — let admin override)
        const countyInp    = document.getElementById('ia-prof-county');
        const subcountyInp = document.getElementById('ia-prof-subcounty');

        if (countyInp && !countyInp.value) {
          const detected = addr.county || addr.state_district || addr.state || '';
          // Try to match to known county
          const matched = _KE_DATA.counties.find(c => c.toLowerCase() === detected.toLowerCase())
            || _KE_DATA.counties.find(c => detected.toLowerCase().includes(c.toLowerCase()));
          if (matched) {
            countyInp.value = matched;
            countyInp.style.borderColor = 'var(--ia-accent)';
            _iaOnCountyChange();
          }
        }
        if (subcountyInp && !subcountyInp.value) {
          // Kenya: subcounty is typically in addr.county (not suburb)
          subcountyInp.value = addr.county || addr.state_district || addr.city_district || '';
          if (subcountyInp.value) subcountyInp.style.borderColor = 'var(--ia-accent)';
        }

        // Village from GPS → add to list (not overwrite)
        const detectedVillage = addr.village || addr.hamlet || addr.suburb || addr.neighbourhood || addr.town || '';
        if (detectedVillage) _iaVillageAddFromGPS(detectedVillage);

        if (status) status.innerHTML = `<span style="color:var(--ia-green);">✓ Location detected — edit fields above if needed</span>`;
      } catch(e) {
        if (status) status.innerHTML = `<span style="color:var(--ia-amber);">GPS set · Could not auto-fill address (edit manually)</span>`;
      }

      if (btn) { btn.disabled = false; btn.innerHTML = `${_iaIcon('pin',13,'#fff')} Detect My Location`; }
    },
    err => {
      if (status) status.innerHTML = `<span style="color:var(--ia-red);">Could not detect location — please enter manually</span>`;
      if (btn) { btn.disabled = false; btn.innerHTML = `${_iaIcon('pin',13,'#fff')} Detect My Location`; }
    },
    { enableHighAccuracy: true, timeout: 20000 }
  );
}

function _iaRenderOSMMap(lat, lng) {
  const wrap = document.getElementById('ia-osm-map-wrap');
  if (!wrap) return;
  const latF = parseFloat(lat), lngF = parseFloat(lng);
  const d = 0.012;
  wrap.innerHTML = `<iframe id="ia-osm-frame"
    src="https://www.openstreetmap.org/export/embed.html?bbox=${lngF-d},${latF-d},${lngF+d},${latF+d}&marker=${latF},${lngF}"
    style="width:100%;height:100%;border:none;" loading="lazy"></iframe>`;
}

function _iaUpdateMapFromInput() {
  const val = (document.getElementById('ia-prof-gps')?.value || '').trim();
  const parts = val.split(',').map(s => parseFloat(s.trim()));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    _iaRenderOSMMap(parts[0], parts[1]);
  }
}

function _iaOpenOSM() {
  const val = (document.getElementById('ia-prof-gps')?.value || '').trim();
  const parts = val.split(',').map(s => parseFloat(s.trim()));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    window.open(`https://www.openstreetmap.org/?mlat=${parts[0]}&mlon=${parts[1]}#map=15/${parts[0]}/${parts[1]}`, '_blank');
  } else {
    window.open('https://www.openstreetmap.org', '_blank');
  }
}

function _escHtml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─── TAB: Settings ────────────────────────────────────────────────────────────

function _iaTabSettings(el) {
  el.innerHTML = `
    <div class="ia-anim">

      <!-- Institution Details -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon green">${_iaIcon('institution',16,'var(--ia-accent)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Institution Details</div>
            <div class="ia-collapse-hdr-sub">Current institution info</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          <div class="ia-table-wrap">
            <table class="ia-table">
              <thead><tr><th>Field</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Institution Name</td><td style="font-weight:700;">${_iaInstName}</td></tr>
                <tr><td>Institution ID</td><td style="font-size:.72rem;color:var(--ia-muted);word-break:break-all;">${_iaInstId||'—'}</td></tr>
                <tr><td>Total Surveys</td><td style="font-weight:700;">${_iaData.records.length}</td></tr>
                <tr><td>Total Students</td><td style="font-weight:700;">${_iaData.students.length}</td></tr>
                <tr><td>Data Quality</td><td style="font-weight:700;">${window.iaMetrics?.data_quality?.overall_quality_score??'—'}%</td></tr>
              </tbody>
            </table>
          </div>
          <button onclick="_iaSwitchView('profile')"
            style="width:100%;margin-top:8px;padding:11px;background:rgba(14,165,114,.1);color:var(--ia-accent2);border:1px solid rgba(14,165,114,.2);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.83rem;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px;">
            ${_iaIcon('person',15,'var(--ia-accent)')} Edit Institution Profile
          </button>
        </div>
      </div>

      <!-- Admin Actions -->
      <div class="ia-collapse" style="margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon blue">${_iaIcon('settings',16,'var(--ia-blue)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Admin Actions</div>
            <div class="ia-collapse-hdr-sub">Theme, data refresh &amp; exports</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open" style="display:flex;flex-direction:column;gap:8px;">
          <button onclick="_iaToggleTheme()"
            style="width:100%;padding:12px;background:var(--ia-generic-btn-bg);color:var(--ia-text);border:1px solid var(--ia-border);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.83rem;font-weight:600;display:flex;align-items:center;gap:10px;">
            <span style="display:flex;">${_iaIcon('settings',16,'var(--ia-muted)')}</span> Toggle Light / Dark Mode
          </button>
          <button onclick="_iaExportCSV(_iaData.records,'${_iaInstName.replace(/'/g,"\\'")}' )"
            style="width:100%;padding:12px;background:rgba(14,165,114,.12);color:var(--ia-accent2);border:1px solid rgba(14,165,114,.2);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.83rem;font-weight:700;display:flex;align-items:center;gap:10px;">
            ${_iaIcon('download',16,'var(--ia-accent)')} Export All Data (CSV)
          </button>
          <button onclick="_iaLoadData('${_iaInstId||''}').then(_iaRenderHomePage)"
            style="width:100%;padding:12px;background:var(--ia-generic-btn-bg);color:var(--ia-text);border:1px solid var(--ia-border);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.83rem;font-weight:600;display:flex;align-items:center;gap:10px;">
            ${_iaIcon('refresh',16,'var(--ia-amber)')} Refresh Data
          </button>
        </div>
      </div>

      <!-- Danger Zone (institution-scoped only) -->
      <div class="ia-danger-section">
        <div class="ia-danger-hdr">
          <div class="ia-danger-hdr-title">Data Management</div>
          <div class="ia-danger-hdr-sub">Delete records or users for ${_iaInstName} only. Always export first.</div>
        </div>
        <div class="ia-danger-body">
          <div class="ia-danger-notice">These actions are permanent and cannot be undone. They affect only ${_iaInstName} data. Export your data before deleting.</div>

          <button id="ia-del-records-btn" class="ia-danger-btn">
            ${_iaIcon('trash',15,'#fca5a5')} Delete All Survey Records
            <span class="ia-danger-btn-sub">${_iaData.records.length} records for this institution · keeps user accounts</span>
          </button>

          <button id="ia-del-enumerators-btn" class="ia-danger-btn">
            ${_iaIcon('trash',15,'#fca5a5')} Delete All Enumerators
            <span class="ia-danger-btn-sub">${_iaData.students.filter(s=>s.role!=='institution_admin').length} enumerator accounts</span>
          </button>

          <button id="ia-del-all-btn" class="ia-danger-btn full">
            ${_iaIcon('warning',15,'#fff')} Reset Institution Data
            <span class="ia-danger-btn-sub">Records + enumerators for ${_iaInstName} only</span>
          </button>
        </div>
      </div>

      <!-- Account -->
      <div class="ia-collapse" style="margin-top:10px;margin-bottom:10px;">
        <button class="ia-collapse-hdr" onclick="_iaToggleCollapse(this)">
          <div class="ia-collapse-hdr-icon" style="background:rgba(239,68,68,.1);">${_iaIcon('signout',16,'var(--ia-red)')}</div>
          <div class="ia-collapse-hdr-text">
            <div class="ia-collapse-hdr-title">Account</div>
            <div class="ia-collapse-hdr-sub">Sign out of institution admin</div>
          </div>
          <div class="ia-collapse-hdr-arrow open">${_iaIcon('chevron_right',16)}</div>
        </button>
        <div class="ia-collapse-body open">
          <button id="ia-settings-signout"
            style="width:100%;padding:12px;background:rgba(239,68,68,.08);color:#fca5a5;border:1px solid rgba(239,68,68,.2);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.83rem;font-weight:700;display:flex;align-items:center;justify-content:center;gap:10px;">
            ${_iaIcon('signout',15,'#fca5a5')} Sign Out
          </button>
        </div>
      </div>
    </div>`;

  document.getElementById('ia-settings-signout')?.addEventListener('click', () => {
    if (!confirm('Sign out and return to the login screen?\n\nLocal records are kept safely.')) return;
    ['chsa_auth','chsa_user_name','chsa_is_admin_bypass','chsa_is_inst_admin'].forEach(k => localStorage.removeItem(k));
    document.getElementById('inst-admin-dashboard')?.remove();
    if (window.HS?.Auth) window.HS.Auth.clearToken();
    if (typeof authClearSession === 'function') authClearSession();
    location.reload();
  });

  document.getElementById('ia-del-records-btn')?.addEventListener('click', async () => {
    if (!confirm(`Delete ALL ${_iaData.records.length} survey records for ${_iaInstName}?\n\nUser accounts will NOT be deleted.\n\nThis cannot be undone. Have you exported your data?`)) return;
    const c = prompt('Type DELETE to confirm:');
    if (c !== 'DELETE') { alert('Cancelled.'); return; }
    let d=0, f=0;
    for (const r of _iaData.records) { try { await window.HS.HSAdmin.deleteRecord(r.id); d++; } catch { f++; } }
    alert(`Done.\n${d} records deleted${f?`\n${f} failed`:''}`);
    await _iaLoadData(_iaInstId); _iaSwitchView('settings');
  });

  document.getElementById('ia-del-enumerators-btn')?.addEventListener('click', async () => {
    const enums = _iaData.students.filter(s => s.role !== 'institution_admin');
    if (!confirm(`Delete ALL ${enums.length} enumerator accounts for ${_iaInstName}?\n\nThis cannot be undone.`)) return;
    const c = prompt('Type DELETE to confirm:');
    if (c !== 'DELETE') { alert('Cancelled.'); return; }
    let d=0, f=0;
    for (const s of enums) { try { await window.HS.HSAdmin.deleteStudent(s.reg_number); d++; } catch { f++; } }
    alert(`Done.\n${d} enumerators deleted${f?`\n${f} failed`:''}`);
    await _iaLoadData(_iaInstId); _iaSwitchView('settings');
  });

  document.getElementById('ia-del-all-btn')?.addEventListener('click', async () => {
    if (!confirm(`RESET ${_iaInstName}\n\nThis will permanently delete:\n- All ${_iaData.records.length} survey records\n- All ${_iaData.students.filter(s=>s.role!=='institution_admin').length} enumerator accounts\n\nInstitution admin accounts will be kept.\n\nHave you exported your data?`)) return;
    const c = prompt('Type RESET to confirm:');
    if (c !== 'RESET') { alert('Cancelled.'); return; }
    let rd=0, rf=0, ud=0, uf=0;
    for (const r of _iaData.records) { try { await window.HS.HSAdmin.deleteRecord(r.id); rd++; } catch { rf++; } }
    const enums = _iaData.students.filter(s => s.role !== 'institution_admin');
    for (const s of enums) { try { await window.HS.HSAdmin.deleteStudent(s.reg_number); ud++; } catch { uf++; } }
    alert(`Institution reset complete.\n${rd} records deleted${rf?` (${rf} failed)`:''}\n${ud} enumerators deleted${uf?` (${uf} failed)`:''}`);
    await _iaLoadData(_iaInstId); _iaSwitchView('settings');
  });
}

// ─── INSTITUTION REPORT (print window) ────────────────────────────────────────

function _iaGenerateInstitutionReport() {
  console.log('[INST-RPT] called | records:', _iaData.records.length, '| iaMetrics:', !!window.iaMetrics, '| computeSurveyMetrics:', typeof computeSurveyMetrics);
  // Auto-compute metrics if Analytics tab was never opened
  if (!window.iaMetrics && typeof computeSurveyMetrics === 'function' && _iaData.records.length) {
    console.log('[INST-RPT] Auto-computing metrics…');
    window.iaMetrics = computeSurveyMetrics(_iaData.records);
    console.log('[INST-RPT] After compute — iaMetrics:', window.iaMetrics);
  }
  const m = window.iaMetrics;
  if (!m) {
    console.error('[INST-RPT] Bailing — no metrics. records:', _iaData.records.length, '| computeSurveyMetrics available:', typeof computeSurveyMetrics);
    alert('No survey data found — please refresh records first.'); return;
  }
  console.log('[INST-RPT] Metrics OK — summary:', m.summary, '| risk_profiles:', (m.risk_profiles||[]).length);

  const inf  = m.infrastructure  || {};
  const hlt  = m.health          || {};
  const nut  = m.nutrition       || {};
  const mat  = m.maternal_child  || {};
  const env  = m.environmental   || {};
  const dq   = m.data_quality    || {};
  const recs = _iaData.records;
  const now  = new Date().toLocaleDateString('en-KE',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

  const riskH = (m.risk_profiles||[]).filter(r=>r.level==='HIGH');
  const riskM = (m.risk_profiles||[]).filter(r=>r.level==='MODERATE');
  const riskL = (m.risk_profiles||[]).filter(r=>r.level==='LOW');
  const recs_today = recs.filter(r=>(r.interview_date||'').startsWith(new Date().toISOString().split('T')[0])).length;

  // ── helpers ──────────────────────────────────────────────────────────────
  const stat = (lbl, pct) => {
    const v = pct ?? '—';
    const cls = typeof pct === 'number' ? (pct>=80?'ok':pct>=60?'warn':'bad') : '';
    const status = typeof pct === 'number' ? (pct>=80?'Good':pct>=60?'Fair':'Attention Needed') : '—';
    return `<tr><td>${lbl}</td><td>${v}%</td><td class="${cls}">${status}</td></tr>`;
  };
  const bar = (pct, col) => {
    const p = Math.min(pct||0, 100);
    const c = col || (p>=80?'#1e8449':p>=60?'#e67e22':'#c0392b');
    return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
      <div style="flex:1;height:8px;background:#e8e8e8;border-radius:99px;overflow:hidden">
        <div style="width:${p}%;height:100%;background:${c};border-radius:99px;-webkit-print-color-adjust:exact;print-color-adjust:exact"></div>
      </div>
      <span style="font-size:.72rem;font-weight:800;color:${c};min-width:36px">${p}%</span>
    </div>`;
  };
  const breakdown = (obj, total) => {
    if (!obj || !Object.keys(obj).length) return '<p style="color:#aaa;font-size:.78rem;">No data</p>';
    return Object.entries(obj).sort((a,b)=>b[1]-a[1]).map(([k,v])=>
      `<div style="margin-bottom:5px"><div style="display:flex;justify-content:space-between;font-size:.75rem;margin-bottom:2px"><span>${k||'Unknown'}</span><span style="font-weight:700">${v} (${total?Math.round(v/total*100):0}%)</span></div>${bar(total?Math.round(v/total*100):0)}</div>`
    ).join('');
  };

  // ── pull profile data (already cached) ──────────────────────────────────
  const _prof = (typeof _instProfileCache !== 'undefined' && _instProfileCache) || {};
  const _profLoc = [
    _prof.county      ? `County: ${_prof.county}` : '',
    _prof.sub_county  ? `Sub-County: ${_prof.sub_county}` : '',
    _prof.ward        ? `Ward: ${_prof.ward}` : '',
  ].filter(Boolean).join(' &nbsp;·&nbsp; ');
  const _villageStr = Array.isArray(_prof.village_list) ? _prof.village_list.join(', ') : (_prof.village_list || '');

  // ── by-interviewer table rows from processor ──────────────────────────────
  const ivRows = (m.by_interviewer || []).map((iv, idx) => `
    <tr>
      <td>${idx+1}</td><td style="font-weight:700">${iv.interviewer||'—'}</td>
      <td style="text-align:center">${iv.count||0}</td>
      <td style="text-align:center" class="${(iv.pct_pit_latrine||0)>=80?'ok':'bad'}">${iv.pct_pit_latrine??'—'}%</td>
      <td style="text-align:center" class="${(iv.pct_water_treated||0)>=80?'ok':'bad'}">${iv.pct_water_treated??'—'}%</td>
      <td style="text-align:center" class="${(iv.pct_hiv_aware||0)>=90?'ok':'bad'}">${iv.pct_hiv_aware??'—'}%</td>
      <td style="text-align:center" class="${(iv.pct_immunised||0)>=80?'ok':'bad'}">${iv.pct_immunised??'—'}%</td>
      <td style="text-align:center;color:${(iv.flags||0)>0?'#c0392b':'#1e8449'};font-weight:700">${iv.flags||0}</td>
    </tr>`).join('');

  // ── by-location table rows ────────────────────────────────────────────────
  const locRows = (m.by_location || []).map((loc, idx) => `
    <tr>
      <td>${idx+1}</td><td style="font-weight:700">${loc.location||'—'}</td>
      <td style="text-align:center">${loc.count||0}</td>
      <td style="text-align:center" class="${(loc.pct_pit_latrine||0)>=80?'ok':'bad'}">${loc.pct_pit_latrine??'—'}%</td>
      <td style="text-align:center" class="${(loc.pct_water_treated||0)>=80?'ok':'bad'}">${loc.pct_water_treated??'—'}%</td>
      <td style="text-align:center" class="${(loc.pct_hiv_aware||0)>=90?'ok':'bad'}">${loc.pct_hiv_aware??'—'}%</td>
      <td style="text-align:center" class="${(loc.avg_risk_score||0)>=40?'bad':(loc.avg_risk_score||0)>=20?'warn':'ok'}">${loc.avg_risk_score??'—'}</td>
    </tr>`).join('');

  const _instHtmlOpen = `<!DOCTYPE html><html><head><title>${_iaInstName} — Institution Report</title>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&family=DM+Serif+Display:wght@400;700&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'DM Sans',sans-serif;background:#e8f5ee;color:#111;padding:20px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .page{width:8.5in;background:#fff;margin:0 auto 20px;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.15);}
    /* ── COVER PAGE ── */
    .cover-page{width:8.5in;min-height:11in;background:#fff;margin:0 auto 20px;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.15);display:flex;flex-direction:column;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .cov-band{height:10px;background:linear-gradient(90deg,#0a3d1f,#1a5c35,#0e3d22);flex-shrink:0;}
    .cov-body{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 80px 30px;text-align:center;}
    .cov-banner{width:100%;max-width:420px;height:120px;border-radius:10px;overflow:hidden;margin-bottom:18px;border:1.5px solid #cce0d4;object-fit:cover;}
    .cov-logo{width:70px;height:70px;border-radius:14px;overflow:hidden;margin:0 auto 14px;border:2px solid #cce0d4;background:#f4f8f5;display:flex;align-items:center;justify-content:center;}
    .cov-logo img{width:100%;height:100%;object-fit:contain;}
    .cov-emblem{width:64px;height:64px;border-radius:50%;background:linear-gradient(145deg,#1a5c35,#1a4060);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .cov-min{font-size:7pt;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b8a74;margin-bottom:4pt;}
    .cov-inst{font-size:14pt;font-weight:800;color:#1a5c35;margin-bottom:10pt;}
    .cov-rule{width:40pt;height:2.5pt;background:linear-gradient(90deg,#1a5c35,#1a4060);margin:0 auto 10pt;border-radius:99pt;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .cov-rtype{font-size:7pt;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#aaa;margin-bottom:8pt;}
    .cov-title{font-size:22pt;font-weight:800;color:#0f1f18;line-height:1.15;margin-bottom:5pt;}
    .cov-sub{font-size:10pt;color:#3a5a4a;margin-bottom:18pt;}
    .cov-meta-box{background:#f4f8f5;border:1px solid #cce0d4;border-radius:6pt;padding:11pt 16pt;width:100%;max-width:420px;text-align:left;margin-bottom:12pt;}
    .cov-row{display:flex;justify-content:space-between;padding:3pt 0;border-bottom:1px solid #e0ede5;font-size:7.5pt;}
    .cov-row:last-child{border-bottom:none;}
    .cov-k{color:#6b8a74;font-weight:700;flex-shrink:0;margin-right:8pt;}
    .cov-v{color:#1a2b22;font-weight:600;text-align:right;word-break:break-word;max-width:60%;}
    .cov-note{font-size:6.5pt;color:#aaa;max-width:420px;line-height:1.6;margin-bottom:6pt;}
    .cov-bot{height:48px;background:#f4f8f5;border-top:2px solid #1a5c35;display:flex;align-items:center;justify-content:space-between;padding:0 40px;font-size:6pt;color:#6b8a74;flex-shrink:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    /* ── REPORT PAGES ── */
    .page-header{background:linear-gradient(135deg,#0e3d22,#054520);color:#fff;padding:28px 32px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .page-title{font-family:'DM Serif Display',serif;font-size:1.6rem;margin-bottom:4px;}
    .page-sub{font-size:.75rem;opacity:.7;letter-spacing:.3px;}
    .page-body{padding:24px 32px;}
    h2{font-size:.82rem;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:#0e3d22;border-left:3px solid #3db86a;padding-left:10px;margin:22px 0 12px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    h2:first-child{margin-top:0;}
    table{width:100%;border-collapse:collapse;margin-bottom:14px;font-size:.8rem;}
    td,th{border:1px solid #e0e0e0;padding:7px 10px;vertical-align:top;}
    th{background:#0e3d22;color:#fff;font-weight:700;font-size:.68rem;text-transform:uppercase;letter-spacing:.4px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    tr:nth-child(even) td{background:#f8fdf8;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .ok{color:#1e8449;font-weight:700;}.warn{color:#e67e22;font-weight:700;}.bad{color:#c0392b;font-weight:700;}
    .kpi-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px;}
    .kpi{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:13px;text-align:center;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .kpi-n{font-size:1.5rem;font-weight:800;color:#0e3d22;}
    .kpi-l{font-size:.6rem;color:#6b7280;text-transform:uppercase;letter-spacing:.4px;margin-top:3px;}
    .kpi.warn{background:#fef5e7;border-color:#fcd34d;}.kpi.warn .kpi-n{color:#b45309;}
    .kpi.bad{background:#fdecea;border-color:#fca5a5;}.kpi.bad .kpi-n{color:#c0392b;}
    .rec{border-radius:8px;padding:10px 13px;margin-bottom:8px;font-size:.8rem;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .rec-critical{background:#fdecea;border-left:4px solid #c0392b;}
    .rec-high{background:#fef5e7;border-left:4px solid #e67e22;}
    .rec-medium{background:#e4f5ec;border-left:4px solid #3db86a;}
    .rec-label{font-weight:800;margin-bottom:3px;font-size:.75rem;}
    .grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:4px;}
    .box{background:#f8fdf8;border:1px solid #d1fae5;border-radius:8px;padding:14px;}
    .box-title{font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.5px;color:#065f46;margin-bottom:10px;}
    .risk-badge{display:inline-block;padding:2px 8px;border-radius:99px;font-size:.65rem;font-weight:800;margin-right:4px;}
    .risk-HIGH{background:#fdecea;color:#c0392b;}.risk-MODERATE{background:#fef5e7;color:#b45309;}.risk-LOW{background:#e4f5ec;color:#065f46;}
    .dq-bar{margin-bottom:6px;}
    .dq-bar-label{display:flex;justify-content:space-between;font-size:.72rem;margin-bottom:2px;}
    @media print{
      *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;}
      body{background:#fff!important;padding:0!important;}
      .cover-page,.page{box-shadow:none!important;border-radius:0!important;width:100%!important;page-break-after:always;}
      .cover-page:last-child,.page:last-child{page-break-after:auto;}
      .no-print{display:none!important;}
    }
    @page{size:A4 portrait;margin:12mm 14mm;}
  </style></head><body>

  <!-- ═══ COVER PAGE ═══ -->
  <div class="cover-page">
    <div class="cov-band"></div>
    <div class="cov-body">
      ${_prof.banner_url||_prof.group_photo_url
        ? `<img class="cov-banner" src="${_prof.banner_url||_prof.group_photo_url}" crossorigin="anonymous" alt="Institution banner"/>`
        : ''}
      ${_prof.logo_url
        ? `<div class="cov-logo"><img src="${_prof.logo_url}" crossorigin="anonymous" alt="Logo"/></div>`
        : `<div class="cov-emblem"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 10L24 38M10 24L38 24" stroke="#fff" stroke-width="5" stroke-linecap="round"/><circle cx="24" cy="24" r="14" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="2"/></svg></div>`}
      <div class="cov-min">Republic of Kenya &nbsp;·&nbsp; Ministry of Health</div>
      <div class="cov-inst">${_iaInstName}</div>
      <div class="cov-rule"></div>
      <div class="cov-rtype">OFFICIAL INSTITUTION REPORT</div>
      <div class="cov-title">Community Health<br>Situation Analysis</div>
      <div class="cov-sub">Aggregated Survey Report &nbsp;·&nbsp; ${recs.length} Households</div>
      <div class="cov-meta-box">
        ${_prof.county        ? `<div class="cov-row"><span class="cov-k">County</span><span class="cov-v">${_prof.county}</span></div>` : ''}
        ${_prof.sub_county    ? `<div class="cov-row"><span class="cov-k">Sub-County</span><span class="cov-v">${_prof.sub_county}</span></div>` : ''}
        ${_prof.ward          ? `<div class="cov-row"><span class="cov-k">Ward</span><span class="cov-v">${_prof.ward}</span></div>` : ''}
        ${_villageStr         ? `<div class="cov-row"><span class="cov-k">Villages / Areas</span><span class="cov-v">${_villageStr}</span></div>` : ''}
        <div class="cov-row"><span class="cov-k">Total Surveys</span><span class="cov-v">${recs.length}</span></div>
        <div class="cov-row"><span class="cov-k">Population Surveyed</span><span class="cov-v">${m.summary?.total_population||0}</span></div>
        <div class="cov-row"><span class="cov-k">Interviewers</span><span class="cov-v">${m.summary?.total_interviewers||0}</span></div>
        <div class="cov-row"><span class="cov-k">Date Generated</span><span class="cov-v">${now}</span></div>
      </div>
      <p class="cov-note">Produced under the Community Health Situation Analysis programme at ${_iaInstName}.<br>CONFIDENTIAL — For Official Use Only</p>
    </div>
    <div class="cov-bot">
      <strong style="color:#1a5c35">Medical Survey System (MSS) v3.1</strong>
      <span>Built by HazzinBR &nbsp;·&nbsp; ${_iaInstName}</span>
      <span>Confidential — For Official Use Only</span>
    </div>
  </div>

  <div class="page">
    <div class="page-header">
      <div class="page-title">${_iaInstName}</div>
      <div class="page-sub">Institution Health Survey Report &nbsp;·&nbsp; Generated ${now} &nbsp;·&nbsp; ${recs.length} surveys &nbsp;·&nbsp; ${m.summary?.total_population||0} population surveyed &nbsp;·&nbsp; ${m.summary?.total_locations||0} location(s)${_profLoc ? ' &nbsp;·&nbsp; '+_profLoc : ''}</div>
    </div>
    <div class="page-body">

      <!-- KPIs -->
      <div class="kpi-row">
        <div class="kpi"><div class="kpi-n">${recs.length}</div><div class="kpi-l">Total Surveys</div></div>
        <div class="kpi"><div class="kpi-n">${m.summary?.total_population||0}</div><div class="kpi-l">Population Surveyed</div></div>
        <div class="kpi ${(dq.overall_quality_score||0)<70?'warn':''}"><div class="kpi-n">${dq.overall_quality_score??'—'}%</div><div class="kpi-l">Data Quality</div></div>
        <div class="kpi ${riskH.length>0?'bad':''}"><div class="kpi-n">${riskH.length}</div><div class="kpi-l">High Risk HHs</div></div>
        <div class="kpi"><div class="kpi-n">${m.summary?.avg_hh_size||'—'}</div><div class="kpi-l">Avg. HH Size</div></div>
        <div class="kpi"><div class="kpi-n">${recs_today}</div><div class="kpi-l">Submitted Today</div></div>
        <div class="kpi ${(m.recommendations||[]).filter(r=>r.priority==='CRITICAL'||r.priority==='HIGH').length>0?'warn':''}"><div class="kpi-n">${(m.recommendations||[]).filter(r=>r.priority==='CRITICAL'||r.priority==='HIGH').length}</div><div class="kpi-l">Action Items</div></div>
        <div class="kpi"><div class="kpi-n">${m.summary?.total_locations||0}</div><div class="kpi-l">Locations</div></div>
      </div>

      <!-- Enumerator performance -->
      <h2>Enumerator Performance</h2>
      ${ivRows ? `<table><thead><tr><th>#</th><th>Enumerator</th><th>Surveys</th><th>Latrine %</th><th>Water %</th><th>HIV Aware %</th><th>Immunised %</th><th>Flags</th></tr></thead><tbody>${ivRows}</tbody></table>`
        : `<table><thead><tr><th>#</th><th>Enumerator</th><th>Surveys</th><th>% of Total</th></tr></thead><tbody>
        ${Object.entries((() => { const e={}; recs.forEach(r=>{const iv=r.interviewer_name||r.interviewer||'Unknown';e[iv]=(e[iv]||0)+1;}); return e; })()).sort((a,b)=>b[1]-a[1]).map(([name,count],idx)=>
          `<tr><td>${idx+1}</td><td>${name}</td><td style="font-weight:700">${count}</td><td>${recs.length?Math.round(count/recs.length*100):0}%</td></tr>`).join('')}
        </tbody></table>`}

      <!-- Location breakdown -->
      ${locRows ? `<h2>Performance by Location</h2>
      <table><thead><tr><th>#</th><th>Location</th><th>Surveys</th><th>Latrine %</th><th>Water %</th><th>HIV Aware %</th><th>Avg Risk Score</th></tr></thead><tbody>${locRows}</tbody></table>` : ''}

      <!-- Infrastructure — full coverage -->
      <h2>Infrastructure Coverage</h2>
      <div class="grid2">
        <div class="box">
          <div class="box-title">Core WASH Indicators</div>
          ${[['Pit Latrine Access',inf.pct_pit_latrine],['Water Treated',inf.pct_water_treated],['Improved Water Source',inf.pct_improved_water],['Proper Waste Disposal',inf.pct_proper_waste]].map(([l,p])=>`
            <div class="dq-bar"><div class="dq-bar-label"><span>${l}</span><span class="${typeof p==='number'?(p>=80?'ok':p>=60?'warn':'bad'):''}">${p??'—'}%</span></div>
            <div style="height:7px;background:#e8e8e8;border-radius:99px;overflow:hidden"><div style="width:${Math.min(p||0,100)}%;height:100%;background:${(p||0)>=80?'#1e8449':(p||0)>=60?'#e67e22':'#c0392b'};border-radius:99px;-webkit-print-color-adjust:exact;print-color-adjust:exact"></div></div>
            </div>`).join('')}
        </div>
        <div class="box">
          <div class="box-title">Housing & Energy</div>
          ${[['Permanent Houses',inf.pct_permanent_house],['Cemented Floors',inf.pct_cemented_floor],['Iron Roof',inf.pct_iron_roof],['Electricity Access',inf.pct_electricity],['Clean Fuel',inf.pct_clean_fuel]].map(([l,p])=>`
            <div class="dq-bar"><div class="dq-bar-label"><span>${l}</span><span class="${typeof p==='number'?(p>=80?'ok':p>=60?'warn':'bad'):''}">${p??'—'}%</span></div>
            <div style="height:7px;background:#e8e8e8;border-radius:99px;overflow:hidden"><div style="width:${Math.min(p||0,100)}%;height:100%;background:${(p||0)>=80?'#1e8449':(p||0)>=60?'#e67e22':'#c0392b'};border-radius:99px;-webkit-print-color-adjust:exact;print-color-adjust:exact"></div></div>
            </div>`).join('')}
        </div>
      </div>
      <div class="grid2" style="margin-top:12px">
        <div class="box"><div class="box-title">House Type Breakdown</div>${breakdown(inf.house_type_breakdown, recs.length)}</div>
        <div class="box"><div class="box-title">Water Source Breakdown</div>${breakdown(inf.water_source_breakdown, recs.length)}</div>
      </div>
      <div class="grid2" style="margin-top:12px">
        <div class="box"><div class="box-title">Cooking Fuel Breakdown</div>${breakdown(inf.fuel_type_breakdown, recs.length)}</div>
        <div class="box"><div class="box-title">Lighting Breakdown</div>${breakdown(inf.lighting_breakdown, recs.length)}</div>
      </div>

      <!-- Health Indicators — full -->
      <h2>Health Indicators</h2>
      <div class="grid2">
        <div>
          <table><thead><tr><th>Indicator</th><th>Value</th><th>Status</th></tr></thead><tbody>
            ${stat('HIV Awareness', hlt.pct_hiv_aware)}
            ${stat('HIV Testing', hlt.pct_hiv_tested)}
            ${stat('Facility Consultation', hlt.pct_consult_facility)}
            ${stat('Households with Illness', hlt.pct_with_illness)}
            ${stat('Chronic Illness', hlt.pct_chronic_illness)}
          </tbody></table>
        </div>
        <div>
          <table><thead><tr><th>Indicator</th><th>Value</th><th>Status</th></tr></thead><tbody>
            ${stat('Children Immunised', mat.pct_immunised)}
            ${stat('Antenatal Care (4+ visits)', mat.pct_antenatal_care)}
            ${stat('Facility Delivery', mat.pct_facility_delivery)}
            <tr><td>Total Deaths (5 yr)</td><td colspan="2" style="font-weight:700;color:${(hlt.total_deaths_5yr||0)>0?'#c0392b':'#1e8449'}">${hlt.total_deaths_5yr||0} deaths</td></tr>
            <tr><td>Children Under 5 (total)</td><td colspan="2" style="font-weight:700">${hlt.total_children_u5||mat.total_children_u5||0}</td></tr>
          </tbody></table>
        </div>
      </div>

      <!-- Nutrition -->
      <h2>Nutrition &amp; Food Security</h2>
      <div class="grid2">
        <table><thead><tr><th>Indicator</th><th>Value</th><th>Status</th></tr></thead><tbody>
          ${stat('Food Sufficiency', nut.pct_food_sufficient)}
          ${stat('Households Skipping Meals', nut.pct_skipping_meals)}
          <tr><td>Average Meals Per Day</td><td colspan="2" style="font-weight:700">${nut.avg_meals_per_day||'—'}</td></tr>
        </tbody></table>
        <div class="box"><div class="box-title">Meals Distribution</div>${breakdown(nut.meals_distribution, recs.length)}</div>
      </div>

      <!-- Environmental -->
      <h2>Environmental &amp; Vector Control</h2>
      <table><thead><tr><th>Indicator</th><th>Value</th><th>Status</th></tr></thead><tbody>
        ${stat('Mosquito Net Ownership', env.pct_mosquito_net)}
        ${stat('Net Used Last Night', env.pct_net_in_use)}
        ${stat('Rodent Problem', env.pct_rodent_problem)}
        ${stat('Drainage Issues', env.pct_drainage_issues)}
      </tbody></table>

      <!-- Top illnesses -->
      <h2>Disease Burden — Top Illnesses</h2>
      ${(hlt.top_illnesses||[]).length
        ? `<table><thead><tr><th>Illness / Condition</th><th>Cases</th><th>% of Households</th><th>Rank</th></tr></thead><tbody>
          ${(hlt.top_illnesses||[]).map((ill,i)=>`<tr><td style="font-weight:600">${ill.name}</td><td>${ill.count}</td><td>${ill.pct}%</td><td>#${i+1}</td></tr>`).join('')}
          </tbody></table>`
        : '<p style="color:#888;font-size:.82rem;margin-bottom:14px;">No illness data recorded.</p>'}

      <!-- Risk profiles -->
      <h2>Risk Profile Summary</h2>
      <div class="kpi-row" style="grid-template-columns:repeat(4,1fr);margin-bottom:14px">
        <div class="kpi bad"><div class="kpi-n">${riskH.length}</div><div class="kpi-l">High Risk</div></div>
        <div class="kpi warn"><div class="kpi-n">${riskM.length}</div><div class="kpi-l">Moderate Risk</div></div>
        <div class="kpi"><div class="kpi-n">${riskL.length}</div><div class="kpi-l">Low Risk</div></div>
        <div class="kpi"><div class="kpi-n">${recs.length - riskH.length - riskM.length - riskL.length}</div><div class="kpi-l">No Risk Flags</div></div>
      </div>
      ${riskH.length ? `
      <table><thead><tr><th>Location</th><th>Interviewer</th><th>Date</th><th>Score</th><th>Risk Factors</th></tr></thead><tbody>
      ${riskH.map(r=>`<tr>
        <td>${r.location||'—'}</td><td>${r.interviewer||'—'}</td><td>${r.date||'—'}</td>
        <td style="font-weight:800;color:#c0392b;">${r.score}</td>
        <td style="font-size:.75rem;">${(r.factors||[]).join(' · ')||'—'}</td>
      </tr>`).join('')}
      </tbody></table>` : ''}
      ${riskM.length ? `
      <p style="font-size:.75rem;font-weight:700;color:#b45309;margin-bottom:6px;">Moderate Risk (${riskM.length} households):</p>
      <table><thead><tr><th>Location</th><th>Score</th><th>Factors</th></tr></thead><tbody>
      ${riskM.map(r=>`<tr><td>${r.location||'—'}</td><td style="font-weight:700;color:#b45309">${r.score}</td><td style="font-size:.75rem">${(r.factors||[]).join(' · ')||'—'}</td></tr>`).join('')}
      </tbody></table>` : ''}

      <!-- Data quality -->
      <h2>Data Quality</h2>
      <div class="grid2">
        <div class="box">
          <div class="box-title">Quality Scores</div>
          <div class="dq-bar"><div class="dq-bar-label"><span>Overall Quality</span><span class="${(dq.overall_quality_score||0)>=90?'ok':(dq.overall_quality_score||0)>=70?'warn':'bad'}">${dq.overall_quality_score??'—'}%</span></div>
            <div style="height:7px;background:#e8e8e8;border-radius:99px;overflow:hidden"><div style="width:${Math.min(dq.overall_quality_score||0,100)}%;height:100%;background:${(dq.overall_quality_score||0)>=90?'#1e8449':(dq.overall_quality_score||0)>=70?'#e67e22':'#c0392b'};border-radius:99px;-webkit-print-color-adjust:exact;print-color-adjust:exact"></div></div></div>
          <div class="dq-bar"><div class="dq-bar-label"><span>Critical Fields Complete</span><span class="${(dq.pct_complete_critical||0)>=90?'ok':'warn'}">${dq.pct_complete_critical??'—'}%</span></div>
            <div style="height:7px;background:#e8e8e8;border-radius:99px;overflow:hidden"><div style="width:${Math.min(dq.pct_complete_critical||0,100)}%;height:100%;background:${(dq.pct_complete_critical||0)>=90?'#1e8449':'#e67e22'};border-radius:99px;-webkit-print-color-adjust:exact;print-color-adjust:exact"></div></div></div>
          <div class="dq-bar"><div class="dq-bar-label"><span>Important Fields Complete</span><span class="${(dq.pct_complete_important||0)>=80?'ok':'warn'}">${dq.pct_complete_important??'—'}%</span></div>
            <div style="height:7px;background:#e8e8e8;border-radius:99px;overflow:hidden"><div style="width:${Math.min(dq.pct_complete_important||0,100)}%;height:100%;background:${(dq.pct_complete_important||0)>=80?'#1e8449':'#e67e22'};border-radius:99px;-webkit-print-color-adjust:exact;print-color-adjust:exact"></div></div></div>
          <p style="font-size:.72rem;color:#888;margin-top:8px">${dq.missing_critical_count||0} record(s) have missing critical fields.</p>
        </div>
        <div class="box">
          <div class="box-title">Field Completeness</div>
          ${(dq.field_completeness||[]).map(f=>`
            <div class="dq-bar"><div class="dq-bar-label"><span style="font-size:.7rem">${f.field}</span><span style="font-size:.7rem;font-weight:700;color:${f.pct>=90?'#1e8449':f.pct>=70?'#e67e22':'#c0392b'}">${f.pct}%</span></div>
            <div style="height:5px;background:#e8e8e8;border-radius:99px;overflow:hidden"><div style="width:${f.pct}%;height:100%;background:${f.pct>=90?'#1e8449':f.pct>=70?'#e67e22':'#c0392b'};border-radius:99px;-webkit-print-color-adjust:exact;print-color-adjust:exact"></div></div></div>`).join('')}
        </div>
      </div>

      <!-- Recommendations -->
      <h2>Recommendations</h2>
      ${(m.recommendations||[]).length
        ? (m.recommendations||[]).map(r=>`<div class="rec rec-${r.priority.toLowerCase()}">
            <div class="rec-label">${r.priority} &nbsp;·&nbsp; ${r.category}</div>
            <div style="font-size:.8rem;margin-bottom:3px">${r.issue}</div>
            <div style="font-size:.75rem;color:#555">&#8594; ${r.action} <span style="opacity:.6">(${r.households_affected} households)</span></div>
          </div>`).join('')
        : '<div style="background:#e4f5ec;border-radius:8px;padding:12px;font-size:.82rem;color:#065f46">&#10003; No critical action items. Continue routine surveillance.</div>'}

    </div>
  </div>
  <div class="no-print" style="text-align:center;margin:16px 0 20px;">
    <button onclick="window.print()" style="display:inline-flex;align-items:center;gap:7px;padding:12px 28px;background:#0e3d22;color:#fff;border:none;border-radius:8px;font-family:inherit;font-size:.9rem;font-weight:700;cursor:pointer;">&#128438; Print / Save as PDF</button>
    <div style="font-size:7pt;color:#888;margin-top:6px;">Browser Print &rarr; Save as PDF &rarr; A4 Portrait</div>
  </div>
  </body></html>`;
  try {
    // Render report in fullscreen iframe overlay — works on all Android browsers
    const overlay = document.createElement('div');
    overlay.id = 'ia-report-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#fff;display:flex;flex-direction:column;';
    overlay.innerHTML = '<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:#0d2137;color:#fff;font-family:sans-serif;font-size:.85rem;font-weight:700;">'
      + '<button onclick="document.getElementById('ia-report-overlay').remove()" style="background:rgba(255,255,255,.15);border:none;color:#fff;padding:6px 14px;border-radius:6px;cursor:pointer;font-family:inherit;font-size:.8rem;">✕ Close</button>'
      + '<span>Institution Report — use browser Print to save as PDF</span>'
      + '</div>'
      + '<iframe id="ia-report-frame" style="flex:1;border:none;width:100%;"></iframe>';
    document.body.appendChild(overlay);
    const frame = document.getElementById('ia-report-frame');
    frame.contentDocument.open();
    frame.contentDocument.write(_instHtmlOpen);
    frame.contentDocument.close();
  } catch(e) {
    console.error('[INST-RPT] Exception:', e);
    alert('Error generating report: ' + e.message);
  }
}
// ─── INDIVIDUAL REPORT (per enumerator) ──────────────────────────────────────

function _iaGenerateIndividualReport(enumeratorName) {
  console.log('[IND-RPT] called for:', enumeratorName, '| total records:', _iaData.records.length);
  const m    = window.iaMetrics;
  const recs = _iaData.records.filter(r => (r.interviewer_name||r.interviewer) === enumeratorName);
  console.log('[IND-RPT] filtered records for enumerator:', recs.length);
  if (!recs.length) { alert(`No records found for ${enumeratorName}.`); return; }

  const indMetrics = typeof computeSurveyMetrics === 'function' ? computeSurveyMetrics(recs) : null;
  const byLoc = {};
  recs.forEach(r => { const l = r.interview_location||r.location||'Unknown'; byLoc[l]=(byLoc[l]||0)+1; });
  const topLocs = Object.entries(byLoc).sort((a,b)=>b[1]-a[1]);
  const dates = recs.map(r=>r.interview_date||(r.synced_at||'').slice(0,10)).filter(Boolean).sort();

  const _indHtml = `<!DOCTYPE html><html><head><title>${enumeratorName} — Individual Report</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&family=DM+Serif+Display&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'DM Sans',sans-serif;background:#ecf5fb;color:#111;padding:20px;}
    .page{width:8.5in;background:#fff;margin:0 auto 20px;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.15);}
    .page-header{background:linear-gradient(135deg,#0d2137,#1e3a5f);color:#fff;padding:28px 32px;}
    .page-title{font-family:'DM Serif Display',serif;font-size:1.4rem;margin-bottom:4px;}
    .page-sub{font-size:.75rem;opacity:.7;}
    .page-body{padding:24px 32px;}
    h2{font-size:.85rem;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:#0d2137;border-left:3px solid #2e7cf6;padding-left:10px;margin:20px 0 12px;}
    table{width:100%;border-collapse:collapse;margin-bottom:16px;font-size:.82rem;}
    td,th{border:1px solid #e0e0e0;padding:8px 10px;}
    th{background:#0d2137;color:#fff;font-weight:700;font-size:.72rem;text-transform:uppercase;letter-spacing:.4px;}
    .ok{color:#1e8449;font-weight:700;}.warn{color:#e67e22;font-weight:700;}.bad{color:#c0392b;font-weight:700;}
    .kpi-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px;}
    .kpi{background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:14px;text-align:center;}
    .kpi-n{font-size:1.5rem;font-weight:800;color:#1d4ed8;}
    .kpi-l{font-size:.65rem;color:#6b7280;text-transform:uppercase;letter-spacing:.4px;margin-top:3px;}
    @media print{body{background:#fff;padding:0;}.page{box-shadow:none;border-radius:0;}}
  </style></head><body>
  <div class="page">
    <div class="page-header">
      <div class="page-title">${enumeratorName}</div>
      <div class="page-sub">Individual Enumerator Report · ${_iaInstName} · Generated ${new Date().toLocaleDateString('en-KE',{year:'numeric',month:'long',day:'numeric'})}</div>
    </div>
    <div class="page-body">
      <div class="kpi-row">
        <div class="kpi"><div class="kpi-n">${recs.length}</div><div class="kpi-l">Total Surveys</div></div>
        <div class="kpi"><div class="kpi-n">${topLocs.length}</div><div class="kpi-l">Locations</div></div>
        <div class="kpi"><div class="kpi-n">${dates[0]||'—'}</div><div class="kpi-l">First Survey</div></div>
        <div class="kpi"><div class="kpi-n">${dates[dates.length-1]||'—'}</div><div class="kpi-l">Last Survey</div></div>
      </div>

      <h2>Locations Covered</h2>
      <table><thead><tr><th>Location</th><th>Surveys</th><th>% of Their Total</th></tr></thead><tbody>
      ${topLocs.map(([loc, cnt])=>
        `<tr><td>${loc}</td><td style="font-weight:700;">${cnt}</td><td>${Math.round(cnt/recs.length*100)}%</td></tr>`
      ).join('')}
      </tbody></table>

      ${indMetrics ? `
      <h2>Health Indicators (Their Surveys)</h2>
      <table><thead><tr><th>Indicator</th><th>Coverage</th><th>Status</th></tr></thead><tbody>
      ${[['HIV Awareness',indMetrics.health?.pct_hiv_aware],['HIV Testing',indMetrics.health?.pct_hiv_tested],['Pit Latrine',indMetrics.infrastructure?.pct_pit_latrine],['Water Treated',indMetrics.infrastructure?.pct_water_treated],['Food Sufficiency',indMetrics.nutrition?.pct_food_sufficient],['Children Immunised',indMetrics.maternal_child?.pct_immunised]].map(([lbl,pct])=>
        `<tr><td>${lbl}</td><td>${pct??'—'}%</td><td class="${(pct??0)>=80?'ok':(pct??0)>=60?'warn':'bad'}">${(pct??0)>=80?'Good':(pct??0)>=60?'Fair':'Attention'}</td></tr>`).join('')}
      </tbody></table>` : ''}

      <h2>All Survey Records (${recs.length})</h2>
      <table><thead><tr><th>#</th><th>Date</th><th>Location</th><th>Household Size</th></tr></thead><tbody>
      ${recs.map((r,idx)=>`<tr>
        <td style="color:#888;">${idx+1}</td>
        <td>${r.interview_date||(r.synced_at||'').slice(0,10)||'—'}</td>
        <td>${r.interview_location||r.location||'Unknown'}</td>
        <td>${r.household_size||r.hh_size||'—'}</td>
      </tr>`).join('')}
      </tbody></table>
    </div>
  </div>
  <div style="text-align:center;margin-top:16px;">
    <button onclick="window.print()" style="padding:12px 28px;background:#0d2137;color:#fff;border:none;border-radius:8px;font-family:inherit;font-size:.9rem;font-weight:700;cursor:pointer;">Print / Save as PDF</button>
  </div>
  </body></html>`;
  try {
    const overlay = document.createElement('div');
    overlay.id = 'ia-report-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#fff;display:flex;flex-direction:column;';
    overlay.innerHTML = '<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:#0d2137;color:#fff;font-family:sans-serif;font-size:.85rem;font-weight:700;">'
      + '<button onclick="document.getElementById('ia-report-overlay').remove()" style="background:rgba(255,255,255,.15);border:none;color:#fff;padding:6px 14px;border-radius:6px;cursor:pointer;font-family:inherit;font-size:.8rem;">✕ Close</button>'
      + '<span>' + enumeratorName + ' — use browser Print to save as PDF</span>'
      + '</div>'
      + '<iframe id="ia-report-frame" style="flex:1;border:none;width:100%;"></iframe>';
    document.body.appendChild(overlay);
    const frame = document.getElementById('ia-report-frame');
    frame.contentDocument.open();
    frame.contentDocument.write(_indHtml);
    frame.contentDocument.close();
  } catch(e) {
    console.error('[IND-RPT] Exception:', e);
    alert('Error generating report: ' + e.message);
  }
}

// ─── CSV EXPORT ───────────────────────────────────────────────────────────────

function _iaExportCSV(records, label) {
  if (!records || !records.length) { alert('No records to export.'); return; }
  const cols = ['record_id','interviewer','interview_date','location','institution_id','respondent_age','respondent_gender','marital_status','education','occupation','house_type','roof_type','floor_type','wall_type','lighting','fuel','rooms','water_source','water_treated','water_container','waste_disposal','drainage','latrine','latrine_type','handwashing','hiv_heard','hiv_tested','hiv_protect','illnesses','chronic_illness','consultation','consult_where','deaths_5yr','deaths_count','pregnancy_status','anc_visits','delivery_place','children_under5','immunisation','meals_per_day','skips_meals','food_enough','mosquito_net','net_used','rodents','cockroaches','health_problems','health_priority','challenge_1','challenge_2','challenge_3','interview_summary','consent','synced_at'];
  const esc = v => { const s=String(v==null?'':v).replace(/"/g,'""'); return s.includes(',')||s.includes('"')||s.includes('\n')?`"${s}"`:s; };
  const csv = [cols.join(','),...records.map(r=>cols.map(c=>esc(r[c])).join(','))].join('\n');
  const blob = new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob);
  const fname = (label||'institution').replace(/[^a-zA-Z0-9]/g,'_').toLowerCase();
  a.download=`surveys_${fname}_${new Date().toISOString().slice(0,10)}.csv`; a.click();
}

// ─── THEME TOGGLE ─────────────────────────────────────────────────────────────

function _iaToggleTheme() {
  const dash = document.getElementById('inst-admin-dashboard');
  if (!dash) return;
  dash.classList.toggle('ia-light');
  localStorage.setItem('ia_theme', dash.classList.contains('ia-light') ? 'light' : 'dark');
}

function openInstitutionIdentityModal() {
  // Only institution admin can upload institution photos
  const role = (window.HS && window.HS.Auth) ? window.HS.Auth.getRole() : localStorage.getItem("userRole");
  if (role !== "admin" && role !== "institution_admin") {
    alert("Only institution admin can upload institution photos");
    return;
  }
  // your existing modal opening code here
}