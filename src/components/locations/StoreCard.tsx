import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { DoorDashIcon, UberEatsIcon } from "@/components/icons/BrandIcons";
import { toTelHref } from "@/lib/format";
import type { StoreLocation } from "@/types/store";

interface StoreCardProps {
  store: StoreLocation;
}

export function StoreCard({ store }: StoreCardProps) {
  const telHref = store.phone ? toTelHref(store.phone) : "";

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-matcha-500/50 hover:shadow-md">
      <Link
        href={`/store/${store.slug}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-surface-warm"
      >
        <Image
          src={store.image.src}
          alt={store.image.alt}
          width={store.image.width}
          height={store.image.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-matcha-900/90 px-3 py-1 text-xs font-semibold text-cream backdrop-blur-sm">
            {store.provinceName}
          </span>
          {store.isFlagship ? (
            <span className="rounded-full bg-boba-100/95 px-3 py-1 text-xs font-semibold text-boba-700 backdrop-blur-sm">
              Flagship
            </span>
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-matcha-900">
              <Link
                href={`/store/${store.slug}`}
                className="transition-colors hover:text-matcha-700"
              >
                {store.name}
              </Link>
            </h3>
            {store.address.landmark ? (
              <p className="mt-0.5 text-xs font-semibold tracking-wide text-boba-700 uppercase">
                {store.address.landmark}
              </p>
            ) : null}
          </div>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {store.tagline}
        </p>

        <dl className="mt-4 space-y-2.5 border-t border-border pt-4 text-sm">
          <div className="flex items-start gap-2.5">
            <dt className="sr-only">Address</dt>
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 text-matcha-700"
              aria-hidden="true"
            />
            <dd className="text-ink">{store.address.formatted}</dd>
          </div>

          {store.phone && telHref ? (
            <div className="flex items-center gap-2.5">
              <dt className="sr-only">Phone</dt>
              <Phone
                className="h-4 w-4 shrink-0 text-matcha-700"
                aria-hidden="true"
              />
              <dd>
                <a
                  href={telHref}
                  className="font-medium text-matcha-800 hover:underline"
                >
                  {store.phone}
                </a>
              </dd>
            </div>
          ) : null}

          <div className="flex items-start gap-2.5">
            <dt className="sr-only">Hours</dt>
            <Clock
              className="mt-0.5 h-4 w-4 shrink-0 text-matcha-700"
              aria-hidden="true"
            />
            <dd className="space-y-0.5 text-ink-muted">
              {store.hours.map((entry) => (
                <div key={entry.label}>
                  <span className="font-medium text-ink">{entry.label}:</span>{" "}
                  {entry.displayHours}
                </div>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-col gap-2.5 pt-2">
          <div className="flex flex-wrap gap-2">
            {store.orderLinks.uberEats ? (
              <a
                href={store.orderLinks.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-matcha-800 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-matcha-900"
              >
                <UberEatsIcon className="h-3.5 w-3.5" />
                <span>Uber Eats</span>
              </a>
            ) : null}
            {store.orderLinks.doorDash ? (
              <a
                href={store.orderLinks.doorDash}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-boba-700 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-boba-500"
              >
                <DoorDashIcon className="h-3.5 w-3.5" />
                <span>DoorDash</span>
              </a>
            ) : null}
            {store.orderLinks.googleFood ? (
              <a
                href={store.orderLinks.googleFood}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-surface-warm px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-matcha-500 hover:bg-matcha-100 hover:text-matcha-900"
              >
                <span>Google Food</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </div>

          <div className="flex items-center justify-between gap-2 pt-1">
            <a
              href={store.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted transition-colors hover:text-matcha-800"
            >
              <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Directions</span>
            </a>
            <Link
              href={`/store/${store.slug}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-matcha-800 transition-colors hover:text-matcha-700"
            >
              <span>Store Details</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default StoreCard;
