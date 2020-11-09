<template>
  <main>
    <Container class="py-6 md:flex md:flex-col md:items-center lg:block">
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        Case Studies
      </h2>
      <div class="py-6 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-10">
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
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const caseStudies = await $content('case-studies', params.slug)
      .only(['title', 'subtitle', 'slug', 'img'])
      .sortBy('title', 'desc')
      .fetch()

    return {
      caseStudies,
    }
  },

  head() {
    return {
      title: 'Capidale - Case Studies',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A look at how Capidale has raised £46,214,768 for charities across the UK',
        },
      ],
    }
  },
}
</script>
