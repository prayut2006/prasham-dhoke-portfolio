import { useEffect, useState } from "react"
import type { Page } from "./types"
import Header from "./components/layout/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Expertise from "./pages/Expertise"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  )

  const [page, setPage] = useState<Page>(() => {
    const raw = window.location.hash.replace("#", "")
    const base = raw.split("?")[0].split("/")[0] as Page
    return ["home", "about", "expertise", "projects", "contact"].includes(base)
      ? base
      : "home"
  })

  useEffect(() => {
    window.location.hash = page === "home" ? "" : page
  }, [page])

  const handleSelectProject = (id: string | null) => {
    setSelectedProjectId(id)
    setPage("projects")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSetPage = (next: Page) => {
    if (next !== "projects") {
      setSelectedProjectId(null)
    }
    setPage(next)
  }

  const sharedProps = {
    setPage: handleSetPage,
    selectedProjectId,
    onSelectProject: handleSelectProject,
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header page={page} setPage={handleSetPage} />
      {page === "home" && <Home {...sharedProps} />}
      {page === "about" && <About {...sharedProps} />}
      {page === "expertise" && <Expertise {...sharedProps} />}
      {page === "projects" && <Projects {...sharedProps} />}
      {page === "contact" && <Contact {...sharedProps} />}
    </div>
  )
}
