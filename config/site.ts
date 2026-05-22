export const siteConfig = {
  name: "PostPeer UI",
  shortName: "PostPeer",
  tagline: "Your scheduling SaaS is already built.",
  description:
    "Drop-in React components for cross-platform social media publishing. Built on shadcn/ui. Free and open source.",
  url: "https://ui.postpeer.dev",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/postpeer/postpeer-ui",
    parent: "https://postpeer.dev",
    twitter: "https://twitter.com/postpeer",
  },
  // Indigo / violet — paired with PostPeer's coral on the parent product.
  brandColor: "#7c3aed",
} as const;

export type SiteConfig = typeof siteConfig;
