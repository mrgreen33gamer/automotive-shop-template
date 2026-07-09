// src/app/layout.tsx
// Redline Auto Care — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, ABeeZee } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS ─────────────────────────────────────────────────────────────────────
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const aBeeZee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abeezee",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://redlineautocare.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
// Next.js 14+ moved viewport / themeColor / colorScheme out of `metadata` and
// into a separate `viewport` export. The `viewportFit: 'cover'` is the single
// most important line in this file for the notch / home-indicator fix.
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  // Two themeColor entries so iOS Safari can pick the right one when the user
  // toggles light/dark mode. Both are obsidian dark to match the brand bg
  // applied to <body> in globals.css. Adjust if you want a lighter Safari
  // chrome tint for light-mode users.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d1b2a" },
    { media: "(prefers-color-scheme: dark)",  color: "#0d1b2a" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Redline Auto Care | Auto Repair, Brakes & Oil Change — Franklin, TN",
    template: "%s | Redline Auto Care",
  },
  description:
    "Redline Auto Care is a Franklin, TN independent auto repair shop offering oil changes, brake repair, engine diagnostics, transmission service, AC & heating repair, and tire service for Middle Tennessee drivers and fleets. ASE Certified, local, no contracts.",
  keywords: [
    "Redline Auto Care",
    "auto repair shop Franklin TN",
    "brake repair Franklin Tennessee",
    "oil change Franklin TN",
    "engine diagnostics Middle Tennessee",
    "transmission service Franklin TN",
    "auto repair Brentwood TN",
    "tire service Franklin TN",
    "ASE certified mechanic Franklin TN",
  ],
  authors: [{ name: "Redline Auto Care", url: BASE_URL }],
  creator: "Redline Auto Care",
  publisher: "Redline Auto Care",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "Redline Auto Care | Auto Repair, Brakes & Oil Change — Franklin, TN",
    description:
      "Franklin, TN-based auto repair shop for oil changes, brake repair, engine diagnostics, transmission service, and tire service across Middle Tennessee. ASE Certified & insured. No contracts.",
    url: BASE_URL,
    siteName: "Redline Auto Care",
    images: [
      {
        url: `${BASE_URL}/logos/redline-auto-care-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "Redline Auto Care — Franklin TN Auto Repair & Maintenance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redline Auto Care | Franklin TN Auto Repair",
    description:
      "Oil changes, brake repair, engine diagnostics, transmission service & tire service for Middle Tennessee. ASE Certified & insured — no contracts.",
    images: [`${BASE_URL}/logos/redline-auto-care-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = Math.max(reviews.length, 850);
const ratingValue = "4.9";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${BASE_URL}/#organization`,
  name: "Redline Auto Care",
  alternateName: "Redline Auto Care Franklin",
  description:
    "Independent full-service auto repair and maintenance shop in Franklin and Middle Tennessee — oil changes, brake repair, engine diagnostics, transmission service, AC & heating repair, and tire service. ASE Certified, insured, no contracts.",
  url: BASE_URL,
  telephone: "+16159006400",
  email: "hello@redlineautocare.com",
  foundingDate: "2012",
  founder: {
    "@type": "Person",
    name: "Marcus Reyes",
    jobTitle: "Owner & Founder",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "615 Mallory Ln",
    addressLocality: "Franklin",
    addressRegion: "TN",
    postalCode: "37067",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.9251,
    longitude: -86.8689,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Franklin",     containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Brentwood",    containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Nashville",    containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Spring Hill",  containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Murfreesboro", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Cool Springs", containedInPlace: { "@type": "State", name: "Tennessee" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil Change & Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Repair & Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Diagnostics & Check Engine Light" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transmission Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC & Heating Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tire Service & Wheel Alignment" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/redlineautocare",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${aBeeZee.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* ConditionalShell shows Header/Footer only on non-admin pages */}
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#dc2626" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#0a130a",
                }}
              >
                <PulseLoader size={50} color="#dc2626" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        {/* Footer only on non-admin pages */}
        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}