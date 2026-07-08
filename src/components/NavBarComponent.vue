<script>
import logo from '@/assets/logo/Logo.svg';

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