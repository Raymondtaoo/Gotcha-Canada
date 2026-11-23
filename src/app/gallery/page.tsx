import Link from "next/link";
import { ArrowRight, Camera, ExternalLink } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { GALLERY_PHOTOS } from "@/data/gallery";
import { SITE_CONFIG } from "@/data/site";
import { ACTIVE_STORES } from "@/data/stores";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "Browse handcrafted bubble teas, coconut desserts, and our modern Canadian tea bar interiors in the Gotcha Bubble Tea Canada photo gallery.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="bg-cream">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />

      {/* Editorial Header */}
      <section className="border-b border-border bg-gradient-to-b from-surface-warm via-cream to-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-matcha-100 px-3 py-1 text-xs font-semibold text-matcha-900">
                <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                {GALLERY_PHOTOS.length} Curated Photos · {ACTIVE_STORES.length}{" "}
                Tea Bars
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-matcha-900 sm:text-5xl">
                Our Gallery{" "}
                <span className="mt-1 block font-sans text-2xl font-medium text-matcha-700 sm:mt-0 sm:inline sm:text-3xl">
                  · 飲品與門市相簿
                </span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                A glimpse into our handcrafted Taiwanese drinks, coconut
                desserts, cozy arched seating nooks, and community moments
                across Canada.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SITE_CONFIG.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-matcha-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-matcha-700"
              >
                Follow {SITE_CONFIG.social.instagramHandle}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-matcha-900 transition-colors hover:border-matcha-500 hover:bg-matcha-100/50"
              >
                View Menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable CSS Masonry Grid + Lightbox */}
      <GalleryGrid photos={GALLERY_PHOTOS} />
    </div>
  );
}
