import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import ProductList from "./components/product/ProductList"
import CartList from "./components/cart/CartList"

const routes = [
    // jedes Objekt spezifiziert eine Route
    {
        path: "/",
        // welche Component soll unter diesem Pfad sichtbar sein
        component: ProductList
    },
    {
        path: "/cart",
        component: CartList

    }
]

export const router = new VueRouter( {
    mode: "history", // verhindert, dass "#/" im Browser / URL Feld angezeigt wird
    routes
})