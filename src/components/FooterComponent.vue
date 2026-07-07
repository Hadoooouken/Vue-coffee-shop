<script>
import logo from '../assets/logo/Logo_black.svg'
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
                    link: '/'
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
                    text: 'Contact us',
                    link: '/contacts'

                },
                {

                }
            ]
        }
    }
}</script>


<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <li class=" footer__item">
                            <RouterLink :to=links[0].link>
                                <img :src=logo :alt=links[0].icon>
                            </RouterLink>
                        </li>
                        <LinkComonent class="footer__item" :link="links[1].link" :text="links[1].text" />
                        <LinkComonent class="footer__item" :link="links[2].link" :text="links[2].text" />
                        <LinkComonent class="footer__item" :link="links[3].link" :text="links[3].text" />
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="../assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>
