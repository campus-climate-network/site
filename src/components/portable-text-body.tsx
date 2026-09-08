import {
  PortableText,
  type PortableTextComponents,
  type PortableTextProps,
} from '@portabletext/react'

// Body typography for Portable Text rendered on the site (blog posts, job
// postings). Element styles live in this one wrapper so every surface stays
// in step — see design.md "Blog post".
const BODY_CLASS =
  'stack stack-mid text-base leading-relaxed text-slate-700 [&_h2]:mt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h3]:mt-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_a]:text-brand-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-brand-primary/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-600 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6'

export function PortableTextBody({
  value,
  components,
}: {
  value: PortableTextProps['value']
  components?: PortableTextComponents
}) {
  return (
    <div className={BODY_CLASS}>
      <PortableText value={value} components={components} />
    </div>
  )
}
