// UI/UX case studies shown at /design and /design/:id. Mirrors the shape of
// src/data/projects.js (same "add an entry, it just shows up" convention).
// All copy here is a first draft the owner should fact-check and replace —
// images are intentionally left empty (ImageOff placeholder renders instead).

export const designCaseStudies = [
  {
    id: 'pulse-of-rwanda',
    title: 'NISR Pulse of Rwanda',
    tagline: "Redesigning vital-statistics infographics for Rwanda's National Institute of Statistics",
    role: 'UI/UX Designer',
    timeline: 'Jan – Mar 2025',
    tools: ['Figma', 'Illustrator', 'After Effects (planned)'],
    category: 'Data Visualization',
    color: 'from-blue-500/20 to-yellow-500/20',
    featured: true,
    cover: null,
    problem: "NISR publishes vital-statistics reports — births, deaths, marriages, census indicators — as dense, text-heavy PDF tables. Journalists, policymakers, and the general public struggle to extract the headline numbers quickly, and the reports rarely get reused outside the office that produced them.",
    research: {
      competitors: "Looked at how other national statistics offices present public data — UK's ONS and Statistics South Africa both lean on simple, repeatable card-and-chart templates rather than raw tables.",
      painPoints: [
        'PDF-only distribution with no mobile-friendly summary',
        'No visual hierarchy — every number given equal weight',
        'Color choices not tested for accessibility or print reproduction',
      ],
      findings: 'A small set of reusable infographic templates (trend line, comparison grid, regional breakdown) could cover most reports, rather than designing each one from scratch.',
    },
    process: {
      flows: 'Mapped which indicators get published most often, then designed around those first: a population trend template, a regional comparison grid, and a single-stat highlight card.',
      wireframes: [],
      hiFi: [],
      figmaEmbed: null,
    },
    designSystem: {
      palette: [
        { name: 'Rwandan Blue', hex: '#00A1DE' },
        { name: 'Accent Yellow', hex: '#FAD201' },
        { name: 'Accent Green', hex: '#20603D' },
        { name: 'Neutral Base', hex: '#F5F5F4' },
      ],
      typography: 'Space Grotesk for headline numbers, a high-legibility grotesk for data labels and captions — flag colors used sparingly as accents, not as the base palette.',
      components: ['Stat highlight card', 'Indicator badge', 'Regional comparison grid', 'Trend line template'],
    },
    finalDesign: {
      summary: 'A static infographic series covering the three most-requested report types, plus a storyboard for a planned 60-second motion-graphics explainer summarizing one report\'s key indicators.',
      images: [],
    },
    outcome: {
      impact: 'Faster scan time for non-technical readers and a template system NISR staff can reuse for future reports without redesigning from scratch each time.',
      learnings: "Would start the motion-graphics storyboard alongside the static designs instead of after — reworking the static layouts to also work as animation keyframes took longer than planning for it upfront would have.",
    },
  },
  {
    id: 'finsight',
    title: 'FinSight',
    tagline: 'Dashboard design for an SME Financial Sustainability Prediction System',
    role: 'UI/UX Designer',
    timeline: '6 weeks',
    tools: ['Figma', 'FigJam'],
    category: 'Dashboard',
    color: 'from-emerald-500/20 to-teal-500/20',
    featured: true,
    cover: null,
    problem: "Lenders and SME support programs had no single view of which small businesses were financially at-risk versus sustainable — the data lived in spreadsheets spread across individual loan officers, so portfolio-wide risk was only visible after the fact.",
    research: {
      competitors: 'Reviewed fintech credit-scoring dashboards for layout patterns, then diverged on tone — most are built for analysts, not executives skimming for a 30-second read.',
      painPoints: [
        'Executives needed a portfolio-level read; loan officers needed per-SME drill-down — one dashboard had to serve both without feeling like two products',
        'Risk scores meant nothing without plain-language explanation',
      ],
      findings: 'Splitting the dashboard into an "Inclusion Overview" mode and a "Loan Officer Detail" mode, sharing one visual language, resolved the two audiences without duplicating the build.',
    },
    process: {
      flows: 'Wireframed both dashboard modes side by side to keep shared components (risk badges, chart cards) consistent before diverging on layout density.',
      wireframes: [],
      hiFi: [],
      figmaEmbed: null,
    },
    designSystem: {
      palette: [
        { name: 'Risk Green', hex: '#16A34A' },
        { name: 'Risk Amber', hex: '#F59E0B' },
        { name: 'Risk Red', hex: '#DC2626' },
        { name: 'Neutral Dark', hex: '#18181B' },
      ],
      typography: 'Space Grotesk for headline metrics, Geist for tables and body copy — kept to two weights per screen to reduce visual noise in dense data views.',
      components: ['Risk badge', 'Portfolio chart card', 'SME detail drawer', 'Inclusion Overview summary tile'],
    },
    finalDesign: {
      summary: 'An executive "Inclusion Overview" screen (aggregate risk distribution, portfolio health, geographic breakdown) and a Loan Officer detail screen (per-SME risk factors, prediction confidence, recommended actions).',
      images: [],
    },
    outcome: {
      impact: 'Gave program managers a single source of truth for portfolio risk instead of reconciling spreadsheets across loan officers.',
      learnings: 'Would user-test the risk-score explanation copy earlier — the first draft was too technical for non-data-science stakeholders and needed a full rewrite after initial feedback.',
    },
  },
  {
    id: 'vetiq',
    title: 'VetIQ',
    tagline: 'Brand and UI overhaul for a dairy and livestock management app',
    role: 'Brand & UI Designer',
    timeline: '4 weeks',
    tools: ['Figma', 'Illustrator'],
    category: 'Brand & Mobile UI',
    color: 'from-amber-500/20 to-green-500/20',
    featured: true,
    cover: null,
    problem: "The existing app looked like a generic business tool — nothing about it signaled \"built for farmers,\" and the visual language didn't build trust with a rural, practical user base managing dairy and livestock day to day.",
    research: {
      competitors: 'Looked at agri-tech apps for tone and legibility choices rather than feature parity.',
      painPoints: [
        'Low color contrast in bright outdoor sunlight — a real usage condition for this audience',
        'Iconography too abstract for livestock-specific tasks like breeding cycles and milk yield logging',
      ],
      findings: 'An earthy, high-contrast palette and literal (not abstract) task icons tested far better in quick hallway reviews than the original generic SaaS look.',
    },
    process: {
      flows: 'Tested three brand directions informally before settling on one, then wireframed the core daily flow: log milk yield, check herd status, see upcoming vet visits.',
      wireframes: [],
      hiFi: [],
      figmaEmbed: null,
    },
    designSystem: {
      palette: [
        { name: 'Pasture Green', hex: '#2F6B3C' },
        { name: 'Warm Amber', hex: '#D97706' },
        { name: 'Barn Cream', hex: '#FAF6EE' },
      ],
      typography: 'A sturdy, rounded sans for headings to feel approachable rather than corporate, paired with a highly legible body font for outdoor readability.',
      components: ['Herd overview card', 'Milk yield trend chart', 'Vet visit reminder', 'Custom livestock-task icon set'],
    },
    finalDesign: {
      summary: 'A rebranded app icon and logo, plus a redesigned dashboard (herd overview, milk yield trend, upcoming vet visits) shown on device frames.',
      images: [],
    },
    outcome: {
      impact: 'The new visual identity read as clear and trustworthy in a small farmer focus group, a meaningful shift from the generic-SaaS first impression.',
      learnings: 'Would involve real farmers in the icon-testing round earlier instead of relying on internal review only — one icon read clearly to the design team but was ambiguous to actual users.',
    },
  },
  {
    id: 'keza-ux',
    title: 'Keza — Trip Planning UX',
    tagline: 'UX for a Rwanda travel and trip-planning app, web and mobile',
    role: 'UI/UX Designer',
    timeline: '8 weeks',
    tools: ['Figma', 'FigJam'],
    category: 'Travel / Mobile & Web',
    color: 'from-orange-500/20 to-rose-500/20',
    featured: false,
    cover: null,
    problem: "Travelers planning trips to Rwanda had to stitch together information from scattered blogs, tour-operator PDFs, and generic map apps — no single tool handled itinerary planning end to end for Rwanda specifically.",
    research: {
      competitors: 'Compared general trip planners (TripIt, Wanderlog) against Rwanda-specific tour-operator sites — neither handled multi-day safari/park logistics well.',
      painPoints: [
        'No offline support for areas with poor connectivity, which is common outside Kigali',
        'No local-context info, like permit requirements for gorilla trekking, baked into the planning flow',
      ],
      findings: 'A day-by-day visual itinerary builder, with local logistics surfaced inline rather than in a separate FAQ, was the core gap general-purpose planners left open.',
    },
    process: {
      flows: 'Mapped the itinerary-building flow and day-by-day scheduling, then wireframed shared "day card" and "activity block" components built to work on both web and mobile.',
      wireframes: [],
      hiFi: [],
      figmaEmbed: null,
    },
    designSystem: {
      palette: [
        { name: 'Terracotta', hex: '#C2693D' },
        { name: 'Deep Green', hex: '#1F4D36' },
        { name: 'Warm Paper', hex: '#F7F1E8' },
      ],
      typography: 'A serif/sans pairing for an editorial, trip-journal feel rather than a generic booking-app look.',
      components: ['Day card', 'Activity block', 'Itinerary timeline', 'Offline-mode indicator'],
    },
    finalDesign: {
      summary: 'A web itinerary builder and mobile day-view screens, shown on device frames, sharing the same "day card" component across both.',
      images: [],
    },
    outcome: {
      impact: 'Validated that a day-by-day visual itinerary builder was the right core interaction, ahead of the engineering build.',
      learnings: 'Would design the offline-mode states from day one instead of retrofitting them after the main flows were already built.',
    },
  },
];

export const featuredDesignCaseStudies = designCaseStudies.filter((d) => d.featured);
