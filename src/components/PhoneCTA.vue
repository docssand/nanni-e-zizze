<template>
  <div
    class="
      phone-cta
      d-flex
      justify-content-center
      align-items-center
      position-fixed
    "
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{ 'phone-cta--active': hover }"
  >
    <div class="d-none d-md-block" @click="$emit('openPhoneModal')">
      <font-awesome-icon
        class="phone-cta__ico text-primary"
        icon="phone"
        href="tel:3333333333"
      />
    </div>
    <div class="d-md-none">
      <font-awesome-icon
        class="phone-cta__ico text-primary"
        icon="phone"
        href="tel:3333333333"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    print() {
      console.log("ciao");
    },
  },
};
</script>

<style lang=scss>
.phone-cta {
  z-index: 10;
  bottom: 10px;
  right: 10px;

  height: 6rem;
  width: 6rem;
  border-radius: 50%;

  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  -webkit-transition: box-shadow 0.5s ease-out;
  -moz-transition: box-shadow 0.5s ease-out;
  -o-transition: box-shadow 0.5s ease-out;
  transition: box-shadow 0.5s ease-out;

  &__ico {
    font-size: 2rem;
  }

  &--active {
    background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    box-shadow: inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff;
  }
}
</style>