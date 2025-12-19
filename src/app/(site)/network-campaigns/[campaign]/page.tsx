import { redirect } from 'next/navigation'

// Campaign detail pages are hidden until Student Wins content is ready
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CampaignDetailPage() {
  redirect('/network-campaigns')
}
