<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <Banner />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'h-screen bg-white font-sans antialiased',
    },
  },
}
</script>
