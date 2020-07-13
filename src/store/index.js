import Vue from 'vue'
import Vuex from 'vuex'

// Module importieren
import cart from "./modules/cart"
import product from "./modules/product"
import favorite from "./modules/favorite"
import auth from "./modules/auth"
Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    auth,
    cart,
    product,
    favorite
  }
})
