<script setup>
import { ref, onMounted } from 'vue'

const mobileMenuOpen = ref(false)
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}
function toggleAccessible() {
  document.body.classList.toggle('accessible-mode')
}

onMounted(() => {
  document.body.classList.add('dark-mode')
})
</script>

<template>
  <div>
    <header class="header">
      <div class="header-content">
        <h1>
          <router-link to="/">ArkSight</router-link>
          <span class="logo-ovo"> OvO</span>
        </h1>
        <button class="accessible-btn" @click="toggleAccessible">Accessible</button>
      </div>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <nav class="bottom-nav">
      <router-link to="/issues" class="nav-item">
        <div class="nav-icon">📋</div>
        <div class="nav-label">Issues</div>
      </router-link>
      <router-link to="/resources" class="nav-item">
        <div class="nav-icon">🔗</div>
        <div class="nav-label">Resources</div>
      </router-link>
      <router-link to="/" class="nav-item nav-primary">
        <div class="nav-icon">👁️</div>
        <div class="nav-label">Simulator</div>
      </router-link>
      <router-link to="/about" class="nav-item">
        <div class="nav-icon">ℹ️</div>
        <div class="nav-label">About</div>
      </router-link>
      <router-link to="/settings" class="nav-item">
        <div class="nav-icon">⚙️</div>
        <div class="nav-label">Settings</div>
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
.header { background-color: #1565C0 !important; }
.logo-ovo { font-weight: 700; margin-left: 8px; opacity: 0.9; }
.accessible-btn {
  margin-left: auto;
  background: #0b3a7e;
  border: 1px solid #0f4ea3;
  color: #fff;
  padding: 8px 12px;
}
.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  background: #0f0f10;
  border-top: 1px solid #222;
  padding: 8px 10px;
  z-index: 1200;
}
.nav-item {
  text-align: center;
  color: #cbd5e1;
  text-decoration: none;
  padding: 10px 6px;
  border-radius: 8px;
}
.nav-item.router-link-active { color: #fff; background: #1f2937; }
.nav-icon { font-size: 18px; line-height: 1; }
.nav-label { font-size: 12px; margin-top: 4px; }
.nav-item.nav-primary { background: #2563eb; color: #fff; border-radius: 10px; }
</style>
