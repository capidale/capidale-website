<template>
  <div
    class="relative flex flex-col-reverse space-y-reverse space-y-4 lg:space-y-0"
  >
    <div>
      <img
        class="h-56 w-full rounded-lg shadow-md object-cover sm:h-72 lg:h-108"
        src="~/assets/img/hero.jpg"
        alt
      />
    </div>
    <div class="lg:absolute lg:inset-0 lg:flex lg:items-center lg:px-8">
      <div>
        <h2>
          <span
            class="block text-3xl font-extrabold text-center text-cool-gray-900 sm:text-4xl lg:text-left lg:text-lime-100"
            >In just 10 years, we've raised</span
          >
          <span
            class="block mt-2 text-5xl tracking-tight font-extrabold text-center text-lime-600 sm:text-6xl md:text-8xl lg:text-left lg:text-white"
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
          <span class="font-bold text-lime-600 lg:text-white">grow</span>. For
          every £1 our clients have spent on fundraising with us, we have raised
          an average
          <span class="font-bold text-lime-600 lg:text-white">£42.31</span>. Our
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
