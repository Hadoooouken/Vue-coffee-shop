<script setup>
import FirstComponent from './components/FirstComponent.vue'
</script>

<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <header>
              <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
                <li class="header__item">
                  <a href="./index.html">
                    <img src="./assets/./assets/logo/Logo.svg" alt="logo">
                  </a>
                </li>
                <li class="header__item">
                  <a href="./coffeepage.html">Our coffee</a>
                </li>
                <li class="header__item">
                  <a href="./goodspage.html">For your pleasure</a>
                </li>
                <li class="header__item">
                  <a href="./contacts.html">Contact us</a>
                </li>
              </ul>
            </header>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h1 class="title-big">Everything You Love About Coffee</h1>
            <img class="beanslogo" src="./assets/logo/Beans_logo.svg" alt="Beans logo">
            <div class="preview__subtitle">We makes every day full of energy and taste</div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <a href="./coffeepage.html" class="preview__btn">More</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>




<style scoped>
div {
  span {
    color: red;
  }
}
</style>
