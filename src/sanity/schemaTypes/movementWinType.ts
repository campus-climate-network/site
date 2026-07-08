import { StarIcon } from '@sanity/icons/Star'
import { defineField, defineType } from 'sanity'

export const movementWinType = defineType({
  name: 'movementWin',
  title: 'Movement Win',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "NYU Divested from fossil fuels"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'When the win occurred',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Summary of the win',
    }),
    defineField({
      name: 'campaign',
      title: 'Campaign',
      type: 'string',
      description: 'The CCN campaign this win is associated with',
      options: {
        list: [
          { title: 'Fossil Free Research', value: 'fossil-free-research' },
          { title: 'Campus Decarbonization', value: 'campus-decarbonization' },
          { title: 'Green New Deal', value: 'green-new-deal' },
          { title: 'Fossil Free Careers', value: 'fossil-free-careers' },
          { title: 'Fossil Fuel Divestment', value: 'fossil-fuel-divestment' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Link to news article or source',
    }),
    defineField({
      name: 'memberOrg',
      title: 'Member Organization',
      type: 'reference',
      to: [{ type: 'memberOrg' }],
      description: 'The organization that achieved this win',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      orgName: 'memberOrg.name',
    },
    prepare({ title, date, orgName }) {
      return {
        title,
        subtitle: `${orgName || 'No org'} • ${date || 'No date'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Date (Newest)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Date (Oldest)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
})
