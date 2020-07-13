import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
//öffentliche components
import Signin from "./components/auth/Signin"

//interne components
import ProductList from "./components/product/ProductList"
import CartList from "./components/cart/CartList"
import ProductItem from "./components/product/ProductItem"
import Checkout from "./components/cart/Checkout"

//error components
import NotFound from "./components/error/NotFound"

const routes = [
    // jedes Objekt spezifiziert eine Route
    {
        path: "/login",
        component: Signin,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem("token")
            if (token) next ("/")
            else next()
        }
    },
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
        props: true
        //dynamische Argumente in der URL (:id) werden automatisch in die Props in der Component geschrieben
    },
    {
        path: "/checkout",
        component: Checkout
    },
    { // muss am Ende sein!
        path: "*",
        component: NotFound
    }
]

const router = new VueRouter( {
    mode: "history", // verhindert, dass "#/" im Browser / URL Feld angezeigt wird
    routes
})

//Globaler Route Guard
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token")
    //wenn token nicht gesetzt ist und wir nicht von der Login-Seite kommen, werden wir auf die Login Seite geschickt.
    if (!token && to.path !== "/login") {
        next("/login")
    //wenn der token gesetzt ist oder wir von der Login Seite kommen, passiert das normale routing.
    } else {
        next()
    }
})

export default router