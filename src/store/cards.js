import coffeeThree from '../assets/img/coffee-3.jpg';
import coffeeOne from '../assets/img/coffee-1.jpg';
import coffeeTwo from '../assets/img/coffee-2.jpg';
import coffeeGoods from '../assets/img/good-1.jpg';

const cards = {
  state: {
    bestSellers: [
      {
        id: 0,
        img: coffeeOne,
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
      },

      {
        id: 1,
        img: coffeeTwo,
        name: 'Presto Coffee Beans 1kg',
        price: 15.99,
      },

      {
        id: 2,
        img: coffeeThree,
        name: 'AROMISTICO Coffee 1kg',
        price: 6.99,
      },
    ],
    coffees: [
      {
        id: 0,
        img: coffeeOne,
        name: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73,
      },

      {
        id: 1,
        img: coffeeTwo,
        name: 'Presto Coffee Beans 1kg',
        country: 'Brazil',
        price: 15.99,
      },

      {
        id: 2,
        img: coffeeThree,
        name: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 6.99,
      },
      {
        id: 3,
        img: coffeeOne,
        name: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 10.73,
      },
      {
        id: 4,
        img: coffeeTwo,
        name: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 10.73,
      },
      {
        id: 5,
        img: coffeeThree,
        name: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 10.73,
      },
    ],
    goods: [
      {
        id: 0,
        img: coffeeGoods,
        name: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73,
      },

      {
        id: 1,
        img: coffeeGoods,
        name: 'Presto Coffee Beans 1kg',
        country: 'Brazil',
        price: 15.99,
      },

      {
        id: 2,
        img: coffeeGoods,
        name: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 6.99,
      },
      {
        id: 3,
        img: coffeeGoods,
        name: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 10.73,
      },
      {
        id: 4,
        img: coffeeGoods,
        name: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 10.73,
      },
      {
        id: 5,
        img: coffeeGoods,
        name: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 10.73,
      },
    ],
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
  },

  actions: {
    setCoffeeData({ commit }, data) {
      commit('setCoffeeData', data);
      console.log(data);
    },
    setGoodsData({ commit }, data) {
      commit('setGoodsData', data);
      console.log(data);
    },
    setBestSellersData({ commit }, data) {
      commit('setBestSellersData', data);
      console.log(data);
    },
  },

  getters: {
    getCoffeeCards(state) {
      return { coffees: state.coffees };
    },
    getBestSellersCoffeeCards(state) {
      return { bestSellers: state.bestSellers };
    },
    getGoodsCoffeeCards(state) {
      return { goods: state.goods };
    },

    getCoffeeById(state) {
      return (id) => {
        return state.coffees.find((card) => card.id === +id);
      };
    },

    getGoodsById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === +id);
      };
    },
  },
};

export default cards;
