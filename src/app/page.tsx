import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CupSoda,
  MapPin,
  Sparkles,
  Sprout,
  Star,
} from "lucide-react";
import {
  AppStoreIcon,
  GooglePlayIcon,
  InstagramIcon,
} from "@/components/icons/BrandIcons";
import { StoreLocator } from "@/components/locations/StoreLocator";
import { HOME_GALLERY_HIGHLIGHTS } from "@/data/gallery";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/menu";
import { SITE_CONFIG } from "@/data/site";
import { ACTIVE_STORES } from "@/data/stores";
import { formatCadPrice } from "@/lib/format";
import { buildPageMetadata } from "@/lib/seo";
import type { MenuItem } from "@/types/menu";

const HOME_TITLE =
  "Gotcha Bubble Tea Canada | Handcrafted Taiwanese Bubble Tea";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: HOME_TITLE,
    description: SITE_CONFIG.description,
    path: "/",
    ogImage: {
      src: "/images/bg1.webp",
      width: 1920,
      height: 1152,
      alt: "Gotcha Bubble Tea Canada — Handcrafted Taiwanese Bubble Tea",
    },
  }),
  title: {
    absolute: HOME_TITLE,
  },
};

const SIGNATURE_DRINK_IDS = [
  "mango-parfait",
  "mango-sensation",
  "brown-sugar-fresh-milk",
  "strawberry-pink",
  "gotcha-signature-fruit-tea-xl",
  "mango-macchiato",
] as const;

const MENU_BY_ID = new Map<string, MenuItem>(
  MENU_ITEMS.map((item) => [item.id, item])
);

const SIGNATURE_DRINKS: MenuItem[] = SIGNATURE_DRINK_IDS.map((id) =>
  MENU_BY_ID.get(id)
).filter((item): item is MenuItem => Boolean(item));

const CRAFT_PILLARS = [
  {
    icon: Sprout,
    title: "Own Tea Farm in Taiwan",
    description:
      "Every tea base starts on our family-run mountain estates in Taiwan—sustainably harvested for clean aroma and smooth finish.",
  },
  {
    icon: CupSoda,
    title: "Brewed Fresh Every Cup",
    description:
      "Each cup is individually brewed to order with customizable ice and sweetness levels, never sitting in stale batches.",
  },
  {
    icon: Sparkles,
    title: "Authentic Toppings & Real Fruit",
    description:
      "From warm slow-cooked brown sugar pearls and salted cheese foam to fresh mango chunks, pandan jelly, and crystal boba.",
  },
] as const;

export default function HomePage() {
  const heroStats = [
    { value: `${MENU_CATEGORIES.length}`, label: "Drink Series" },
    { value: `${MENU_ITEMS.length}`, label: "Menu Items" },
    { value: `${ACTIVE_STORES.length}`, label: "Canadian Stores" },
    { value: "100%", label: "Farm-Grown Tea" },
  ];

  return (
    <>
      {/* 1. Editorial Hero */}
      <section className="relative overflow-hidden bg-matcha-900 text-cream">
        <Image
          src="/images/b8.webp"
          alt="Gotcha barista garnishing five vibrant handcrafted Taiwanese bubble teas"
          fill
          preload
          sizes="100vw"
          quality={82}
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-matcha-900/92 via-matcha-900/76 to-matcha-900/38"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-matcha-900/85 via-transparent to-matcha-900/35"
        />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col justify-between px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[680px] lg:px-8">

          <div className="relative z-10 max-w-2xl pt-6 sm:pt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-matcha-900/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-matcha-100 backdrop-blur-md sm:text-sm">
              <Sprout className="h-4 w-4 text-matcha-300" aria-hidden="true" />
              <span>Single-Origin Alishan Tea · Crafted Fresh in Canada</span>
            </div>

            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Discover Your Flavour,{" "}
              <span className="text-matcha-300">Farmed &amp; Brewed</span>{" "}
              Fresh.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
              Canada&apos;s luxury Taiwanese tea bar—pairing organic estate-grown
              tea leaves with warm brown sugar tapioca, fresh fruit, and velvety
              cheese foam across Ontario and Calgary.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-matcha-900 shadow-lg transition-colors hover:bg-matcha-100 sm:text-base"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-matcha-900/60 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:text-base"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Find a Store</span>
              </Link>
            </div>
          </div>

          <div className="relative z-10 mt-12 grid grid-cols-2 gap-3 rounded-2xl border border-white/15 bg-matcha-900/70 p-4 backdrop-blur-md sm:grid-cols-4 sm:gap-6 sm:p-5">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col border-white/15 sm:border-r sm:last:border-r-0"
              >
                <span className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-0.5 text-xs font-medium text-cream/80 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Most Liked & Signature Drinks */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-widest text-boba-700 uppercase">
              Most Liked &amp; Signature Pours · 人氣精選
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-matcha-900 sm:text-4xl">
              Fan Favourites Across Canada
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
              Handcrafted highlights from our bilingual {MENU_ITEMS.length}-item
              menu—from our #1 Most Liked Mango Parfait to tiger-striped Brown
              Sugar Fresh Milk.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-matcha-700/30 bg-matcha-100 px-5 py-2.5 text-sm font-semibold text-matcha-900 transition-colors hover:bg-matcha-800 hover:text-white"
          >
            <span>Explore All {MENU_ITEMS.length} Drinks</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURE_DRINKS.map((drink) => (
            <article
              key={drink.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-matcha-500/50 hover:shadow-md"
            >
              {drink.image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-warm">
                  <Image
                    src={drink.image.src}
                    alt={drink.image.alt}
                    width={drink.image.width}
                    height={drink.image.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {drink.mostLikedRank ? (
                      <span className="rounded-full bg-boba-700 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        #{drink.mostLikedRank} Most Liked
                      </span>
                    ) : drink.isPopular ? (
                      <span className="rounded-full bg-boba-100/95 px-3 py-1 text-xs font-semibold text-boba-700 backdrop-blur-sm">
                        Popular
                      </span>
                    ) : (
                      <span className="rounded-full bg-matcha-900/85 px-3 py-1 text-xs font-semibold text-cream backdrop-blur-sm">
                        Featured
                      </span>
                    )}
                    {drink.rating ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-surface/95 px-2.5 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur-sm">
                        <Star
                          className="h-3.5 w-3.5 fill-boba-500 text-boba-500"
                          aria-hidden="true"
                        />
                        <span>
                          {drink.rating.positivePercent}% (
                          {drink.rating.reviewCount})
                        </span>
                      </span>
                    ) : null}
                  </div>
                </div>
              ) : null}

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-matcha-900">
                      {drink.nameEn}
                    </h3>
                    {drink.nameZh ? (
                      <p className="text-sm font-medium text-ink-muted">
                        {drink.nameZh}
                      </p>
                    ) : null}
                  </div>
                  <span className="shrink-0 rounded-full bg-matcha-100 px-3 py-1 text-sm font-bold text-matcha-900">
                    {formatCadPrice(drink.price.base)}
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {drink.description}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span className="text-xs font-medium text-ink-muted">
                    {drink.price.sizeLabel
                      ? `Size ${drink.price.sizeLabel} · CAD`
                      : "Base CAD price"}
                  </span>
                  <Link
                    href={`/menu#category-${drink.categoryId}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-matcha-800 hover:text-matcha-700"
                  >
                    <span>See series</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. The Gotcha Craft */}
      <section className="border-y border-border bg-surface-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="relative lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-md">
                <Image
                  src="/images/bg1.webp"
                  alt="Warm blush-pink Gotcha tea bar interior with a signature Brown Sugar Boba Fresh Milk"
                  width={1920}
                  height={1152}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="aspect-[5/3] h-auto w-full object-cover"
                />
              </div>
              <div className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-border bg-surface p-3 shadow-sm sm:absolute sm:-right-4 sm:-bottom-5 sm:mt-0">
                <Image
                  src={SITE_CONFIG.farmBadge.src}
                  alt={SITE_CONFIG.farmBadge.alt}
                  width={80}
                  height={80}
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
                <div className="pr-2">
                  <p className="font-display text-sm font-semibold text-matcha-900">
                    We Farm Our Own Tea
                  </p>
                  <p className="text-xs text-ink-muted">
                    Direct from Taiwan&apos;s mountain estates
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-widest text-matcha-700 uppercase">
                The Gotcha Craft · 鮮饗茶道
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-matcha-900 sm:text-4xl">
                From Our Own Tea Farms Straight to Your Cup
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                Gotcha redefines everyday tea time with single-origin leaves,
                natural fruit purées, and freshly prepared toppings in welcoming
                modern tea bars.
              </p>

              <div className="mt-6 space-y-4">
                {CRAFT_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-matcha-100 text-matcha-800">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-matcha-900">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-matcha-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-matcha-900"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visit Us Across Canada */}
      <section
        id="locations"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-widest text-matcha-700 uppercase">
              Ontario &amp; Alberta
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-matcha-900 sm:text-4xl">
              Visit Us Across Canada
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
              Select a tea bar to view live hours, get directions, or order
              ahead for pickup and delivery.
            </p>
          </div>
          <Link
            href="/locations"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-matcha-900 transition-colors hover:border-matcha-500 hover:bg-matcha-100"
          >
            <span>Browse All Store Pages</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8">
          <StoreLocator stores={ACTIVE_STORES} />
        </div>
      </section>

      {/* 5. Gotcha Moments (Static optimized photo showcase — zero 3rd-party embed scripts) */}
      <section className="border-t border-border bg-surface-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-widest text-boba-700 uppercase">
                Community &amp; Tea Bar Vibes
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-matcha-900 sm:text-4xl">
                Gotcha Moments
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                Fresh pours, blush-pink seating nooks, and sweet catch-ups with
                friends. Tag{" "}
                <span className="font-semibold text-matcha-800">
                  {SITE_CONFIG.social.instagramHandle}
                </span>{" "}
                to share your cup.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SITE_CONFIG.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-matcha-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-matcha-900"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>Follow on Instagram</span>
              </a>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-matcha-900 transition-colors hover:bg-matcha-100"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {HOME_GALLERY_HIGHLIGHTS.slice(0, 8).map((photo) => (
              <Link
                key={photo.id}
                href="/gallery"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {photo.caption ? (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-matcha-900/90 via-matcha-900/45 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <p className="line-clamp-2 text-xs font-medium text-white">
                      {photo.caption}
                    </p>
                  </div>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gotcha Rewards App */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-matcha-900 px-6 py-12 text-cream shadow-lg sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-boba-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-matcha-500/20 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-boba-100 uppercase">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Gotcha Rewards Program</span>
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                Sip, Earn Points &amp; Unlock Free Drinks
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/85 sm:text-base">
                Join the Gotcha Rewards app to collect points on every purchase,
                enjoy birthday treats, and get early access to seasonal drink
                releases.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SITE_CONFIG.rewardsApp.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-matcha-900 shadow-sm transition-colors hover:bg-matcha-100"
              >
                <AppStoreIcon className="h-5 w-5" />
                <span>Download on App Store</span>
              </a>
              <a
                href={SITE_CONFIG.rewardsApp.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <GooglePlayIcon className="h-5 w-5" />
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
