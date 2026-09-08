// Boilerplate that closes every job posting: who CCN is, the fiscal
// sponsorship line, and the equal-opportunity statement. Rendered by
// /hiring/[slug] after the posting body so editors never paste it in.
export function OrganizationOverview() {
  return (
    <section
      aria-labelledby="organization-overview"
      className="stack stack-dense border-t border-slate-200 pt-8 text-base leading-relaxed text-slate-700"
    >
      <h2
        id="organization-overview"
        className="text-2xl font-semibold text-slate-900"
      >
        Organizational overview
      </h2>
      <p>
        Campus Climate Network (CCN) is an organization dedicated to building up
        the lifelong movement leaders of tomorrow by equipping students with the
        trainings, coaching, and relationships they need on campus today.
      </p>
      <p>
        Campus Climate Network is fiscally sponsored by The Hack Foundation
        (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
      </p>
      <p>
        We are proud to be an equal opportunity employer, and an anti-racist
        organization that prohibits discrimination in its governance, programs
        and activities. Women, people of color, LGBTQ+ people, and members of
        other historically disenfranchised populations are strongly encouraged
        to apply.
      </p>
    </section>
  )
}
