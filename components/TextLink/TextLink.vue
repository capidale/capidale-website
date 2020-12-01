<template>
  <nuxt-link
    :to="to"
    class="rounded-md font-medium text-cool-gray-600 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:text-lime-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
