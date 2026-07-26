const cards = {
  state: {
    bestSellers: [],
    coffees: [],
    goods: [],
    searchValue: '',
    sortValue: '',
  },

  mutations: {
    setCoffeeData(state, data) {
      state.coffees = data;
    },

    setGoodsData(state, data) {
      state.goods = data;
    },

    setBestSellersData(state, data) {
      state.bestSellers = data;
    },

    setSearchValue(state, value) {
      state.searchValue = value;
    },

    setSortValue(state, value) {
      state.sortValue = value;
    },
  },

  actions: {
    setCoffeeData({ commit }, data) {
      commit('setCoffeeData', data);
    },

    setGoodsData({ commit }, data) {
      commit('setGoodsData', data);
    },

    setBestSellersData({ commit }, data) {
      commit('setBestSellersData', data);
    },

    setSearchValue({ commit }, value) {
      commit('setSearchValue', value);
    },
    setSortValue({ commit }, value) {
      console.log(value);
      commit('setSortValue', value);
    },
  },

  getters: {
    getCoffeeCards(state) {
      return state.coffees
        .filter((item) => item.name.toLowerCase().includes(state.searchValue.toLowerCase()))
        .filter((item) => item.country.toLowerCase().includes(state.sortValue.toLowerCase()));
    },

    getBestSellersCoffeeCards(state) {
      return state.bestSellers;
    },

    getGoodsCoffeeCards(state) {
      return state.goods;
    },

    getCoffeeById(state) {
      return (id) => state.coffees.find((card) => card.id === +id);
    },

    getGoodsById(state) {
      return (id) => state.goods.find((card) => card.id === +id);
    },

    getSearchValue(state) {
      return state.searchValue;
    },
  },
};

export default cards;
