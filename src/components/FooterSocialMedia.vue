<script>
import Facebook from "./icons/FacebookIcon.vue"
import Instagram from "./icons/InstagramIcon.vue"
import Pinterest from "./icons/PinterestIcon.vue"
import Twitter from "./icons/TwitterIcon.vue"
import Messenger from "./icons/MessengerIcon.vue"

export default {
    name: "FooterSocialMedia",
    components: {
        Facebook,
        Instagram,
        Pinterest,
        Twitter,
        Messenger,
    }
}
</script>

<template>
    <div class="social-icons">
        <Facebook />
        <Instagram />
        <Pinterest />
        <Twitter />
        <Messenger />
    </div>
</template>

<style>
    .social-icons {
        display: flex;
        flex-direction: row;
        color: var(--color-light);
    }

    .social-icons svg {
        width: 1.5rem;
        fill: var(--color-light);
        margin: .25rem;
        cursor: pointer;
    }
</style>
