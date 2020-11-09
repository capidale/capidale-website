<template>
  <section>
    <Container>
      <div class="pt-6 md:text-center">
        <h2
          class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
        >
          Recent news
        </h2>
      </div>
      <div
        class="pt-4 pb-6 space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-8"
      >
        <div
          v-for="article of articles"
          :key="article.slug"
          class="rounded-lg shadow overflow-hidden"
        >
          <div class="rounded-lg shadow-xs">
            <img
              :src="`/img/${article.img}`"
              :alt="article.alt"
              class="h-36 w-full shadow object-cover"
            />
            <div class="p-4 bg-white">
              <div class="space-y-1">
                <span class="text-base font-medium text-light-green-600">{{
                  article.createdAt | moment('MMMM YYYY')
                }}</span>
                <h3 class="text-xl font-bold text-gray-900 sm:text-2xl">
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
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>
