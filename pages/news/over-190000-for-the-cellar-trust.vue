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
        >Over £190,000 for The Cellar Trust</span
      >
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-lg font-medium">
            The Cellar Trust is an award winning, mental health charity based in
            Shipley, near Bradford. Peer support underlines everything they do,
            with three-quarters of front-line staff having personal experience
            of mental health problems.
          </p>
          <p>
            People with mental health problems have been one of the groups
            hardest hit by the Covid-19 pandemic and subsequent lockdown. The
            Cellar Trust has experienced a 43% increase in demand for their
            crisis support and this work continues to operate at full capacity.
          </p>
          <p>
            We have successfully secured over £190,000 to help The Cellar Trust
            continue their vital work to support people with mental health
            problems throughout the pandemic, through a range of grant
            programmes, including the Coronavirus Mental Health Response Fund
            (managed by national Mind), Garfield Weston Foundation, The
            Morrisons Foundation, Liz and Terry Bramall Foundation, The Edward
            Gostling Foundation, Legal & General Community Fund and Sir George
            Martin Trust.
          </p>
          <p>
            This funding has helped mitigate lost income in trading and
            community fundraising and we’re delighted to have helped them
            continue supporting people with mental health problems during this
            difficult time.
          </p>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/news-the-cellar-trust.png"
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
