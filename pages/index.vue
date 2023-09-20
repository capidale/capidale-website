<template>
  <main>
    <Section class="py-4 md:py-6">
      <SectionHero />
    </Section>
    <Section class="py-4 md:py-6">
      <SectionServices :services="services" />
    </Section>
    <Section class="py-16" brand>
      <SectionStats :stats="stats" />
    </Section>
    <Section class="py-16">
      <SectionCaseStudies :case-studies="caseStudies" />
    </Section>
    <Section class="py-4 md:py-6" brand>
      <SectionTestimonials :testimonials="testimonials" />
    </Section>
    <Section class="pt-16">
      <SectionNews :articles="articles" />
    </Section>
    <Section class="pt-4 pb-16 md:pt-6">
      <SectionLogos :logos="logos" />
    </Section>
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

    const logos = await $content('logos')
      .only(['name', 'img'])
      .sortBy('slide', 'asc')
      .fetch()

    const services = await $content('services', params.slug)
      .only(['title', 'description', 'icon', 'slug'])
      .sortBy('serviceId', 'asc')
      .limit(2)
      .fetch()

    const stats = await $content('stats', params.slug)
      .only(['stat', 'description'])
      .sortBy('statId', 'asc')
      .limit(3)
      .fetch()

    const testimonials = await $content('testimonials').limit(4).fetch()

    return {
      articles,
      caseStudies,
      logos,
      services,
      stats,
      testimonials,
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
