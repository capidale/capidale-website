<template>
  <div v-swiper="swiperOptions">
    <div class="h-full swiper-wrapper flex items-center">
      <div
        v-for="(group, index) of testimonialGroups"
        :key="index"
        class="swiper-slide"
      >
        <div
          class="divide-y-2 divide-lime-700 md:divide-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:divide-x-2"
        >
          <blockquote
            v-for="testimonial of group"
            :key="testimonial.name"
            class="h-full flex flex-col py-12 lg:py-6 md:-ml-8 md:pl-8"
          >
            <div class="flex justify-center">
              <p class="max-w-lg text-xl text-center text-white">
                {{ testimonial.quote }}
              </p>
            </div>
            <footer class="flex-1 flex items-end justify-center mt-4">
              <div class="flex flex-col items-center">
                <span
                  class="block text-base font-semibold tracking-wide text-white uppercase"
                  >{{ testimonial.name }}</span
                >
                <span
                  class="text-base font-semibold tracking-wide text-center text-lime-100"
                  >{{ testimonial.jobTitle }}, {{ testimonial.charity }}</span
                >
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: {
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
    testimonialGroups() {
      const chunks = []
      let i = 0
      const n = this.testimonials.length

      while (i < n) {
        chunks.push(this.testimonials.slice(i, (i += 2)))
      }

      return chunks
    },
  },
}
</script>
