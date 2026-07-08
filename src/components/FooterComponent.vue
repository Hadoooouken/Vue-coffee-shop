<script>
import logo from '../assets/logo/Logo_black.svg'
import LinkComponent from "@/components/LinkComponent.vue";

export default {
    components: {
        LinkComponent
    },
    data() {
        return {
            logo,
            links: {
                header:
                {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg'
                },

                other: [

                    {
                        id: 1,
                        text: 'Our coffee',
                        link: '/our-coffee'
                    },
                    {
                        id: 2,
                        text: 'For your pleasure',
                        link: '/goods'
                    },
                    {
                        id: 3,
                        text: 'Contact',
                        link: '/contacts'

                    },

                ]
            }
        }
    }
}</script>


<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <LinkComponent class="footer__item" :link=links.header.link>
                            <img :src=logo :alt=links.header.icon>
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
