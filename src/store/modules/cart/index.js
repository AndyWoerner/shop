import axios from "axios"

const state = {
    cartItems: []
}

const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload
    }
}

const actions = {
    getCartItems({commit}) {
        axios.get("/api/cart")
            .then((response) => {
                commit("UPDATE_CART_ITEMS", response.data)
            })
    },
    addCartItem({ commit }, payload){
        axios.post("/api/cart", payload)
        .then((response) => {
            commit("UPDATE_CART_ITEMS", response.data)
        }) //wenn wir einen Datensatz hinzufügen in den Warenkorb, bekommen wir den kompletten Inhalt des aktuellen Warenkorb zurückgeliefert
    },
    removeCartItem({ commit }, payload){
        axios.post("/api/cart/delete", payload)
        .then((response) => {
            commit("UPDATE_CART_ITEMS", response.data)
        }) //Beim Löschen des Items wird ein spezieller Endpoint genutzt. Auf dem Server passiert das Löschen mit Hilfe der ID. Zurück kommt wieder der aktuelle Warenkorb
    },
}

const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
       return state.cartItems.reduce((acc, cartItem) => {
            return (cartItem.quantity * cartItem.price) + acc
        }, 0).toFixed(2)
    }
}

const cartModule = {
    state,
    mutations,
    actions,
    getters
}

export default cartModule