<template>
  <div class="
            phone-cta 
            d-flex justify-content-center align-items-center
            bg-primary">
      <font-awesome-icon 
        class="phone-cta__ico text-white" 
        icon="phone" 
        href="tel:3333333333"
        />
  </div>
</template>

<script>
export default {

}
</script>

<style lang=scss>
    .phone-cta {
        position: fixed;
        bottom: 10px;
        right: 10px;
        border: 2px solid $light;
        border-radius: 50%;
        height: 4rem;
        width: 4rem;
        &__ico{
            font-size: 2em;
        }
    }
</style>