"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import type { GalleryCategory, GalleryPhoto } from "@/types/content";

interface GalleryGridProps {
  photos: GalleryPhoto[];
}

type FilterOption = "all" | GalleryCategory;

export function GalleryGrid({ photos }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<FilterOption>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const counts = useMemo(() => {
    const map: Record<GalleryCategory, number> = {
      drinks: 0,
      stores: 0,
      moments: 0,
    };
    for (const photo of photos) {
      map[photo.category] += 1;
    }
    return map;
  }, [photos]);

  const filteredPhotos = useMemo(
    () =>
      selectedCategory === "all"
        ? photos
        : photos.filter((photo) => photo.category === selectedCategory),
    [photos, selectedCategory]
  );

  const handleCategoryChange = (category: FilterOption) => {
    setSelectedCategory(category);
    setActiveIndex(null);
  };

  const filterTabs: { id: FilterOption; label: string; count: number }[] = [
    { id: "all", label: "All Photos", count: photos.length },
    { id: "drinks", label: "Drinks", count: counts.drinks },
    { id: "stores", label: "Stores", count: counts.stores },
    { id: "moments", label: "Moments", count: counts.moments },
  ];

  return (
    <section
      aria-label="Photo gallery"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* Category Filter Pills */}
      <div
        className="mb-8 flex flex-wrap items-center justify-between gap-4"
        role="group"
        aria-label="Filter gallery by category"
      >
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const active = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={active}
                onClick={() => handleCategoryChange(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-matcha-800 text-white"
                    : "border border-border bg-surface text-ink hover:border-matcha-500 hover:bg-matcha-100/60"
                }`}
              >
                {tab.label}{" "}
                <span className={active ? "text-matcha-100" : "text-ink-muted"}>
                  ({tab.count})
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-xs text-ink-muted sm:text-sm">
          Click any photo to view full size
        </p>
      </div>

      {/* Pure CSS Multi-Column Masonry (0 KB masonry library, CLS = 0) */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {filteredPhotos.map((photo, index) => (
          <div key={photo.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open full-size photo: ${photo.caption ?? photo.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-xs transition-shadow hover:shadow-md"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-matcha-900/80 via-matcha-900/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

              <span className="pointer-events-none absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-matcha-900/75 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </span>

              {photo.caption && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3.5 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:text-sm">
                  {photo.caption}
                </div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Zero-dep Accessible Fullscreen Lightbox */}
      {activeIndex !== null && (
        <GalleryLightbox
          photos={filteredPhotos}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}

export default GalleryGrid;
