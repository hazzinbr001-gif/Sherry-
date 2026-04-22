/* Medical Survey System — Super Admin Dashboard © 2026
 * ENHANCED: Charts · Tables · Collapsibles · SVG Icons · Rich Data · Premium XUI
 * HazzinBR · Great Lakes University · Community Health Survey System
 */

// ─── SVG ICON LIBRARY ───────────────────────────────────────────────────────

const _SA_ICONS = {
  home: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9.5L10 3l7 6.5"/><path d="M5 8v9h4v-5h2v5h4V8"/>
  </svg>`,
  institution: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="12" rx="1"/><path d="M6 7V5a4 4 0 0 1 8 0v2"/>
    <line x1="10" y1="11" x2="10" y2="15"/><line x1="8" y1="13" x2="12" y2="13"/>
  </svg>`,
  analytics: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="2,14 7,9 11,12 18,5"/><line x1="2" y1="18" x2="18" y2="18"/>
  </svg>`,
  people: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="8" cy="6" r="3"/><path d="M2 18v-2a5 5 0 0 1 10 0v2"/>
    <circle cx="15" cy="7" r="2.5"/><path d="M13 18v-1.5a4 4 0 0 1 5 0V18"/>
  </svg>`,
  export: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 14v3h12v-3"/><polyline points="10,3 10,13"/><polyline points="7,10 10,13 13,10"/>
  </svg>`,
  settings: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="10" cy="10" r="3"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"/>
  </svg>`,
  survey: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="2" width="12" height="16" rx="2"/><line x1="8" y1="7" x2="14" y2="7"/>
    <line x1="8" y1="10" x2="14" y2="10"/><line x1="8" y1="13" x2="11" y2="13"/>
    <circle cx="6" cy="7" r="0.8" fill="currentColor"/><circle cx="6" cy="10" r="0.8" fill="currentColor"/><circle cx="6" cy="13" r="0.8" fill="currentColor"/>
  </svg>`,
  calendar: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="14" height="14" rx="2"/><line x1="3" y1="8" x2="17" y2="8"/>
    <line x1="7" y1="2" x2="7" y2="6"/><line x1="13" y1="2" x2="13" y2="6"/>
  </svg>`,
  warning: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 2L2 17h16L10 2z"/><line x1="10" y1="8" x2="10" y2="12"/><circle cx="10" cy="15" r="0.7" fill="currentColor"/>
  </svg>`,
  check: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3,10 8,15 17,5"/>
  </svg>`,
  delete: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="5,5 15,15"/><polyline points="15,5 5,15"/>
  </svg>`,
  download: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 15v2h12v-2"/><polyline points="10,4 10,13"/><polyline points="7,10 10,13 13,10"/>
  </svg>`,
  refresh: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10a7 7 0 1 1 1.5 4.5"/><polyline points="3,15 3,10 8,10"/>
  </svg>`,
  chevron_right: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="7,4 13,10 7,16"/>
  </svg>`,
  chevron_down: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="4,7 10,13 16,7"/>
  </svg>`,
  health: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 17s-7-4.5-7-9a4 4 0 0 1 7-2.67A4 4 0 0 1 17 8c0 4.5-7 9-7 9z"/>
  </svg>`,
  shield: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 2L4 5v5c0 4 2.5 7 6 8 3.5-1 6-4 6-8V5L10 2z"/>
  </svg>`,
  signout: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 4h4v12h-4"/><polyline points="8,13 12,10 8,7"/><line x1="2" y1="10" x2="12" y2="10"/>
  </svg>`,
  nutrition: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 2c-2 3-6 4-6 8a6 6 0 0 0 12 0c0-4-4-5-6-8z"/><path d="M10 10v6"/>
  </svg>`,
  water: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 2l-5 8a5 5 0 0 0 10 0L10 2z"/>
  </svg>`,
  risk: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="10" cy="10" r="8"/><line x1="10" y1="7" x2="10" y2="11"/><circle cx="10" cy="14" r="0.8" fill="currentColor"/>
  </svg>`,
  filter: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" y1="6" x2="17" y2="6"/><line x1="6" y1="10" x2="14" y2="10"/><line x1="9" y1="14" x2="11" y2="14"/>
  </svg>`,
  medal: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="10" cy="13" r="5"/><path d="M7 2h6l1 4H6L7 2z"/><line x1="10" y1="8" x2="10" y2="10"/>
  </svg>`,
};

function _saIcon(name, size=16, color='currentColor') {
  const svg = _SA_ICONS[name];
  if (!svg) return '';
  return svg.replace('<svg ', `<svg width="${size}" height="${size}" color="${color}" `);
}

// ─── AUTH ────────────────────────────────────────────────────────────────────

function isSuperAdmin() {
  // Delegate to unified Auth if api-client.js is loaded
  if (window.HS && window.HS.Auth) return window.HS.Auth.isSuperAdmin();
  const bypass = localStorage.getItem('chsa_is_admin_bypass') === '1';
  if (bypass) return true;
  try {
    const s = JSON.parse(localStorage.getItem('chsa_session') || '{}');
    return s.role === 'super_admin';
  } catch(e) { return false; }
}

function initSuperAdminDashboard() {
  if (!isSuperAdmin()) return;
  _injectSAStyles();
  _renderSuperAdminDashboard();
  setTimeout(function(){ if(typeof checkAppVersion==='function') checkAppVersion(); }, 3000);
}

// ─── STYLES ──────────────────────────────────────────────────────────────────

function _injectSAStyles() {
  if (document.getElementById('sa-enhanced-styles')) return;
  const s = document.createElement('style');
  s.id = 'sa-enhanced-styles';
  s.textContent = `
    /* ── Palette: Dark (default) ── */
    #super-admin-dashboard {
      --sa-bg:       #0b0f1a;
      --sa-surface:  #111827;
      --sa-card:     #1a2236;
      --sa-border:   rgba(255,255,255,.07);
      --sa-border2:  rgba(255,255,255,.13);
      --sa-text:     #f1f5f9;
      --sa-muted:    #6b7280;
      --sa-dim:      #374151;
      --sa-accent:   #2e7cf6;
      --sa-accent2:  #38bdf8;
      --sa-green:    #22c55e;
      --sa-amber:    #f59e0b;
      --sa-red:      #ef4444;
      --sa-purple:   #a78bfa;
      --sa-teal:     #14b8a6;
      --sa-glow:     rgba(46,124,246,.18);
      --sa-hero-from:#0d1a2e;
      --sa-hero-to:  #060d1a;
      --sa-header-from:#060a14;
      --sa-header-to:#0d1a2e;
      --sa-nav-hover:#1e2a40;
      --sa-progress-track:rgba(255,255,255,.07);
      --sa-table-head:rgba(255,255,255,.04);
      --sa-table-row-hover:rgba(255,255,255,.03);
      --sa-table-border:rgba(255,255,255,.04);
      --sa-rec-critical-bg:rgba(239,68,68,.08);
      --sa-rec-high-bg:rgba(245,158,11,.08);
      --sa-rec-medium-bg:rgba(34,197,94,.08);
      --sa-metric-bg:rgba(255,255,255,.04);
      --sa-disease-track:rgba(255,255,255,.07);
      --sa-input-bg:#1a2236;
      --sa-danger-hdr:rgba(239,68,68,.07);
      --sa-danger-notice-bg:rgba(239,68,68,.06);
      --sa-spinner-track:rgba(46,124,246,.2);
      --sa-btn-bg:       rgba(255,255,255,.07);
      --sa-btn-bg-hover: rgba(255,255,255,.12);
      --sa-btn-border-hover:rgba(255,255,255,.22);
      --sa-back-bg:      rgba(255,255,255,.08);
      --sa-back-bg-hover:rgba(255,255,255,.13);
      --sa-action-icon-bg:rgba(255,255,255,.06);
      --sa-export-bg:    rgba(255,255,255,.04);
      --sa-export-bg-hover:rgba(255,255,255,.08);
      --sa-tag-bg:       rgba(255,255,255,.06);
      --sa-user-row-border:rgba(255,255,255,.05);
      --sa-avatar-dim-bg:rgba(255,255,255,.08);
      --sa-loading-bg:   rgba(11,15,26,.92);
      --sa-danger-btn-bg:rgba(255,255,255,.04);
      --sa-generic-btn-bg:rgba(255,255,255,.05);
      --sa-rec-body-color:rgba(241,245,249,.75);
      --sa-chart-line:   rgba(255,255,255,.05);
    }

    /* ── Palette: Light ── */
    #super-admin-dashboard.sa-light {
      --sa-bg:       #f0f4f8;
      --sa-surface:  #e4eaf2;
      --sa-card:     #ffffff;
      --sa-border:   rgba(0,0,0,.08);
      --sa-border2:  rgba(0,0,0,.14);
      --sa-text:     #0f172a;
      --sa-muted:    #64748b;
      --sa-dim:      #94a3b8;
      --sa-accent:   #1d63d4;
      --sa-accent2:  #0284c7;
      --sa-green:    #16a34a;
      --sa-amber:    #d97706;
      --sa-red:      #dc2626;
      --sa-purple:   #7c3aed;
      --sa-teal:     #0f766e;
      --sa-glow:     rgba(29,99,212,.12);
      --sa-hero-from:#dbeafe;
      --sa-hero-to:  #eff6ff;
      --sa-header-from:#1e3a5f;
      --sa-header-to:#1e3a5f;
      --sa-nav-hover:#f1f5fd;
      --sa-progress-track:rgba(0,0,0,.07);
      --sa-table-head:rgba(0,0,0,.04);
      --sa-table-row-hover:rgba(0,0,0,.02);
      --sa-table-border:rgba(0,0,0,.05);
      --sa-rec-critical-bg:rgba(220,38,38,.06);
      --sa-rec-high-bg:rgba(217,119,6,.06);
      --sa-rec-medium-bg:rgba(22,163,74,.06);
      --sa-metric-bg:rgba(0,0,0,.03);
      --sa-disease-track:rgba(0,0,0,.07);
      --sa-input-bg:#ffffff;
      --sa-danger-hdr:rgba(220,38,38,.05);
      --sa-danger-notice-bg:rgba(220,38,38,.04);
      --sa-spinner-track:rgba(29,99,212,.15);
      --sa-btn-bg:       rgba(255,255,255,.6);
      --sa-btn-bg-hover: rgba(255,255,255,.9);
      --sa-btn-border-hover:rgba(0,0,0,.18);
      --sa-back-bg:      rgba(255,255,255,.7);
      --sa-back-bg-hover:rgba(255,255,255,1);
      --sa-action-icon-bg:rgba(0,0,0,.05);
      --sa-export-bg:    rgba(0,0,0,.02);
      --sa-export-bg-hover:rgba(0,0,0,.05);
      --sa-tag-bg:       rgba(0,0,0,.04);
      --sa-user-row-border:rgba(0,0,0,.06);
      --sa-avatar-dim-bg:rgba(0,0,0,.07);
      --sa-loading-bg:   rgba(240,244,248,.94);
      --sa-danger-btn-bg:rgba(0,0,0,.02);
      --sa-generic-btn-bg:rgba(0,0,0,.03);
      --sa-rec-body-color:rgba(15,23,42,.7);
      --sa-chart-line:   rgba(0,0,0,.05);
    }

    /* ── Base ── */
    #super-admin-dashboard {
      position:fixed;inset:0;z-index:9000;
      background:var(--sa-bg);
      color:var(--sa-text);
      font-family:'DM Sans',system-ui,sans-serif;
      display:flex;flex-direction:column;
      overflow:hidden;
      transition:background .2s,color .2s;
    }
    /* Prevent host page styles leaking into any child element */
    #super-admin-dashboard *, #super-admin-dashboard *::before, #super-admin-dashboard *::after {
      box-sizing:border-box;
    }
    /* Ensure inputs/buttons use dashboard vars, not host-page browser defaults */
    #super-admin-dashboard input,
    #super-admin-dashboard button,
    #super-admin-dashboard select,
    #super-admin-dashboard textarea {
      background-color:var(--sa-input-bg);
      color:var(--sa-text);
      border-color:var(--sa-border2);
      -webkit-appearance:none;
      appearance:none;
    }

    /* ── Header ── */
    .sa-header {
      background:linear-gradient(135deg,var(--sa-header-from),var(--sa-header-to));
      border-bottom:1px solid var(--sa-border2);
      padding:11px 16px;
      flex-shrink:0;
      display:flex;align-items:center;justify-content:space-between;
      box-shadow:0 2px 20px rgba(0,0,0,.4);
    }
    .sa-header-brand { display:flex;align-items:center;gap:10px; }
    .sa-header-logo { height:28px;filter:drop-shadow(0 0 8px rgba(46,124,246,.5)); }
    .sa-header-title { font-size:.8rem;font-weight:800;letter-spacing:-.01em; }
    .sa-header-sub { font-size:.52rem;color:var(--sa-muted);letter-spacing:.5px;text-transform:uppercase; }
    .sa-header-btn {
      display:flex;align-items:center;gap:6px;
      background:var(--sa-btn-bg);
      border:1px solid var(--sa-border2);
      color:var(--sa-text);
      border-radius:8px;padding:7px 12px;
      font-size:.72rem;cursor:pointer;font-family:inherit;font-weight:700;
      transition:background .15s,border-color .15s;
    }
    .sa-header-btn:hover { background:var(--sa-btn-bg-hover);border-color:var(--sa-btn-border-hover); }

    /* ── Scroll container ── */
    #sa-main-content {
      flex:1;overflow-y:auto;
      scrollbar-width:thin;scrollbar-color:var(--sa-dim) transparent;
    }
    #sa-main-content::-webkit-scrollbar { width:4px; }
    #sa-main-content::-webkit-scrollbar-thumb { background:var(--sa-dim);border-radius:2px; }

    /* ── Hero ── */
    .sa-hero {
      background:linear-gradient(160deg,var(--sa-hero-from) 0%,var(--sa-hero-to) 60%,var(--sa-hero-from) 100%);
      padding:20px 16px 16px;
      border-bottom:1px solid var(--sa-border);
      position:relative;overflow:hidden;
    }
    .sa-hero::before {
      content:'';position:absolute;top:-60px;right:-40px;
      width:220px;height:220px;border-radius:50%;
      background:radial-gradient(circle,rgba(46,124,246,.12) 0%,transparent 70%);
      pointer-events:none;
    }
    .sa-hero-label { font-size:.6rem;text-transform:uppercase;letter-spacing:1.2px;color:var(--sa-accent2);font-weight:700;margin-bottom:4px; }
    .sa-hero-name { font-size:1.35rem;font-weight:800;letter-spacing:-.02em;margin-bottom:14px; }
    .sa-hero-kpi-row { display:grid;grid-template-columns:repeat(4,1fr);gap:8px; }
    .sa-hero-kpi {
      background:var(--sa-metric-bg);
      border:1px solid var(--sa-border);
      border-radius:12px;padding:10px 8px;text-align:center;
      transition:border-color .15s,background .15s;
    }
    .sa-hero-kpi:hover { background:var(--sa-metric-bg);border-color:var(--sa-border2); }
    .sa-hero-kpi-n { font-size:1.15rem;font-weight:800;letter-spacing:-.02em; }
    .sa-hero-kpi-l { font-size:.55rem;color:var(--sa-muted);text-transform:uppercase;letter-spacing:.6px;margin-top:2px; }

    /* ── Section label ── */
    .sa-label {
      font-size:.6rem;text-transform:uppercase;letter-spacing:1.2px;
      color:var(--sa-muted);font-weight:700;
      padding:14px 16px 6px;
    }

    /* ── Nav shelf cards ── */
    .sa-shelf-grid { display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 16px 12px; }
    .sa-nav-card {
      background:var(--sa-card);
      border:1px solid var(--sa-border);
      border-radius:14px;padding:14px 13px;
      cursor:pointer;text-align:left;
      transition:border-color .15s,transform .1s,background .15s;
      position:relative;overflow:hidden;
    }
    .sa-nav-card:hover { border-color:var(--sa-border2);background:var(--sa-nav-hover);transform:translateY(-1px); }
    .sa-nav-card:active { transform:translateY(0); }
    .sa-nav-card-icon {
      width:32px;height:32px;border-radius:9px;
      display:flex;align-items:center;justify-content:center;
      margin-bottom:10px;flex-shrink:0;
    }
    .sa-nav-card-icon.blue  { background:rgba(46,124,246,.15);color:var(--sa-accent); }
    .sa-nav-card-icon.green { background:rgba(34,197,94,.15);color:var(--sa-green); }
    .sa-nav-card-icon.amber { background:rgba(245,158,11,.15);color:var(--sa-amber); }
    .sa-nav-card-icon.purple{ background:rgba(167,139,250,.15);color:var(--sa-purple); }
    .sa-nav-card-title { font-size:.85rem;font-weight:800;margin-bottom:3px; }
    .sa-nav-card-sub { font-size:.65rem;color:var(--sa-muted);line-height:1.4; }
    .sa-nav-card-badge {
      display:inline-block;margin-top:8px;
      background:rgba(46,124,246,.12);color:var(--sa-accent2);
      border:1px solid rgba(46,124,246,.2);
      border-radius:6px;padding:2px 7px;font-size:.6rem;font-weight:700;
    }
    .sa-nav-card-badge.alert { background:rgba(239,68,68,.12);color:#fca5a5;border-color:rgba(239,68,68,.2); }

    /* ── Stat rows ── */
    .sa-stat-rows { display:flex;flex-direction:column;gap:0;padding:0 16px 12px; }
    .sa-stat-row {
      display:flex;align-items:center;justify-content:space-between;
      padding:11px 14px;
      background:var(--sa-card);border:1px solid var(--sa-border);
      cursor:pointer;transition:background .15s;
    }
    .sa-stat-row:first-child { border-radius:12px 12px 0 0; }
    .sa-stat-row:last-child { border-radius:0 0 12px 12px; }
    .sa-stat-row:not(:last-child) { border-bottom-color:transparent; }
    .sa-stat-row:hover { background:var(--sa-nav-hover); }
    .sa-stat-row-left { display:flex;align-items:center;gap:10px; }
    .sa-stat-dot { width:8px;height:8px;border-radius:50%;flex-shrink:0; }
    .sa-stat-dot.green  { background:var(--sa-green);box-shadow:0 0 6px rgba(34,197,94,.5); }
    .sa-stat-dot.amber  { background:var(--sa-amber);box-shadow:0 0 6px rgba(245,158,11,.5); }
    .sa-stat-dot.blue   { background:var(--sa-accent);box-shadow:0 0 6px rgba(46,124,246,.5); }
    .sa-stat-dot.red    { background:var(--sa-red);box-shadow:0 0 6px rgba(239,68,68,.5); }
    .sa-stat-label { font-size:.78rem;color:var(--sa-text);font-weight:500; }
    .sa-stat-value { font-size:.88rem;font-weight:800; }
    .sa-stat-arrow { color:var(--sa-dim);margin-left:6px;display:flex;align-items:center; }

    /* ── Quick action rows ── */
    .sa-action-rows { display:flex;flex-direction:column;gap:0;padding:0 16px 20px; }
    .sa-action-row {
      display:flex;align-items:center;gap:12px;
      padding:12px 14px;
      background:var(--sa-card);border:1px solid var(--sa-border);
      cursor:pointer;transition:background .15s;
      font-family:inherit;width:100%;text-align:left;color:var(--sa-text);
    }
    .sa-action-row:first-child { border-radius:12px 12px 0 0; }
    .sa-action-row:last-child { border-radius:0 0 12px 12px; }
    .sa-action-row:not(:last-child) { border-bottom-color:transparent; }
    .sa-action-row:hover { background:var(--sa-nav-hover); }
    .sa-action-icon { width:28px;height:28px;border-radius:7px;background:var(--sa-action-icon-bg);display:flex;align-items:center;justify-content:center;flex-shrink:0; }
    .sa-action-label { font-size:.8rem;font-weight:600;flex:1; }

    /* ── SVG Bar Chart ── */
    .sa-chart-wrap { padding:4px 0 0;overflow:hidden; }
    .sa-bar-chart svg text { font-family:'DM Sans',system-ui,sans-serif; }

    /* ── Inline mini donut ── */
    .sa-donut-row { display:flex;align-items:center;gap:14px;padding:10px 0; }
    .sa-donut-legend { flex:1; }
    .sa-donut-legend-item { display:flex;align-items:center;gap:7px;margin-bottom:6px;font-size:.72rem; }
    .sa-donut-dot { width:9px;height:9px;border-radius:2px;flex-shrink:0; }

    /* ── Collapsible card ── */
    .sa-collapse {
      background:var(--sa-card);border:1px solid var(--sa-border);
      border-radius:13px;margin-bottom:10px;overflow:hidden;
    }
    .sa-collapse-hdr {
      display:flex;align-items:center;gap:12px;
      padding:13px 14px;cursor:pointer;
      transition:background .15s;user-select:none;
      border:none;background:transparent;width:100%;text-align:left;color:var(--sa-text);font-family:inherit;
    }
    .sa-collapse-hdr:hover { background:var(--sa-table-row-hover); }
    .sa-collapse-hdr-icon { width:32px;height:32px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
    .sa-collapse-hdr-text { flex:1; }
    .sa-collapse-hdr-title { font-size:.85rem;font-weight:700; }
    .sa-collapse-hdr-sub { font-size:.65rem;color:var(--sa-muted);margin-top:1px; }
    .sa-collapse-hdr-arrow { color:var(--sa-muted);transition:transform .2s;display:flex;align-items:center; }
    .sa-collapse-hdr-arrow.open { transform:rotate(90deg); }
    .sa-collapse-body { padding:0 14px 14px;display:none; }
    .sa-collapse-body.open { display:block; }

    /* ── Progress bars ── */
    .sa-progress { margin-bottom:10px; }
    .sa-progress-header { display:flex;justify-content:space-between;align-items:baseline;margin-bottom:5px; }
    .sa-progress-label { font-size:.74rem;color:var(--sa-text); }
    .sa-progress-pct { font-size:.74rem;font-weight:700; }
    .sa-progress-track { height:6px;background:var(--sa-progress-track);border-radius:3px;overflow:hidden; }
    .sa-progress-fill { height:100%;border-radius:3px;transition:width .4s ease; }

    /* ── Table ── */
    .sa-table-wrap { overflow-x:auto;margin-bottom:2px; }
    .sa-table { width:100%;border-collapse:collapse;font-size:.74rem; }
    .sa-table th {
      background:var(--sa-table-head);color:var(--sa-muted);
      font-weight:700;font-size:.62rem;text-transform:uppercase;letter-spacing:.7px;
      padding:8px 10px;text-align:left;border-bottom:1px solid var(--sa-border);
    }
    .sa-table td { padding:9px 10px;border-bottom:1px solid var(--sa-table-border);vertical-align:middle; }
    .sa-table tr:last-child td { border-bottom:none; }
    .sa-table tr:hover td { background:var(--sa-table-row-hover); }
    .sa-table .badge {
      display:inline-block;padding:2px 7px;border-radius:5px;font-size:.62rem;font-weight:700;
    }
    .sa-table .badge-green  { background:rgba(34,197,94,.12);color:#86efac; }
    .sa-table .badge-amber  { background:rgba(245,158,11,.12);color:#fcd34d; }
    .sa-table .badge-red    { background:rgba(239,68,68,.12);color:#fca5a5; }
    .sa-table .badge-blue   { background:rgba(46,124,246,.12);color:#93c5fd; }
    .sa-table .badge-purple { background:rgba(167,139,250,.12);color:#c4b5fd; }

    /* ── Section view (subpages) ── */
    .sa-view-header {
      background:linear-gradient(135deg,var(--sa-header-from),var(--sa-header-to));
      border-bottom:1px solid var(--sa-border2);
      padding:12px 16px;flex-shrink:0;display:flex;align-items:center;gap:12px;
    }
    .sa-back-btn {
      display:flex;align-items:center;gap:6px;
      background:var(--sa-back-bg);border:1px solid var(--sa-border2);
      color:var(--sa-text);border-radius:8px;padding:7px 11px;
      font-size:.75rem;cursor:pointer;font-family:inherit;font-weight:700;
      transition:background .15s;
    }
    .sa-back-btn:hover { background:var(--sa-back-bg-hover); }
    .sa-view-title { font-size:.92rem;font-weight:800; }
    #sa-view-body { flex:1;overflow-y:auto;padding:14px 16px 50px; }

    /* ── Metric trio ── */
    .sa-metric-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px; }
    .sa-metric {
      background:var(--sa-metric-bg);border:1px solid var(--sa-border);
      border-radius:11px;padding:12px 8px;text-align:center;
    }
    .sa-metric-n { font-size:1.1rem;font-weight:800; }
    .sa-metric-l { font-size:.6rem;color:var(--sa-muted);text-transform:uppercase;letter-spacing:.5px;margin-top:2px; }
    .sa-metric.good  { border-color:rgba(34,197,94,.2); }
    .sa-metric.warn  { border-color:rgba(245,158,11,.2); }
    .sa-metric.bad   { border-color:rgba(239,68,68,.2); }
    .sa-metric.good .sa-metric-n  { color:var(--sa-green); }
    .sa-metric.warn .sa-metric-n  { color:var(--sa-amber); }
    .sa-metric.bad .sa-metric-n   { color:var(--sa-red); }

    /* ── Rec cards ── */
    .sa-rec { border-radius:10px;padding:11px 13px;margin-bottom:8px;border-left:3px solid; }
    .sa-rec.critical { background:var(--sa-rec-critical-bg);border-color:var(--sa-red); }
    .sa-rec.high     { background:var(--sa-rec-high-bg);border-color:var(--sa-amber); }
    .sa-rec.medium   { background:var(--sa-rec-medium-bg);border-color:var(--sa-green); }
    .sa-rec-title { font-size:.73rem;font-weight:800;margin-bottom:3px;text-transform:uppercase;letter-spacing:.5px; }
    .sa-rec-body  { font-size:.74rem;color:var(--sa-rec-body-color);line-height:1.5; }

    /* ── User rows ── */
    .sa-user-row {
      display:flex;align-items:center;gap:10px;
      padding:10px 0;border-bottom:1px solid var(--sa-user-row-border);
    }
    .sa-user-row:last-child { border-bottom:none; }
    .sa-user-avatar {
      width:34px;height:34px;border-radius:50%;
      background:linear-gradient(135deg,var(--sa-accent),var(--sa-accent2));
      color:#fff;display:flex;align-items:center;justify-content:center;
      font-weight:800;font-size:.85rem;flex-shrink:0;
    }
    .sa-user-avatar.dim { background:var(--sa-avatar-dim-bg);color:var(--sa-muted); }
    .sa-user-name { font-weight:700;font-size:.82rem; }
    .sa-user-sub  { font-size:.67rem;color:var(--sa-muted);margin-top:1px; }
    .sa-del-btn {
      padding:4px 9px;border-radius:6px;cursor:pointer;font-size:.63rem;font-weight:700;
      border:1px solid rgba(239,68,68,.25);background:rgba(239,68,68,.08);color:#fca5a5;
      transition:background .15s;white-space:nowrap;display:flex;align-items:center;gap:4px;
      font-family:inherit;
    }
    .sa-del-btn:hover { background:rgba(239,68,68,.15); }

    /* ── Search input ── */
    .sa-search {
      width:100%;padding:9px 12px 9px 36px;
      border:1px solid var(--sa-border2);border-radius:10px;
      background:var(--sa-card);color:var(--sa-text);
      font-family:inherit;font-size:.8rem;outline:none;
      box-sizing:border-box;margin-bottom:12px;
      transition:border-color .15s;
    }
    .sa-search:focus { border-color:var(--sa-accent); }
    .sa-search-wrap { position:relative; }
    .sa-search-icon { position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--sa-muted);pointer-events:none; }

    /* ── Danger zone ── */
    .sa-danger-section { border:1px solid rgba(239,68,68,.2);border-radius:13px;overflow:hidden;margin-bottom:10px; }
    .sa-danger-hdr { background:var(--sa-danger-hdr);padding:12px 14px;border-bottom:1px solid rgba(239,68,68,.15); }
    .sa-danger-hdr-title { font-size:.85rem;font-weight:700;color:var(--sa-red); }
    .sa-danger-hdr-sub { font-size:.65rem;color:var(--sa-muted);margin-top:2px; }
    .sa-danger-body { padding:12px 14px;display:flex;flex-direction:column;gap:8px; }
    .sa-danger-notice { background:var(--sa-danger-notice-bg);border:1px solid rgba(239,68,68,.15);border-radius:8px;padding:10px 12px;font-size:.74rem;color:var(--sa-red);line-height:1.6; }
    .sa-danger-btn {
      width:100%;padding:12px;border-radius:9px;cursor:pointer;
      font-family:inherit;font-size:.83rem;font-weight:700;
      background:var(--sa-danger-btn-bg);color:#fca5a5;
      border:1px solid rgba(239,68,68,.2);
      display:flex;align-items:center;justify-content:center;gap:8px;
      transition:background .15s,border-color .15s;
    }
    .sa-danger-btn:hover { background:rgba(239,68,68,.1);border-color:rgba(239,68,68,.3); }
    .sa-danger-btn.full { background:linear-gradient(135deg,rgba(220,38,38,.7),rgba(153,27,27,.8));color:#fff;border-color:transparent; }
    .sa-danger-btn.full:hover { background:linear-gradient(135deg,#dc2626,#991b1b); }
    .sa-danger-btn-sub { display:block;font-size:.63rem;font-weight:400;opacity:.65;margin-top:2px; }

    /* ── Export buttons ── */
    .sa-export-btn {
      display:flex;align-items:center;gap:10px;
      width:100%;padding:12px 14px;
      background:var(--sa-export-bg);border:1px solid var(--sa-border);
      border-radius:10px;color:var(--sa-text);font-family:inherit;font-size:.82rem;font-weight:600;
      cursor:pointer;text-align:left;transition:background .15s,border-color .15s;
      margin-bottom:8px;
    }
    .sa-export-btn:hover { background:var(--sa-export-bg-hover);border-color:var(--sa-border2); }
    .sa-export-btn-icon { width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
    .sa-export-btn-text-main { font-size:.82rem;font-weight:700; }
    .sa-export-btn-text-sub { font-size:.65rem;color:var(--sa-muted);margin-top:1px; }

    /* ── Disease list ── */
    .sa-disease-item { display:flex;align-items:center;gap:8px;margin-bottom:8px; }
    .sa-disease-name { font-size:.74rem;width:130px;flex-shrink:0;color:var(--sa-text); }
    .sa-disease-track { flex:1;height:5px;background:var(--sa-disease-track);border-radius:3px;overflow:hidden; }
    .sa-disease-fill { height:100%;background:linear-gradient(90deg,var(--sa-accent),var(--sa-accent2));border-radius:3px; }
    .sa-disease-count { font-size:.7rem;font-weight:700;color:var(--sa-muted);width:28px;text-align:right; }

    /* ── Loading ── */
    #sa-loading {
      position:absolute;inset:0;
      background:var(--sa-loading-bg);
      display:flex;align-items:center;justify-content:center;z-index:10;
    }
    .sa-spinner {
      width:36px;height:36px;border:3px solid var(--sa-spinner-track);
      border-top-color:var(--sa-accent);border-radius:50%;
      animation:sa-spin 1s linear infinite;
    }
    @keyframes sa-spin { to { transform:rotate(360deg); } }
    @keyframes sa-fadein { from { opacity:0;transform:translateY(6px); } to { opacity:1;transform:none; } }
    .sa-anim { animation:sa-fadein .25s ease both; }

    /* ── Divider ── */
    .sa-divider { height:1px;background:var(--sa-border);margin:14px 0; }
    .sa-empty { text-align:center;padding:32px;color:var(--sa-muted);font-size:.82rem; }
    .sa-tag { display:inline-flex;align-items:center;gap:4px;background:var(--sa-tag-bg);border:1px solid var(--sa-border);border-radius:6px;padding:3px 8px;font-size:.65rem;font-weight:600; }

    /* ── Inst card mini stats ── */
    .sa-mini-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px; }
    .sa-mini-stat { background:var(--sa-export-bg);border:1px solid var(--sa-border);border-radius:9px;padding:8px 6px;text-align:center; }
    .sa-mini-stat-n { font-size:.85rem;font-weight:800; }
    .sa-mini-stat-l { font-size:.57rem;color:var(--sa-muted);margin-top:1px; }
  `;
  document.head.appendChild(s);
}

// ─── SVG CHARTS ──────────────────────────────────────────────────────────────

function _saBarChartSVG(data, { width=320, height=120, colors, label='', unit='%' } = {}) {
  if (!data || !data.length) return '';
  const pad = { top:10, right:10, bottom:30, left:30 };
  const W = width - pad.left - pad.right;
  const H = height - pad.top - pad.bottom;
  const max = Math.max(...data.map(d=>d.value), 1);
  const cols = colors || ['#2e7cf6','#38bdf8','#22c55e','#a78bfa','#f59e0b','#14b8a6'];
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

  // Y axis lines
  const yLines = [0, 25, 50, 75, 100].filter(v => v <= max + 10).map(v => {
    const y = pad.top + H - Math.round((v / max) * H);
    return `<line x1="${pad.left}" x2="${width - pad.right}" y1="${y}" y2="${y}" stroke="rgba(128,128,128,.12)" stroke-dasharray="3,3"/>
      <text x="${pad.left - 3}" y="${y + 3}" text-anchor="end" font-size="7" fill="#4b5563" font-family="DM Sans,system-ui,sans-serif">${v}</text>`;
  }).join('');

  return `<div class="sa-chart-wrap">
    <svg width="100%" viewBox="0 0 ${width} ${height}" class="sa-bar-chart" style="display:block;">
      ${yLines}${bars}
    </svg>
  </div>`;
}

function _saHBarSVG(data, { width=300, barH=14, gap=8, unit='%' } = {}) {
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

function _saDonutSVG(slices, size=72) {
  // slices: [{value, color, label}]
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

function _renderSuperAdminDashboard() {
  const existing = document.getElementById('super-admin-dashboard');
  if (existing) existing.remove();
  const home = document.getElementById('home-page');
  if (home) home.style.display = 'none';

  const dash = document.createElement('div');
  dash.id = 'super-admin-dashboard';
  if (localStorage.getItem('sa_theme') === 'light') dash.classList.add('sa-light');

  dash.innerHTML = `
    <div class="sa-header">
      <div class="sa-header-brand">
        <img src="./medisync-logo.png" alt="MSS" class="sa-header-logo">
        <div>
          <div class="sa-header-title">Medical Survey System</div>
          <div class="sa-header-sub">Super Admin · Ministry Level</div>
        </div>
      </div>
      <button class="sa-header-btn" onclick="_saSwitchView('settings')">
        ${_saIcon('settings',14)} Settings
      </button>
    </div>

    <div id="sa-main-content"></div>

    <div id="sa-loading">
      <div style="text-align:center;">
        <div class="sa-spinner" style="margin:0 auto 14px;"></div>
        <div style="font-size:.8rem;font-weight:600;color:var(--sa-muted);">Loading all institutions…</div>
      </div>
    </div>`;

  document.body.appendChild(dash);

  _saLoadAll().then(() => {
    document.getElementById('sa-loading').style.display = 'none';
    _saRenderHomePage();
  }).catch(e => {
    document.getElementById('sa-loading').style.display = 'none';
    document.getElementById('sa-main-content').innerHTML = `
      <div style="text-align:center;padding:50px 20px;">
        <div style="color:var(--sa-red);margin-bottom:10px;">${_saIcon('warning',32,'var(--sa-red)')}</div>
        <div style="font-weight:700;margin-bottom:6px;">Failed to load data</div>
        <div style="font-size:.78rem;color:var(--sa-muted);margin-bottom:18px;">${e.message||'Network error — check your connection'}</div>
        <button onclick="_saLoadAll().then(()=>{document.getElementById('sa-loading').style.display='none';_saRenderHomePage()}).catch(()=>{})"
          style="padding:10px 22px;background:var(--sa-accent);color:#fff;border:none;border-radius:9px;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:700;">
          Retry
        </button>
      </div>`;
  });
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function _saRenderHomePage() {
  const main = document.getElementById('sa-main-content');
  if (!main) return;
  main.className = '';
  main.style.cssText = 'flex:1;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--sa-dim) transparent;';

  const { records, institutions, students } = _saData;
  const metrics = window.saMetrics;
  const quality = metrics?.data_quality?.overall_quality_score;
  const riskHigh = (metrics?.risk_profiles||[]).filter(r=>r.level==='HIGH').length;
  const today = new Date().toISOString().split('T')[0];
  const todayN = records.filter(r=>(r.interview_date||'').startsWith(today)).length;
  const admins = students.filter(s=>s.role==='institution_admin').length;
  const enumerators = students.filter(s=>s.role!=='institution_admin').length;

  // 7-day submission sparkline data
  const last7 = Array.from({length:7}).map((_,i)=>{
    const d = new Date(); d.setDate(d.getDate()-(6-i));
    const key = d.toISOString().split('T')[0];
    const day = d.toLocaleDateString('en',{weekday:'short'}).slice(0,2);
    return { label: day, value: records.filter(r=>(r.interview_date||'').startsWith(key)).length };
  });

  main.innerHTML = `
    <div class="sa-anim">
      <!-- HERO -->
      <div class="sa-hero">
        <div class="sa-hero-label">Community Health Survey · National Dashboard</div>
        <div class="sa-hero-name">National Dashboard</div>
        <div class="sa-hero-kpi-row">
          <div class="sa-hero-kpi" onclick="_saSwitchView('institutions')" style="cursor:pointer;">
            <div class="sa-hero-kpi-n" style="color:var(--sa-accent2);">${records.length}</div>
            <div class="sa-hero-kpi-l">Surveys</div>
          </div>
          <div class="sa-hero-kpi" onclick="_saSwitchView('institutions')" style="cursor:pointer;">
            <div class="sa-hero-kpi-n" style="color:var(--sa-green);">${institutions.length}</div>
            <div class="sa-hero-kpi-l">Institutions</div>
          </div>
          <div class="sa-hero-kpi" onclick="_saSwitchView('analytics')" style="cursor:pointer;">
            <div class="sa-hero-kpi-n" style="color:${quality>=80?'var(--sa-green)':quality>=60?'var(--sa-amber)':'var(--sa-red)'};">${quality ? quality+'%' : '—'}</div>
            <div class="sa-hero-kpi-l">Avg Quality</div>
          </div>
          <div class="sa-hero-kpi" onclick="_saSwitchView('people')" style="cursor:pointer;">
            <div class="sa-hero-kpi-n" style="color:var(--sa-purple);">${students.length}</div>
            <div class="sa-hero-kpi-l">Users</div>
          </div>
        </div>
      </div>

      <!-- 7-day chart -->
      <div class="sa-label">7-Day Submission Activity</div>
      <div style="padding:0 16px 14px;">
        <div class="sa-collapse" style="margin-bottom:0;">
          <div style="padding:10px 14px 0;">
            ${_saBarChartSVG(last7,{width:340,height:110,unit:''})}
          </div>
        </div>
      </div>

      <!-- NAV SECTIONS -->
      <div class="sa-label">Sections</div>
      <div class="sa-shelf-grid">
        <button class="sa-nav-card" onclick="_saSwitchView('institutions')">
          <div class="sa-nav-card-icon blue">${_saIcon('institution',17)}</div>
          <div class="sa-nav-card-title">Institutions</div>
          <div class="sa-nav-card-sub">All registered sites &amp; their survey data</div>
          <span class="sa-nav-card-badge">${institutions.length} total</span>
        </button>
        <button class="sa-nav-card" onclick="_saSwitchView('analytics')">
          <div class="sa-nav-card-icon green">${_saIcon('analytics',17)}</div>
          <div class="sa-nav-card-title">Analytics</div>
          <div class="sa-nav-card-sub">National health indicators &amp; trends</div>
          <span class="sa-nav-card-badge">${records.length} surveys</span>
        </button>
        <button class="sa-nav-card" onclick="_saSwitchView('people')">
          <div class="sa-nav-card-icon amber">${_saIcon('people',17)}</div>
          <div class="sa-nav-card-title">People</div>
          <div class="sa-nav-card-sub">Admins, enumerators &amp; accounts</div>
          <span class="sa-nav-card-badge">${students.length} registered</span>
        </button>
        <button class="sa-nav-card" onclick="_saSwitchView('export')">
          <div class="sa-nav-card-icon purple">${_saIcon('export',17)}</div>
          <div class="sa-nav-card-title">Export</div>
          <div class="sa-nav-card-sub">Reports, CSV downloads &amp; risk data</div>
          ${riskHigh>0 ? `<span class="sa-nav-card-badge alert">${riskHigh} high risk</span>` : ''}
        </button>
      </div>

      <!-- NATIONAL SNAPSHOT -->
      <div class="sa-label">National Snapshot</div>
      <div class="sa-stat-rows">
        <button class="sa-stat-row" onclick="_saSwitchView('institutions')">
          <div class="sa-stat-row-left"><div class="sa-stat-dot green"></div><span class="sa-stat-label">Total Surveys Collected</span></div>
          <div style="display:flex;align-items:center;"><span class="sa-stat-value">${records.length}</span><span class="sa-stat-arrow">${_saIcon('chevron_right',16)}</span></div>
        </button>
        <button class="sa-stat-row" onclick="_saSwitchView('analytics')">
          <div class="sa-stat-row-left"><div class="sa-stat-dot amber"></div><span class="sa-stat-label">Submitted Today (National)</span></div>
          <div style="display:flex;align-items:center;"><span class="sa-stat-value">${todayN}</span><span class="sa-stat-arrow">${_saIcon('chevron_right',16)}</span></div>
        </button>
        <button class="sa-stat-row" onclick="_saSwitchView('institutions')">
          <div class="sa-stat-row-left"><div class="sa-stat-dot blue"></div><span class="sa-stat-label">Active Institutions</span></div>
          <div style="display:flex;align-items:center;"><span class="sa-stat-value">${institutions.length}</span><span class="sa-stat-arrow">${_saIcon('chevron_right',16)}</span></div>
        </button>
        <button class="sa-stat-row" onclick="_saSwitchView('people')">
          <div class="sa-stat-row-left"><div class="sa-stat-dot blue"></div><span class="sa-stat-label">Institution Admins</span></div>
          <div style="display:flex;align-items:center;"><span class="sa-stat-value">${admins}</span><span class="sa-stat-arrow">${_saIcon('chevron_right',16)}</span></div>
        </button>
        <button class="sa-stat-row" onclick="_saSwitchView('people')">
          <div class="sa-stat-row-left"><div class="sa-stat-dot green"></div><span class="sa-stat-label">Registered Enumerators</span></div>
          <div style="display:flex;align-items:center;"><span class="sa-stat-value">${enumerators}</span><span class="sa-stat-arrow">${_saIcon('chevron_right',16)}</span></div>
        </button>
        ${riskHigh > 0 ? `
        <button class="sa-stat-row" onclick="_saSwitchView('export')">
          <div class="sa-stat-row-left"><div class="sa-stat-dot red"></div><span class="sa-stat-label">High Risk Households</span></div>
          <div style="display:flex;align-items:center;"><span class="sa-stat-value" style="color:var(--sa-red);">${riskHigh}</span><span class="sa-stat-arrow">${_saIcon('chevron_right',16)}</span></div>
        </button>` : ''}
      </div>

      <!-- QUICK ACTIONS -->
      <div class="sa-label">Quick Actions</div>
      <div class="sa-action-rows">
        <button class="sa-action-row" onclick="if(typeof exportSurveysAsCSV==='function')exportSurveysAsCSV(_saData.records)">
          <div class="sa-action-icon">${_saIcon('download',16,'var(--sa-accent)')}</div>
          <span class="sa-action-label">Export All Surveys (CSV)</span>
          ${_saIcon('chevron_right',16,'var(--sa-dim)')}
        </button>
        <button class="sa-action-row" onclick="_saExportAnalyticsReport()">
          <div class="sa-action-icon">${_saIcon('analytics',16,'var(--sa-green)')}</div>
          <span class="sa-action-label">Generate Analytics Report</span>
          ${_saIcon('chevron_right',16,'var(--sa-dim)')}
        </button>
        <button class="sa-action-row" onclick="_saLoadAll().then(_saRenderHomePage)">
          <div class="sa-action-icon">${_saIcon('refresh',16,'var(--sa-amber)')}</div>
          <span class="sa-action-label">Refresh All Data</span>
          ${_saIcon('chevron_right',16,'var(--sa-dim)')}
        </button>
      </div>
    </div>
  `;
}

// ─── SECTION SWITCHER ────────────────────────────────────────────────────────

function _saSwitchView(view) {
  const main = document.getElementById('sa-main-content');
  if (!main) return;

  const titles = {
    institutions: 'All Institutions',
    analytics:    'National Analytics',
    people:       'Users & People',
    export:       'Export & Reports',
    settings:     'Settings',
  };

  main.style.cssText = 'display:flex;flex-direction:column;flex:1;overflow:hidden;';
  main.innerHTML = `
    <div class="sa-view-header">
      <button class="sa-back-btn" onclick="_saGoHome()">${_saIcon('chevron_right',14,'currentColor')} <span style="transform:scaleX(-1);display:inline-block;">Back</span></button>
      <span class="sa-view-title">${titles[view]||view}</span>
    </div>
    <div id="sa-view-body" style="flex:1;overflow-y:auto;padding:14px 16px 50px;scrollbar-width:thin;scrollbar-color:var(--sa-dim) transparent;">
      <div style="text-align:center;padding:24px;color:var(--sa-muted);">Loading…</div>
    </div>
  `;

  const body = document.getElementById('sa-view-body');
  switch(view) {
    case 'institutions': _saTabInstitutions(body); break;
    case 'analytics':    _saTabAnalytics(body);    break;
    case 'people':       _saTabUsers(body);         break;
    case 'export':       _saTabExport(body);        break;
    case 'settings':     _saTabSettings(body);      break;
  }
}

function _saGoHome() {
  const main = document.getElementById('sa-main-content');
  if (!main) return;
  main.style.cssText = 'flex:1;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--sa-dim) transparent;';
  main.className = '';
  _saRenderHomePage();
}

// ─── DATA LOADING ─────────────────────────────────────────────────────────────

let _saData = { records: [], institutions: [], students: [] };

async function _saLoadAll() {
  const [recordsData, studentsData, dashboardData, instListData] = await Promise.all([
    window.HS.HSAdmin.getRecords(null).catch(() => ({ records: [] })),
    window.HS.HSAdmin.getStudents(null).catch(() => ({ students: [] })),
    window.HS.HSAdmin.dashboard().catch(() => ({ institutions: [] })),
    window.HS.HSAdmin.getInstitutions().catch(() => ({ institutions: [] })),
  ]);

  // Merge: dashboard institutions (have survey stats) enriched with getInstitutions name data.
  // getInstitutions joins institution_profiles so inst_name is available even if
  // the institutions table name column is a placeholder.
  const instListMap = Object.fromEntries(
    (instListData.institutions || []).map(i => [i.id, i])
  );
  const dashInsts = dashboardData.institutions || [];

  // Build a unified list: prefer dashboard (has stats), fill gaps from instListMap.
  // Also include any institutions that are in instListMap but not in dashboard
  // (e.g. institutions with zero surveys that dashboard skips).
  const dashIds = new Set(dashInsts.map(i => i.id));
  const extraInsts = (instListData.institutions || []).filter(i => !dashIds.has(i.id));
  const mergedInstitutions = [
    ...dashInsts.map(inst => ({
      ...inst,
      // Prefer inst_name from profile over the bare name in institutions table
      display_name: instListMap[inst.id]?.inst_name || inst.name || inst.id,
    })),
    ...extraInsts.map(inst => ({
      ...inst,
      display_name: inst.inst_name || inst.name || inst.id,
      total_records: 0, avg_risk_score: null,
    })),
  ];

  _saData = {
    records:      recordsData.records || [],
    students:     studentsData.students || [],
    institutions: mergedInstitutions,
  };
  if (typeof computeSurveyMetrics === 'function' && _saData.records.length) {
    window.saMetrics = computeSurveyMetrics(_saData.records);
  }
}

// ─── TAB: Institutions ───────────────────────────────────────────────────────

function _saTabInstitutions(el) {
  const { institutions, records, students } = _saData;
  if (!institutions.length) {
    el.innerHTML = '<div class="sa-empty">No institutions registered yet.</div>';
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  const instStats = institutions.map(inst => {
    const recs   = records.filter(r => r.institution_id === inst.id);
    const studs  = students.filter(s => s.institution_id === inst.id);
    const ivs    = new Set(recs.map(r => r.interviewer_name||r.interviewer).filter(Boolean)).size;
    const todayN = recs.filter(r => (r.interview_date||'').startsWith(today)).length;
    const label  = inst.display_name || inst.inst_name || inst.name || inst.id;
    return { inst, recs, studs, ivs, todayN, label };
  }).sort((a,b) => b.recs.length - a.recs.length);

  // Summary table at top
  const tableRows = instStats.map(({inst,recs,studs,ivs,todayN,label},i) => `
    <tr onclick="_saViewInstData('${inst.id}','${label.replace(/'/g,"\\'")}')">
      <td><span style="font-size:.62rem;color:var(--sa-muted);">${i+1}</span></td>
      <td>
        <div style="font-weight:700;font-size:.8rem;">${label}</div>
        <div style="font-size:.65rem;color:var(--sa-muted);">${inst.code||'—'}${inst.county ? ' · '+inst.county : ''}${inst.sub_county ? ' / '+inst.sub_county : ''}</div>
        ${inst.admin_name ? `<div style="font-size:.63rem;color:var(--sa-muted);margin-top:1px;">👤 ${inst.admin_name}</div>` : ''}
      </td>
      <td style="text-align:center;font-weight:800;color:var(--sa-accent2);">${recs.length}</td>
      <td style="text-align:center;">${todayN > 0 ? `<span class="badge badge-green">${todayN}</span>` : `<span style="color:var(--sa-muted);font-size:.7rem;">—</span>`}</td>
      <td style="text-align:center;">${ivs}</td>
      <td style="text-align:center;">${studs.length}</td>
      <td style="text-align:center;color:var(--sa-muted);">${_saIcon('chevron_right',14)}</td>
    </tr>`).join('');

  const chartData = instStats.slice(0,6).map(({inst,recs}) => ({
    label: (inst.name||'?').split(' ')[0].slice(0,8),
    value: recs.length
  }));

  el.innerHTML = `
    <div class="sa-anim">
      <!-- Summary chart -->
      <div class="sa-collapse" style="margin-bottom:12px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon blue">${_saIcon('analytics',16,'var(--sa-accent)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Survey Distribution by Institution</div>
            <div class="sa-collapse-hdr-sub">Top 6 institutions</div>
          </div>
          <div class="sa-collapse-hdr-arrow">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body">
          ${_saBarChartSVG(chartData,{width:340,height:130,unit:''})}
        </div>
      </div>

      <!-- Summary table -->
      <div class="sa-collapse" style="margin-bottom:12px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon blue">${_saIcon('institution',16,'var(--sa-accent)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">All Institutions</div>
            <div class="sa-collapse-hdr-sub">${institutions.length} registered · tap row for detail</div>
          </div>
          <div class="sa-collapse-hdr-arrow open">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body open">
          <div class="sa-table-wrap">
            <table class="sa-table">
              <thead><tr>
                <th>#</th><th>Institution</th><th>Surveys</th><th>Today</th><th>IVs</th><th>Users</th><th></th>
              </tr></thead>
              <tbody>${tableRows}</tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Per-institution cards -->
      <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:1px;color:var(--sa-muted);padding:4px 0 10px;font-weight:700;">Detail Cards</div>
      ${instStats.map(({inst,recs,studs,ivs,todayN,label}) => `
        <div class="sa-collapse">
          <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
            <div style="background:linear-gradient(135deg,var(--sa-accent),#1d4ed8);color:#fff;font-weight:800;font-size:.65rem;padding:3px 8px;border-radius:6px;flex-shrink:0;">${inst.code||'?'}</div>
            <div class="sa-collapse-hdr-text" style="margin-left:10px;">
              <div class="sa-collapse-hdr-title">${label}</div>
              <div class="sa-collapse-hdr-sub">${recs.length} surveys · ${studs.length} users${inst.county ? ' · '+inst.county : ''}${inst.sub_county ? ' / '+inst.sub_county : ''}</div>
            </div>
            <div class="sa-collapse-hdr-arrow">${_saIcon('chevron_right',16)}</div>
          </button>
          <div class="sa-collapse-body">
            <div class="sa-mini-grid">
              <div class="sa-mini-stat"><div class="sa-mini-stat-n" style="color:var(--sa-accent2);">${recs.length}</div><div class="sa-mini-stat-l">Surveys</div></div>
              <div class="sa-mini-stat"><div class="sa-mini-stat-n" style="color:var(--sa-green);">${todayN}</div><div class="sa-mini-stat-l">Today</div></div>
              <div class="sa-mini-stat"><div class="sa-mini-stat-n">${ivs}</div><div class="sa-mini-stat-l">IVs</div></div>
              <div class="sa-mini-stat"><div class="sa-mini-stat-n">${studs.length}</div><div class="sa-mini-stat-l">Users</div></div>
              <div class="sa-mini-stat"><div class="sa-mini-stat-n">${Array.isArray(inst.village_list) ? inst.village_list.length : 0}</div><div class="sa-mini-stat-l">Villages</div></div>
              <div class="sa-mini-stat"><div class="sa-mini-stat-n" style="font-size:.65rem;">${inst.login_date||'—'}</div><div class="sa-mini-stat-l">Last Login</div></div>
            </div>
            ${inst.admin_name || inst.contact_email || inst.county ? `
            <div style="font-size:.72rem;color:var(--sa-muted);padding:6px 0 8px;border-top:1px solid var(--sa-border);margin-top:4px;display:flex;flex-direction:column;gap:3px;">
              ${inst.admin_name    ? `<span>👤 Admin: <strong style="color:var(--sa-text)">${inst.admin_name}</strong></span>` : ''}
              ${inst.contact_email ? `<span>✉️ ${inst.contact_email}</span>` : ''}
              ${inst.county        ? `<span>📍 ${inst.county}${inst.sub_county ? ' / '+inst.sub_county : ''}${inst.ward ? ' / '+inst.ward : ''}</span>` : ''}
              ${Array.isArray(inst.village_list) && inst.village_list.length ? `<span>🏘️ ${inst.village_list.slice(0,5).join(', ')}${inst.village_list.length>5?' …':''}</span>` : ''}
            </div>` : ''}
            <div style="display:flex;gap:8px;">
              <button onclick="_saViewInstData('${inst.id}','${label.replace(/'/g,"\\'")}') "
                style="flex:1;padding:9px;background:rgba(46,124,246,.12);color:var(--sa-accent2);border:1px solid rgba(46,124,246,.2);border-radius:9px;font-family:inherit;font-size:.76rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;">
                ${_saIcon('survey',14)} View Surveys
              </button>
              <button onclick="_saExportInst('${inst.id}')"
                style="flex:1;padding:9px;background:var(--sa-generic-btn-bg);color:var(--sa-text);border:1px solid var(--sa-border);border-radius:9px;font-family:inherit;font-size:.76rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;">
                ${_saIcon('download',14)} Export CSV
              </button>
            </div>
          </div>
        </div>`).join('')}
    </div>`;
}

function _saToggleCollapse(btn) {
  const body = btn.nextElementSibling;
  const arrow = btn.querySelector('.sa-collapse-hdr-arrow');
  if (!body) return;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  if (arrow) arrow.classList.toggle('open', !isOpen);
}

function _saViewInstData(instId, instName) {
  const recs = _saData.records.filter(r => r.institution_id === instId);
  const el = document.getElementById('sa-view-body');
  el.innerHTML = `
    <button onclick="_saSwitchView('institutions')"
      style="background:none;border:none;color:var(--sa-accent2);cursor:pointer;font-size:.8rem;font-weight:700;padding:0 0 14px;display:flex;align-items:center;gap:6px;">
      ${_saIcon('chevron_right',14)} <span style="transform:scaleX(-1);display:inline-block;">Institutions</span>
    </button>
    <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:1px;color:var(--sa-muted);font-weight:700;margin-bottom:10px;">${instName} — ${recs.length} Surveys</div>

    <div style="display:flex;gap:8px;margin-bottom:12px;align-items:center;">
      <div class="sa-search-wrap" style="flex:1;">
        <span class="sa-search-icon">${_saIcon('filter',14)}</span>
        <input id="sa-inst-search" class="sa-search" placeholder="Search location or name…" oninput="_saFilterInstRecs('${instId}')">
      </div>
      <button onclick="_saExportInst('${instId}')"
        style="padding:9px 13px;background:var(--sa-accent);color:#fff;border:none;border-radius:9px;cursor:pointer;font-size:.74rem;font-family:inherit;font-weight:700;display:flex;align-items:center;gap:6px;white-space:nowrap;">
        ${_saIcon('download',14)} CSV
      </button>
    </div>
    <div id="sa-inst-recs"></div>`;
  _saFilterInstRecs(instId);
}

function _saFilterInstRecs(instId) {
  const q    = (document.getElementById('sa-inst-search')?.value||'').toLowerCase();
  const recs = _saData.records.filter(r => r.institution_id === instId);
  const fil  = q ? recs.filter(r =>
    (r.interview_location||r.location||'').toLowerCase().includes(q) ||
    (r.interviewer_name||r.interviewer||'').toLowerCase().includes(q)
  ) : recs;

  const el = document.getElementById('sa-inst-recs');
  if (!el) return;

  const rows = fil.slice(0,60).map(r => `
    <tr>
      <td><span style="font-size:.74rem;font-weight:600;">${r.interview_location||r.location||'Unknown'}</span></td>
      <td style="color:var(--sa-muted);font-size:.72rem;">${r.interviewer_name||r.interviewer||'—'}</td>
      <td style="color:var(--sa-muted);font-size:.7rem;white-space:nowrap;">${(r.interview_date||(r.synced_at||'').slice(0,10))}</td>
    </tr>`).join('');

  el.innerHTML = `
    <div style="font-size:.65rem;color:var(--sa-muted);margin-bottom:8px;font-weight:600;">Showing ${Math.min(fil.length,60)} of ${fil.length} records</div>
    <div class="sa-table-wrap">
      <table class="sa-table">
        <thead><tr><th>Location</th><th>Interviewer</th><th>Date</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    ${fil.length>60?`<div style="text-align:center;font-size:.72rem;color:var(--sa-muted);padding:8px;">+${fil.length-60} more — export CSV for full list</div>`:''}`;
}

function _saExportInst(instId) {
  const recs = _saData.records.filter(r => r.institution_id === instId);
  if (typeof exportSurveysAsCSV === 'function') exportSurveysAsCSV(recs);
}

// ─── TAB: Analytics ──────────────────────────────────────────────────────────

function _saTabAnalytics(el) {
  const metrics = window.saMetrics;
  const recs    = _saData.records;
  if (!recs.length) { el.innerHTML = '<div class="sa-empty">No survey data across any institution yet.</div>'; return; }
  if (!metrics) {
    el.innerHTML = '<div style="text-align:center;padding:24px;color:var(--sa-muted);">Computing metrics…</div>';
    if (typeof computeSurveyMetrics === 'function') { window.saMetrics = computeSurveyMetrics(recs); _saTabAnalytics(el); }
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

  const infraData = [
    {label:'Perm. House', value: infra.pct_permanent_house||0},
    {label:'Latrine',     value: infra.pct_pit_latrine||0},
    {label:'Water Trtd',  value: infra.pct_water_treated||0},
    {label:'Electric',    value: infra.pct_electricity||0},
    {label:'Imp. Water',  value: infra.pct_improved_water||0},
  ];
  const healthData = [
    {label:'HIV Aware',   value: health.pct_hiv_aware||0},
    {label:'HIV Tested',  value: health.pct_hiv_tested||0},
    {label:'Facility',    value: health.pct_consult_facility||0},
    {label:'Immunised',   value: mat.pct_immunised||0},
    {label:'Fac. Birth',  value: mat.pct_facility_delivery||0},
  ];

  el.innerHTML = `
    <div class="sa-anim">

      <!-- Population overview -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon green">${_saIcon('people',16,'var(--sa-green)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Population Overview</div>
            <div class="sa-collapse-hdr-sub">${recs.length} surveys across all institutions</div>
          </div>
          <div class="sa-collapse-hdr-arrow open">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body open">
          <div class="sa-metric-grid">
            <div class="sa-metric good"><div class="sa-metric-n">${metrics.summary?.total_population||'—'}</div><div class="sa-metric-l">Population</div></div>
            <div class="sa-metric good"><div class="sa-metric-n">${metrics.summary?.avg_hh_size||'—'}</div><div class="sa-metric-l">Avg HH Size</div></div>
            <div class="sa-metric good"><div class="sa-metric-n">${metrics.summary?.total_locations||'—'}</div><div class="sa-metric-l">Locations</div></div>
          </div>
          <div class="sa-table-wrap">
            <table class="sa-table">
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
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon blue">${_saIcon('institution',16,'var(--sa-accent)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Infrastructure Coverage</div>
            <div class="sa-collapse-hdr-sub">Housing, sanitation &amp; utilities</div>
          </div>
          <div class="sa-collapse-hdr-arrow open">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body open">
          ${_saHBarSVG(infraData, {width:300, barH:14, gap:10})}
          <div class="sa-divider"></div>
          ${_saProgressRows([
            ['Permanent Houses', infra.pct_permanent_house],
            ['Pit Latrine Access', infra.pct_pit_latrine],
            ['Water Treated', infra.pct_water_treated],
            ['Electricity Access', infra.pct_electricity],
            ['Improved Water Source', infra.pct_improved_water],
          ])}
        </div>
      </div>

      <!-- Health Indicators -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon green">${_saIcon('health',16,'var(--sa-green)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Health Indicators</div>
            <div class="sa-collapse-hdr-sub">HIV, consultation &amp; chronic illness</div>
          </div>
          <div class="sa-collapse-hdr-arrow">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body">
          ${_saHBarSVG(healthData, {width:300, barH:14, gap:10})}
          <div class="sa-divider"></div>
          ${_saProgressRows([
            ['HIV Awareness', health.pct_hiv_aware],
            ['HIV Testing Coverage', health.pct_hiv_tested],
            ['Facility Consultation', health.pct_consult_facility],
            ['No Chronic Illness', 100-(health.pct_chronic_illness||0)],
          ])}
          <div class="sa-divider"></div>
          <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.8px;color:var(--sa-muted);font-weight:700;margin-bottom:8px;">Top Illnesses</div>
          ${(health.top_illnesses||[]).slice(0,10).map(ill => `
            <div class="sa-disease-item">
              <span class="sa-disease-name">${ill.name}</span>
              <div class="sa-disease-track"><div class="sa-disease-fill" style="width:${Math.min(ill.pct,100)}%;"></div></div>
              <span class="sa-disease-count">${ill.count}</span>
            </div>`).join('')}
        </div>
      </div>

      <!-- Maternal & Nutrition -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon amber">${_saIcon('nutrition',16,'var(--sa-amber)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Maternal &amp; Nutrition</div>
            <div class="sa-collapse-hdr-sub">Immunisation, delivery &amp; food security</div>
          </div>
          <div class="sa-collapse-hdr-arrow">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body">
          ${_saProgressRows([
            ['Children Immunised', mat.pct_immunised],
            ['Facility Delivery', mat.pct_facility_delivery],
            ['Food Sufficiency', nutr.pct_food_sufficient],
            ['Not Skipping Meals', 100-(nutr.pct_skipping_meals||0)],
          ])}
          <div class="sa-divider"></div>
          <div class="sa-table-wrap">
            <table class="sa-table">
              <thead><tr><th>Indicator</th><th>Value</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>Food Sufficiency</td><td style="font-weight:700;">${nutr.pct_food_sufficient??'—'}%</td><td>${_saBadge(nutr.pct_food_sufficient)}</td></tr>
                <tr><td>Households Skipping Meals</td><td style="font-weight:700;">${nutr.pct_skipping_meals??'—'}%</td><td>${_saBadgeInv(nutr.pct_skipping_meals)}</td></tr>
                <tr><td>Average Meals Per Day</td><td style="font-weight:700;">${nutr.avg_meals_per_day??'—'}</td><td>—</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Environmental -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon green">${_saIcon('water',16,'var(--sa-teal)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Environmental</div>
            <div class="sa-collapse-hdr-sub">Mosquito nets, drainage &amp; hygiene</div>
          </div>
          <div class="sa-collapse-hdr-arrow">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body">
          ${_saProgressRows([
            ['Mosquito Net Owned', env.pct_mosquito_net],
            ['Net In Use', env.pct_net_in_use],
            ['No Drainage Issues', 100-(env.pct_drainage_issues||0)],
          ])}
        </div>
      </div>

      <!-- Risk Profiles -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon" style="background:rgba(239,68,68,.15);">${_saIcon('risk',16,'var(--sa-red)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Risk Profiles (National)</div>
            <div class="sa-collapse-hdr-sub">${riskH} high · ${riskM} moderate</div>
          </div>
          <div class="sa-collapse-hdr-arrow">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body">
          <!-- Donut -->
          <div class="sa-donut-row">
            ${_saDonutSVG([
              {value:riskH||1, color:'#ef4444', label:'High'},
              {value:riskM||1, color:'#f59e0b', label:'Moderate'},
              {value:Math.max(riskL,1), color:'#22c55e', label:'Low/Normal'},
            ], 80)}
            <div class="sa-donut-legend">
              <div class="sa-donut-legend-item"><div class="sa-donut-dot" style="background:#ef4444;"></div><span>${riskH} High Risk</span></div>
              <div class="sa-donut-legend-item"><div class="sa-donut-dot" style="background:#f59e0b;"></div><span>${riskM} Moderate</span></div>
              <div class="sa-donut-legend-item"><div class="sa-donut-dot" style="background:#22c55e;"></div><span>${Math.max(riskL,0)} Low/Normal</span></div>
              <div class="sa-donut-legend-item"><div class="sa-donut-dot" style="background:var(--sa-accent);"></div><span>${(metrics.recommendations||[]).length} Actions</span></div>
            </div>
          </div>
          <div class="sa-divider"></div>
          ${(metrics.recommendations||[]).slice(0,5).map(rec => `
            <div class="sa-rec ${rec.priority==='CRITICAL'?'critical':rec.priority==='HIGH'?'high':'medium'}">
              <div class="sa-rec-title">${rec.priority} · ${rec.category}</div>
              <div class="sa-rec-body">${rec.issue}<br><span style="color:var(--sa-accent2);">&#8594; ${rec.action}</span> <span style="color:var(--sa-muted);font-size:.7rem;">(${rec.households_affected} households)</span></div>
            </div>`).join('')}
        </div>
      </div>

      <!-- Full metrics table -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon blue">${_saIcon('survey',16,'var(--sa-accent)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Full Metrics Table</div>
            <div class="sa-collapse-hdr-sub">All indicators at a glance</div>
          </div>
          <div class="sa-collapse-hdr-arrow">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body">
          <div class="sa-table-wrap">
            <table class="sa-table">
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
                    <td><span class="sa-tag">${cat}</span></td>
                    <td style="font-size:.76rem;">${lbl}</td>
                    <td style="font-weight:700;">${pct??'—'}%</td>
                    <td>${_saBadge(pct)}</td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
}

function _saProgressRows(pairs) {
  return pairs.map(([label, pct]) => {
    const v = pct ?? 0;
    const col = v>=80?'var(--sa-green)':v>=60?'var(--sa-amber)':'var(--sa-red)';
    return `<div class="sa-progress">
      <div class="sa-progress-header">
        <span class="sa-progress-label">${label}</span>
        <span class="sa-progress-pct" style="color:${col};">${v}%</span>
      </div>
      <div class="sa-progress-track"><div class="sa-progress-fill" style="width:${v}%;background:${col};"></div></div>
    </div>`;
  }).join('');
}

function _saBadge(pct) {
  const v = pct ?? 0;
  if (v >= 80) return `<span class="badge badge-green">Good</span>`;
  if (v >= 60) return `<span class="badge badge-amber">Fair</span>`;
  return `<span class="badge badge-red">Attention</span>`;
}
function _saBadgeInv(pct) {
  const v = pct ?? 0;
  if (v <= 20) return `<span class="badge badge-green">Good</span>`;
  if (v <= 40) return `<span class="badge badge-amber">Fair</span>`;
  return `<span class="badge badge-red">High</span>`;
}

// ─── TAB: Users ──────────────────────────────────────────────────────────────

function _saDeleteUser(regNumber, name) {
  if (!confirm(`Delete "${name}"?\n\nThis removes their account permanently. Survey records are kept.\n\nCannot be undone.`)) return;
  window.HS.HSAdmin.deleteStudent(regNumber)
    .then(() => {
      _saData.students = _saData.students.filter(s => s.reg_number !== regNumber);
      const body = document.getElementById('sa-view-body');
      if (body) _saTabUsers(body);
    })
    .catch(err => alert('Delete failed: ' + (err.message || err)));
}

function _saDeleteUserAndRecords(regNumber, name) {
  if (!confirm(`Delete "${name}" AND all their survey records?\n\nCannot be undone.`)) return;
  const theirRecords = (_saData.records||[]).filter(r => r.interviewer_name===name || r.submitted_by===regNumber);
  Promise.all(theirRecords.map(r => window.HS.HSAdmin.deleteRecord(r.id).catch(()=>{})))
    .then(() => window.HS.HSAdmin.deleteStudent(regNumber))
    .then(() => {
      _saData.students = _saData.students.filter(s => s.reg_number !== regNumber);
      _saData.records  = _saData.records.filter(r => r.interviewer_name !== name && r.submitted_by !== regNumber);
      const body = document.getElementById('sa-view-body');
      if (body) _saTabUsers(body);
    })
    .catch(err => alert('Delete failed: ' + (err.message || err)));
}

function _saTabUsers(el) {
  const { students, institutions, records } = _saData;
  // Build name map from merged institutions — use display_name (profile inst_name > table name)
  const instMap = Object.fromEntries(
    institutions.map(i => [i.id, i.display_name || i.inst_name || i.name || i.id])
  );
  const admins  = students.filter(s => s.role === 'institution_admin');
  const enums   = students.filter(s => s.role !== 'institution_admin');

  const recCountMap = {};
  records.forEach(r => {
    const key = r.interviewer_name || r.submitted_by || '?';
    recCountMap[key] = (recCountMap[key] || 0) + 1;
  });

  const userRow = (s, isAdmin) => {
    const name = s.full_name || s.name || 'Unknown';
    const safeName = name.replace(/'/g,"\\'");
    const recCount = recCountMap[name] || 0;
    return `
      <div class="sa-user-row">
        <div class="sa-user-avatar ${isAdmin?'':'dim'}">${name.charAt(0).toUpperCase()}</div>
        <div style="flex:1;min-width:0;">
          <div class="sa-user-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</div>
          <div class="sa-user-sub">${s.reg_number||''} · ${instMap[s.institution_id]||'—'} · ${recCount} surveys</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0;">
          <button class="sa-del-btn" onclick="_saDeleteUser('${s.reg_number}','${safeName}')">
            ${_saIcon('delete',11)} Account
          </button>
          <button class="sa-del-btn" onclick="_saDeleteUserAndRecords('${s.reg_number}','${safeName}')">
            ${_saIcon('delete',11)} + Records
          </button>
        </div>
      </div>`;
  };

  // Per-institution grouping for enumerators
  const enumByInst = {};
  enums.forEach(s => {
    const k = s.institution_id || '__none__';
    if (!enumByInst[k]) enumByInst[k] = [];
    enumByInst[k].push(s);
  });

  el.innerHTML = `
    <div class="sa-anim">

      <!-- Summary table -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon blue">${_saIcon('analytics',16,'var(--sa-accent)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">User Summary</div>
            <div class="sa-collapse-hdr-sub">${students.length} total accounts</div>
          </div>
          <div class="sa-collapse-hdr-arrow open">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body open">
          <div class="sa-metric-grid">
            <div class="sa-metric good"><div class="sa-metric-n">${admins.length}</div><div class="sa-metric-l">Inst. Admins</div></div>
            <div class="sa-metric good"><div class="sa-metric-n">${enums.length}</div><div class="sa-metric-l">Enumerators</div></div>
            <div class="sa-metric good"><div class="sa-metric-n">${students.length}</div><div class="sa-metric-l">Total Users</div></div>
          </div>
          <div class="sa-table-wrap">
            <table class="sa-table">
              <thead><tr><th>Institution</th><th>Admins</th><th>Enumerators</th><th>Total</th></tr></thead>
              <tbody>
                ${institutions.map(inst => {
                  const ia = admins.filter(s=>s.institution_id===inst.id).length;
                  const ie = enums.filter(s=>s.institution_id===inst.id).length;
                  return `<tr>
                    <td style="font-size:.78rem;font-weight:600;">${inst.name}</td>
                    <td style="text-align:center;">${ia}</td>
                    <td style="text-align:center;">${ie}</td>
                    <td style="text-align:center;font-weight:700;">${ia+ie}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Institution Admins -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon amber">${_saIcon('shield',16,'var(--sa-amber)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Institution Admins</div>
            <div class="sa-collapse-hdr-sub">${admins.length} total</div>
          </div>
          <div class="sa-collapse-hdr-arrow open">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body open">
          ${!admins.length ? '<div class="sa-empty">No institution admins yet.</div>' : admins.map(s=>userRow(s,true)).join('')}
        </div>
      </div>

      <!-- Enumerators -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon green">${_saIcon('people',16,'var(--sa-green)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Enumerators</div>
            <div class="sa-collapse-hdr-sub">${enums.length} total across all institutions</div>
          </div>
          <div class="sa-collapse-hdr-arrow">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body">
          ${!enums.length ? '<div class="sa-empty">No enumerators registered yet.</div>' :
            Object.entries(enumByInst).map(([instId, slist]) => {
              const iname = instMap[instId] || 'Unassigned';
              return `<div style="margin-bottom:14px;">
                <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--sa-muted);margin-bottom:8px;">${iname} (${slist.length})</div>
                ${slist.map(s=>userRow(s,false)).join('')}
              </div>`;
            }).join('')}
        </div>
      </div>

      <div style="font-size:.67rem;color:var(--sa-muted);text-align:center;padding:8px 0;">Account — removes login only &nbsp;·&nbsp; + Records — removes login and all their surveys</div>
    </div>`;
}

// ─── TAB: Export & Reports ────────────────────────────────────────────────────

function _saTabExport(el) {
  const risks = (window.saMetrics?.risk_profiles||[]).filter(r=>r.level==='HIGH'||r.level==='MODERATE');
  el.innerHTML = `
    <div class="sa-anim">

      <!-- All surveys export -->
      <div class="sa-label" style="padding:0 0 8px;">National Data</div>
      <button class="sa-export-btn" onclick="if(typeof exportSurveysAsCSV==='function')exportSurveysAsCSV(_saData.records)">
        <div class="sa-export-btn-icon" style="background:rgba(46,124,246,.12);">${_saIcon('download',16,'var(--sa-accent)')}</div>
        <div>
          <div class="sa-export-btn-text-main">All Surveys — National CSV</div>
          <div class="sa-export-btn-text-sub">${_saData.records.length} records · All institutions</div>
        </div>
      </button>

      <button class="sa-export-btn" onclick="_saExportAnalyticsReport()">
        <div class="sa-export-btn-icon" style="background:rgba(34,197,94,.12);">${_saIcon('analytics',16,'var(--sa-green)')}</div>
        <div>
          <div class="sa-export-btn-text-main">Analytics Report (Print / PDF)</div>
          <div class="sa-export-btn-text-sub">Health indicators, risks &amp; recommendations</div>
        </div>
      </button>

      <!-- Per-institution -->
      <div class="sa-collapse" style="margin-bottom:10px;margin-top:8px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon blue">${_saIcon('institution',16,'var(--sa-accent)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Per-Institution Export</div>
            <div class="sa-collapse-hdr-sub">${_saData.institutions.length} institutions</div>
          </div>
          <div class="sa-collapse-hdr-arrow open">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body open">
          <div class="sa-table-wrap">
            <table class="sa-table">
              <thead><tr><th>Institution</th><th>Surveys</th><th>Export</th></tr></thead>
              <tbody>
                ${_saData.institutions.map(inst => {
                  const n = _saData.records.filter(r=>r.institution_id===inst.id).length;
                  return `<tr>
                    <td style="font-size:.78rem;font-weight:600;">${inst.name} <span style="color:var(--sa-muted);font-size:.65rem;">(${inst.code||'?'})</span></td>
                    <td style="text-align:center;font-weight:700;">${n}</td>
                    <td>
                      <button onclick="_saExportInst('${inst.id}')"
                        style="padding:4px 10px;background:rgba(46,124,246,.12);color:var(--sa-accent2);border:1px solid rgba(46,124,246,.2);border-radius:6px;cursor:pointer;font-size:.67rem;font-weight:700;font-family:inherit;display:flex;align-items:center;gap:4px;">
                        ${_saIcon('download',12)} CSV
                      </button>
                    </td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Risk data -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon" style="background:rgba(239,68,68,.12);">${_saIcon('risk',16,'var(--sa-red)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Risk Household Data</div>
            <div class="sa-collapse-hdr-sub">${risks.filter(r=>r.level==='HIGH').length} high · ${risks.filter(r=>r.level==='MODERATE').length} moderate</div>
          </div>
          <div class="sa-collapse-hdr-arrow">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body">
          ${!risks.length ? '<div class="sa-empty">No risk data available. Run analytics first.</div>' : `
            <div class="sa-metric-grid" style="margin-bottom:12px;">
              <div class="sa-metric bad"><div class="sa-metric-n">${risks.filter(r=>r.level==='HIGH').length}</div><div class="sa-metric-l">High Risk</div></div>
              <div class="sa-metric warn"><div class="sa-metric-n">${risks.filter(r=>r.level==='MODERATE').length}</div><div class="sa-metric-l">Moderate</div></div>
              <div class="sa-metric"><div class="sa-metric-n">${risks.length}</div><div class="sa-metric-l">Total Flagged</div></div>
            </div>
            <div class="sa-table-wrap">
              <table class="sa-table">
                <thead><tr><th>Location</th><th>Interviewer</th><th>Score</th><th>Level</th><th>Factors</th></tr></thead>
                <tbody>
                  ${risks.slice(0,20).map(r=>`
                    <tr>
                      <td style="font-size:.76rem;">${r.location||'—'}</td>
                      <td style="font-size:.72rem;color:var(--sa-muted);">${r.interviewer||'—'}</td>
                      <td style="font-weight:700;">${r.score||'—'}</td>
                      <td><span class="badge ${r.level==='HIGH'?'badge-red':'badge-amber'}">${r.level}</span></td>
                      <td style="font-size:.68rem;color:var(--sa-muted);">${(r.factors||[]).slice(0,2).join(', ')}</td>
                    </tr>`).join('')}
                </tbody>
              </table>
            </div>
            ${risks.length>20?`<div style="text-align:center;font-size:.72rem;color:var(--sa-muted);padding:6px;">+${risks.length-20} more in full export</div>`:''}
          `}
        </div>
      </div>
    </div>`;
}

function _saRiskInline() {
  const risks = (window.saMetrics?.risk_profiles||[]).filter(r=>r.level==='HIGH'||r.level==='MODERATE');
  if (!risks.length) return '<div style="color:var(--sa-muted);font-size:.8rem;">No risk data available yet.</div>';
  return `
    <div class="sa-metric-grid" style="margin-bottom:10px;">
      <div class="sa-metric bad"><div class="sa-metric-n">${risks.filter(r=>r.level==='HIGH').length}</div><div class="sa-metric-l">High Risk</div></div>
      <div class="sa-metric warn"><div class="sa-metric-n">${risks.filter(r=>r.level==='MODERATE').length}</div><div class="sa-metric-l">Moderate</div></div>
    </div>
    ${risks.slice(0,5).map(r=>`
      <div class="sa-rec ${r.level==='HIGH'?'critical':'high'}" style="margin-bottom:7px;">
        <div class="sa-rec-title">${r.location} — ${r.level}</div>
        <div class="sa-rec-body">${r.interviewer||'—'} · Score: ${r.score} · ${(r.factors||[]).join(', ')||'—'}</div>
      </div>`).join('')}
    ${risks.length>5?`<div style="text-align:center;font-size:.75rem;color:var(--sa-muted);margin-top:6px;">+${risks.length-5} more households</div>`:''}`;
}

// ─── TAB: Settings ────────────────────────────────────────────────────────────

function _saTabSettings(el) {
  el.innerHTML = `
    <div class="sa-anim">

      <!-- System overview -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon blue">${_saIcon('analytics',16,'var(--sa-accent)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">System Overview</div>
            <div class="sa-collapse-hdr-sub">Current data state</div>
          </div>
          <div class="sa-collapse-hdr-arrow open">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body open">
          <div class="sa-metric-grid">
            <div class="sa-metric good"><div class="sa-metric-n">${_saData.institutions.length}</div><div class="sa-metric-l">Institutions</div></div>
            <div class="sa-metric good"><div class="sa-metric-n">${_saData.records.length}</div><div class="sa-metric-l">Surveys</div></div>
            <div class="sa-metric good"><div class="sa-metric-n">${_saData.students.length}</div><div class="sa-metric-l">Users</div></div>
          </div>
          <div class="sa-table-wrap">
            <table class="sa-table">
              <thead><tr><th>Metric</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Institutions</td><td style="font-weight:700;">${_saData.institutions.length}</td></tr>
                <tr><td>Total Survey Records</td><td style="font-weight:700;">${_saData.records.length}</td></tr>
                <tr><td>Institution Admins</td><td style="font-weight:700;">${_saData.students.filter(s=>s.role==='institution_admin').length}</td></tr>
                <tr><td>Enumerators</td><td style="font-weight:700;">${_saData.students.filter(s=>s.role!=='institution_admin').length}</td></tr>
                <tr><td>Analytics Quality Score</td><td style="font-weight:700;">${window.saMetrics?.data_quality?.overall_quality_score??'—'}%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Admin actions -->
      <div class="sa-collapse" style="margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon blue">${_saIcon('settings',16,'var(--sa-accent)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Admin Actions</div>
            <div class="sa-collapse-hdr-sub">Theme, data refresh &amp; exports</div>
          </div>
          <div class="sa-collapse-hdr-arrow open">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body open" style="display:flex;flex-direction:column;gap:8px;">
          <button onclick="_saToggleTheme()"
            style="width:100%;padding:12px;background:var(--sa-generic-btn-bg);color:var(--sa-text);border:1px solid var(--sa-border);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.83rem;font-weight:600;display:flex;align-items:center;gap:10px;">
            <span style="display:flex;">${_saIcon('settings',16,'var(--sa-muted)')}</span> Toggle Light / Dark Mode
          </button>
          <button onclick="if(typeof exportSurveysAsCSV==='function')exportSurveysAsCSV(_saData.records)"
            style="width:100%;padding:12px;background:rgba(46,124,246,.12);color:var(--sa-accent2);border:1px solid rgba(46,124,246,.2);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.83rem;font-weight:700;display:flex;align-items:center;gap:10px;">
            ${_saIcon('download',16,'var(--sa-accent)')} Export All Data (CSV)
          </button>
          <button onclick="_saLoadAll().then(_saRenderHomePage)"
            style="width:100%;padding:12px;background:var(--sa-generic-btn-bg);color:var(--sa-text);border:1px solid var(--sa-border);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.83rem;font-weight:600;display:flex;align-items:center;gap:10px;">
            ${_saIcon('refresh',16,'var(--sa-amber)')} Refresh All Data
          </button>
        </div>
      </div>

      <!-- Danger zone -->
      <div class="sa-danger-section">
        <div class="sa-danger-hdr">
          <div class="sa-danger-hdr-title">Survey Cycle Reset</div>
          <div class="sa-danger-hdr-sub">Delete data to prepare for next cycle. Always export first.</div>
        </div>
        <div class="sa-danger-body">
          <div class="sa-danger-notice">These actions are permanent and cannot be undone. Export your data via CSV before deleting. Deleting survey records does not delete user accounts unless you delete them separately.</div>

          <button id="sa-del-records-btn" class="sa-danger-btn">
            ${_saIcon('delete',15,'#fca5a5')} Delete All Survey Records
            <span class="sa-danger-btn-sub">${_saData.records.length} records · keeps user accounts</span>
          </button>

          <button id="sa-del-enumerators-btn" class="sa-danger-btn">
            ${_saIcon('delete',15,'#fca5a5')} Delete All Enumerators
            <span class="sa-danger-btn-sub">${_saData.students.filter(s=>s.role!=='institution_admin').length} enumerator accounts</span>
          </button>

          <button id="sa-del-inst-admins-btn" class="sa-danger-btn">
            ${_saIcon('delete',15,'#fca5a5')} Delete All Institution Admins
            <span class="sa-danger-btn-sub">${_saData.students.filter(s=>s.role==='institution_admin').length} admin accounts</span>
          </button>

          <button id="sa-del-all-btn" class="sa-danger-btn full">
            ${_saIcon('warning',15,'#fff')} Full Reset — Delete Everything
            <span class="sa-danger-btn-sub">Records + all users · prepares for fresh cycle</span>
          </button>
        </div>
      </div>

      <!-- Account -->
      <div class="sa-collapse" style="margin-top:10px;margin-bottom:10px;">
        <button class="sa-collapse-hdr" onclick="_saToggleCollapse(this)">
          <div class="sa-collapse-hdr-icon" style="background:rgba(239,68,68,.1);">${_saIcon('signout',16,'var(--sa-red)')}</div>
          <div class="sa-collapse-hdr-text">
            <div class="sa-collapse-hdr-title">Account</div>
            <div class="sa-collapse-hdr-sub">Sign out of super admin</div>
          </div>
          <div class="sa-collapse-hdr-arrow open">${_saIcon('chevron_right',16)}</div>
        </button>
        <div class="sa-collapse-body open">
          <button id="sa-settings-signout"
            style="width:100%;padding:12px;background:rgba(239,68,68,.08);color:#fca5a5;border:1px solid rgba(239,68,68,.2);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.83rem;font-weight:700;display:flex;align-items:center;justify-content:center;gap:10px;">
            ${_saIcon('signout',15,'#fca5a5')} Sign Out
          </button>
        </div>
      </div>
    </div>`;

  document.getElementById('sa-settings-signout')?.addEventListener('click', () => {
    if (!confirm('Sign out and return to the login screen?\n\nLocal records are kept safely.')) return;
    ['chsa_auth','chsa_user_name','chsa_is_admin_bypass','chsa_is_inst_admin'].forEach(k=>localStorage.removeItem(k));
    document.getElementById('super-admin-dashboard')?.remove();
    location.reload();
  });

  document.getElementById('sa-del-records-btn')?.addEventListener('click', async () => {
    if (!confirm(`Delete ALL ${_saData.records.length} survey records?\n\nUser accounts will NOT be deleted.\n\nThis cannot be undone. Have you exported your data?`)) return;
    const c = prompt('Type DELETE to confirm:');
    if (c !== 'DELETE') { alert('Cancelled.'); return; }
    let d=0, f=0;
    for (const r of _saData.records) { try { await window.HS.HSAdmin.deleteRecord(r.id); d++; } catch { f++; } }
    alert(`Done.\n${d} records deleted${f?`\n${f} failed`:''}`);
    await _saLoadAll(); _saSwitchView('settings');
  });

  document.getElementById('sa-del-enumerators-btn')?.addEventListener('click', async () => {
    const enums = _saData.students.filter(s => s.role !== 'institution_admin');
    if (!confirm(`Delete ALL ${enums.length} enumerator accounts?\n\nThis cannot be undone.`)) return;
    const c = prompt('Type DELETE to confirm:');
    if (c !== 'DELETE') { alert('Cancelled.'); return; }
    let d=0, f=0;
    for (const s of enums) { try { await window.HS.HSAdmin.deleteStudent(s.reg_number); d++; } catch { f++; } }
    alert(`Done.\n${d} enumerators deleted${f?`\n${f} failed`:''}`);
    await _saLoadAll(); _saSwitchView('settings');
  });

  document.getElementById('sa-del-inst-admins-btn')?.addEventListener('click', async () => {
    const admins = _saData.students.filter(s => s.role === 'institution_admin');
    if (!confirm(`Delete ALL ${admins.length} institution admin accounts?\n\nThis cannot be undone.`)) return;
    const c = prompt('Type DELETE to confirm:');
    if (c !== 'DELETE') { alert('Cancelled.'); return; }
    let d=0, f=0;
    for (const s of admins) { try { await window.HS.HSAdmin.deleteStudent(s.reg_number); d++; } catch { f++; } }
    alert(`Done.\n${d} admins deleted${f?`\n${f} failed`:''}`);
    await _saLoadAll(); _saSwitchView('settings');
  });

  document.getElementById('sa-del-all-btn')?.addEventListener('click', async () => {
    if (!confirm(`FULL RESET\n\nThis will permanently delete:\n- All ${_saData.records.length} survey records\n- All ${_saData.students.length} user accounts\n\nHave you exported your data?`)) return;
    const c = prompt('Type RESET to confirm full deletion:');
    if (c !== 'RESET') { alert('Cancelled.'); return; }
    let rd=0, rf=0, ud=0, uf=0;
    for (const r of _saData.records) { try { await window.HS.HSAdmin.deleteRecord(r.id); rd++; } catch { rf++; } }
    for (const s of _saData.students) { try { await window.HS.HSAdmin.deleteStudent(s.reg_number); ud++; } catch { uf++; } }
    alert(`Full reset complete.\n${rd} records deleted${rf?` (${rf} failed)`:''}\n${ud} users deleted${uf?` (${uf} failed)`:''}`);
    await _saLoadAll(); _saSwitchView('settings');
  });
}

// ─── ANALYTICS REPORT (print window) ─────────────────────────────────────────

function _saExportAnalyticsReport() {
  const m = window.saMetrics;
  if (!m) { alert('Analytics not computed yet — check the Analytics section.'); return; }
  const i = m.infrastructure||{};
  const h = m.health||{};
  const n = m.nutrition||{};
  const mat = m.maternal_child||{};
  const recs = m.recommendations||[];

  const win = window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>National Analytics Report</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&family=DM+Serif+Display&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'DM Sans',sans-serif;background:#e8ede9;color:#111;padding:20px;}
    .page{width:8.5in;background:#fff;margin:0 auto 20px;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.15);}
    .page-header{background:linear-gradient(135deg,#0e3d22,#0d2137);color:#fff;padding:28px 32px;}
    .page-title{font-family:'DM Serif Display',serif;font-size:1.5rem;margin-bottom:4px;}
    .page-sub{font-size:.75rem;opacity:.7;letter-spacing:.3px;}
    .page-body{padding:24px 32px;}
    h2{font-size:.85rem;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:#0e3d22;border-left:3px solid #3db86a;padding-left:10px;margin:20px 0 12px;}
    table{width:100%;border-collapse:collapse;margin-bottom:16px;font-size:.82rem;}
    td,th{border:1px solid #e0e0e0;padding:8px 10px;}
    th{background:#0e3d22;color:#fff;font-weight:700;font-size:.72rem;text-transform:uppercase;letter-spacing:.4px;}
    .ok{color:#1e8449;font-weight:700;}.warn{color:#e67e22;font-weight:700;}.bad{color:#c0392b;font-weight:700;}
    .rec{border-radius:8px;padding:10px 13px;margin-bottom:8px;font-size:.82rem;}
    .rec-critical{background:#fdecea;border-left:4px solid #c0392b;}
    .rec-high{background:#fef5e7;border-left:4px solid #e67e22;}
    .rec-medium{background:#e4f5ec;border-left:4px solid #3db86a;}
    .rec-label{font-weight:800;margin-bottom:3px;}
    @media print{
      *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;}
      body{background:#fff!important;padding:0!important;}
      .page{box-shadow:none!important;border-radius:0!important;width:100%!important;page-break-after:always;}
      .no-print{display:none!important;}
    }
    @page{size:A4 portrait;margin:12mm 14mm;}
  </style></head><body>
  <div class="page">
    <div class="page-header">
      <div class="page-title">Medical Survey System</div>
      <div class="page-sub">National Analytics Report · Generated ${new Date().toLocaleDateString('en-KE',{weekday:'long',year:'numeric',month:'long',day:'numeric'})} · ${m.summary?.total_surveys||0} surveys · ${m.summary?.total_population||0} population</div>
    </div>
    <div class="page-body">
      <h2>Infrastructure Coverage</h2>
      <table><thead><tr><th>Indicator</th><th>Coverage</th><th>Status</th></tr></thead><tbody>
      ${[['Permanent Houses',i.pct_permanent_house],['Pit Latrine Access',i.pct_pit_latrine],['Water Treated',i.pct_water_treated],['Electricity Access',i.pct_electricity],['Improved Water Source',i.pct_improved_water]].map(([lbl,pct])=>
        `<tr><td>${lbl}</td><td>${pct??'—'}%</td><td class="${(pct??0)>=80?'ok':(pct??0)>=60?'warn':'bad'}">${(pct??0)>=80?'Good':(pct??0)>=60?'Fair':'Attention Needed'}</td></tr>`).join('')}
      </tbody></table>

      <h2>Health Indicators</h2>
      <table><thead><tr><th>Indicator</th><th>Coverage</th><th>Status</th></tr></thead><tbody>
      ${[['HIV Awareness',h.pct_hiv_aware],['HIV Testing',h.pct_hiv_tested],['Facility Consultation',h.pct_consult_facility],['Children Immunised',mat.pct_immunised],['Facility Delivery',mat.pct_facility_delivery]].map(([lbl,pct])=>
        `<tr><td>${lbl}</td><td>${pct??'—'}%</td><td class="${(pct??0)>=80?'ok':(pct??0)>=60?'warn':'bad'}">${(pct??0)>=80?'Good':(pct??0)>=60?'Fair':'Attention Needed'}</td></tr>`).join('')}
      </tbody></table>

      <h2>Nutrition &amp; Food Security</h2>
      <table><thead><tr><th>Indicator</th><th>Value</th></tr></thead><tbody>
        <tr><td>Food Sufficiency</td><td>${n.pct_food_sufficient??'—'}%</td></tr>
        <tr><td>Households Skipping Meals</td><td>${n.pct_skipping_meals??'—'}%</td></tr>
        <tr><td>Average Meals Per Day</td><td>${n.avg_meals_per_day??'—'}</td></tr>
      </tbody></table>

      <h2>Recommendations</h2>
      ${recs.map(r=>`<div class="rec rec-${r.priority.toLowerCase()}">
        <div class="rec-label">${r.priority} · ${r.category}</div>
        <div>${r.issue}</div>
        <div style="margin-top:4px;color:#555;font-size:.78rem;">&#8594; ${r.action} <span style="opacity:.6;">(${r.households_affected} households)</span></div>
      </div>`).join('')}

      <h2>Top Illnesses</h2>
      <table><thead><tr><th>Illness</th><th>Cases</th><th>% of Households</th></tr></thead><tbody>
      ${(h.top_illnesses||[]).slice(0,10).map(ill=>`<tr><td>${ill.name}</td><td>${ill.count}</td><td>${ill.pct}%</td></tr>`).join('')}
      </tbody></table>
    </div>
  </div>
  <div class="no-print" style="text-align:center;margin:16px 0 20px;">
    <button onclick="window.print()" style="display:inline-flex;align-items:center;gap:7px;padding:12px 28px;background:#0e3d22;color:#fff;border:none;border-radius:8px;font-family:inherit;font-size:.9rem;font-weight:700;cursor:pointer;">&#128438; Print / Save as PDF</button>
    <div style="font-size:7pt;color:#888;margin-top:6px;">Browser Print &rarr; Save as PDF &rarr; A4 Portrait</div>
  </div>
  </body></html>`);
  win.document.close();
}

// ─── CSV EXPORT ───────────────────────────────────────────────────────────────

function exportSurveysAsCSV(records) {
  if (!records || !records.length) { alert('No survey records to export.'); return; }
  const cols = ['record_id','interviewer','interview_date','location','institution_id','respondent_age','respondent_gender','marital_status','education','occupation','house_type','roof_type','floor_type','wall_type','lighting','fuel','rooms','water_source','water_treated','water_container','waste_disposal','drainage','latrine','latrine_type','handwashing','hiv_heard','hiv_tested','hiv_protect','illnesses','chronic_illness','consultation','consult_where','deaths_5yr','deaths_count','pregnancy_status','anc_visits','delivery_place','children_under5','immunisation','meals_per_day','skips_meals','food_enough','mosquito_net','net_used','rodents','cockroaches','health_problems','health_priority','challenge_1','challenge_2','challenge_3','interview_summary','consent','synced_at'];
  const esc = v => { const s=String(v==null?'':v).replace(/"/g,'""'); return s.includes(',')||s.includes('"')||s.includes('\n')?`"${s}"`:s; };
  const csv = [cols.join(','),...records.map(r=>cols.map(c=>esc(r[c])).join(','))].join('\n');
  const blob = new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob);
  a.download=`surveys_national_${new Date().toISOString().slice(0,10)}.csv`; a.click();
}

// ─── THEME TOGGLE ─────────────────────────────────────────────────────────────

function _saToggleTheme() {
  const dash = document.getElementById('super-admin-dashboard');
  if (!dash) return;
  dash.classList.toggle('sa-light');
  localStorage.setItem('sa_theme', dash.classList.contains('sa-light') ? 'light' : 'dark');
}
