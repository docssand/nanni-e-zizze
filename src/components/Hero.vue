<template>
  <div>
    <vueper-slides>
      <vueper-slide v-for="i in 5" :key="i" :title="i.toString()" />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Hero",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          title: "Slide #1",
          content: "Slide content.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>