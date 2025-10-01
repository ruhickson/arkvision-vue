import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import SimulatorView from './views/SimulatorView.vue'
import IssuesView from './views/IssuesView.vue'
import ResourcesView from './views/ResourcesView.vue'
import AboutView from './views/AboutView.vue'
import DiagnosisView from './views/DiagnosisView.vue'
import SettingsView from './views/SettingsView.vue'

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

createApp(App).use(router).mount('#app')
