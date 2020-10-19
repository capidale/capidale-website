<template>
  <section>
    <Container>
      <div class="md:text-center">
        <h2
          class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
        >
          Who we work with
        </h2>
      </div>
      <div class="py-6">
        <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
          <swiper-slide>
            <div
              class="w-full py-2 grid grid-cols-3 gap-y-4 gap-x-16 sm:grid-cols-4 lg:grid-cols-6"
            >
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-comic-relief.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-lloyds-bank.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-iof.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-rspca.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-mencap.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-mind.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-missing-people.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-scie.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-the-wildlife-trusts.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-time-to-change.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-campaign-to-end-loneliness.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-north-yorkshire-council.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="w-full grid grid-cols-3 gap-y-4 gap-x-16 sm:grid-cols-4 lg:grid-cols-6"
            >
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-age-uk-doncaster.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-age-uk-ne-lincs.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-age-uk-south-lakeland.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-age-uk-wakefield.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-barrow-blind.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-chexs.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-citizens-advice-daventry.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-launchpad.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-learning-partnerships.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-lives.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-middlesbrough-mind.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-mind-ulverston.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="w-full grid grid-cols-3 gap-y-4 gap-x-16 sm:grid-cols-4 lg:grid-cols-6"
            >
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-nacre.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-nsun.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-riverside-housing.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-selfa.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-sight-advice.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-swift-medics.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-the-cellar-trust.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-the-deep.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-weston-park-cancer-charity.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-womens-counselling-leeds.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
              <div class="p-4 rounded-lg shadow bg-white overflow-hidden">
                <img
                  src="~/assets/img/logo-womens-health-matters.png"
                  class="filter-grayscale hover:filter-none"
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </Container>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>
