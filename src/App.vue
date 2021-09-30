<template>
  <div id="app" class="bg-light">
    <app-header />
    <app-hero :slides="heroSlides" />
    <app-menu />
    <phoneCTA @openPhoneModal="openPhoneModal" />
    <app-modal />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppHero from "./components/AppHero.vue";
import PhoneCTA from "./components/PhoneCTA.vue";
import AppMenu from "./components/AppMenu.vue";
import AppModal from "./components/AppModal.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppHero,
    PhoneCTA,
    AppMenu,
    AppModal,
  },
  data() {
    return {
      heroSlides: [
        {
          title: "El Teide Volcano, Spain",
          content: "Photo by Max Rive",
          // You can also provide a URL for the image.
          image: require("@/assets/images/pizza1.jpg"),
        },

        {
          title: "El Teide Volcano, Spain",
          content: "Photo by Max Rive",
          // You can also provide a URL for the image.
          image: require("@/assets/images/pizza2.jpg"),
        },

        {
          title: "El Teide Volcano, Spain",
          content: "Photo by Max Rive",
          // You can also provide a URL for the image.
          image: require("@/assets/images/pizza3.jpg"),
        },
      ],
    };
  },
  methods: {
    openPhoneModal() {
      this.$bvModal.show("phoneModal");
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/sass/vendors/bootstrap/bootstrap-main.scss";
#app {
  position: relative;
  z-index: 0;
}
</style>
