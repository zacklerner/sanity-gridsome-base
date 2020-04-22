export default {
  title: 'Accordion Group',
  name: 'accordionGroup',
  type: 'object',
  fields: [
    {
      title: 'Accordion Group Heading',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Accordions',
      name: 'accordions',
      type: 'array',
      of: [{ type: 'accordion' }]
    }
  ]
}