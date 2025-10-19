import { ComingSoon } from '@/components/coming-soon'

export default function FfrToolkitPage() {
  return (
    <ComingSoon
      title="Campus toolkit in development"
      description="We’re building a step-by-step guide to help students launch Fossil Free Research campaigns at their universities."
      ctas={[
        {
          label: 'Sign up for updates',
          href: 'mailto:info@campusclimatenetwork.org',
        },
        {
          label: 'Read the campaign overview',
          href: '/ffr-campaign',
          variant: 'outline',
        },
      ]}
    >
      Expect action planning templates, power mapping exercises, and media
      resources. Tell us what tools would be most useful and we’ll prioritize
      them.
    </ComingSoon>
  )
}
