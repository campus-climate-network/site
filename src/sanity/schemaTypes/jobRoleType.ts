import { CaseIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const jobRoleType = defineType({
  name: 'jobRole',
  title: 'Job Role',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "National Organizer"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      description: 'e.g., "Organizing", "Operations"',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Remote", "New York, NY"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short summary of the role',
    }),
    defineField({
      name: 'applicationUrl',
      title: 'Application URL',
      type: 'url',
      description: 'Link to the application form',
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted Date',
      type: 'date',
      description: 'When the role was posted',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isOpen',
      title: 'Open',
      type: 'boolean',
      description: 'Show this role on the careers page',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      location: 'location',
      isOpen: 'isOpen',
    },
    prepare({ title, department, location, isOpen }) {
      const parts = [department, location].filter(Boolean).join(' • ')
      return {
        title: `${isOpen === false ? '🔒 ' : ''}${title}`,
        subtitle: parts || undefined,
      }
    },
  },
  orderings: [
    {
      title: 'Posted (Newest)',
      name: 'postedAtDesc',
      by: [{ field: 'postedAt', direction: 'desc' }],
    },
    {
      title: 'Posted (Oldest)',
      name: 'postedAtAsc',
      by: [{ field: 'postedAt', direction: 'asc' }],
    },
  ],
})
