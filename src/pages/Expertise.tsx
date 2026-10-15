import type { SharedPageProps } from "../types"
import { expertiseList, toolsAndSystems } from "../constants"
import SectionTitle from "../components/ui/SectionTitle"
import Footer from "../components/layout/Footer"
import { ArrowDownRight } from "../components/Icons"

export default function Expertise({ setPage }: SharedPageProps) {
  return (
    <>
      <main className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-20 lg:py-20">
        <SectionTitle
          eyebrow="Expertise"
          title="From planning to completion."
          detail="Capabilities framed around the day-to-day needs of construction delivery, site operations and project coordination."
        />

        <div className="mt-14 border-t border-border">
          {expertiseList.map(([num, title, text]) => (
            <article
              key={num}
              className="grid gap-4 border-b border-border py-7 md:grid-cols-12 md:py-9"
            >
              <p className="text-[10px] font-bold tracking-[0.16em] text-muted md:col-span-2">
                {num}
              </p>
              <h2 className="font-serif text-2xl md:col-span-4 md:text-3xl">
                {title}
              </h2>
              <p className="max-w-md text-sm leading-7 text-muted md:col-span-5 md:col-start-8">
                {text}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-16 bg-foreground px-6 py-10 text-background md:px-10 md:py-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">
            A practical workflow
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 font-serif text-2xl md:gap-x-7 md:text-4xl">
            {["Plan", "Coordinate", "Execute", "Monitor", "Handover"].map(
              (x, i) => (
                <div className="flex items-center gap-4" key={x}>
                  <span>{x}</span>
                  {i < 4 && (
                    <ArrowDownRight className="hidden rotate-[-90deg] text-stone-500 md:block" />
                  )}
                </div>
              ),
            )}
          </div>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted md:col-span-3">
            Tools & systems
          </p>
          <div className="md:col-span-9">
            <div className="flex flex-wrap gap-2">
              {toolsAndSystems.map((x) => (
                <span
                  key={x}
                  className="border border-border px-3 py-2 text-[11px] text-muted"
                >
                  {x}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">
              Tools are presented as relevant systems and workflows—not
              arbitrary proficiency ratings.
            </p>
          </div>
        </section>
      </main>
      <Footer setPage={setPage} />
    </>
  )
}
