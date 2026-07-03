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

const c1 = create()
const c2 = create()

c1.inc()
c1.inc()
c2.inc
console.log(c1.get(), c1.get());