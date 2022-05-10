<script setup>
import { RouterView } from "vue-router"

import NavBar from "./components/NavBar.vue"
import FooterPanel from "./components/FooterPanel.vue"

</script>

<template>
  <NavBar />
  <main class="content">
    <RouterView />
  </main>
  <FooterPanel />
</template>

<style>
@import "@/assets/base.css";

.content {
  font-weight: normal;
  padding: 5rem 240px 0 240px;
}

/* @media to secure responsiveness */
/* Smaller PC screens */
@media screen and (max-width: 1280px) {
    .content {
        padding-left: 80px;
        padding-right: 80px;
    }
}

/* Tables */
@media screen and (max-width: 968px) {
    .content {
        padding-left: 50px;
        padding-right: 50px;
    }
}

/* Phones */
@media screen and (max-width: 575px) {
    .content {
        padding-left: 20px;
        padding-right: 20px;
    }
}
</style>
