<template>
  <div
    class="relative flex flex-col-reverse space-y-4 space-y-reverse lg:space-y-0"
  >
    <div>
      <img
        class="object-cover w-full h-56 rounded-lg shadow-md sm:h-72 lg:h-108"
        src="~/assets/img/hero.jpg"
        alt
      />
    </div>
    <div class="lg:absolute lg:inset-0 lg:flex lg:items-center lg:px-8">
      <div>
        <h2>
          <span
            class="block text-3xl font-extrabold text-center text-cool-gray-900 sm:text-4xl lg:text-left lg:text-lime-100"
            >In just over 10 years, we've raised</span
          >
          <span
            class="block mt-2 text-5xl font-extrabold tracking-tight text-center text-lime-600 sm:text-6xl md:text-8xl lg:text-left lg:text-white"
            ><ICountUp
              :delay="delay"
              :end-val="endVal"
              :options="options"
              @ready="onReady"
          /></span>
        </h2>
        <p
          class="mt-3 text-xl font-medium text-center text-cool-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto lg:mx-0 lg:text-left lg:text-lime-100"
        >
          We help charities
          <span class="font-bold text-lime-600 lg:text-white">grow</span>. Last
          year, for every £1 our clients spent on fundraising with us, we raised
          an average
          <span class="font-bold text-lime-600 lg:text-white">£25.69</span>. Our
          <span class="font-bold text-lime-600 lg:text-white"
            >evaluation expertise</span
          >
          helps charities prove their impact.
        </p>
        <div class="flex justify-center mt-4 lg:justify-start lg:mt-8">
          <NuxtButton to="/contact" class="md:py-4 md:text-lg md:px-10">
            Get in touch
          </NuxtButton>
        </div>
      </div>
    </div>
  </div>
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
      endVal: 58420500,
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

