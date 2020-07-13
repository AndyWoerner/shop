import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import ProductList from "./components/product/ProductList"
import CartList from "./components/cart/CartList"
import ProductItem from "./components/product/ProductItem"
import NotFound from "./components/error/NotFound"

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

    },
    {
        path: "/products/:id",
        component: ProductItem,
        props: true //dynamische Argumente in der URL (:id) werden automatisch in die Props in der Component geschrieben
    },
    { // muss am Ende sein!
        path: "*",
        component: NotFound
    }
]

export const router = new VueRouter( {
    mode: "history", // verhindert, dass "#/" im Browser / URL Feld angezeigt wird
    routes
})