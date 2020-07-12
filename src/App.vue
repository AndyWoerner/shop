<template>
  <div class="container-fluid">
    <div class="row">
      
      <div class="col-12">
        <Navbar />
      </div>
      
      <div class="col-4 p-4">
        <CartList />
      </div>

      <div class="col-8 p-5">
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import CartList from "./components/cart/CartList";
import ProductList from "./components/product/ProductList";
export default {
  name: "App",
  components: {
    Navbar,
    CartList,
    ProductList
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