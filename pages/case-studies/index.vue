<template>
  <Content>
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        Case Studies
      </h2>
      <div
        class="py-6 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8"
      >
        <div class="relative">
          <img
            src="~/assets/img/cs-op.png"
            class="h-56 w-full rounded-lg shadow object-cover sm:h-72 md:h-96"
          />
          <div
            class="absolute inset-0 flex flex-col justify-end p-3 rounded-lg bg-gradient-to-b from-transparent to-gray-800 lg:py-6 lg:px-8"
          >
            <nuxt-link to="/case-studies/older-people">
              <h2
                class="text-base leading-6 text-light-green-50 font-semibold tracking-wide uppercase"
              >
                Older People
              </h2>
              <span
                class="block pt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9 sm:max-w-md md:max-w-sm"
                >£8 million raised to improve
                <br class="hidden sm:block md:hidden" />
                later life across the UK <br class="hidden sm:block md:hidden"
              /></span>
            </nuxt-link>
          </div>
        </div>
        <div class="relative">
          <img
            src="~/assets/img/cs-women.png"
            class="h-56 w-full rounded-lg shadow object-cover sm:h-72 md:h-96"
          />
          <div
            class="absolute inset-0 flex flex-col justify-end p-3 rounded-lg bg-gradient-to-b from-transparent to-gray-800 lg:py-6 lg:px-8"
          >
            <a href="/case-studies/women-and-girls" class="group">
              <h2
                class="text-base leading-6 text-light-green-50 font-semibold tracking-wide uppercase"
              >
                Women & Girls
              </h2>
              <span
                class="block pt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9 sm:max-w-md md:max-w-sm"
                >Supporting women to recover from rape, neglect and abuse</span
              >
            </a>
          </div>
        </div>
        <div class="relative">
          <img
            src="~/assets/img/cs-rswt.png"
            class="h-56 w-full rounded-lg shadow object-cover sm:h-72 md:h-96"
          />
          <div
            class="absolute inset-0 flex flex-col justify-end p-3 rounded-lg bg-gradient-to-b from-transparent to-gray-800 lg:py-6 lg:px-8"
          >
            <a href="/case-studies/children-and-young-people" class="group">
              <h2
                class="text-base leading-6 text-light-green-50 font-semibold tracking-wide uppercase"
              >
                Children & Young People
              </h2>
              <span
                class="block pt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9 sm:max-w-md md:max-w-sm"
                >£1.6 million raised to support disadvantaged young people</span
              >
            </a>
          </div>
        </div>
        <div class="relative">
          <img
            src="~/assets/img/cs-mh.png"
            class="h-56 w-full rounded-lg shadow object-cover sm:h-72 md:h-96"
          />
          <div
            class="absolute inset-0 flex flex-col justify-end p-3 rounded-lg bg-gradient-to-b from-transparent to-gray-800 lg:py-6 lg:px-8"
          >
            <a href="/case-studies/mental-health" class="group">
              <h2
                class="text-base leading-6 text-light-green-50 font-semibold tracking-wide uppercase"
              >
                Mental Health
              </h2>
              <span
                class="block pt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9 sm:max-w-md md:max-w-sm"
                >Over £15 million raised to support people with mental health
                problems</span
              >
            </a>
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
      title: 'Capidale - Case Studies',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A look at how Capidale has raised £46,214,768 for charities across the UK',
        },
      ],
    }
  },
}
</script>
