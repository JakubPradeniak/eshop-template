<script>
export default {
    name: "ProductPage",
    props: {
        product: Object
    },
    methods: {
        /**
         * Placeholder functionality for unimplemented parts of app
         */
        clickPlaceholder() {
            window.alert("This part of app has to be implemented before deployment.")
        },
    },
}
</script>

<template>
 <div class="product">
    <img :src="product.thumbnail.url" :alt="product.name" class="product__image">
    <div class="product__text">
        <h1 class="product__name">
            {{ product.name }}
        </h1>
        <p class="product__add-to-cart">
            <span class="product__price">
                {{ product.price_range.minimum_price.regular_price.value }} {{ product.price_range.minimum_price.regular_price.currency }}
            </span>
            <button @click="clickPlaceholder" class="product__cart-button">
                Buy
                &nbsp;
                <span class="material-symbols-outlined">
                    shopping_bag
                </span>
            </button>
        </p>
        <div v-html="product.description.html" class="product__description"></div>
    </div>
 </div>
</template>

<style>
.product {
    display: grid;
    grid-template-columns: 35% auto;
    gap:1.5rem;
}

.product__image {
    max-width: 100%;
}

.product__text {
    background: var(--color-light);
    padding: 1rem;
}

.product__name {
    font-weight: 600;
}

.product__add-to-cart {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.product__price {
    font-weight: 600;
    font-size: 1.3rem;
}

.product__cart-button {
    display: flex;
    align-items: center;
    border: none;
    background: var(--theme-secondary);
    color: var(--color-light);
    font-size: 1.15rem;
    cursor: pointer;
    padding: .3rem .5rem;
    transition: all .25s ease-in-out;
}

.product__cart-button:hover {
    background-color: var(--theme-primary);
}

/* @media to secure responsiveness */
/* Tables */
@media screen and (max-width: 968px) {
    .product {
        grid-template-columns: 1fr;
    }

    .product__image {
        grid-row-start: 2;
    }
}
</style>
