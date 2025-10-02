<template>
  <div class="about-container">
    <div class="about-section">
      <div class="profile-section">
        <div class="profile-image">
          <img src="/image.png" alt="Ru Hickson">
        </div>
        <div>
          <h2>Ru Hickson</h2>
        </div>
      </div>
      <h2>About the Creator</h2>
      <p>
        As a data analyst and software developer with a deep understanding of visual impairments, I created this tool to help others better understand and empathize with various eye conditions.
      </p>
      <p>
        This project combines technical expertise with firsthand knowledge of visual conditions. By creating an interactive simulation, my goal is to make it easier to discuss visual conditions and their impact on daily life.
      </p>
      <h3>Professional Background</h3>
      <ul class="experience-list">
        <li>
          <strong>Data Analyst</strong>
          Specializing in healthcare data analysis and visualization
        </li>
        <li>
          <strong>Software Developer</strong>
          Creating accessible and user-friendly applications
        </li>
        <li>
          <strong>Patient Advocate</strong>
          Living with and managing glaucoma and uveitis
        </li>
      </ul>
      <div class="motivation-section">
        <h3>Why I Created This Tool</h3>
        <p>
          Having experienced the difficulties of explaining visual conditions to others, I recognized the need for a tool that could help people visualize and understand different eye conditions.
        </p>
        <p>
          My hope is that this tool helps bridge the gap between patients and their support networks.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-container { 
  max-width: 900px; 
  margin: 40px auto; 
  padding: 0 16px; 
  text-align: left; 
  color: #fff;
}
.about-section { 
  background: #111; 
  border: 1px solid #222; 
  border-radius: 14px; 
  padding: 18px; 
  box-shadow: 0 2px 12px rgba(0,0,0,0.18); 
  color: #fff;
}
.profile-section { display: flex; align-items: center; gap: 18px; margin-bottom: 14px; }
.profile-image img { width: 220px; height: auto; border-radius: 12px; display: block; }
h2 { 
  margin: 0 0 8px 0; 
  color: #fff;
}
h3 { 
  margin: 14px 0 8px 0; 
  color: #fff;
}
p { 
  line-height: 1.7; 
  margin: 8px 0; 
  color: #ccc;
}
.experience-list { 
  list-style: disc; 
  padding-left: 22px; 
  margin: 8px 0 0 0; 
  color: #ccc;
}
.experience-list li { 
  margin: 6px 0; 
  color: #ccc;
}
.experience-list strong {
  color: #fff;
}
.motivation-section { 
  background: #0e0e0e; 
  border: 1px solid #1e1e1e; 
  border-radius: 10px; 
  padding: 12px; 
  color: #fff;
}
</style>
