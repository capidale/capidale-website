<template>
  <Content>
    <template #pageTitle>Contact</template>
    <template #pageSubtitle>Let's work together</template>
    <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        novalidate
      >
        <div class="space-y-4">
          <input type="hidden" name="honeypot-stop-bot" />
          <input type="hidden" name="form-name" value="contact" />
          <div class="grid grid-cols-2 gap-x-8">
            <TextInput
              id="first-name"
              name="first-name"
              label="First name"
              type="text"
            />
            <TextInput
              id="last-name"
              name="last-name"
              label="Last name"
              type="text"
            />
          </div>
          <TextInput id="charity" name="charity" label="Charity" type="text" />
          <TextInput id="email" name="email" label="Email" type="text" />
          <TextInput
            id="phone-number"
            name="phone-number"
            label="Phone number"
            type="text"
          />
          <TextBox id="message" name="message" label="Message" />
          <Button>Let's talk</Button>
        </div>
      </form>
      <div class="pt-5">
        <div
          class="py-6 px-6 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-8 lg:block lg:space-y-6"
        >
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Icon name="icon-telephone" />
              <h4 class="sr-only">Telephone</h4>
            </div>
            <p class="ml-4 text-lg font-medium text-cool-gray-900">
              01274 400824
            </p>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Icon name="icon-twitter" />
              <h4 class="sr-only">Twitter</h4>
            </div>
            <p class="ml-4 text-lg font-medium text-cool-gray-900">@Capidale</p>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Icon name="icon-linkedin" />
              <h4 class="sr-only">Linkedin</h4>
            </div>
            <p class="ml-4 text-lg font-medium text-cool-gray-900">
              capidale-consulting
            </p>
          </div>
        </div>
      </div>
    </div>
  </Content>
</template>

<script>
import TextInput from '~/components/TextInput/TextInput.vue'
export default {
  components: { TextInput },
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
