<template>
  <div class="-mr-2 flex items-center lg:hidden">
    <button
      id="main-menu"
      type="button"
      class="inline-flex items-center justify-center p-2 rounded-md text-cool-gray-400 transition duration-150 ease-in-out hover:bg-lime-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4"
      aria-label="Main menu"
      aria-haspopup="true"
      @click="isResponsiveMenuOpen = true"
    >
      <svg
        class="h-6 w-6"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
    <transition
      enter-active-class="transition origin-top-right duration-150 ease-out"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition origin-top-right duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isResponsiveMenuOpen"
        class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
      >
        <div class="rounded-lg shadow-md">
          <div
            class="rounded-lg bg-white shadow-xs overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <nuxt-link to="/" @click.native="isResponsiveMenuOpen = false">
                <Logo size="sm" />
              </nuxt-link>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-cool-gray-400 transition duration-150 ease-in-out hover:bg-lime-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4"
                  aria-label="Close menu"
                  @click="isResponsiveMenuOpen = false"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <div class="px-2 pt-2 pb-3 space-y-2">
                <ResponsiveLink
                  to="/services/fundraising"
                  @click.native="isResponsiveMenuOpen = false"
                  >Fundraising</ResponsiveLink
                >
                <ResponsiveLink
                  to="/services/evaluation"
                  @click.native="isResponsiveMenuOpen = false"
                  >Evaluation</ResponsiveLink
                >
                <ResponsiveLink
                  to="/case-studies"
                  @click.native="isResponsiveMenuOpen = false"
                  >Case Studies</ResponsiveLink
                >
                <ResponsiveLink
                  to="/news"
                  @click.native="isResponsiveMenuOpen = false"
                  >News</ResponsiveLink
                >
                <ResponsiveLink
                  to="/about"
                  @click.native="isResponsiveMenuOpen = false"
                  >About Us</ResponsiveLink
                >
              </div>
              <div>
                <nuxt-link
                  to="/contact"
                  class="block w-full px-5 py-3 text-center font-medium text-lime-600 transition duration-150 ease-in-out bg-cool-gray-50 hover:bg-cool-gray-100 hover:text-lime-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4"
                  role="menuitem"
                  @click.native="isResponsiveMenuOpen = false"
                  >Contact Us</nuxt-link
                >
              </div>
            </nav>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isResponsiveMenuOpen: false,
    }
  },
}
</script>
