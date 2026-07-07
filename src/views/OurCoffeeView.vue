<script>

import CardComponent from '@/components/Card.vue';
import NavBarComponent from '../components/NavBarComponent.vue';
import coffeeThree from '../assets/img/coffee-3.jpg'
import coffeeOne from '../assets/img/coffee-1.jpg'
import coffeeTwo from '../assets/img/coffee-2.jpg'
import PageTitleСomponent from '@/components/PageTitleСomponent.vue';


export default {
    components: {
        NavBarComponent,
        CardComponent,
        PageTitleСomponent
    },

    data() {
        return {
            coffee: [
                {
                    id: 0,
                    img: coffeeOne,
                    name: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: 10.73,
                },

                {
                    id: 1,
                    img: coffeeTwo,
                    name: 'Presto Coffee Beans 1kg',
                    country: 'Brazil',
                    price: 15.99,
                },

                {
                    id: 2,
                    img: coffeeThree,
                    name: 'AROMISTICO Coffee 1kg',
                    country: 'Brazil',
                    price: 6.99,
                },
                {
                    id: 3,
                    img: coffeeOne,
                    name: 'AROMISTICO Coffee 1kg',
                    country: 'Brazil',
                    price: 10.73,
                },
                {
                    id: 4,
                    img: coffeeTwo,
                    name: 'AROMISTICO Coffee 1kg',
                    country: 'Brazil',
                    price: 10.73,

                },
                {
                    id: 5,
                    img: coffeeThree,
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
        <div class="banner coffepage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <NavBarComponent />

                    </div>
                </div>
                <PageTitleСomponent pageTitle='Our Coffee' />

            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="../assets/img/coffee_girl.jpg" alt="girl">
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
                    <div class="col-lg-4 offset-2">
                        <form action="#" class="shop__search">
                            <label class="shop__search-label" for="filter">Looking for</label>
                            <input id="filter" type="text" placeholder="start typing here..."
                                class="shop__search-input">
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="shop__filter">
                            <div class="shop__filter-label">
                                Or filter
                            </div>
                            <div class="shop__filter-group">
                                <button class="shop__filter-btn">Brazil</button>
                                <button class="shop__filter-btn">Kenya</button>
                                <button class="shop__filter-btn">Columbia</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <CardComponent classItem="shop__item" :name="coffee[0].name" :price="coffee[0].price"
                                :image="coffee[0].img" />
                            <CardComponent classItem="shop__item" :name="coffee[1].name" :price="coffee[1].price"
                                :image="coffee[1].img" />
                            <CardComponent classItem="shop__item" :name="coffee[2].name" :price="coffee[2].price"
                                :image="coffee[2].img" />
                            <CardComponent classItem="shop__item" :name="coffee[3].name" :price="coffee[3].price"
                                :image="coffee[3].img" />
                            <CardComponent classItem="shop__item" :name="coffee[4].name" :price="coffee[4].price"
                                :image="coffee[4].img" />
                            <CardComponent classItem="shop__item" :name="coffee[5].name" :price="coffee[5].price"
                                :image="coffee[5].img" />
                            <!-- <div class="shop__item">
                                <img src="./img/coffee-3.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">10.73$</div>
                            </div>
                            <div class="shop__item">
                                <img src="./img/coffee-3.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    Presto Coffee Beans 1kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">15.99$</div>
                            </div>
                            <div class="shop__item">
                                <img src="./img/coffee-3.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    AROMISTICO Coffee 1kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">6.99$</div>
                            </div>
                            <div class="shop__item">
                                <img src="./img/coffee-3.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">10.73$</div>
                            </div>
                            <div class="shop__item">
                                <img src="./img/coffee-3.jpg" alt="coffee">
                                <div class="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div class="shop__item-country">Brazil</div>
                                <div class="shop__item-price">10.73$</div>
                            </div>
                            <div class="shop__item">
                                <img src="./img/coffee-3.jpg" alt="coffee">
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