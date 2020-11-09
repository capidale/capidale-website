<template>
  <section>
    <Container>
      <div class="py-6 lg:py-8">
        <div
          class="relative flex flex-col-reverse space-y-reverse space-y-4 lg:space-y-0"
        >
          <div>
            <img
              class="hidden w-full rounded-lg shadow-md object-cover sm:block sm:h-72 lg:h-108"
              src="~/assets/img/hero.jpg"
              alt
            />
          </div>
          <div class="lg:absolute lg:inset-0 lg:flex lg:items-center lg:px-8">
            <div>
              <h2>
                <span
                  class="block text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl sm:leading-none sm:text-center md:text-3xl lg:text-left lg:text-light-green-100"
                  >In just 10 years, we've raised</span
                >
                <span
                  class="block text-5xl tracking-tight font-extrabold sm:text-6xl sm:text-center md:text-6xl lg:text-left text-light-green-600 lg:text-white"
                  ><ICountUp
                    :delay="delay"
                    :end-val="endVal"
                    :options="options"
                    @ready="onReady"
                /></span>
              </h2>
              <p
                class="pt-3 text-base font-medium text-gray-500 sm:pt-5 sm:text-lg sm:max-w-xl sm:mx-auto sm:text-center md:text-xl lg:mx-0 lg:text-left lg:text-light-green-100"
              >
                We help charities
                <span class="font-bold text-light-green-600 lg:text-white"
                  >grow</span
                >. For every £1 our clients have spent on fundraising with us,
                we have raised an average
                <span class="font-bold text-light-green-600 lg:text-white"
                  >£42.31</span
                >. Our
                <span class="font-bold text-light-green-600 lg:text-white"
                  >evaluation expertise</span
                >
                helps charities prove their impact.
              </p>
              <div class="flex pt-4 sm:justify-center lg:justify-start lg:pt-8">
                <span class="inline-flex rounded-md shadow">
                  <nuxt-link
                    to="/contact"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-green-600 hover:bg-light-green-500 focus:outline-none focus:border-light-green-700 focus:shadow-outline-light-green transition duration-150 ease-in-out sm:min-w-xl sm:max-w-xl md:py-4 md:text-lg md:px-10"
                    >Get in touch</nuxt-link
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script type="text/babel">
import ICountUp from 'vue-countup-v2'
export default {
  components: {
    ICountUp,
  },
  data() {
    return {
      delay: 500,
      endVal: 46214768,
      options: {
        duration: 1,
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '£',
        suffix: '',
      },
    }
  },
  methods: {
    onReady(instance, CountUp) {
      const that = this
      instance.update(that.endVal + 100)
    },
  },
}
</script>
