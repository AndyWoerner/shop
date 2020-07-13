<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-6 offset-3">
                <h3 class="text-uppercase">
                    Bestellung abschließen
                </h3>
                <p class="lead">
                   Gesamtkosten exklusive Versandkosten: {{ cartTotal }} €
                </p>
                <button class="btn bg-vue2 rounded-pill btn-block">
                    Kaufen
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    name: "Checkout",
    computed: {
        ...mapGetters([
            "cartTotal"
        ])
    }
}
</script>

<style scoped>
    
</style>