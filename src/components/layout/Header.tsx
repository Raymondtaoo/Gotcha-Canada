"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MapPin, Menu, ShoppingBag, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { ACTIVE_STORES } from "@/data/stores";

export function Header() {
  const pathname = usePathname();
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isLocationsActive =
    pathname === "/locations" || pathname.startsWith("/store/");

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLocationsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (locationsOpen) {
          setLocationsOpen(false);
          triggerRef.current?.focus();
        }
        if (mobileOpen) {
          setMobileOpen(false);
        }
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [locationsOpen, mobileOpen]);

  const closeAllMenus = () => {
    setLocationsOpen(false);
    setMobileOpen(false);
  };

  const navLinkClass = (active: boolean) =>
    `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      active
        ? "bg-matcha-100 text-matcha-900 font-semibold"
        : "text-ink hover:bg-surface-warm hover:text-matcha-800"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeAllMenus}
          className="flex shrink-0 items-center rounded-lg py-1"
          aria-label={`${SITE_CONFIG.name} — Home`}
        >
          <Image
            src={SITE_CONFIG.logo.src}
            alt={SITE_CONFIG.logo.alt}
            width={160}
            height={42}
            loading="eager"
            className="h-9 w-auto mix-blend-multiply sm:h-10"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          <Link
            href="/"
            onClick={closeAllMenus}
            className={navLinkClass(pathname === "/")}
          >
            Home
          </Link>
          <Link
            href="/menu"
            onClick={closeAllMenus}
            className={navLinkClass(pathname === "/menu")}
          >
            Menu
          </Link>

          <div ref={dropdownRef} className="relative">
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setLocationsOpen((open) => !open)}
              aria-expanded={locationsOpen}
              aria-haspopup="menu"
              aria-controls="header-locations-menu"
              className={`inline-flex items-center gap-1.5 ${navLinkClass(isLocationsActive)}`}
            >
              <span>Locations</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  locationsOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {locationsOpen ? (
              <div
                id="header-locations-menu"
                role="menu"
                aria-label="Gotcha Canada store locations"
                className="absolute right-0 mt-2 w-72 overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-xl"
              >
                <div className="px-3 py-1.5 text-xs font-semibold tracking-wider text-ink-muted uppercase">
                  Active Canadian Stores
                </div>
                <div className="mt-1 space-y-0.5">
                  {ACTIVE_STORES.map((store) => {
                    const activeStore = pathname === `/store/${store.slug}`;
                    return (
                      <Link
                        key={store.slug}
                        href={`/store/${store.slug}`}
                        role="menuitem"
                        onClick={closeAllMenus}
                        className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors ${
                          activeStore
                            ? "bg-matcha-100 font-semibold text-matcha-900"
                            : "text-ink hover:bg-surface-warm hover:text-matcha-800"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <MapPin
                            className="h-4 w-4 shrink-0 text-matcha-700"
                            aria-hidden="true"
                          />
                          <span>{store.shortName}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          {store.isFlagship ? (
                            <span className="rounded-full bg-boba-100 px-2 py-0.5 text-[11px] font-semibold text-boba-700">
                              Flagship
                            </span>
                          ) : null}
                          <span className="text-xs font-medium text-ink-muted">
                            {store.province}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-2 border-t border-border pt-2">
                  <Link
                    href="/locations"
                    role="menuitem"
                    onClick={closeAllMenus}
                    className="flex w-full items-center justify-center rounded-xl bg-matcha-100 px-3 py-2 text-sm font-semibold text-matcha-900 transition-colors hover:bg-matcha-800 hover:text-white"
                  >
                    View All Locations
                  </Link>
                </div>
              </div>
            ) : null}
          </div>

          <Link
            href="/about"
            onClick={closeAllMenus}
            className={navLinkClass(pathname === "/about")}
          >
            About
          </Link>
          <Link
            href="/gallery"
            onClick={closeAllMenus}
            className={navLinkClass(pathname === "/gallery")}
          >
            Gallery
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/locations#order"
            onClick={closeAllMenus}
            className="inline-flex items-center gap-2 rounded-full bg-matcha-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-matcha-900"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            <span>Order Now</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-ink transition-colors hover:bg-surface-warm md:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav-drawer"
          className="border-t border-border bg-surface px-4 pt-3 pb-5 shadow-lg md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={closeAllMenus}
              className={`rounded-xl px-3.5 py-2.5 text-base font-medium ${
                pathname === "/"
                  ? "bg-matcha-100 font-semibold text-matcha-900"
                  : "text-ink hover:bg-surface-warm"
              }`}
            >
              Home
            </Link>
            <Link
              href="/menu"
              onClick={closeAllMenus}
              className={`rounded-xl px-3.5 py-2.5 text-base font-medium ${
                pathname === "/menu"
                  ? "bg-matcha-100 font-semibold text-matcha-900"
                  : "text-ink hover:bg-surface-warm"
              }`}
            >
              Menu
            </Link>
            <Link
              href="/about"
              onClick={closeAllMenus}
              className={`rounded-xl px-3.5 py-2.5 text-base font-medium ${
                pathname === "/about"
                  ? "bg-matcha-100 font-semibold text-matcha-900"
                  : "text-ink hover:bg-surface-warm"
              }`}
            >
              About
            </Link>
            <Link
              href="/gallery"
              onClick={closeAllMenus}
              className={`rounded-xl px-3.5 py-2.5 text-base font-medium ${
                pathname === "/gallery"
                  ? "bg-matcha-100 font-semibold text-matcha-900"
                  : "text-ink hover:bg-surface-warm"
              }`}
            >
              Gallery
            </Link>

            <div className="mt-2 rounded-2xl border border-border bg-cream/70 p-3">
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-xs font-semibold tracking-wider text-ink-muted uppercase">
                  Locations
                </span>
                <Link
                  href="/locations"
                  onClick={closeAllMenus}
                  className="text-xs font-semibold text-matcha-700 hover:underline"
                >
                  View all {ACTIVE_STORES.length}
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {ACTIVE_STORES.map((store) => (
                  <Link
                    key={store.slug}
                    href={`/store/${store.slug}`}
                    onClick={closeAllMenus}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm ${
                      pathname === `/store/${store.slug}`
                        ? "bg-matcha-100 font-semibold text-matcha-900"
                        : "text-ink hover:bg-surface"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <MapPin
                        className="h-4 w-4 text-matcha-700"
                        aria-hidden="true"
                      />
                      <span>{store.shortName}</span>
                    </span>
                    <span className="text-xs text-ink-muted">
                      {store.isFlagship ? `Flagship · ${store.province}` : store.province}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/locations#order"
              onClick={closeAllMenus}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-matcha-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-matcha-900"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              <span>Order Now</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
