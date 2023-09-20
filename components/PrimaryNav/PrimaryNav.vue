<template>
  <Fragment>
    <div class="hidden lg:flex lg:items-center lg:space-x-10">
      <TextLink to="/services/fundraising">Fundraising</TextLink>
      <TextLink to="/services/evaluation">Evaluation</TextLink>
      <TextLink to="/case-studies">Case Studies</TextLink>
      <TextLink to="/news">News</TextLink>
      <TextLink to="/about">About</TextLink>
    </div>
    <div class="hidden lg:block">
      <NuxtButton to="/contact" role="menuitem">Contact us</NuxtButton>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  components: { Fragment },
}
</script>
