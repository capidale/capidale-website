<template>
  <div>
    <div class="text-center">
      <TextHeading :level="2" colour="lime"> News </TextHeading>
    </div>
    <div class="pt-16 mx-auto sm:py-10">
      <div class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-16">
        <div
          v-for="article of articles"
          :key="article.slug"
          class="flex flex-col rounded-lg shadow overflow-hidden"
        >
          <div>
            <img
              :src="`/img/${article.img}`"
              :alt="article.alt"
              class="h-36 w-full shadow object-cover"
            />
            <div class="mt-4 px-4 bg-white">
              <div>
                <span
                  class="text-sm font-semibold tracking-wide text-lime-600 uppercase"
                  >{{ article.createdAt | moment('MMMM YYYY') }}</span
                >
                <h3
                  class="mt-2 text-2xl font-extrabold text-cool-gray-900 sm:text-3xl"
                >
                  {{ article.title }}
                </h3>
              </div>
              <p class="mt-3 text-lg text-cool-gray-600">
                {{ article.description }}
              </p>
            </div>
          </div>
          <div class="flex-1 flex items-end mt-4 pb-4 px-4">
            <TextLink :to="`/news/${article.slug}`">Read more -></TextLink>
          </div>
        </div>
      </div>
    </div>
  </div>
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
