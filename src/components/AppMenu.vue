<template>
  <section class="menu py-5">
    <div class="menu__title text-center">
      <h3 v-html="menuTitle"></h3>
    </div>
    <div class="container">
      <div class="content">
        <div class="menu__column d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center">
          <product-card v-for="(product, i) in products" :key="i" :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
export default {
  components: { ProductCard },
  props: {
    menuTitle: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style lang="scss">
$product-card-size-h: 12rem;
$product-card-size-w: 30rem;
.menu{
  &__column{
    gap: 3rem;
  }

  .product-card{
    height: $product-card-size-h;
    width: $product-card-size-w;
  }
}
</style>