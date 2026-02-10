import type { Metadata } from 'next'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
// import { OpenLetterForm } from '@/components/open-letter-form'

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
    title: 'Expose conflicts of interest',
    body: 'Uncover hidden contracts and gifts so polluters can no longer hijack academic credibility or steer research.',
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
        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Protect academic integrity',
    body: 'Build ironclad firewall policies so departments cannot be used as PR arms for the very corporations fueling the crisis.',
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
        <path d="M12 3 20 6v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6Z" />
        <path d="M9 11.5 11 14l4-4.5" />
      </svg>
    ),
  },
  {
    title: 'Win enforceable policies',
    body: 'Organize trustees, faculty, and students to pass binding fossil-free funding rules that outlast any single administrator.',
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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
]

export default function OpenLetterPage() {
  return (
    <div className="page-wrapper gap-0!">
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
          <a
            href="https://actionnetwork.org/widgets/v5/form/fossil-free-research-open-letter"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary w-fit"
          >
            Sign the letter
          </a>
        </div>
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

      <section className="section-hero">
        <div className="page-container stack">
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
            className="grid gap-6 text-slate-600 sm:grid-cols-2 xl:grid-cols-3"
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
        </div>
      </section>

      {/* <section className="bg-slate-900 section-dark">
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
      </section> */}

      <section className="bg-slate-900 section-dark">
        <div className="page-container stack stack-tight text-left text-white">
          <ScrollReveal variant="fade-up">
            <h2 className="text-2xl font-semibold sm:text-3xl">The letter</h2>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={100}>
            <div className="stack text-base text-slate-200">
              <p>Dear University Presidents and Vice-Chancellors,</p>
              <p>
                We are writing as academics and experts who are deeply concerned
                by universities&apos; collaboration with the fossil fuel
                industry. Universities across the United Kingdom and the United
                States currently accept substantial funding from fossil fuel
                companies for research aimed at solving the very problems this
                industry causes and continues to exacerbate. We believe this
                funding represents an inherent conflict of interest, is
                antithetical to universities&apos; core academic and social
                values, and supports industry greenwashing. Thus, it compromises
                universities&apos; basic institutional integrity, academic
                freedom, and their ability to address the climate emergency.
              </p>
              <p>
                For these reasons, we are calling on U.K. and U.S. universities
                to institute a ban on accepting fossil fuel industry funding for
                climate change, environmental, and energy policy research.
              </p>
              <p>
                Accepting fossil fuel industry funding for research meant to
                address the climate crisis undermines the academic integrity of
                climate-related research. To be clear, our concern is not with
                the integrity of individual academics. Rather, it is with the
                systemic issue posed by the context in which academics must
                work, one where fossil fuel industry funding can taint critical
                climate-related research. There is a clear parallel between
                accepting fossil fuel industry funding for climate change
                research and accepting tobacco industry funding for public
                health research. Already, numerous public health and research
                institutions reject tobacco money due to the industry&apos;s
                extensive record of spreading disinformation around the public
                health consequences of its products. Today, the fossil fuel
                industry has employed disinformation tactics from the same
                playbook, working to sow doubt about climate science, silence
                industry critics, and stall climate action. How, then, can
                universities consider these companies appropriate partners for
                climate-related research?
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
                results that are favorable to industry interests, and that
                common safeguards like public disclosure of funding sources are
                often inadequate to mitigate this skew. We know that many of our
                colleagues who choose to accept fossil fuel funding strive to
                produce honest and independent research, often faced with few
                alternative funding pathways. However, the risk of skewed
                outcomes is endemic when research funding is dominated by
                companies with agendas that are in conflict with the goals of
                the funded research. Given the immense stakes of the climate
                crisis and the power of university research to shape public
                knowledge and policy around a rapid renewable energy transition,
                this is a risk we simply cannot take.
              </p>
              <p>
                Furthermore, accepting fossil fuel research funding contravenes
                universities&apos; stated commitments to tackling the climate
                crisis. Fossil fuel companies have concealed, trivialized, and
                neglected the science of climate change for decades. Today,
                despite warnings from the world&apos;s top energy organization
                that &quot;no investment in new fossil fuel supply
                projects&quot; can be made if the world is to limit global
                heating to 1.5°C, major fossil fuel companies continue to plan
                new extraction projects decades into the future and fail to
                align with the goals of the international Paris Agreement.
                Though they present themselves as leaders in sustainability,
                fossil fuel companies&apos; investments in oil and gas continue
                to dwarf their renewable energy investments, which represent
                just a few percent of their total capital expenditure. Even the
                investments that they present as directed toward climate
                solutions contribute to projects that are often far from
                sustainable. In short, fossil fuel companies&apos; claims to be
                leaders in a green transition should not be taken seriously. It
                is clear, therefore, that these companies cannot make for
                effective or good faith partners with universities seeking to
                pave the way for a sustainable future. Collaborating with these
                companies is inimical to academic institutions&apos; pledges for
                climate action.
              </p>
              <p>
                University research partnerships with fossil fuel companies play
                a key role in greenwashing these companies&apos; reputations.
                When universities allow fossil fuel companies to buy and
                advertise connections to university research on key climate and
                energy issues, they inadvertently provide these companies with
                much-needed scientific and cultural legitimacy. This is
                incredibly valuable to fossil fuel companies, as it allows them
                to report to policymakers, shareholders, and the media that they
                are working with globally respected institutions on transition
                solutions, greenwashing their reputation and cleansing their
                records of climate destruction.
              </p>
              <p>
                Finally, universities that maintain close ties to the fossil
                fuel industry incur a substantial reputational risk. We are
                proud that many universities have publicly committed to tackling
                climate change, notably by divesting their endowments from
                fossil fuels. Yet in allowing fossil fuel companies to fund
                climate-related research, universities violate their own
                policies and espoused principles, and undermine their core
                social and academic mission. Increasingly, fossil fuel industry
                sponsorship is eroding faith in scientific and cultural
                institutions&apos; commitments to climate action, leading a
                number of such institutions — including, most recently, the
                National Portrait Gallery in London — to sever ties with the
                industry. When universities have a pivotal role to play in
                global conversations about tackling the climate emergency, they
                cannot afford to have their voices compromised, which is
                precisely what will happen if they continue to make themselves
                dependent on the industry most responsible for climate
                breakdown.
              </p>
              <p>
                Universities and the research they produce are vital to
                delivering a rapid, just transition away from fossil fuels.
                However, such efforts are undermined by fossil fuel industry
                funding. Academics should not be forced to choose between
                researching climate solutions and inadvertently aiding corporate
                greenwashing; our universities must provide an alternative.
                Wealthy universities in particular have a duty to lead the way
                in doing so. To all universities, at this moment of extreme
                crisis, we urge you to heed our call and cut damaging research
                ties with the fossil fuel industry.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-8 flex justify-center">
            <a
              href="https://actionnetwork.org/widgets/v5/form/fossil-free-research-open-letter"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-full bg-brand-accent border-4 border-brand-accent px-6 py-4 text-base sm:px-16 sm:py-6 sm:text-2xl font-bold text-slate-900 shadow-2xl transition-all duration-300 ease-out hover:bg-slate-900 hover:text-brand-accent hover:scale-105 hover:shadow-slate-900/50 sm:whitespace-nowrap text-center max-w-[calc(100vw-2rem)]"
            >
              <span className="invisible">
                Down with the fossil fuel industry!
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 px-4">
                Sign the letter
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-4">
                Down with the fossil fuel industry!
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
