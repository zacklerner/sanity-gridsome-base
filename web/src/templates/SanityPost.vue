<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.post.title }}</h1>

      <PostMeta :post="$page.post" v-if="$page.post" />
    </div>

    <div class="post content-box">
      <div class="post__header">
        <img
          alt="Cover image"
          v-if="$page.post.mainImage"
          :src="$urlForImage($page.post.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
      </div>

      <BaseBlockContent
        class="post__content"
        :blocks="$page.post._rawBody"
        v-if="$page.post._rawBody"
      />

      <div class="post__footer">
        <PostTags :post="$page.post" v-if="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <author-card class="post-author" />
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import AuthorCard from '~/components/AuthorCard'

export default {
  components: {
    AuthorCard,
    PostMeta,
    PostTags
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
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
  post: sanityPost (id: $id) {
    title
    publishedAt (format: "D. MMMM YYYY")
    categories {
      id
      title
    }
    _rawExcerpt
    _rawBody
    mainImage {
      asset {
        _id
        url
      }
      caption
      alt
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
  }
}
</page-query>
