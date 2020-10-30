<template>
  <main>
    <Container class="py-6 md:flex md:flex-col md:items-center lg:block">
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        News
      </h2>
      <div
        class="py-6 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8"
      >
        <div v-for="article of articles" :key="article.slug">
          <div class="space-y-1">
            <span class="text-base font-medium text-light-green-600">{{
              article.createdAt | moment('MMMM YYYY')
            }}</span>
            <h3 class="text-xl font-bold text-gray-900">
              {{ article.title }}
            </h3>
          </div>
          <div class="pt-3">
            <p class="text-gray-600">
              {{ article.description }}
            </p>
            <div class="pt-6">
              <nuxt-link
                :to="`/news/${article.slug}`"
                class="font-medium hover:text-light-green-600 focus:text-light-green-600 focus:underline"
                >Read more -></nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },

  head() {
    return {
      title: 'Capidale - News',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Find out about our most recent successes and newest clients.',
        },
      ],
    }
  },
}
</script>
