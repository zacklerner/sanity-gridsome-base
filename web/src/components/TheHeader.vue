<template>
  <header>
    <HeaderLogo v-if="showLogo" />
    This is 'The' header.
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
