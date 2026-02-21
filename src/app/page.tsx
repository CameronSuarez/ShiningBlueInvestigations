import HeroSlideshow from "@/components/HeroSlideshow";
import NavBar from "@/components/NavBar";

export default function Home() {
  const principles = [
    {
      title: "Confidential Handling",
      text: "Confidential and discreet case handling throughout each phase of your matter.",
    },
    {
      title: "Structured Planning",
      text: "Structured investigative plans based on your situation and information needs.",
    },
    {
      title: "Clear Reporting",
      text: "Clear, professional reporting focused on usable information and documentation.",
    },
    {
      title: "Responsive Communication",
      text: "Responsive communication from consultation through final report delivery.",
    },
  ];

  return (
    <main id="top" className="bg-white text-zinc-900">
      {/* Hero */}
      <section className="flex min-h-[70vh] flex-col md:min-h-[85vh] md:flex-row">
        <HeroSlideshow />
        <div className="flex w-full items-center bg-zinc-950 text-white md:w-1/2">
          <div className="w-full max-w-xl px-8 py-12 lg:px-16 lg:py-14">
            <h1 className="text-4xl font-extrabold tracking-tight leading-[1.05] sm:text-5xl lg:text-5xl">
              SHINING BLUE INVESTIGATIONS
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-zinc-400">
              LLC
            </p>
            <p className="mt-4 text-2xl font-semibold lg:text-3xl">
              Private Investigation Services
            </p>
            <p className="mt-6 max-w-prose text-base text-zinc-200 lg:text-lg">
              Confidential, professional investigative services in South West Michigan.
            </p>

            <div className="mt-7 flex flex-row flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex w-fit rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
              >
                Request Consultation
              </a>
              <a
                href="#services"
                className="inline-flex w-fit rounded-md border border-white px-6 py-3 text-sm font-medium text-white hover:bg-zinc-900"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Professional Services Overview
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-700">
            Shining Blue Investigations provides confidential, professional investigative
            support for private, legal, and business matters throughout South West
            Michigan. Our services are structured to deliver clear, actionable information
            while maintaining discretion and professionalism.
          </p>
          <div className="mt-8 border-t border-zinc-300" />

          <div className="mt-10">
            <div className="space-y-6">
              <article
                id="surveillance"
                className="rounded-2xl border border-zinc-200 border-l-4 border-l-zinc-900/20 bg-white p-8 shadow-sm"
              >
                <h4 className="text-xl font-semibold text-zinc-900">Surveillance</h4>
                <p className="mt-3 text-zinc-700">
                  Directed observation for personal, legal, and business concerns.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
                  <li>Documented activity monitoring</li>
                  <li>Photo and video evidence collection</li>
                  <li>Detailed reporting for review and case support</li>
                </ul>
              </article>

              <article
                id="background"
                className="rounded-2xl border border-zinc-200 border-l-4 border-l-zinc-900/20 bg-white p-8 shadow-sm"
              >
                <h4 className="text-xl font-semibold text-zinc-900">
                  Background Investigations (Tiered Services)
                </h4>
                <p className="mt-3 text-zinc-700">
                  Structured background services scaled to your level of investigative
                  detail.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-zinc-200 p-4">
                    <h5 className="font-semibold text-zinc-900">Tier I</h5>
                    <p className="mt-2 text-sm font-medium text-zinc-800">Includes:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                      <li>Identity and basic records check</li>
                      <li>Address history review</li>
                      <li>Foundational report summary</li>
                    </ul>
                    <p className="mt-3 border-t border-zinc-200 pt-3 text-sm text-zinc-700">
                      <span className="font-medium text-zinc-800">Best For:</span> Initial
                      screening and basic due diligence.
                    </p>
                  </div>

                  <div className="rounded-lg border border-zinc-200 p-4">
                    <h5 className="font-semibold text-zinc-900">Tier II</h5>
                    <p className="mt-2 text-sm font-medium text-zinc-800">Includes:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                      <li>All Tier I elements</li>
                      <li>Broader civil and public-record review</li>
                      <li>Additional verification points</li>
                    </ul>
                    <p className="mt-3 border-t border-zinc-200 pt-3 text-sm text-zinc-700">
                      <span className="font-medium text-zinc-800">Best For:</span> Employment,
                      relationship, and business vetting requiring more detail.
                    </p>
                  </div>

                  <div className="rounded-lg border border-zinc-200 p-4">
                    <h5 className="font-semibold text-zinc-900">Tier III</h5>
                    <p className="mt-2 text-sm font-medium text-zinc-800">Includes:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                      <li>All Tier II elements</li>
                      <li>Extended records and association review</li>
                      <li>Consolidated findings report</li>
                    </ul>
                    <p className="mt-3 border-t border-zinc-200 pt-3 text-sm text-zinc-700">
                      <span className="font-medium text-zinc-800">Best For:</span> Higher-stakes
                      decisions and advanced due diligence needs.
                    </p>
                  </div>
                </div>
              </article>

              <article
                id="missing-persons"
                className="rounded-2xl border border-zinc-200 border-l-4 border-l-zinc-900/20 bg-white p-8 shadow-sm"
              >
                <h4 className="text-xl font-semibold text-zinc-900">Missing Persons</h4>
                <p className="mt-3 text-zinc-700">
                  Targeted investigative efforts to locate individuals.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
                  <li>Lead development and verification</li>
                  <li>Database and record-based location work</li>
                  <li>Status updates and documented findings</li>
                </ul>
              </article>

              <article
                id="workers-comp"
                className="rounded-2xl border border-zinc-200 border-l-4 border-l-zinc-900/20 bg-white p-8 shadow-sm"
              >
                <h4 className="text-xl font-semibold text-zinc-900">
                  Workers&apos; Compensation
                </h4>
                <p className="mt-3 text-zinc-700">
                  Investigative support for workers&apos; compensation-related matters.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
                  <li>Claim-related activity checks</li>
                  <li>Surveillance and documentation support</li>
                  <li>Clear reporting for case evaluation</li>
                </ul>
              </article>

              <article
                id="skip-tracing"
                className="rounded-2xl border border-zinc-200 border-l-4 border-l-zinc-900/20 bg-white p-8 shadow-sm"
              >
                <h4 className="text-xl font-semibold text-zinc-900">Skip Tracing</h4>
                <p className="mt-3 text-zinc-700">
                  Location-focused investigations for difficult-to-find individuals.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
                  <li>Address and contact lead development</li>
                  <li>Cross-reference verification workflow</li>
                  <li>Updated location findings summary</li>
                </ul>
              </article>
            </div>
          </div>

          <h3 className="mt-14 text-2xl font-semibold text-zinc-900">
            Why Choose Shining Blue Investigations
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <h4 className="text-base font-semibold text-zinc-900">{item.title}</h4>
                <p className="mt-2 text-sm text-zinc-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-24">
        <NavBar />
      </div>
    </main>
  );
}
