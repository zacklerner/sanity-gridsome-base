import { MdHome } from 'react-icons/md'

export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  icon: MdHome,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fieldsets: [
    {
      title: 'SEO & Metadata',
      name: 'metadata',
    },
    {
      title: 'Hero Section',
      name: 'heroSection'
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'heroHeading',
      type: 'string',
      title: 'Hero Heading',
      fieldset: 'heroSection',
    },
    {
      name: 'heroSubtitle',
      type: 'string',
      title: 'Hero Subtitle',
      fieldset: 'heroSection',
    },
    {
      name: 'heroVideoPoster',
      type: 'image',
      title: 'Hero Video Poster',
      fieldset: 'heroSection',
      options: {
        hotspot: true
      }
    },
    {
      name: 'heroVideo',
      type: 'url',
      title: 'Hero Video URL (MP4)',
      description: 'This should be a valid URL to an MP4 file',
      fieldset: 'heroSection',
    },
    {
      name: 'heroVideoOgg',
      type: 'url',
      title: 'Hero Video URL (OGG)',
      description: 'This should be a valid URL to an OGG file',
      fieldset: 'heroSection',
    },
    {
      name: 'heroVideoWebm',
      type: 'url',
      title: 'Hero Video URL (WEBM)',
      description: 'This should be a valid URL to an WEBM file',
      fieldset: 'heroSection',
    },
    {
      name: 'introCopy',
      type: 'excerptPortableText',
      title: 'Intro Copy',
      fieldset: 'heroSection',
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Flexible Content',
      of: [
        { type: 'accordion' },
        { type: 'accordionGroup' },
        { type: 'multiColumnText' },
        { type: 'slider' },
      ],
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter, etc.',
      fieldset: 'metadata',
    }
  ]
}