<template>
  <div class="product-card d-flex flex-column flex-md-row align-items-center shadow rounded-lg p-5" :class="{'product-card--special': product.special}">
    <div class="product-card__img shadow mb-4 mb-md-0" >
      <img class="rounded-lg" :src="require(`@/assets/images/${product.image}.jpg`)" alt="">
    </div>
    <div class="ml-4">
      <div class="h5">
      {{product.name}}
      </div>
      <div class="font-italic">
        <span v-for="(ingredient, i) in product.ingredients" :key="i">{{ ingredient }} </span>
      </div>
      <div class="font-weight-bold" v-if="product.allergens">
        allergeni: {{allergens}}
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
    },
    ingredients: {
      type: Array,
    },
  },
  computed: {
    allergens() {
      return this.product.ingredients.forEach(element => {
        if(this.ingredients.name === element.name)
          this.ingredients[element];
      });
    }
  }
}
</script>

<style lang="scss">
$img-size: 7.5rem;
.product-card{
  transition: all .75s cubic-bezier(.17,.84,.44,1);

  &__img{
    flex-shrink: 0;
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

  &--special{
    border: 2px solid $danger;
  }
}
</style>