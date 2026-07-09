// src/app/services/oil-change-maintenance/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url = `${BASE_URL}/services/oil-change-maintenance`;

export const metadata: Metadata = {
  title: "Oil Change & Maintenance Franklin TN | Redline Auto Care",
  description:
    "Full-synthetic and conventional oil changes with a multi-point inspection for Franklin and Middle Tennessee drivers. Flat-rate pricing, same-day service, ASE certified technicians.",
  keywords: [
    "oil change Franklin TN",
    "auto maintenance Franklin Tennessee",
    "synthetic oil change Middle Tennessee",
    "multi-point inspection Franklin TN",
    "oil change near me Franklin",
    "Redline Auto Care maintenance",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Oil Change & Maintenance Franklin TN | Redline Auto Care",
    description: "Fast, flat-rate oil changes and maintenance for Franklin and Middle Tennessee drivers.",
    url,
    siteName: "Redline Auto Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oil Change & Maintenance Franklin TN | Redline Auto Care",
    description: "Full-synthetic and conventional oil changes for Franklin and Middle Tennessee.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Oil Change & Maintenance",
  description: "Full-synthetic and conventional oil changes with a multi-point inspection for residential and fleet vehicles in Franklin, TN and Middle Tennessee.",
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
    { "@type": "City", name: "Murfreesboro", containedInPlace: { "@type": "State", name: "Tennessee" } },
  ],
  serviceType: "Oil Change & Maintenance",
  url,
};

export default function OilChangeMaintenanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
