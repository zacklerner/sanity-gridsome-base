<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <header-logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <toggle-theme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
      <span class="footer__links">
        Powered by
        <a href="//gridsome.org">Gridsome</a> &amp;
        <a href="//www.sanity.io">Sanity.io</a>
      </span>
    </footer>
  </div>
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo'

export default {
  props: {
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  components: {
    HeaderLogo
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
