<template>
  <div id="app" class="bg-light">
    <app-header />
    <app-hero :slides="heroSlides" />
   <div id="menu">
      <app-menu menuTitle="Pizze a rotazione" :ingredients="ingredients" :products="specials" />
      <app-menu menuTitle="Pizze tonde" :ingredients="ingredients" :products="products" />
      <app-menu menuTitle="Pizze al taglio" :ingredients="ingredients" :products="products" />
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
      ingredients: [
        {
          name: "salsiccia secca",
          type: "carne",
        },
        {
          name: "salsiccia fresca", 
          type: "carne",
        },
        {
          name: "speck",
          type: "carne",
        },
        {
          name: "prosciutto-cotto",
          type: "carne"
        },
        {
          name: "sugo di pomodoro",
          type: "rossa",
        },
        {
          name: "pomodorini",
          type: "rossa",
        },
        {
          name: "melanzana",
          type: "vegana",
        },
        {
          name: "mozzarella",
          type: "formaggio"
        },
        {
          name: "bufala",
          type: "formaggio"
        },
      ],
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
      specials: [
        {
          image: "pizza1",
          name: "Pizza Speciale",
          ingredients: ["sugo di pomodoro", "bufala", "basilico", "olio EVO"],
          special: true,
        },
        {
          image: "pizza1",
          name: "Pizza Specialissima",
          ingredients: ["sugo di pomodoro", "bufala", "basilico", "olio EVO"],
          special: true,
        },
      ],
      products: [
        {
          image: "pizza1",
          name: "Pizza Uno",
          ingredients: ["pomodoro", "mozzarella", "basilico", "olio EVO"],
        },
        {
          image: "pizza2",
          name: "Pizza Due",
          ingredients: ["pomodoro", "mozzarella", "salsiccia"],
        },
        {
          image: "pizza3",
          name: "Pizza Tre",
          ingredients: ["pomodoro", "funghi"],
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
