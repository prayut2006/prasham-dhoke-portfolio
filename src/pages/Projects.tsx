import { useState, useEffect } from "react"
import type { SharedPageProps } from "../types"
import {
  portfolioProjects,
  type PortfolioProject,
  type ProjectDrawing,
} from "../data/projects"
import SectionTitle from "../components/ui/SectionTitle"
import Footer from "../components/layout/Footer"
import { ArrowDownRight, ArrowUpRight, X } from "../components/Icons"

export default function Projects({
  setPage,
  selectedProjectId: initialSelectedId,
  onSelectProject,
}: SharedPageProps) {
  const [selectedId, setSelectedId] = useState<string | null>(
    initialSelectedId ?? null,
  )
  const [filter, setFilter] = useState<"all" | "operations" | "architecture">(
    "all",
  )
  const [activeDrawing, setActiveDrawing] = useState<ProjectDrawing | null>(
    null,
  )

  // Sync if prop changes
  useEffect(() => {
    if (initialSelectedId !== undefined) {
      setSelectedId(initialSelectedId)
    }
  }, [initialSelectedId])

  const selectProject = (id: string | null) => {
    setSelectedId(id)
    if (onSelectProject) {
      onSelectProject(id)
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const filteredProjects = portfolioProjects.filter((p) => {
    if (filter === "all") return true
    return p.category === filter
  })

  const currentProject = selectedId
    ? portfolioProjects.find((p) => p.id === selectedId) || null
    : null

  const currentIndex = currentProject
    ? portfolioProjects.findIndex((p) => p.id === currentProject.id)
    : -1
  const prevProject =
    currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null
  const nextProject =
    currentIndex >= 0 && currentIndex < portfolioProjects.length - 1
      ? portfolioProjects[currentIndex + 1]
      : null

  return (
    <>
      <main className="min-h-screen">
        {/* Lightbox Modal for Full-Resolution Drawing Inspection */}
        {activeDrawing && (
          <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={activeDrawing.sheetTitle}
          >
            <div className="flex w-full max-w-6xl items-center justify-between pb-3 text-white">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-400">
                  Page {activeDrawing.pageNumber} · Source Drawing Inspection
                </p>
                <h4 className="font-serif text-lg sm:text-xl">
                  {activeDrawing.sheetTitle}
                </h4>
              </div>
              <button
                onClick={() => setActiveDrawing(null)}
                className="rounded border border-stone-600 p-2 text-stone-300 hover:border-white hover:text-white"
                aria-label="Close drawing preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative flex max-h-[80vh] w-full max-w-6xl items-center justify-center overflow-auto rounded bg-stone-950 p-2">
              <img
                src={import.meta.env.BASE_URL + activeDrawing.image.substring(1)}
                alt={activeDrawing.sheetTitle}
                className="max-h-[76vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="mt-3 w-full max-w-6xl text-xs text-stone-400 sm:text-sm">
              <p>{activeDrawing.caption}</p>
              <p className="mt-1 text-[11px] text-stone-500">
                Attribution: {activeDrawing.drafterCredit}
              </p>
            </div>
          </div>
        )}

        {/* ─── DETAIL VIEW: Active when a project is selected ─── */}
        {currentProject ? (
          <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-20 lg:py-16">
            {/* Top Navigation */}
            <div className="flex items-center justify-between border-b border-border pb-6">
              <button
                onClick={() => selectProject(null)}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted hover:text-foreground"
              >
                ← Back to all projects
              </button>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                {prevProject && (
                  <button
                    onClick={() => selectProject(prevProject.id)}
                    className="hover:text-foreground"
                  >
                    ← {prevProject.number}
                  </button>
                )}
                <span>{currentProject.number} / 07</span>
                {nextProject && (
                  <button
                    onClick={() => selectProject(nextProject.id)}
                    className="hover:text-foreground"
                  >
                    {nextProject.number} →
                  </button>
                )}
              </div>
            </div>

            {/* Project Header */}
            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-muted">
                  Project {currentProject.number} —{" "}
                  {currentProject.category === "operations"
                    ? "Refurbishment & Operations"
                    : "Architectural Documentation"}
                </p>
                <h1 className="mt-3 font-serif text-3xl leading-[1.04] tracking-[-0.025em] sm:text-5xl md:text-6xl">
                  {currentProject.title}
                </h1>
                <p className="mt-4 text-base text-muted">
                  {currentProject.subtitle}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Location:{" "}
                  <span className="text-foreground">
                    {currentProject.location}
                  </span>
                </p>
              </div>

              {/* Factual Description */}
              <div className="space-y-4 text-sm leading-7 text-muted lg:col-span-5 lg:col-start-8">
                {currentProject.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Metadata Table */}
            <div className="mt-12 grid gap-5 border-t border-border pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {currentProject.meta.map(([label, val]) => (
                <div key={label}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                    {label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-foreground">
                    {val}
                  </p>
                </div>
              ))}
            </div>

            {/* ─── CASE A: Ladbrokes Legacy Project (Preserved Layout & Content) ─── */}
            {currentProject.isLegacyRefurbishment && (
              <div className="mt-12">
                <div className="overflow-hidden bg-stone-200">
                  <img
                    src={currentProject.thumbnail}
                    alt="Shop interior refurbishment context"
                    className="aspect-[1.8] w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                  />
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-12">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted md:col-span-3">
                    Scope & operational focus
                  </p>
                  <div className="grid gap-6 md:col-span-9 md:grid-cols-2">
                    <div className="border-t border-border pt-3">
                      <p className="text-[10px] font-bold tracking-[0.14em] text-muted">
                        01
                      </p>
                      <h3 className="mt-2 font-serif text-xl">
                        Refurbishment coordination
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Supporting maintenance programmes, contractor liaisons,
                        and material deliveries within live operating commercial
                        venues.
                      </p>
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-[10px] font-bold tracking-[0.14em] text-muted">
                        02
                      </p>
                      <h3 className="mt-2 font-serif text-xl">
                        Operational follow-up
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Tracking snagging items, compliance certificates, and
                        reactive maintenance logs across operating properties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── CASE B: Architectural Project Groups (Verified Drawings & Renders) ─── */}
            {currentProject.drawings && currentProject.drawings.length > 0 && (
              <div className="mt-16">
                <div className="border-t border-border pt-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-muted">
                    Verified Sheets & Evidence
                  </p>
                  <h2 className="mt-2 font-serif text-2xl md:text-3xl">
                    Source architectural drawings (
                    {currentProject.drawings.length}{" "}
                    {currentProject.drawings.length === 1 ? "sheet" : "sheets"})
                  </h2>
                  <p className="mt-2 text-xs text-muted">
                    Extracted from 9th Sem Architectural Work Portfolio (Studio
                    Adroit Architects). Click any sheet to view in full
                    resolution.
                  </p>
                </div>

                <div className="mt-10 space-y-16">
                  {currentProject.drawings.map((drawing) => (
                    <article
                      key={drawing.id}
                      className="border-b border-border pb-12 last:border-b-0"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="border border-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                            Page {drawing.pageNumber}
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl">
                            {drawing.sheetTitle}
                          </h3>
                        </div>
                        {drawing.date && (
                          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                            Date: {drawing.date}
                          </span>
                        )}
                      </div>

                      {/* Interactive drawing image */}
                      <button
                        onClick={() => setActiveDrawing(drawing)}
                        className="group relative mt-6 block w-full overflow-hidden border border-border bg-stone-100 text-left transition hover:border-foreground"
                      >
                        <img
                          src={import.meta.env.BASE_URL + drawing.image.substring(1)}
                          alt={drawing.sheetTitle}
                          className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded bg-foreground/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-background backdrop-blur-sm opacity-90 transition group-hover:opacity-100">
                          Inspect Sheet <ArrowUpRight size={13} />
                        </div>
                      </button>

                      {/* Source Sheet Caption and Attribution */}
                      <div className="mt-5 grid gap-4 border-t border-border pt-4 sm:grid-cols-12 sm:items-baseline">
                        <p className="text-sm leading-6 text-foreground sm:col-span-8">
                          {drawing.caption}
                        </p>
                        <p className="text-xs text-muted sm:col-span-4 sm:text-right">
                          <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                            Drafter Attribution
                          </span>
                          {drawing.drafterCredit}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Navigation */}
            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
              <button
                onClick={() => selectProject(null)}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted hover:text-foreground"
              >
                ← Back to all projects
              </button>

              <div className="flex items-center gap-6">
                {prevProject && (
                  <button
                    onClick={() => selectProject(prevProject.id)}
                    className="text-[10px] font-bold uppercase tracking-[0.16em] hover:text-muted"
                  >
                    Previous: {prevProject.number}
                  </button>
                )}
                {nextProject && (
                  <button
                    onClick={() => selectProject(nextProject.id)}
                    className="text-[10px] font-bold uppercase tracking-[0.16em] hover:text-muted"
                  >
                    Next: {nextProject.number} →
                  </button>
                )}
              </div>
            </div>
          </section>
        ) : (
          /* ─── OVERVIEW LIST VIEW: Displays all 7 verified projects ─── */
          <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-20 lg:py-20">
            <SectionTitle
              eyebrow="Selected Projects"
              title="Refurbishment delivery & architectural drawings."
              detail="Practical operations experience coordinating retail refurbishment alongside verified architectural working drawings and 3D visualisations from Studio Adroit Architects."
            />

            {/* Category Filter Pills */}
            <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-6">
              {[
                { key: "all", label: "All Projects (7)" },
                { key: "operations", label: "Operations & Refurbishment (1)" },
                {
                  key: "architecture",
                  label: "Architectural Documentation (6)",
                },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as typeof filter)}
                  className={`border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors ${
                    filter === tab.key
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-transparent text-muted hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Project Cards Grid */}
            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:gap-14">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => selectProject(project.id)}
                  className="group flex cursor-pointer flex-col justify-between border-b border-border pb-8 text-left transition hover:border-foreground"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="overflow-hidden border border-border bg-stone-100 aspect-[1.35]">
                      <img
                        src={import.meta.env.BASE_URL + project.thumbnail.substring(1)}
                        alt={project.title}
                        className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0"
                        loading="lazy"
                      />
                    </div>

                    {/* Metadata Header */}
                    <div className="mt-5 flex items-baseline justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                      <span>Project {project.number}</span>
                      <span>
                        {project.drawings
                          ? `${project.drawings.length} ${
                              project.drawings.length === 1 ? "sheet" : "sheets"
                            }`
                          : "Commercial programme"}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="mt-2 font-serif text-2xl leading-tight transition-colors group-hover:text-stone-700 md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-muted">
                      {project.subtitle} · {project.location}
                    </p>

                    {/* Summary */}
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {project.summary}
                    </p>
                  </div>

                  {/* View Details Action */}
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground">
                    <span>View project details & evidence</span>
                    <ArrowDownRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                  </div>
                </article>
              ))}
            </div>

            {/* Quick Contact Prompt */}
            <div className="mt-20 border-t border-border pt-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                    Collaboration
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">
                    Interested in reviewing project documentation or discussing
                    an opportunity?
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setPage("contact")
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="inline-flex items-center gap-3 border border-foreground bg-foreground px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-background transition hover:bg-stone-700"
                >
                  Get in touch <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer setPage={setPage} />
    </>
  )
}
