<template>
  <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-16">
    <CardCaseStudy
      v-for="caseStudy of caseStudies"
      :key="caseStudy.slug"
      :case-study="caseStudy"
    />
  </div>
</template>

<script>
export default {
  props: {
    caseStudies: {
      type: Array,
      required: true,
    },
  },
}
</script>
