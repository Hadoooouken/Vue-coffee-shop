<script>
import logo from '@/assets/logo/Logo.svg';

import LinkComonent from "@/components/linkComonent.vue";
export default {
    components: {
        LinkComonent
    },
    data() {
        return {
            logo,
            links: [
                {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg'
                },
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
                {

                }
            ]
        }
    }
}</script>

<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <li class="header__item">
                <RouterLink :to=links[0].link> <img :src=logo :alt=links[0].icon>
                </RouterLink>
            </li>
            <LinkComonent class="header__item" :link="links[1].link" :text="links[1].text" />

            <LinkComonent class="header__item" :link="links[2].link" :text="links[2].text" />

            <LinkComonent class="header__item" :link="links[3].link" :text="links[3].text" />
        </ul>
    </header>
</template>