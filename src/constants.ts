import type { NavItem } from "./types"

export const images = {
  hero: "https://images.unsplash.com/photo-1712711649566-16c7cfcf341c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1800",
  concrete:
    "https://images.unsplash.com/photo-1615461476249-718ef8bc369c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
  facade:
    "https://images.unsplash.com/photo-1496236436299-cde70e3587cf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
  wide: "https://images.unsplash.com/photo-1591394197887-b27e1ba3b2f9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
  portrait: "/demo.jpeg",
}

export const cvUrl = "/cv.pdf"

export const navItems: NavItem[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Expertise", page: "expertise" },
  { label: "Projects", page: "projects" },
  { label: "Contact", page: "contact" },
]

export const expertiseList = [
  [
    "01",
    "Project Planning & Coordination",
    "Scheduling, task prioritisation, progress monitoring, resource coordination, and programme awareness.",
  ],
  [
    "02",
    "Site & Contractor Management",
    "Contractor coordination, work sequencing, site communication, maintenance delivery, and operational follow-up.",
  ],
  [
    "03",
    "Construction & Refurbishment",
    "Commercial interiors, fit-out coordination, refurbishment workflows, and architectural drawing interpretation.",
  ],
  [
    "04",
    "Quality Assurance & Compliance",
    "Snagging, quality checks, documentation, safety awareness, regulatory compliance coordination, and risk awareness.",
  ],
  [
    "05",
    "Budget & Resource Awareness",
    "Cost awareness, procurement coordination, resource planning, and monitoring work against agreed requirements.",
  ],
  [
    "06",
    "Digital Tools & BIM",
    "MS Project, ASTA Powerproject, AutoCAD, Revit, BIM 360, Navisworks, SketchUp, Lumion, V-Ray, and Enscape.",
  ],
]

export const toolsAndSystems = [
  "MS Project",
  "ASTA Powerproject",
  "AutoCAD",
  "Revit",
  "BIM 360",
  "Navisworks",
  "SketchUp",
  "Lumion",
  "V-Ray",
  "Enscape",
]

export const timelineData = [
  ["Present", "Assistant Maintenance Manager", "Ladbrokes / Entain plc, UK"],
  [
    "[2024 - 2025]",
    "MSc Construction & Project Management",
    "Queen’s University Belfast",
  ],

  ["[2022-2023]", "Architectural experience", "Adroit Architects · Senior Intern"],

  [
    "[2019 - 2024]",
    "Bachelor of Architecture (BArch)",
    "Kavikulguru Institute of Technology and Science, Ramtek ",
  ],
]

export const workingPrinciples = [
  "Planning",
  "Accountability",
  "Communication",
  "Safety",
  "Quality",
  "Collaboration",
  "Continuous improvement",
]
