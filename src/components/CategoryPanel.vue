<script>
export default {
    name: "CategoryPanel",
    props: {
        category: Object
    }
}
</script>

<template>
 <div class="category-panel" :style="{'--url': `url(${category.image})`}">
         <div class="category-panel__overlay"></div>
         <h3 class="category-panel__heading">{{ category.name }}</h3>
         <RouterLink
            :to="{
                name: 'category',
                params: { slug: category.url_path }
             }"
             class="category-panel__link"
        ></RouterLink>
 </div>
</template>

<style>
.category-panel {
    position: relative;
    height: 250px;
    background-image: var(--url);
    background-size: cover;
    background-position-x: center;
}

.category-panel:hover .category-panel__heading {
    background: var(--semi-transparent);
}

.category-panel:hover .category-panel__overlay {
    opacity: 0;
}

.category-panel__heading {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    transform: translateY(-50%);
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--color-light);
    padding: .25rem;
    transition: all .25s ease-in-out;
}

.category-panel__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--semi-transparent);
    transition: all .25s ease-in-out;
}

.category-panel__link {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* @media to secure responsiveness */

/* Phones */
@media screen and (max-width: 635px) {
    .category-panel {
        margin-bottom: .5rem;
    }
}
</style>
