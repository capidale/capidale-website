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
      <div
        class="py-6 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8"
      >
        <div>
          <div class="space-y-1">
            <span class="text-base font-medium text-light-green-600"
              >October 2020</span
            >
            <h3 class="text-xl font-bold text-gray-900">
              £175,647 for Citizens Advice Wirral
            </h3>
          </div>
          <div class="pt-3">
            <p class="text-gray-600">
              We are delighted that a grant from the Henry Smith Charity will
              support an extra 1,200 people over three years in Wirral to
              receive specialist debt and benefits advice.
            </p>
            <div class="pt-6">
              <a
                href="/news/175647-for-citizens-advice-wirral"
                class="font-medium hover:text-light-green-600 focus:text-light-green-600 focus:underline"
                >Read more -></a
              >
            </div>
          </div>
        </div>
        <div>
          <div class="space-y-1">
            <span class="text-base font-medium text-light-green-600"
              >September 2020</span
            >
            <h3 class="text-xl font-bold text-gray-900">
              Success for Somerset Wildlife Trust
            </h3>
          </div>
          <div class="pt-3">
            <p class="text-gray-600">
              We are thrilled to have raised £290,000 for Somerset Wildlife
              Trust, working in partnership with Quantock, Blackdown and Mendip
              Areas of Outstanding Natural Beauty.
            </p>
            <div class="pt-6">
              <a
                href="/news/success-for-somerset-wildlife-trust"
                class="font-medium hover:text-light-green-600 focus:text-light-green-600 focus:underline"
                >Read more -></a
              >
            </div>
          </div>
        </div>
        <div>
          <div class="space-y-1">
            <span class="text-base font-medium text-light-green-600"
              >August 2020</span
            >
            <h3 class="text-xl font-bold text-gray-900">
              Over £190,000 for The Cellar Trust
            </h3>
          </div>
          <div class="pt-3">
            <p class="text-gray-600">
              We have successfully secured over £190,000 to help The Cellar
              Trust continue their vital work to support people with mental
              health problems throughout the pandemic.
            </p>
            <div class="pt-6">
              <a
                href="/news/over-190000-for-the-cellar-trust"
                class="font-medium hover:text-light-green-600 focus:text-light-green-600 focus:underline"
                >Read more -></a
              >
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
      title: 'Capidale - News',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Find out about our most recent successes and newest clients.',
        },
      ],
    }
  },
}
</script>
