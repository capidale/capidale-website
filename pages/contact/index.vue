<template>
  <Content>
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Get in touch
      </h2>
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="py-6 bg-white rounded-lg">
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            novalidate
          >
            <div class="space-y-4">
              <input type="hidden" name="honeypot-stop-bot" />
              <div class="grid grid-cols-2 gap-x-8">
                <div class="space-y-1">
                  <label for="first-name" class="font-medium text-gray-600"
                    >First name</label
                  >
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    class="form-input w-full focus:border-light-green-300 focus:shadow-outline-light-green transition duration-150 ease-in-out"
                  />
                </div>
                <div class="space-y-1">
                  <label for="last-name" class="font-medium text-gray-600"
                    >Last name</label
                  >
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    class="form-input w-full focus:border-light-green-300 focus:shadow-outline-light-green transition duration-150 ease-in-out"
                  />
                </div>
              </div>
              <div class="space-y-1">
                <label for="charity" class="font-medium text-gray-600"
                  >Charity</label
                >
                <input
                  id="charity"
                  name="charity"
                  type="text"
                  class="form-input w-full focus:border-light-green-300 focus:shadow-outline-light-green transition duration-150 ease-in-out"
                />
              </div>
              <div class="space-y-1">
                <label for="email" class="font-medium text-gray-600"
                  >Email</label
                >
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="form-input w-full focus:border-light-green-300 focus:shadow-outline-light-green transition duration-150 ease-in-out"
                />
              </div>
              <div class="space-y-1">
                <label for="phone-number" class="font-medium text-gray-600"
                  >Phone number</label
                >
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  class="form-input w-full focus:border-light-green-300 focus:shadow-outline-light-green transition duration-150 ease-in-out"
                />
              </div>
              <div class="space-y-1">
                <label for="message" class="font-medium text-gray-600"
                  >Message</label
                >
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  class="form-textarea w-full focus:border-light-green-300 focus:shadow-outline-light-green transition duration-150 ease-in-out"
                />
              </div>
              <div>
                <span class="rounded-md shadow">
                  <button
                    type="submit"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-green-600 hover:bg-light-green-500 focus:outline-none focus:border-light-green-700 focus:shadow-outline-light-green transition duration-150 ease-in-out sm:min-w-xl sm:max-w-xl md:py-4 md:text-lg md:px-10"
                  >
                    Let's talk
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div class="pt-6">
          <div
            class="py-6 px-6 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-8 lg:block lg:space-y-6"
          >
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-light-green-500 text-white"
                >
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <span class="ml-4 text-lg font-medium text-gray-900"
                >01274 400824</span
              >
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-light-green-500 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096a4.9044 4.9044 0 01-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827a4.9631 4.9631 0 01-2.212.085c.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                    />
                  </svg>
                </div>
              </div>
              <span class="ml-4 text-lg font-medium text-gray-900"
                >@Capidale</span
              >
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-light-green-500 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </div>
              </div>
              <span class="ml-4 text-lg font-medium text-gray-900"
                >capidale-consulting</span
              >
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Content>
</template>

<script>
export default {
  head() {
    return {
      title: 'Capidale - Contact us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Are you looking for fundraising consultants to help your charity grow? Get in touch, we would love to help!',
        },
      ],
    }
  },
}
</script>
