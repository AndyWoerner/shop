import axios from "axios"
import * as types from "./mutation-types"

export const actions = {
    getCartItems({commit}, token) {
        axios.get(`/api/cart?token=${token}`)
            .then((response) => {
                commit(types.UPDATE_CART_ITEMS, response.data)
            })
    },
    addCartItem({ commit }, payload){
        return axios.post("/api/cart", payload)
        .then((response) => {
            commit(types.UPDATE_CART_ITEMS, response.data)
        }) //wenn wir einen Datensatz hinzufügen in den Warenkorb, bekommen wir den kompletten Inhalt des aktuellen Warenkorb zurückgeliefert
    },
    removeCartItem({ commit }, payload){
        axios.post("/api/cart/delete", payload)
        .then((response) => {
            commit(types.UPDATE_CART_ITEMS, response.data)
        }) //Beim Löschen des Items wird ein spezieller Endpoint genutzt. Auf dem Server passiert das Löschen mit Hilfe der ID. Zurück kommt wieder der aktuelle Warenkorb
    },
    removeAllCartItems ({commit}) {
        axios.post("/api/cart/delete/all")
            .then((response) => {
                commit(types.UPDATE_CART_ITEMS, response.data)
            })
    },
    removeProductFromCart({ commit }, payload){
        axios.post("/api/cart/product/delete", payload)
            .then((response) => {
                commit(types.UPDATE_CART_ITEMS, response.data)
            })
    }
}