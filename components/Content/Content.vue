<template>
  <Container
    as="main"
    class="py-4 md:flex md:flex-col md:items-center md:py-6 lg:block"
  >
    <TextHeading :level="2" colour="lime">
      <slot name="pageTitle" />
    </TextHeading>
    <TextHeading :level="3" class="md:text-center lg:text-left"
      ><slot name="pageSubtitle"
    /></TextHeading>
    <slot>
      <div
        class="flex flex-col-reverse mt-8 lg:grid lg:grid-cols-2 lg:gap-x-16"
      >
        <nuxt-content
          :document="document"
          class="prose prose-lg mt-8 lg:mt-0"
        />
        <div>
          <img
            v-if="image"
            :src="`/img/${image}`"
            class="flex items-center h-56 w-full rounded-lg shadow-md object-cover sm:h-72 md:h-96 lg:max-w-2xl"
          />
        </div>
      </div>
    </slot>
  </Container>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
  },
}
</script>
