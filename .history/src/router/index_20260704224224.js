import { createWebHistory, createRouter } from 'vue-router';

import HeroView from '@/views/HeroView.vue';
import OurCoffeeView from '@/views/OurCoffeeView.vue';
import GoodsPageView from '@/views/GoodsPageView.vue';
import ContactsPageView from '@/views/ContactsPageView.vue';
import ThanksPageView from '@/views/ThanksPageView.vue';


const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/goods', component: GoodsPageView },
  { path: '/contacts', component: ContactsPageView },
    { path: '/contacts', component: ThanksPageView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
