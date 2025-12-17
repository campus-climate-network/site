'use client'

import StackingCards, {
  StackingCardItem,
} from '@/components/fancy/blocks/stacking-cards'

const challenges = [
  {
    title: 'The climate crisis is here',
    body: 'Climate change is an existential threat to humanity and a driver of injustice at every level. Its impacts are already being felt around the world. Tackling climate change requires an immediate and just energy transition away from fossil fuels that centers frontline communities.',
  },
  {
    title: 'Fossil fuel obstruction',
    body: "The fossil fuel industry's business model is unjust at its core. The industry systematically sows doubt to delay a just energy transition. Its continued reliance on corporate violence and extraction systematically harms marginalized communities.",
  },
  {
    title: 'Corporate-captured universities',
    body: 'A narrow set of decision makers tied to corporate donors dictate campus priorities. Private funding for research gives fossil fuel companies outsized influence. We fight for transparent, democratic governance and well-funded public research.',
  },
]

const pillars = [
  {
    title: 'Building a powerful coalition',
    body: 'We convene student-led climate justice groups across the country, providing training, resources, and community so every organizer can run winning campaigns and stay in the movement for the long haul.',
  },
  {
    title: 'Decentralized, grassroots change',
    body: 'Campus organizers know their institutions best. We support them with strategy, tools, and national alignment while honoring local leadership and decision making.',
  },
  {
    title: 'Connected to the broader movement',
    body: 'We partner with allied organizations, respond to moments of mass mobilization, and ensure campus campaigns reinforce global demands for a just transition.',
  },
]

const whatWeDo = [
  {
    title: 'Unify the campus climate movement',
    body: 'We share skills, work together, mentor each other, and coordinate our efforts to create a stronger and more united campus climate movement.',
  },
  {
    title: 'Run effective campaigns',
    body: 'We take nonviolent direct action to force decision makers to confront the violence of the fossil fuel industry and pick a side. Our tactics are accessible, highly visible, and inspiring.',
  },
  {
    title: 'Frame the conversation',
    body: "We use our collective voice – on a local, national, and global scale – to set the conversation about the fossil fuel industry's influence on higher education.",
  },
  {
    title: 'Center those most impacted',
    body: 'We highlight the violence enacted on marginalized groups by the corporations that our universities wrongly continue to see as reputable partners. We center frontline struggles in our campaigns and stand in solidarity with frontline organizations.',
  },
]

interface CardData {
  title: string
  body: string
}

interface StackingSectionProps {
  title: string
  cards: CardData[]
  theme: 'dark' | 'green' | 'cream'
}

const themeStyles = {
  dark: {
    section: 'bg-slate-900',
    header: 'text-white',
    card: 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700',
    title: 'text-white',
    body: 'text-slate-300',
    number: 'text-slate-700',
    accent: 'text-amber-400',
  },
  green: {
    section: 'bg-emerald-950',
    header: 'text-white',
    card: 'bg-gradient-to-br from-emerald-900 to-emerald-950 border-emerald-800',
    title: 'text-white',
    body: 'text-emerald-100',
    number: 'text-emerald-900',
    accent: 'text-emerald-400',
  },
  cream: {
    section: 'bg-amber-50',
    header: 'text-slate-900',
    card: 'bg-white border-amber-200 shadow-xl',
    title: 'text-slate-900',
    body: 'text-slate-600',
    number: 'text-amber-100',
    accent: 'text-emerald-600',
  },
}

function StackingSection({
  title,
  cards,
  theme,
  isFirst = false,
}: StackingSectionProps & { isFirst?: boolean }) {
  const style = themeStyles[theme]
  // +1 for the title card
  const totalCards = cards.length + 1
  // Each card needs ~120vh of scroll distance for comfortable reading pace
  const sectionHeight = totalCards * 120

  return (
    <section className={`${style.section} ${!isFirst ? '-mt-[15vh]' : ''}`}>
      <StackingCards totalCards={totalCards} style={{ height: `${sectionHeight}vh` }}>
        {/* Title card */}
        <StackingCardItem index={0} className="h-screen">
          <div className="page-container h-full flex items-center px-6 sm:px-8">
            <h2
              className={`text-3xl sm:text-5xl lg:text-7xl font-bold ${style.header} max-w-3xl leading-tight`}
            >
              {title}
            </h2>
          </div>
        </StackingCardItem>

        {/* Content cards */}
        {cards.map((card, index) => (
          <StackingCardItem
            key={card.title}
            index={index + 1}
            className="h-screen"
          >
            <div className="page-container h-full flex items-center px-4 sm:px-8">
              <div
                className={`relative w-full max-w-4xl rounded-2xl sm:rounded-3xl border ${style.card} p-6 sm:p-10 lg:p-16 overflow-hidden`}
              >
                {/* Background number - hidden on very small screens */}
                <span
                  className={`absolute -top-1 right-2 sm:top-2 sm:right-8 text-[4rem] sm:text-[8rem] lg:text-[10rem] font-black ${style.number} select-none pointer-events-none leading-none`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10 space-y-3 sm:space-y-5">
                  <h3
                    className={`text-xl sm:text-2xl lg:text-4xl font-bold ${style.title} leading-tight`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base lg:text-xl ${style.body} leading-relaxed`}
                  >
                    {card.body}
                  </p>
                </div>
              </div>
            </div>
          </StackingCardItem>
        ))}
      </StackingCards>
    </section>
  )
}

export function ApproachStackingSection() {
  return (
    <>
      <StackingSection
        title="What we're up against"
        cards={challenges}
        theme="dark"
        isFirst
      />
      <StackingSection title="How we unite" cards={pillars} theme="green" />
      <StackingSection title="How we win" cards={whatWeDo} theme="cream" />
    </>
  )
}
