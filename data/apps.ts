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
    summary:
      "Glow is a calm, modern habit-tracking app designed to help people build routines without guilt, noise, or pressure. It gives practices a clean home, makes daily check-ins feel lightweight, and turns consistency into something encouraging instead of exhausting.",
    whatIBuilt:
      "I built Glow as an Apple-native habit app with a thoughtful structure around Today, Insights, and Library. The product centers on simple check-ins, gentle reminders, progress signals, widgets, and a clean visual system that keeps the experience focused and uncluttered.",
    whatILearned:
      "Glow taught me a lot about building polished product rhythm instead of just features. I spent time shaping navigation, reflection surfaces, and progress feedback so the app could feel calm and useful at the same time. It also pushed me deeper into state management, design consistency, and the balance between motivation and simplicity.",
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
    summary:
      "Easy Units is a fast, friendly conversion app for iPhone and iPad built to make everyday measurements feel simple instead of fiddly. It focuses on clarity, quick switching, and practical categories people actually reach for.",
    whatIBuilt:
      "I built Easy Units with a focused converter, a dedicated Units tab, and a Toolkit tab for one-to-many results within a category. Under the hood, the app organizes supported conversions through a central catalog, supports favorites, restores last-session state, and keeps the interface light and direct.",
    whatILearned:
      "Easy Units was a good exercise in making a utility app feel polished without overcomplicating it. It sharpened my thinking around information density, fast interaction loops, and how to keep a simple tool feeling thoughtful and well-made rather than generic.",
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
  },
]
