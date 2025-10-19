import { ComingSoon } from '@/components/coming-soon'

export default function FfrArchivePage() {
  return (
    <ComingSoon
      title="Fossil Free Research archive coming soon"
      description="We’re organizing reports, case studies, and investigative resources that expose fossil fuel influence in academia."
      ctas={[
        {
          label: 'Join Fossil Free Research',
          href: '/ffr-campaign',
        },
        {
          label: 'Email the team',
          href: 'mailto:info@campusclimatenetwork.org',
          variant: 'outline',
        },
      ]}
    >
      We’re gathering materials from partner campaigns and allied researchers.
      Share findings with us so we can include them when the archive launches.
    </ComingSoon>
  )
}
