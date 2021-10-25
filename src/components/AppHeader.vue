<template>
  <section class="header text-center
        py-4 position-sticky bg-light">
    <div
      class="header__content d-flex flex-column flex-md-row align-items-center justify-content-center"
    >
      <div class="header__logo">
        <picture>
        <source
          srcset="@/assets/images/logo-mobile.png"
          media="(min-width: 800px)"
        />
        <img
          class="header__logo px-4"
          src="@/assets/images/logo-mobile.png"
          alt="logo Nanni e Zizze"
        />
      </picture>
      </div>
      <div class="header__menu d-none d-md-block">
        <a href="#menu" class="header__menu d-none d-md-inline">Menù</a>
      </div>
      <div class="header__maps d-flex align-items-center">
        <div class="text-right">
          <a href="https://goo.gl/maps/6Lw38i62eK1PR8BE9" target="_blank"
            >Piazza Giacomo Matteotti, 28,<br
              class="d-none d-md-inline"
            />Carbonia</a
          >
        </div>
        <font-awesome-icon
          class="header__ico-maps text-warning mx-4"
          icon="map-marked-alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss">
.header {
  top: 0;
  z-index: 5;
  box-shadow: 0px 10px 10px 0px rgba($color: #000000, $alpha: 0.25);

  &__logo {
    display: flex;
    justify-self: left;
    height: 3rem;
  }
  &__menu {
    font-size: 2rem;
    grid-area: menu;
  }
  &__maps {
    grid-area: maps;
  }
  @include media-breakpoint-down("sm") {
    &__ico-maps {
      font-size: 1.5em;
    } 
  }

  @include media-breakpoint-up("md") {
    &__logo {
    flex: 0 1 20rem;
  }
  &__menu {
    flex: 0 1 50rem;
  }
  &__maps {
    flex: 0 1 20rem;
  }
  }
}
</style>