<template>
  <header>
    <Container as="nav" class="flex justify-between items-center py-4 md:py-6">
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full lg:w-auto">
          <nuxt-link
            to="/"
            aria-label="Home"
            class="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-4"
          >
            <h1 class="sr-only">Capidale</h1>
            <LogoChristmas />
          </nuxt-link>
          <ResponsiveMenu />
        </div>
      </div>
      <PrimaryNav />
    </Container>
  </header>
</template>
