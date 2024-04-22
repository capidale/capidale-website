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
          class="flex flex-col overflow-hidden rounded-lg shadow"
        >
          <div>
            <img
              :src="`/img/${article.img}`"
              :alt="article.alt"
              class="object-cover w-full h-48 shadow"
            />
            <div class="px-4 mt-4 bg-white">
              <div>
                <span
                  class="text-sm font-semibold tracking-wide uppercase text-lime-600"
                  >{{ article.createdAt | moment('MMMM YYYY') }}</span
                >
                <h3
                  class="text-2xl font-extrabold text-cool-gray-900 sm:text-3xl"
                >
                  {{ article.title }}
                </h3>
              </div>
              <p class="mt-3 text-lg text-cool-gray-600">
                {{ article.description }}
              </p>
            </div>
          </div>
          <div class="flex items-end flex-1 px-4 pb-4 mt-4">
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
