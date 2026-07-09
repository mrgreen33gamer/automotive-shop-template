// src/app/services/transmission-service/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url = `${BASE_URL}/services/transmission-service`;

export const metadata: Metadata = {
  title: "Transmission Service Franklin TN | Redline Auto Care",
  description:
    "Transmission fluid flushes, filter replacement, and full transmission diagnostics for Franklin and Middle Tennessee drivers. Flat-rate pricing, ASE certified technicians.",
  keywords: [
    "transmission service Franklin TN",
    "transmission repair Middle Tennessee",
    "transmission fluid flush Franklin",
    "transmission diagnostics Franklin TN",
    "Redline Auto Care transmission",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Transmission Service Franklin TN | Redline Auto Care",
    description: "Fluid flushes, filter replacement, and transmission diagnostics for Franklin and Middle Tennessee.",
    url,
    siteName: "Redline Auto Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transmission Service Franklin TN | Redline Auto Care",
    description: "Transmission service and repair for Franklin and Middle Tennessee drivers.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Transmission Service",
  description: "Transmission fluid flushes, filter replacement, and diagnostics for residential and fleet vehicles in Franklin, TN and Middle Tennessee.",
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
    { "@type": "City", name: "Murfreesboro", containedInPlace: { "@type": "State", name: "Tennessee" } },
  ],
  serviceType: "Transmission Service",
  url,
};

export default function TransmissionServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
