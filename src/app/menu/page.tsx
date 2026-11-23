import Link from "next/link";
import { ArrowRight, Clock, Info, MapPin } from "lucide-react";
import { CustomizationsGuide } from "@/components/menu/CustomizationsGuide";
import { FeaturedDrinks } from "@/components/menu/FeaturedDrinks";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  MENU_CATEGORIES,
  MENU_CUSTOMIZATIONS,
  MENU_HOURS,
  MENU_ITEMS,
  MENU_PRICING_NOTE,
} from "@/data/menu";
import {
  buildBreadcrumbJsonLd,
  buildMenuJsonLd,
  buildPageMetadata,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Menu",
  description:
    "Explore Gotcha Bubble Tea Canada's complete 176-item menu: Taiwanese milk teas, brown sugar fresh milk, handcrafted fruit teas, slushes, cheese foam macchiatos, and signature coconut desserts with current CAD pricing.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <div className="bg-cream">
      <JsonLd data={buildMenuJsonLd()} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
        ])}
      />

      {/* Editorial Menu Header */}
      <section className="border-b border-border bg-gradient-to-b from-surface-warm via-cream to-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-matcha-100 px-3 py-1 text-xs font-semibold text-matcha-900">
                  14 Drink Series · 176 Handcrafted Items
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-muted">
                  <Clock className="h-3.5 w-3.5 text-matcha-700" aria-hidden="true" />
                  Oakville Menu Hours: {MENU_HOURS}
                </span>
              </div>

              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-matcha-900 sm:text-5xl">
                Handcrafted Menu{" "}
                <span className="mt-1 block font-sans text-2xl font-medium text-matcha-700 sm:mt-0 sm:inline sm:text-3xl">
                  · 精選菜單
                </span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                Every cup is brewed to order using organic Taiwanese tea leaves
                harvested from our own farms — paired with house-cooked brown
                sugar pearls, fresh fruit, and velvety salted cheese foam.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 rounded-full bg-matcha-800 px-6 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-matcha-700"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Order from a Store
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#full-menu"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-matcha-900 transition-colors hover:border-matcha-500 hover:bg-matcha-100/50"
              >
                Search Full Menu
              </a>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-border bg-surface/80 px-4 py-3 text-xs leading-relaxed text-ink-muted sm:text-sm">
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-matcha-700"
              aria-hidden="true"
            />
            <p>{MENU_PRICING_NOTE}</p>
          </div>
        </div>
      </section>

      {/* Featured & Most Liked Showcase */}
      <FeaturedDrinks />

      {/* Drink Customization Reference */}
      <CustomizationsGuide groups={MENU_CUSTOMIZATIONS} />

      {/* Full Searchable & Filterable SSR Menu */}
      <MenuExplorer categories={MENU_CATEGORIES} items={MENU_ITEMS} />
    </div>
  );
}
