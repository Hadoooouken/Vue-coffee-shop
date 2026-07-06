<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 0,
                    text: '',
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
                    link: '/contacts',
                    text: 'Contact us'
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
                <RouterLink to="/"> <img src="../assets/logo/Logo.svg" alt="logo">
                </RouterLink>
            </li>
            <li class="header__item">
                <RouterLink to="/our-coffee">Our coffee</RouterLink>
            </li>
            <li class="header__item">
                <RouterLink to="/goods">For your pleasure</RouterLink>
            </li>
            <li class="header__item">
                <RouterLink to="/contacts">{{ links[3].text }}</RouterLink>
            </li>
        </ul>
    </header>
</template>