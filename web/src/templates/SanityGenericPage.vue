<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <h2>{{ $page.post.heroHeading }}</h2>
    <BaseBlockContent
      class="intro-copy"
      :blocks="$page.post._rawIntroCopy"
      v-if="$page.post._rawIntroCopy"
    />
    <BaseBlockContent
      class="post__content"
      :blocks="$page.post._rawBody"
      v-if="$page.post._rawBody"
    />
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.metaDescription
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  post: sanityGenericPage (id: $id) {
    title
    heroHeading
    heroSubtitle
    heroVideoPoster {
      asset {
        url
      }
    }
    heroVideo
    heroVideoOgg
    heroVideoWebm
    _rawIntroCopy
    _rawBody
    metaDescription
  }
}
</page-query>