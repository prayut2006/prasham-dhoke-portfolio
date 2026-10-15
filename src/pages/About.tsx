import type { SharedPageProps } from "../types"
import { images, timelineData, workingPrinciples } from "../constants"
import SectionTitle from "../components/ui/SectionTitle"
import Footer from "../components/layout/Footer"

export default function About({ setPage }: SharedPageProps) {
  return (
    <>
      <main className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-20 lg:py-20">
        <SectionTitle
          eyebrow="About"
          title="An architectural mindset. A practical approach to delivery."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="overflow-hidden aspect-[.82] bg-stone-200">
              <img
                src={images.portrait}
                alt="Prasham Dhoke"
                className="h-full w-full object-cover object-top grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-serif text-2xl leading-[1.18] md:text-4xl">
              I bring an architectural understanding of space, detail and
              technical information to the practical work of coordinating
              people, programmes and operational delivery.
            </p>
            <div className="mt-9 space-y-5 text-sm leading-7 text-muted">
              <p>
                Currently working as an Assistant Maintenance Manager at
                Ladbrokes / Entain plc, I support maintenance operations,
                contractor coordination and refurbishment activity in a live
                commercial environment.
              </p>
              <p>
                My MSc in Construction & Project Management at Queen’s
                University Belfast builds on a Bachelor of Architecture,
                creating a grounded transition from design knowledge to
                construction coordination, operational delivery and project
                management.
              </p>
              <p>
                Earlier architectural experience at Studio Adroit Architects
                informs my ability to read drawings, understand detailing, and
                communicate technical intent across architectural, interior, and
                structural coordination workflows.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <SectionTitle
            eyebrow="Professional timeline"
            title="Experience with a clear line of sight to delivery."
          />
          <div className="mt-10">
            {timelineData.map(([date, role, org]) => (
              <div
                key={role}
                className="grid gap-3 border-t border-border py-5 md:grid-cols-12"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted md:col-span-3">
                  {date}
                </p>
                <h3 className="font-serif text-2xl md:col-span-5">{role}</h3>
                <p className="text-sm text-muted md:col-span-4">{org}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-y border-border py-10 md:grid-cols-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted md:col-span-3">
            Verified contribution
          </p>
          <p className="font-serif text-3xl leading-tight md:col-span-7">
            “Contributed to a 30% reduction in outstanding reactive maintenance
            jobs.”
          </p>
          <p className="text-xs leading-5 text-muted md:col-span-2">
            Maintenance operations metric. It does not represent construction
            project delivery.
          </p>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted md:col-span-3">
            Working principles
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:col-span-9 md:grid-cols-3">
            {workingPrinciples.map((x) => (
              <p className="border-t border-border pt-3 text-sm" key={x}>
                {x}
              </p>
            ))}
          </div>
        </section>
      </main>
      <Footer setPage={setPage} />
    </>
  )
}
