<template>
  <Content :document="page" :image="page.img">
    <template #pageTitle>{{ page.title }}</template>
    <template #pageSubtitle>{{ page.subtitle }}</template>
  </Content>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('pages', params.slug).fetch()

    return { page }
  },

  head() {
    return {
      title: `Capidale - ${this.page.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>
