<template>
  <div class="hero text-light">
    <vueper-slides
      :parallax="parallax"
      :parallax-fixed-content="parallaxFixedContent"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "AppHero",
  components: { VueperSlides, VueperSlide },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      parallax: 1,
      parallaxFixedContent: false,
    };
  },
};
</script>

<style lang="scss">
.hero{
  .vueperslide{
    color: white;
    &__title{
      font-size: 2rem;
    }
  }
}
</style>