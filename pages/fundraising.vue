<template>
  <Content class="bg-white">
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        Fundraising
      </h2>
      <span
        class="block pt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >We can help your charity grow</span
      >
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-xl font-medium">
            Whether you are a major charity needing extra capacity to write a
            multi-million pound fundraising bid, or a smaller charity wishing to
            expand your grant fundraising from a low base, we can help.
          </p>
          <p>
            We have a highly successful track record. For example, since 2011,
            we have written 85 applications to the National Lottery Community
            Fund, 74% of which have been successful. So far, we have raised over
            £29 million in lottery funds for our clients.
          </p>
          <p>
            Our approach works with other funders too. We have written 19
            applications to the Henry Smith Charity, again with a 74% success
            rate. And we have enjoyed success with Comic Relief, Children in
            Need, Lloyds Bank Foundation, Garfield Weston, Dunhill Medical
            Trust, Rayne Foundation, Esmée Fairbairn Foundation, statutory
            funders and many, many smaller trusts and foundations.
          </p>
          <p>
            We are deeply proud to have raised an average £42.31 for every £1
            charged in fundraising fees. This compares to a national average
            return on investment for trusts, foundations and lottery fundraising
            of £8.36 (Institute of Fundraising).
          </p>
          <p>
            We base our success on working closely with clients as they develop
            their ideas. We carefully match their projects with potential
            funders and write highly persuasive, evidence-based applications
            that meet both parties’ needs.
          </p>
          <p>
            Services we offer include developing a trusts and foundations
            strategy, researching funders, writing bids and preparing funder
            reports. We can also help you prepare a Case for Support, recruit
            fundraisers and provide coaching and mentoring.
          </p>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/fundraising.jpg"
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
      title: 'Capidale - Fundraising',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We specialise in trusts and foundations fundraising, we have a track record of success with the National Lottery Community Fund, Garfield Weston Foundation and Henry Smith Charity',
        },
      ],
    }
  },
}
</script>
