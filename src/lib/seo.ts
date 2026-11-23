import type { Metadata } from "next";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/menu";
import { SITE_CONFIG, SITE_URL } from "@/data/site";
import type { MenuCategory, MenuItem } from "@/types/menu";
import type { StoreLocation } from "@/types/store";

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  noIndex?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const image = ogImage ?? SITE_CONFIG.ogImage;
  const imageUrl = absoluteUrl(image.src);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonical),
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: image.width ?? 1200,
          height: image.height ?? 630,
          alt: image.alt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildOrganizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    alternateName: `${SITE_CONFIG.shortName} (${SITE_CONFIG.chineseName})`,
    url: SITE_URL,
    logo: absoluteUrl(SITE_CONFIG.logo.src),
    description: SITE_CONFIG.description,
    sameAs: [
      SITE_CONFIG.social.instagramUrl,
      SITE_CONFIG.rewardsApp.iosUrl,
      SITE_CONFIG.rewardsApp.androidUrl,
      SITE_CONFIG.franchiseUrl,
    ],
  };
}

export function buildWebSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_URL,
    inLanguage: "en-CA",
  };
}

export function buildMenuJsonLd(
  categories: MenuCategory[] = MENU_CATEGORIES,
  items: MenuItem[] = MENU_ITEMS
): Record<string, unknown> {
  const itemsByCategory = new Map<string, MenuItem[]>();
  for (const item of items) {
    const existing = itemsByCategory.get(item.categoryId);
    if (existing) {
      existing.push(item);
    } else {
      itemsByCategory.set(item.categoryId, [item]);
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${SITE_CONFIG.name} Menu`,
    description:
      "Full Gotcha Bubble Tea Canada menu featuring Taiwanese milk teas, brown sugar fresh milk, fruit teas, slushes, cheese foam macchiatos, and coconut desserts.",
    url: absoluteUrl("/menu"),
    inLanguage: ["en-CA", "zh-Hant"],
    hasMenuSection: categories.map((category) => ({
      "@type": "MenuSection",
      name: `${category.nameEn} (${category.nameZh})`,
      description: category.subtitle,
      hasMenuItem: (itemsByCategory.get(category.id) ?? []).map((item) => ({
        "@type": "MenuItem",
        name: item.nameZh ? `${item.nameEn} ${item.nameZh}` : item.nameEn,
        description: item.description,
        ...(item.image ? { image: absoluteUrl(item.image.src) } : {}),
        offers: {
          "@type": "Offer",
          price: item.price.base.toFixed(2),
          priceCurrency: item.price.currency,
          availability: "https://schema.org/InStock",
        },
      })),
    })),
  };
}

export function buildStoreJsonLd(store: StoreLocation): Record<string, unknown> {
  const orderActions: Record<string, unknown>[] = [];
  const orderEntries = [
    { name: "Order on Uber Eats", url: store.orderLinks.uberEats },
    { name: "Order on DoorDash", url: store.orderLinks.doorDash },
    { name: "Order on Google Food", url: store.orderLinks.googleFood },
    { name: "Order on SkipTheDishes", url: store.orderLinks.skipTheDishes },
  ];

  for (const entry of orderEntries) {
    if (!entry.url) continue;
    orderActions.push({
      "@type": "OrderAction",
      name: entry.name,
      target: {
        "@type": "EntryPoint",
        urlTemplate: entry.url,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      deliveryMethod: [
        "https://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
        "https://purl.org/goodrelations/v1#DeliveryModePickUp",
      ],
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: store.name,
    description: store.tagline,
    url: absoluteUrl(`/store/${store.slug}`),
    image: absoluteUrl(store.image.src),
    ...(store.phone ? { telephone: store.phone } : {}),
    servesCuisine: ["Bubble Tea", "Taiwanese Tea", "Fruit Tea", "Desserts"],
    priceRange: "$",
    hasMenu: absoluteUrl("/menu"),
    address: {
      "@type": "PostalAddress",
      streetAddress: store.address.unit
        ? `${store.address.street}, ${store.address.unit}`
        : store.address.street,
      addressLocality: store.address.city,
      addressRegion: store.address.province,
      postalCode: store.address.postalCode,
      addressCountry: store.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: store.coordinates.lat,
      longitude: store.coordinates.lng,
    },
    ...(store.hours.length > 0
      ? {
          openingHoursSpecification: store.hours.map((entry) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: entry.days,
            opens: entry.opens,
            closes: entry.closes,
          })),
        }
      : {}),
    ...(orderActions.length > 0 ? { potentialAction: orderActions } : {}),
    ...(store.instagramUrl ? { sameAs: [store.instagramUrl] } : {}),
  };
}

export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
