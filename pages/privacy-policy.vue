<template>
  <Content :document="privacy" :image="privacy.img">
    <template #pageTitle>{{ privacy.title }}</template>
    <template #pageSubtitle>{{ privacy.subtitle }}</template>
  </Content>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const privacy = await $content('privacy-policy/privacy-policy').fetch()

    return { privacy }
  },

  head() {
    return {
      title: `Capidale - ${this.privacy.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.privacy.description,
        },
      ],
    }
  },
}
</script>
