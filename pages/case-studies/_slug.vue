<template>
  <Content :document="caseStudy" :image="caseStudy.img">
    <template #pageTitle>{{ caseStudy.title }}</template>
    <template #pageSubtitle>{{ caseStudy.subtitle }}</template>
  </Content>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const caseStudy = await $content('case-studies', params.slug).fetch()

    return { caseStudy }
  },

  head() {
    return {
      title: `Capidale - ${this.caseStudy.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.caseStudy.subtitle,
        },
      ],
    }
  },
}
</script>
