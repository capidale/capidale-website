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
        >£175,647 for Citizens Advice Wirral</span
      >
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-lg font-medium">
            We’re delighted to have raised £175,647 for Citizens Advice Wirral
            from The Henry Smith Charity.
          </p>
          <p>
            Citizens Advice Wirral provides free, confidential and independent
            information/advice to help people in Wirral address their
            challenges.
          </p>
          <p>
            Last year, 51,734 people accessed their services, 75% needed support
            with benefits, debt, housing or employment problems. Following
            support, 97% can now better afford food, heating and transport and
            93% had improved mental wellbeing.
          </p>
          <p>
            We helped Citizens Advice Wirral develop an application to The Henry
            Smith Charity after demand to their Benefit and Debt Advice service
            significantly increased. This funding will enable the charity to
            help an additional 400 people per year (1,200 over the life of the
            project) address their financial challenges, build financial
            capability and improve their health and wellbeing.
          </p>
          <p>
            We are really pleased this application has been successful and
            thrilled more people in Wirral will benefit from this essential
            service.
          </p>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/news-citizens-advice.png"
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
      title: 'Capidale - £175,647 for Citizens Advice Wirral',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We’re delighted to have raised £175,647 for Citizens Advice Wirral from The Henry Smith Charity.',
        },
      ],
    }
  },
}
</script>
