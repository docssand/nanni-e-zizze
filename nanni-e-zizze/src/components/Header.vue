<template>
  <div class="header">
      <picture>
        <source srcset="../assets/logo-mobile.png"
            media="(min-width: 800px)">
        <img class="header__logo px-4" src="../assets/logo-mobile.png" alt="" />
      </picture>
  </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss">
    .header {
        height: 4em;
        &__logo{
            display: flex;
            justify-self: left;
            height: 3rem;
        }
    }
</style>