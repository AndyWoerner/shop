import Vue from 'vue'
import Vuex from 'vuex'

// Module importieren
import cart from "./modules/cart"
import product from "./modules/product"
Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    cart,
    product
  }
})
