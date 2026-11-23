"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryPhoto } from "@/types/content";

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

const CATEGORY_LABELS: Record<GalleryPhoto["category"], string> = {
  drinks: "Drinks",
  stores: "Stores",
  moments: "Moments",
};

export function GalleryLightbox({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const photo = photos[activeIndex];
  const total = photos.length;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onNavigate((activeIndex + 1) % total);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        onNavigate((activeIndex - 1 + total) % total);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, total, onClose, onNavigate]);

  if (!photo) return null;

  const handlePrev = () => onNavigate((activeIndex - 1 + total) % total);
  const handleNext = () => onNavigate((activeIndex + 1) % total);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery photo ${activeIndex + 1} of ${total}: ${photo.caption ?? photo.alt}`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-matcha-900/92 p-4 backdrop-blur-sm sm:p-8"
    >
      {/* Top Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="mb-3 flex w-full max-w-5xl items-center justify-between gap-4 text-cream"
      >
        <div className="flex items-center gap-2.5 text-xs font-semibold sm:text-sm">
          <span className="rounded-full bg-cream/15 px-3 py-1 text-cream">
            {activeIndex + 1} / {total}
          </span>
          <span className="rounded-full bg-boba-500/90 px-3 py-1 text-white">
            {CATEGORY_LABELS[photo.category]}
          </span>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 bg-matcha-900/70 text-cream transition-colors hover:bg-cream hover:text-matcha-900"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-5xl flex-1 items-center justify-center"
      >
        {total > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-0 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-matcha-900/80 text-cream shadow-md transition-colors hover:bg-cream hover:text-matcha-900 sm:left-2"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
        )}

        <figure className="flex max-h-full flex-col items-center px-12 sm:px-16">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="90vw"
            className="h-auto max-h-[76vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
          />
          <figcaption className="mt-4 max-w-2xl text-center text-sm text-cream/95">
            {photo.caption ?? photo.alt}
          </figcaption>
        </figure>

        {total > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-0 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-matcha-900/80 text-cream shadow-md transition-colors hover:bg-cream hover:text-matcha-900 sm:right-2"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}

export default GalleryLightbox;
