<template>
  <component :is="as" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
}
</script>
