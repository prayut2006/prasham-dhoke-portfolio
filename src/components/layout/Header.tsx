import { useState } from "react"
import type { Page } from "../../types"
import { navItems, cvUrl } from "../../constants"
import { ChevronRight, Menu, X } from "../Icons"

type HeaderProps = {
  page: Page
  setPage: (page: Page) => void
}

export default function Header({ page, setPage }: HeaderProps) {
  const [open, setOpen] = useState(false)

  const select = (next: Page) => {
    setPage(next)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-20">
        <button
          onClick={() => select("home")}
          className="text-left text-[13px] font-extrabold tracking-[0.12em]"
        >
          PRASHAM
          <br className="sm:hidden" /> DHOKE
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => select(item.page)}
              className={`relative py-7 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-muted ${
                page === item.page ? "text-foreground" : "text-muted"
              }`}
            >
              {item.label}
              {page === item.page && (
                <span className="absolute bottom-0 left-0 h-px w-full bg-foreground" />
              )}
            </button>
          ))}
        </nav>
{/* CV Download */}
<a href={cvUrl} download className="ml-4 border border-foreground px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] hover:bg-foreground hover:text-background">Download CV</a>

        <div className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-muted sm:block">
          Belfast, UK
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => select(item.page)}
              className="flex w-full items-center justify-between border-b border-border py-4 text-left text-xs font-bold uppercase tracking-[0.16em]"
            >
              {item.label}
              <ChevronRight size={15} />
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
