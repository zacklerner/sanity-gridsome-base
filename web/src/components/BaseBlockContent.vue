<template>
  <portable-text
    :blocks="blocks"
    :serializers="serializers"
    :projectId="$static.metadata.sanityOptions.projectId"
    :dataset="$static.metadata.sanityOptions.dataset"
  />
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'

export default {
  props: {
    blocks: Array
  },
  components: {
    PortableText
  },
  data() {
    return {
      serializers: {
        types: {
          mainImage: ({ node }) => (
            <figure>
              <img
                src={this.$urlForImage(node, this.$static.metadata.sanityOptions)
                  .auto('format')
                  .url()}
                alt={node.alt}
              />
              <figcaption>{node.caption}</figcaption>
            </figure>
          ),
          authorReference: ({ node }) => {
            // const href = `/authors/${node.author.slug.current}`
            return <div>Author Ref: {node.author.name}</div>
          }
        },
        marks: {
          internalLink: ({mark, children}) => {
            const { reference = {} } = mark
            const href = reference.path
            return <a href={href}>{children}</a>
          },
          link: ({mark, children}) => {
            const { blank, href } = mark
            return blank ?
              <a href={href} target="_blank" rel="noopener">{children}</a>
              : <a href={href}>{children}</a>
          } 
        }
      }
    }
  }
}
</script>

<static-query>
  {
    metadata{
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>
