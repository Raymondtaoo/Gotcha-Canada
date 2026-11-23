import Link from "next/link";
import { ArrowLeft, CupSoda, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-boba-500/30 bg-boba-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-boba-700 uppercase">
        <CupSoda className="h-4 w-4" aria-hidden="true" />
        <span>404 · Cup Not Found</span>
      </div>

      <h1 className="mt-6 font-display text-4xl font-semibold text-matcha-900 sm:text-5xl">
        We couldn&apos;t find that page
      </h1>

      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
        The page you&apos;re looking for may have moved or belongs to a retired
        storefront. Explore our full handcrafted menu or find one of our three
        active Gotcha Bubble Tea Canada locations in Oakville, Vaughan, and
        Calgary.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 rounded-full bg-matcha-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-matcha-900"
        >
          <CupSoda className="h-4 w-4" aria-hidden="true" />
          <span>Explore Full Menu</span>
        </Link>
        <Link
          href="/locations"
          className="inline-flex items-center gap-2 rounded-full border border-matcha-700/30 bg-matcha-100 px-6 py-3 text-sm font-semibold text-matcha-900 transition-colors hover:bg-matcha-800 hover:text-white"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <span>Find a Store</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-warm"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
      </div>
    </section>
  );
}
