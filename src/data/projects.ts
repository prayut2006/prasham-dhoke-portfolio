export type ProjectDrawing = {
  id: string
  pageNumber: number
  sheetTitle: string
  image: string
  caption: string
  drafterCredit: string
  date?: string
  scale?: string
}

export type PortfolioProject = {
  id: string
  number: string
  title: string
  subtitle: string
  category: "operations" | "architecture"
  location: string
  thumbnail: string
  summary: string
  description: string[]
  meta: [string, string][]
  drawings?: ProjectDrawing[]
  // For the existing Ladbrokes refurbishment project
  isLegacyRefurbishment?: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ladbrokes-refurbishment",
    number: "01",
    title: "Shop interior refurbishment & fit-out programme",
    subtitle: "Ladbrokes / Entain UK",
    category: "operations",
    location: "Live commercial retail estate, UK",
    thumbnail:
      "https://images.unsplash.com/photo-1615461476249-718ef8bc369c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
    summary:
      "Coordinating refurbishment and maintenance activity within a live commercial retail estate across the UK.",
    description: [
      "Experience centred on supporting the coordination of refurbishment and maintenance activities across a live retail environment.",
      "Personal responsibility includes helping coordinate maintenance delivery, contractor communication, operational follow-up and work visibility. Wider programme decisions and team-led activities are distinguished from Prasham's direct role.",
    ],
    meta: [
      [
        "Role",
        "Assistant Maintenance Manager · maintenance and contractor coordination",
      ],
      [
        "Context",
        "Live retail estate · approximately 1–5 shops concurrently, where verified",
      ],
      ["Status", "Ongoing operations"],
    ],
    isLegacyRefurbishment: true,
  },
  {
    id: "goyanka-residence",
    number: "02",
    title: "Goyanka Residence",
    subtitle: "Studio Adroit Architects",
    category: "architecture",
    location: "Hinganghat, Maharashtra, India",
    thumbnail: "/projects/goyanka-residence/compound-wall-3d-view.png",
    summary:
      "Compound wall working drawing with dimensional plan, elevation detailing, and 3D perspective visualisations.",
    description: [
      "Architectural documentation and 3D visualisations for the boundary compound wall of the Goyanka Residence in Hinganghat, developed during tenure at Studio Adroit Architects.",
      "The working drawing sheet provides dimensional setting-out for boundary pillars, wall sections with a 300 mm projection, and masonry heights, complemented by perspective renders illustrating the final materiality and exterior finish.",
    ],
    meta: [
      ["Client", "Mr. Goyanka"],
      ["Location", "Hinganghat, Maharashtra, India"],
      ["Studio", "Studio Adroit Architects"],
      ["Attribution", "Drawn by: PD (Prasham Dhoke)"],
      ["Source Evidence", "Pages 3–4 of 9th Sem Architectural Work Portfolio"],
    ],
    drawings: [
      {
        id: "goyanka-drawing-1",
        pageNumber: 3,
        sheetTitle: "Compound Wall Plan & Elevation Working Drawing",
        image: "/projects/goyanka-residence/compound-wall-plan-elevation.png",
        caption:
          "Source: Sheet 03 / Page 3 — Compound wall working drawing displaying setting-out plan, section profiles, pillar dimensions, and 300 mm architectural projection.",
        drafterCredit:
          "Drawn by: PD (Prasham Dhoke) · Studio Adroit Architects",
        scale: "N.T.S",
      },
      {
        id: "goyanka-drawing-2",
        pageNumber: 4,
        sheetTitle: "Compound Wall 3D Perspective View",
        image: "/projects/goyanka-residence/compound-wall-3d-view.png",
        caption:
          "Source: Sheet 04 / Page 4 — Architectural 3D perspective views demonstrating the compound wall finish, gate integration, and surrounding site interface.",
        drafterCredit:
          "Drawn by: PD (Prasham Dhoke) · Studio Adroit Architects",
        scale: "N.T.S",
      },
    ],
  },
  {
    id: "jayade-residence",
    number: "03",
    title: "Jayade Residence",
    subtitle: "Studio Adroit Architects",
    category: "architecture",
    location: "Amravati, Maharashtra, India",
    thumbnail: "/projects/jayade-residence/master-bed-details.png",
    summary:
      "Comprehensive interior working drawings including master bed joinery, bedside tables, media unit, and ceiling electrical layout.",
    description: [
      "A suite of detailed interior architectural drawings prepared for the Jayade Residence in Amravati with Studio Adroit Architects.",
      "The drawings detail custom millwork and spatial coordination, including dimensional joinery sections for the master bedroom bed and side table, electrical switchboard integration, and a ceiling and electrical layout mapping offsets and lighting positions.",
      "Attribution note: The bed details, side table, and ceiling/electrical drawings credit Prasham Dhoke (PD). The media TV-unit drawing on Page 7 credits drafter AH, reflecting collaborative studio project work.",
    ],
    meta: [
      ["Project", "Jayade Residence"],
      ["Location", "Amravati, Maharashtra, India"],
      ["Studio", "Studio Adroit Architects"],
      [
        "Attribution",
        "Bed, Side Table & Ceiling: Drawn by PD · TV Unit: Drawn by AH",
      ],
      ["Dates on Sheets", "January – February 2023"],
      ["Source Evidence", "Pages 5–8 of 9th Sem Architectural Work Portfolio"],
    ],
    drawings: [
      {
        id: "jayade-drawing-1",
        pageNumber: 5,
        sheetTitle: "Master Bedroom Bed Working Details",
        image: "/projects/jayade-residence/master-bed-details.png",
        caption:
          "Source: Sheet 05 / Page 5 — Master bedroom bed working drawing showing dimensional plan, timber joinery sections, 18 mm beading, and 70 mm bed-back space.",
        drafterCredit:
          "Drawn by: PD (Prasham Dhoke) · Checked: PK (Prajakt Karmarkar)",
        date: "10 Feb 2023",
        scale: "N.T.S",
      },
      {
        id: "jayade-drawing-2",
        pageNumber: 6,
        sheetTitle: "Master Bedroom Side-Table Working Details",
        image: "/projects/jayade-residence/side-table-details.png",
        caption:
          "Source: Sheet 06 / Page 6 — Master bedroom side-table working details with top plan, drawer sectional elevations, and integrated 6-module electrical board.",
        drafterCredit:
          "Drawn by: PD (Prasham Dhoke) · Checked: PK (Prajakt Karmarkar)",
        date: "14 Feb 2023",
        scale: "N.T.S",
      },
      {
        id: "jayade-drawing-3",
        pageNumber: 7,
        sheetTitle: "TV-Unit Working Drawing",
        image: "/projects/jayade-residence/tv-unit-details.png",
        caption:
          "Source: Sheet 07 / Page 7 — Media TV-unit working drawing with plug socket arrangements (2 sockets @ SB7, 5 Amp switch in 7A). Drafter credited on sheet: AH.",
        drafterCredit:
          "Drawn by: AH · Studio Adroit Architects (Studio team drawing)",
        date: "30 Jan 2023",
        scale: "N.T.S",
      },
      {
        id: "jayade-drawing-4",
        pageNumber: 8,
        sheetTitle: "Ceiling & Electrical Layout",
        image: "/projects/jayade-residence/ceiling-electrical-layout.png",
        caption:
          "Source: Sheet 08 / Page 8 — Reflected ceiling and electrical layout drawing showing 130 mm offset curve and lighting circuit points.",
        drafterCredit:
          "Drawn by: PD (Prasham Dhoke) · Checked: PK (Prajakt Karmarkar)",
        date: "27 Feb 2023",
        scale: "N.T.S",
      },
    ],
  },
  {
    id: "thorat-residence",
    number: "04",
    title: "Dr. Thorat Residence",
    subtitle: "Studio Adroit Architects · Client: Dr. Umesh Thorat",
    category: "architecture",
    location: "Nagpur, Maharashtra, India",
    thumbnail: "/projects/thorat-residence/staircase-structural-details.png",
    summary:
      "Staircase structural sections with reinforcement schedules alongside ground-floor brickwork setting-out drawings.",
    description: [
      "Technical architectural and construction documentation for the residence of Dr. Umesh Thorat in Nagpur, produced at Studio Adroit Architects.",
      "The drawings encompass staircase construction detailing with structural sections, tread-riser dimensions, and waist slab reinforcement notes, as well as a ground-floor brickwork drawing specifying room dimensions and masonry openings.",
    ],
    meta: [
      ["Client", "Dr. Umesh Thorat"],
      ["Location", "Nagpur, Maharashtra, India"],
      ["Studio", "Studio Adroit Architects"],
      ["Attribution", "Drawn by: PD (Prasham Dhoke)"],
      ["Source Evidence", "Pages 9–10 of 9th Sem Architectural Work Portfolio"],
    ],
    drawings: [
      {
        id: "thorat-drawing-1",
        pageNumber: 9,
        sheetTitle: "Staircase Details with Structural Sections",
        image: "/projects/thorat-residence/staircase-structural-details.png",
        caption:
          "Source: Sheet 09 / Page 9 — Staircase detail drawing illustrating tread-riser elevations, waist slab profiles, structural sections, and flight transitions.",
        drafterCredit:
          "Drawn by: PD (Prasham Dhoke) · Studio Adroit Architects",
        scale: "N.T.S",
      },
      {
        id: "thorat-drawing-2",
        pageNumber: 10,
        sheetTitle: "Ground Floor Brickwork Working Drawing",
        image: "/projects/thorat-residence/ground-floor-brickwork-drawing.png",
        caption:
          "Source: Sheet 10 / Page 10 — Ground-floor brickwork setting-out drawing with masonry dimensions, wall openings, and RCC projections.",
        drafterCredit:
          "Drawn by: PD (Prasham Dhoke) · Studio Adroit Architects",
        scale: "N.T.S",
      },
    ],
  },
  {
    id: "dahake-hospital",
    number: "05",
    title: "Dahake Hospital",
    subtitle: "Studio Adroit Architects · Client: Dr. Dahake",
    category: "architecture",
    location: "Amravati, Maharashtra, India",
    thumbnail: "/projects/dahake-hospital/first-floor-drawing.png",
    summary:
      "Healthcare architectural presentation drawings for first and second floor clinical, administrative, and ward layouts.",
    description: [
      "Architectural presentation drawings for Dahake Hospital in Amravati with Studio Adroit Architects, coordinating functional healthcare programming.",
      "The first-floor plan organizes the accounts department, pharmacy (4105 x 2700 mm), consulting zones, utility areas, and vertical plumbing/AC duct shafts.",
      "The second-floor layout addresses upper hospital services and patient ward facilities.",
      "Attribution note: The first-floor drawing was drafted by Prasham Dhoke (PD). The second-floor drawing credits drafter TS on the sheet title block.",
    ],
    meta: [
      ["Client", "Dr. Dahake"],
      ["Location", "Amravati, Maharashtra, India"],
      ["Studio", "Studio Adroit Architects"],
      ["Attribution", "First Floor: Drawn by PD · Second Floor: Drawn by TS"],
      ["Checked", "PK (Prajakt Karmarkar)"],
      [
        "Source Evidence",
        "Pages 11–12 of 9th Sem Architectural Work Portfolio",
      ],
    ],
    drawings: [
      {
        id: "dahake-drawing-1",
        pageNumber: 11,
        sheetTitle: "First Floor Presentation Drawing",
        image: "/projects/dahake-hospital/first-floor-drawing.png",
        caption:
          "Source: Sheet 11 / Page 11 — First-floor presentation layout indicating pharmacy, billing/accounts, patient circulation, and utility duct shafts.",
        drafterCredit:
          "Drawn by: PD (Prasham Dhoke) · Checked: PK · Studio Adroit Architects",
        scale: "N.T.S",
      },
      {
        id: "dahake-drawing-2",
        pageNumber: 12,
        sheetTitle: "Second Floor Presentation Drawing",
        image: "/projects/dahake-hospital/second-floor-drawing.png",
        caption:
          "Source: Sheet 12 / Page 12 — Second-floor presentation drawing displaying hospital room zoning and circulation. Drafter credited on sheet: TS.",
        drafterCredit:
          "Drawn by: TS · Checked: PK · Studio Adroit Architects (Studio team drawing)",
        scale: "N.T.S",
      },
    ],
  },
  {
    id: "kabra-residence",
    number: "06",
    title: "Kabra Residence",
    subtitle: "Studio Adroit Architects",
    category: "architecture",
    location: "Nagpur, Maharashtra, India",
    thumbnail: "/projects/kabra-residence/roof-slab-electrical-sleeves.png",
    summary:
      "Technical drawing of electrical sleeves through structural beams and cast-in-slab conduit layouts.",
    description: [
      "Technical MEP-structural coordination drawing for the Kabra Residence, prepared at Studio Adroit Architects.",
      "The sheet details the plan at the ground-floor roof slab, specifying the exact positions and routes of electrical conduit sleeves through structural concrete beams and slab ceiling light points prior to casting.",
    ],
    meta: [
      ["Project", "Kabra Residence"],
      ["Location", "Nagpur, Maharashtra, India"],
      ["Studio", "Studio Adroit Architects"],
      ["Attribution", "Drawn by: PD (Prasham Dhoke)"],
      ["Checked", "PK (Prajakt Karmarkar)"],
      ["Source Evidence", "Page 13 of 9th Sem Architectural Work Portfolio"],
    ],
    drawings: [
      {
        id: "kabra-drawing-1",
        pageNumber: 13,
        sheetTitle:
          "Plan at Ground Floor Roof Slab (Electrical Sleeves Through Beam)",
        image: "/projects/kabra-residence/roof-slab-electrical-sleeves.png",
        caption:
          "Source: Sheet 13 / Page 13 — Plan at ground-floor roof slab illustrating electrical sleeves passing through structural beams and ceiling fixture positions.",
        drafterCredit:
          "Drawn by: PD (Prasham Dhoke) · Checked: PK · Studio Adroit Architects",
        scale: "N.T.S",
      },
    ],
  },
  {
    id: "mundhada-residence",
    number: "07",
    title: "Mundhada Residence",
    subtitle: "Studio Adroit Architects · Client: Mr. Mundhada",
    category: "architecture",
    location: "Nagpur, Maharashtra, India",
    thumbnail:
      "/projects/mundhada-residence/exterior-architectural-renders.png",
    summary:
      "Exterior 3D architectural visualisations presenting building massing, materiality, and façade fenestration.",
    description: [
      "Architectural 3D perspective visualisations for the Mundhada Residence, completed during tenure at Studio Adroit Architects.",
      "The render sheet features daylight exterior views illustrating the contemporary residential façade treatment, balcony proportions, material palette, and fenestration detailing.",
    ],
    meta: [
      ["Client", "Mr. Mundhada"],
      ["Location", "Nagpur, Maharashtra, India"],
      ["Studio", "Studio Adroit Architects"],
      ["Attribution", "Drawn by: PD (Prasham Dhoke)"],
      ["Source Evidence", "Page 14 of 9th Sem Architectural Work Portfolio"],
    ],
    drawings: [
      {
        id: "mundhada-drawing-1",
        pageNumber: 14,
        sheetTitle: "Mundhada Residence Architectural Views & Renders",
        image:
          "/projects/mundhada-residence/exterior-architectural-renders.png",
        caption:
          "Source: Sheet 14 / Page 14 — Exterior 3D architectural perspective views demonstrating façade massing, material articulation, and residential entry.",
        drafterCredit:
          "Drawn by: PD (Prasham Dhoke) · Studio Adroit Architects",
        scale: "N.T.S",
      },
    ],
  },
]
