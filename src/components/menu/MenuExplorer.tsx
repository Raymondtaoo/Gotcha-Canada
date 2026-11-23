"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { RotateCcw, Search, Sparkles, Star, X } from "lucide-react";
import { MenuCard } from "@/components/menu/MenuCard";
import type {
  MenuAccentTone,
  MenuCategory,
  MenuCategoryId,
  MenuItem,
} from "@/types/menu";

interface MenuExplorerProps {
  categories: MenuCategory[];
  items: MenuItem[];
}

type QuickFilter = "all" | "featured" | "popular" | "top-rated";

const ACCENT_PILL_STYLES: Record<MenuAccentTone, string> = {
  matcha: "bg-matcha-100 text-matcha-900",
  boba: "bg-boba-100 text-boba-700",
  berry: "bg-rose-100 text-rose-900",
  mango: "bg-amber-100 text-amber-900",
  taro: "bg-purple-100 text-purple-900",
  citrus: "bg-lime-100 text-lime-900",
};

export function MenuExplorer({ categories, items }: MenuExplorerProps) {
  const [query, setQuery] = useState("");
  const [quickFilter, setQuickFilter] = useState<QuickFilter>("all");
  const [selectedCategory, setSelectedCategory] = useState<
    MenuCategoryId | "all"
  >("all");

  const stats = useMemo(() => {
    const countsByCategory = new Map<MenuCategoryId, number>();
    let featured = 0;
    let popular = 0;
    let topRated = 0;

    for (const item of items) {
      countsByCategory.set(
        item.categoryId,
        (countsByCategory.get(item.categoryId) ?? 0) + 1
      );
      if (item.isFeatured) featured += 1;
      if (item.isPopular || item.mostLikedRank) popular += 1;
      if (item.rating && item.rating.positivePercent >= 90) topRated += 1;
    }

    return { countsByCategory, featured, popular, topRated };
  }, [items]);

  const categoryNameMap = useMemo(
    () =>
      new Map(
        categories.map((cat) => [
          cat.id,
          `${cat.nameEn} ${cat.nameZh} ${cat.subtitle}`.toLowerCase(),
        ])
      ),
    [categories]
  );

  const filteredSections = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    const matchedItems = items.filter((item) => {
      if (selectedCategory !== "all" && item.categoryId !== selectedCategory) {
        return false;
      }

      if (quickFilter === "featured" && !item.isFeatured) return false;
      if (quickFilter === "popular" && !item.isPopular && !item.mostLikedRank) {
        return false;
      }
      if (
        quickFilter === "top-rated" &&
        (!item.rating || item.rating.positivePercent < 90)
      ) {
        return false;
      }

      if (trimmed) {
        const haystack = [
          item.nameEn,
          item.nameZh ?? "",
          item.description,
          item.descriptionZh ?? "",
          ...(item.includedToppings ?? []),
          categoryNameMap.get(item.categoryId) ?? "",
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(trimmed);
      }

      return true;
    });

    const grouped = new Map<MenuCategoryId, MenuItem[]>();
    for (const item of matchedItems) {
      const list = grouped.get(item.categoryId);
      if (list) {
        list.push(item);
      } else {
        grouped.set(item.categoryId, [item]);
      }
    }

    return categories
      .filter((category) => grouped.has(category.id))
      .map((category) => ({
        category,
        items: grouped.get(category.id) ?? [],
      }));
  }, [categories, items, query, quickFilter, selectedCategory, categoryNameMap]);

  const visibleCount = useMemo(
    () => filteredSections.reduce((sum, sec) => sum + sec.items.length, 0),
    [filteredSections]
  );

  const hasActiveFilters =
    query.trim() !== "" ||
    quickFilter !== "all" ||
    selectedCategory !== "all";

  const resetFilters = () => {
    setQuery("");
    setQuickFilter("all");
    setSelectedCategory("all");
  };

  return (
    <div id="full-menu" className="scroll-mt-20">
      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-16 z-20 border-y border-border bg-cream/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl space-y-3 px-4 py-3.5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <label htmlFor="menu-search" className="sr-only">
                Search menu drinks, Chinese names, or toppings
              </label>
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-ink-muted"
                aria-hidden="true"
              />
              <input
                id="menu-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search drinks, 中文名, taro, cheese foam, boba..."
                className="w-full rounded-full border border-border bg-surface py-2.5 pr-10 pl-10 text-sm text-ink placeholder:text-ink-muted focus:border-matcha-700 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search query"
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-ink-muted transition-colors hover:bg-surface-warm hover:text-ink"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Quick Filter Chips */}
            <div
              className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-0.5 md:pb-0"
              role="group"
              aria-label="Quick menu filters"
            >
              {(
                [
                  { id: "all", label: `All (${items.length})` },
                  { id: "featured", label: `Featured (${stats.featured})` },
                  { id: "popular", label: `Popular (${stats.popular})` },
                  {
                    id: "top-rated",
                    label: `Top Rated 90%+ (${stats.topRated})`,
                  },
                ] as const
              ).map((chip) => {
                const active = quickFilter === chip.id;
                return (
                  <button
                    key={chip.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setQuickFilter(chip.id)}
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      active
                        ? "bg-matcha-800 text-white"
                        : "border border-border bg-surface text-ink hover:border-matcha-500 hover:bg-matcha-100/50"
                    }`}
                  >
                    {chip.id === "featured" && (
                      <Sparkles className="h-3 w-3" aria-hidden="true" />
                    )}
                    {chip.id === "top-rated" && (
                      <Star className="h-3 w-3" aria-hidden="true" />
                    )}
                    {chip.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Horizontal Category Pills */}
          <div
            className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter by drink series"
          >
            <button
              type="button"
              aria-pressed={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                selectedCategory === "all"
                  ? "bg-boba-700 text-white"
                  : "border border-border bg-surface text-ink-muted hover:border-boba-500/60 hover:text-ink"
              }`}
            >
              All Series ({categories.length})
            </button>
            {categories.map((category) => {
              const active = selectedCategory === category.id;
              const count = stats.countsByCategory.get(category.id) ?? 0;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    active
                      ? "bg-boba-700 text-white"
                      : "border border-border bg-surface text-ink-muted hover:border-boba-500/60 hover:text-ink"
                  }`}
                >
                  {category.nameEn.split(" (")[0]}{" "}
                  <span
                    className={active ? "text-boba-100" : "text-ink-muted/80"}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Summary + Category Sections */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-ink-muted" role="status" aria-live="polite">
            Showing{" "}
            <span className="font-semibold text-ink">{visibleCount}</span> of{" "}
            <span className="font-semibold text-ink">{items.length}</span>{" "}
            handcrafted items across{" "}
            <span className="font-semibold text-ink">
              {filteredSections.length}
            </span>{" "}
            {filteredSections.length === 1 ? "series" : "series"}
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-matcha-900 transition-colors hover:bg-matcha-100"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reset filters
            </button>
          )}
        </div>

        {filteredSections.length === 0 ? (
          <div className="rounded-3xl border border-border bg-surface px-6 py-16 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-warm text-matcha-800">
              <Search className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-matcha-900">
              No matching drinks found
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
              Try searching for a flavour like mango, taro, lychee, brown sugar,
              or reset your active filters to view all {items.length} menu
              items.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-matcha-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-matcha-700"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="space-y-14">
            {filteredSections.map(({ category, items: categoryItems }) => (
              <section
                key={category.id}
                id={`category-${category.id}`}
                aria-labelledby={`heading-${category.id}`}
                className="scroll-mt-44"
              >
                {/* Category Editorial Banner */}
                <div className="mb-6 grid overflow-hidden rounded-3xl border border-border bg-surface shadow-xs md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr]">
                  <div className="relative h-44 w-full overflow-hidden bg-surface-warm md:h-auto md:min-h-[168px]">
                    <Image
                      src={category.bannerImage.src}
                      alt={category.bannerImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                          ACCENT_PILL_STYLES[category.accentTone]
                        }`}
                      >
                        {categoryItems.length}{" "}
                        {categoryItems.length === 1 ? "item" : "items"}
                      </span>
                      <span className="text-sm font-medium text-matcha-700">
                        {category.nameZh}
                      </span>
                    </div>
                    <h3
                      id={`heading-${category.id}`}
                      className="mt-2 font-display text-2xl font-bold text-matcha-900 sm:text-3xl"
                    >
                      {category.nameEn}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-muted">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Category Items Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryItems.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuExplorer;
