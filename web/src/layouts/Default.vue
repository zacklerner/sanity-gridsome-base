<template>
  <div id="app">
    <TheHeader />

    <main class="main">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
:root {
  --color-primary: #d72132;
  --color-gray-dark: #4a4a4a;
  --color-gray-light: #e9e9e9;
}
body {
  margin: 0;
}
</style>
