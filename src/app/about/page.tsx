import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Citrus,
  ExternalLink,
  HeartHandshake,
  MapPin,
  Sparkles,
  Sprout,
} from "lucide-react";
import { TestimonialsCarousel } from "@/components/about/TestimonialsCarousel";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/data/site";
import { ACTIVE_STORES } from "@/data/stores";
import { TESTIMONIALS } from "@/data/testimonials";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Discover the story behind Gotcha Bubble Tea Canada — organic single-origin tea harvested directly from our own farms in Taiwan, handcrafted fresh daily across Ontario and Calgary.",
  path: "/about",
});

const STORY_PILLARS = [
  {
    icon: Sprout,
    title: "Single-Origin Alishan Tea Farm",
    subtitle: "台灣自種茶園",
    description:
      "We farm our own tea directly in Taiwan — harvesting organic, sustainably cultivated oolong, jasmine, and black tea leaves for unmistakable aroma and clean finish in every cup.",
  },
  {
    icon: Sparkles,
    title: "Handcrafted Fresh Daily",
    subtitle: "每日新鮮現萃",
    description:
      "Every cup is brewed to order with customizable sweetness and ice levels, paired with warm house-cooked brown sugar tapioca pearls and velvety salted cheese foam.",
  },
  {
    icon: Citrus,
    title: "Real Fruit & Authentic Toppings",
    subtitle: "新鮮水果與配料",
    description:
      "From fresh mango chunks and real taro to pandan jelly, crystal boba, grass jelly, and signature coconut desserts, our recipes celebrate real ingredients over artificial shortcuts.",
  },
  {
    icon: HeartHandshake,
    title: "Warm Community Spaces",
    subtitle: "質感茶飲空間",
    description:
      "Designed as welcoming, modern tea lounges across Ontario and Calgary — inviting friends, students, and families to slow down and savour contemporary Taiwanese tea culture.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-cream">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      {/* Editorial Hero */}
      <section className="relative overflow-hidden bg-matcha-900 text-cream">
        <Image
          src="/images/b3.webp"
          alt="Signature Gotcha Bubble Tea drinks lined up in our tea bar"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-matcha-900/85 via-matcha-900/75 to-matcha-900/90" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-matcha-900/60 px-3.5 py-1 text-xs font-semibold tracking-wide text-matcha-100 uppercase backdrop-blur-xs">
              鮮饗茶 · We Farm Our Own Tea
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Redefining Tea Time Across Canada
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cream/90 sm:text-lg">
              Gotcha Bubble Tea began with a simple promise: elevate everyday
              bubble tea into a farm-to-cup experience rooted in authentic
              Taiwanese tea craftsmanship. Today we pour freshly brewed organic
              teas across {ACTIVE_STORES.length} Canadian locations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-matcha-900 transition-colors hover:bg-matcha-100"
              >
                Explore Our Menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 rounded-full border border-cream/35 bg-matcha-900/50 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-matcha-800/80"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Visit a Tea Bar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Farm-to-Cup Story & Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[240px_1fr]">
          <div className="mx-auto w-44 sm:w-52 lg:mx-0 lg:w-56">
            <div className="overflow-hidden rounded-full border-4 border-surface bg-surface shadow-md">
              <Image
                src={SITE_CONFIG.farmBadge.src}
                alt={SITE_CONFIG.farmBadge.alt}
                width={SITE_CONFIG.farmBadge.width}
                height={SITE_CONFIG.farmBadge.height}
                sizes="224px"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="inline-flex items-center rounded-full bg-matcha-100 px-3 py-1 text-xs font-semibold text-matcha-900">
              Our Heritage
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-matcha-900 sm:text-4xl">
              From Our Farms in Taiwan to Your Cup
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">
              Unlike mass-market chains that buy blended commodity dust, Gotcha
              grows and harvests its own tea leaves in Taiwan. That direct
              farm-to-cup connection lets our baristas brew crisp high-mountain
              oolong, fragrant jade jasmine, and robust Ceylon black teas that
              shine both on their own and layered with milk, fruit, or cheese
              foam.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {STORY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-xs transition-shadow hover:shadow-sm sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-matcha-100 text-matcha-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-matcha-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-medium text-matcha-700">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Team Feature */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface shadow-xs lg:grid lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Image
              src="/images/p3.webp"
              alt="Smiling Gotcha Oakville baristas standing in front of our We Farm Our Own Tea brick wall"
              width={1280}
              height={653}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <span className="text-xs font-semibold tracking-wide text-boba-700 uppercase">
              Our Tea Baristas
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold text-matcha-900 sm:text-3xl">
              Crafted by People Who Love Tea
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              Whether you are craving our #1 Most Liked Mango Parfait, a cozy
              cup of Brown Sugar Fresh Milk, or a customized 30%-sugar Jade
              Jasmine tea, our store teams across Oakville, Vaughan, and Calgary
              are always happy to recommend a new favourite.
            </p>
            <div className="mt-6">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-sm font-semibold text-matcha-800 transition-colors hover:text-matcha-700"
              >
                See moments in our Gallery
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Carousel */}
      <section
        aria-labelledby="testimonials-heading"
        className="border-y border-border bg-surface-warm py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-boba-100 px-3 py-1 text-xs font-semibold text-boba-700">
              5-Star Community Love
            </span>
            <h2
              id="testimonials-heading"
              className="mt-3 font-display text-3xl font-bold text-matcha-900 sm:text-4xl"
            >
              What Our Guests Say
            </h2>
          </div>

          <TestimonialsCarousel testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* Franchise Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 rounded-3xl border border-border bg-surface p-6 shadow-xs sm:p-10 lg:grid-cols-[260px_1fr] lg:gap-12">
          <div className="mx-auto text-center lg:mx-0">
            <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-matcha-100 bg-cream shadow-sm sm:h-56 sm:w-56">
              <Image
                src={SITE_CONFIG.founderPortrait.src}
                alt={SITE_CONFIG.founderPortrait.alt}
                width={SITE_CONFIG.founderPortrait.width}
                height={SITE_CONFIG.founderPortrait.height}
                sizes="224px"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 font-display text-sm font-semibold text-matcha-900">
              Master Franchise Owner
            </p>
            <p className="text-xs text-ink-muted">Gotcha Bubble Tea Canada</p>
          </div>

          <div>
            <span className="inline-flex items-center rounded-full bg-matcha-100 px-3 py-1 text-xs font-semibold text-matcha-900">
              Franchise Opportunities
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-matcha-900 sm:text-4xl">
              Become a Gotcha Franchisee
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
              Bring Canada&apos;s luxury Taiwanese tea bar experience to your
              neighbourhood. Partner with Gotcha Canada for direct farm-sourced
              tea supply, proven recipes, store design support, and dedicated
              training from our leadership team.
            </p>
            <div className="mt-7">
              <a
                href={SITE_CONFIG.franchiseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-matcha-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-matcha-700"
              >
                Explore Franchise Information
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us CTA Banner */}
      <section className="relative overflow-hidden bg-matcha-900 text-cream">
        <Image
          src="/images/b1.webp"
          alt="Gotcha Brown Sugar Boba Fresh Milk crafted fresh"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-matcha-900/82" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready for Your Next Cup?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
            Visit any of our {ACTIVE_STORES.length} stores across Ontario and
            Calgary, or browse our full menu before ordering online.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-matcha-900 transition-colors hover:bg-matcha-100"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Find a Location
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-matcha-900/50 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-matcha-800/80"
            >
              Browse Full Menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
