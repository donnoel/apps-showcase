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
    playStoreUrl: "",
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
    githubUrl: "",
    websiteUrl: "",
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
    githubUrl: "",
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
    githubUrl: "",
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
    githubUrl: "",
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
    githubUrl: "",
    websiteUrl: "",
  },
]
