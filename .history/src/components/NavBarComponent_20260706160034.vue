<script>
export default {
    data() {
        return {
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
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <li class="header__item">
                <RouterLink :to=links[0].link> <img :src="required" alt="logo">
                </RouterLink>
            </li>
            <li class="header__item">
                <RouterLink :to=links[1].link>{{ links[1].text }}</RouterLink>
            </li>
            <li class="header__item">
                <RouterLink :to=links[2].link>{{ links[2].text }}</RouterLink>
            </li>
            <li class="header__item">
                <RouterLink :to=links[3].link>{{ links[3].text }}</RouterLink>
            </li>
        </ul>
    </header>
</template>