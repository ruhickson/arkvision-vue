import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunk for better caching
          vendor: ['vue', 'vue-router'],
          // Separate chunk for each view
          simulator: ['./src/views/SimulatorView.vue'],
          issues: ['./src/views/IssuesView.vue'],
          resources: ['./src/views/ResourcesView.vue'],
          about: ['./src/views/AboutView.vue'],
          diagnosis: ['./src/views/DiagnosisView.vue'],
          settings: ['./src/views/SettingsView.vue']
        }
      }
    },
    // Enable source maps for development
    sourcemap: process.env.NODE_ENV !== 'production',
    // Optimize chunks
    chunkSizeWarningLimit: 1000
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue', 'vue-router']
  }
})
