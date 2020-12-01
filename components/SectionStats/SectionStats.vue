<template>
  <div>
    <div class="max-w-2xl mx-auto text-center">
      <TextHeading :level="2" colour="lime-muted">
        Our Track Record
      </TextHeading>
      <TextHeading :level="3" colour="white">
        We have helped over 80 charities
      </TextHeading>
      <TextContent colour="lime-muted">
        Our evidence-based approach to fundraising and project evaluation has a
        big impact. We’re proud of the difference we make.
      </TextContent>
    </div>
    <dl
      class="flex flex-col items-center justify-center mt-10 mx-auto space-y-10 text-center lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8"
    >
      <div v-for="(stat, index) of stats" :key="index" class="flex flex-col">
        <dt class="order-2 mt-2 text-base font-medium text-lime-50 sm:text-lg">
          {{ stat.description }}
        </dt>
        <dd
          class="order-1 text-3xl leading-none font-extrabold text-white sm:text-5xl"
        >
          {{ stat.stat }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      required: true,
    },
  },
}
</script>
