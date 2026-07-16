<script>
import logo from '../assets/logo/Logo_black.svg'
import LinkComponent from "@/components/LinkComponent.vue";

export default {
    data() {
        return {
            logo,
        }
    },
    components: {
        LinkComponent
    },
    computed: {
        links() {
            return this.$store.getters["getFooterLinks"]
        }
    },

}</script>


<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <LinkComponent class="footer__item" :link=links.footer.link>
                            <img :src=logo :alt=links.footer.icon>
                        </LinkComponent>

                        <LinkComponent v-for="link in links.other" :key="link.id" class="footer__item" :link=link.link
                            :text=link.text />

                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="../assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>
