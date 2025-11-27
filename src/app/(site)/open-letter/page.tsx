import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Open Letter',
  description:
    'Sign our open letter calling on universities to end fossil fuel influence on campus research. Join thousands demanding fossil-free research policies.',
}

const supporters = [
  'Students',
  'Faculty & researchers',
  'Alumni & donors',
  'Climate justice organizations',
]

const signReasons = [
  {
    title: 'Demand real transparency',
    body: 'Force universities to disclose every fossil fuel contract, grant, and memorandum so communities know who is shaping research agendas.',
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 4h18v16H3Z" />
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M8 13h5" />
      </svg>
    ),
  },
  {
    title: 'Protect academic integrity',
    body: 'Back firewall policies that shield labs and departments from oil and gas interference so findings reflect science, not corporate PR.',
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 21 7v6c0 5-4 9-9 10-5-1-9-5-9-10V7Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Fund a just transition',
    body: 'Redirect research dollars toward community-led solutions and climate justice partnerships that meet frontline needs.',
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21c-4-1-7-4.5-7-9V7l7-3 7 3v5c0 4.5-3 8-7 9Z" />
        <path d="M9 12s1.5-2 3-2 3 2 3 2" />
      </svg>
    ),
  },
  {
    title: 'Stand with frontline communities',
    body: 'Align universities with people experiencing the violent impacts of extraction and show that campus voices will not stay silent.',
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.6 11a2 2 0 1 0-2.6 3" />
        <path d="M17.4 11a2 2 0 1 1 2.6 3" />
        <path d="M8 21v-5l4-4 4 4v5" />
        <path d="M12 3v5" />
      </svg>
    ),
  },
]

export default function OpenLetterPage() {
  return (
    <div className="page-wrapper">
      <section className="bg-brand-primary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Open Letter
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            End fossil fuel influence on campus research.
          </h1>
          <p className="text-base text-slate-700">
            Our open letter calls on universities to adopt Fossil Free Research
            policies, sever contracts with fossil fuel companies, and invest in
            community-led climate solutions. Add your name to stand with
            students demanding accountability.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-tight text-left">
        <ScrollReveal variant="fade-up">
          <h2 className="text-3xl font-semibold text-slate-900">The letter</h2>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={100}>
          <div className="stack text-base text-slate-700">
          <p>Dear University Presidents and Vice-Chancellors,</p>
          <p>
            We are writing as academics and experts who are deeply concerned by
            universities’ collaboration with the fossil fuel industry.
            Universities across the United Kingdom and the United States
            currently accept substantial funding from fossil fuel companies for
            research aimed at solving the very problems this industry causes and
            continues to exacerbate. We believe this funding represents an
            inherent conflict of interest, is antithetical to universities’ core
            academic and social values, and supports industry greenwashing.
            Thus, it compromises universities’ basic institutional integrity,
            academic freedom, and their ability to address the climate
            emergency.
          </p>
          <p>
            For these reasons, we are calling on U.K. and U.S. universities to
            institute a ban on accepting fossil fuel industry funding for
            climate change, environmental, and energy policy research.
          </p>
          <p>
            Accepting fossil fuel industry funding for research meant to address
            the climate crisis undermines the academic integrity of
            climate-related research. To be clear, our concern is not with the
            integrity of individual academics. Rather, it is with the systemic
            issue posed by the context in which academics must work, one where
            fossil fuel industry funding can taint critical climate-related
            research. There is a clear parallel between accepting fossil fuel
            industry funding for climate change research and accepting tobacco
            industry funding for public health research. Already, numerous
            public health and research institutions reject tobacco money due to
            the industry’s extensive record of spreading disinformation around
            the public health consequences of its products. Today, the fossil
            fuel industry has employed disinformation tactics from the same
            playbook, working to sow doubt about climate science, silence
            industry critics, and stall climate action. How, then, can
            universities consider these companies appropriate partners for
            climate-related research?
          </p>
          <p>
            Fossil fuel funding for climate-related research creates a conflict
            of interest that compromises researchers’ academic freedom.
            Academics must be free to determine their own research agendas,
            speak their minds, and declare their findings without fear of
            censorship, reprisal, or the withdrawal of funding for future
            projects. That freedom is compromised by reliance on funding from an
            industry whose core business model is diametrically opposed to
            science-led climate action. Numerous studies also demonstrate that
            industry-funded research can yield results that are favorable to
            industry interests, and that common safeguards like public
            disclosure of funding sources are often inadequate to mitigate this
            skew. We know that many of our colleagues who choose to accept
            fossil fuel funding strive to produce honest and independent
            research, often faced with few alternative funding pathways.
            However, the risk of skewed outcomes is endemic when research
            funding is dominated by companies with agendas that are in conflict
            with the goals of the funded research. Given the immense stakes of
            the climate crisis and the power of university research to shape
            public knowledge and policy around a rapid renewable energy
            transition, this is a risk we simply cannot take.
          </p>
          <p>
            Furthermore, accepting fossil fuel research funding contravenes
            universities’ stated commitments to tackling the climate crisis.
            Fossil fuel companies have concealed, trivialized, and neglected the
            science of climate change for decades. Today, despite warnings from
            the world’s top energy organization that “no investment in new
            fossil fuel supply projects” can be made if the world is to limit
            global heating to 1.5°C, major fossil fuel companies continue to
            plan new extraction projects decades into the future and fail to
            align with the goals of the international Paris Agreement. Though
            they present themselves as leaders in sustainability, fossil fuel
            companies’ investments in oil and gas continue to dwarf their
            renewable energy investments, which represent just a few percent of
            their total capital expenditure. Even the investments that they
            present as directed toward climate solutions contribute to projects
            that are often far from sustainable. In short, fossil fuel
            companies’ claims to be leaders in a green transition should not be
            taken seriously. It is clear, therefore, that these companies cannot
            make for effective or good faith partners with universities seeking
            to pave the way for a sustainable future. Collaborating with these
            companies is inimical to academic institutions’ pledges for climate
            action.
          </p>
          <p>
            University research partnerships with fossil fuel companies play a
            key role in greenwashing these companies’ reputations. When
            universities allow fossil fuel companies to buy and advertise
            connections to university research on key climate and energy issues,
            they inadvertently provide these companies with much-needed
            scientific and cultural legitimacy. This is incredibly valuable to
            fossil fuel companies, as it allows them to report to policymakers,
            shareholders, and the media that they are working with globally
            respected institutions on transition solutions, greenwashing their
            reputation and cleansing their records of climate destruction.
          </p>
          <p>
            Finally, universities that maintain close ties to the fossil fuel
            industry incur a substantial reputational risk. We are proud that
            many universities have publicly committed to tackling climate
            change, notably by divesting their endowments from fossil fuels. Yet
            in allowing fossil fuel companies to fund climate-related research,
            universities violate their own policies and espoused principles, and
            undermine their core social and academic mission. Increasingly,
            fossil fuel industry sponsorship is eroding faith in scientific and
            cultural institutions’ commitments to climate action, leading a
            number of such institutions — including, most recently, the National
            Portrait Gallery in London — to sever ties with the industry. When
            universities have a pivotal role to play in global conversations
            about tackling the climate emergency, they cannot afford to have
            their voices compromised, which is precisely what will happen if
            they continue to make themselves dependent on the industry most
            responsible for climate breakdown.
          </p>
          <p>
            Universities and the research they produce are vital to delivering a
            rapid, just transition away from fossil fuels. However, such efforts
            are undermined by fossil fuel industry funding. Academics should not
            be forced to choose between researching climate solutions and
            inadvertently aiding corporate greenwashing; our universities must
            provide an alternative. Wealthy universities in particular have a
            duty to lead the way in doing so. To all universities, at this
            moment of extreme crisis, we urge you to heed our call and cut
            damaging research ties with the fossil fuel industry.
          </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="page-container stack">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-3xl font-semibold text-slate-900">
              Why sign on?
            </h2>
            <p className="text-base text-slate-600">
              The more voices we have, the harder it is for universities to ignore
              the call for climate justice.
            </p>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={100}
          variant="blossom"
          className="grid gap-6 text-slate-600 md:grid-cols-2"
          childClassName="list-none"
        >
          {signReasons.map((reason) => (
            <li
              key={reason.title}
              className="stack stack-relaxed rounded-3xl border border-brand-secondary/20 bg-white p-6 text-left shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                {reason.icon}
              </div>
              <div className="stack stack-dense">
                <p className="text-base font-semibold text-brand-primary">
                  {reason.title}
                </p>
                <p className="text-sm">{reason.body}</p>
              </div>
            </li>
          ))}
        </StaggerReveal>
      </section>

      <section className="bg-slate-900 section-dark">
        <div className="page-container stack text-left text-white">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-3xl font-semibold">Who has signed so far</h2>
              <p className="text-sm text-slate-200">
                Thousands of supporters have endorsed the letter, representing
                campuses and movements around the world.
              </p>
            </div>
          </ScrollReveal>
          <StaggerReveal
            staggerDelay={80}
            variant="blossom"
            className="grid gap-4 text-sm text-slate-100 md:grid-cols-4"
          >
            {supporters.map((group) => (
              <div
                key={group}
                className="rounded-3xl bg-white/10 p-4 font-semibold text-brand-accent"
              >
                {group}
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="page-container stack stack-tight text-left">
        <ScrollReveal variant="fade-up">
          <h2 className="text-3xl font-semibold text-slate-900">Add your name</h2>
          <p className="mt-4 text-base text-slate-600">
            We're finalizing the new signatory form. In the meantime, contact us
            and we'll keep you updated about the next release of signatures.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
              href="mailto:info@campusclimatenetwork.org"
            >
              Pledge Your Support
            </a>
            <Link
              className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
              href="/ffr-campaign"
            >
              Learn About FFR
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
