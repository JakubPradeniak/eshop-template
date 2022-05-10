<script>
import FooterSocialMedia from "./FooterSocialMedia.vue"

export default {
    name:"FooterPanel",
    components: {
        FooterSocialMedia
    },
    data() {
        return {
            /**
             * Dummy data to show in footer
             */
            footerLinks: [
                [
                    {
                        id: 1,
                        name: "Payment & Delivery",
                    },
                    {
                        id: 1,
                        name: "Buyer protection",
                    },
                    {
                        id: 1,
                        name: "Return & Refund",
                    },
                ],
                [
                    {
                        id: 1,
                        name: "Customer service",
                    },
                    {
                        id: 1,
                        name: "Contact us",
                    },
                ],
            ]
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
    <footer class="footer">
        <div class="footer__social-media">
            <h4 class="footer__heading">Stay connected</h4>
            <FooterSocialMedia />
        </div>
        <div class="footer__links">
            <a
                v-for="link in footerLinks[0]"
                :key="link.id"
                @click.prevent="clickPlaceholder"
                class="footer-link"
                href="#"
            >
                {{ link.name }}
            </a>
        </div>
        <div class="footer__links">
            <a
                v-for="link in footerLinks[1]"
                :key="link.id"
                @click.prevent="clickPlaceholder"
                class="footer-link"
                href="#"
            >
                {{ link.name }}
            </a>
            <span class="footer-copy">
                &copy; 2022 E-shop
            </span>
        </div>
    </footer>
</template>

<style>
.footer {
    width: 100%;
    margin-top: 3rem;
    padding: 3rem 240px;
    color: var(--color-light);
    background: var(--theme-secondary);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.footer__heading {
    font-size: 1.25rem;
}

.footer__links {
    display: flex;
    flex-direction: column;
}


.footer-link {
    color: var(--color-light);
    text-decoration: none;
    transition: all .25s ease-in-out;
    padding: .2rem;
}

.footer-link:hover {
    background: var(--semi-transparent);
}

.footer-copy {
    padding: .2rem;
}

/* @media to secure responsiveness */
/* Smaller PC screens */
@media screen and (max-width: 1280px) {
    .footer {
        padding: 3rem 80px;
    }
}

/* Tables */
@media screen and (max-width: 968px) {
    .footer {
        padding: 3rem 50px;
    }
}

/* Phones */
@media screen and (max-width: 635px) {
    .footer {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        text-align: center;
    }
}
</style>
