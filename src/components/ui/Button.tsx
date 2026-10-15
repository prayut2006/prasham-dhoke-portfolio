import type { ReactNode } from "react"
import { ArrowUpRight } from "../Icons"

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  secondary?: boolean
  className?: string
  type?: "button" | "submit" | "reset"
}

export default function Button({
  children,
  onClick,
  secondary = false,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center gap-3 border px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${
        secondary
          ? "border-border bg-transparent text-foreground hover:bg-foreground hover:text-background"
          : "border-foreground bg-foreground text-background hover:bg-stone-700"
      } ${className}`}
    >
      {children}
      <ArrowUpRight
        size={15}
        strokeWidth={1.5}
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </button>
  )
}
