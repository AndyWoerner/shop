<template>
  <div>
    <h3 class="text-uppercase">Shop</h3>

    <div class="row">
      <div class="col-3" v-for="productItem in productItems" :key="productItem.id">
        <ProductListItem 
          :productItem="productItem"
          />

      
      </div>
    </div>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem"
export default {
  name: "ProductList",
  components: {
    ProductListItem
    },
  //Wenn diese Component erstellt wird, sollen die Daten geholt werden.
  created() {
    this.$store.dispatch("getProductItems");
  },
  computed: {
    productItems() {
      return this.$store.getters.productItems;
    }
  }
};
</script>

<style scoped>
</style>