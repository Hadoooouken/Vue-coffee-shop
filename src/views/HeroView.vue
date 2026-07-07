<script>
import CardComponent from '../components/Card.vue';
import NavBarComponent from '../components/NavBarComponent.vue';
import coffeeOne from '../assets/img/coffee-1.jpg'
import coffeeTwo from '../assets/img/coffee-2.jpg'
import coffeeThree from '../assets/img/coffee-3.jpg'
import PageTitleСomponent from '@/components/PageTitleСomponent.vue';


export default {
    components: {
        CardComponent,
        NavBarComponent,
        PageTitleСomponent
    },

    data() {
        return {
            bestSellers: [
                {
                    id: 0,
                    img: coffeeOne,
                    name: 'Solimo Coffee Beans 2kg',
                    price: 10.73,
                },

                {
                    id: 1,
                    img: coffeeTwo,
                    name: 'Presto Coffee Beans 1kg',
                    price: 15.99,
                },

                {
                    id: 2,
                    img: coffeeThree,
                    name: 'AROMISTICO Coffee 1kg',
                    price: 6.99,
                },

            ]
        }
    }
}
</script>


<template>
    <main>
        <div class="preview">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <NavBarComponent />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                          <PageTitleСomponent pageTitle="Everything You Love About Coffee"/>
                       
                        <img class="beanslogo" src="../assets/logo/Beans_logo.svg" alt="Beans logo">
                        <div class="preview__subtitle">We makes every day full of energy and taste</div>
                        <div class="preview__subtitle">Want to try our beans?</div>
                        <a href="./coffeepage.html" class="preview__btn">More</a>
                    </div>
                </div>
            </div>
        </div>
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="title">About Us</div>
                        <img class="beanslogo" src="../assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br><br>

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="best">
            <div class="container">
                <div class="title">Our best</div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="best__wrapper">
                            <CardComponent classItem="best__item" :name="bestSellers[0].name"
                                :price="bestSellers[0].price" :image="bestSellers[0].img" />
                            <CardComponent classItem="best__item" :name="bestSellers[1].name"
                                :price="bestSellers[1].price" :image="bestSellers[1].img" />
                            <CardComponent classItem="best__item" :name="bestSellers[2].name"
                                :price="bestSellers[2].price" :image="bestSellers[2].img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>