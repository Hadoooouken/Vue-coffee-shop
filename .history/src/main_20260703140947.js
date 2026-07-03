import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

const create = () => {
  let count = 0;

  return {
    inc: () => ++count,
    get: () => count,
  };
};

const a = create();
const b = a;

a.inc();
b.inc();

console.log(a.get(), b.get());

// const c1 = create();
// const c2 = create();

// c1.inc();
// c1.inc();
// c2.inc();
// console.log(c1.get(), c2.get());
