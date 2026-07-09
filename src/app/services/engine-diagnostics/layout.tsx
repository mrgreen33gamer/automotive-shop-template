// src/app/services/engine-diagnostics/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url = `${BASE_URL}/services/engine-diagnostics`;

export const metadata: Metadata = {
  title: "Engine Diagnostics Franklin TN | Check Engine Light | Redline Auto Care",
  description:
    "Computerized engine diagnostics and check engine light repair for Franklin and Middle Tennessee drivers. Flat-rate quotes, ASE certified technicians, no guesswork.",
  keywords: [
    "engine diagnostics Franklin TN",
    "check engine light Franklin Tennessee",
    "engine repair Middle Tennessee",
    "diagnostic scan Franklin TN",
    "Redline Auto Care diagnostics",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Engine Diagnostics Franklin TN | Redline Auto Care",
    description: "Computerized diagnostics and check engine light repair for Franklin and Middle Tennessee.",
    url,
    siteName: "Redline Auto Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engine Diagnostics Franklin TN | Redline Auto Care",
    description: "Check engine light and engine performance diagnostics for Franklin and Middle Tennessee.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Engine Diagnostics & Check Engine Light",
  description: "Computerized engine diagnostics and check engine light repair for residential and fleet vehicles in Franklin, TN and Middle Tennessee.",
  provider: {
    "@type": "AutoRepair",
    name: "Redline Auto Care",
    url: BASE_URL,
    telephone: "+16159006400",
    address: { "@type": "PostalAddress", streetAddress: "615 Mallory Ln", addressLocality: "Franklin", addressRegion: "TN", postalCode: "37067", addressCountry: "US" },
  },
  areaServed: [
    { "@type": "City", name: "Franklin",     containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Brentwood",    containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Nashville",    containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Spring Hill",  containedInPlace: { "@type": "State", name: "Tennessee" } },
  ],
  serviceType: "Engine Diagnostics",
  url,
};

export default function EngineDiagnosticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
