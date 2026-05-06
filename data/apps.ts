export type AppEntry = {
  slug: string
  name: string
  description: string
  platform: string
  status: string
  version: string
  location: string
  createdOn: string
  notes?: string
  appStoreUrl?: string
  playStoreUrl?: string
  githubUrl?: string
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
    slug: "pause-for-a-moment",
    name: "Pause for a Moment",
    description: "A calm Apple-platform app centered on pause, reflection, and quiet moments.",
    platform: "Apple Platforms",
    status: "Closed",
    version: "2.0",
    location: "Apple App Store",
    createdOn: "10/23/25",
    appStoreUrl: "https://apps.apple.com/us/app/pause-for-a-moment/id6755661954",
    githubUrl: "https://github.com/donnoel/Pause",
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
    slug: "glow-daily-practice",
    name: "Glow Daily Practice",
    description: "A daily practice app focused on rhythm, momentum, and thoughtful habit building.",
    platform: "Apple Platforms",
    status: "Closed",
    version: "2.1",
    location: "Apple App Store",
    createdOn: "10/29/25",
    appStoreUrl: "https://apps.apple.com/us/app/glow-daily-practice/id6755254758",
    githubUrl: "https://github.com/donnoel/Glow",
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
    slug: "briefly",
    name: "Briefly",
    description: "A learning app designed to make studying feel lighter, clearer, and more approachable.",
    platform: "Apple Platforms",
    status: "Updating",
    version: "2.0",
    location: "Private",
    createdOn: "11/30/25",
    notes: "UI/UX",
    githubUrl: "https://github.com/donnoel/Briefly",
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
    slug: "driftly-night",
    name: "Driftly Night",
    description: "An Apple-platform app with a mood-forward experience built around calm presentation and motion.",
    platform: "Apple Platforms",
    status: "Closed",
    version: "2.0",
    location: "Apple App Store",
    createdOn: "12/11/25",
    appStoreUrl: "https://apps.apple.com/us/app/driftly-night/id6758164205",
    githubUrl: "https://github.com/donnoel/Driftly",
    heroImage: "/apps/driftly-night/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center",
    summary:
      "Driftly is a fullscreen ambient visual app built around cosmic gradients, liquid motion, and abstract generative visuals. It is less a utility than a mood object, something you leave running when you want a space to feel softer, calmer, or more alive.",
    whatIBuilt:
      "I built Driftly with 22 ambient modes, fullscreen minimal chrome, auto-drift mode cycling, prewarmed transitions, sleep timer controls, brightness edge gestures, optional motion parallax, favorites sync, saved scenes, and shared support across iOS and tvOS.",
    whatILearned:
      "Driftly taught me a lot about animation continuity, transition quality, and how fragile immersive experiences can feel when timing or rendering gets even slightly rough. It pushed me to care about motion smoothness, phase continuity, and the details that make generative visuals feel premium instead of gimmicky.",
  },
  {
    slug: "loom",
    name: "Loom",
    description: "A private project exploring a focused Apple-platform experience.",
    platform: "Apple Platforms",
    status: "Closed",
    version: "1.0",
    location: "Private",
    createdOn: "1/27/26",
    githubUrl: "https://github.com/donnoel/Loom",
    summary:
      "Loom is a macOS-first local LLM workspace built for private, offline-first AI chats. It is designed around a Finder-like session model, disk-backed conversation history, and local model inference through Ollama.",
    whatIBuilt:
      "I built Loom with session management, append-only disk persistence, streaming assistant replies, speech input, optional spoken responses, file upload grounding, context controls, a Trust Center for local-only transparency, and model-aware guidance throughout the interface.",
    whatILearned:
      "Loom pushed me into a different kind of product thinking: privacy, local storage, model capability boundaries, and setup friction all matter as much as the chat UI itself. It taught me how much trust in AI tools comes from clarity about what is local, what is stored, and what the model can actually do.",
  },
  {
    slug: "project-pilot",
    name: "Project Pilot",
    description: "A private tool project designed to support app planning and development workflows.",
    platform: "Apple Platforms",
    status: "Closed",
    version: "1.0",
    location: "Private",
    createdOn: "2/15/26",
    githubUrl: "https://github.com/donnoel/ProjectPilot",
    summary:
      "Project Pilot is a macOS menu bar utility for creating known-good Xcode projects from a golden template. Instead of generating something close, it aims to reproduce a trusted starting point with the right structure and settings from the beginning.",
    whatIBuilt:
      "I built Project Pilot to generate starter SwiftUI apps, tests, assets, AGENTS files, CI workflow files, and `.xcodeproj` metadata from a golden source. It can also initialize git, create a GitHub repo with `gh`, push the first commit, and open the project in Xcode.",
    whatILearned:
      "Project Pilot reinforced how much developer experience matters. It taught me that shaving friction off project setup is not just convenience, it helps protect quality, consistency, and momentum before real product work even begins.",
  },
  {
    slug: "coloring-room",
    name: "Coloring Room",
    description: "A premium coloring studio built for focus, creativity, and calm.",
    platform: "Apple Platforms",
    status: "Closed",
    version: "2.0",
    location: "Apple App Store",
    createdOn: "2/17/26",
    appStoreUrl: "https://apps.apple.com/us/app/coloring-room/id6761619332",
    heroImage: "/apps/coloring-room/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center",
    summary:
      "The Coloring Room is a calm iPad-first creative app built around focus, relaxation, and playful visual expression. Instead of trying to be a noisy content machine, it aims to feel like a quiet studio where the artwork gets to be the center of attention.",
    whatIBuilt:
      "I built The Coloring Room as a premium drawing and coloring experience with an emphasis on presentation, touch comfort, and a more spacious iPad workflow. The goal was to create a product that feels inviting and unhurried while still being polished enough to ship as a real app.",
    whatILearned:
      "This project pushed me to think more carefully about visual hierarchy, content pacing, and how interface chrome can either support or distract from the art itself. It also reinforced how much a focused product benefits from restraint, especially when the real star should be the creative work on the canvas.",
  },
  {
    slug: "the-podium",
    name: "The Podium",
    description: "A private prediction and scorekeeping app for racing picks and friendly competition.",
    platform: "Apple Platforms",
    status: "Closed",
    version: "2.0",
    location: "Private",
    createdOn: "2/19/26",
    heroImage: "/apps/the-podium/hero.jpeg",
    heroFit: "cover",
    heroPosition: "center top",
    summary:
      "The Podium is a private racing picks and scorekeeping app built for friendly competition around Formula 1 and MotoGP. It is designed to keep predictions, standings, and weekly bragging rights easy to track and fun to revisit.",
    whatIBuilt:
      "I built The Podium as a compact multi-tab experience around picks, results, scoreboards, and simple player tracking. The focus was on making a sports prediction app feel clear and lightweight enough for repeated use during a season.",
    whatILearned:
      "The Podium reinforced how much sports apps depend on clarity and rhythm. It pushed me to think about glanceability, event timing, and how to keep competitive features playful rather than cluttered.",
  },
  {
    slug: "easy-units",
    name: "Easy Units",
    description: "A clean utility app for conversions across everyday unit categories.",
    platform: "Apple Platforms",
    status: "Closed",
    version: "2.0",
    location: "Apple App Store",
    createdOn: "3/12/26",
    appStoreUrl: "https://apps.apple.com/us/app/easy-units/id6761770180",
    githubUrl: "https://github.com/donnoel/Conversion",
    heroImage: "/apps/easy-units/hero.jpeg",
    heroFit: "contain",
    heroPosition: "center",
    summary:
      "Easy Units is a polished conversion app for iPhone and iPad built to make everyday measurements feel quick, clear, and friendly. It focuses on practical categories, reversible conversions, and a layout that stays simple even when the feature set grows.",
    whatIBuilt:
      "I built Easy Units with a focused converter, a searchable Units tab, a Toolkit tab for one-to-many category output, favorites, reversible pair switching, local persistence, and session restoration. The app supports 9 categories and 34 conversion pairs and uses a central catalog as the source of truth for supported converters.",
    whatILearned:
      "Easy Units was a useful exercise in restraint. It taught me how to make a utility app feel polished without piling on unnecessary chrome, and how much usability comes from fast interaction loops, clean formatting, and thoughtful defaults.",
  },
  {
    slug: "pulseboard",
    name: "Pulseboard",
    description: "A development-stage app exploring a living view of world events and signals.",
    platform: "Apple Platforms",
    status: "Development",
    version: "1.0",
    location: "",
    createdOn: "3/23/26",
    summary:
      "Pulseboard is an in-progress concept exploring a living view of world events and signals. The idea is to turn constantly moving information into something clearer, more structured, and easier to scan.",
    whatIBuilt:
      "This project is still in development, but the direction centers on building a product that can present changing information in a calm, readable way rather than as a noisy stream.",
    whatILearned:
      "Even in its early stage, Pulseboard reflects an ongoing interest in signal versus noise: how to organize dynamic information so it feels useful instead of overwhelming.",
  },
]
