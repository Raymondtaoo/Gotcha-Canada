import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CupSoda, MapPin } from "lucide-react";
import { StoreCard } from "@/components/locations/StoreCard";
import { StoreLocator } from "@/components/locations/StoreLocator";
import { JsonLd } from "@/components/seo/JsonLd";
import { ACTIVE_STORES } from "@/data/stores";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Locations & Store Hours",
  description:
    "Find Gotcha Bubble Tea Canada locations in Oakville, Vaughan, and Calgary. View store hours, directions, and online ordering links.",
  path: "/locations",
});

export default function LocationsPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <section className="border-b border-border bg-surface-warm">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-xs font-medium text-ink-muted"
          >
            <Link href="/" className="hover:text-matcha-800">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-matcha-900">Locations</span>
          </nav>

          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-matcha-100 px-3.5 py-1 text-xs font-semibold text-matcha-900">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{ACTIVE_STORES.length} Active Tea Bars in Canada</span>
              </div>
              <h1 className="mt-4 font-display text-4xl font-semibold text-matcha-900 sm:text-5xl">
                Find Your Nearest Gotcha Tea Bar
              </h1>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Visit us in Oakville, Vaughan, or downtown Calgary. Select any
                store below for live hours, directions, and Uber Eats, DoorDash,
                or Google Food ordering.
              </p>
            </div>

            <Link
              href="/menu"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-matcha-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-matcha-900"
            >
              <CupSoda className="h-4 w-4" aria-hidden="true" />
              <span>Browse Full Menu</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="order"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mb-6">
          <h2 className="font-display text-2xl font-semibold text-matcha-900 sm:text-3xl">
            Interactive Store Locator &amp; Online Ordering
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Filter by province and choose a location to explore its map and
            direct delivery links.
          </p>
        </div>
        <StoreLocator stores={ACTIVE_STORES} />
      </section>

      <section className="border-t border-border bg-surface-warm">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-matcha-900 sm:text-3xl">
            All Canadian Storefronts
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Every location crafts fresh Taiwanese teas, fruit slushes, and brown
            sugar pearls to order.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ACTIVE_STORES.map((store) => (
              <StoreCard key={store.slug} store={store} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
