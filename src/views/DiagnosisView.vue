<template>
  <div class="diagnosis-container">
    <div class="disclaimer-container">
      <div class="disclaimer-text">
        <strong>Important Information:</strong> This tool uses an algorithm to assess your vision based on the symptoms you've selected. It is not a substitute for professional medical advice, diagnosis, or treatment.
      </div>
      <div class="disclaimer-checkbox">
        <input type="checkbox" id="disclaimer-checkbox">
        <label for="disclaimer-checkbox">I understand this is an algorithmic assessment, not a substitute for professional advice.</label>
      </div>
    </div>

    <div class="diagnosis-content" id="diagnosis-content">
      <h2>Vision Diagnosis</h2>

      <section v-if="hasReport" class="diagnosis-report" aria-labelledby="report-heading">
        <h3 id="report-heading">Report</h3>
        <p class="diagnosis-report-lead">Simulator scores carried in this page link.</p>

        <div v-if="sliderReport.length" class="report-block">
          <h4 class="report-block-title">Scores</h4>
          <div class="report-table-wrap">
            <table class="report-table" aria-label="Simulator slider scores">
              <thead>
                <tr>
                  <th scope="col">Setting</th>
                  <th scope="col" class="report-th-num">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in sliderReport" :key="row.key">
                  <td>{{ row.label }}</td>
                  <td class="report-td-num">{{ row.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-if="sightLossReport" class="report-block">
          <h4 class="report-block-title">Can't see (grid)</h4>
          <div class="report-table-wrap">
            <table class="report-table report-table-sight" aria-label="Sight loss grid scores">
              <tbody>
                <tr>
                  <th scope="row">Regions blocked</th>
                  <td class="report-td-num">{{ sightLossReport.active }} / {{ sightLossReport.total }}</td>
                </tr>
                <tr v-if="sightLossReport.grid" class="report-tr-grid">
                  <td class="report-td-grid-label" colspan="2">
                    <div class="sight-loss-grid-wrap">
                      <span class="sight-loss-grid-caption">Field map</span>
                      <div
                        class="sight-loss-mini-grid"
                        role="img"
                        :aria-label="`${sightLossReport.active} of ${sightLossReport.total} regions marked`"
                      >
                        <span
                          v-for="(bit, i) in sightLossReport.gridChars"
                          :key="i"
                          class="sight-loss-cell"
                          :class="{ 'is-on': bit === '1' }"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        v-if="potentialDiagnosesFromScores.length"
        class="diagnosis-potential"
        aria-labelledby="potential-heading"
      >
        <h3 id="potential-heading">Potential diagnoses from scores</h3>
        <p class="diagnosis-potential-lead">
          When simulator settings meet the threshold (30+ on a 0–100 scale), the following conditions are
          <em>possible</em> associations—not a diagnosis. Blur sliders are 0–10, so 3+ counts as 30+.
          Can’t see uses 30% or more of the grid marked.
        </p>
        <ul class="diagnosis-potential-list">
          <li v-for="item in potentialDiagnosesFromScores" :key="item.key">
            <span class="diagnosis-potential-name">{{ item.label }}</span>
            <span class="diagnosis-potential-meta"> — suggested by {{ item.from }} ({{ item.scoreLabel }})</span>
          </li>
        </ul>
      </section>

      <div v-show="hasSymptomNarrative" class="diagnosis-result">
        <div class="eye-diagnosis">
          <h3>Your eye</h3>
          <div id="eye-diagnosis"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

function symptomListFromQuery(q) {
  const left = q.leftEyeSymptoms ? String(q.leftEyeSymptoms).split(',').filter(Boolean) : []
  const right = q.rightEyeSymptoms ? String(q.rightEyeSymptoms).split(',').filter(Boolean) : []
  const useLeft = left.length > 0 || right.length === 0
  return useLeft ? left : right
}

const hasSymptomNarrative = computed(() => symptomListFromQuery(route.query).length > 0)

const SLIDER_EYE1 = [
  ['colorSlider1', 'Brightness'],
  ['blurSlider1', 'Blur'],
  ['blurUpCloseSlider1', 'Blur Dog'],
  ['blurFarAwaySlider1', 'Blur Mountains'],
  ['curtainSlider1', 'Curtain'],
  ['warpSlider1', 'Warp'],
  ['floatersSlider1', 'Floaters'],
  ['sizeSlider1', 'Floater size'],
  ['hazeSlider1', 'Haze']
]

/** Threshold on a 0–100 style scale (blur sliders 0–10 are compared as value × 10). */
const SCORE_THRESHOLD = 30

function qVal(q, key) {
  const v = q[key]
  if (Array.isArray(v)) return v[0]
  return v
}

function numVal(q, key) {
  const raw = qVal(q, key)
  if (raw === undefined || raw === '') return null
  const n = Number(raw)
  return Number.isFinite(n) ? n : null
}

function buildSliderRows(q, pairs) {
  const rows = []
  for (const [key, label] of pairs) {
    const raw = qVal(q, key)
    if (raw === undefined || raw === '') continue
    rows.push({ key, label, value: String(raw) })
  }
  return rows
}

function parseGlaucoma(val) {
  if (val === undefined || val === null || val === '') return null
  const s = String(val).replace(/[^01]/g, '').slice(0, 16)
  if (s.length !== 16) {
    return { active: null, total: 16, grid: null, gridChars: [], invalid: true, raw: String(val) }
  }
  const active = [...s].filter(c => c === '1').length
  return { active, total: 16, grid: s, gridChars: s.split(''), invalid: false, raw: null }
}

const sliderReport = computed(() => buildSliderRows(route.query, SLIDER_EYE1))

const sightLossReport = computed(() => {
  const g = parseGlaucoma(qVal(route.query, 'glaucoma1'))
  if (!g) return null
  return {
    active: g.invalid ? '—' : g.active,
    total: g.total,
    grid: g.grid,
    gridChars: g.gridChars
  }
})

const hasReport = computed(() => {
  return sliderReport.value.length > 0 || sightLossReport.value != null
})

const potentialDiagnosesFromScores = computed(() => {
  const q = route.query
  const rows = []

  const blurFar = numVal(q, 'blurFarAwaySlider1')
  if (blurFar != null && blurFar * 10 >= SCORE_THRESHOLD) {
    rows.push({
      key: 'myopia',
      label: 'Myopia (nearsightedness)',
      from: 'Blur Mountains',
      scoreLabel: `${blurFar} / 10`
    })
  }

  const blurNear = numVal(q, 'blurUpCloseSlider1')
  if (blurNear != null && blurNear * 10 >= SCORE_THRESHOLD) {
    rows.push({
      key: 'hyperopia',
      label: 'Hyperopia (farsightedness)',
      from: 'Blur Dog',
      scoreLabel: `${blurNear} / 10`
    })
  }

  const blur = numVal(q, 'blurSlider1')
  if (blur != null && blur * 10 >= SCORE_THRESHOLD) {
    rows.push({
      key: 'astigmatism',
      label: 'Astigmatism',
      from: 'Blur',
      scoreLabel: `${blur} / 10`
    })
  }

  const g = parseGlaucoma(qVal(q, 'glaucoma1'))
  if (g && !g.invalid && g.total > 0) {
    const pct = (g.active / g.total) * 100
    if (pct >= SCORE_THRESHOLD) {
      rows.push({
        key: 'glaucoma',
        label: 'Glaucoma (sight loss pattern)',
        from: 'Can’t see (grid)',
        scoreLabel: `${g.active} / ${g.total} regions (${Math.round(pct)}%)`
      })
    }
  }

  const haze = numVal(q, 'hazeSlider1')
  if (haze != null && haze >= SCORE_THRESHOLD) {
    rows.push({
      key: 'cataracts',
      label: 'Cataracts',
      from: 'Haze',
      scoreLabel: `${haze} / 100`
    })
  }

  const curtain = numVal(q, 'curtainSlider1')
  if (curtain != null && curtain >= SCORE_THRESHOLD) {
    rows.push({
      key: 'detached-retina',
      label: 'Detached retina (possible)',
      from: 'Curtain',
      scoreLabel: `${curtain} / 100`
    })
  }

  return rows
})

function generateDiagnosis(symptoms, severity) {
  let diagnosis = ''
  const conditions = {
    'blurred-vision': {
      mild: 'You may be experiencing mild blurred vision, which could be related to refractive errors or eye strain.',
      moderate: 'Your blurred vision appears to be moderate, which could indicate developing refractive errors or other eye conditions.',
      severe: 'Your severe blurred vision could indicate significant refractive errors or other serious eye conditions.'
    },
    'floaters': {
      mild: 'You may be experiencing mild floaters, which are common and usually harmless.',
      moderate: 'Your moderate floaters could be related to age-related changes in the vitreous humor.',
      severe: 'Your severe floaters, especially if sudden, could indicate a more serious condition.'
    },
    'light-sensitivity': {
      mild: 'You may be experiencing mild light sensitivity, which could be related to eye strain or minor inflammation.',
      moderate: 'Your moderate light sensitivity could indicate inflammation or other eye conditions.',
      severe: 'Your severe light sensitivity could indicate significant inflammation or other serious conditions.'
    },
    'eye-pain': {
      mild: 'You may be experiencing mild eye pain, which could be related to eye strain or minor irritation.',
      moderate: 'Your moderate eye pain could indicate inflammation or other eye conditions.',
      severe: 'Your severe eye pain could indicate a serious condition that requires immediate attention.'
    },
    'redness': {
      mild: 'You may be experiencing mild eye redness, which could be related to irritation or minor inflammation.',
      moderate: 'Your moderate eye redness could indicate inflammation or other eye conditions.',
      severe: 'Your severe eye redness could indicate significant inflammation or other serious conditions.'
    }
  }
  if (symptoms.length > 0) {
    diagnosis = '<p>Based on your reported symptoms and their severity, here is what you might be experiencing:</p><ul>'
    symptoms.forEach(symptom => {
      if (conditions[symptom]) {
        diagnosis += `<li>${conditions[symptom][severity]}</li>`
      }
    })
    diagnosis += '</ul>'
  }
  return diagnosis
}

function generateRecommendations(symptoms) {
  if (!symptoms.length) {
    return ''
  }
  return `
    <div class="next-steps">
      <h4>Recommended Next Steps:</h4>
      <ul>
        <li>Schedule an appointment with an eye care professional for a comprehensive eye examination</li>
        <li>Keep track of your symptoms and how they change over time</li>
        <li>Visit our <a href="/resources">Eye Care Resources</a> page for information about professional eye care services</li>
        <li>Learn more about common eye conditions on our <a href="/issues">Common Eye Issues</a> page</li>
      </ul>
    </div>
  `
}

onMounted(() => {
  const q = route.query
  const left = q.leftEyeSymptoms ? String(q.leftEyeSymptoms).split(',').filter(Boolean) : []
  const right = q.rightEyeSymptoms ? String(q.rightEyeSymptoms).split(',').filter(Boolean) : []
  const useLeft = left.length > 0 || right.length === 0
  const symptoms = useLeft ? left : right
  const severity = useLeft ? String(q.leftEyeSeverity || 'mild') : String(q.rightEyeSeverity || 'mild')

  const html = generateDiagnosis(symptoms, severity)
  const container = document.getElementById('eye-diagnosis')
  if (container) container.innerHTML = html

  const recommendations = generateRecommendations(symptoms)
  const result = document.querySelector('.diagnosis-result')
  result?.insertAdjacentHTML('beforeend', recommendations)

  const checkbox = document.getElementById('disclaimer-checkbox')
  const diagnosisContent = document.getElementById('diagnosis-content')
  checkbox?.addEventListener('change', function() {
    if (this.checked) diagnosisContent?.classList.add('active')
    else diagnosisContent?.classList.remove('active')
  })
})
</script>

<style scoped>
.diagnosis-report {
  margin: 1rem 0 1.5rem;
  padding: 1rem 1.1rem;
  border-radius: 10px;
  border: 1px solid var(--border-subtle, #2a3340);
  background: var(--surface-elevated, rgba(15, 23, 42, 0.35));
}

.diagnosis-report h3 {
  margin: 0 0 0.35rem;
  font-size: 1.15rem;
}

.diagnosis-report-lead {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  opacity: 0.85;
}

.diagnosis-potential {
  margin: 1.25rem 0 1.5rem;
  padding: 1rem 1.1rem;
  border-radius: 10px;
  border: 1px solid var(--border-subtle, #2a3340);
  background: var(--surface-elevated, rgba(15, 23, 42, 0.35));
}

.diagnosis-potential h3 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}

.diagnosis-potential-lead {
  margin: 0 0 0.85rem;
  font-size: 0.88rem;
  line-height: 1.45;
  opacity: 0.88;
}

.diagnosis-potential-list {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.5;
}

.diagnosis-potential-list li {
  margin: 0.35rem 0;
}

.diagnosis-potential-name {
  font-weight: 600;
  color: var(--text-strong, #f1f5f9);
}

.diagnosis-potential-meta {
  opacity: 0.9;
}

.report-block {
  margin-top: 1rem;
}

.report-block:first-of-type {
  margin-top: 0;
}

.report-block-title {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.report-table-wrap {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid var(--border-subtle, #2a3340);
  background: var(--surface-table, rgba(15, 23, 42, 0.35));
}

.report-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  line-height: 1.35;
}

.report-table thead th {
  text-align: left;
  padding: 0.55rem 0.75rem;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted, #94a3b8);
  background: var(--surface-table-head, rgba(30, 41, 59, 0.65));
  border-bottom: 1px solid var(--border-subtle, #2a3340);
}

.report-th-num {
  text-align: right;
}

.report-table tbody td,
.report-table tbody th {
  padding: 0.45rem 0.75rem;
  vertical-align: middle;
  border-bottom: 1px solid var(--border-subtle, #2a3340);
}

.report-table tbody tr:last-child td,
.report-table tbody tr:last-child th {
  border-bottom: none;
}

.report-table tbody tr:nth-child(even) td,
.report-table tbody tr:nth-child(even) th[scope='row'] {
  background: var(--surface-table-stripe, rgba(30, 41, 59, 0.25));
}

.report-table tbody th[scope='row'] {
  font-weight: 500;
  text-align: left;
  color: var(--text-soft, #cbd5e1);
}

.report-td-num {
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--text-strong, #f1f5f9);
}

.report-table-sight tbody tr:first-child th[scope='row'] {
  width: 40%;
}

.report-td-grid-label {
  padding: 0.65rem 0.75rem;
  vertical-align: middle;
}

.report-tr-grid .report-td-grid-label {
  border-top: 1px solid var(--border-subtle, #2a3340);
  background: var(--surface-table-stripe, rgba(30, 41, 59, 0.25));
}

.sight-loss-grid-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.sight-loss-grid-caption {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted, #94a3b8);
}

.sight-loss-mini-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
  width: 5.5rem;
  aspect-ratio: 1;
}

.sight-loss-cell {
  border-radius: 2px;
  background: var(--sight-off, rgba(148, 163, 184, 0.2));
  border: 1px solid var(--border-subtle, #334155);
}

.sight-loss-cell.is-on {
  background: var(--sight-on, #2563eb);
  border-color: #3b82f6;
}
</style>
