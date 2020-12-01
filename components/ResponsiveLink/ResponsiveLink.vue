<template>
  <nuxt-link
    :to="to"
    class="block px-3 py-2 rounded-md text-base font-medium text-cool-gray-600 transition duration-150 ease-in-out hover:bg-lime-50 hover:text-lime-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4"
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
