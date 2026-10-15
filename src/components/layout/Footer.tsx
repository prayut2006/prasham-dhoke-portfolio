import type { Page } from "../../types"
import { navItems } from "../../constants"

type FooterProps = {
  setPage: (page: Page) => void
}

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-9 sm:px-8 md:grid-cols-2 lg:px-20">
        <p className="text-xs leading-6 text-muted">
          Construction project management
          <br />
          Belfast, Northern Ireland, UK
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
          {navItems.map((n) => (
            <button
              key={n.page}
              onClick={() => {
                setPage(n.page)
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-[10px] font-bold uppercase tracking-[0.15em] hover:text-muted"
            >
              {n.label}
            </button>
          ))}
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted md:col-span-2 md:text-right">
          © 2026 Prasham Dhoke · Portfolio
        </p>
      </div>
    </footer>
  )
}
