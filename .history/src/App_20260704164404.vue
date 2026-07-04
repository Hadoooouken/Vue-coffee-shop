<script setup>
// import FirstComponent from './components/FirstComponent.vue'

import FooterComponent from './components/FooterComponent.vue';
import HeroView from './views/HeroView.vue';


</script>

<template>
  <!-- <HeroView /> -->
   <router-view></router-view>
  <FooterComponent />

</template>




<style scoped>
div {
  span {
    color: red;
  }
}
</style>
