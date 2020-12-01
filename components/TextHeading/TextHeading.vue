<template>
  <component :is="getTag" :class="[baseClasses[level], colourClass[colour]]">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    colour: {
      type: String,
      default: 'gray',
    },
    level: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      baseClasses: {
        2: 'text-base font-semibold tracking-wide uppercase',
        3: 'mt-3 text-3xl font-extrabold sm:text-4xl lg:leading-none',
      },
      colourClass: {
        gray: 'text-cool-gray-900',
        lime: 'text-lime-600',
        'lime-muted': 'text-lime-100',
        white: 'text-white',
      },
    }
  },
  computed: {
    getTag() {
      return `h${this.level}`
    },
  },
}
</script>
