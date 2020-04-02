<template>
  <div class="post-meta">
    Posted {{ post.publishedAt }}.
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min read.</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
