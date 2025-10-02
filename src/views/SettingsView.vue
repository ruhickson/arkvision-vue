<template>
  <div class="settings">
    <h2>Settings</h2>
    <div class="setting-item">
      <label>
        <input type="checkbox" v-model="dark" @change="toggleDark" />
        Dark mode
      </label>
    </div>
    <div class="setting-item">
      <label>
        <input type="checkbox" v-model="accessible" @change="toggleAccessible" />
        Accessible mode (grayscale + larger fonts)
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const dark = ref(true)
const accessible = ref(false)
onMounted(() => {
  dark.value = document.body.classList.contains('dark-mode')
  accessible.value = document.body.classList.contains('accessible-mode')
})
function toggleDark() {
  document.body.classList.toggle('dark-mode', dark.value)
}
function toggleAccessible() {
  document.body.classList.toggle('accessible-mode', accessible.value)
}
</script>

<style scoped>
.settings { 
  max-width: 800px; 
  margin: 20px auto; 
  padding: 0 16px; 
  color: #fff;
}
.settings h2 {
  color: #fff;
}
.setting-item { 
  margin: 12px 0; 
  color: #fff;
}
.setting-item label {
  color: #fff;
  cursor: pointer;
}
</style>

