<script>
export default {
    name: "ProductThumb",
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
    <div class="product-thumb">
        <RouterLink :to="{
                name: 'product',
                params: { slug: product.url_key }
        }">
            <img :src="product.thumbnail.url" :alt="product.name" class="product-thumb__image">
        </RouterLink>
        <h3 class="product-thumb__name">
            <RouterLink :to="{
                name: 'product',
                params: { slug: product.url_key }
             }" class="product-thumb__link">
                {{ product.name }}
            </RouterLink>
        </h3>
        <p class="product-thumb__add-to-cart">
            <span class="product-thumb__price">
                {{ product.price_range.minimum_price.regular_price.value }} {{ product.price_range.minimum_price.regular_price.currency }}
            </span>
            <button @click="clickPlaceholder" class="product-thumb__cart-button">
                Buy Now
                &nbsp;
                <span class="material-symbols-outlined">
                    shopping_bag
                </span>
            </button>
        </p>
    </div>
</template>

<style>
.product-thumb {
    padding: .5rem;
    background: var(--color-light);
}

.product-thumb__image {
    max-width: 100%;
}

.product-thumb__name {
    text-align: center;
    font-size: 1.5rem;
}

.product-thumb__link {
    color: var(--color);
    text-decoration: none;
}

.product-thumb__add-to-cart {
    display: flex;
    flex-direction: row;
    padding: 1rem 2rem;
    justify-content: space-between;
}

.product-thumb__price {
    font-weight: 600;
    font-size: 1.3rem;
}

.product-thumb__cart-button {
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

.product-thumb__cart-button:hover {
    background-color: var(--theme-primary);
}

/* Phones */
@media screen and (max-width: 635px) {
    .category-panel {
        margin-bottom: .5rem;
    }
}
</style>
