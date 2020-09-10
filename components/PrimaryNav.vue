<template>
  <Fragment>
    <div class="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
      <nuxt-link
        to="/fundraising"
        class="font-medium text-gray-500 hover:text-light-green-600 transition duration-150 ease-in-out"
        >Fundraising</nuxt-link
      >
      <nuxt-link
        to="/evaluation"
        class="font-medium text-gray-500 hover:text-light-green-600 transition duration-150 ease-in-out"
        >Evaluation</nuxt-link
      >
      <nuxt-link
        to="/training"
        class="font-medium text-gray-500 hover:text-light-green-600 transition duration-150 ease-in-out"
        >Training</nuxt-link
      >
      <nuxt-link
        to="/training"
        class="font-medium text-gray-500 hover:text-light-green-600 transition duration-150 ease-in-out"
        >Case Studies</nuxt-link
      >
      <a
        href="#"
        class="font-medium text-gray-500 hover:text-light-green-600 transition duration-150 ease-in-out"
        >News</a
      >
      <nuxt-link
        to="/about"
        class="font-medium text-gray-500 hover:text-light-green-600 transition duration-150 ease-in-out"
        >About</nuxt-link
      >
      <nuxt-link
        to="/contact"
        class="font-medium text-light-green-600 hover:text-light-green-500 transition duration-150 ease-in-out lg:hidden"
        >Contact</nuxt-link
      >
    </div>
    <div class="hidden lg:block">
      <nuxt-link
        to="/contact"
        class="block w-full px-5 py-3 rounded-full font-medium text-center text-light-green-600 bg-light-green-50 hover:bg-light-green-100 hover:text-light-green-700 focus:outline-none focus:bg-light-green-100 focus:text-light-green-700 transition duration-150 ease-in-out"
        role="menuitem"
        >Contact</nuxt-link
      >
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  components: { Fragment },
}
</script>
