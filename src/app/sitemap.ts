import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { ACTIVE_STORES } from "@/data/stores";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/menu`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const storeRoutes: MetadataRoute.Sitemap = ACTIVE_STORES.map((store) => ({
    url: `${SITE_URL}/store/${store.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: store.isFlagship ? 0.85 : 0.8,
  }));

  return [...staticRoutes, ...storeRoutes];
}
