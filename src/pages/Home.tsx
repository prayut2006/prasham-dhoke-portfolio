import type { SharedPageProps } from "../types"
import { images } from "../constants"
import Button from "../components/ui/Button"
import Image from "../components/ui/Image"
import SectionTitle from "../components/ui/SectionTitle"
import Footer from "../components/layout/Footer"
import { ArrowDownRight, ArrowUpRight } from "../components/Icons"

function ProjectCard({
  number,
  title,
  text,
  image,
  onClick,
}: {
  number: string
  title: string
  text: string
  image: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col justify-between text-left"
    >
      <div>
        <div className="overflow-hidden border border-border bg-stone-100 aspect-[1.28]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
            loading="lazy"
          />
        </div>
        <div className="mt-4 flex gap-4">
          <span className="pt-1 text-[10px] font-bold tracking-[0.14em] text-muted">
            {number}
          </span>
          <div>
            <h3 className="font-serif text-2xl leading-tight md:text-3xl">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
          </div>
        </div>
      </div>
      <span className="mt-4 inline-flex items-center gap-2 pl-8 text-[10px] font-bold uppercase tracking-[0.15em]">
        View case study & drawings{" "}
        <ArrowDownRight
          size={15}
          className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
        />
      </span>
    </button>
  )
}

export default function Home({ setPage, onSelectProject }: SharedPageProps) {
  const openProject = (id: string) => {
    if (onSelectProject) {
      onSelectProject(id)
    } else {
      setPage("projects")
    }
  }

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-10 sm:px-8 lg:px-20 lg:pb-28 lg:pt-16">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.17em] text-muted">
                Construction Project Management{" "}
                <span className="mx-2 text-border">|</span> Belfast, UK
              </p>
              <h1 className="font-serif text-[clamp(3.5rem,6.2vw,6.8rem)] leading-[0.93] tracking-[-0.035em]">
                Planning with precision.
                <br />
                Delivering with purpose.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-muted">
                Construction and project management professional with an
                architectural background and practical experience coordinating
                maintenance operations, contractors, refurbishment activities,
                compliance, and project delivery.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button onClick={() => setPage("projects")}>
                  View projects
                </Button>
                <Button secondary onClick={() => setPage("about")}>
                  About Prasham
                </Button>
              </div>
            </div>
            <Image
              src={images.hero}
              alt="People on a construction site"
              className="aspect-[1.08] lg:col-span-5 lg:aspect-[0.9]"
            />
          </div>

          <div className="mt-12 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Construction & Project Management",
              "Architectural Background",
              "Site & Maintenance Operations",
              "Belfast, United Kingdom",
            ].map((x, i) => (
              <div
                key={x}
                className={`px-0 py-5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted sm:px-5 ${
                  i < 3 ? "sm:border-r sm:border-border" : ""
                }`}
              >
                {String(i + 1).padStart(2, "0")}{" "}
                <span className="ml-2 text-foreground">{x}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Profile Intro */}
        <section className="border-y border-border bg-stone-100/50">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-12 lg:px-20 lg:py-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-muted md:col-span-3">
              01 — Profile
            </p>
            <div className="md:col-span-7">
              <p className="font-serif text-3xl leading-[1.15] tracking-[-0.02em] md:text-5xl">
                An architectural eye for detail, paired with the practical
                discipline of keeping work moving.
              </p>
              <button
                onClick={() => setPage("about")}
                className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] underline underline-offset-4"
              >
                More about Prasham <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* Selected Work — Only Verified Projects from Source Evidence */}
        <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20 lg:py-28">
          <SectionTitle
            eyebrow="02 — Selected work"
            title="Practical experience & verified drawings."
            detail="Commercial refurbishment coordination alongside authentic architectural working drawings and 3D visualisations from Studio Adroit Architects."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <ProjectCard
              number="01"
              title="Shop interior refurbishment & fit-out programme"
              text="Coordinating refurbishment and maintenance activity within a live retail estate across the UK."
              image={images.concrete}
              onClick={() => openProject("ladbrokes-refurbishment")}
            />
            <ProjectCard
              number="02"
              title="Goyanka Residence, Hinganghat"
              text="Compound wall working drawing with setting-out plan, elevation, and 3D perspective visualisations."
              image={import.meta.env.BASE_URL + "/projects/goyanka-residence/compound-wall-3d-view.png"}
              onClick={() => openProject("goyanka-residence")}
            />
            <ProjectCard
              number="03"
              title="Jayade Residence, Amravati"
              text="Interior millwork details (master bed and side table), TV unit, and reflected ceiling electrical layout."
              image={import.meta.env.BASE_URL + "/projects/jayade-residence/master-bed-details.png"}
              onClick={() => openProject("jayade-residence")}
            />
            <ProjectCard
              number="04"
              title="Dr. Thorat Residence, Nagpur"
              text="Staircase structural sections with reinforcement annotations and ground-floor brickwork setting-out."
              image={import.meta.env.BASE_URL + "/projects/thorat-residence/staircase-structural-details.png"}
              onClick={() => openProject("thorat-residence")}
            />
          </div>

          <div className="mt-12 flex justify-start">
            <button
              onClick={() => {
                setPage("projects")
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-background transition hover:bg-stone-700"
            >
              View all 7 verified projects & drawings <ArrowUpRight size={14} />
            </button>
          </div>
        </section>

        {/* Expertise Summary */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20 lg:py-24">
            <div className="grid gap-8 md:grid-cols-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-stone-400 md:col-span-3">
                03 — Expertise
              </p>
              <div className="md:col-span-9">
                <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
                  From planning to completion.
                </h2>
                <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {[
                    "Project planning & coordination",
                    "Site & contractor management",
                    "Construction & refurbishment",
                    "Quality assurance & compliance",
                    "Budget & resource awareness",
                    "Digital tools & BIM",
                  ].map((x, i) => (
                    <button
                      onClick={() => setPage("expertise")}
                      className="group flex items-center justify-between border-t border-stone-700 py-4 text-left text-sm"
                      key={x}
                    >
                      <span>
                        <span className="mr-4 text-[10px] text-stone-400">
                          0{i + 1}
                        </span>
                        {x}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-stone-400 group-hover:text-white"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20 lg:py-24">
          <SectionTitle
            eyebrow="04 — Experience & education"
            title="A foundation in the built environment."
          />
          <div className="mt-10 grid gap-8 border-t border-border pt-5 md:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
                Current role
              </p>
              <h3 className="mt-3 font-serif text-2xl">
                Assistant Maintenance Manager
              </h3>
              <p className="mt-2 text-sm text-muted">
                Ladbrokes · Entain plc, UK
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
                Education
              </p>
              <h3 className="mt-3 font-serif text-2xl">
                MSc Construction & Project Management
              </h3>
              <p className="mt-2 text-sm text-muted">
                Queen’s University Belfast · Bachelor of Architecture (BArch)
              </p>
            </div>
          </div>
        </section>

        {/* Opportunities CTA */}
        <section className="border-t border-border bg-stone-100">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end lg:px-20 lg:py-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-muted">
                05 — Opportunities
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-none md:text-6xl">
                Let’s discuss
                <br />
                your next project.
              </h2>
            </div>
            <Button onClick={() => setPage("contact")}>Get in touch</Button>
          </div>
        </section>
      </main>
      <Footer setPage={setPage} />
    </>
  )
}
