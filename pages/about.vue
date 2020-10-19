<template>
  <Content>
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:place-items-start lg:grid lg:grid-cols-12 lg:gap-x-8 lg:py-12"
    >
      <div class="lg:col-span-5">
        <h2
          class="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          About Capidale
        </h2>
        <div class="pt-4 prose">
          <p class="text-xl font-medium">
            We are a Yorkshire-based, grant fundraising and project evaluation
            consultancy, working with charities across the UK.
          </p>
          <p>
            In just 10 years, we have raised over £46 million for our clients,
            securing them an average of £42.31 for every £1 charged in
            fundraising fees.
          </p>
          <p>
            Our successful approach is based on truly understanding the
            difference our clients make to the people they support, and
            powerfully communicating this to funders.
          </p>
          <p>
            We use our post-graduate research expertise to help clients measure
            the impact of their work, by designing simple but effective project
            evaluation methodologies and writing external evaluation reports.
          </p>
        </div>
      </div>
      <div class="pt-6 space-y-8 lg:pt-0 lg:col-span-7">
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8">
          <img
            src="~/assets/img/louise.jpg"
            class="h-40 max-w-2xl w-full rounded-lg shadow-md object-cover sm:h-48 lg:w-full lg:h-64"
          />
          <div class="pt-4 lg:pt-0">
            <div>
              <h3 class="text-base leading-6 text-gray-900 font-semibold">
                Louise Farnell
              </h3>
              <span
                class="text-base leading-6 text-light-green-600 font-semibold"
              >
                Director
              </span>
            </div>
            <div class="pt-2 prose">
              <p>
                Louise started her career as a market researcher, before working
                as a corporate and then major donor fundraiser for the British
                Red Cross. She then became Head of Fundraising at Rethink, the
                mental health charity where she increased voluntary fundraising
                from £200,000 to over £2 million in just 5 years.
              </p>
              <p>
                She is particularly proud to have raised £16,000,000 to kick
                start Time to Change, the anti-stigma mental health campaign.
                She has an MA in Social Research and leads our project
                evaluation work.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8">
          <img
            src="~/assets/img/simon.jpg"
            class="h-40 max-w-2xl w-full rounded-lg shadow-md object-cover sm:h-48 lg:w-full lg:h-64"
          />
          <div class="pt-4 lg:pt-0">
            <div>
              <h3 class="text-base leading-6 text-gray-900 font-semibold">
                Simon Robinson
              </h3>
              <span
                class="text-base leading-6 text-light-green-600 font-semibold"
              >
                Director
              </span>
            </div>
            <div class="pt-2 prose">
              <p>
                Simon was Director of Client Services for respected fundraising
                agency Pell & Bales, before becoming Head of Direct Marketing
                for the British Red Cross.
              </p>
              <p>
                His marketing expertise enabled him to switch temporarily to the
                corporate world, working for 10 years in senior product and
                marketing roles at GE Capital, HBOS and Santander. But Simon’s
                true love is the voluntary sector and helping charities make a
                powerful case for funding their work. He set Capidale up with
                Louise in 2011.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-12">
          <img
            src="~/assets/img/tom.jpg"
            class="h-40 max-w-2xl w-full rounded-lg shadow-md object-cover sm:h-48 lg:w-full lg:h-64"
          />
          <div class="pt-4 lg:pt-0">
            <div>
              <h3 class="text-base leading-6 text-gray-900 font-semibold">
                Tom McEvoy
              </h3>
              <span
                class="text-base leading-6 text-light-green-600 font-semibold"
              >
                Fundraising & Research Manager
              </span>
            </div>
            <div class="pt-2 prose">
              <p>
                Tom joined Capidale in January 2015. Previous he was the
                youngest Councillor ever elected to Hull City Council. Tom is a
                committee member of the Institute of Fundraising Yorkshire and
                holds the Certificate in Fundraising.
              </p>
              <p>
                One of Tom’s key interests is research. Using the skills he
                built up in academia, he specialises in finding the latest
                evidence to support client bids and matching clients with
                potential funders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Content>
</template>

<script>
export default {
  head() {
    return {
      title: 'Capidale - About us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Find out about Capidale and learn about the expertise of Louise Farnell, Simon Robinson and Tom McEvoy',
        },
      ],
    }
  },
}
</script>
