import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import {
  AppStoreIcon,
  GooglePlayIcon,
  InstagramIcon,
} from "@/components/icons/BrandIcons";
import { SITE_CONFIG } from "@/data/site";
import { ACTIVE_STORES } from "@/data/stores";

export function Footer() {
  return (
    <footer className="border-t border-matcha-800 bg-matcha-900 text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-2xl bg-cream px-4 py-2.5 shadow-sm"
              aria-label={`${SITE_CONFIG.name} — Home`}
            >
              <Image
                src={SITE_CONFIG.brandMark.src}
                alt={SITE_CONFIG.brandMark.alt}
                width={104}
                height={67}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 font-display text-lg font-medium text-matcha-100">
              {SITE_CONFIG.tagline} · {SITE_CONFIG.chineseName}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/80">
              Single-origin Taiwanese tea leaves farmed directly on our own
              estates, freshly brewed to order across Ontario and Calgary,
              Alberta.
            </p>
            <div className="mt-5">
              <a
                href={SITE_CONFIG.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-white/20"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>{SITE_CONFIG.social.instagramHandle}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-display text-base font-semibold text-white">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-cream/80 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-cream/80 transition-colors hover:text-white"
                >
                  Full Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-cream/80 transition-colors hover:text-white"
                >
                  All Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-cream/80 transition-colors hover:text-white"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-cream/80 transition-colors hover:text-white"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.franchiseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cream/80 transition-colors hover:text-white"
                >
                  <span>Franchise</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-base font-semibold text-white">
              Canadian Locations
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {ACTIVE_STORES.map((store) => (
                <li key={store.slug}>
                  <Link
                    href={`/store/${store.slug}`}
                    className="group flex items-center justify-between gap-2 text-cream/80 transition-colors hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin
                        className="h-3.5 w-3.5 shrink-0 text-matcha-300"
                        aria-hidden="true"
                      />
                      <span>{store.shortName}</span>
                    </span>
                    <span className="text-xs text-cream/65">
                      {store.isFlagship
                        ? `Flagship · ${store.province}`
                        : store.province}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-base font-semibold text-white">
              Gotcha Rewards App
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-cream/80">
              Earn points on every cup, unlock seasonal drink drops, and redeem
              rewards across Canada.
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={SITE_CONFIG.rewardsApp.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-cream px-4 py-2.5 text-sm font-semibold text-matcha-900 transition-colors hover:bg-matcha-100"
              >
                <AppStoreIcon className="h-4 w-4" />
                <span>Download on App Store</span>
              </a>
              <a
                href={SITE_CONFIG.rewardsApp.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <GooglePlayIcon className="h-4 w-4" />
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-cream/70 sm:flex-row">
          <p>© 2026 Gotcha Bubble Tea Canada. All rights reserved.</p>
          <p>Handcrafted in Ontario &amp; Calgary, Alberta</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
