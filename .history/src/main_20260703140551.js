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
console.log(create());