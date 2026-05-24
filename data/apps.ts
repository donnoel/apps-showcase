export type AppEntry = {
  projectNumber: number
  projectName: string
  slug: string
  name: string
  description: string
  platform: string
  status: string
  audience: string
  version: string
  location: string
  createdOn: string
  roadmap: string
  notes?: string
  appStoreUrl?: string
  playStoreUrl?: string
  githubUrl?: string
  githubPagesUrl?: string
  websiteUrl?: string
  summary?: string
  whatIBuilt?: string
  whatILearned?: string
  heroImage?: string
  heroFit?: "cover" | "contain"
  heroPosition?: string
}

export const apps: AppEntry[] = [
  {
    projectNumber: 1,
    projectName: "Pause",
    slug: "pause-for-a-moment",
    name: "Pause for a Moment",
    description: "A calm Apple-platform app centered on pause, reflection, and quiet moments.",
    platform: "iPhone / iPad",
    status: "Live",
    audience: "Public",
    version: "2.0",
    location: "Apple App Store",
    createdOn: "10/23/25",
    roadmap: "Breathing visualizations",
    appStoreUrl: "https://apps.apple.com/us/app/pause-for-a-moment/id6755661954",
    githubUrl: "https://github.com/donnoel/Pause",
    githubPagesUrl: "https://donnoel.github.io/Pause/",
    heroImage: "/apps/pause-for-a-moment/hero.jpeg",
    heroFit: "contain",
    heroPosition: "center",
    summary:
      "Pause is a minimal breathing and mindfulness timer for iPhone and iPad built to feel quiet, clear, and restorative. It focuses on short guided breathing sessions, calm reflection, and an experience that gets out of the way instead of adding more noise.",
    whatIBuilt:
      "I built Pause as a SwiftUI meditation app with preset and custom session lengths, selectable breathing styles, ritual presets, gentle audio chimes, post-session reflections, and a companion Lock Screen widget. The app also tracks completed-session stats and restores session timing cleanly after backgrounding.",
    whatILearned:
      "Pause sharpened my sense for restraint in product design. It taught me how much discipline it takes to keep an interface calm while still supporting timing, audio, persistence, widgets, and thoughtful state transitions under the hood.",
  },
  {
    projectNumber: 2,
    projectName: "Glow",
    slug: "glow-daily-practice",
    name: "Glow Daily Practice",
    description: "A daily practice app focused on rhythm, momentum, and thoughtful habit building.",
    platform: "iPhone / iPad",
    status: "Live",
    audience: "Public",
    version: "2.1",
    location: "Apple App Store",
    createdOn: "10/29/25",
    roadmap: "Maintenance only",
    appStoreUrl: "https://apps.apple.com/us/app/glow-daily-practice/id6755254758",
    githubUrl: "https://github.com/donnoel/Glow",
    githubPagesUrl: "https://donnoel.github.io/Glow/",
    heroImage: "/apps/glow-daily-practice/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center top",
    summary:
      "Glow is a calm habit tracker built around steady daily execution, visible progress, and low-friction routines. It is designed to help people build consistency without guilt, clutter, or overcomplication.",
    whatIBuilt:
      "I built Glow with a three-part structure around Today, Insights, and Library, using SwiftUI, SwiftData, CloudKit, reminders, and widgets. The app supports daily and custom schedules, archive-aware reminder syncing, habit detail views, momentum tracking, and a visual system centered on calm clarity.",
    whatILearned:
      "Glow taught me how to shape product rhythm, not just features. It pushed me deeper into state management, persistence, reminders, and cross-device data handling, while also reinforcing how much good habit software depends on tone, pacing, and consistency in the interface.",
  },
  {
    projectNumber: 3,
    projectName: "Briefly",
    slug: "briefly",
    name: "Briefly",
    description: "A learning app designed to make studying feel lighter, clearer, and more approachable.",
    platform: "iPhone / iPad",
    status: "Updating",
    audience: "Personal Use",
    version: "2.0",
    location: "Personal Use",
    createdOn: "11/30/25",
    roadmap: "Quiz mode",
    githubUrl: "https://github.com/donnoel/Briefly",
    githubPagesUrl: "https://donnoel.github.io/Briefly/",
    heroImage: "/apps/briefly/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center top",
    summary:
      "Briefly is a study app built around topic packs, sections, and flashcards, with a review flow designed to feel fast and satisfying. It also supports backend-powered AI generation so new material can be created, reviewed, edited, and saved inside the app.",
    whatIBuilt:
      "I built Briefly with deck sessions, progress tracking, repeat-or-advance review controls, topic search and filters, local persistence, and iCloud sync for user-created content. I also added AI-backed topic generation with a review-before-save workflow so generated material can be refined before it becomes part of the library.",
    whatILearned:
      "Briefly pushed me to think hard about learning flow and information density. It taught me how much the feeling of study depends on pacing, hierarchy, and clean review mechanics, especially when AI generation is part of the experience and the app still needs to feel trustworthy and grounded.",
  },
  {
    projectNumber: 4,
    projectName: "Driftly",
    slug: "driftly-night",
    name: "Driftly Night",
    description: "A mood-forward Apple-platform app built around calm presentation, motion, and ambient visuals.",
    platform: "iPhone / iPad / tvOS",
    status: "Live",
    audience: "Public",
    version: "2.0",
    location: "Apple App Store",
    createdOn: "12/11/25",
    roadmap: "Visual refinements",
    appStoreUrl: "https://apps.apple.com/us/app/driftly-night/id6758164205",
    githubUrl: "https://github.com/donnoel/Driftly",
    githubPagesUrl: "https://donnoel.github.io/Driftly/",
    heroImage: "/apps/driftly-night/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center",
    summary:
      "Driftly is a fullscreen ambient visual app built around cosmic gradients, liquid motion, and abstract generative visuals. It is less a utility than a mood object, something you leave running when you want a space to feel softer, calmer, or more alive.",
    whatIBuilt:
      "I built Driftly with ambient modes, fullscreen minimal chrome, auto-drift mode cycling, prewarmed transitions, sleep timer controls, brightness gestures, favorites sync, saved scenes, and shared support across iOS and tvOS.",
    whatILearned:
      "Driftly taught me a lot about animation continuity, transition quality, and how fragile immersive experiences can feel when timing or rendering gets even slightly rough. It pushed me to care about motion smoothness and the details that make generative visuals feel premium instead of gimmicky.",
  },
  {
    projectNumber: 5,
    projectName: "Loom",
    slug: "loom",
    name: "Loom",
    description: "A local-first macOS AI workspace for private, focused workflows.",
    platform: "macOS",
    status: "Private",
    audience: "Personal Use",
    version: "1.0",
    location: "Personal Use",
    createdOn: "1/27/26",
    roadmap: "Local AI workflow refinements",
    githubUrl: "https://github.com/donnoel/Loom",
    githubPagesUrl: "https://donnoel.github.io/Loom/",
    heroImage: "/apps/loom/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center",
    summary:
      "Loom is a macOS-first local LLM workspace built for private, offline-first AI chats. It is designed around a Finder-like session model, disk-backed conversation history, and local model inference.",
    whatIBuilt:
      "I built Loom with session management, disk persistence, streaming assistant replies, speech input, optional spoken responses, file-upload grounding, context controls, and a trust-focused local-first product shape.",
    whatILearned:
      "Loom pushed me into a different kind of product thinking: privacy, local storage, model capability boundaries, and setup friction all matter as much as the chat UI itself.",
  },
  {
    projectNumber: 6,
    projectName: "ProjectPilot",
    slug: "project-pilot",
    name: "Project Pilot",
    description: "A private macOS tool for repeatable app planning and project creation workflows.",
    platform: "macOS",
    status: "Private",
    audience: "Personal Use",
    version: "1.0",
    location: "Personal Use",
    createdOn: "2/15/26",
    roadmap: "Template and workflow polish",
    githubUrl: "https://github.com/donnoel/ProjectPilot",
    githubPagesUrl: "https://donnoel.github.io/ProjectPilot/",
    heroImage: "/apps/project-pilot/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center",
    summary:
      "Project Pilot is a macOS menu bar utility for creating known-good Xcode projects from a golden template. Instead of generating something close, it aims to reproduce a trusted starting point with the right structure from the beginning.",
    whatIBuilt:
      "I built Project Pilot to generate starter SwiftUI apps, tests, assets, AGENTS files, CI workflow files, and project metadata from a golden source. It can also initialize git, create a GitHub repo, push the first commit, and open the project in Xcode.",
    whatILearned:
      "Project Pilot reinforced how much developer experience matters. It taught me that shaving friction off project setup protects quality and momentum before real product work even begins.",
  },
  {
    projectNumber: 7,
    projectName: "Coloring",
    slug: "coloring-room",
    name: "Coloring Room",
    description: "A premium iPad coloring studio built for focus, creativity, and calm.",
    platform: "iPad",
    status: "Live",
    audience: "Public",
    version: "2.0",
    location: "Apple App Store",
    createdOn: "2/17/26",
    roadmap: "Drawing refinements",
    appStoreUrl: "https://apps.apple.com/us/app/coloring-room/id6761619332",
    githubUrl: "https://github.com/donnoel/Coloring",
    githubPagesUrl: "https://donnoel.github.io/Coloring/",
    heroImage: "/apps/coloring-room/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center",
    summary:
      "The Coloring Room is a calm iPad-first creative app built around focus, relaxation, and playful visual expression. It aims to feel like a quiet studio where the artwork gets to be the center of attention.",
    whatIBuilt:
      "I built The Coloring Room as an Apple Pencil-native coloring studio with a spacious iPad workflow, drawing library, gallery presentation, import support, and a product shape designed around calm creativity.",
    whatILearned:
      "This project pushed me to think carefully about visual hierarchy, content pacing, and how interface chrome can either support or distract from the art itself.",
  },
  {
    projectNumber: 8,
    projectName: "Chicane",
    slug: "the-podium",
    name: "The Podium",
    description: "A private prediction and scorekeeping app for racing picks and friendly competition.",
    platform: "iPhone / iPad",
    status: "Private",
    audience: "Personal Use",
    version: "2.0",
    location: "Personal Use",
    createdOn: "2/19/26",
    roadmap: "Friendly picks workflow polish",
    githubUrl: "https://github.com/donnoel/Chicane",
    githubPagesUrl: "https://donnoel.github.io/Chicane/",
    heroImage: "/apps/the-podium/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center top",
    summary:
      "The Podium is a premium iOS and iPadOS podium-picks app built around friendly Formula 1 and MotoGP weekend picks. It is designed to keep predictions, standings, and side games easy to track and fun to revisit.",
    whatIBuilt:
      "I built The Podium as a compact multi-tab experience around picks, results, scoreboards, player tracking, and a simple bet ledger. The focus was on making a sports prediction app feel clear, polished, and lightweight enough for repeated use during a season.",
    whatILearned:
      "The Podium reinforced how much sports apps depend on clarity and rhythm. It pushed me to think about glanceability, event timing, and how to keep competitive features playful rather than cluttered.",
  },
  {
    projectNumber: 9,
    projectName: "Conversion",
    slug: "easy-units",
    name: "Easy Units",
    description: "A clean utility app for conversions across everyday unit categories.",
    platform: "iPhone / iPad",
    status: "Live",
    audience: "Public",
    version: "2.0",
    location: "Apple App Store",
    createdOn: "3/12/26",
    roadmap: "Units organization",
    appStoreUrl: "https://apps.apple.com/us/app/easy-units/id6761770180",
    githubUrl: "https://github.com/donnoel/Conversion",
    githubPagesUrl: "https://donnoel.github.io/Conversion/",
    heroImage: "/apps/easy-units/hero.jpeg",
    heroFit: "contain",
    heroPosition: "center",
    summary:
      "Easy Units is a polished conversion app for iPhone and iPad built to make everyday measurements feel quick, clear, and friendly. It focuses on practical categories, reversible conversions, and a layout that stays simple even when the feature set grows.",
    whatIBuilt:
      "I built Easy Units with a focused converter, a searchable Units tab, a Toolkit tab for one-to-many category output, favorites, reversible pair switching, local persistence, and session restoration.",
    whatILearned:
      "Easy Units was a useful exercise in restraint. It taught me how to make a utility app feel polished without piling on unnecessary chrome, and how much usability comes from fast interaction loops, clean formatting, and thoughtful defaults.",
  },
  {
    projectNumber: 10,
    projectName: "Pulseboard",
    slug: "pulseboard",
    name: "Earth Pulse",
    description: "A development-stage app exploring a living view of world events and signals.",
    platform: "iPhone / iPad",
    status: "In Development",
    audience: "Personal Use",
    version: "1.0",
    location: "Personal Use",
    createdOn: "3/23/26",
    roadmap: "Map and feed refinement",
    githubUrl: "https://github.com/donnoel/Pulseboard",
    githubPagesUrl: "https://donnoel.github.io/Pulseboard/",
    heroImage: "/apps/pulseboard/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center",
    summary:
      "Earth Pulse is a map-first iPhone and iPad app for exploring live natural events from direct public feeds. It is aimed at turning constantly moving event data into something clearer, more structured, and easier to scan.",
    whatIBuilt:
      "This project is centered on a map-first experience for live natural-event exploration, with a product direction focused on readable signals, current event context, and a calmer presentation of fast-changing public data.",
    whatILearned:
      "Earth Pulse reflects an ongoing interest in signal versus noise: how to organize dynamic information so it feels useful instead of overwhelming.",
  },
  {
    projectNumber: 11,
    projectName: "Showcase",
    slug: "app-showcase",
    name: "App Showcase",
    description: "The public web home for my app portfolio and project status.",
    platform: "Web",
    status: "Live",
    audience: "Public",
    version: "1.0",
    location: "Public Web",
    createdOn: "6/5/26",
    roadmap: "Portfolio maintenance",
    githubUrl: "https://github.com/donnoel/apps-showcase",
    githubPagesUrl: "https://donnoel.github.io/apps-showcase/",
    websiteUrl: "https://main.d3g59tagskgi8.amplifyapp.com/",
    heroImage: "/apps/app-showcase/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center",
    summary:
      "App Showcase is the web portfolio that ties the full project collection together. It gives each app a place to live with status, platform, links, roadmap notes, and a short story about what was built.",
    whatIBuilt:
      "I built the showcase as a Next.js site hosted on AWS Amplify, with app data centralized in a shared TypeScript file so the homepage, catalog, and detail pages can all stay aligned.",
    whatILearned:
      "This project reinforced how useful a simple public portfolio can be when it is treated as living infrastructure instead of a one-time marketing page.",
  },
  {
    projectNumber: 12,
    projectName: "Glow",
    slug: "glow-android",
    name: "Glow Daily Practice",
    description: "An Android version of Glow Daily Practice currently in development for the Play Store.",
    platform: "Android",
    status: "In Development",
    audience: "Public",
    version: "1.0",
    location: "Play Store",
    createdOn: "6/5/26",
    roadmap: "",
    summary:
      "Glow for Android extends the daily-practice idea beyond Apple platforms with a focused version of the habit-building experience for Play Store release.",
    whatIBuilt:
      "This version is in development around the same product idea as Glow: daily rhythm, thoughtful habit tracking, and a calm experience for keeping routines visible.",
    whatILearned:
      "The Android version is an opportunity to carry the same product values across platforms while learning the tradeoffs of a different app stack and distribution path.",
  },
  {
    projectNumber: 13,
    projectName: "PiSignage",
    slug: "beam",
    name: "Beam",
    description: "A web-based digital signage project connected to the PiSignage platform work.",
    platform: "Web",
    status: "In Development",
    audience: "Ad Dad",
    version: "1.0",
    location: "N/A",
    createdOn: "5/20/26",
    roadmap: "",
    githubUrl: "https://github.com/donnoel/PiSignage",
    githubPagesUrl: "https://donnoel.github.io/PiSignage/",
    heroImage: "/apps/beam/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center",
    summary:
      "Beam is the web-facing digital signage effort connected to the PiSignage system. It is focused on making screen content management more direct, understandable, and maintainable.",
    whatIBuilt:
      "This project is in development around a Raspberry Pi and web-dashboard signage workflow, with GitHub-backed project tracking and an eventual path toward production signage replacement.",
    whatILearned:
      "Beam is pushing the portfolio beyond standalone apps into practical infrastructure: cloud deployment, device workflows, screen management, and long-term operational maintainability.",
  },
  {
    projectNumber: 14,
    projectName: "Tick",
    slug: "ticks",
    name: "Ticks",
    description: "A lightweight timekeeping app for tracking project work and forgotten manual entries.",
    platform: "iPhone",
    status: "In Development",
    audience: "Public",
    version: "1.0",
    location: "Apple App Store",
    createdOn: "5/20/26",
    roadmap: "",
    githubUrl: "https://github.com/donnoel/Tick",
    githubPagesUrl: "https://donnoel.github.io/Tick/",
    heroImage: "/apps/ticks/hero.jpeg",
    heroFit: "contain",
    heroPosition: "center",
    summary:
      "Ticks is a timekeeping app intended to make project time tracking quick, low-friction, and easy to correct when a timer was not started on time.",
    whatIBuilt:
      "This project is being shaped around fast start and stop tracking, project assignment, manual time entry, and a future workflow for summarizing work by day, week, and month.",
    whatILearned:
      "Ticks is about building a tool that supports the way project work really happens: bursts, interruptions, forgotten starts, and the need for simple records without ceremony.",
  },
  {
    projectNumber: 15,
    projectName: "Ketch",
    slug: "ketch",
    name: "Ketch",
    description: "A personal-use iPhone and iPad app for quickly catching ideas, tasks, and loose notes before they drift away.",
    platform: "iPhone / iPad",
    status: "In Development",
    audience: "Personal Use",
    version: "1.0",
    location: "Personal Use",
    createdOn: "5/23/26",
    roadmap: "",
    githubUrl: "https://github.com/donnoel/Ketch",
    githubPagesUrl: "https://donnoel.github.io/Ketch/",
    heroImage: "/apps/ketch/hero.jpeg",
    heroFit: "contain",
    heroPosition: "center",
    summary:
      "Ketch is a personal-use capture app focused on getting thoughts, tasks, and small reminders out of your head quickly. The goal is to make capture feel immediate, calm, and low-friction.",
    whatIBuilt:
      "This project is being shaped around fast entry, lightweight organization, and a simple iPhone and iPad workflow for keeping small bits of information from getting lost.",
    whatILearned:
      "Ketch is another exercise in product restraint: building a small utility around speed, clarity, and habit rather than turning quick capture into a heavy system.",
  },
]
