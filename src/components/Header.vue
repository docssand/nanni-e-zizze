<template>
  <div class="header d-flex justify-content-around align-items-center py-4">
      <picture>
        <source srcset="@/assets/images/logo-mobile.png"
            media="(min-width: 800px)">
        <img class="header__logo px-4" src="@/assets/images/logo-mobile.png" alt="logo Nanni e Zizze" />
      </picture>
      <div class="d-flex align-items-center">
        <div class="text-right">
            <a href="https://goo.gl/maps/6Lw38i62eK1PR8BE9">Piazza Giacomo Matteotti, 28,<br>Carbonia</a>
        </div>
        <font-awesome-icon class="header__ico-maps text-light" icon="map-marked-alt" />
      </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss">
    .header {
        &__logo{
            display: flex;
            justify-self: left;
            height: 3rem;
        }
        &__ico-maps{
            font-size: 3rem;
        }
    }
</style>