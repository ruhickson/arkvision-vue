<template>
  <div class="resources-container">
    <div class="resources-hero">
      <h2>Eye Care Resources in Ireland</h2>
      <p>Trusted services, organisations, and information for eye health and support.</p>
    </div>

    <div class="resource-section emergency-section">
      <h3>Emergency Eye Care</h3>
      <ul class="resource-list">
        <li class="resource-item">
          <a href="https://www.hse.ie/eng/services/list/3/acutehospitals/hospitals/eye-and-ear-hospital/" target="_blank">Royal Victoria Eye and Ear Hospital</a>
          <div class="resource-description">Dublin's main eye emergency department. Open 24/7 for urgent eye care.</div>
        </li>
        <li class="resource-item">
          <a href="https://www2.hse.ie/services/hospital-service-directory/eye-and-ear-hospital/" target="_blank">HSE Eye and Ear Hospital Services</a>
          <div class="resource-description">Directory of public eye care services across Ireland.</div>
        </li>
      </ul>
    </div>

    <div class="resource-section">
      <h3>Professional Organizations</h3>
      <ul class="resource-list">
        <li class="resource-item">
          <a href="https://optometryireland.org/optometryireland.ie/OI_cms/" target="_blank">Optometry Ireland (OI)</a>
          <div class="resource-description">Professional representative body for practicing Optometrists in Ireland.</div>
        </li>
        <li class="resource-item">
          <a href="https://www.rcsi.com/dublin/undergraduate/medicine/ophthalmology" target="_blank">RCSI — Ophthalmology</a>
          <div class="resource-description">Leading institution for ophthalmology education and research.</div>
        </li>
        <li class="resource-item">
          <a href="https://www.icoph.org/" target="_blank">Irish College of Ophthalmologists</a>
          <div class="resource-description">Professional body for ophthalmologists in Ireland.</div>
        </li>
      </ul>
    </div>

    <div class="resource-section">
      <h3>Support Organisations</h3>
      <ul class="resource-list">
        <li class="resource-item">
          <a href="https://www.visionireland.ie/" target="_blank">Vision Ireland</a>
          <div class="resource-description">National organisation providing services and support to people with sight loss in Ireland.</div>
        </li>
        <li class="resource-item">
          <a href="https://www.fightingblindness.ie/" target="_blank">Fighting Blindness</a>
          <div class="resource-description">Patient‑led charity funding research into treatments and cures for blindness.</div>
        </li>
        <li class="resource-item">
          <a href="https://retina-international.org/" target="_blank">Retina International</a>
          <div class="resource-description">Global network focused on retinal degenerative diseases, research, and support.</div>
        </li>
      </ul>
    </div>

    <div class="resource-section">
      <h3>Government Resources</h3>
      <ul class="resource-list">
        <li class="resource-item">
          <a href="https://www.hse.ie/eng/services/list/1/lho/dublinse/eye%20care/" target="_blank">HSE Primary Care Eye Team</a>
          <div class="resource-description">Public eye care services, assessments, and educational resources.</div>
        </li>
        <li class="resource-item">
          <a href="https://www.citizensinformation.ie/en/money-and-tax/tax/tax-credits-and-reliefs-for-people-with-disabilities/tax-reliefs-for-people-with-a-visual-impairment/" target="_blank">Citizens Information — Tax Reliefs</a>
          <div class="resource-description">Tax reliefs and financial supports for people with visual impairment.</div>
        </li>
      </ul>
    </div>

    <div class="resource-section">
      <h3>Research and Education</h3>
      <ul class="resource-list">
        <li class="resource-item">
          <a href="https://www.tudublin.ie/noc/" target="_blank">National Optometry Centre (NOC) — TU Dublin</a>
          <div class="resource-description">Centre for optometry education, research, and specialist eye care.</div>
        </li>
        <li class="resource-item">
          <a href="https://www.tcd.ie/medicine/ophthalmology/" target="_blank">Trinity College Dublin — Ophthalmology</a>
          <div class="resource-description">Ophthalmology education and research at TCD.</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

.style-fix {}
<style scoped>
.resources-container { max-width: 900px; margin: 40px auto; padding: 0 16px; text-align: left; }
.resources-hero { text-align: left; margin-bottom: 12px; }
.resources-container h2, .resources-container h3 { text-align: left; }
.resources-hero h2 { margin: 0 0 6px 0; }
.resource-section { margin: 20px 0 28px 0; }
.resource-section h3 { margin: 0 0 10px 0; }
.emergency-section h3 { color: #f57c00; }
.resource-list { list-style: disc; padding-left: 22px; margin: 0; text-align: left; }
.resource-item { margin: 10px 0; }
.resource-item a { color: #90caf9; text-decoration: none; }
.resource-item a:hover { text-decoration: underline; }
.resource-description { color: #bbb; margin-top: 4px; max-width: 70ch; }
</style>
