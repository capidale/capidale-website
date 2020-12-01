<template>
  <div>
    <div class="text-center">
      <TextHeading :level="2" colour="lime"> Our Services </TextHeading>
      <TextHeading :level="3">
        Tailored support designed to help you grow
      </TextHeading>
      <TextContent class="max-w-3xl">
        We are a specialist grant fundraising and project evaluation
        consultancy, based in Yorkshire and supporting charities across the UK.
        We can help you raise the funds you need - and show the world the
        difference you make.
      </TextContent>
    </div>
    <div class="pt-16 mx-auto sm:py-10">
      <ul class="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-16">
        <li
          v-for="service of services"
          :key="service.slug"
          class="flex flex-col"
        >
          <Icon :name="service.icon" />
          <h4 class="mt-4 text-2xl font-semibold text-cool-gray-900">
            {{ service.title }}
          </h4>
          <p class="mt-3 text-lg text-cool-gray-600">
            {{ service.description }}
          </p>
          <div class="flex-1 flex items-end mt-6">
            <TextLink :to="`services/${service.slug}`">
              Find out more ->
            </TextLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
}
</script>
