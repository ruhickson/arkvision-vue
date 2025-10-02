import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Lazy load components for better performance
const SimulatorView = () => import('./views/SimulatorView.vue')
const IssuesView = () => import('./views/IssuesView.vue')
const ResourcesView = () => import('./views/ResourcesView.vue')
const AboutView = () => import('./views/AboutView.vue')
const DiagnosisView = () => import('./views/DiagnosisView.vue')
const SettingsView = () => import('./views/SettingsView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'simulator', component: SimulatorView },
    { path: '/issues', name: 'issues', component: IssuesView },
    { path: '/resources', name: 'resources', component: ResourcesView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/diagnosis', name: 'diagnosis', component: DiagnosisView },
    { path: '/settings', name: 'settings', component: SettingsView }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

// Hide loading spinner once app is mounted
const spinner = document.getElementById('loading-spinner')
if (spinner) {
  spinner.style.display = 'none'
}
