<template>
  <Container
    as="main"
    class="py-4 md:flex md:flex-col md:items-center md:py-6 lg:block"
  >
    <TextHeading :level="2" colour="lime">Work for us</TextHeading>
    <TextHeading :level="3" class="md:text-center lg:text-left"
      >Grants Fundraiser & Researcher</TextHeading
    >
    <div class="flex flex-col-reverse mt-8 lg:flex-row">
      <div class="mt-8 prose prose-lg lg:mt-0">
        <p>
          This is an exciting opportunity for someone who wants to make the
          world a better place and has a talent for creative storytelling.
        </p>
        <p>
          You will be a key member of a highly experienced and successful team.
          You will work with national and local charities across the UK who are
          transforming the lives of some of the most disadvantaged people in our
          society. Our clients include the RSPCA, The Wildlife Trusts, local
          branches of Age UK and Mind as well as independent charities.
        </p>
        <p>
          Everyday you will be challenged to write with passion and creativity
          to tell the stories of our clients and the people they support. You
          will write about homelessness, sexual abuse, mental health, poverty,
          the environment and so much more. We promise no one day will be the
          same.
        </p>
        <p>
          We want to recruit someone who is ready to take the next step in their
          career. Ideally you will have at least one year's experience working
          in a fundraising environment where writing grant applications is part
          of your role. However, you may also be an outstanding writer in a
          different field, with an ambition to use your talent to make the world
          a better place.
        </p>
        <p>
          Whatever your current experience, we will train you to excel as a
          grants fundraiser. You will need to bring to the role an inquisitive
          mind and an attention to detail to confidently ask lots of questions
          until you have unpicked the compelling story at the heart of our
          clients' work. You will then be able to articulate this concisely and
          powerfully.
        </p>
        <p>
          We welcome applications from all candidates irrespective of age,
          pregnancy and maternity, disability, gender, gender identity, sexual
          orientation, race, religion or belief, or marital or civil partnership
          status.
        </p>
      </div>
      <div class="w-full lg:ml-16">
        <div
          class="px-4 py-6 rounded-lg shadow-md bg-gradient-to-br from-lime-500 to-lime-700"
        >
          <dl>
            <div>
              <dt
                class="text-sm font-semibold tracking-wide text-white uppercase"
              >
                Salary
              </dt>
              <dd class="text-lg text-white">
                <span class="block">£23,000 - £25,000</span>
                <span class="block">+ up to 10% annual bonus</span>
                <span class="block">+ 6% employer pension contribution</span>
              </dd>
            </div>
            <div class="mt-4">
              <dt
                class="text-sm font-semibold tracking-wide text-white uppercase"
              >
                Location
              </dt>
              <dd class="text-lg text-white">
                <span class="block"
                  >Silsden, Yorkshire (3-4 days per week)</span
                >
                <span class="block">Home-based (1-2 days per week)</span>
              </dd>
            </div>
            <div class="mt-4">
              <dt
                class="text-sm font-semibold tracking-wide text-white uppercase"
              >
                Closing Date
              </dt>
              <dd class="text-lg text-white">28th May 2021 at 5pm</dd>
            </div>
            <div class="mt-4">
              <dt
                class="text-sm font-semibold tracking-wide text-white uppercase"
              >
                Interview Date
              </dt>
              <dd class="text-lg text-white">23rd June 2021</dd>
            </div>
            <div class="mt-4">
              <dt
                class="text-sm font-semibold tracking-wide text-white uppercase"
              >
                Apply
              </dt>
              <dd class="text-lg text-white">
                Please email
                <a
                  href="mailto:jobs@capidale.co.uk"
                  class="font-medium underline"
                  >jobs@capidale.co.uk</a
                >
                for an application pack.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const service = await $content('services', params.slug).fetch()

    return { service }
  },

  head() {
    return {
      title: `Capidale - Grants Fundraiser & Researcher`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'This is an exciting opportunity for someone who wants to make the world a better place and has a talent for creative storytelling.',
        },
      ],
    }
  },
}
</script>
