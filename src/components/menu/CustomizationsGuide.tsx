"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import type { CustomizationGroup } from "@/types/menu";

interface CustomizationsGuideProps {
  groups: CustomizationGroup[];
}

export function CustomizationsGuide({ groups }: CustomizationsGuideProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      aria-labelledby="customizations-heading"
      className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-surface-warm">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="customizations-panel"
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-matcha-100/50 sm:px-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-matcha-800 text-white">
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="customizations-heading"
                className="font-display text-lg font-bold text-matcha-900"
              >
                Customize Your Drink{" "}
                <span className="font-sans text-sm font-medium text-ink-muted">
                  · 客製化指南
                </span>
              </h2>
              <p className="text-xs text-ink-muted sm:text-sm">
                Hot or Iced · Sweetness 0%–100% · Ice Levels · 12 Signature
                Toppings
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-matcha-900">
            {isOpen ? "Hide guide" : "View options"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </span>
        </button>

        <div
          id="customizations-panel"
          hidden={!isOpen}
          className="border-t border-border bg-surface px-5 py-6 sm:px-6"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div
                key={group.id}
                className="rounded-xl border border-border/80 bg-cream/60 p-4"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-matcha-900">
                    {group.labelEn}
                  </h3>
                  <span className="text-xs font-medium text-matcha-700">
                    {group.labelZh}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                  {group.description}
                </p>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.options.map((option) => (
                    <li
                      key={option.label}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink"
                      title={option.note}
                    >
                      <span>{option.label}</span>
                      {option.labelZh && (
                        <span className="text-[11px] text-ink-muted">
                          {option.labelZh}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomizationsGuide;
