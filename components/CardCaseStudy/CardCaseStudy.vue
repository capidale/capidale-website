<template>
  <nuxt-link
    :to="`/case-studies/${caseStudy.slug}`"
    class="block relative rounded-md transition duration-150 ease-in-out transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4"
  >
    <img
      :src="`/img/${caseStudy.img}`"
      class="h-56 w-full rounded-lg shadow object-cover sm:h-72 md:h-88"
    />
    <div
      class="absolute inset-0 flex flex-col justify-end p-3 rounded-lg bg-gradient-to-b from-transparent to-cool-gray-800 lg:py-6 lg:px-8"
    >
      <h2 class="text-lg font-semibold tracking-wider text-lime-50 uppercase">
        {{ caseStudy.title }}
      </h2>
      <h3
        class="mt-3 text-3xl font-extrabold text-white sm:text-4xl sm:max-w-md"
      >
        {{ caseStudy.subtitle }}
      </h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    caseStudy: {
      type: Object,
      required: true,
    },
  },
}
</script>
