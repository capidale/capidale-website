<template>
  <Content>
    <Hero2 />
    <Services />
    <Stats />
    <CaseStudies />
    <Testimonials />
    <News />
  </Content>
</template>

<script>
export default {
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
