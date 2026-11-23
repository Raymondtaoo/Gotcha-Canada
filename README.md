# Gotcha Bubble Tea Canada (鮮饗茶)

Official web application for **Gotcha Bubble Tea Canada** — *"We Farm Our Own Tea."* Handcrafted Taiwanese bubble tea brewed from organic single-origin tea leaves harvested on our own farms in Taiwan, served across Ontario and Calgary, Alberta.

**Live Website:** [https://www.gotchabubbletea.ca](https://www.gotchabubbletea.ca)

---

## Active Canadian Locations

| Location | Address | Typical Hours | Phone | Order Online | Route |
|---|---|---|---|---|---|
| **Oakville** *(Flagship)* | 1011 Upper Middle Rd E, Unit E4, Oakville, ON L6H 4L3 | Sun–Thu 11:00 AM–10:00 PM · Fri–Sat 11:00 AM–11:00 PM | (905) 845-8088 | Uber Eats, Google Food | `/store/oakville` |
| **Vaughan** *(Thornhill)* | 800 Steeles Ave W, Unit B21, Vaughan, ON L4J 7L2 | Daily 11:00 AM–10:45 PM | (905) 597-2188 | Uber Eats, Google Food | `/store/vaughan` |
| **Calgary** | 751 3 St SW, Suite 410 (Level 4 Food Court, The CORE), Calgary, AB T2P 4K8 | Mon–Sat 10:00 AM–5:45 PM · Sun 12:00 PM–4:45 PM | (403) 454-0630 | DoorDash, Google Food | `/store/calgary` |

*Retired locations (`/store/markham`, `/store/guelph`, `/store/toronto`, `/store/mississauga`, `/store/kingston`) permanently redirect (HTTP 308) to `/locations`, and `/store/thornhill` permanently redirects (HTTP 308) to `/store/vaughan`.*

---

## Key Features

- **100% Static Bilingual Menu (`/menu`)**: Pre-renders all **14 drink categories** and **176 English/Chinese (EN/ZH) items** directly in static HTML for fast First Contentful Paint and full search indexing. Includes instant search, Featured / Popular / Top Rated (90%+) quick filters, category pills, numeric CAD pricing, and an expandable drink customization guide (Temperature, Sweetness 0–100%, Ice 0–100%, and 12 Popular Toppings).
- **Interactive Store Locator & Dedicated Store Pages (`/locations`, `/store/[slug]`)**: Province filtering (Ontario / Alberta), verified store hours, click-to-call phone numbers, direct Uber Eats / DoorDash / Google Food ordering links, Google Maps directions, and lazy-loaded Google Maps embeds—with **zero Google Maps API key required**.
- **Pure CSS Masonry Gallery & Accessible Lightbox (`/gallery`)**: 29 curated local WebP photos across *Drinks*, *Stores*, and *Moments* with exact intrinsic dimensions (`CLS = 0`), category filtering, and a zero-dependency keyboard-accessible fullscreen lightbox powered by `next/image`.
- **Brand Story & Customer Reviews (`/about`)**: Farm-to-cup Alishan tea story, zero-dependency CSS Scroll-Snap testimonials carousel featuring verified 5-star customer reviews, and Gotcha Canada franchise details.
- **Full Technical SEO & Core Web Vitals**:
  - Dynamic App Router `robots.ts` and `sitemap.ts`
  - Per-route canonical URLs, OpenGraph (`en_CA`), and Twitter `summary_large_image` metadata
  - Escaped JSON-LD structured data (`Organization`, `WebSite`, `Menu` / `MenuSection` / `MenuItem`, `CafeOrCoffeeShop` with `OpeningHoursSpecification` & `OrderAction`, and `BreadcrumbList`)
  - Local compressed WebP imagery served as AVIF/WebP via `next/image` with Next.js 16 `preload` on LCP hero media
  - Built-in Vercel Analytics and Speed Insights

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (`^16.4.6`) App Router (100% Static SSG + React Server Components)
- **UI:** [React 19](https://react.dev/) (`^19.3.1`), [Lucide React](https://lucide.dev/) (`^1.77.0`), inline brand SVGs
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`^4.3.5` via `@tailwindcss/postcss`) with warm tea-house `@theme` tokens and `Fredoka` + `Plus Jakarta Sans` Google Fonts (`next/font/google`)
- **Language & Linting:** TypeScript 5 (`strict: true`), ESLint 9 flat config (`eslint-config-next/core-web-vitals` & `eslint-config-next/typescript`)
- **Analytics:** `@vercel/analytics/next` (`^2.0.1`) & `@vercel/speed-insights/next` (`^2.1.0`)

---

## Local Setup & Commands

### Prerequisites
- Node.js 20+ (LTS recommended) and npm

### Install & Run
```bash
git clone https://github.com/raymondtao/Gotcha-Canada.git
cd Gotcha-Canada
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Run ESLint 9 (`eslint .`) across the codebase |
| `npm run typecheck` | Run TypeScript strict type checking (`tsc --noEmit`) |
| `npm run build` | Build all static pages for production (`next build`) |
| `npm run start` | Serve the production build locally (`next start`) |

---

## Project Structure

```text
Gotcha-Canada/
├── next.config.ts               # Image formats (AVIF/WebP) & permanent 308 redirects
├── postcss.config.mjs           # Tailwind CSS v4 PostCSS plugin
├── eslint.config.mjs            # ESLint 9 flat config
├── tsconfig.json                # Strict TypeScript settings (@/* → ./src/*)
├── AGENTS.md                    # Engineering invariants & guide for AI coding agents
├── public/
│   └── images/                  # 36 optimized local WebP assets (~4.4 MB total)
└── src/
    ├── app/                     # Next.js 16 App Router pages, layout, globals.css, robots.ts, sitemap.ts
    ├── components/              # Modular UI (layout, icons, menu, locations, about, gallery, seo)
    ├── data/                    # Typed single sources of truth (menu, stores, gallery, site, testimonials)
    ├── types/                   # Shared TypeScript interfaces (menu, store, content)
    └── lib/                     # SEO/JSON-LD builders (seo.ts) & CAD/hours/phone formatters (format.ts)
```

---

## Updating Menu, Stores & Gallery

All content is managed through strongly typed TypeScript files in `src/data/` so mistakes are caught before deployment:

- **Menu items & prices:** Edit `src/data/menu.ts` (`MENU_CATEGORIES`, `MENU_ITEMS`, `MENU_CUSTOMIZATIONS`, `MENU_HOURS`). Use numeric CAD prices (`price: { base: 7.49, currency: "CAD" }`) and unique kebab-case `id` values.
- **Store locations, hours & order links:** Edit `src/data/stores.ts` (`STORES`). Every update automatically syncs across the header dropdown, footer, interactive store locator, `/store/[slug]` pages, JSON-LD structured data, and `/sitemap.xml`.
  - To **add** a store, also add its slug to `ActiveStoreSlug` in `src/types/store.ts` and add a local WebP photo in `public/images/`.
  - To **retire** a store, move its slug to `RETIRED_STORE_SLUGS` in `src/data/stores.ts` and add a permanent redirect in `next.config.ts`.
- **Gallery photos:** Add compressed local `.webp` assets to `public/images/` and register them in `src/data/gallery.ts` with exact intrinsic `width` and `height` values.
- **Brand & social links:** Edit `src/data/site.ts`.

After any edit, verify locally before pushing:

```bash
npm run lint && npm run typecheck && npm run build
```

For full architectural conventions, design tokens, and SEO invariants, see [`AGENTS.md`](./AGENTS.md).

---

## Deployment (Vercel)

This repository is configured for **zero-config deployment on Vercel** using the default Next.js Framework Preset:

- **No external API keys required:** The interactive store locator uses lazy-loaded Google Maps embeds—no `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` or database credentials are needed.
- **Optional environment variable:**
  - `NEXT_PUBLIC_SITE_URL` — Overrides the canonical site origin used for metadata, OpenGraph URLs, `robots.txt`, and `sitemap.xml` (defaults to `https://www.gotchabubbletea.ca`).
- **Observability:** `@vercel/analytics/next` and `@vercel/speed-insights/next` are wired into `src/app/layout.tsx` and activate automatically when enabled on the Vercel project.

---

Visit the official website at [gotchabubbletea.ca](https://www.gotchabubbletea.ca) or follow [@gotchabubbletea_oakville](https://www.instagram.com/gotchabubbletea_oakville/) on Instagram.
