<template>
  <main>
    <Container class="py-6 md:flex md:flex-col md:items-center lg:block">
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        About Capidale
      </h2>
      <h3
        class="block pt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        {{ about.subtitle }}
      </h3>
      <div
        class="pt-8 lg:place-items-start lg:grid lg:grid-cols-12 lg:gap-x-10"
      >
        <div class="lg:col-span-5">
          <nuxt-content :document="about" class="prose" />
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
              <nuxt-content :document="staff" class="prose" />
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
    const about = await $content('partials/about').fetch()

    const team = await $content('team').sortBy('order', 'asc').fetch()

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
