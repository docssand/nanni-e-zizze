<template>
  <div
    class="
      phone-cta
      position-fixed
    "
    @mouseover="hover = true"
    @mouseleave="hover = false"
    
  >
    <div class="phone-cta__info d-flex align-items-center justify-content-between px-5 position-absolute" :class="{ 'phone-cta__info--active': hover }">
      <div>
        <div>mar-dom</div>
        <div>19:00 - 23:00</div>
      </div>
      <div class="pr-5">
        <a class="h5" href="tel:3333333333">3333333333</a>
      </div>
    </div>
    <div class="phone-cta__content d-flex
      justify-content-center
      align-items-center" :class="{ 'phone-cta__content--active': hover }">
      <font-awesome-icon
        class="ico text-primary"
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
$phone-cta-size: 6rem;

.phone-cta {
  
  bottom: 10px;
  right: 10px;

  z-index: 10;

  height:$phone-cta-size;
  width: $phone-cta-size;
  

  &__content {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: relative;
    z-index: 10;
    background: $black;
    -webkit-transition: box-shadow 0.5s ease-out;
    -moz-transition: box-shadow 0.5s ease-out;
    -o-transition: box-shadow 0.5s ease-out;
    transition: box-shadow 0.5s ease;

    .ico {
      font-size: 2rem;
      transition: all 0.5s ease-out;
    }

    

    &--active {
      background: #e0e0e0;
      box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
      box-shadow: inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff;

      .ico {
        font-size: 2.75rem;
      }
    }
  }

  .phone-cta__info {
      transform:scaleX(0);
      transform-origin:right center;
      transition: transform 0.5s ease;
      z-index: 5;
      right: calc(#{$phone-cta-size} * 0.5);
      height: $phone-cta-size;
      width: 25rem;
      border-bottom-left-radius: 50px;
      border-top-left-radius: 50px;
      background-color: #e0e0e0;
      box-shadow: inset 1px 1px 50px 1px rgba($color: #000000, $alpha: .25);

      &--active {
        transform:scaleX(1);
        transform-origin:right center;
      }
    }
  

  
}
</style>