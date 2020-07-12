<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div 
            class="col-3" 
            v-for="productItem in productItems" 
            :key="productItem.id"
          >
            
            <ProductListItem :productItem="productItem" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem";
export default {
  name: "ProductList",
  components: {
    ProductListItem
  },
  //Wenn diese Component erstellt wird, sollen die Daten geholt werden.
  // der Dispatch wurde in App.vue ausgelagert um die Daten zum Start der App abzuholen.
  // created() {
  //   this.$store.dispatch("getProductItems");
  // },
  computed: {
    //kann auch über die mapGetters Methode schöner erzeugt werden.
    productItems() {
      return this.$store.getters.productItems;
    }
  }
};
</script>

<style scoped>
</style>