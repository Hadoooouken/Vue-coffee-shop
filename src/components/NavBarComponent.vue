<script>
import logo from '@/assets/logo/Logo.svg';

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
            return this.$store.getters["getHeaderLinks"]
        }
    },
}</script>

<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">

            <LinkComponent class="header__item" :link="links.header.link">
                <img :src=logo :alt=links.header.link>
            </LinkComponent>
            <LinkComponent v-for="link in links.other" :key="link.id" class="header__item" :link="link.link"
                :text="link.text" />


        </ul>
    </header>
</template>