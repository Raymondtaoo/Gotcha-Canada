"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types/content";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback(
    (targetIndex: number) => {
      const container = trackRef.current;
      if (!container || testimonials.length === 0) return;
      const wrapped =
        ((targetIndex % testimonials.length) + testimonials.length) %
        testimonials.length;
      const slide = container.children[wrapped] as HTMLElement | undefined;
      if (slide) {
        slide.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
      setActiveIndex(wrapped);
    },
    [testimonials.length]
  );

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      let closestIdx = 0;
      let minDist = Number.POSITIVE_INFINITY;

      Array.from(container.children).forEach((child, idx) => {
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const dist = Math.abs(childCenter - centerX);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(activeIndex + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(activeIndex - 1);
    }
  };

  if (testimonials.length === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="focus:outline-none"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-ink-muted">
          Use the arrows or swipe to read guest reviews across our Canadian
          stores.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label="Previous review"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-matcha-900 transition-colors hover:border-matcha-500 hover:bg-matcha-100"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label="Next review"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-matcha-900 transition-colors hover:border-matcha-500 hover:bg-matcha-100"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Zero-dep CSS Scroll-Snap Track (all reviews in SSR HTML) */}
      <div
        ref={trackRef}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-2 sm:mx-0 sm:px-0"
      >
        {testimonials.map((testimonial, index) => (
          <figure
            key={testimonial.id}
            aria-roledescription="slide"
            aria-label={`Review ${index + 1} of ${testimonials.length}`}
            className="flex w-[88%] shrink-0 snap-center flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs sm:w-[72%] sm:p-7 lg:w-[46%]"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <div
                  className="flex items-center gap-1"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-boba-500 text-boba-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <Quote
                  className="h-6 w-6 text-matcha-300"
                  aria-hidden="true"
                />
              </div>

              <blockquote className="mt-4 text-sm leading-relaxed text-ink sm:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>

            <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-4">
              <div>
                <p className="font-display text-base font-semibold text-matcha-900">
                  {testimonial.author}
                </p>
                <Link
                  href={`/store/${testimonial.storeSlug}`}
                  className="text-xs font-medium text-matcha-700 underline-offset-2 hover:underline"
                >
                  {testimonial.storeName}
                </Link>
              </div>
              {testimonial.drinkTried && (
                <span className="rounded-full bg-matcha-100 px-3 py-1 text-xs font-semibold text-matcha-900">
                  Ordered: {testimonial.drinkTried}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Dot Indicators */}
      <div
        className="mt-6 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Choose a review"
      >
        {testimonials.map((testimonial, idx) => {
          const isCurrent = idx === activeIndex;
          return (
            <button
              key={testimonial.id}
              type="button"
              role="tab"
              aria-selected={isCurrent}
              aria-label={`View review by ${testimonial.author}`}
              onClick={() => scrollToIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                isCurrent
                  ? "w-8 bg-matcha-800"
                  : "w-2.5 bg-border hover:bg-matcha-500"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
