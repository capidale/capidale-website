<template>
  <NuxtLink
    :to="to"
    class="block px-8 py-3 rounded-md shadow-md bg-gradient-to-br from-lime-500 to-lime-700 text-base font-medium text-center text-white transition duration-150 ease-in-out transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4 focus-visible:ring-offset-lime-300"
  >
    <slot />
  </NuxtLink>
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
