<template>
  <section class="header position-sticky bg-light">
    <div
      class="
        d-flex
        flex-column flex-md-row
        justify-content-between
        align-items-center
        py-4
      "
    >
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
      <div>
        <a href="#menu" class="header__menu d-none d-md-inline">Menù</a>
      </div>
      <div class="d-flex align-items-center">
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
    font-size: 2em;
  }
  &__ico-maps {
    font-size: 3em;
    @include media-breakpoint-down("sm") {
      font-size: 1.5em;
    }
  }
}
</style>