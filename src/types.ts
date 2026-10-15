export type Page = "home" | "about" | "expertise" | "projects" | "contact"

export type IconProps = {
  className?: string
  size?: number
  strokeWidth?: number
}

export type NavItem = {
  label: string
  page: Page
}

export type SharedPageProps = {
  setPage: (page: Page) => void
  selectedProjectId?: string | null
  onSelectProject?: (id: string | null) => void
}
