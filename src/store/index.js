import { createStore } from 'vuex';
import links from './links';
import cards from './cards';
cards

const store = createStore({
  modules: {
    links,
    cards
  },
});

export default store;
