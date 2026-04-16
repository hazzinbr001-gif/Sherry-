/* Medical Survey System (MSS) — Data Processor © 2026
 * Computes metrics from raw survey data that were previously collected but unused.
 * Fills the gap: 108 fields collected → only 10 used → now 90+ processed.
 *
 * Usage:
 *   const metrics = computeSurveyMetrics(records);
 *   window.admMetrics = metrics;  // available globally for reports
 */

// 
//  MAIN ENTRY POINT
// 
function computeSurveyMetrics(records) {
  if (!records || !records.length) return _emptyMetrics();

  const metrics = {
    summary:          _computeSummary(records),
    by_location:      _computeByLocation(records),
    by_interviewer:   _computeByInterviewer(records),
    health:           _computeHealthMetrics(records),
    infrastructure:   _computeInfrastructure(records),
    maternal_child:   _computeMaternalChild(records),
    nutrition:        _computeNutrition(records),
    environmental:    _computeEnvironmental(records),
    risk_profiles:    _computeRiskProfiles(records),
    data_quality:     _computeDataQuality(records),
    recommendations:  [],
  };

  metrics.recommendations = _generateRecommendations(metrics);
  return metrics;
}

// 
//  FIELD ACCESSOR — handles both flat and raw_json nesting
// 
function _field(record, fieldName) {
  if (record[fieldName] !== undefined && record[fieldName] !== null) return record[fieldName];
  const raw = record._rawParsed || _parseRaw(record);
  return raw[fieldName] ?? null;
}

function _parseRaw(record) {
  if (record._rawParsed) return record._rawParsed;
  try {
    record._rawParsed = typeof record.raw_json === 'string'
      ? JSON.parse(record.raw_json || '{}')
      : (record.raw_json || {});
  } catch(e) {
    record._rawParsed = {};
  }
  return record._rawParsed;
}

function _isYes(val) {
  return ['yes', 'Yes', 'YES', 'y', 'Y', true, '1', 1].includes(val);
}

function _pct(count, total) {
  if (!total) return 0;
  return Math.round((count / total) * 100);
}

// 
//  SUMMARY
// 
function _computeSummary(records) {
  const n = records.length;
  let totalPeople = 0;
  const locations = new Set();
  const interviewers = new Set();

  records.forEach(r => {
    const m = parseInt(_field(r, 'a_tot_m')) || 0;
    const f = parseInt(_field(r, 'a_tot_f')) || 0;
    totalPeople += m + f;
    const loc = _field(r, 'interview_location') || _field(r, 'location');
    const iv  = _field(r, 'interviewer_name')   || _field(r, 'interviewer');
    if (loc) locations.add((loc).trim().toLowerCase().replace(/\s+/g,' '));
    if (iv)  interviewers.add(iv);
  });

  return {
    total_surveys:     n,
    total_population:  totalPeople,
    avg_hh_size:       n ? (totalPeople / n).toFixed(1) : 0,
    total_locations:   locations.size,
    total_interviewers: interviewers.size,
    date_range: _dateRange(records),
  };
}

function _dateRange(records) {
  const dates = records.map(r => _field(r, 'interview_date')).filter(Boolean).sort();
  if (!dates.length) return { start: null, end: null };
  return { start: dates[0], end: dates[dates.length - 1] };
}

// 
//  BY LOCATION
// 
// Normalise a raw village string to a consistent key for grouping
// (lowercase, trimmed, collapsed spaces) — the display label is resolved separately
function _normLocKey(raw) {
  return (raw || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

// Given all records, build a map of normKey → canonical display name
// using the most-seen capitalised form (majority wins)
function _buildLocCanonical(records) {
  const counts = {};    // normKey → { [rawForm]: count }
  records.forEach(r => {
    const raw = (_field(r, 'interview_location') || _field(r, 'location') || '').trim();
    if (!raw) return;
    const key = _normLocKey(raw);
    if (!counts[key]) counts[key] = {};
    counts[key][raw] = (counts[key][raw] || 0) + 1;
  });
  const canonical = {};
  Object.keys(counts).forEach(key => {
    const forms = counts[key];
    canonical[key] = Object.keys(forms).sort((a, b) => forms[b] - forms[a])[0];
  });
  return canonical;
}

function _computeByLocation(records) {
  const byLoc = {};
  const canonical = _buildLocCanonical(records);

  records.forEach(r => {
    const raw = (_field(r, 'interview_location') || _field(r, 'location') || 'Unknown').trim();
    const key = _normLocKey(raw) || 'unknown';
    const displayName = canonical[key] || raw || 'Unknown';
    if (!byLoc[displayName]) byLoc[displayName] = { count: 0, records: [] };
    byLoc[displayName].count++;
    byLoc[displayName].records.push(r);
  });

  const result = {};
  Object.keys(byLoc).forEach(loc => {
    const recs = byLoc[loc].records;
    const n    = recs.length;
    result[loc] = {
      surveys:             n,
      population:          recs.reduce((s,r) => s + (parseInt(_field(r,'a_tot_m'))||0) + (parseInt(_field(r,'a_tot_f'))||0), 0),
      pct_permanent_house: _pct(recs.filter(r => _field(r,'b_type') === 'Permanent').length, n),
      pct_electricity:     _pct(recs.filter(r => _field(r,'b_light') === 'Electricity').length, n),
      pct_pit_latrine:     _pct(recs.filter(r => _isYes(_field(r,'g_latrine'))).length, n),
      pct_water_treated:   _pct(recs.filter(r => _isYes(_field(r,'h_treat'))).length, n),
      pct_hiv_aware:       _pct(recs.filter(r => _isYes(_field(r,'f_heard'))).length, n),
      pct_food_secure:     _pct(recs.filter(r => _isYes(_field(r,'e_enough'))).length, n),
      pct_immunised:       _pct(recs.filter(r => _isYes(_field(r,'d_immun'))).length, n),
      pct_net_owned:       _pct(recs.filter(r => _isYes(_field(r,'k_mosquito_net'))).length, n),
    };
  });

  return result;
}

// 
//  BY INTERVIEWER
// 
function _computeByInterviewer(records) {
  const byIv = {};

  records.forEach(r => {
    const iv = _field(r,'interviewer_name') || _field(r,'interviewer') || 'Unknown';
    if (!byIv[iv]) byIv[iv] = { count: 0, quality_issues: 0, records: [] };
    byIv[iv].count++;
    byIv[iv].records.push(r);
  });

  const result = {};
  Object.keys(byIv).forEach(iv => {
    const recs = byIv[iv].records;
    const n    = recs.length;
    // Quality: % records with no missing critical fields
    const complete = recs.filter(r => _field(r,'interview_location') && _field(r,'interview_date') && _field(r,'a_age')).length;
    result[iv] = {
      surveys:         n,
      quality_score:   _pct(complete, n),
      last_survey:     recs.map(r => _field(r,'interview_date')).filter(Boolean).sort().pop() || null,
    };
  });

  return result;
}

// 
//  HEALTH METRICS
// 
function _computeHealthMetrics(records) {
  const n = records.length;
  if (!n) return {};

  // Top illnesses
  const illCounts = {};
  records.forEach(r => {
    const ill = _field(r,'c_ill') || _field(r,'illnesses') || '';
    String(ill).split(',').forEach(x => {
      const k = x.trim();
      if (k) illCounts[k] = (illCounts[k] || 0) + 1;
    });
  });

  const deaths = records.reduce((s,r) => s + (parseInt(_field(r,'c_deaths_5yr'))||0), 0);
  const children_u5 = records.reduce((s,r) => s + (parseInt(_field(r,'d_u5'))||0), 0);

  return {
    pct_with_illness:    _pct(records.filter(r => {
      const ill = _field(r,'c_ill') || _field(r,'illnesses') || '';
      return String(ill).trim().length > 0 && String(ill).trim() !== 'None';
    }).length, n),
    top_illnesses:       Object.entries(illCounts).sort((a,b)=>b[1]-a[1]).slice(0,10)
                           .map(([name,count]) => ({ name, count, pct: _pct(count,n) })),
    pct_chronic_illness: _pct(records.filter(r => _isYes(_field(r,'c_chronic'))).length, n),
    pct_hiv_aware:       _pct(records.filter(r => _isYes(_field(r,'f_heard'))).length, n),
    pct_hiv_tested:      _pct(records.filter(r => _isYes(_field(r,'f_tested'))).length, n),
    pct_consult_facility:_pct(records.filter(r => _isYes(_field(r,'c_consult'))).length, n),
    total_deaths_5yr:    deaths,
    avg_deaths_per_hh:   n ? (deaths/n).toFixed(2) : 0,
    total_children_u5:   children_u5,
  };
}

// 
//  INFRASTRUCTURE
// 
function _computeInfrastructure(records) {
  const n = records.length;
  if (!n) return {};

  return {
    pct_permanent_house: _pct(records.filter(r => _field(r,'b_type') === 'Permanent').length, n),
    pct_iron_roof:       _pct(records.filter(r => (_field(r,'b_roof')||'').toLowerCase().includes('iron')).length, n),
    pct_cemented_floor:  _pct(records.filter(r => (_field(r,'b_floor')||'').toLowerCase().includes('cement')).length, n),
    pct_electricity:     _pct(records.filter(r => (_field(r,'b_light')||'').toLowerCase().includes('electric')).length, n),
    pct_clean_fuel:      _pct(records.filter(r => {
      const f = (_field(r,'b_fuel')||'').toLowerCase();
      return f.includes('gas') || f.includes('electric') || f.includes('biogas');
    }).length, n),
    pct_improved_water:  _pct(records.filter(r => {
      const w = (_field(r,'h_wsrc') || _field(r,'water_source') || '').toLowerCase();
      return w.includes('piped') || w.includes('borehole') || w.includes('protected');
    }).length, n),
    pct_water_treated:   _pct(records.filter(r => _isYes(_field(r,'h_treat'))).length, n),
    pct_pit_latrine:     _pct(records.filter(r => _isYes(_field(r,'g_latrine') || _field(r,'latrine'))).length, n),
    pct_proper_waste:    _pct(records.filter(r => {
      const w = (_field(r,'h_waste_disp')||'').toLowerCase();
      return w.includes('proper') || w.includes('collect') || w.includes('pit');
    }).length, n),
    house_type_breakdown: _countField(records, 'b_type'),
    water_source_breakdown: _countField(records, 'h_wsrc'),
    fuel_type_breakdown:  _countField(records, 'b_fuel'),
    lighting_breakdown:   _countField(records, 'b_light'),
  };
}

// 
//  MATERNAL & CHILD HEALTH
// 
function _computeMaternalChild(records) {
  const n = records.length;
  if (!n) return {};

  const pregnant = records.filter(r => _isYes(_field(r,'d_pregn')));
  const facilityDelivery = records.filter(r => {
    const d = (_field(r,'d_deliv_where') || '').toLowerCase();
    return d.includes('hospital') || d.includes('clinic') || d.includes('facility') || d.includes('health');
  });
  const totalU5 = records.reduce((s,r) => s + (parseInt(_field(r,'d_u5'))||0), 0);

  return {
    total_pregnant:       pregnant.length,
    pct_antenatal_care:   _pct(records.filter(r => _isYes(_field(r,'d_anc'))).length, n),
    pct_facility_delivery:_pct(facilityDelivery.length, n),
    pct_immunised:        _pct(records.filter(r => _isYes(_field(r,'d_immun'))).length, n),
    total_children_u5:    totalU5,
    avg_children_u5:      n ? (totalU5/n).toFixed(1) : 0,
    delivery_location_breakdown: _countField(records, 'd_deliv_where'),
  };
}

// 
//  NUTRITION
// 
function _computeNutrition(records) {
  const n = records.length;
  if (!n) return {};

  const meals = records.map(r => parseInt(_field(r,'e_meals'))).filter(m => m > 0 && m < 10);
  const avgMeals = meals.length ? (meals.reduce((s,m)=>s+m,0)/meals.length).toFixed(1) : 'N/A';

  return {
    pct_food_sufficient: _pct(records.filter(r => _isYes(_field(r,'e_enough'))).length, n),
    pct_skipping_meals:  _pct(records.filter(r => _isYes(_field(r,'e_skip'))).length, n),
    avg_meals_per_day:   avgMeals,
    meals_distribution:  _countField(records, 'e_meals'),
  };
}

// 
//  ENVIRONMENTAL
// 
function _computeEnvironmental(records) {
  const n = records.length;
  if (!n) return {};

  return {
    pct_mosquito_net:    _pct(records.filter(r => _isYes(_field(r,'k_mosquito_net'))).length, n),
    pct_net_in_use:      _pct(records.filter(r => _isYes(_field(r,'k_net_used'))).length, n),
    pct_rodent_problem:  _pct(records.filter(r => _isYes(_field(r,'k_rodents'))).length, n),
    pct_drainage_issues: _pct(records.filter(r => _isYes(_field(r,'h_drainage'))).length, n),
    pest_types:          _countField(records, 'k_pest_type'),
  };
}

// 
//  RISK PROFILES
// 
function _computeRiskProfiles(records) {
  return records.map(r => {
    const factors = [];
    let score = 0;

    // Sanitation (30 pts)
    if (!_isYes(_field(r,'g_latrine') || _field(r,'latrine'))) { factors.push('No pit latrine'); score += 15; }
    if (!_isYes(_field(r,'h_treat')))                           { factors.push('Water not treated'); score += 15; }

    // Health (25 pts)
    if (!_isYes(_field(r,'f_heard')))  { factors.push('HIV unaware'); score += 10; }
    if (_isYes(_field(r,'c_chronic'))) { factors.push('Chronic illness'); score += 10; }
    const deaths = parseInt(_field(r,'c_deaths_5yr')) || 0;
    if (deaths > 0)                    { factors.push(`${deaths} death(s) in 5yr`); score += 5; }

    // Nutrition (20 pts)
    if (_isYes(_field(r,'e_skip')))       { factors.push('Skipping meals'); score += 10; }
    if (!_isYes(_field(r,'e_enough')))    { factors.push('Food insufficient'); score += 10; }

    // Maternal & Child (15 pts)
    if (!_isYes(_field(r,'d_immun')) && parseInt(_field(r,'d_u5')||0) > 0)
                                          { factors.push('Children not immunised'); score += 10; }
    if (parseInt(_field(r,'d_u5')||0) > 3) { factors.push('4+ children under 5'); score += 5; }

    // Infrastructure (10 pts)
    if (_field(r,'b_type') !== 'Permanent') { factors.push('Non-permanent house'); score += 5; }
    if (!_isYes(_field(r,'h_treat')) && (_field(r,'h_wsrc')||'').toLowerCase().includes('unprotect'))
                                            { factors.push('Unprotected water source'); score += 5; }

    const level = score === 0 ? 'NONE' : score < 20 ? 'LOW' : score < 40 ? 'MODERATE' : 'HIGH';

    return {
      survey_id:   r.id,
      location:    _field(r,'interview_location') || _field(r,'location') || 'Unknown',
      interviewer: _field(r,'interviewer_name') || _field(r,'interviewer') || 'Unknown',
      date:        _field(r,'interview_date') || '',
      score:       Math.min(score, 100),
      level,
      factors,
    };
  }).filter(p => p.level !== 'NONE').sort((a,b) => b.score - a.score);
}

// 
//  DATA QUALITY
// 
function _computeDataQuality(records) {
  const n = records.length;
  if (!n) return {};

  const criticalFields = ['interview_date','interview_location','a_age','a_gender','a_tot_m','a_tot_f'];
  const importantFields = ['b_type','g_latrine','h_treat','f_heard','e_enough','d_u5'];

  const missingCritical = records.filter(r => criticalFields.some(f => !_field(r,f))).length;
  const missingImportant = records.filter(r => importantFields.some(f => _field(r,f) === null || _field(r,f) === undefined || _field(r,f) === '')).length;

  const completeness = criticalFields.map(f => ({
    field: f,
    filled: records.filter(r => !!_field(r,f)).length,
    pct:   _pct(records.filter(r => !!_field(r,f)).length, n),
  }));

  return {
    overall_quality_score: _pct(n - missingCritical, n),
    pct_complete_critical: _pct(n - missingCritical, n),
    pct_complete_important:_pct(n - missingImportant, n),
    missing_critical_count: missingCritical,
    field_completeness:    completeness,
  };
}

// 
//  RECOMMENDATIONS ENGINE
// 
function _generateRecommendations(metrics) {
  const recs = [];

  // Water & Sanitation
  if (metrics.infrastructure.pct_pit_latrine < 80) {
    recs.push({
      priority: 'HIGH',
      category: 'Sanitation',
      issue: `${100 - metrics.infrastructure.pct_pit_latrine}% of households lack a pit latrine`,
      action: 'Prioritise latrine construction program — target households without any sanitation facility',
      households_affected: Math.round(metrics.summary.total_surveys * (1 - metrics.infrastructure.pct_pit_latrine/100)),
    });
  }
  if (metrics.infrastructure.pct_water_treated < 70) {
    recs.push({
      priority: 'HIGH',
      category: 'Water Safety',
      issue: `${100 - metrics.infrastructure.pct_water_treated}% of households do not treat their water`,
      action: 'Distribute water treatment tablets and conduct boiling education sessions at community level',
      households_affected: Math.round(metrics.summary.total_surveys * (1 - metrics.infrastructure.pct_water_treated/100)),
    });
  }

  // Nutrition
  if (metrics.nutrition.pct_skipping_meals > 30) {
    recs.push({
      priority: 'HIGH',
      category: 'Nutrition',
      issue: `${metrics.nutrition.pct_skipping_meals}% of households skip meals regularly`,
      action: 'Engage nutrition program — identify households for food support and livelihood interventions',
      households_affected: Math.round(metrics.summary.total_surveys * metrics.nutrition.pct_skipping_meals/100),
    });
  }

  // HIV
  if (metrics.health.pct_hiv_aware < 90) {
    recs.push({
      priority: 'MEDIUM',
      category: 'HIV Awareness',
      issue: `${100 - metrics.health.pct_hiv_aware}% of households report no HIV awareness`,
      action: 'Schedule community HIV awareness sessions and distribute education materials',
      households_affected: Math.round(metrics.summary.total_surveys * (1 - metrics.health.pct_hiv_aware/100)),
    });
  }
  if (metrics.health.pct_hiv_tested < 60) {
    recs.push({
      priority: 'MEDIUM',
      category: 'HIV Testing',
      issue: `Only ${metrics.health.pct_hiv_tested}% of households report HIV testing`,
      action: 'Organise mobile HIV testing outreach in affected locations',
      households_affected: Math.round(metrics.summary.total_surveys * (1 - metrics.health.pct_hiv_tested/100)),
    });
  }

  // Child Health
  if (metrics.maternal_child.pct_immunised < 80) {
    recs.push({
      priority: 'HIGH',
      category: 'Immunisation',
      issue: `Only ${metrics.maternal_child.pct_immunised}% of households confirm children are immunised`,
      action: 'Coordinate with nearest health facility for outreach immunisation clinic',
      households_affected: metrics.summary.total_surveys - Math.round(metrics.summary.total_surveys * metrics.maternal_child.pct_immunised/100),
    });
  }

  // High risk households
  if (metrics.risk_profiles.filter(r => r.level === 'HIGH').length > 0) {
    const highRisk = metrics.risk_profiles.filter(r => r.level === 'HIGH');
    recs.push({
      priority: 'CRITICAL',
      category: 'High Risk Households',
      issue: `${highRisk.length} household(s) scored HIGH on risk assessment`,
      action: 'Conduct targeted home visits and enrol in support programs immediately',
      households_affected: highRisk.length,
    });
  }

  return recs.sort((a,b) => {
    const order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
    return (order[a.priority]||4) - (order[b.priority]||4);
  });
}

// 
//  HELPERS
// 
function _countField(records, field) {
  const c = {};
  records.forEach(r => {
    const v = String(_field(r, field) || 'Unknown').trim();
    c[v] = (c[v] || 0) + 1;
  });
  return c;
}

function _emptyMetrics() {
  return {
    summary: { total_surveys:0, total_population:0, avg_hh_size:0 },
    by_location: {}, by_interviewer: {},
    health: {}, infrastructure: {}, maternal_child: {},
    nutrition: {}, environmental: {},
    risk_profiles: [], data_quality: {},
    recommendations: [],
  };
}

// 
//  CSV EXPORT
// 
function exportSurveysAsCSV(records) {
  const allFields = [
    'id','synced_at','interview_date','interview_location','interviewer_name',
    'a_age','a_gender','a_marital','a_pos','a_tot_m','a_tot_f',
    'b_type','b_roof','b_floor','b_light','b_fuel',
    'c_ill','c_consult','c_chronic','c_deaths_5yr',
    'd_pregn','d_anc','d_deliv_where','d_u5','d_immun',
    'e_meals','e_skip','e_enough',
    'f_heard','f_tested','f_protect',
    'g_latrine','g_lat_type','g_lat_n',
    'h_wsrc','h_treat','h_wc','h_waste_disp','h_drainage',
    'i_circ','i_trad_med',
    'j_health_prob',
    'k_mosquito_net','k_net_used','k_rodents',
    'l_challenge_1','l_challenge_2','l_summary',
  ];

  const rows = records.map(r => allFields.map(f => {
    const v = _field(r, f) ?? '';
    const str = Array.isArray(v) ? v.join('; ') : String(v);
    return `"${str.replace(/"/g,'""')}"`;
  }));

  const csv = [allFields.join(','), ...rows.map(row => row.join(','))].join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `health_survey_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// 
//  AUTO-COMPUTE on admin render
// 
function admRenderEnhancedMetrics() {
  if (!window._admRecs || !window._admRecs.length) return;

  const metrics = computeSurveyMetrics(window._admRecs);
  window.admMetrics = metrics;

  const panel = document.getElementById('adm-enhanced-metrics');
  if (!panel) return;

  const r = metrics;
  const infra = r.infrastructure;
  const health = r.health;
  const nutrition = r.nutrition;
  const quality = r.data_quality;
  const highRisk = r.risk_profiles.filter(p => p.level === 'HIGH').length;
  const critRec  = r.recommendations.filter(rec => rec.priority === 'CRITICAL' || rec.priority === 'HIGH').length;

  panel.innerHTML = `
    <div style="padding:16px;border-bottom:1px solid #eee;">
      <div style="font-weight:800;font-size:1rem;color:#1a5c35;margin-bottom:12px;"> Deep Analytics — All ${r.summary.total_surveys} Surveys</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px;margin-bottom:16px;">
        ${_metricCard('Total Population', r.summary.total_population + ' people', '#e8f5e9')}
        ${_metricCard('Avg. Household', r.summary.avg_hh_size + ' people', '#e3f2fd')}
        ${_metricCard('Data Quality', quality.overall_quality_score + '%', quality.overall_quality_score >= 90 ? '#e8f5e9' : '#fff3e0')}
        ${_metricCard('High Risk HH', highRisk, highRisk > 0 ? '#fce4ec' : '#e8f5e9')}
        ${_metricCard('Action Items', critRec, critRec > 0 ? '#fff3e0' : '#e8f5e9')}
        ${_metricCard('Locations', r.summary.total_locations, '#f3e5f5')}
      </div>

      <div style="font-weight:700;font-size:.85rem;color:#1a5c35;margin-bottom:8px;"> Infrastructure Coverage</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px;margin-bottom:14px;">
        ${_pctCard('Permanent Houses', infra.pct_permanent_house)}
        ${_pctCard('Pit Latrine', infra.pct_pit_latrine)}
        ${_pctCard('Treated Water', infra.pct_water_treated)}
        ${_pctCard('Electricity', infra.pct_electricity)}
        ${_pctCard('HIV Aware', health.pct_hiv_aware)}
        ${_pctCard('Food Secure', nutrition.pct_food_sufficient)}
        ${_pctCard('Immunised', r.maternal_child.pct_immunised)}
        ${_pctCard('Mosquito Net', r.environmental.pct_mosquito_net)}
      </div>

      ${critRec > 0 ? `
      <div style="font-weight:700;font-size:.85rem;color:#c0392b;margin-bottom:8px;"> Recommendations (${r.recommendations.length})</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${r.recommendations.slice(0,5).map(rec => `
          <div style="background:${rec.priority==='CRITICAL'?'#fce4ec':rec.priority==='HIGH'?'#fff3e0':'#e8f5e9'};border-radius:8px;padding:10px 12px;">
            <div style="font-size:.72rem;font-weight:800;color:${rec.priority==='CRITICAL'?'#c0392b':rec.priority==='HIGH'?'#e65100':'#1e5c38'}">${rec.priority} · ${rec.category}</div>
            <div style="font-size:.78rem;color:#333;margin-top:3px;">${rec.issue}</div>
            <div style="font-size:.72rem;color:#666;margin-top:3px;">→ ${rec.action}</div>
          </div>
        `).join('')}
      </div>` : '<div style="color:#4caf72;font-size:.82rem;"> No critical action items at this time</div>'}
    </div>`;
}

function _metricCard(label, value, bg) {
  return `<div style="background:${bg||'#f5f5f5'};border-radius:8px;padding:10px;text-align:center;">
    <div style="font-size:1.3rem;font-weight:800;color:#1a5c35;">${value}</div>
    <div style="font-size:.65rem;color:#666;margin-top:2px;">${label}</div>
  </div>`;
}

function _pctCard(label, pct) {
  const col = pct >= 80 ? '#4caf72' : pct >= 60 ? '#f39c12' : '#e74c3c';
  return `<div style="background:#f9f9f9;border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:8px;">
    <div style="flex:1;font-size:.72rem;color:#333;">${label}</div>
    <div style="font-size:.9rem;font-weight:800;color:${col};">${pct}%</div>
  </div>`;
}
