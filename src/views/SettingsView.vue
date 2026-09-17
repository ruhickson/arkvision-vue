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
        Accessible mode (larger text and clearer chrome)
      </label>
      <p class="setting-hint">Does not greyscale the vision simulator.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  setDarkMode,
  setAccessibleMode,
  isAccessibleMode,
  ACCESSIBLE_EVENT
} from '../theme'

const dark = ref(true)
const accessible = ref(false)

function syncAccessible(e) {
  accessible.value = e?.detail?.enabled ?? isAccessibleMode()
}

onMounted(() => {
  dark.value = document.body.classList.contains('dark-mode')
  accessible.value = isAccessibleMode()
  window.addEventListener(ACCESSIBLE_EVENT, syncAccessible)
})

onUnmounted(() => {
  window.removeEventListener(ACCESSIBLE_EVENT, syncAccessible)
})

function toggleDark() {
  setDarkMode(dark.value)
}

function toggleAccessible() {
  setAccessibleMode(accessible.value)
}
</script>

<style scoped>
.settings { max-width: 800px; margin: 20px auto; padding: 0 16px; }
.setting-item { margin: 12px 0; }
.setting-item label {
  font-size: calc(1em + 2pt);
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
}
.setting-item input[type='checkbox'] {
  width: 1.25rem;
  height: 1.25rem;
}
.setting-hint {
  margin: 4px 0 0 1.9rem;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
