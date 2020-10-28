<template>
  <Content>
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        Evaluation
      </h2>
      <h3
        class="block pt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        We can help show your charity’s impact
      </h3>
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-xl font-medium">
            Most funders want evidence that their support has or will change
            people’s lives for the better. Our postgraduate level research
            expertise can help you evaluate your projects and demonstrate your
            impact.
          </p>
          <p>
            Our exceptional results in fundraising have always been based on
            providing funders with hard evidence of the difference our clients
            make to the people they work with.
          </p>
          <p>
            Over the years we have found many charities struggle to clearly,
            simply and cost-effectively demonstrate their impact. And so, in
            2017, we launched a new service to help clients evaluate their work.
            Louise, Simon and Tom all have training in research at postgraduate
            level.
          </p>
          <p>
            Our focus is on keeping impact measurement simple and affordable. We
            can help you in the following ways:
          </p>
          <ul>
            <li>
              Work with you to develop project-specific evaluation using
              quantitative and qualitative techniques that demonstrate your
              project’s impact in the short and longer term
            </li>
            <li>
              Produce external evaluation reports to evidence the difference you
              make to funders and other organisations interested in your work
            </li>
            <li>
              Design annual snapshot surveys to be undertaken with a proportion
              of the people you support across all your work to show the
              difference you make
            </li>
            <li>
              Show you how to simply gather impactful case studies and stories
              that illustrate the difference you make
            </li>
          </ul>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/impact.jpg"
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
      title: 'Capidale - Evaluation',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We can help show your charity’s impact with our evaluation and impact measurement expertise',
        },
      ],
    }
  },
}
</script>
