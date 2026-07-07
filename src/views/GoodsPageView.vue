<script>
import CardComponent from '@/components/Card.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import coffeeGoods from '../assets/img/good-1.jpg'
import PageTitleСomponent from '@/components/PageTitleСomponent.vue';



export default {

    components: {
        NavBarComponent,
        CardComponent,
        PageTitleСomponent
    },
    data() {
        return {
            goods: [
                {
                    id: 0,
                    img: coffeeGoods,
                    name: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: 10.73,
                },

                {
                    id: 1,
                    img: coffeeGoods,
                    name: 'Presto Coffee Beans 1kg',
                    country: 'Brazil',
                    price: 15.99,

                },

                {
                    id: 2,
                    img: coffeeGoods,
                    name: 'AROMISTICO Coffee 1kg',
                    country: 'Brazil',
                    price: 6.99,
                },
                {
                    id: 3,
                    img: coffeeGoods,
                    name: 'AROMISTICO Coffee 1kg',
                    country: 'Brazil',
                    price: 10.73,
                },
                {
                    id: 4,
                    img: coffeeGoods,
                    name: 'AROMISTICO Coffee 1kg',
                    country: 'Brazil',
                    price: 10.73,
                },
                {
                    id: 5,
                    img: coffeeGoods,
                    name: 'AROMISTICO Coffee 1kg',
                    country: 'Brazil',
                    price: 10.73,
                },


            ]
        }
    }
}


</script>

<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <NavBarComponent />
                    </div>
                </div>
                <PageTitleСomponent pageTitle='For your pleasure' />
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="../assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="../assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>

                <div class="line"></div>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <CardComponent classItem="shop__item" :name="goods[0].name" :price="goods[0].price"
                                :image="goods[0].img" />
                            <CardComponent classItem="shop__item" :name="goods[1].name" :price="goods[1].price"
                                :image="goods[1].img" />
                            <CardComponent classItem="shop__item" :name="goods[2].name" :price="goods[2].price"
                                :image="goods[2].img" />
                            <CardComponent classItem="shop__item" :name="goods[3].name" :price="goods[3].price"
                                :image="goods[3].img" />
                            <CardComponent classItem="shop__item" :name="goods[4].name" :price="goods[4].price"
                                :image="goods[4].img" />
                            <CardComponent classItem="shop__item" :name="goods[5].name" :price="goods[5].price"
                                :image="goods[5].img" />
                            <!-- <div class="shop__item">
                                <img src="../assets/logo/img/good-1.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">10.73$</div>
                            </div>
                            <div class="shop__item">
                                <img src="../assets/logo/img/good-1.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    Presto Coffee Beans 1kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">15.99$</div>
                            </div>
                            <div class="shop__item">
                                <img src="../assets/logo/img/good-1.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    AROMISTICO Coffee 1kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">6.99$</div>
                            </div>
                            <div class="shop__item">
                                <img src="../assets/logo/img/good-1.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">10.73$</div>
                            </div>
                            <div class="shop__item">
                                <img src="../assets/logo/img/good-1.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">10.73$</div>
                            </div>
                            <div class="shop__item">
                                <img src="../assets/logo/img/good-1.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">10.73$</div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>