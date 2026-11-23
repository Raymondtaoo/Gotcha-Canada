import type { SiteConfig } from "@/types/content";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gotchabubbletea.ca"
).replace(/\/$/, "");

export const SITE_CONFIG: SiteConfig = {
  name: "Gotcha Bubble Tea Canada",
  shortName: "Gotcha Canada",
  chineseName: "鮮饗茶",
  tagline: "We Farm Our Own Tea",
  description:
    "Handcrafted Taiwanese bubble tea brewed from organic single-origin tea leaves harvested on our own farms in Taiwan. Visit Gotcha across Ontario and Calgary, Alberta.",
  url: SITE_URL,
  locale: "en_CA",
  ogImage: {
    src: "/images/bg1.webp",
    width: 1920,
    height: 1152,
    alt: "Gotcha Bubble Tea Canada — Handcrafted Taiwanese Bubble Tea",
  },
  logo: {
    src: "/images/l5.webp",
    width: 1600,
    height: 424,
    alt: "Gotcha Bubble Tea 鮮饗茶 logo",
  },
  brandMark: {
    src: "/images/l1.webp",
    width: 1042,
    height: 671,
    alt: "Gotcha 鮮饗茶 stacked brand mark",
  },
  farmBadge: {
    src: "/images/l3.webp",
    width: 1600,
    height: 1600,
    alt: "Gotcha Fresh Tea — We Farm Our Own Tea crest",
  },
  founderPortrait: {
    src: "/images/p5.webp",
    width: 1600,
    height: 1600,
    alt: "Gotcha Canada master franchise owner illustrated portrait",
  },
  social: {
    instagramHandle: "@gotchabubbletea_oakville",
    instagramUrl: "https://www.instagram.com/gotchabubbletea_oakville/",
  },
  rewardsApp: {
    iosUrl: "https://apps.apple.com/ca/app/gotcha/id6443395772",
    androidUrl:
      "https://play.google.com/store/apps/details?id=uni.UNIA3GOTCHA",
  },
  franchiseUrl: "https://gotchacanada.com/",
  primaryNav: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Locations", href: "/locations" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
  ],
};
