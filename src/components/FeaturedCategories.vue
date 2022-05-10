<script>
import CategoryPanel from "./CategoryPanel.vue"

export default {
    name: "FeaturedCategories",
    props: {
        categories: Array
    },
    components: {
        CategoryPanel
    },
}
</script>

<template>
    <div class="category-box">
        <CategoryPanel v-for="category in categories" :key="category.uid" :category="category" />
    </div>
</template>

<style>
.category-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5rem;
}

/* @media to secure responsiveness */

/* Tables */
/* @media screen and (max-width: 968px) {
    .content {
        padding-left: 50px;
        padding-right: 50px;
    }
} */

/* Phones */
@media screen and (max-width: 635px) {
    .category-box {
        display: block;
    }
}
</style>
