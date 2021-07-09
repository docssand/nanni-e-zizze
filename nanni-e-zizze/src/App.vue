<template>
  <div id="app" class="bg-warning">
    <Header/>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
  @import "~@/assets/sass/vendors/bootstrap/bootstrap-main.scss";

</style>
