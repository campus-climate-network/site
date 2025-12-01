import type { Metadata } from 'next'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { OpenLetterForm } from '@/components/open-letter-form'

export const metadata: Metadata = {
  title: 'Open Letter',
  description:
    'Sign our open letter calling on universities to end fossil fuel influence on campus research. Join thousands demanding fossil-free research policies.',
}

const notableSignatories = [
  {
    name: 'Peter Kalmus',
    title:
      "Associate Project Scientist at NASA's Jet Propulsion Laboratory; Associate Project Scientist, UCLA Joint Institute for Regional Earth System Science and Engineering",
  },
  {
    name: 'Michael Mann',
    title:
      'Distinguished Professor of Atmospheric Science & Director of Earth System Science Center, Pennsylvania State University',
  },
  {
    name: 'David Michaels',
    title:
      'Professor of Environmental and Occupational Health, George Washington University School of Public Health',
  },
  {
    name: 'Peter Frumhoff',
    title:
      'Former Director of Science & Policy and Chief Climate Scientist, Union of Concerned Scientists; Affiliate of Harvard University Center for the Environment',
  },
  {
    name: 'Rowan Williams',
    title:
      'Former Archbishop of Canterbury; Chancellor, University of South Wales',
  },
  {
    name: 'Robert Howarth',
    title:
      'David R. Atkinson Professor of Ecology & Environmental Biology, Cornell University',
  },
  {
    name: 'Mark Maslin',
    title: 'Professor of Earth System Science, University College London',
  },
  {
    name: 'Jacquelyn Gill',
    title:
      'Associate Professor of Paleoecology & Plant Ecology, University of Maine',
  },
  {
    name: 'Cornel West',
    title:
      'Dietrich Bonhoeffer Professor of Philosophy and Christian Practice, Union Theological Seminary; Professor Emeritus, Princeton University',
  },
  {
    name: 'Julia Steinberger',
    title:
      'Professor of Societal Challenges of Climate Change, University of Lausanne; former Professor of Social Ecology & Ecological Economics, University of Leeds',
  },
  {
    name: 'Roger Penrose',
    title: 'Emeritus Rouse Ball Professor of Mathematics, University of Oxford',
  },
  {
    name: 'Mary Robinson',
    title:
      'Adjunct Professor of Climate Justice, Trinity College Dublin; former President of Ireland',
  },
  {
    name: 'Eric Chivian',
    title:
      'Founder and Former Director, Center for Health and the Global Environment, Harvard Medical School; Co-Founder, International Physicians for the Prevention of Nuclear War; Recipient, 1985 Nobel Peace Prize',
  },
  {
    name: 'Hans-O. Poertner',
    title: 'Professor of Integrative Ecophysiology, Alfred Wegener Institute',
  },
  {
    name: 'Hamid Abakar Souleymane',
    title: 'IPCC Executive Committee',
  },
  {
    name: 'Raj Patel',
    title:
      'Research Professor, Lyndon B Johnson School of Public Affairs, University of Texas at Austin',
  },
  {
    name: 'Karenna Gore',
    title:
      'Founder and Executive Director, Center for Earth Ethics, Union Theological Seminary',
  },
  {
    name: 'Gary W. Yohe',
    title:
      'Huffington Foundation Professor of Economics and Environmental Studies, Wesleyan University',
  },
  {
    name: 'Dr. Farhana Sultana',
    title:
      'Associate Professor, Maxwell School of Citizenship and Public Affairs, Syracuse University',
  },
  {
    name: 'Dame Marilyn Strathern',
    title:
      'Emeritus Professor of Social Anthropology and Life Fellow, Girton College, University of Cambridge',
  },
  {
    name: 'Philip Poole',
    title:
      'Professor of Plant Microbiology, Somerville College, University of Oxford',
  },
  {
    name: 'Sir Jonathon Porritt CBE',
    title: 'Chancellor, Keele University',
  },
  {
    name: 'Richard Heede',
    title: 'Director, Climate Accountability Institute',
  },
  {
    name: 'Dr. Stuart Parkinson',
    title: 'Executive Director, Scientists for Global Responsibility',
  },
  {
    name: 'Gaurab Basu, MD, MPH',
    title:
      'Co-Director, CHA Center for Health Equity Education and Advocacy, Harvard Medical School',
  },
  {
    name: 'Dr. Daniel Field',
    title:
      'Lecturer in Vertebrate Paleontology, Christ’s College, University of Cambridge',
  },
  {
    name: 'Professor J. Doyne Farmer',
    title:
      'Director, Complexity Economics programme at the Institute for New Economic Thinking at the Oxford Martin School, University of Oxford',
  },
  {
    name: 'Professor Neil Metcalfe',
    title:
      'Professor of Behavioral Ecology, Institute of Biodiversity Animal Health & Comparative Medicine, University of Glasgow',
  },
  {
    name: 'John Cook',
    title:
      'Postdoctoral Research Fellow, Climate Change Communication Research Hub, Monash University',
  },
  {
    name: 'Huw Price',
    title:
      'Co-Founder, Cambridge Centre for the Study of Existential Risk, Trinity College, Cambridge',
  },
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
    <div className="page-wrapper !pb-0">
      <section className="bg-brand-primary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Open letter
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
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
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            The letter
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={100}>
          <div className="stack text-base text-slate-700">
            <p>Dear University Presidents and Vice-Chancellors,</p>
            <p>
              We are writing as academics and experts who are deeply concerned
              by universities&apos; collaboration with the fossil fuel industry.
              Universities across the United Kingdom and the United States
              currently accept substantial funding from fossil fuel companies
              for research aimed at solving the very problems this industry
              causes and continues to exacerbate. We believe this funding
              represents an inherent conflict of interest, is antithetical to
              universities&apos; core academic and social values, and supports
              industry greenwashing. Thus, it compromises universities&apos;
              basic institutional integrity, academic freedom, and their ability
              to address the climate emergency.
            </p>
            <p>
              For these reasons, we are calling on U.K. and U.S. universities to
              institute a ban on accepting fossil fuel industry funding for
              climate change, environmental, and energy policy research.
            </p>
            <p>
              Accepting fossil fuel industry funding for research meant to
              address the climate crisis undermines the academic integrity of
              climate-related research. To be clear, our concern is not with the
              integrity of individual academics. Rather, it is with the systemic
              issue posed by the context in which academics must work, one where
              fossil fuel industry funding can taint critical climate-related
              research. There is a clear parallel between accepting fossil fuel
              industry funding for climate change research and accepting tobacco
              industry funding for public health research. Already, numerous
              public health and research institutions reject tobacco money due
              to the industry&apos;s extensive record of spreading
              disinformation around the public health consequences of its
              products. Today, the fossil fuel industry has employed
              disinformation tactics from the same playbook, working to sow
              doubt about climate science, silence industry critics, and stall
              climate action. How, then, can universities consider these
              companies appropriate partners for climate-related research?
            </p>
            <p>
              Fossil fuel funding for climate-related research creates a
              conflict of interest that compromises researchers&apos; academic
              freedom. Academics must be free to determine their own research
              agendas, speak their minds, and declare their findings without
              fear of censorship, reprisal, or the withdrawal of funding for
              future projects. That freedom is compromised by reliance on
              funding from an industry whose core business model is
              diametrically opposed to science-led climate action. Numerous
              studies also demonstrate that industry-funded research can yield
              results that are favorable to industry interests, and that common
              safeguards like public disclosure of funding sources are often
              inadequate to mitigate this skew. We know that many of our
              colleagues who choose to accept fossil fuel funding strive to
              produce honest and independent research, often faced with few
              alternative funding pathways. However, the risk of skewed outcomes
              is endemic when research funding is dominated by companies with
              agendas that are in conflict with the goals of the funded
              research. Given the immense stakes of the climate crisis and the
              power of university research to shape public knowledge and policy
              around a rapid renewable energy transition, this is a risk we
              simply cannot take.
            </p>
            <p>
              Furthermore, accepting fossil fuel research funding contravenes
              universities&apos; stated commitments to tackling the climate
              crisis. Fossil fuel companies have concealed, trivialized, and
              neglected the science of climate change for decades. Today,
              despite warnings from the world&apos;s top energy organization
              that &quot;no investment in new fossil fuel supply projects&quot;
              can be made if the world is to limit global heating to 1.5°C,
              major fossil fuel companies continue to plan new extraction
              projects decades into the future and fail to align with the goals
              of the international Paris Agreement. Though they present
              themselves as leaders in sustainability, fossil fuel
              companies&apos; investments in oil and gas continue to dwarf their
              renewable energy investments, which represent just a few percent
              of their total capital expenditure. Even the investments that they
              present as directed toward climate solutions contribute to
              projects that are often far from sustainable. In short, fossil
              fuel companies&apos; claims to be leaders in a green transition
              should not be taken seriously. It is clear, therefore, that these
              companies cannot make for effective or good faith partners with
              universities seeking to pave the way for a sustainable future.
              Collaborating with these companies is inimical to academic
              institutions&apos; pledges for climate action.
            </p>
            <p>
              University research partnerships with fossil fuel companies play a
              key role in greenwashing these companies&apos; reputations. When
              universities allow fossil fuel companies to buy and advertise
              connections to university research on key climate and energy
              issues, they inadvertently provide these companies with
              much-needed scientific and cultural legitimacy. This is incredibly
              valuable to fossil fuel companies, as it allows them to report to
              policymakers, shareholders, and the media that they are working
              with globally respected institutions on transition solutions,
              greenwashing their reputation and cleansing their records of
              climate destruction.
            </p>
            <p>
              Finally, universities that maintain close ties to the fossil fuel
              industry incur a substantial reputational risk. We are proud that
              many universities have publicly committed to tackling climate
              change, notably by divesting their endowments from fossil fuels.
              Yet in allowing fossil fuel companies to fund climate-related
              research, universities violate their own policies and espoused
              principles, and undermine their core social and academic mission.
              Increasingly, fossil fuel industry sponsorship is eroding faith in
              scientific and cultural institutions&apos; commitments to climate
              action, leading a number of such institutions — including, most
              recently, the National Portrait Gallery in London — to sever ties
              with the industry. When universities have a pivotal role to play
              in global conversations about tackling the climate emergency, they
              cannot afford to have their voices compromised, which is precisely
              what will happen if they continue to make themselves dependent on
              the industry most responsible for climate breakdown.
            </p>
            <p>
              Universities and the research they produce are vital to delivering
              a rapid, just transition away from fossil fuels. However, such
              efforts are undermined by fossil fuel industry funding. Academics
              should not be forced to choose between researching climate
              solutions and inadvertently aiding corporate greenwashing; our
              universities must provide an alternative. Wealthy universities in
              particular have a duty to lead the way in doing so. To all
              universities, at this moment of extreme crisis, we urge you to
              heed our call and cut damaging research ties with the fossil fuel
              industry.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-slate-900 section-dark">
        <div className="page-container stack text-left text-white">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Notable signatories
              </h2>
              <p className="text-sm text-slate-200">
                Nobel laureates, prominenet scientists, activists, and public
                figures have endorsed our letter.
              </p>
            </div>
          </ScrollReveal>
          <StaggerReveal
            staggerDelay={40}
            variant="blossom"
            className="grid gap-4 text-slate-100 md:grid-cols-2"
            childClassName="flex"
          >
            {notableSignatories.map((signatory) => (
              <div
                key={signatory.name}
                className="flex-1 rounded-2xl bg-white/5 p-4 border border-white/10"
              >
                <p className="font-semibold text-brand-accent">
                  {signatory.name}
                </p>
                <p className="text-sm text-slate-300 mt-1">{signatory.title}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="page-container stack">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Why sign on?
            </h2>
            <p className="text-base text-slate-600">
              The more voices we have, the harder it is for universities to
              ignore the call for climate justice.
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
              className="stack stack-relaxed rounded-3xl border border-brand-secondary/20 bg-white p-6 text-left"
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
        <div className="page-container text-left">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense text-white mb-8">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Add your name
              </h2>
              <p className="text-sm text-slate-200">
                Join thousands of academics, students, and supporters demanding
                fossil-free research.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="blossom">
            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <OpenLetterForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
