// src/app/services/tire-service/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url = `${BASE_URL}/services/tire-service`;

export const metadata: Metadata = {
  title: "Tire Service & Wheel Alignment Franklin TN | Redline Auto Care",
  description:
    "Tire rotations, replacements, and precision wheel alignment for Franklin and Middle Tennessee drivers. Flat-rate pricing, before/after documentation, ASE certified technicians.",
  keywords: [
    "tire service Franklin TN",
    "wheel alignment Middle Tennessee",
    "tire rotation Franklin Tennessee",
    "tire replacement Franklin TN",
    "Redline Auto Care tires",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Tire Service & Wheel Alignment Franklin TN | Redline Auto Care",
    description: "Tire rotations, replacements, and precision alignment for Franklin and Middle Tennessee.",
    url,
    siteName: "Redline Auto Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tire Service & Wheel Alignment Franklin TN | Redline Auto Care",
    description: "Tire service and wheel alignment for Franklin and Middle Tennessee drivers.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tire Service & Wheel Alignment",
  description: "Tire rotation, replacement, and wheel alignment for residential and fleet vehicles in Franklin, TN and Middle Tennessee.",
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
  ],
  serviceType: "Tire Service",
  url,
};

export default function TireServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
