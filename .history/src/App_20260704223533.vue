<script setup>
import FooterComponent from './components/FooterComponent.vue';
import HeroView from './views/HeroView.vue';
import router from './router/index.js';


</script>

<template>

  <RouterView />
  <FooterComponent />

</template>




<style scoped>
div {
  span {
    color: red;
  }
}
</style>
