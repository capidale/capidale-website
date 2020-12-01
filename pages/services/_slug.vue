<template>
  <Content :document="service" :image="service.img">
    <template #pageTitle>{{ service.title }}</template>
    <template #pageSubtitle>{{ service.subtitle }}</template>
  </Content>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const service = await $content('services', params.slug).fetch()

    return { service }
  },

  head() {
    return {
      title: `Capidale - ${this.service.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.service.description,
        },
      ],
    }
  },
}
</script>
