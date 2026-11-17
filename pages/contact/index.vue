<template>
  <Content>
    <template #pageTitle>Contact</template>
    <template #pageSubtitle>Let's work together</template>
    <div class="flex flex-col-reverse">
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
