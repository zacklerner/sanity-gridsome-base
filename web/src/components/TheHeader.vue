<template>
  <header class="the-header">
    <HeaderLogo v-if="showLogo" />
    <nav class="navigation--primary">
      <g-link to="/">Home</g-link>
      <g-link to="/about">About</g-link>
      <g-link to="/portfolio">Portfolio</g-link>
      <g-link to="/blog">Blog</g-link>
    </nav>
  </header>
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
.the-header {
  display: flex;
  justify-content: space-between;
  box-shadow: var(--shadow-primary);
}
.navigation--primary a {
  margin-left: calc(var(--common-spacing) / 2);
}
</style>
