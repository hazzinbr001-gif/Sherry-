/* Medical Survey System — Super Admin Dashboard © 2026
 * REDESIGNED: Matches premium dark-blue glassmorphism UI with profile picture support
 * HazzinBR · Great Lakes University · Nyamache
 */

// ─── PROFILE PICTURE HELPERS ────────────────────────────────────────────────
function _saGetProfilePic() {
  return localStorage.getItem('chsa_super_admin_avatar') || null;
}

function _saSetProfilePic(dataUrl) {
  localStorage.setItem('chsa_super_admin_avatar', dataUrl);
}

function _saGetAdminName() {
  try {
    const s = JSON.parse(localStorage.getItem('chsa_session') || '{}');
    return s.name || s.full_name || s.email?.split('@')[0] || 'Super Admin';
  } catch(e) { return 'Super Admin'; }
}

// ─── AUTH ───────────────────────────────────────────────────────────────────
function isSuperAdmin() {
  const bypass = localStorage.getItem('chsa_is_admin_bypass') === '1';
  if (bypass) return true;
  try {
    const s = JSON.parse(localStorage.getItem('chsa_session') || '{}');
    return s.role === 'super_admin';
  } catch(e) { return false; }
}

function initSuperAdminDashboard() {
  if (!isSuperAdmin()) return;
  _renderSuperAdminDashboard();
  setTimeout(function(){ if(typeof checkAppVersion==='function') checkAppVersion(); }, 3000);
}

function _phLogoSVGSA() {
  return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2 L12 8"/>
    <path d="M12 8 C12 8 7 10 7 14 C7 17 9.5 19 12 19 C14.5 19 17 17 17 14 C17 10 12 8 12 8Z"/>
    <path d="M9 13.5 L11 15.5 L15 11"/>
  </svg>`;
}

// ─── MAIN RENDER ────────────────────────────────────────────────────────────
function _renderSuperAdminDashboard() {
  const existing = document.getElementById('super-admin-dashboard');
  if (existing) existing.remove();
  const home = document.getElementById('home-page');
  if (home) home.style.display = 'none';

  const dash = document.createElement('div');
  dash.id = 'super-admin-dashboard';
  dash.style.cssText = 'position:fixed;inset:0;background:#04080f;display:flex;flex-direction:column;z-index:9999;font-family:var(--font-body,\'Sora\',sans-serif);overflow:hidden;';

  const pic = _saGetProfilePic();
  const avatarHTML = pic
    ? `<img src="${pic}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid rgba(37,99,235,.6);cursor:pointer;" onclick="_saOpenProfileModal()" title="Change profile picture">`
    : `<div onclick="_saOpenProfileModal()" title="Upload profile picture" style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#2563eb,#0d9488);display:flex;align-items:center;justify-content:center;cursor:pointer;border:2px solid rgba(37,99,235,.4);font-size:.8rem;font-weight:800;color:#fff;flex-shrink:0;">${_saGetAdminName().charAt(0).toUpperCase()}</div>`;

  dash.innerHTML = `
    <style>
      #super-admin-dashboard * { box-sizing:border-box; }
      @keyframes sa-spin { to { transform:rotate(360deg); } }
      @keyframes sa-fadeup { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
      @keyframes sa-pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }
      @keyframes sa-ticker-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      @keyframes sa-count-up { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
      @keyframes sa-shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }

      #sa-header {
        background: linear-gradient(135deg,#000510 0%,#050d1e 60%,#040c1a 100%);
        border-bottom: 1px solid rgba(37,99,235,.18);
        padding: 14px 16px 12px;
        flex-shrink: 0;
        position: relative;
        z-index: 10;
      }
      .sa-live-dot { animation:sa-pulse-dot 2s ease-in-out infinite; }
      .sa-card-in { animation:sa-fadeup .45s ease both; }
      .sa-count { animation:sa-count-up .7s ease both; }

      /* ── Stat cards ── */
      .sa-big-stat {
        background: rgba(255,255,255,.05);
        border: 1px solid rgba(255,255,255,.09);
        border-radius: 16px;
        padding: 15px 10px;
        text-align: center;
        backdrop-filter: blur(10px);
      }
      .sa-big-stat:hover { background:rgba(37,99,235,.1); border-color:rgba(37,99,235,.3); transition:.2s; }

      /* ── Metric cards ── */
      .sa-metric {
        border-radius: 14px;
        padding: 14px 12px;
        animation: sa-fadeup .45s ease both;
      }

      /* ── Ticker ── */
      .sa-ticker-wrap {
        overflow: hidden;
        width: 100%;
        background: linear-gradient(90deg,#030810,#060f1e,#030810);
        border-top: 1px solid rgba(37,99,235,.2);
        border-bottom: 1px solid rgba(37,99,235,.2);
        flex-shrink: 0;
      }
      .sa-ticker-track {
        display: flex;
        white-space: nowrap;
        animation: sa-ticker-scroll 34s linear infinite;
      }
      .sa-ticker-track:hover { animation-play-state:paused; }
      .sa-ticker-item {
        display: inline-flex;
        align-items: center;
        padding: 9px 28px;
        font-size: .72rem;
        color: rgba(255,255,255,.6);
        border-right: 1px solid rgba(255,255,255,.07);
        flex-shrink: 0;
        gap: 6px;
      }
      .sa-ticker-item strong { color: #60a5fa; }

      /* ── Institution pill ── */
      .sa-inst-pill {
        background: rgba(255,255,255,.03);
        border: 1px solid rgba(255,255,255,.08);
        border-radius: 14px;
        padding: 13px 14px;
        cursor: pointer;
        animation: sa-fadeup .4s ease both;
        transition: background .2s, border-color .2s;
      }
      .sa-inst-pill:active, .sa-inst-pill:hover { background:rgba(37,99,235,.1); border-color:rgba(37,99,235,.3); }

      /* ── Section nav buttons ── */
      .sa-nav-btn {
        border: none;
        border-radius: 14px;
        padding: 16px 12px;
        cursor: pointer;
        text-align: left;
        transition: transform .15s, box-shadow .15s;
        font-family: inherit;
      }
      .sa-nav-btn:active { transform:scale(.97); }

      /* ── Quick action buttons ── */
      .sa-qact-btn {
        width: 100%;
        padding: 13px 16px;
        background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.08);
        border-radius: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: inherit;
        text-align: left;
        transition: background .15s, border-color .15s;
        color: inherit;
      }
      .sa-qact-btn:active, .sa-qact-btn:hover { background:rgba(37,99,235,.1); border-color:rgba(37,99,235,.3); }

      /* ── Tab bar ── */
      #sa-tab-bar {
        display: flex;
        background: rgba(4,8,15,.95);
        border-top: 1px solid rgba(255,255,255,.07);
        padding: 8px 4px 12px;
        flex-shrink: 0;
        backdrop-filter: blur(20px);
        position: relative;
        z-index: 10;
      }
      .sa-tab {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        padding: 6px 4px;
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
        transition: all .2s;
        border-radius: 10px;
        color: rgba(255,255,255,.35);
      }
      .sa-tab.active { color: #60a5fa; }
      .sa-tab:active { transform:scale(.95); }
      .sa-tab-icon { font-size: 1.35rem; line-height: 1; }
      .sa-tab-label { font-size: .55rem; font-weight: 700; letter-spacing: .4px; text-transform: uppercase; }

      /* ── Profile modal ── */
      #sa-profile-modal {
        position: fixed; inset: 0; z-index: 99999;
        background: rgba(0,0,0,.75);
        display: flex; align-items: flex-end; justify-content: center;
        backdrop-filter: blur(4px);
      }
      .sa-modal-sheet {
        background: linear-gradient(160deg,#0d1826 0%,#080f1a 100%);
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 24px 24px 0 0;
        padding: 24px 20px 36px;
        width: 100%;
        max-width: 480px;
        animation: sa-fadeup .3s ease;
      }

      /* ── Loading skeleton ── */
      .sa-skeleton {
        background: linear-gradient(90deg,rgba(255,255,255,.04) 25%,rgba(255,255,255,.08) 50%,rgba(255,255,255,.04) 75%);
        background-size: 400px 100%;
        animation: sa-shimmer 1.5s infinite;
        border-radius: 10px;
      }

      /* Scrollbar */
      #sa-scroll-area::-webkit-scrollbar { width: 3px; }
      #sa-scroll-area::-webkit-scrollbar-track { background: transparent; }
      #sa-scroll-area::-webkit-scrollbar-thumb { background: rgba(37,99,235,.3); border-radius: 99px; }

      /* Inner views */
      .sa-view-header {
        background: linear-gradient(135deg,#2563eb 0%,#0d9488 55%,#4ade80 100%);
        padding: 14px 16px;
        flex-shrink: 0;
      }
      .sa-back-btn {
        background: rgba(255,255,255,.15);
        border: 1px solid rgba(255,255,255,.25);
        color: #fff;
        border-radius: 9px;
        padding: 7px 13px;
        font-size: .78rem;
        cursor: pointer;
        font-family: inherit;
        font-weight: 700;
      }
      .sa-back-btn:active { transform:scale(.96); }
    </style>

    <!-- ══ HEADER ══ -->
    <div id="sa-header">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="./medisync-logo.png" alt="MSS" style="height:28px;width:auto;filter:drop-shadow(0 1px 8px rgba(37,99,235,.5));" onerror="this.style.display='none'">
          <div>
            <div style="font-size:.8rem;font-weight:800;color:#fff;letter-spacing:-.01em;">Super Admin Dashboard</div>
            <div style="display:flex;align-items:center;gap:5px;margin-top:2px;">
              <div class="sa-live-dot" style="width:6px;height:6px;border-radius:50%;background:#22c55e;flex-shrink:0;"></div>
              <span style="font-size:.55rem;color:rgba(255,255,255,.4);letter-spacing:.3px;">Ministry Level · Live</span>
            </div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button onclick="_saSwitchView('settings')" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:rgba(255,255,255,.7);border-radius:9px;padding:6px 10px;font-size:.7rem;cursor:pointer;font-family:inherit;font-weight:700;">⚙</button>
          <div id="sa-avatar-wrap">${avatarHTML}</div>
        </div>
      </div>
    </div>

    <!-- ══ SCROLL AREA ══ -->
    <div id="sa-main-content" style="flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;" id="sa-scroll-area">
      <!-- filled by _saRenderHomePage or _saSwitchView -->
    </div>

    <!-- ══ BOTTOM TAB BAR ══ -->
    <div id="sa-tab-bar">
      <button class="sa-tab active" id="sa-tab-home" onclick="_saGoHome()">
        <span class="sa-tab-icon">🏠</span>
        <span class="sa-tab-label">Dashboard</span>
      </button>
      <button class="sa-tab" id="sa-tab-institutions" onclick="_saTabNav('institutions')">
        <span class="sa-tab-icon">🏥</span>
        <span class="sa-tab-label">Institutions</span>
      </button>
      <button class="sa-tab" id="sa-tab-people" onclick="_saTabNav('people')">
        <span class="sa-tab-icon">👥</span>
        <span class="sa-tab-label">Users</span>
      </button>
      <button class="sa-tab" id="sa-tab-export" onclick="_saTabNav('export')">
        <span class="sa-tab-icon">📊</span>
        <span class="sa-tab-label">Reports</span>
      </button>
      <button class="sa-tab" id="sa-tab-settings" onclick="_saTabNav('settings')">
        <span class="sa-tab-icon">⚙️</span>
        <span class="sa-tab-label">Settings</span>
      </button>
    </div>

    <!-- ══ LOADING OVERLAY ══ -->
    <div id="sa-loading" style="position:absolute;inset:0;background:rgba(4,8,15,.94);display:flex;align-items:center;justify-content:center;z-index:20;">
      <div style="text-align:center;">
        <div style="width:38px;height:38px;border:3px solid rgba(37,99,235,.3);border-top-color:#2563eb;border-radius:50%;animation:sa-spin 1s linear infinite;margin:0 auto 14px;"></div>
        <div style="font-size:.82rem;font-weight:600;color:rgba(255,255,255,.6);">Loading institutions…</div>
      </div>
    </div>`;

  document.body.appendChild(dash);

  _saLoadAll().then(() => {
    document.getElementById('sa-loading').style.display = 'none';
    _saRenderHomePage();
  }).catch(e => {
    document.getElementById('sa-loading').style.display = 'none';
    document.getElementById('sa-main-content').innerHTML =
      `<div style="text-align:center;padding:48px 24px;color:rgba(255,255,255,.6);">
        <div style="font-size:2.5rem;margin-bottom:12px;">⚠️</div>
        <div style="font-weight:700;color:#fff;margin-bottom:6px;font-size:.95rem;">Failed to load data</div>
        <div style="font-size:.78rem;margin-bottom:20px;">${e.message||'Network error — check connection'}</div>
        <button onclick="_saLoadAll().then(()=>{document.getElementById('sa-loading').style.display='none';_saRenderHomePage()}).catch(()=>{})"
          style="padding:11px 24px;background:linear-gradient(135deg,#2563eb,#0d9488);color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:700;">
          Retry
        </button>
      </div>`;
  });
}

// ─── PROFILE PICTURE MODAL ───────────────────────────────────────────────────
function _saOpenProfileModal() {
  const existing = document.getElementById('sa-profile-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'sa-profile-modal';
  modal.onclick = function(e) { if(e.target===this) _saCloseProfileModal(); };
  modal.innerHTML = `
    <div class="sa-modal-sheet">
      <div style="width:40px;height:4px;background:rgba(255,255,255,.15);border-radius:99px;margin:0 auto 20px;"></div>
      <div style="text-align:center;margin-bottom:20px;">
        <div id="sa-modal-avatar-preview" style="width:88px;height:88px;border-radius:50%;margin:0 auto 10px;overflow:hidden;border:3px solid rgba(37,99,235,.5);background:linear-gradient(135deg,#2563eb,#0d9488);display:flex;align-items:center;justify-content:center;">
          ${_saGetProfilePic()
            ? `<img src="${_saGetProfilePic()}" style="width:100%;height:100%;object-fit:cover;">`
            : `<span style="font-size:2rem;font-weight:800;color:#fff;">${_saGetAdminName().charAt(0).toUpperCase()}</span>`}
        </div>
        <div style="font-size:.95rem;font-weight:800;color:#fff;">${_saGetAdminName()}</div>
        <div style="font-size:.65rem;color:rgba(255,255,255,.4);margin-top:2px;">Super Admin · Ministry Level</div>
      </div>

      <input type="file" id="sa-pic-file-input" accept="image/*" style="display:none;" onchange="_saHandlePicUpload(this)">

      <button onclick="document.getElementById('sa-pic-file-input').click()"
        style="width:100%;padding:14px;background:linear-gradient(135deg,#2563eb,#0d9488);color:#fff;border:none;border-radius:12px;cursor:pointer;font-family:inherit;font-size:.88rem;font-weight:800;margin-bottom:10px;">
        📷 Upload Profile Picture
      </button>

      ${_saGetProfilePic() ? `
      <button onclick="_saRemoveProfilePic()"
        style="width:100%;padding:12px;background:rgba(220,38,38,.12);color:#f87171;border:1px solid rgba(220,38,38,.25);border-radius:12px;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:700;margin-bottom:10px;">
        🗑 Remove Picture
      </button>` : ''}

      <button onclick="_saCloseProfileModal()"
        style="width:100%;padding:12px;background:rgba(255,255,255,.06);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.09);border-radius:12px;cursor:pointer;font-family:inherit;font-size:.82rem;font-weight:600;">
        Cancel
      </button>
    </div>`;

  document.body.appendChild(modal);
}

function _saCloseProfileModal() {
  const modal = document.getElementById('sa-profile-modal');
  if (modal) modal.remove();
}

function _saHandlePicUpload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 3 * 1024 * 1024) {
    alert('Image too large. Please choose a photo under 3 MB.');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    // Compress/resize to max 200×200
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const max = 200;
      let w = img.width, h = img.height;
      if (w > h) { if(w>max){h=Math.round(h*max/w);w=max;} }
      else { if(h>max){w=Math.round(w*max/h);h=max;} }
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      _saSetProfilePic(dataUrl);
      _saCloseProfileModal();
      _saRefreshAvatar();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function _saRemoveProfilePic() {
  if (!confirm('Remove your profile picture?')) return;
  localStorage.removeItem('chsa_super_admin_avatar');
  _saCloseProfileModal();
  _saRefreshAvatar();
}

function _saRefreshAvatar() {
  const wrap = document.getElementById('sa-avatar-wrap');
  if (!wrap) return;
  const pic = _saGetProfilePic();
  wrap.innerHTML = pic
    ? `<img src="${pic}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid rgba(37,99,235,.6);cursor:pointer;" onclick="_saOpenProfileModal()" title="Change profile picture">`
    : `<div onclick="_saOpenProfileModal()" title="Upload profile picture" style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#2563eb,#0d9488);display:flex;align-items:center;justify-content:center;cursor:pointer;border:2px solid rgba(37,99,235,.4);font-size:.8rem;font-weight:800;color:#fff;flex-shrink:0;">${_saGetAdminName().charAt(0).toUpperCase()}</div>`;
}

// ─── TAB BAR NAVIGATION ──────────────────────────────────────────────────────
function _saSetActiveTab(id) {
  document.querySelectorAll('.sa-tab').forEach(t => t.classList.remove('active'));
  const tab = document.getElementById('sa-tab-' + id);
  if (tab) tab.classList.add('active');
}

function _saTabNav(view) {
  _saSetActiveTab(view);
  _saSwitchViewBody(view);
}

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
function _saRenderHomePage() {
  _saSetActiveTab('home');
  const main = document.getElementById('sa-main-content');
  if (!main) return;
  main.style.cssText = 'flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;';
  main.className = '';

  const { records, institutions, students } = _saData;
  const metrics  = window.saMetrics;
  const quality  = metrics?.data_quality?.overall_quality_score;
  const riskHigh = (metrics?.risk_profiles||[]).filter(r=>r.level==='HIGH').length;
  const today    = new Date().toISOString().split('T')[0];
  const todayN   = records.filter(r=>(r.interview_date||'').startsWith(today)).length;
  const thisWeek = new Date(Date.now()-7*24*60*60*1000).toISOString().split('T')[0];
  const weekN    = records.filter(r=>(r.interview_date||'')>=thisWeek).length;
  const enums    = students.filter(s=>s.role!=='institution_admin').length;
  const admins   = students.filter(s=>s.role==='institution_admin').length;
  const adminName = _saGetAdminName();

  const instStats = institutions.map(inst => {
    const recs = records.filter(r=>r.institution_id===inst.id);
    const newToday = recs.filter(r=>(r.interview_date||'').startsWith(today)).length;
    const newWeek  = recs.filter(r=>(r.interview_date||'')>=thisWeek).length;
    return { ...inst, total: recs.length, newToday, newWeek };
  }).sort((a,b)=>b.total-a.total);

  const tickerItems = [
    ...instStats.map(i=>`🏥 <strong>${i.name}</strong> — ${i.total} surveys · +${i.newWeek} this week`),
    `📊 <strong>National Total</strong> — ${records.length} surveys collected`,
    `👥 <strong>Field Teams</strong> — ${enums} enumerators across ${institutions.length} institutions`,
    `📅 <strong>Today</strong> — ${todayN} new submission${todayN!==1?'s':''} nationwide`,
    riskHigh>0
      ? `🔴 <strong>High Risk</strong> — ${riskHigh} household${riskHigh!==1?'s':''} flagged for follow-up`
      : `✅ <strong>Risk Status</strong> — No critical flags at this time`,
    `🗓 <strong>This Week</strong> — ${weekN} surveys submitted`,
  ];

  main.innerHTML = `
    <!-- ══ HERO SECTION ══ -->
    <div class="sa-card-in" style="background:linear-gradient(160deg,#060f22 0%,#08152e 50%,#050c1c 100%);padding:22px 16px 20px;position:relative;overflow:hidden;">
      <!-- Orbs -->
      <div style="position:absolute;top:-40px;right:-40px;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(37,99,235,.14),transparent 70%);pointer-events:none;"></div>
      <div style="position:absolute;bottom:-30px;left:-20px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(13,148,136,.1),transparent 70%);pointer-events:none;"></div>

      <!-- Welcome -->
      <div style="margin-bottom:18px;">
        <div style="font-size:.6rem;color:rgba(255,255,255,.35);letter-spacing:1.4px;text-transform:uppercase;margin-bottom:3px;">Ministry of Health · National Level</div>
        <div style="font-size:1.4rem;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1.15;">Welcome, ${adminName}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:5px;">
          <div class="sa-live-dot" style="width:6px;height:6px;border-radius:50%;background:#22c55e;flex-shrink:0;"></div>
          <span style="font-size:.62rem;color:rgba(255,255,255,.35);">Live · Last refreshed just now</span>
          <button onclick="_saLoadAll().then(_saRenderHomePage)" style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.5);border-radius:7px;padding:3px 8px;font-size:.6rem;cursor:pointer;font-family:inherit;font-weight:700;margin-left:auto;">↻ Refresh</button>
        </div>
      </div>

      <!-- Big 3 stat chips -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
        <div class="sa-big-stat">
          <div class="sa-count" style="font-size:1.85rem;font-weight:900;color:#fff;line-height:1;">${records.length}</div>
          <div style="font-size:.58rem;color:rgba(255,255,255,.4);margin-top:3px;text-transform:uppercase;letter-spacing:.5px;">Surveys</div>
          <div style="font-size:.6rem;color:#22c55e;margin-top:2px;font-weight:700;">+${todayN} today</div>
        </div>
        <div class="sa-big-stat">
          <div class="sa-count" style="font-size:1.85rem;font-weight:900;color:#fff;line-height:1;">${institutions.length}</div>
          <div style="font-size:.58rem;color:rgba(255,255,255,.4);margin-top:3px;text-transform:uppercase;letter-spacing:.5px;">Institutions</div>
          <div style="font-size:.6rem;color:#60a5fa;margin-top:2px;font-weight:700;">${admins} admins</div>
        </div>
        <div class="sa-big-stat">
          <div class="sa-count" style="font-size:1.85rem;font-weight:900;color:${quality>=80?'#22c55e':quality>=60?'#f59e0b':'#fff'};line-height:1;">${quality ? quality+'%' : '—'}</div>
          <div style="font-size:.58rem;color:rgba(255,255,255,.4);margin-top:3px;text-transform:uppercase;letter-spacing:.5px;">Quality</div>
          <div style="font-size:.6rem;color:#a78bfa;margin-top:2px;font-weight:700;">${enums} field</div>
        </div>
      </div>
    </div>

    <!-- ══ LIVE TICKER ══ -->
    <div class="sa-ticker-wrap">
      <div class="sa-ticker-track">
        ${[...tickerItems,...tickerItems].map(t=>`<span class="sa-ticker-item">📡 ${t}</span>`).join('')}
      </div>
    </div>

    <!-- ══ BODY CONTENT ══ -->
    <div style="padding:16px 14px 24px;">

      <!-- Section label -->
      <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:10px;">National Snapshot</div>

      <!-- 4 metric cards -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:18px;">
        <div class="sa-metric" style="background:linear-gradient(135deg,rgba(5,150,105,.18),rgba(16,185,129,.08));border:1px solid rgba(16,185,129,.2);animation-delay:.05s;">
          <div style="font-size:1.3rem;margin-bottom:4px;">📋</div>
          <div class="sa-count" style="font-size:1.55rem;font-weight:900;color:#34d399;">${records.length}</div>
          <div style="font-size:.68rem;color:#6ee7b7;font-weight:700;margin-top:1px;">Total Surveys</div>
          <div style="font-size:.58rem;color:rgba(52,211,153,.6);margin-top:1px;">+${weekN} this week</div>
        </div>

        <div class="sa-metric" style="background:linear-gradient(135deg,rgba(37,99,235,.18),rgba(96,165,250,.08));border:1px solid rgba(96,165,250,.2);animation-delay:.1s;">
          <div style="font-size:1.3rem;margin-bottom:4px;">🏥</div>
          <div class="sa-count" style="font-size:1.55rem;font-weight:900;color:#93c5fd;">${institutions.length}</div>
          <div style="font-size:.68rem;color:#bfdbfe;font-weight:700;margin-top:1px;">Institutions</div>
          <div style="font-size:.58rem;color:rgba(147,197,253,.6);margin-top:1px;">${admins} inst. admins</div>
        </div>

        <div class="sa-metric" style="background:linear-gradient(135deg,rgba(217,119,6,.18),rgba(251,191,36,.08));border:1px solid rgba(251,191,36,.2);animation-delay:.15s;">
          <div style="font-size:1.3rem;margin-bottom:4px;">📅</div>
          <div class="sa-count" style="font-size:1.55rem;font-weight:900;color:#fcd34d;">${todayN}</div>
          <div style="font-size:.68rem;color:#fde68a;font-weight:700;margin-top:1px;">Today's Surveys</div>
          <div style="font-size:.58rem;color:rgba(252,211,77,.6);margin-top:1px;">Nationwide</div>
        </div>

        <div class="sa-metric" style="background:linear-gradient(135deg,${riskHigh>0?'rgba(220,38,38,.18),rgba(248,113,113,.08));border:1px solid rgba(248,113,113,.2)':'rgba(5,150,105,.18),rgba(74,222,128,.08));border:1px solid rgba(74,222,128,.2)'};animation-delay:.2s;">
          <div style="font-size:1.3rem;margin-bottom:4px;">${riskHigh>0?'🔴':'✅'}</div>
          <div class="sa-count" style="font-size:1.55rem;font-weight:900;color:${riskHigh>0?'#fca5a5':'#86efac'};">${riskHigh}</div>
          <div style="font-size:.68rem;color:${riskHigh>0?'#fecaca':'#bbf7d0'};font-weight:700;margin-top:1px;">High Risk</div>
          <div style="font-size:.58rem;color:${riskHigh>0?'rgba(252,165,165,.6)':'rgba(134,239,172,.6)'};margin-top:1px;">${riskHigh>0?'Needs follow-up':'All clear'}</div>
        </div>
      </div>

      <!-- Analytics Overview header -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;">Analytics Overview</div>
        <button onclick="_saTabNav('export')" style="background:rgba(37,99,235,.15);border:1px solid rgba(37,99,235,.3);color:#60a5fa;border-radius:8px;padding:5px 10px;font-size:.65rem;font-weight:700;cursor:pointer;font-family:inherit;">View Full Analytics ›</button>
      </div>

      <!-- Institution live list -->
      ${!instStats.length ? `
        <div style="background:rgba(255,255,255,.03);border:1.5px dashed rgba(255,255,255,.08);border-radius:14px;padding:24px;text-align:center;margin-bottom:16px;">
          <div style="font-size:2rem;margin-bottom:8px;">🏥</div>
          <div style="font-size:.82rem;font-weight:700;color:rgba(255,255,255,.5);">No institutions yet</div>
        </div>
      ` : `
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:18px;">
          ${instStats.slice(0,4).map((inst, i) => {
            const statusColor = inst.total > 0 ? '#22c55e' : '#6b7280';
            const statusLabel = inst.total > 0 ? 'Active' : 'Inactive';
            const statusBg    = inst.total > 0 ? 'rgba(34,197,94,.15)' : 'rgba(107,114,128,.15)';
            return `
            <div class="sa-inst-pill" onclick="_saTabNav('institutions')" style="animation-delay:${.06*i}s;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:36px;height:36px;border-radius:10px;background:rgba(37,99,235,.15);border:1px solid rgba(37,99,235,.25);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;">🏥</div>
                <div style="flex:1;min-width:0;">
                  <div style="font-weight:800;font-size:.83rem;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${inst.name}</div>
                  <div style="font-size:.62rem;color:rgba(255,255,255,.35);margin-top:2px;">${inst.type||'Hospital'} · ${inst.email||''}</div>
                </div>
                <div style="background:${statusBg};color:${statusColor};font-size:.62rem;font-weight:800;padding:4px 10px;border-radius:99px;flex-shrink:0;border:1px solid ${statusColor}33;">${statusLabel}</div>
              </div>
              ${inst.total > 0 ? `
              <div style="margin-top:9px;background:rgba(255,255,255,.04);border-radius:8px;overflow:hidden;height:4px;">
                <div style="height:100%;width:${Math.min(100,(inst.total/Math.max(...instStats.map(x=>x.total),1))*100)}%;background:linear-gradient(90deg,#2563eb,#0d9488);border-radius:99px;"></div>
              </div>
              <div style="display:flex;justify-content:space-between;margin-top:4px;">
                <span style="font-size:.58rem;color:rgba(255,255,255,.25);">${inst.total} surveys total</span>
                <span style="font-size:.58rem;color:#22c55e;">+${inst.newWeek} this week</span>
              </div>` : ''}
            </div>`;
          }).join('')}
        </div>
      `}

      <!-- Institutions section label -->
      <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:10px;">
        Institutions
        <span style="background:#22c55e;color:#fff;font-size:.5rem;padding:2px 6px;border-radius:99px;margin-left:6px;font-weight:700;">LIVE</span>
        <button onclick="_saTabNav('institutions')" style="float:right;background:none;border:none;cursor:pointer;font-size:.6rem;color:rgba(37,99,235,.7);font-family:inherit;font-weight:700;padding:0;">Manage ›</button>
      </div>

      <!-- Section nav grid (large colorful buttons) -->
      <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:10px;margin-top:8px;">Navigate</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:18px;">
        <button class="sa-nav-btn" onclick="_saTabNav('institutions')" style="background:linear-gradient(135deg,#1e3a8a,#2563eb);box-shadow:0 4px 16px rgba(37,99,235,.3);">
          <div style="font-size:1.5rem;margin-bottom:5px;">🏥</div>
          <div style="font-weight:800;font-size:.83rem;color:#fff;">Institutions</div>
          <div style="font-size:.62rem;color:rgba(255,255,255,.5);margin-top:2px;">${institutions.length} registered</div>
        </button>
        <button class="sa-nav-btn" onclick="_saTabNav('export')" style="background:linear-gradient(135deg,#065f46,#059669);box-shadow:0 4px 16px rgba(5,150,105,.3);">
          <div style="font-size:1.5rem;margin-bottom:5px;">📊</div>
          <div style="font-weight:800;font-size:.83rem;color:#fff;">Analytics</div>
          <div style="font-size:.62rem;color:rgba(255,255,255,.5);margin-top:2px;">${records.length} surveys</div>
        </button>
        <button class="sa-nav-btn" onclick="_saTabNav('people')" style="background:linear-gradient(135deg,#78350f,#d97706);box-shadow:0 4px 16px rgba(217,119,6,.3);">
          <div style="font-size:1.5rem;margin-bottom:5px;">👥</div>
          <div style="font-weight:800;font-size:.83rem;color:#fff;">People</div>
          <div style="font-size:.62rem;color:rgba(255,255,255,.5);margin-top:2px;">${students.length} users</div>
        </button>
        <button class="sa-nav-btn" onclick="_saTabNav('settings')" style="background:linear-gradient(135deg,#4c1d95,#7c3aed);box-shadow:0 4px 16px rgba(124,58,237,.3);">
          <div style="font-size:1.5rem;margin-bottom:5px;">⚙️</div>
          <div style="font-weight:800;font-size:.83rem;color:#fff;">Settings</div>
          <div style="font-size:.62rem;color:rgba(255,255,255,.5);margin-top:2px;">Cycle & reset</div>
        </button>
      </div>

      <!-- Quick Actions -->
      <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:10px;">Quick Actions</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px;">
        <button class="sa-qact-btn" onclick="if(typeof exportSurveysAsCSV==='function')exportSurveysAsCSV(_saData.records)">
          <span style="font-size:1.15rem;">📥</span>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:.83rem;color:#fff;">Export All Surveys (CSV)</div>
            <div style="font-size:.62rem;color:rgba(255,255,255,.3);">${records.length} records ready</div>
          </div>
          <span style="color:rgba(255,255,255,.2);font-size:.9rem;">›</span>
        </button>
        <button class="sa-qact-btn" onclick="_saLoadAll().then(_saRenderHomePage)">
          <span style="font-size:1.15rem;">🔄</span>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:.83rem;color:#fff;">Refresh All Data</div>
            <div style="font-size:.62rem;color:rgba(255,255,255,.3);">Fetch latest from server</div>
          </div>
          <span style="color:rgba(255,255,255,.2);font-size:.9rem;">›</span>
        </button>
        <button class="sa-qact-btn" onclick="_saTabNav('settings')">
          <span style="font-size:1.15rem;">⚙️</span>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:.83rem;color:#fff;">Settings & Cycle Reset</div>
            <div style="font-size:.62rem;color:rgba(255,255,255,.3);">Delete data · prepare next survey</div>
          </div>
          <span style="color:rgba(255,255,255,.2);font-size:.9rem;">›</span>
        </button>
      </div>

    </div>
  `;

  // Auto-refresh every 60s
  if(window._saAutoRefresh) clearInterval(window._saAutoRefresh);
  window._saAutoRefresh = setInterval(() => {
    const card = document.querySelector('.sa-big-stat');
    if (card) { _saLoadAll().then(_saRenderHomePage); }
    else { clearInterval(window._saAutoRefresh); }
  }, 60000);
}

// ─── SECTION SWITCHER ────────────────────────────────────────────────────────
function _saSwitchView(view) {
  _saSetActiveTab(view);
  _saSwitchViewBody(view);
}

function _saSwitchViewBody(view) {
  const main = document.getElementById('sa-main-content');
  if (!main) return;
  main.style.cssText = 'flex:1;overflow:hidden;display:flex;flex-direction:column;-webkit-overflow-scrolling:touch;';
  main.className = '';

  const titles = {
    institutions: '🏥 All Institutions',
    analytics:    '📊 National Analytics',
    people:       '👥 Users & People',
    export:       '📥 Export & Reports',
    settings:     '⚙️ Settings'
  };

  main.innerHTML = `
    <div class="sa-view-header" style="flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:12px;">
        <button class="sa-back-btn" onclick="_saGoHome()">← Home</button>
        <span style="color:#fff;font-weight:800;font-size:.92rem;">${titles[view]||view}</span>
      </div>
    </div>
    <div id="sa-view-body" style="flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:16px 14px 40px;">
      <div style="text-align:center;padding:28px;color:rgba(255,255,255,.3);">
        <div style="width:28px;height:28px;border:2.5px solid rgba(37,99,235,.3);border-top-color:#2563eb;border-radius:50%;animation:sa-spin 1s linear infinite;margin:0 auto 10px;"></div>
        Loading…
      </div>
    </div>`;

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
  if(window._saAutoRefresh) clearInterval(window._saAutoRefresh);
  const main = document.getElementById('sa-main-content');
  if (!main) return;
  main.style.cssText = 'flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;';
  main.className = '';
  _saRenderHomePage();
}

// ─── DATA LOADING ────────────────────────────────────────────────────────────
let _saData = { records: [], institutions: [], students: [] };

async function _saLoadAll() {
  const [recordsData, studentsData, dashboardData] = await Promise.all([
    window.HS.HSAdmin.getRecords(null).catch(() => ({ records: [] })),
    window.HS.HSAdmin.getStudents(null).catch(() => ({ students: [] })),
    window.HS.HSAdmin.dashboard().catch(() => ({ institutions: [] })),
  ]);
  const records      = recordsData.records || [];
  const students     = studentsData.students || [];
  const institutions = dashboardData.institutions || [];
  _saData = { records, institutions, students };

  if (typeof computeSurveyMetrics === 'function' && records.length) {
    window.saMetrics = computeSurveyMetrics(records);
  }
}

// ─── TAB: Institutions ───────────────────────────────────────────────────────
function _saTabInstitutions(el) {
  const { institutions, records, students } = _saData;

  if (!institutions.length) {
    el.innerHTML = `<div style="text-align:center;padding:48px 24px;color:rgba(255,255,255,.3);">
      <div style="font-size:2.5rem;margin-bottom:10px;">🏥</div>
      <div style="font-weight:700;color:rgba(255,255,255,.5);">No institutions yet</div>
    </div>`;
    return;
  }

  const instStats = institutions.map(inst => {
    const recs = records.filter(r => r.institution_id === inst.id);
    const studs = students.filter(s => s.institution_id === inst.id);
    const ivs = new Set(recs.map(r => r.interviewer_name||r.interviewer).filter(Boolean)).size;
    const today = new Date().toISOString().split('T')[0];
    const todayCount = recs.filter(r => (r.interview_date||'').startsWith(today)).length;
    return { inst, recs, studs, ivs, todayCount };
  }).sort((a,b) => b.recs.length - a.recs.length);

  el.innerHTML = `
    <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:12px;">All Institutions (${institutions.length})</div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${instStats.map(({ inst, recs, studs, ivs, todayCount }) => `
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;">
          <div style="padding:12px 14px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(255,255,255,.06);">
            <div style="background:linear-gradient(135deg,#2563eb,#0d9488);color:#fff;font-weight:800;font-size:.65rem;padding:4px 8px;border-radius:6px;flex-shrink:0;">${inst.code||'—'}</div>
            <div style="flex:1;font-weight:800;font-size:.87rem;color:#fff;">${inst.name}</div>
            <div style="font-size:.6rem;color:rgba(255,255,255,.25);">${new Date(inst.created_at).toLocaleDateString('en-KE',{day:'numeric',month:'short',year:'2-digit'})}</div>
          </div>
          <div style="padding:10px 14px;">
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px;">
              ${_saStatMini('Surveys', recs.length, 'rgba(34,197,94,.1)')}
              ${_saStatMini('Today', todayCount, 'rgba(96,165,250,.1)')}
              ${_saStatMini('Enum.', ivs, 'rgba(167,139,250,.1)')}
              ${_saStatMini('Users', studs.length, 'rgba(251,191,36,.1)')}
            </div>
            <div style="display:flex;gap:7px;">
              <button onclick="_saViewInstData('${inst.id}','${inst.name}')"
                style="flex:1;padding:9px;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;border:none;border-radius:9px;cursor:pointer;font-family:inherit;font-size:.75rem;font-weight:700;">
                View Data
              </button>
              <button onclick="_saExportInst('${inst.id}')"
                style="flex:1;padding:9px;background:rgba(37,99,235,.15);color:#93c5fd;border:1px solid rgba(37,99,235,.3);border-radius:9px;cursor:pointer;font-family:inherit;font-size:.75rem;font-weight:700;">
                Export CSV
              </button>
            </div>
          </div>
        </div>`).join('')}
    </div>`;
}

function _saStatMini(label, value, bg) {
  return `<div style="background:${bg};border-radius:9px;padding:8px;text-align:center;border:1px solid rgba(255,255,255,.05);">
    <div style="font-size:.9rem;font-weight:800;color:#fff;">${value}</div>
    <div style="font-size:.58rem;color:rgba(255,255,255,.35);margin-top:1px;">${label}</div>
  </div>`;
}

function _saViewInstData(instId, instName) {
  const recs = _saData.records.filter(r => r.institution_id === instId);
  const el = document.getElementById('sa-view-body');
  el.innerHTML = `
    <button onclick="_saSwitchViewBody('institutions')" style="background:none;border:none;color:#60a5fa;cursor:pointer;font-size:.82rem;font-weight:700;padding:0 0 12px;display:block;">← Back to Institutions</button>
    <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:10px;">${instName} — ${recs.length} Surveys</div>
    <div style="display:flex;gap:8px;margin-bottom:10px;">
      <input id="sa-inst-search" placeholder="Search location or name…" oninput="_saFilterInstRecs('${instId}')"
        style="flex:1;padding:9px 12px;border:1.5px solid rgba(255,255,255,.1);border-radius:10px;font-family:inherit;font-size:.8rem;outline:none;background:rgba(255,255,255,.05);color:#fff;">
      <button onclick="_saExportInst('${instId}')"
        style="padding:9px 13px;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;border:none;border-radius:10px;cursor:pointer;font-size:.75rem;font-family:inherit;font-weight:700;"> CSV</button>
    </div>
    <div id="sa-inst-recs"></div>`;
  _saFilterInstRecs(instId);
}

function _saFilterInstRecs(instId) {
  const q   = (document.getElementById('sa-inst-search')?.value||'').toLowerCase();
  const recs = _saData.records.filter(r => r.institution_id === instId);
  const fil  = q ? recs.filter(r =>
    (r.interview_location||r.location||'').toLowerCase().includes(q) ||
    (r.interviewer_name||r.interviewer||'').toLowerCase().includes(q)
  ) : recs;

  const el = document.getElementById('sa-inst-recs');
  if (!el) return;
  el.innerHTML = `<div style="font-size:.68rem;color:rgba(255,255,255,.3);margin-bottom:8px;">Showing ${fil.length} of ${recs.length}</div>
  ${fil.slice(0,50).map(r => `
    <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:9px 12px;margin-bottom:6px;">
      <div style="font-weight:700;font-size:.82rem;color:#fff;">📍 ${r.interview_location||r.location||'Unknown'}</div>
      <div style="font-size:.7rem;color:rgba(255,255,255,.35);margin-top:2px;">👤 ${r.interviewer_name||r.interviewer||'—'} · 📅 ${r.interview_date||(r.synced_at||'').slice(0,10)}</div>
    </div>`).join('')}
  ${fil.length>50?`<div style="text-align:center;font-size:.72rem;color:rgba(255,255,255,.3);padding:6px;">+${fil.length-50} more — export CSV to see all</div>`:''}`;
}

function _saExportInst(instId) {
  const recs = _saData.records.filter(r => r.institution_id === instId);
  if (typeof exportSurveysAsCSV === 'function') exportSurveysAsCSV(recs);
  else alert('Export not available. Make sure data-processor.js is loaded.');
}

// ─── TAB: Analytics ──────────────────────────────────────────────────────────
function _saTabAnalytics(el) {
  const metrics = window.saMetrics;
  const recs    = _saData.records;

  if (!recs.length) {
    el.innerHTML = `<div style="text-align:center;padding:40px;color:rgba(255,255,255,.3);">No survey data across any institution yet.</div>`;
    return;
  }
  if (!metrics) {
    el.innerHTML = `<div style="text-align:center;padding:28px;color:rgba(255,255,255,.35);">Computing metrics…</div>`;
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

  el.innerHTML = `
    ${_saAnalyticCard('👥 Population Overview', `
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        ${_saStatMini('Population', metrics.summary?.total_population||'—', 'rgba(34,197,94,.1)')}
        ${_saStatMini('Avg HH Size', metrics.summary?.avg_hh_size||'—', 'rgba(96,165,250,.1)')}
        ${_saStatMini('Locations', metrics.summary?.total_locations||'—', 'rgba(167,139,250,.1)')}
      </div>`)}
    ${_saAnalyticCard('🏗 Infrastructure', [
      ['Permanent Houses', infra.pct_permanent_house],
      ['Pit Latrine Access', infra.pct_pit_latrine],
      ['Water Treated', infra.pct_water_treated],
      ['Electricity Access', infra.pct_electricity],
      ['Improved Water Source', infra.pct_improved_water],
    ].map(([l,v])=>_saProgressRow(l,v)).join(''))}
    ${_saAnalyticCard('❤️ Health Indicators', [
      ['HIV Awareness', health.pct_hiv_aware],
      ['HIV Testing Coverage', health.pct_hiv_tested],
      ['Facility Consultation', health.pct_consult_facility],
      ['No Chronic Illness', 100-(health.pct_chronic_illness||0)],
    ].map(([l,v])=>_saProgressRow(l,v)).join(''))}
    ${_saAnalyticCard('🤱 Maternal & Nutrition', [
      ['Children Immunised', mat.pct_immunised],
      ['Facility Delivery', mat.pct_facility_delivery],
      ['Food Sufficiency', nutr.pct_food_sufficient],
      ['Not Skipping Meals', 100-(nutr.pct_skipping_meals||0)],
    ].map(([l,v])=>_saProgressRow(l,v)).join(''))}
    ${_saAnalyticCard('🌿 Environmental', [
      ['Mosquito Net Owned', env.pct_mosquito_net],
      ['Net In Use', env.pct_net_in_use],
      ['No Drainage Issues', 100-(env.pct_drainage_issues||0)],
    ].map(([l,v])=>_saProgressRow(l,v)).join(''))}
    ${_saAnalyticCard('⚠️ Risk Profiles (National)', `
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;">
        ${_saStatMini('High Risk', riskH, 'rgba(220,38,38,.15)')}
        ${_saStatMini('Moderate', riskM, 'rgba(217,119,6,.15)')}
        ${_saStatMini('Actions', (metrics.recommendations||[]).length, 'rgba(37,99,235,.1)')}
      </div>
      ${(metrics.recommendations||[]).slice(0,4).map(rec => `
        <div style="border-radius:10px;padding:10px 12px;margin-bottom:7px;background:${rec.priority==='CRITICAL'?'rgba(220,38,38,.12)':rec.priority==='HIGH'?'rgba(217,119,6,.12)':'rgba(5,150,105,.1)'};border-left:3px solid ${rec.priority==='CRITICAL'?'#ef4444':rec.priority==='HIGH'?'#f59e0b':'#22c55e'};">
          <div style="font-weight:800;font-size:.7rem;color:#fff;margin-bottom:3px;">${rec.priority} · ${rec.category}</div>
          <div style="font-size:.72rem;color:rgba(255,255,255,.6);">${rec.issue}</div>
          <div style="font-size:.68rem;color:rgba(255,255,255,.4);margin-top:3px;">→ ${rec.action}</div>
        </div>`).join('')}`)}
  `;
}

function _saAnalyticCard(title, bodyHTML) {
  return `<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:14px;margin-bottom:12px;overflow:hidden;">
    <div style="padding:11px 14px;border-bottom:1px solid rgba(255,255,255,.06);">
      <div style="font-weight:800;font-size:.83rem;color:#fff;">${title}</div>
    </div>
    <div style="padding:12px 14px;">${bodyHTML}</div>
  </div>`;
}

function _saProgressRow(label, pct) {
  const v = pct ?? null;
  const color = v===null?'#4b5563':v>=80?'#22c55e':v>=60?'#f59e0b':'#ef4444';
  return `<div style="margin-bottom:12px;">
    <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
      <span style="font-size:.75rem;color:rgba(255,255,255,.6);">${label}</span>
      <span style="font-size:.75rem;font-weight:700;color:${color};">${v!==null?v+'%':'—'}</span>
    </div>
    <div style="background:rgba(255,255,255,.06);border-radius:99px;height:5px;overflow:hidden;">
      <div style="height:100%;width:${v||0}%;background:${color};border-radius:99px;transition:width .6s;"></div>
    </div>
  </div>`;
}

// ─── TAB: People ─────────────────────────────────────────────────────────────
function _saTabUsers(el) {
  const { students } = _saData;
  const admins = students.filter(s => s.role==='institution_admin');
  const enums  = students.filter(s => s.role!=='institution_admin');

  if (!students.length) {
    el.innerHTML = `<div style="text-align:center;padding:48px;color:rgba(255,255,255,.3);">No users registered yet.</div>`;
    return;
  }

  el.innerHTML = `
    <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:12px;">Users & People</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
      ${_saStatMini('Total Users', students.length, 'rgba(37,99,235,.12)')}
      ${_saStatMini('Inst. Admins', admins.length, 'rgba(167,139,250,.12)')}
      ${_saStatMini('Enumerators', enums.length, 'rgba(34,197,94,.12)')}
      ${_saStatMini('Institutions', _saData.institutions.length, 'rgba(251,191,36,.12)')}
    </div>
    <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:10px;">Institution Admins (${admins.length})</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px;">
      ${admins.slice(0,30).map(s=>`
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:11px;padding:11px 13px;display:flex;align-items:center;gap:10px;">
          <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#a855f7);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;color:#fff;flex-shrink:0;">${(s.full_name||s.name||s.reg_number||'?').charAt(0).toUpperCase()}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:700;font-size:.82rem;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.full_name||s.name||s.reg_number}</div>
            <div style="font-size:.65rem;color:rgba(255,255,255,.3);">Inst. Admin · ${s.institution_id?.slice(0,8)||'—'}</div>
          </div>
          <div style="background:rgba(167,139,250,.15);color:#c4b5fd;font-size:.58rem;font-weight:800;padding:3px 8px;border-radius:99px;">Admin</div>
        </div>`).join('')}
    </div>
    <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:10px;">Field Enumerators (${enums.length})</div>
    <div style="display:flex;flex-direction:column;gap:7px;">
      ${enums.slice(0,30).map(s=>`
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:11px;padding:10px 13px;display:flex;align-items:center;gap:10px;">
          <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#059669,#34d399);display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:800;color:#fff;flex-shrink:0;">${(s.full_name||s.name||s.reg_number||'?').charAt(0).toUpperCase()}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:700;font-size:.8rem;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.full_name||s.name||s.reg_number}</div>
            <div style="font-size:.63rem;color:rgba(255,255,255,.3);">${s.institution_id?.slice(0,8)||'—'}</div>
          </div>
        </div>`).join('')}
      ${enums.length>30?`<div style="text-align:center;font-size:.72rem;color:rgba(255,255,255,.25);padding:6px;">+${enums.length-30} more users</div>`:''}
    </div>`;
}

// ─── TAB: Export ─────────────────────────────────────────────────────────────
function _saTabExport(el) {
  const { records, institutions } = _saData;
  const metrics = window.saMetrics;

  el.innerHTML = `
    <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:12px;">Export & Reports</div>

    <!-- Export cards -->
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:16px;">
        <div style="font-weight:800;font-size:.9rem;color:#fff;margin-bottom:4px;">📥 National CSV Export</div>
        <div style="font-size:.72rem;color:rgba(255,255,255,.4);margin-bottom:12px;">${records.length} survey records across all institutions</div>
        <button onclick="if(typeof exportSurveysAsCSV==='function')exportSurveysAsCSV(_saData.records);else alert('data-processor.js not loaded')"
          style="width:100%;padding:11px;background:linear-gradient(135deg,#2563eb,#0d9488);color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:inherit;font-size:.84rem;font-weight:800;">
          Download CSV
        </button>
      </div>

      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:16px;">
        <div style="font-weight:800;font-size:.9rem;color:#fff;margin-bottom:4px;">📊 Analytics Report (PDF)</div>
        <div style="font-size:.72rem;color:rgba(255,255,255,.4);margin-bottom:12px;">National metrics and recommendations</div>
        <button onclick="if(typeof _saExportAnalyticsReport==='function')_saExportAnalyticsReport();else alert('Analytics not ready')"
          style="width:100%;padding:11px;background:linear-gradient(135deg,#065f46,#059669);color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:inherit;font-size:.84rem;font-weight:800;">
          Generate Report
        </button>
      </div>
    </div>

    <!-- Per institution export -->
    <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:10px;">Export by Institution</div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      ${institutions.map(inst => {
        const n = records.filter(r=>r.institution_id===inst.id).length;
        return `<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px 14px;display:flex;align-items:center;gap:10px;">
          <div style="flex:1;">
            <div style="font-weight:700;font-size:.82rem;color:#fff;">${inst.name}</div>
            <div style="font-size:.65rem;color:rgba(255,255,255,.3);margin-top:1px;">${n} records</div>
          </div>
          <button onclick="_saExportInst('${inst.id}')"
            style="padding:7px 14px;background:rgba(37,99,235,.15);color:#93c5fd;border:1px solid rgba(37,99,235,.3);border-radius:8px;cursor:pointer;font-size:.72rem;font-family:inherit;font-weight:700;">
            CSV
          </button>
        </div>`;
      }).join('')}
    </div>`;
}

// ─── TAB: Settings ───────────────────────────────────────────────────────────
function _saTabSettings(el) {
  const { records, students, institutions } = _saData;
  const enums  = students.filter(s => s.role !== 'institution_admin');
  const admins = students.filter(s => s.role === 'institution_admin');

  el.innerHTML = `
    <div style="font-size:.6rem;color:rgba(255,255,255,.3);font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:12px;">Settings</div>

    <!-- Profile -->
    <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:16px;margin-bottom:12px;">
      <div style="font-weight:800;font-size:.88rem;color:#fff;margin-bottom:12px;">👤 Admin Profile</div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
        ${_saGetProfilePic()
          ? `<img src="${_saGetProfilePic()}" style="width:52px;height:52px;border-radius:50%;object-fit:cover;border:2px solid rgba(37,99,235,.5);">`
          : `<div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#2563eb,#0d9488);display:flex;align-items:center;justify-content:center;font-size:1.3rem;font-weight:800;color:#fff;">${_saGetAdminName().charAt(0).toUpperCase()}</div>`}
        <div>
          <div style="font-weight:700;font-size:.88rem;color:#fff;">${_saGetAdminName()}</div>
          <div style="font-size:.65rem;color:rgba(255,255,255,.35);">Super Admin · Ministry Level</div>
        </div>
      </div>
      <button onclick="_saOpenProfileModal()"
        style="width:100%;padding:10px;background:rgba(37,99,235,.15);color:#93c5fd;border:1px solid rgba(37,99,235,.3);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.82rem;font-weight:700;">
        📷 Change Profile Picture
      </button>
    </div>

    <!-- System info -->
    <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:16px;margin-bottom:12px;">
      <div style="font-weight:800;font-size:.88rem;color:#fff;margin-bottom:10px;">📋 System Summary</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        ${_saStatMini('Surveys', records.length, 'rgba(34,197,94,.1)')}
        ${_saStatMini('Institutions', institutions.length, 'rgba(37,99,235,.1)')}
        ${_saStatMini('Admins', admins.length, 'rgba(167,139,250,.1)')}
        ${_saStatMini('Enumerators', enums.length, 'rgba(251,191,36,.1)')}
      </div>
    </div>

    <!-- Danger zone -->
    <div style="background:rgba(220,38,38,.06);border:1px solid rgba(220,38,38,.2);border-radius:14px;padding:16px;margin-bottom:12px;">
      <div style="font-weight:800;font-size:.88rem;color:#fca5a5;margin-bottom:4px;">⚠️ Danger Zone</div>
      <div style="font-size:.72rem;color:rgba(248,113,113,.6);margin-bottom:14px;">These actions are irreversible. Export data first.</div>

      <div style="display:flex;flex-direction:column;gap:8px;">
        <button id="sa-del-records-btn"
          style="width:100%;padding:11px;background:rgba(220,38,38,.1);color:#f87171;border:1px solid rgba(220,38,38,.25);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.82rem;font-weight:700;">
          🗑 Delete All Survey Records (${records.length})
        </button>
        <button id="sa-del-enums-btn"
          style="width:100%;padding:11px;background:rgba(220,38,38,.1);color:#f87171;border:1px solid rgba(220,38,38,.25);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.82rem;font-weight:700;">
          🗑 Delete All Enumerators (${enums.length})
        </button>
        <button id="sa-del-inst-admins-btn"
          style="width:100%;padding:11px;background:rgba(220,38,38,.1);color:#f87171;border:1px solid rgba(220,38,38,.25);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.82rem;font-weight:700;">
          🗑 Delete All Inst. Admins (${admins.length})
        </button>
        <button id="sa-del-all-btn"
          style="width:100%;padding:11px;background:rgba(127,29,29,.3);color:#fca5a5;border:1.5px solid rgba(220,38,38,.4);border-radius:10px;cursor:pointer;font-family:inherit;font-size:.84rem;font-weight:800;">
          ⚠️ FULL RESET — Delete Everything
        </button>
      </div>
    </div>

    <!-- Sign out -->
    <button onclick="if(typeof signOut==='function')signOut();else{localStorage.removeItem('chsa_session');location.reload();}"
      style="width:100%;padding:13px;background:rgba(255,255,255,.05);color:rgba(255,255,255,.45);border:1px solid rgba(255,255,255,.09);border-radius:12px;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:700;margin-bottom:12px;">
      Sign Out
    </button>`;

  // Danger zone event listeners
  document.getElementById('sa-del-records-btn')?.addEventListener('click', async () => {
    if (!confirm(`Delete ALL ${records.length} survey records?\n\nThis cannot be undone.`)) return;
    const c = prompt('Type DELETE to confirm:');
    if (c !== 'DELETE') { alert('Cancelled.'); return; }
    let deleted = 0, failed = 0;
    for (const r of records) {
      try { await window.HS.HSAdmin.deleteRecord(r.id); deleted++; } catch { failed++; }
    }
    alert(`Done.\n✅ ${deleted} records deleted${failed ? `\n❌ ${failed} failed` : ''}`);
    await _saLoadAll(); _saSwitchViewBody('settings');
  });

  document.getElementById('sa-del-enums-btn')?.addEventListener('click', async () => {
    const e2 = _saData.students.filter(s => s.role !== 'institution_admin');
    if (!confirm(`Delete ALL ${e2.length} enumerator accounts?\n\nThis cannot be undone.`)) return;
    const c = prompt('Type DELETE to confirm:');
    if (c !== 'DELETE') { alert('Cancelled.'); return; }
    let deleted = 0, failed = 0;
    for (const s of e2) {
      try { await window.HS.HSAdmin.deleteStudent(s.reg_number); deleted++; } catch { failed++; }
    }
    alert(`Done.\n✅ ${deleted} enumerators deleted${failed ? `\n❌ ${failed} failed` : ''}`);
    await _saLoadAll(); _saSwitchViewBody('settings');
  });

  document.getElementById('sa-del-inst-admins-btn')?.addEventListener('click', async () => {
    const a2 = _saData.students.filter(s => s.role === 'institution_admin');
    if (!confirm(`Delete ALL ${a2.length} institution admin accounts?\n\nThis cannot be undone.`)) return;
    const c = prompt('Type DELETE to confirm:');
    if (c !== 'DELETE') { alert('Cancelled.'); return; }
    let deleted = 0, failed = 0;
    for (const s of a2) {
      try { await window.HS.HSAdmin.deleteStudent(s.reg_number); deleted++; } catch { failed++; }
    }
    alert(`Done.\n✅ ${deleted} institution admins deleted${failed ? `\n❌ ${failed} failed` : ''}`);
    await _saLoadAll(); _saSwitchViewBody('settings');
  });

  document.getElementById('sa-del-all-btn')?.addEventListener('click', async () => {
    if (!confirm(`⚠️ FULL RESET\n\nThis will permanently delete:\n• All ${records.length} survey records\n• All ${students.length} user accounts\n\nHave you exported your data?`)) return;
    const c = prompt('Type RESET to confirm full deletion:');
    if (c !== 'RESET') { alert('Cancelled.'); return; }
    let recDel=0,recFail=0,userDel=0,userFail=0;
    for (const r of records) { try { await window.HS.HSAdmin.deleteRecord(r.id); recDel++; } catch { recFail++; } }
    for (const s of students) { try { await window.HS.HSAdmin.deleteStudent(s.reg_number); userDel++; } catch { userFail++; } }
    alert(`Full reset complete.\n✅ ${recDel} records deleted${recFail?` (${recFail} failed)`:''}\n✅ ${userDel} users deleted${userFail?` (${userFail} failed)`:''}`);
    await _saLoadAll(); _saSwitchViewBody('settings');
  });
}

// ─── ANALYTICS REPORT PRINT ──────────────────────────────────────────────────
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
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Sora',sans-serif;background:#e8ede9;color:#111;padding:20px;}
    .page{width:8.5in;background:#fff;margin:0 auto 20px;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.15);}
    .page-header{background:linear-gradient(135deg,#0e3d22,#0d2137);color:#fff;padding:28px 32px;}
    .page-title{font-size:1.5rem;font-weight:800;margin-bottom:4px;}
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
    @media print{body{background:#fff;padding:0;}.page{box-shadow:none;border-radius:0;page-break-after:always;}}
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
        <div style="margin-top:4px;color:#555;font-size:.78rem;">→ ${r.action} <span style="opacity:.6;">(${r.households_affected} households)</span></div>
      </div>`).join('')}
      <h2>Top Illnesses</h2>
      <table><thead><tr><th>Illness</th><th>Cases</th><th>% of Households</th></tr></thead><tbody>
      ${(h.top_illnesses||[]).slice(0,10).map(ill=>`<tr><td>${ill.name}</td><td>${ill.count}</td><td>${ill.pct}%</td></tr>`).join('')}
      </tbody></table>
    </div>
  </div>
  <div style="text-align:center;margin-top:16px;">
    <button onclick="window.print()" style="padding:12px 28px;background:#0e3d22;color:#fff;border:none;border-radius:8px;font-family:inherit;font-size:.9rem;font-weight:700;cursor:pointer;">Print / Save as PDF</button>
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
