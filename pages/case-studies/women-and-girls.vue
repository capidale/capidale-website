<template>
  <Content>
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        Women and Girls
      </h2>
      <h3
        class="block pt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Almost £5 million raised to support Women and Girls just in Yorkshire
      </h3>
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-lg font-medium">
            We have a very strong track record in raising funds for charities
            supporting disadvantaged women and girls.
          </p>
          <p>Our clients and funds raised for them to date include:</p>
          <ul>
            <li>Leeds Womens Counselling and Therapy Service - £2,059,082</li>
            <li>Womens Health Matters - £760,831</li>
            <li>Womens Lives Leeds - £2,000,000</li>
            <li>Wakefield Well Women’s Centre - £74,650</li>
          </ul>
          <h3>Case Study: Womens Counselling and Therapy Service</h3>
          <p>
            WCTS helps women in Leeds recover from the trauma of rape, neglect
            and abuse. Director, Tessa Denham, contacted us for help in 2012,
            explaining that they were almost wholly reliant on statutory
            contracts, but their funding was under threat due to constraints in
            local authority spending.
          </p>
          <p>
            We started by reviewing the charity’s work in-depth, paying
            particular attention to the needs of women receiving support and the
            outcomes they achieve. Next, we researched potential trusts and
            foundations to contact, identifying an initial 11 trusts with a very
            strong match to WCTS’s work. Our final preparatory step was to
            prepare a high-impact Case for Support, to show why a funder should
            give to WCTS, the issues their clients face and why WCTS is uniquely
            well placed to support them.
          </p>
          <p>
            Since we began working with WCTS, we have developed 30 fundraising
            applications, 23 of which have been successful – raising over £2
            million. Grants secured have included:
          </p>
          <ul>
            <li>The Henry Smith Charity - £168,911</li>
            <li>Comic Relief – £119,907</li>
            <li>Lloyds Bank Foundation - £46,622</li>
            <li>Ministry of Justice - £277,200</li>
            <li>BBC Children in Need – £106,707</li>
            <li>Pilgrim Trust – £44,383</li>
          </ul>
          <blockquote
            cite="Tessa Denham, Chief Executive, Womens Counselling and Therapy Service"
          >
            <p>
              I started working with Capidale at a point when we had just one
              funding stream – under threat from cuts. Three and a half years
              later, we had six major funders and income had increased by 300%.
            </p>
            <footer>Tessa Denham, Chief Executive</footer>
          </blockquote>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/cs-women.png"
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
      title: 'Capidale - Women and Girls Case Study',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A look at how Capidale has raised almost £5 million to support Women and Girls just in Yorkshire',
        },
      ],
    }
  },
}
</script>
