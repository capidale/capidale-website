<template>
  <section class="bg-gray-50">
    <Container>
      <div class="py-6 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-10">
        <nuxt-link
          v-for="caseStudy of caseStudies"
          :key="caseStudy.slug"
          :to="`/case-studies/${caseStudy.slug}`"
          class="block relative transform hover:-translate-y-1"
        >
          <img
            :src="`/img/${caseStudy.img}`"
            class="h-56 w-full rounded-lg shadow object-cover sm:h-72 md:h-80"
          />
          <div
            class="absolute inset-0 flex flex-col justify-end p-3 rounded-lg bg-gradient-to-b from-transparent to-gray-800 lg:py-6 lg:px-8"
          >
            <h2
              class="text-base leading-6 text-light-green-50 font-semibold tracking-wide uppercase"
            >
              {{ caseStudy.title }}
            </h2>
            <h3
              class="block pt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9 sm:max-w-md md:max-w-sm"
            >
              {{ caseStudy.subtitle }}
            </h3>
          </div>
        </nuxt-link>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    caseStudies: {
      type: Array,
      required: true,
    },
  },
}
</script>
