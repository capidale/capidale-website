<template>
  <Content>
    <template #pageTitle>{{ about.title }}</template>
    <template #pageSubtitle>{{ about.subtitle }}</template>
    <div class="flex flex-col mt-8 lg:grid lg:grid-cols-12 lg:gap-x-16">
      <div class="lg:col-span-5">
        <nuxt-content :document="about" class="prose prose-lg mt-0" />
      </div>
      <div class="pt-6 space-y-8 lg:pt-0 lg:col-span-7">
        <div
          v-for="staff of team"
          :key="staff.name"
          class="lg:grid lg:grid-cols-2 lg:gap-x-8"
        >
          <img
            :src="`/img/${staff.img}`"
            :alt="staff.alt"
            class="h-40 max-w-2xl w-full rounded-lg shadow-md object-cover sm:h-48 lg:w-full lg:h-64"
          />
          <div class="pt-4 lg:pt-0">
            <h4 class="text-base font-semibold text-cool-gray-900">
              {{ staff.name }}
            </h4>
            <p class="text-base font-semibold text-lime-600">
              {{ staff.jobTitle }}
            </p>
            <nuxt-content :document="staff" class="prose mt-4" />
          </div>
        </div>
      </div>
    </div>
  </Content>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const about = await $content('about/about').fetch()

    const team = await $content('about/biographies')
      .sortBy('order', 'asc')
      .fetch()

    return { about, team }
  },

  head() {
    return {
      title: 'Capidale - About us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Find out about Capidale and learn about the expertise of Louise Farnell, Simon Robinson and Tom McEvoy',
        },
      ],
    }
  },
}
</script>
