<template>
  <Content>
    <Hero />
    <Services />
    <Stats />
    <CaseStudies />
    <Testimonials />
    <News :articles="articles" />
    <Logos />
  </Content>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'img', 'alt', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    return {
      articles,
    }
  },

  head() {
    return {
      title:
        'Capidale - A specialist fundraising and project evaluation consultancy helping charities to grow',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A Yorkshire-based, specialist fundraising and project evaluation consultancy supporting local and national charities to grow.',
        },
      ],
    }
  },
}
</script>
