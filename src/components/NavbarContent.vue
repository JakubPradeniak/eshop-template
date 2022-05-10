<script>
export default {
    name: "NavbarContent",
    props: {
        mobileNav: Boolean
    },
    data() {
        return {
            /**
             * Search bar content
             */
            search: "",
        }
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
    <form class="navigation-search" action="" @submit.prevent="clickPlaceholder">
        <input
            class="navigation-search__input"
            v-model="search"
            type="text"
            name="search"
            placeholder="Today I want..."
        >
        <button class="navigation-search__button" type="submit">
            <span class="material-symbols-outlined">
                search
            </span>
        </button>
    </form>
    <div class="navigation__links">
        <RouterLink :to="{
                name: 'category',
                params: { slug: 'venia-tops' }
            }"
            class="navigation__link"
        >
            Browse products
        </RouterLink>
        <a @click.prevent="clickPlaceholder" href="#" class="navigation__link">My account</a>
        <a @click.prevent="clickPlaceholder" href="#" class="navigation__link navigation__link--icon">
            <span class="material-symbols-outlined">
                shopping_bag
            </span>
            <span v-if="mobileNav">&nbsp;Shopping bag</span>
        </a>
    </div>
</template>

<style>
.navigation__links {
    display: flex;
}

.navigation__link,
.navigation__link:visited {
    color: var(--color-light);
    font-weight: 600;
    text-decoration: none;
    transition: all .25s ease-in-out;
    padding: 1rem 1.25rem;
    cursor: pointer;
}

.navigation__link:hover {
    background-color: var(--semi-transparent);
}

.navigation__link--icon {
    display: flex;
    align-items: center;
}

.navigation-search {
    display: flex;
}

.navigation-search__input {
    font-size: 1.15rem;
    font-weight: 300;
    font-style: italic;
    width: 220px;
    padding: 0 .25rem;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
    border: none;
}

.navigation-search__input::placeholder {
    font-weight: 300;
    color: var(--color-gray);
}

.navigation-search__button {
    display: flex;
    align-items: center;
    border: none;
    background: white;
    cursor: pointer;
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
    transition: all .25s ease-in-out;
}

.navigation-search__button:hover {
    background-color: rgba(255, 255, 255, 0.75);
}

/* @media to secure responsiveness */
/* Smaller PC screens */
@media screen and (max-width: 1280px) {
    .navigation {
        padding: 0 80px;
    }
}

/* Tables */
@media screen and (max-width: 968px) {
    .navigation__links {
        flex-direction: column;
        margin-top: .5rem;
    }

    .navigation-search__input {
        width: calc(200px - 36px);
    }
}
</style>
