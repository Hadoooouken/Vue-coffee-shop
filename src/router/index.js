import { createWebHistory, createRouter } from 'vue-router';

import HeroView from '@/views/HeroView.vue';
import OurCoffeeView from '@/views/OurCoffeeView.vue';
import GoodsPageView from '@/views/GoodsPageView.vue';
import ContactsPageView from '@/views/ContactsPageView.vue';
import ThanksPageView from '@/views/ThanksPageView.vue';
import CoffeeItemPage from '../views/CoffeeItemPage.vue';

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/goods', component: GoodsPageView },
  { path: '/contacts', component: ContactsPageView },
  { path: '/thanks', component: ThanksPageView },
  { name: 'coffee', path: '/our-coffee/:id', component: CoffeeItemPage },
  { name: 'goods', path: '/goods/item/:id', component: CoffeeItemPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
