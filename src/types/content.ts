import type { ActiveStoreSlug } from "@/types/store";

export type GalleryCategory = "drinks" | "stores" | "moments";

export interface GalleryPhoto {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  category: GalleryCategory;
  featuredOnHome?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  storeName: string;
  storeSlug: ActiveStoreSlug;
  rating: 5;
  drinkTried?: string;
  quote: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  chineseName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  ogImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  logo: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  brandMark: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  farmBadge: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  founderPortrait: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
  };
  rewardsApp: {
    iosUrl: string;
    androidUrl: string;
  };
  franchiseUrl: string;
  primaryNav: NavItem[];
}
