<script>
import NavbarContent from "./NavbarContent.vue"

export default {
    name: "NavBar",
    components: {
        NavbarContent
    },
    data() {
        return {
            sideNavOpened: false,
            /**
             * Window width for conditional rendering of navigation
             */
            windowWidth: window.innerWidth,
        }
    },
    methods: {
        /**
         * Sidenav open handler
         */
        sidenavToggle() {
            this.sideNavOpened = !this.sideNavOpened
        },
        /**
         * Window resize event handler
         */
        onWindowResize() {
            this.windowWidth = window.innerWidth
        },
    },
    mounted() {
        /**
         * Register resize event
         */
        this.$nextTick(() => {
            window.addEventListener("resize", this.onWindowResize)
        })
    },
    beforeUnmount() {
        /**
         * Remove event
         */
        window.removeEventListener("resize", this.onWindowResize)
    }
}
</script>

<template>
    <nav class="navigation">
        <RouterLink :to="{name: 'home'}" class="navigation__logo">Logo</RouterLink>
        <NavbarContent v-if="windowWidth > 968" :mobileNav="false" />
        <span
            v-if="windowWidth <= 968"
            @click="sidenavToggle"
            class="material-symbols-outlined navigation__link navigation__link--hamburger-menu"
        >
            menu
        </span>
    </nav>
    <div
        v-if="windowWidth <= 968"
        @click="sidenavToggle"
        :class="{'sidenav-overlay--active': sideNavOpened}"
        class="sidenav-overlay"
    ></div>
    <div
        v-if="windowWidth <= 968"
        :class="{'sidenav--active': sideNavOpened}"
        class="sidenav"
    >
        <NavbarContent :mobileNav="true" />
    </div>
</template>

<style>
.navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 240px;
    background-color: var(--theme-secondary);
    color: var(--color-light);
    font-size: 1.25rem;
    z-index: 999;
}

.navigation__logo,
.navigation__logo:visited {
    color: var(--color-light);
    font-weight: 600;
    text-decoration: none;
    transition: all .25s ease-in-out;
    font-size: 1.65rem;
}

.navigation__link--hamburger-menu {
    font-size: 2rem !important;
}

.sidenav {
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 90px 50px;
    background-color: var(--theme-secondary);
    color: var(--color-light);
    font-size: 1.25rem;
    z-index: 800;
    transition: all .25s ease-in-out;
}

.sidenav--active {
    left: 0;
}

.sidenav-overlay {
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

.sidenav-overlay--active {
    z-index: 700;
    opacity: 1;
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
    .navigation {
        padding: 0 50px;
    }
}

/* Phones */
@media screen and (max-width: 575px) {
    .navigation {
        padding: 0 20px;
    }
}
</style>
