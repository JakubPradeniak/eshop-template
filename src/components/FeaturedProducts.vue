<script>
import ProductThumb from "./ProductThumb.vue"

export default {
    name: "FeaturedProducts",
    props: {
        products: Array
    },
    components: {
        ProductThumb
    },
}
</script>

<template>
    <div class="product-box">
        <ProductThumb v-for="product in products" :key="product.uid" :product="product" />
    </div>
</template>

<style>
.product-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 1rem;
}

/* @media to secure responsiveness */

/* Tables */
@media screen and (max-width: 968px) {
    .product-box {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Phones */
@media screen and (max-width: 635px) {
    .product-box {
        grid-template-columns: 1fr;
    }
}
</style>
