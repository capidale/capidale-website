<template>
  <Content>
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        Older People
      </h2>
      <span
        class="block pt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >£8 million raised to improve later life across the UK</span
      >
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-lg font-medium">
            We are proud to have worked with many local and national charities
            supporting older people.
          </p>
          <p>Our clients and funds raised for them to date include:</p>
          <ul>
            <li>Campaign to End Loneliness - £2,650,000</li>
            <li>Age UK Barrow & District - £1,752,275</li>
            <li>Age UK South Lakeland - £1,479,169</li>
            <li>Age UK Doncaster - £834,711</li>
            <li>Age UK Carlisle & Eden - £463,801</li>
            <li>Age UK Wakefield - £448,969</li>
            <li>Leeds Jewish Welfare Board - £403,246</li>
            <li>Age UK North East Lincolnshire - £366,939</li>
          </ul>
          <h3>Case Study: Time for Tea, Age UK Wakefield</h3>
          <p>
            For several years, Age UK Wakefield has run a monthly ‘cuppa club’
            in partnership with the Ridings Shopping Centre in Wakefield. The
            Ridings noticed that many older people would spend hours at the
            shopping centre, not speaking to anyone and sitting on their own.
          </p>
          <p>
            They wanted to do something to help and so, with Age UK Wakefield’s
            support, they set up a monthly club in the atrium, where older
            people can come, have a free drink, watch a band and meet other
            people in the same situation. Age UK Wakefield and other
            organisations are on hand to offer help and support to those who
            need it.
          </p>
          <p>
            Age UK Wakefield asked us to help them raise funds to extend the
            idea to other shopping centres across the district. We helped them
            develop an application to the National Lottery Community Fund, which
            successfully secured £280,119 to help them realise their ambition.
            Soon, Time for Tea will be running in five new shopping centres
            across the district, reaching 6,000 older people – and helping Age
            UK Wakefield identify those ‘hard to reach’ older people who need
            extra help.
          </p>
          <h3>Case Study: Age UK South Lakeland</h3>
          <p>
            We began working for Age UK South Lakeland in 2014, initially
            helping them secure a lottery grant of £499,000. They subsequently
            outsourced all their fundraising to us and, over the next five
            years, we raised almost £1.5 million for them, submitting 51
            applications and securing 28 grants.
          </p>
          <blockquote
            cite="Hugh Tomlinson, Chief Executive, Age UK South Lakeland"
          >
            <p>
              When I look at the annual costs, our spend is around 50% of what
              it would cost to have an experienced full time person. I believe
              it is very good value for money. I have no hesitation whatsoever
              in recommending Capidale.
            </p>
            <footer>
              Hugh Tomlinson, Chief Executive, Age UK South Lakeland
            </footer>
          </blockquote>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/cs-op.png"
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
      title: 'Capidale - Older People Case Study',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A look at how Capidale has raised £8 million to improve later life across the UK',
        },
      ],
    }
  },
}
</script>
