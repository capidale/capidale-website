<template>
  <header>
    <Container>
      <nav class="flex items-center justify-between py-4">
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <h1 class="sr-only">Capidale</h1>
            <nuxt-link to="/" aria-label="Home">
              <img
                src="~/assets/img/capidale-logo-on-white.svg"
                class="h-8 w-auto lg:h-12"
                alt="Logo"
              />
            </nuxt-link>
            <ResponsiveMenu />
          </div>
        </div>
        <PrimaryNav />
      </nav>
    </Container>
  </header>
</template>
