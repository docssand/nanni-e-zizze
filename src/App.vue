<template>
  <div id="app" class="bg-light">
    <Header/>
    <Hero/>
    <PhoneCTA/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import PhoneCTA from './components/PhoneCTA.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    PhoneCTA,
  }
}
</script>

<style lang="scss">
  @import "~@/assets/sass/vendors/bootstrap/bootstrap-main.scss";
  #app {
    position: relative;
  }
</style>
