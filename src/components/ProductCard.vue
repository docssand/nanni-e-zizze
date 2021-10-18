<template>
  <div class="product-card d-flex shadow rounded-lg p-5">
    <div class="product-card__img">
      <img style="border-radius: 50%;" :src="require(`@/assets/images/${product.image}.jpg`)" alt="">
    </div>
    <div class="ml-4">
      <div class="h5">
      {{product.name}}
      </div>
      <div class="font-italic">
        {{product.ingredients}}
      </div>
      <div class="font-weight-bold" v-if="product.allergens">
        allergeni: {{product.allergens}}
      </div>
      <div>
          <span v-for="(type, i) in product.type" :key="i">
            {{type}}
          </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss">
$img-size: 6rem;
.product-card{
  transition: all .75s cubic-bezier(.17,.84,.44,1);

  &__img{
    height: $img-size;
    width: $img-size;
    

    img{
      width: 100%;
      height: 100%; 
      object-fit: cover;
    }
  }
  &:hover{
    transform: scale(1.1);
  }
}
</style>