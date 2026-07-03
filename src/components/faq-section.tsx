import { Plus } from 'lucide-react'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { FAQPageJsonLd } from '@/components/json-ld'

type Faq = {
  question: string
  answer: string
}

type FaqSectionProps = {
  faqs: Faq[]
  title?: string
  eyebrow?: string
}

// Renders the visible FAQ list and its FAQPage JSON-LD from the same data,
// so the structured data always matches on-page content.
export function FaqSection({
  faqs,
  title = 'Frequently asked questions',
  eyebrow = 'FAQ',
}: FaqSectionProps) {
  return (
    <div className="stack stack-relaxed text-left">
      <FAQPageJsonLd faqs={faqs} />
      <ScrollReveal variant="fade-up">
        <div className="stack stack-tight max-w-3xl">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            {eyebrow}
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            {title}
          </h2>
        </div>
      </ScrollReveal>
      <StaggerReveal
        staggerDelay={75}
        variant="fade-up"
        className="stack stack-tight max-w-3xl"
      >
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-3xl text-base font-semibold text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 sm:text-lg [&::-webkit-details-marker]:hidden">
              {faq.question}
              <Plus
                aria-hidden="true"
                className="h-5 w-5 flex-none text-brand-secondary transition-transform group-open:rotate-45 motion-reduce:transition-none"
              />
            </summary>
            <p className="mt-3 text-base text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </StaggerReveal>
    </div>
  )
}
