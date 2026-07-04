import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from './HomeView.vue';
import AboutView from './AboutView.vue';
import HeroView from '@/views/HeroView.vue';
import OurCoffeeView from '@/views/OurCoffeeView.vue';
import { createWebHistory, createRouter } from 'vue-router';
const routes = [
  { path: '/', component: HeroView },
  { path: '/about', component: OurCoffeeView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
