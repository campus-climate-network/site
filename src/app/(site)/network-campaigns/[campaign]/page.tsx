import { redirect } from 'next/navigation'

// Campaign detail pages are hidden until Student Wins content is ready
export default function CampaignDetailPage() {
  redirect('/network-campaigns')
}
