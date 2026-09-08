import { CaseIcon } from '@sanity/icons/Case'
import { defineArrayMember, defineField, defineType } from 'sanity'
import {
  EMPLOYMENT_TYPES,
  LOCATION_TYPES,
  employmentTypeLabel,
  formatJobLocation,
  isRoleOpen,
} from '@/sanity/lib/job-role'

export const jobRoleType = defineType({
  name: 'jobRole',
  title: 'Job Role',
  type: 'document',
  icon: CaseIcon,
  groups: [
    { name: 'overview', title: 'Overview' },
    { name: 'details', title: 'Details' },
    { name: 'posting', title: 'Full posting' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'overview',
      description: 'e.g., "National Organizer"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'overview',
      description:
        'The role’s web address: campusclimatenetwork.org/hiring/<slug>. Click Generate to fill it from the title.',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      // Field name kept as `description` so roles published before the
      // full posting existed keep their text; it's titled Summary in Studio.
      name: 'description',
      title: 'Summary',
      type: 'text',
      group: 'overview',
      rows: 3,
      description:
        'One or two sentences shown on the careers page card and under the title of the full posting',
      validation: (Rule) =>
        Rule.max(240).warning(
          'Keep the summary short — the full posting has its own tab',
        ),
    }),
    defineField({
      name: 'body',
      title: 'Full posting',
      type: 'array',
      group: 'posting',
      description:
        'The complete job description: responsibilities, qualifications, how to apply, and so on',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h2' },
            { title: 'Subheading', value: 'h3' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [{ title: 'URL', name: 'href', type: 'url' }],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'compensation',
      title: 'Pay',
      type: 'string',
      group: 'details',
      description:
        'Shown exactly as written, e.g., "$22/hr, ~10 hrs/week" or "$58k–$65k/yr"',
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment type',
      type: 'string',
      group: 'details',
      options: { list: [...EMPLOYMENT_TYPES] },
    }),
    defineField({
      name: 'locationType',
      title: 'Work location',
      type: 'string',
      group: 'details',
      options: {
        list: [...LOCATION_TYPES],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'remote',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'City / region',
      type: 'string',
      group: 'details',
      description:
        'Where the role is based, e.g., "New York, NY" (or a region like "Midwest US" for remote roles with a footprint). Leave blank for fully remote roles.',
      validation: (Rule) =>
        Rule.custom((value?: string) =>
          value && /remote/i.test(value)
            ? 'Set Work location to Remote instead — this field is only for a city or region'
            : true,
        ),
    }),
    defineField({
      name: 'applicationUrl',
      title: 'Application URL',
      type: 'url',
      group: 'details',
      description:
        'Where the Apply button sends people — an application form, or a mailto: link',
      validation: (Rule) =>
        Rule.required().uri({ scheme: ['http', 'https', 'mailto'] }),
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted date',
      type: 'date',
      group: 'details',
      description: 'When the role was posted',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'applicationDeadline',
      title: 'Apply by',
      type: 'date',
      group: 'details',
      description:
        'Last day applications are accepted. The role closes on the site automatically the day after. Leave blank if the role is open until filled.',
      validation: (Rule) =>
        Rule.min(Rule.valueOfField('postedAt')).warning(
          'Deadline is before the posted date',
        ),
    }),
    defineField({
      name: 'isOpen',
      title: 'Open',
      type: 'boolean',
      group: 'details',
      description:
        'Show this role on the careers page. Turn off to close a role before its deadline.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      employmentType: 'employmentType',
      locationType: 'locationType',
      location: 'location',
      isOpen: 'isOpen',
      applicationDeadline: 'applicationDeadline',
    },
    prepare({
      title,
      employmentType,
      locationType,
      location,
      isOpen,
      applicationDeadline,
    }) {
      const open = isRoleOpen({ isOpen, applicationDeadline })
      const parts = [
        employmentTypeLabel(employmentType),
        formatJobLocation(locationType, location),
      ]
        .filter(Boolean)
        .join(' • ')
      return {
        title: `${open ? '' : '🔒 '}${title}`,
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
