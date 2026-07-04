import { createWebHistory, createRouter } from 'vue-router';

import HeroView from '@/views/HeroView.vue';
import OurCoffeeView from '@/views/OurCoffeeView.vue';

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
   { path: '/goods', component: OurCoffeeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
