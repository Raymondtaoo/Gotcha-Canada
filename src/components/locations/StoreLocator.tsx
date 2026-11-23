"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { DoorDashIcon, UberEatsIcon } from "@/components/icons/BrandIcons";
import { toTelHref } from "@/lib/format";
import type {
  ActiveStoreSlug,
  StoreLocation,
  StoreProvince,
} from "@/types/store";

type ProvinceFilter = "ALL" | StoreProvince;

interface StoreLocatorProps {
  stores: StoreLocation[];
  initialSlug?: ActiveStoreSlug;
}

export function StoreLocator({ stores, initialSlug }: StoreLocatorProps) {
  const [province, setProvince] = useState<ProvinceFilter>("ALL");
  const [selectedSlug, setSelectedSlug] = useState<ActiveStoreSlug>(
    initialSlug ?? stores[0]?.slug ?? "oakville"
  );

  const ontarioCount = useMemo(
    () => stores.filter((s) => s.province === "ON").length,
    [stores]
  );
  const albertaCount = useMemo(
    () => stores.filter((s) => s.province === "AB").length,
    [stores]
  );

  const filteredStores = useMemo(
    () =>
      province === "ALL"
        ? stores
        : stores.filter((store) => store.province === province),
    [province, stores]
  );

  const selectedStore =
    filteredStores.find((store) => store.slug === selectedSlug) ??
    filteredStores[0] ??
    stores[0];

  const handleProvinceChange = (nextProvince: ProvinceFilter) => {
    setProvince(nextProvince);
    const nextList =
      nextProvince === "ALL"
        ? stores
        : stores.filter((store) => store.province === nextProvince);
    if (
      nextList.length > 0 &&
      !nextList.some((store) => store.slug === selectedSlug)
    ) {
      setSelectedSlug(nextList[0].slug);
    }
  };

  if (!selectedStore) {
    return null;
  }

  const selectedTelHref = selectedStore.phone
    ? toTelHref(selectedStore.phone)
    : "";

  const filterTabs: { id: ProvinceFilter; label: string; count: number }[] = [
    { id: "ALL", label: "All Stores", count: stores.length },
    { id: "ON", label: "Ontario", count: ontarioCount },
    { id: "AB", label: "Alberta", count: albertaCount },
  ];

  return (
    <div className="space-y-6">
      <div
        role="tablist"
        aria-label="Filter Gotcha locations by province"
        className="flex flex-wrap items-center gap-2"
      >
        {filterTabs.map((tab) => {
          const isActive = province === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleProvinceChange(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-matcha-800 text-white shadow-sm"
                  : "border border-border bg-surface text-ink hover:border-matcha-500 hover:bg-matcha-100/60 hover:text-matcha-900"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-3 lg:col-span-5">
          {filteredStores.map((store) => {
            const isSelected = store.slug === selectedStore.slug;
            return (
              <button
                key={store.slug}
                type="button"
                onClick={() => setSelectedSlug(store.slug)}
                aria-pressed={isSelected}
                className={`w-full rounded-2xl border p-4 text-left transition-all ${
                  isSelected
                    ? "border-matcha-700 bg-matcha-100/65 shadow-sm ring-1 ring-matcha-700/20"
                    : "border-border bg-surface hover:border-matcha-500/60 hover:bg-surface-warm/60"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-lg font-semibold text-matcha-900">
                        {store.name}
                      </span>
                      {store.isFlagship ? (
                        <span className="rounded-full bg-boba-100 px-2.5 py-0.5 text-[11px] font-semibold text-boba-700">
                          Flagship
                        </span>
                      ) : null}
                    </div>
                    {store.address.landmark ? (
                      <p className="mt-0.5 text-xs font-semibold text-boba-700">
                        {store.address.landmark}
                      </p>
                    ) : null}
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      isSelected
                        ? "bg-matcha-800 text-white"
                        : "bg-surface-warm text-ink-muted"
                    }`}
                  >
                    {store.province}
                  </span>
                </div>

                <p className="mt-2 flex items-start gap-2 text-sm text-ink-muted">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-matcha-700"
                    aria-hidden="true"
                  />
                  <span>{store.address.formatted}</span>
                </p>

                <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
                  {store.hours[0] ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock
                        className="h-3.5 w-3.5 text-matcha-700"
                        aria-hidden="true"
                      />
                      <span>
                        {store.hours[0].label}: {store.hours[0].displayHours}
                      </span>
                    </span>
                  ) : null}
                  {store.phone ? (
                    <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                      <Phone
                        className="h-3.5 w-3.5 text-matcha-700"
                        aria-hidden="true"
                      />
                      <span>{store.phone}</span>
                    </span>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm lg:col-span-7">
          <div className="border-b border-border p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-2xl font-semibold text-matcha-900">
                    {selectedStore.name}
                  </h3>
                  {selectedStore.isFlagship ? (
                    <span className="rounded-full bg-boba-100 px-3 py-0.5 text-xs font-semibold text-boba-700">
                      Ontario Flagship
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-ink-muted">
                  {selectedStore.tagline}
                </p>
              </div>

              <Link
                href={`/store/${selectedStore.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-matcha-700/30 bg-matcha-100/70 px-4 py-2 text-xs font-semibold text-matcha-900 transition-colors hover:bg-matcha-800 hover:text-white"
              >
                <span>Store Page</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2.5 text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-matcha-700"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-ink">
                      {selectedStore.address.formatted}
                    </p>
                    {selectedStore.address.landmark ? (
                      <p className="text-xs text-ink-muted">
                        {selectedStore.address.landmark}
                      </p>
                    ) : null}
                  </div>
                </div>

                {selectedStore.phone && selectedTelHref ? (
                  <div className="flex items-center gap-2.5">
                    <Phone
                      className="h-4 w-4 shrink-0 text-matcha-700"
                      aria-hidden="true"
                    />
                    <a
                      href={selectedTelHref}
                      className="font-semibold text-matcha-800 hover:underline"
                    >
                      {selectedStore.phone}
                    </a>
                  </div>
                ) : null}
              </div>

              <div className="space-y-1.5 text-sm">
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <Clock
                    className="h-4 w-4 text-matcha-700"
                    aria-hidden="true"
                  />
                  <span>Store Hours</span>
                </div>
                <ul className="space-y-1 pl-6 text-xs text-ink-muted">
                  {selectedStore.hours.map((entry) => (
                    <li key={entry.label}>
                      <span className="font-semibold text-ink">
                        {entry.label}:
                      </span>{" "}
                      {entry.displayHours}
                    </li>
                  ))}
                </ul>
                {selectedStore.hoursNote ? (
                  <p className="pl-6 text-xs text-ink-muted">
                    {selectedStore.hoursNote}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {selectedStore.orderLinks.uberEats ? (
                <a
                  href={selectedStore.orderLinks.uberEats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-matcha-800 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-matcha-900"
                >
                  <UberEatsIcon className="h-4 w-4" />
                  <span>Order on Uber Eats</span>
                </a>
              ) : null}
              {selectedStore.orderLinks.doorDash ? (
                <a
                  href={selectedStore.orderLinks.doorDash}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-boba-700 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-boba-500"
                >
                  <DoorDashIcon className="h-4 w-4" />
                  <span>Order on DoorDash</span>
                </a>
              ) : null}
              {selectedStore.orderLinks.googleFood ? (
                <a
                  href={selectedStore.orderLinks.googleFood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-warm px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-matcha-500 hover:bg-matcha-100 hover:text-matcha-900"
                >
                  <span>Order on Google Food</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
              <a
                href={selectedStore.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2.5 text-xs font-semibold text-matcha-800 transition-colors hover:bg-surface-warm"
              >
                <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="min-h-[380px] w-full bg-surface-warm">
            <iframe
              key={selectedStore.slug}
              src={selectedStore.googleMapsEmbedUrl}
              title={`${selectedStore.name} map`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0"
              allowFullScreen={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreLocator;
