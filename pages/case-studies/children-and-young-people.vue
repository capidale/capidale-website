<template>
  <Content>
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        Children and Young People
      </h2>
      <span
        class="block pt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >£1.6 million raised to support disadvantaged young people</span
      >
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-lg font-medium">
            We have successfully raised funds for several children and youth
            charities.
          </p>
          <p>Our clients and funds raised for them to date include:</p>
          <ul>
            <li>Families First Bedfordshire - £491,793</li>
            <li>SELFA - £321,109</li>
            <li>FACES - £355,093</li>
            <li>CHEXS - £278,410</li>
            <li>Forget Me Not Children’s Hospice - £165,322</li>
            <li>Hemlington Linx - £60,000</li>
          </ul>
          <h3>Case Study: CHEXS</h3>
          <p>
            CHEXS is a Hertfordshire-based charity supporting disadvantaged
            young people and their families, focusing on Broxbourne.
          </p>
          <p>
            We were introduced to them by Hertfordshire Mind Network, who we
            worked with to secure a partnership lottery grant of £499,000 to
            fund ‘Broxbourne Better Futures’. We were very impressed with CHEXS’
            work and the outcomes they achieve, in terms of raised for young
            people aspirations and improved family relationships.
          </p>
          <p>
            We were delighted when Pete Maiden, CHEXS’ CEO, asked us to help
            them raise funds independently of the wider partnership. We helped
            them secure four new grants, as follows:
          </p>
          <ul>
            <li>Henry Smith Charity - £110,653</li>
            <li>Children in Need - £86,598</li>
            <li>Children in Need (2nd grant) - £56,159</li>
            <li>Garfield Weston Foundation - £25,000</li>
          </ul>
          <p>
            This has enabled them to introduce after school and holiday clubs
            for the first time and significantly expand their work with parents.
            Pete was also able to use our applications to successfully apply to
            the National Lottery Community for funding for their family support
            work.
          </p>
          <blockquote cite="Pete Maiden, Chief Executive, CHEXS">
            <p>
              Quote incoming very soon. But it will likely be amazing, because
              Capidale is fantastic, who wouldn't want to work with us?
            </p>
            <footer>Pete Maiden, Chief Executive</footer>
          </blockquote>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/cs-rswt.png"
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
      title: 'Capidale - Children and Young People Case Study',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A look at how Capidale has raised £1.6 million to support disadvantaged young people',
        },
      ],
    }
  },
}
</script>
