import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import HeroView from '@/views/HeroView.vue'

const routes = [
  { path: '/', component: HeroView },
  { path: '/about', component: AboutView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})