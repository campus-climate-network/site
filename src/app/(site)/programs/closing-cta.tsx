import { ClosingCta } from '@/components/closing-cta'

// The programs pages' closing CTA — copy lives here once; the panel shell
// is the shared ClosingCta component.
export function ProgramsClosingCta() {
  return (
    <ClosingCta
      heading="There’s a program for you"
      body="Whether you’re new to organizing or leading a campaign, CCN’s programs will help you build the skills to win."
      primaryCta={{
        label: 'Get involved',
        href: '/take-action?source=programs',
      }}
      secondaryCta={{ label: 'Donate', href: '/donate' }}
    />
  )
}
