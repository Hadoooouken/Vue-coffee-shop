import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

console.log(a);

(function () {
  console.log(a);
  var a = 20;
})();
