/* Medical Survey System (MSS) — Sync Engine v6.0 © 2026 Ministry of Health Kenya
 * PHASE 5 UPDATE: All data flows through the secure API layer.
 * Direct Supabase calls removed. JWT token used for auth.
 */

const API_BASE_URL = window.HS_API_BASE || '';
const SYNC_TABLE   = 'health_survey_records';

function getAuthToken() {
  return localStorage.getItem('hs_jwt_token') || sessionStorage.getItem('hs_jwt_token') || '';
}

function authHeaders() {
  const token = getAuthToken();
  const h = { 'Content-Type': 'application/json' };
  if (token) h['Authorization'] = 'Bearer ' + token;
  return h;
}

function isSupabaseReady() { return !!getAuthToken(); }

let _syncBusy = false;

function setSyncStatus(status, detail) {
  const btn    = document.getElementById('sync-btn');
  const dot    = document.getElementById('sync-dot');
  const lbl    = document.getElementById('sync-lbl');
  const colors = { idle:'rgba(255,255,255,.25)', syncing:'#2563eb', ok:'#059669', offline:'rgba(255,255,255,.15)', error:'#dc2626' };
  const labels = { idle:'Sync', syncing:'Syncing…', ok:'Synced ', offline:'Offline', error:'Sync Failed' };
  if (dot) dot.style.background = colors[status] || colors.idle;
  if (lbl) lbl.textContent = labels[status] || status;
  if (btn) btn.disabled = (status === 'syncing');
  if (detail) console.log('[sync]', detail);
}

async function syncAll() {
  if (_syncBusy) return;
  _syncBusy = true;
  setSyncStatus('syncing');

  if (!getAuthToken()) {
    setSyncStatus('error', 'Not logged in');
    _syncBusy = false;
    return;
  }

  try {
    const unsyncedRecords = await getUnsyncedRecords();
    if (!unsyncedRecords.length) { setSyncStatus('ok', 'Nothing to sync'); _syncBusy = false; return; }

    let synced = 0, failed = 0;

    for (const record of unsyncedRecords) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/survey/submit`, {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({
            household_id:    record.household_id   || record.id,
            institution_id:  record.institution_id || getSessionInstitutionId(),
            respondent_name: record.respondent_name || record.full_name || 'Unknown',
            survey_data:     record,
            offline_id:      record.offline_id || record.record_id || record.id,
            submitted_at:    record.created_at || new Date().toISOString(),
          }),
        });

        if (res.ok || res.status === 409) {
          await markSynced(record.id || record.offline_id);
          synced++;
        } else { failed++; }
      } catch { failed++; }
    }

    setSyncStatus(failed === 0 ? 'ok' : 'error',
      `Synced ${synced}/${unsyncedRecords.length}${failed ? ` (${failed} failed)` : ''}`);
  } catch (err) {
    setSyncStatus('error', err.message);
    if(window.MSSError) window.MSSError.show(err, 'Sync failed');
  } finally {
    _syncBusy = false;
  }
}

async function getUnsyncedRecords() {
  try {
    const db = await openDB();
    return await getAllUnsynced(db);
  } catch {
    const records = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith('hs_record_')) continue;
      try { const r = JSON.parse(localStorage.getItem(key)); if (r && !r._synced) records.push(r); } catch {}
    }
    return records;
  }
}

async function markSynced(id) {
  try {
    const db = await openDB();
    const tx = db.transaction('records', 'readwrite');
    const req = tx.objectStore('records').get(id);
    req.onsuccess = () => { if (req.result) { req.result._synced = true; tx.objectStore('records').put(req.result); } };
  } catch {
    const key = 'hs_record_' + id;
    const item = localStorage.getItem(key);
    if (item) { try { const r = JSON.parse(item); r._synced = true; localStorage.setItem(key, JSON.stringify(r)); } catch {} }
  }
}

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('HealthSurveyDB', 1);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('records')) db.createObjectStore('records', { keyPath: 'id' });
    };
  });
}

function getAllUnsynced(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('records', 'readonly');
    const results = [];
    const req = tx.objectStore('records').openCursor();
    req.onsuccess = e => {
      const cursor = e.target.result;
      if (cursor) { if (!cursor.value._synced) results.push(cursor.value); cursor.continue(); }
      else resolve(results);
    };
    req.onerror = () => reject(req.error);
  });
}

function getSessionInstitutionId() {
  try {
    const payload = JSON.parse(atob(getAuthToken().split('.')[1]));
    return payload.institution_id || null;
  } catch { return null; }
}

function updateNetworkStatus() { setSyncStatus(navigator.onLine ? 'idle' : 'offline'); }
window.addEventListener('online', () => { updateNetworkStatus(); syncAll(); });
window.addEventListener('offline', updateNetworkStatus);
document.addEventListener('DOMContentLoaded', () => {
  updateNetworkStatus();
  const btn = document.getElementById('sync-btn');
  if (btn) btn.addEventListener('click', syncAll);
});

// Force re-upload of ALL records (even already-synced ones), used by the Sync modal
async function forceSyncAll() {
  if (_syncBusy) return;
  _syncBusy = true;
  setSyncStatus('syncing');

  if (!getAuthToken()) {
    setSyncStatus('error', 'Not logged in');
    _syncBusy = false;
    alert('You must be logged in to sync records.');
    return;
  }

  try {
    // Get ALL records from IndexedDB + localStorage (including already-synced)
    let allRecords = [];
    try {
      const db = await openDB();
      allRecords = await new Promise((resolve, reject) => {
        const tx = db.transaction('records', 'readonly');
        const results = [];
        const req = tx.objectStore('records').openCursor();
        req.onsuccess = e => {
          const cursor = e.target.result;
          if (cursor) { results.push(cursor.value); cursor.continue(); }
          else resolve(results);
        };
        req.onerror = () => reject(req.error);
      });
    } catch {}

    // Also check localStorage for any records stored there
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith('hs_record_')) continue;
      try { const r = JSON.parse(localStorage.getItem(key)); if (r) allRecords.push(r); } catch {}
    }

    if (!allRecords.length) {
      setSyncStatus('ok', 'No records found to force-sync');
      _syncBusy = false;
      alert('No records found on this device to upload.');
      return;
    }

    let synced = 0, failed = 0;
    for (const record of allRecords) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/survey/submit`, {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({
            household_id:    record.household_id   || record.id,
            institution_id:  record.institution_id || getSessionInstitutionId(),
            respondent_name: record.respondent_name || record.full_name || 'Unknown',
            survey_data:     record,
            offline_id:      record.offline_id || record.record_id || record.id,
            submitted_at:    record.created_at || new Date().toISOString(),
          }),
        });
        if (res.ok || res.status === 409) {
          await markSynced(record.id || record.offline_id);
          synced++;
        } else { failed++; }
      } catch { failed++; }
    }

    setSyncStatus(failed === 0 ? 'ok' : 'error',
      `Force-synced ${synced}/${allRecords.length}${failed ? ` (${failed} failed)` : ''}`);
    alert(`Force sync complete.\n✅ ${synced} uploaded${failed ? `\n❌ ${failed} failed` : ''}`);
  } catch (err) {
    setSyncStatus('error', err.message);
    alert('Force sync error: ' + err.message);
  } finally {
    _syncBusy = false;
  }
}
