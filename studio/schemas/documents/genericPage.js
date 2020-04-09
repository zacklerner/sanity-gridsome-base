import { FaToiletPaper } from 'react-icons/fa'

export default {
  name: 'genericPage',
  type: 'document',
  title: 'Generic Page',
  icon: FaToiletPaper,
  fieldsets: [
    {
      title: 'SEO & Metadata',
      name: 'metadata',
    },
    {
      title: 'Hero Section',
      name: 'heroSection',
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the page',
      options: {
        source: 'title',
        maxLength: 96
      }
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
      fieldset: 'heroSection'
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
    // {
    //   name: 'content',
    //   type: 'array',
    //   title: 'Flexible Content Blocks',
    //   of: [
    //     { type: 'accordion' },
    //     { type: 'cta' },
    //     { type: 'slider' },
    //     { type: 'textWithImage' },
    //     { type: 'multiColumnText' },
    //   ],
    //   fieldset: 'heroSection',
    // },
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