<template>
  <section class="bg-section-green">
    <Container>
      <div v-swiper="swiperOptions">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide divide-y-2 divide-light-green-900 md:divide-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:divide-x-2"
          >
            <blockquote class="py-6">
              <div class="flex justify-center">
                <p class="max-w-lg text-lg leading-7 text-center text-white">
                  "Capidale has a very rare skillset – a thorough knowledge of
                  funder requirements, combined with a level of dedication to
                  success that goes way beyond anyone else."
                </p>
              </div>
              <footer>
                <div class="pt-6 flex flex-col items-center">
                  <span
                    class="block text-base leading-6 text-white font-semibold tracking-wide uppercase"
                    >Sue Baker OBE</span
                  >
                  <span
                    class="text-base leading-6 text-light-green-100 font-semibold tracking-wide"
                    >Global Director, Time to Change</span
                  >
                </div>
              </footer>
            </blockquote>
            <blockquote
              class="flex flex-col justify-center py-6 md:-ml-4 md:pl-4"
            >
              <div class="flex justify-center">
                <p class="max-w-lg text-lg leading-7 text-center text-white">
                  "The team at Capidale has helped the cause of mental health to
                  be transformed and I would thoroughly recommend working with
                  them."
                </p>
              </div>
              <footer>
                <div class="pt-6 flex flex-col items-center">
                  <span
                    class="block text-base leading-6 text-white font-semibold tracking-wide uppercase"
                    >Paul Farmer CBE</span
                  >
                  <span
                    class="text-base leading-6 text-light-green-100 font-semibold tracking-wide"
                    >CEO, Mind</span
                  >
                </div>
              </footer>
            </blockquote>
          </div>
          <div
            class="swiper-slide h-full divide-y-2 divide-light-green-900 md:divide-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:divide-x-2"
          >
            <blockquote
              class="flex flex-col justify-center py-6 md:-ml-4 md:pl-4"
            >
              <div class="flex justify-center">
                <p class="max-w-lg text-lg leading-7 text-center text-white">
                  "Getting Capidale on board has definitely been the best
                  decision we've made in years! We recently had a Trustees
                  meeting and they agreed too!"
                </p>
              </div>
              <footer>
                <div class="pt-6 flex flex-col items-center">
                  <span
                    class="block text-base leading-6 text-white font-semibold tracking-wide uppercase"
                    >Emma Pears</span
                  >
                  <span
                    class="text-base leading-6 text-light-green-100 font-semibold tracking-wide"
                    >CEO, SELFA</span
                  >
                </div>
              </footer>
            </blockquote>
            <blockquote
              class="flex flex-col justify-center py-6 md:-ml-4 md:pl-4"
            >
              <div class="flex justify-center">
                <p class="max-w-lg text-lg leading-7 text-center text-white">
                  "Capidale’s understanding about submitting our application was
                  spot on. We wouldn't have received a grant without their
                  support and guidance"
                </p>
              </div>
              <footer>
                <div class="pt-6 flex flex-col items-center">
                  <span
                    class="block text-base leading-6 text-white font-semibold tracking-wide uppercase"
                    >Mark Smith</span
                  >
                  <span
                    class="text-base leading-6 text-light-green-100 font-semibold tracking-wide"
                    >Head of Trusts & Statutory Funding, RSPCA</span
                  >
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
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
}
</script>
