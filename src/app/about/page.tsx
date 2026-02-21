export default function AboutPage() {
  return (
    <main className="bg-zinc-100 text-zinc-900">
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Shining Blue Investigations
          </h1>
          <p className="mt-5 text-lg text-zinc-700 sm:text-xl">
            Experience-driven investigations. Discreet. Professional. Documented.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-base leading-8 text-zinc-700">
            <p>
              I&apos;ve worked in law enforcement since 1995, building a career
              centered on investigative work, accountability, and service. I began in
              patrol, where I developed the fundamentals that matter most in real
              investigations: observation, interviewing, documentation, and following
              facts to a defensible conclusion.
            </p>
            <p>
              As my experience grew, I moved into a range of investigative disciplines
              and was later promoted to a supervisory role within a multi-jurisdictional
              narcotics task force. That work sharpened my ability to coordinate complex
              cases, manage sensitive information, and collaborate across agencies while
              maintaining strict standards and procedures.
            </p>
            <p>
              Today, I serve as a independent detective focused on major crimes, such as fraud and identity theft, but not limited to.
              In this role, I utilize the full range of investigative skills I have developed over nearly three decades, applying them to a variety of cases. I
              combine tactical decision-making with detailed analysis-evaluating
              information, identifying inconsistencies, and producing clear, court-ready
              documentation.
            </p>
            <p>
              Shining Blue Investigations was created to bring that same disciplined
              approach to private clients, attorneys, and organizations. Every matter is
              handled with discretion, professionalism, and a commitment to lawful,
              ethical investigative practices. My goal is simple: provide reliable
              information you can act on, and documentation you can trust.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Core Values and Approach
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-zinc-900">Discretion</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                Sensitive matters are handled with confidentiality and careful judgment
                from start to finish.
              </p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-zinc-900">
                Professional Standards
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                Every case follows a disciplined process built on accountability,
                consistency, and lawful practice.
              </p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-zinc-900">
                Court-Ready Documentation
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                Findings are organized clearly, with documentation designed to support
                legal and decision-making needs.
              </p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-zinc-900">
                Intelligence-Driven Approach
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                Investigative steps are guided by analysis, verified facts, and focused
                case strategy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl bg-zinc-200 px-6 py-12 text-center sm:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Discuss Your Matter Confidentially
            </h2>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-md bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
