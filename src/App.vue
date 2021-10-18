<template>
  <div id="app" class="bg-light">
    <app-header />
    <app-hero :slides="heroSlides" />
   <div id="menu">
      <app-menu menuTitle="Pizze tonde" :products="products" />
    <app-menu menuTitle="Pizze al taglio" :products="products" />
   </div>
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
          title: "Consegna a domicilio 🛵",
          content: "In tutto il comune di Carbonia",
          // You can also provide a URL for the image.
          image: require("@/assets/images/pizza1.jpg"),
        },

        {
          title: "Consegna a domicilio 🛵",
          content: "In tutto il comune di Carbonia",
          // You can also provide a URL for the image.
          image: require("@/assets/images/pizza2.jpg"),
        },

        {
          title: "Consegna a domicilio 🛵",
          content: "In tutto il comune di Carbonia",
          // You can also provide a URL for the image.
          image: require("@/assets/images/pizza3.jpg"),
        },
      ],
      products: [
        {
          image: "pizza1",
          name: "Pizza Uno",
          ingredients: "pomodoro, mozzarella, basilico, olio EVO",
          allergens: "lattosio",
          type: ["vegetariana", "rossa"],
        },
        {
          image: "pizza2",
          name: "Pizza Due",
          ingredients: "pomodoro, mozzarella, salsiccia",
          allergens: "lattosio",
          type: ["carne", "rossa"],
        },
        {
          image: "pizza3",
          name: "Pizza Tre",
          ingredients: "pomodoro, funghi",
          allergens: "",
          type: ["vegetariana", "rossa"],
        }
      ]
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
