import type { Metadata, Viewport } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG, SITE_URL } from "@/data/site";
import {
  absoluteUrl,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fredoka",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

const DEFAULT_OG_IMAGE = {
  url: absoluteUrl("/images/bg1.webp"),
  width: 1920,
  height: 1152,
  alt: "Gotcha Bubble Tea Canada — Handcrafted Taiwanese Bubble Tea",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gotcha Bubble Tea Canada | Handcrafted Taiwanese Bubble Tea",
    template: "%s | Gotcha Bubble Tea Canada",
  },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    title: "Gotcha Bubble Tea Canada | Handcrafted Taiwanese Bubble Tea",
    description: SITE_CONFIG.description,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gotcha Bubble Tea Canada | Handcrafted Taiwanese Bubble Tea",
    description: SITE_CONFIG.description,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#27492D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${fredoka.variable} ${plusJakartaSans.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-matcha-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <JsonLd data={buildOrganizationJsonLd()} />
        <JsonLd data={buildWebSiteJsonLd()} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
