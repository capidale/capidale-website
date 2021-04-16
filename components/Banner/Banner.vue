<template>
  <div class="fixed bottom-0 z-20 w-full pb-4">
    <Container v-if="isVisible" class="block lg:hidden">
      <div
        class="p-4 rounded-md shadow-md bg-gradient-to-br from-lime-500 to-lime-700"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="p-2 text-white rounded-lg bg-lime-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <p class="ml-4 text-lg font-medium text-white">
              We are recruiting - join our team!
            </p>
          </div>
          <button
            class="p-2 text-white rounded-lg hover:bg-lime-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4 focus-visible:ring-offset-lime-300"
            @click="isVisible = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center mt-2">
          <nuxt-link
            to="/jobs/grants-fundraiser-and-researcher"
            class="block w-full px-4 py-2 text-base font-medium text-center transition duration-150 ease-in-out transform bg-white rounded-md text-lime-600 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4 focus-visible:ring-offset-lime-300"
            >Learn more</nuxt-link
          >
        </div>
      </div>
    </Container>
    <Container v-if="isVisible" class="hidden lg:block">
      <div
        class="flex items-center justify-between p-4 rounded-md shadow-md bg-gradient-to-br from-lime-500 to-lime-700"
      >
        <div class="flex items-center">
          <span class="p-2 text-white rounded-lg bg-lime-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </span>
          <p class="ml-4 font-medium text-white">
            Exciting opportunity! We are looking for a Grants Fundraiser &
            Researcher to join our team.
          </p>
        </div>
        <div class="flex items-center">
          <nuxt-link
            to="/jobs/grants-fundraiser-and-researcher"
            class="block px-4 py-2 text-base font-medium text-center transition duration-150 ease-in-out transform bg-white rounded-md text-lime-600 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4 focus-visible:ring-offset-lime-300"
            >Learn more</nuxt-link
          >
          <div class="flex items-center ml-4">
            <button
              class="p-2 text-white rounded-lg hover:bg-lime-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4 focus-visible:ring-offset-lime-300"
              @click="isVisible = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    }
  },
}
</script>
