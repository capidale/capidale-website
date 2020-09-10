<template>
  <section class="bg-gray-50">
    <Container>
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
                >Over £10 million raised
                <br class="hidden sm:block md:hidden" />
                for older people</span
              >
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
            <a href="#" class="group">
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
            <a href="#" class="group">
              <h2
                class="text-base leading-6 text-light-green-50 font-semibold tracking-wide uppercase"
              >
                Children & Young People
              </h2>
              <span
                class="block pt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9 sm:max-w-md md:max-w-sm"
                >£6.4 million grant to improve childrens wellbeing</span
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
            <a href="#" class="group">
              <h2
                class="text-base leading-6 text-light-green-50 font-semibold tracking-wide uppercase"
              >
                Mental Health
              </h2>
              <span
                class="block pt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9 sm:max-w-md md:max-w-sm"
                >Over £6 million raised to improve mental health in
                Middlesbrough</span
              >
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
