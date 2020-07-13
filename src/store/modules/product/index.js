import axios from "axios"

const state = {
    productItems: []
}

const mutations = {
    //wenn unsere Anwedung startet werden wir daten vom server holen -> productItems werden dann geändert
    UPDATE_PRODUCT_ITEMS (state, payload) {
        // payload ist das Array das wir vom Server bekommen
        state.productItems = payload
    }
}

const actions = {
    getProductItems({ commit }) {
        //nur Anfrage, daher kein payload
        axios.get("/api/products")
            .then((response) => {
                // console.log(response);
                commit("UPDATE_PRODUCT_ITEMS", response.data)
            })
    }
}
 
const getters = {
    productItems: state => state.productItems,
    productItemById: state => id => state.productItems.find(productItem => productItem.id === id)
}

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule