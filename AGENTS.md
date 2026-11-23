# AGENTS.md

Repository guide for AI coding agents and maintainers working on **Gotcha Bubble Tea Canada** (`https://www.gotchabubbletea.ca`).

---

## 1. Project Overview & Tech Stack

Gotcha Bubble Tea Canada is a 100% statically generated (SSG) multi-location marketing, store locator, and bilingual (English / Chinese) menu website deployed on Vercel.

| Layer | Technology | Notes |
|---|---|---|
| Framework | **Next.js `^16.4.6`** (App Router) | 100% static SSG + React Server Components (`src/app/`) |
| UI Runtime | **React `^19.3.1`** & `react-dom` | Thin `"use client"` interactive islands only |
| Language | **TypeScript `^5`** (`strict: true`) | Path alias `@/*` → `./src/*`; target `ES2022` |
| Styling | **Tailwind CSS `^4.3.5`** | CSS-first `@theme` in `src/app/globals.css` via `@tailwindcss/postcss` (no `tailwind.config.ts`) |
| Linting | **ESLint `^9`** (flat config) | `eslint.config.mjs` using `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript` |
| Icons | **`lucide-react` `^1.77.0`** + inline SVGs | Brand marks live in `src/components/icons/BrandIcons.tsx` (no FontAwesome) |
| Telemetry | **`@vercel/analytics/next` `^2.0.1`** & **`@vercel/speed-insights/next` `^2.1.0`** | Mounted once in `src/app/layout.tsx` |
| External SDKs | **None** | Zero Maps JS SDK, carousel, masonry, or lightbox dependencies; zero API keys required |

---

## 2. Directory Layout & Route Tree

```text
Gotcha-Canada/
├── next.config.ts               # poweredByHeader: false, AVIF/WebP formats, permanent 308 redirects
├── postcss.config.mjs           # @tailwindcss/postcss plugin only
├── eslint.config.mjs            # ESLint 9 flat config (core-web-vitals + typescript)
├── tsconfig.json                # strict TypeScript config + @/* path alias
├── package.json                 # scripts & minimal dependency set
├── AGENTS.md                    # this file
├── README.md                    # project overview & maintainer docs
├── public/
│   └── images/                  # 38 optimized local WebP assets (~4.7 MB total, all <260 KB)
└── src/
    ├── app/
    │   ├── layout.tsx           # Root shell: <html lang="en-CA">, fonts, metadataBase, Org/WebSite JSON-LD,
    │   │                        # skip link, <Header />, single <main id="main-content">, <Footer />, Vercel telemetry
    │   ├── globals.css          # @import "tailwindcss", @theme tokens, @theme inline fonts, focus-visible, no-scrollbar
    │   ├── icon.ico             # 32x32 site favicon
    │   ├── page.tsx             # / — Home (SSG)
    │   ├── menu/page.tsx        # /menu — Full bilingual 176-item static menu + Menu/Breadcrumb JSON-LD
    │   ├── locations/page.tsx   # /locations — Store locator + all 5 active store cards
    │   ├── store/[slug]/page.tsx# /store/[slug] — Dynamic SSG store pages (generateStaticParams + dynamicParams = false)
    │   ├── about/page.tsx       # /about — Brand story, Alishan farm craft, testimonials carousel, franchise CTA
    │   ├── gallery/page.tsx     # /gallery — CSS multi-column masonry gallery + zero-dep lightbox
    │   ├── robots.ts            # /robots.txt (MetadataRoute.Robots)
    │   ├── sitemap.ts           # /sitemap.xml (MetadataRoute.Sitemap from static routes + ACTIVE_STORES)
    │   └── not-found.tsx        # Custom branded 404 page
    ├── components/
    │   ├── layout/              # Header.tsx ("use client"), Footer.tsx (RSC)
    │   ├── icons/               # BrandIcons.tsx (Instagram, AppStore, GooglePlay, UberEats, DoorDash)
    │   ├── menu/                # FeaturedDrinks.tsx, CustomizationsGuide.tsx, MenuExplorer.tsx, MenuCard.tsx
    │   ├── locations/           # StoreLocator.tsx ("use client"), StoreCard.tsx
    │   ├── about/               # TestimonialsCarousel.tsx ("use client", CSS scroll-snap)
    │   ├── gallery/             # GalleryGrid.tsx ("use client"), GalleryLightbox.tsx ("use client")
    │   └── seo/                 # JsonLd.tsx (escaped <script type="application/ld+json">)
    ├── data/
    │   ├── site.ts              # SITE_URL, SITE_CONFIG (brand info, logos, OG image, social, apps, nav)
    │   ├── menu.ts              # 14 categories, 176 bilingual EN/ZH items, customizations, helpers
    │   ├── stores.ts            # 5 active stores + RETIRED_STORE_SLUGS + helpers
    │   ├── gallery.ts           # 31 curated photos w/ exact intrinsic width/height + home highlights
    │   └── testimonials.ts      # 5 curated 5-star reviews from active stores
    ├── types/
    │   ├── menu.ts              # MenuCategoryId, MenuItem, MenuCategory, MenuPrice, CustomizationGroup, etc.
    │   ├── store.ts             # ActiveStoreSlug, StoreLocation, OpeningHoursEntry, StoreOrderLinks, etc.
    │   └── content.ts           # GalleryCategory, GalleryPhoto, Testimonial, NavItem, SiteConfig
    └── lib/
        ├── seo.ts               # absoluteUrl, buildPageMetadata, Organization/WebSite/Menu/Store/Breadcrumb JSON-LD
        └── format.ts            # formatCadPrice, toTelHref, formatTime12h, formatHoursRange, formatDaysLabel
```

### Permanent Redirects (`next.config.ts`)
Retired routes issue permanent HTTP 308 redirects so legacy backlinks stay healthy:
- `/store/markham` → `/locations`
- `/store/guelph` → `/locations`
- `/store/toronto` → `/locations`
- `/admin` → `/`

---

## 3. Verification Commands

Run all three checks before finishing any code or data change:

```bash
npm run dev        # Start local Next.js dev server (http://localhost:3000)
npm run lint       # Run ESLint 9 flat config (`eslint .`) — `next lint` is removed in Next.js 16
npm run typecheck  # Run TypeScript compiler check (`tsc --noEmit`)
npm run build      # Run full production SSG build (`next build`)
npm run start      # Serve the production build locally (`next start`)
```

> **Note:** Next.js 16 removed `next lint` and `next build` no longer runs ESLint automatically. Always run `npm run lint && npm run typecheck && npm run build`.

---

## 4. Data-Editing Conventions (Single Sources of Truth)

All site content is strongly typed, Git-versioned TypeScript under `src/data/` and validated at compile time by `src/types/`. Never introduce runtime JSON fetches or filesystem writes for static content.

### Menu (`src/data/menu.ts` & `src/types/menu.ts`)
- Holds **14 categories** (`MENU_CATEGORIES`) and **176 bilingual EN/ZH items** (`MENU_ITEMS`), plus `FEATURED_MENU_ITEMS` (20 items), `MOST_LIKED_MENU_ITEMS` (top 3), `MENU_HOURS`, `MENU_PRICING_NOTE`, `MENU_CUSTOMIZATIONS`, `getMenuCategoryById`, and `getMenuItemsByCategory`.
- Store prices as **numeric CAD values** (`price: { base: 7.49, currency: "CAD" }`) and format them exclusively with `formatCadPrice` from `src/lib/format.ts` (never string prices like `"7.0"`).
- Every `MenuItem.id` must be a unique, stable kebab-case identifier, and `categoryId` must match `MenuCategoryId`.
- Do not add unverified dietary/allergen claims (e.g., `"Nut Free"`) without store confirmation.
- On `/menu`, initial render (default filter, empty search) must emit **all 14 categories and all 176 bilingual items directly in the static SSG HTML** for SEO and FCP—never gate initial menu rendering behind `useEffect` or client-only tabs.

### Stores (`src/data/stores.ts` & `src/types/store.ts`)
- Holds the **5 active stores** (`STORES` / `ACTIVE_STORES`: `oakville` [flagship], `mississauga`, `thornhill`, `kingston`, `calgary`), `FLAGSHIP_STORE`, `RETIRED_STORE_SLUGS` (`["markham", "guelph", "toronto"]`), `getStoreBySlug`, and `getStoresByProvince`.
- This single module drives the header dropdown, footer links, Home & `/locations` `StoreLocator`, `/store/[slug]` static params, `CafeOrCoffeeShop` JSON-LD, and `sitemap.ts`.
- **Adding a store:** add the slug to `ActiveStoreSlug` in `src/types/store.ts`, add an optimized local WebP photo to `public/images/` with exact dimensions, and append the store entry to `STORES` in `src/data/stores.ts`.
- **Retiring a store:** remove the slug from `ActiveStoreSlug` and `STORES`, add it to `RETIRED_STORE_SLUGS`, and add a permanent 308 redirect (`/store/<slug>` → `/locations`) in `next.config.ts`.
- Omit `phone` when a store has no public phone line (e.g., Kingston); never emit empty strings or broken `tel:` links.
- Never link to defunct Google `.business.site` URLs.

### Gallery (`src/data/gallery.ts` & `src/types/content.ts`)
- Holds **31 curated photos** (`GALLERY_PHOTOS`: 16 `drinks`, 8 `stores`, 7 `moments`), `HOME_GALLERY_HIGHLIGHTS` (8 photos), and `getGalleryPhotosByCategory`.
- Every `GalleryPhoto` **must** specify the exact intrinsic `width` and `height` of the image file on disk so Next.js reserves layout space and preserves `CLS = 0`.
- Exclude retired-store photography; always provide descriptive `alt` text.

### Site Config & Testimonials (`src/data/site.ts`, `src/data/testimonials.ts`)
- `src/data/site.ts` exports `SITE_URL` (`process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gotchabubbletea.ca"`) and `SITE_CONFIG` (brand metadata, logo/badge/portrait intrinsic dimensions, default OG image `/images/bg1.webp`, social/rewards app/franchise URLs, `primaryNav`).
- `src/data/testimonials.ts` exports `TESTIMONIALS` (5 curated 5-star reviews from active stores only).

---

## 5. Next.js 16, Design System, Accessibility, SEO & Security Invariants

Treat the following rules as non-negotiable invariants across all PRs:

1. **Next.js 16 `next/image` API:**
   - Use **`preload`** on above-the-fold LCP hero images. **Never** use deprecated `priority` or legacy `layout`/`objectFit` props.
   - Pair `fill` with `className="object-cover"` (or `object-contain`) and an explicit `sizes` prop. Use exact intrinsic `width` and `height` on non-`fill` images.
   - Use `<Image fill ... />` behind gradient scrims instead of CSS `backgroundImage` so hero/banner media benefits from AVIF/WebP optimization and preloading.
2. **Async Dynamic Route Params:**
   - Dynamic routes (e.g., `src/app/store/[slug]/page.tsx`) and `generateMetadata` must type `params: Promise<{ slug: string }>` and `await params`.
   - Export `generateStaticParams()` and `export const dynamicParams = false;` so all valid slugs are pre-rendered at build time and unknown slugs return 404 via `notFound()`.
3. **Single `<main>` Landmark:**
   - `src/app/layout.tsx` owns the single `<main id="main-content">` wrapper and skip-to-content link.
   - Page components (`page.tsx`, `not-found.tsx`, etc.) must **never** render another `<main>` tag.
4. **Design Tokens & WCAG AA Contrast:**
   - Use the warm Taiwanese tea-house tokens in `src/app/globals.css`: `cream`, `surface`, `surface-warm`, `matcha-900/800/700/500/300/100`, `boba-700/500/100`, `ink`, `ink-muted`, `border`, plus `font-display` (`Fredoka`) and `font-sans` (`Plus Jakarta Sans` with native OS CJK fallback stack—do not load multi-MB CJK web fonts).
   - Maintain WCAG AA contrast (≥ 4.5:1 normal text, ≥ 3:1 large text/UI). **Never** use light `matcha-300` (`#A3C76D`) as text on `white`, `cream`, or `surface-warm` backgrounds—use `matcha-900`, `matcha-800`, `matcha-700`, or `ink`.
   - Use semantic `<button type="button">` elements (no clickable `<div>`s), descriptive `title` attributes on all `<iframe>` embeds, keyboard-accessible menus/dialogs (`Escape`, focus management, `aria-expanded`), and respect `prefers-reduced-motion`.
5. **Dynamic `robots.ts` & `sitemap.ts` (No Static Shadowing):**
   - **Never** re-create `public/robots.txt` or `public/sitemap.xml`—static files in `public/` shadow `src/app/robots.ts` and `src/app/sitemap.ts`.
   - **Never** disallow `/_next/` in `src/app/robots.ts`; search engines require `/_next/` JS/CSS assets to render and index pages properly.
   - Build route metadata through `buildPageMetadata` in `src/lib/seo.ts` so every route has unique `title`, `description`, canonical URL, OpenGraph, and Twitter tags.
6. **Local Optimized WebP Assets Only:**
   - Store all photography as compressed sRGB `.webp` files in `public/images/` (≤ 1920px max edge for heroes, ≤ 1600px for cards/gallery, target < 260 KB).
   - **Never** hotlink fragile third-party `tb-static.uber.com` image URLs or rely on external CDN hashes.
7. **XSS-Safe JSON-LD Serialization:**
   - Always render structured data using `src/components/seo/JsonLd.tsx` and the typed builders in `src/lib/seo.ts` (`buildOrganizationJsonLd`, `buildWebSiteJsonLd`, `buildMenuJsonLd`, `buildStoreJsonLd`, `buildBreadcrumbJsonLd`), which escape `<` as `\u003c`.
8. **Security & Serverless Boundaries:**
   - **Never** commit client-exposed secrets (such as `NEXT_PUBLIC_*` admin passwords or private keys).
   - **Never** add filesystem-writing API routes (`fs.writeFile` to `public/`); Vercel deployments run on a read-only serverless filesystem.
9. **Thin Client Boundaries & Zero-CLS Media:**
   - Keep pages and static sections as Server Components. Restrict `"use client"` to focused interactive leaves (`Header`, `MenuExplorer`, `CustomizationsGuide`, `StoreLocator`, `TestimonialsCarousel`, `GalleryGrid`, `GalleryLightbox`).
   - Reserve explicit dimensions on map `<iframe>` containers (`loading="lazy"`, fixed `min-h`) and never reintroduce blocking third-party widgets (e.g., CommonNinja embeds or eager Google Maps JS SDK scripts).
