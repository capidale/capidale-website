<template>
  <div>
    <div class="text-center">
      <TextHeading :level="2" colour="lime">
        Who we've worked with
      </TextHeading>
    </div>
    <div v-swiper="swiperOptions" class="mt-4">
      <div class="swiper-wrapper py-2">
        <div
          v-for="(group, index) of logoGroups"
          :key="index"
          class="swiper-slide"
        >
          <div
            class="w-full grid grid-cols-2 gap-y-10 gap-x-16 sm:grid-cols-4 lg:grid-cols-6"
          >
            <div
              v-for="logo of group"
              :key="logo.name"
              class="flex items-center justify-center p-4 rounded-lg shadow bg-white overflow-hidden"
            >
              <img
                :src="`/logos/${logo.img}`"
                class="filter-grayscale hover:filter-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOptions: {
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
      },
    }
  },
  computed: {
    logoGroups() {
      const chunks = []
      let i = 0
      const n = this.logos.length

      while (i < n) {
        chunks.push(this.logos.slice(i, (i += 12)))
      }

      return chunks
    },
  },
}
</script>
