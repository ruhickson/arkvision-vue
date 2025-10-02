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
      <div class="diagnosis-result">
        <div class="eye-diagnosis">
          <h3>Left Eye</h3>
          <div id="left-eye-diagnosis"></div>
        </div>
        <div class="eye-diagnosis">
          <h3>Right Eye</h3>
          <div id="right-eye-diagnosis"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

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
  } else {
    diagnosis = '<p>No specific symptoms were reported for this eye. Please use the vision simulator to select your symptoms for a more accurate assessment.</p>'
  }
  return diagnosis
}

function generateRecommendations(leftEyeSymptoms, rightEyeSymptoms) {
  const hasSymptoms = leftEyeSymptoms.length > 0 || rightEyeSymptoms.length > 0
  if (!hasSymptoms) {
    return '<p>No specific symptoms were reported. Please use the vision simulator to select your symptoms for a more accurate assessment.</p>'
  }
  return `
    <div class="next-steps">
      <h4>Recommended Next Steps:</h4>
      <ul>
        <li>Schedule an appointment with an eye care professional for a comprehensive eye examination</li>
        <li>Keep track of your symptoms and their progression in both eyes</li>
        <li>Visit our <a href="/resources">Eye Care Resources</a> page for information about professional eye care services</li>
        <li>Learn more about common eye conditions on our <a href="/issues">Common Eye Issues</a> page</li>
      </ul>
    </div>
  `
}

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const leftEyeSymptoms = urlParams.get('leftEyeSymptoms') ? urlParams.get('leftEyeSymptoms').split(',') : []
  const rightEyeSymptoms = urlParams.get('rightEyeSymptoms') ? urlParams.get('rightEyeSymptoms').split(',') : []
  const leftEyeSeverity = urlParams.get('leftEyeSeverity') || 'mild'
  const rightEyeSeverity = urlParams.get('rightEyeSeverity') || 'mild'

  const leftHtml = generateDiagnosis(leftEyeSymptoms, leftEyeSeverity)
  const rightHtml = generateDiagnosis(rightEyeSymptoms, rightEyeSeverity)
  const leftContainer = document.getElementById('left-eye-diagnosis')
  const rightContainer = document.getElementById('right-eye-diagnosis')
  if (leftContainer) leftContainer.innerHTML = leftHtml
  if (rightContainer) rightContainer.innerHTML = rightHtml

  const recommendations = generateRecommendations(leftEyeSymptoms, rightEyeSymptoms)
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
.diagnosis-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 16px;
  color: #fff;
}

.diagnosis-container h2 {
  color: #fff;
}

.diagnosis-container h3 {
  color: #fff;
}

.diagnosis-container p {
  color: #ccc;
}

.disclaimer-container {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
}

.disclaimer-text {
  color: #fff;
  margin-bottom: 12px;
}

.disclaimer-checkbox label {
  color: #fff;
  cursor: pointer;
}

.diagnosis-result {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 16px;
}

.eye-diagnosis {
  margin-bottom: 20px;
}

.eye-diagnosis:last-child {
  margin-bottom: 0;
}
</style>

