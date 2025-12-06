import { UsersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const memberOrgType = defineType({
  name: 'memberOrg',
  title: 'Member Organization',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'university',
      title: 'University/Institution',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description:
        'Full address for geocoding (e.g., "123 University Ave, City, State ZIP")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location Display',
      type: 'string',
      description: 'Short location for display (e.g., "Cambridge, MA")',
    }),
    defineField({
      name: 'coordinates',
      title: 'Coordinates',
      type: 'object',
      description: 'Latitude and longitude (auto-filled or manual)',
      fields: [
        defineField({
          name: 'lat',
          title: 'Latitude',
          type: 'number',
        }),
        defineField({
          name: 'lng',
          title: 'Longitude',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Show this organization on the map',
      initialValue: true,
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          { title: 'Northeast US', value: 'northeast' },
          { title: 'Southeast US', value: 'southeast' },
          { title: 'Midwest US', value: 'midwest' },
          { title: 'Southwest US', value: 'southwest' },
          { title: 'West US', value: 'west' },
          { title: 'Canada', value: 'canada' },
          { title: 'UK/Europe', value: 'europe' },
          { title: 'Australia', value: 'australia' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'university',
      media: 'logo',
    },
  },
  orderings: [
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'University',
      name: 'universityAsc',
      by: [{ field: 'university', direction: 'asc' }],
    },
  ],
})
