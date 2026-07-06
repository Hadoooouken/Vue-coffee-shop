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
                    text: '',
                    link: ''
                },
                {
                    id: 2,
                    text: '',
                    link: ''
                },
                {
                    id: 3,
                    text: '',
                    link: ''
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
                <RouterLink to="/contacts">Contact us</RouterLink>
            </li>
        </ul>
    </header>
</template>