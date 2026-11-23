import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CupSoda,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import {
  DoorDashIcon,
  InstagramIcon,
  UberEatsIcon,
} from "@/components/icons/BrandIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { ACTIVE_STORES, getStoreBySlug } from "@/data/stores";
import { toTelHref } from "@/lib/format";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildStoreJsonLd,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return ACTIVE_STORES.map((store) => ({ slug: store.slug }));
}

interface StorePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: StorePageProps): Promise<Metadata> {
  const { slug } = await params;
  const store = getStoreBySlug(slug);

  if (!store) {
    return buildPageMetadata({
      title: "Store Not Found",
      description: "Explore Gotcha Bubble Tea Canada locations.",
      path: `/store/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${store.name} — Hours, Menu & Order Online`,
    description: `Visit ${store.name} at ${store.address.formatted}. View store hours, directions, and order handcrafted Taiwanese bubble tea online.`,
    path: `/store/${store.slug}`,
    ogImage: store.image,
  });
}

export default async function StoreDetailPage({ params }: StorePageProps) {
  const { slug } = await params;
  const store = getStoreBySlug(slug);

  if (!store) {
    notFound();
  }

  const telHref = store.phone ? toTelHref(store.phone) : "";
  const otherStores = ACTIVE_STORES.filter((item) => item.slug !== store.slug);

  const storeJsonLd = buildStoreJsonLd(store);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: store.shortName, path: `/store/${store.slug}` },
  ]);

  return (
    <>
      <JsonLd data={storeJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-ink-muted"
          >
            <Link href="/" className="hover:text-matcha-800">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/locations" className="hover:text-matcha-800">
              Locations
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-matcha-900">
              {store.shortName}
            </span>
          </nav>

          <Link
            href="/locations"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-matcha-800 hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>All Locations</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface-warm shadow-sm lg:col-span-6">
            <Image
              src={store.image.src}
              alt={store.image.alt}
              width={store.image.width}
              height={store.image.height}
              preload
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8 lg:col-span-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-matcha-100 px-3 py-1 text-xs font-semibold text-matcha-900">
                {store.provinceName}
              </span>
              {store.isFlagship ? (
                <span className="rounded-full bg-boba-100 px-3 py-1 text-xs font-semibold text-boba-700">
                  Ontario Flagship
                </span>
              ) : null}
            </div>

            <h1 className="mt-4 font-display text-3xl font-semibold text-matcha-900 sm:text-4xl">
              {store.name}
            </h1>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              {store.tagline}
            </p>

            <dl className="mt-6 space-y-4 border-y border-border py-6 text-sm">
              <div className="flex items-start gap-3">
                <dt className="sr-only">Address</dt>
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-matcha-700"
                  aria-hidden="true"
                />
                <dd>
                  <p className="font-semibold text-ink">
                    {store.address.formatted}
                  </p>
                  {store.address.landmark ? (
                    <p className="mt-0.5 text-xs text-ink-muted">
                      {store.address.landmark}
                    </p>
                  ) : null}
                </dd>
              </div>

              {store.phone && telHref ? (
                <div className="flex items-center gap-3">
                  <dt className="sr-only">Phone</dt>
                  <Phone
                    className="h-5 w-5 shrink-0 text-matcha-700"
                    aria-hidden="true"
                  />
                  <dd>
                    <a
                      href={telHref}
                      className="font-semibold text-matcha-800 hover:underline"
                    >
                      {store.phone}
                    </a>
                  </dd>
                </div>
              ) : null}

              <div className="flex items-start gap-3">
                <dt className="sr-only">Opening Hours</dt>
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-matcha-700"
                  aria-hidden="true"
                />
                <dd className="w-full space-y-1.5">
                  <p className="font-semibold text-ink">Store Hours</p>
                  <ul className="space-y-1 text-sm text-ink-muted">
                    {store.hours.map((entry) => (
                      <li
                        key={entry.label}
                        className="flex items-center justify-between gap-4"
                      >
                        <span className="font-medium text-ink">
                          {entry.label}
                        </span>
                        <span>{entry.displayHours}</span>
                      </li>
                    ))}
                  </ul>
                  {store.hoursNote ? (
                    <p className="pt-1 text-xs text-ink-muted">
                      {store.hoursNote}
                    </p>
                  ) : null}
                </dd>
              </div>
            </dl>

            <div className="mt-6 space-y-3">
              <p className="text-xs font-semibold tracking-wider text-ink-muted uppercase">
                Order Online for Pickup &amp; Delivery
              </p>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {store.orderLinks.uberEats ? (
                  <a
                    href={store.orderLinks.uberEats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-matcha-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-matcha-900"
                  >
                    <UberEatsIcon className="h-4 w-4" />
                    <span>Order on Uber Eats</span>
                  </a>
                ) : null}
                {store.orderLinks.doorDash ? (
                  <a
                    href={store.orderLinks.doorDash}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-boba-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-boba-500"
                  >
                    <DoorDashIcon className="h-4 w-4" />
                    <span>Order on DoorDash</span>
                  </a>
                ) : null}
                {store.orderLinks.googleFood ? (
                  <a
                    href={store.orderLinks.googleFood}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface-warm px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-matcha-500 hover:bg-matcha-100 hover:text-matcha-900"
                  >
                    <span>Order on Google Food</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
                <a
                  href={store.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-matcha-800 transition-colors hover:bg-surface-warm"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  <span>Get Directions</span>
                </a>
              </div>

              {store.instagramUrl ? (
                <div className="pt-2">
                  <a
                    href={store.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-matcha-800 hover:underline"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    <span>Follow Gotcha {store.shortName} on Instagram</span>
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
            <div>
              <h2 className="font-display text-xl font-semibold text-matcha-900">
                Directions &amp; Map
              </h2>
              <p className="text-xs text-ink-muted">{store.address.formatted}</p>
            </div>
            <a
              href={store.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-matcha-100 px-4 py-2 text-xs font-semibold text-matcha-900 transition-colors hover:bg-matcha-800 hover:text-white"
            >
              <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Open in Google Maps</span>
            </a>
          </div>
          <div className="min-h-[420px] w-full bg-surface-warm">
            <iframe
              src={store.googleMapsEmbedUrl}
              title={`${store.name} location map`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
              allowFullScreen={false}
            />
          </div>
        </div>
      </section>

      {/* Menu CTA + Other Locations */}
      <section className="border-t border-border bg-surface-warm">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-matcha-900 p-7 text-cream sm:flex-row sm:items-center sm:p-9">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Craving Something Specific?
              </h2>
              <p className="mt-1.5 max-w-xl text-sm text-cream/85">
                Explore our full bilingual menu of milk teas, brown sugar fresh
                milk, fruit teas, slushes, and coconut desserts before you
                visit.
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-matcha-900 transition-colors hover:bg-matcha-100"
            >
              <CupSoda className="h-4 w-4" aria-hidden="true" />
              <span>Explore Full Menu</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-matcha-900">
              Other Gotcha Canada Locations
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherStores.map((other) => (
                <Link
                  key={other.slug}
                  href={`/store/${other.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-matcha-500/60 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-lg font-semibold text-matcha-900 group-hover:text-matcha-700">
                      {other.shortName}
                    </span>
                    <span className="rounded-full bg-surface-warm px-2.5 py-0.5 text-xs font-semibold text-ink-muted">
                      {other.province}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-muted">
                    {other.address.formatted}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-matcha-800">
                    <span>View store</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
