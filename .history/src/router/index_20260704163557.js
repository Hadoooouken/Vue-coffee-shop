// import { createWebHistory, createRouter } from 'vue-router';

// import HeroView from '@/views/HeroView.vue';
// import OurCoffeeView from '@/views/OurCoffeeView.vue';

// const routes = [
//   { path: '/', component: HeroView },
//   { path: '/about', component: OurCoffeeView },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;

const routes = [
  {
    path: '/',
    component: {
      template: '<h1>HOME WORKS</h1>'
    }
  },
  {
    path: '/about',
    component: {
      template: '<h1>ABOUT WORKS</h1>'
    }
  }
];