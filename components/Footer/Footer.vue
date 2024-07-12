<template>
  <footer class="border-t border-lime-600">
    <Container class="py-8 space-y-6">
      <div
        class="grid grid-cols-3 gap-y-4 gap-x-10 md:flex md:flex-wrap md:items-center md:justify-center md:space-x-10">
        <TextLink to="/services/fundraising" class="flex justify-center">Fundraising</TextLink>
        <TextLink to="/services/evaluation" class="flex justify-center">Evaluation</TextLink>
        <TextLink to="/case-studies" class="flex justify-center">Case Studies</TextLink>
        <TextLink to="/news" class="flex justify-center">News</TextLink>
        <TextLink to="/about" class="flex justify-center">About</TextLink>
        <TextLink to="/contact" class="col-span-3 flex justify-center">Contact</TextLink>
      </div>
      <div class="flex items-center justify-center space-x-10">
        <a href="https://www.linkedin.com/company/capidale-consulting"
          class="rounded-md text-cool-gray-600 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:text-lime-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4"
          aria-label="Visit Capidale Linkedin page" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg></a>
      </div>
      <div>
        <p class="text-center text-gray-400">
          &copy; 2011-{{ currentYear }} Capidale. All rights reserved.
          <nuxt-link to="/privacy-policy"
            class="rounded-md transition duration-150 ease-in-out transform hover:-translate-y-1 hover:text-lime-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4">Privacy
            policy</nuxt-link>.
        </p>
      </div>
    </Container>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
