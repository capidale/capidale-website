<template>
  <main>
    <Hero />
    <Services />
    <Stats />
    <CaseStudies :case-studies="caseStudies" />
    <Testimonials />
    <News :articles="articles" />
    <Logos />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'img', 'alt', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    const caseStudies = await $content('case-studies', params.slug)
      .only(['title', 'subtitle', 'slug', 'img'])
      .sortBy('title', 'desc')
      .limit(4)
      .fetch()

    return {
      articles,
      caseStudies,
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
