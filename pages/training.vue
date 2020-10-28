<template>
  <Content>
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        Training
      </h2>
      <h3
        class="block pt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        We can build your fundraising and evaluation skills
      </h3>
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-xl font-medium">
            We regularly get asked about the secrets of our success and we’re
            delighted to share them through our tailored training programmes.
          </p>
          <p>We prepare and deliver training on:</p>
          <ul>
            <li>Developing a case for support</li>
            <li>Writing a winning fundraising application</li>
            <li>Fundraising from trusts & foundations</li>
            <li>Applications to the National Lottery Community Fund</li>
            <li>Simple evaluation to prove your impact</li>
          </ul>
          <p>
            We are also happy to work with clients to provide bespoke training
            to meet their needs.
          </p>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/training.jpg"
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
      title: 'Capidale - Training',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Let us share the secrets of our success by training your fundraisers to help your charity grow',
        },
      ],
    }
  },
}
</script>
