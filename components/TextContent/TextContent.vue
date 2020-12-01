<template>
  <component :is="as" :class="[baseClasses, colourClass[colour]]">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'p',
    },
    colour: {
      type: String,
      default: 'gray',
    },
  },
  data() {
    return {
      baseClasses: 'mt-3 text-xl sm:mt-4 md:mx-auto',
      colourClass: {
        gray: 'text-cool-gray-600',
        'lime-muted': 'text-lime-50',
      },
    }
  },
}
</script>
