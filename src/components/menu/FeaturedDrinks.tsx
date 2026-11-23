import Image from "next/image";
import { ArrowDownRight, Flame, Sparkles, Star } from "lucide-react";
import {
  FEATURED_MENU_ITEMS,
  MENU_ITEMS,
  getMenuCategoryById,
} from "@/data/menu";
import { formatCadPrice } from "@/lib/format";
import type { MenuItem } from "@/types/menu";

const SHOWCASE_IDS = [
  "mango-parfait",
  "lychee-fruit-tea",
  "gotcha-signature-milk-tea",
  "brown-sugar-fresh-milk",
  "mango-sensation",
  "gotcha-signature-fruit-tea-xl",
  "honey-lemon-green-fruit-tea",
  "strawberry-pink",
] as const;

function getShowcaseItems(): MenuItem[] {
  const byId = new Map(MENU_ITEMS.map((item) => [item.id, item]));
  const curated = SHOWCASE_IDS.map((id) => byId.get(id)).filter(
    (item): item is MenuItem => Boolean(item)
  );
  return curated.length > 0 ? curated : FEATURED_MENU_ITEMS.slice(0, 8);
}

export function FeaturedDrinks() {
  const showcaseItems = getShowcaseItems();

  return (
    <section
      aria-labelledby="featured-drinks-heading"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-boba-100 px-3 py-1 text-xs font-semibold tracking-wide text-boba-700 uppercase">
            <Flame className="h-3.5 w-3.5" aria-hidden="true" />
            Fan Favourites &amp; Most Liked
          </span>
          <h2
            id="featured-drinks-heading"
            className="mt-2 font-display text-2xl font-bold text-matcha-900 sm:text-3xl"
          >
            Most Loved at Gotcha
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Top-rated Oakville favourites — tap any drink to jump straight to
            its series.
          </p>
        </div>
        <a
          href="#full-menu"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-matcha-800 transition-colors hover:text-matcha-700"
        >
          Browse all 176 items
          <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
        {showcaseItems.map((item, idx) => {
          const category = getMenuCategoryById(item.categoryId);
          const hasSoloPhoto = Boolean(
            item.image && !item.image.isCategoryFallback
          );

          return (
            <a
              key={item.id}
              href={`#category-${item.categoryId}`}
              className="group flex w-[78vw] max-w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-xs transition-all hover:-translate-y-0.5 hover:border-matcha-500/60 hover:shadow-md sm:w-auto sm:max-w-none"
            >
              {hasSoloPhoto && item.image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-warm">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    preload={idx < 2}
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-matcha-900/65 to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.mostLikedRank && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-boba-700 px-2.5 py-1 text-xs font-semibold text-white shadow-xs">
                        #{item.mostLikedRank} Most Liked
                      </span>
                    )}
                    {!item.mostLikedRank && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-matcha-900/90 px-2.5 py-1 text-xs font-semibold text-cream shadow-xs">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        {item.isFeatured ? "Featured" : "House Special"}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative flex aspect-[4/3] w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-matcha-900 via-matcha-800 to-matcha-700 p-4 text-cream">
                  <div className="flex items-center justify-between gap-2">
                    {item.mostLikedRank ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-boba-500 px-2.5 py-1 text-xs font-semibold text-white">
                        #{item.mostLikedRank} Most Liked
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-cream/15 px-2.5 py-1 text-xs font-semibold text-cream">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        Featured
                      </span>
                    )}
                    {category && (
                      <span className="text-xs font-medium text-matcha-100">
                        {category.nameZh}
                      </span>
                    )}
                  </div>
                  <div className="mt-auto">
                    {item.nameZh && (
                      <p className="font-display text-2xl font-bold tracking-tight text-cream/95">
                        {item.nameZh}
                      </p>
                    )}
                    <p className="mt-1 text-xs font-medium text-matcha-100/90">
                      {category?.nameEn ?? "Signature Series"}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-base font-semibold leading-snug text-ink group-hover:text-matcha-800">
                      {item.nameEn}
                    </h3>
                    <span className="shrink-0 font-display text-base font-bold text-matcha-900">
                      {formatCadPrice(item.price.base)}
                    </span>
                  </div>
                  {item.nameZh && (
                    <p className="mt-0.5 text-xs text-ink-muted">
                      {item.nameZh}
                    </p>
                  )}
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2 border-t border-border/80 pt-2.5 text-xs">
                  {item.rating ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-boba-700">
                      <Star
                        className="h-3.5 w-3.5 fill-boba-500 text-boba-500"
                        aria-hidden="true"
                      />
                      {item.rating.positivePercent}% ({item.rating.reviewCount})
                    </span>
                  ) : (
                    <span className="font-medium text-matcha-700">
                      Signature Craft
                    </span>
                  )}
                  <span className="inline-flex items-center gap-0.5 font-semibold text-matcha-800">
                    {category?.nameEn.split(" (")[0] ?? "View"}
                    <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedDrinks;
