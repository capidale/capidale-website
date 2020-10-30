<template>
  <Container class="py-6 md:flex md:flex-col md:items-center lg:block">
    <h2
      class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
    >
      <slot name="pageTitle"></slot>
    </h2>
    <p
      class="block pt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
    >
      <slot name="pageSubtitle"></slot>
    </p>
    <div class="flex flex-col-reverse pt-8 lg:grid lg:grid-cols-2 lg:gap-x-10">
      <nuxt-content :document="document" class="prose" />
      <div v-if="image">
        <img
          :src="`/img/${image}`"
          class="h-56 max-w-2xl w-full rounded-lg shadow-md object-cover sm:h-72 md:h-96"
        />
      </div>
      <slot v-else />
    </div>
  </Container>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
  },
}
</script>
