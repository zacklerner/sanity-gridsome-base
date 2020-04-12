<template>
  <video
    width="100%"
    :poster="posterAssetUrl"
    id="Video"
    @ended="onEnd()"
    controls
  >
    <source v-if="mp4Source" :src="mp4Source" type="video/mp4">
    <source v-if="oggSource" :src="oggSource" type="video/ogg">
    <source v-if="webmSource" :src="webmSource" type="video/webm">
    Your browser does not support the video tag or the file format of this video. Sorry :(
  </video>
</template>

<script>
export default {
  props: {
    mp4Source: String,
    oggSource: String,
    webmSource: String,
    poster: {
      type: Object,
      default: {}
    }
  },
  computed: {
    posterAssetUrl() {
      return this.poster == null ? "" : this.poster.asset.url
    }
  },
  methods: {
    onEnd (event) {
      this.$emit('ended')
    }
  }
}
</script>

<style scoped>
video {
  object-fit: cover;
}
</style>
