<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Navbar />
        <router-view></router-view>
      </div>

      <!-- Navbar ist nun immer vorhanden. router-view ändert sich wenn URL gewechselt wird. -->
      <!-- Package sind nach diesem Tag und ersetzt es mit den entpsrechend in router.js definierten Components  -->
    </div>
    <!-- <div class="row">
      <div class="col-4 p-4">
        <CartList />
      </div>

      <div class="col-8 p-5">
        <ProductList />
      </div>
    </div>-->
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
// import CartList from "./components/cart/CartList";
// import ProductList from "./components/product/ProductList";

export default {
  name: "App",
  components: {
    Navbar
    // CartList,
    // ProductList
  },
  created() {
    const token = localStorage.getItem("token");

    if (token) {
      this.$store.dispatch("getCartItems", token);
      this.$store.dispatch("getProductItems", token);
    }
  }
};
</script>

<style>
.bg-vue {
  background-color: rgb(52, 73, 94);
  color: white;
}
.bg-vue2 {
  background-color: rgb(65, 184, 131);
  color: white;
}
.color-vue {
  color: rgb(52, 73, 94);
}
.color-vue2 {
  color: rgb(65, 184, 131);
}
.cursor-pointer {
  cursor: pointer;
}
</style>