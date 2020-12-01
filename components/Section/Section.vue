<template>
  <component :is="getWrapperTag" :class="getWrapperClasses">
    <Container :as="getContainerTag">
      <slot />
    </Container>
  </component>
</template>

<script>
export default {
  props: {
    brand: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getContainerTag() {
      return this.brand ? 'div' : 'section'
    },
    getWrapperClasses() {
      return this.brand ? 'bg-section-green' : null
    },
    getWrapperTag() {
      return this.brand ? 'section' : 'div'
    },
  },
}
</script>
