<template>
  <Content>
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        News
      </h2>
      <span
        class="block pt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >Success for Somerset Wildlife Trust</span
      >
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-lg font-medium">
            We are thrilled to have raised £290,000 for Somerset Wildlife Trust,
            working in partnership with Quantock, Blackdown and Mendip Areas of
            Outstanding Natural Beauty.
          </p>
          <p>
            Somerset Wildlife Trust has been protecting and preserving
            Somerset’s wildlife and wild places for over 50 years. They work to
            protect wildlife, transform landscapes and put nature back into
            people’s lives.
          </p>
          <p>
            Despite Somerset being a rural county, people experiencing mental
            health problems across Somerset say they need more help to access
            outdoor activities to help improve their mental health. As a result,
            the partnership wanted to deliver a project that connects Somerset’s
            communities with the natural environment to help improve mental
            health.
          </p>
          <p>
            We helped them develop an application to the National Lottery
            Community Fund’s Reaching Communities programme for their Somerset
            Nature Connections project which will support people with mental
            health problems to directly access local natural environments.
          </p>
          <p>
            We are truly delighted the application was successful and thoroughly
            enjoyed working with the nature partnership.
          </p>
          <blockquote
            cite="Jolyon Chesworth, Head of Engagement, Somerset Wildlife Trust"
          >
            <p>
              We were introduced to Capidale by The Wildlife Trusts, who
              recommended them on the basis of their successful track record
              with fundraising and particularly with National Lottery
              applications. Although we have significant fundraising experience,
              we had not worked on National Lottery applications and had limited
              capacity due to other projects in development. Louise was
              extremely helpful and knowledgeable on how best to approach the
              application process and helping keep us informed as the Lottery
              changed their way of working. Louise helped facilitate the process
              and highlight where we needed additional focus to strengthen our
              application, ensuring we told our story to really highlight what
              the project sought to achieve. Louise was also able to work very
              flexibly to adapt to our changing timeframes and also to account
              for the fact we are based at other ends of the country. I think if
              we had not worked with Capidale our application would have taken
              longer and I think it was far stronger as a result.
            </p>
            <footer>
              Jolyon Chesworth, Head of Engagement, Somerset Wildlife Trust
            </footer>
          </blockquote>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/news-somerset-wildlife-trust.png"
            class="h-56 max-w-2xl w-full rounded-lg shadow-md object-cover sm:h-72 md:h-96"
          />
        </div>
      </div>
    </Container>
  </Content>
</template>

<script>
export default {
  head() {
    return {
      title: 'Capidale - Success for Somerset Wildlife Trust',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We are thrilled to have raised £290,000 for Somerset Wildlife Trust, working in partnership with Quantock, Blackdown and Mendip Areas of Outstanding Natural Beauty.',
        },
      ],
    }
  },
}
</script>
