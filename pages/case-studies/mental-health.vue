<template>
  <Content>
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        Mental Health
      </h2>
      <span
        class="block pt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >Over £15 million raised to support people with mental health
        problems</span
      >
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-lg font-medium">
            Our roots are in the mental health sector, as Louise was previously
            Head of Fundraising for Rethink Mental Illness. Before founding
            Capidale, Louise secured £16,000,000 from the Big Lottery Fund to
            set up the ground-breaking Time to Change anti-stigma campaign.
          </p>
          <p>
            We have continued to successfully raise funds for many mental health
            charities and causes, including:
          </p>
          <p>Our clients and funds raised for them to date include:</p>
          <ul>
            <li>Middlesbrough and Stockton Mind - £7,279,135</li>
            <li>Time to Change - £4,560,262</li>
            <li>Mind (national) - £1,466,509</li>
            <li>The Cellar Trust - £242,975</li>
            <li>National Survivor Users’ Network - £44,281</li>
          </ul>
          <h3>Case Study: Middlesbrough and Stockton Mind</h3>
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
          <blockquote
            cite="Emma Howitt, Chief Executive, Middlesbrough & Stockton Mind"
          >
            <p>
              We have achieved an excellent success rate with Capidale. Getting
              expert help, when access to funds is so competitive, is crucial
              for us. I would absolutely recommend Capidale.
            </p>
            <footer>Emma Howitt, Chief Executive</footer>
          </blockquote>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/cs-mh.png"
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
      title: 'Capidale - Mental Health Case Study',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A look at how Capidale has raised over £15 million to support people with mental health problems',
        },
      ],
    }
  },
}
</script>
