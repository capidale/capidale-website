<template>
  <Content>
    <template #pageTitle>News</template>
    <div
      class="mt-6 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-8"
    >
      <div
        v-for="article of articles"
        :key="article.slug"
        class="flex flex-col"
      >
        <div>
          <h3
            class="mt-2 text-xl font-extrabold text-cool-gray-900 sm:text-2xl"
          >
            {{ article.title }}
          </h3>
          <p class="mt-3 text-lg text-cool-gray-600">
            {{ article.description }}
          </p>
        </div>
        <div class="mt-4 flex-1 flex items-end">
          <nuxt-link
            :to="`/news/${article.slug}`"
            class="rounded-md font-medium text-cool-gray-500 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:text-lime-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4"
            >Read more -></nuxt-link
          >
        </div>
      </div>
    </div>
  </Content>
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
