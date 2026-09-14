import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Server-only: carries the write token. Import it from server actions and
// route handlers only — never from a client component or anything one
// imports. Today its single job is the member onboarding form (logo upload,
// draft memberOrg, marking the invite used).
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
  // Reads through this client see drafts too; the default perspective hides
  // `drafts.*`, which makes a just-written draft look like it doesn't exist.
  perspective: 'raw',
})
