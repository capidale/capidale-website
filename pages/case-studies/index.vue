<template>
  <Content>
    <template #pageTitle>Case Studies</template>
    <SectionCaseStudies :case-studies="caseStudies" class="mt-4" />
  </Content>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const caseStudies = await $content('case-studies', params.slug)
      .only(['title', 'subtitle', 'slug', 'img'])
      .sortBy('title', 'desc')
      .fetch()

    return {
      caseStudies,
    }
  },

  head() {
    return {
      title: 'Capidale - Case Studies',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A look at how Capidale has raised £46,214,768 for charities across the UK',
        },
      ],
    }
  },
}
</script>
