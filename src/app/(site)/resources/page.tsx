import { ComingSoon } from '@/components/coming-soon'

export default function ResourcesPage() {
  return (
    <ComingSoon
      title="Resource library in progress"
      description="We’re curating toolkits, training decks, and campaign templates to publish here."
      ctas={[
        {
          label: 'Get updates',
          href: 'mailto:info@campusclimatenetwork.org',
          variant: 'outline',
        },
        {
          label: 'Explore campaigns',
          href: '/network-campaigns',
        },
      ]}
    >
      We’ll share organizing guides and downloadable materials soon. In the
      meantime, reach out if you need support for your campus campaign.
    </ComingSoon>
  )
}
