<script setup>
import FirstComponent from './components/FirstComponent.vue'
</script>

<template>

  <span>hello Vue JS</span>
  <hr>
  <FirstComponent />
</template>




<style lang="scss" scoped>
div {
  span {
    color: red($color: #000000);
  }
}
</style>
