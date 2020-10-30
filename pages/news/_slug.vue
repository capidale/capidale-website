<template>
  <Content :document="article" :image="article.img">
    <template #pageTitle>News</template>
    <template #pageSubtitle>{{ article.title }}</template>
  </Content>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  head() {
    return {
      title: `Capidale - ${this.article.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>
