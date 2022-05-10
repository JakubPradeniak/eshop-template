<script>
export default {
    name: "CategoriesSidebar",
    props: {
        categories: Array,
        selected: Object
    },
    data() {
        return {
            mobileCategoriesOpened: false
        }
    },
    methods: {
        toggleMobileCategories() {
            this.mobileCategoriesOpened = !this.mobileCategoriesOpened
        }
    }
}
</script>

<template>
    <div @click="toggleMobileCategories" class="categories-sidebar-toggle">
        Show categories
    </div>
    <div
        @click="toggleMobileCategories"
        :class="{'categories-sidebar-overlay--active': mobileCategoriesOpened}"
        class="categories-sidebar-overlay"
    ></div>
    <aside
        :class="{'categories-sidebar--active': mobileCategoriesOpened}"
        class="categories-sidebar"
    >
        <ul class="categories-list">
            <li v-for="category in categories" :key="category.uid">
                <RouterLink
                    :to="{name: 'category', params: { slug: category.url_key }}"
                    :class="{'categories-list__link--active': selected && category.url_key === selected.url_key}"
                    class="categories-list__link"
                >
                    {{ category.name }}
                </RouterLink>
                <ul v-if="category.children_count !== '0'" class="categories-list categories-list--sub">
                    <li v-for="subcategory in category.children" :key="subcategory.uid">
                        <RouterLink
                            :to="{name: 'category', params: { slug: subcategory.url_key }}"
                            :class="{'categories-list__link--active': selected && subcategory.url_key === selected.url_key}"
                            class="categories-list__link"
                        >
                            {{ subcategory.name }}
                        </RouterLink>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<style>
.categories-sidebar {
    background: var(--color-light);
    padding: 1rem;
    min-width: max-content;
}

.categories-sidebar-toggle {
    background: var(--color-light);
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1.25rem;
    text-align: center;
    cursor: pointer;
    display: none;
    user-select: none;
}

.categories-sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--semi-transparent);
    z-index: -100;
    opacity: 0;
    transition: all .25s ease-in-out;
}

.categories-list {
    flex-direction:column;
    list-style-type: none;
    padding: 0;
    font-size: 1.2rem;
}

.categories-list--sub {
    margin-left: 1.5rem;
}

.categories-list__link {
    display: block;
    color: var(--color);
    text-decoration: none;
    padding: .25rem;
    transition: all .25s ease-in-out;
}

.categories-list__link:hover, .categories-list__link--active {
    color: var(--color-light);
    background: var(--semi-transparent);
}

/* @media to secure responsiveness */
/* Phones */
@media screen and (max-width: 635px) {
    .categories-sidebar {
        height: calc(100vh - 64px); /* VH - height of navbar */
        overflow-y: auto;
        position: fixed;
        top: 64px; /* Place it under navbar */
        left: -100%;
        z-index: 600;
        transition: all .25s ease-in-out;
    }

    .categories-sidebar--active {
        left: 0;
    }

    .categories-sidebar-overlay--active {
        z-index: 500;
        opacity: 1;
    }

    .categories-sidebar-toggle {
        display: block;
    }
}
</style>
