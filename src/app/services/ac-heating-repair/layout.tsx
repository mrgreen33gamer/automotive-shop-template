// src/app/services/ac-heating-repair/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url = `${BASE_URL}/services/ac-heating-repair`;

export const metadata: Metadata = {
  title: "AC & Heating Repair Franklin TN | Redline Auto Care",
  description:
    "Vehicle AC and heating repair for Franklin and Middle Tennessee drivers. Blowing warm or cold? We diagnose and fix your climate control system fast, with flat-rate pricing.",
  keywords: [
    "car AC repair Franklin TN",
    "vehicle heating repair Middle Tennessee",
    "car air conditioning repair Franklin",
    "AC recharge Franklin TN",
    "Redline Auto Care AC repair",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "AC & Heating Repair Franklin TN | Redline Auto Care",
    description: "Vehicle AC and heating repair for Franklin and Middle Tennessee drivers.",
    url,
    siteName: "Redline Auto Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC & Heating Repair Franklin TN | Redline Auto Care",
    description: "Vehicle climate control diagnosis and repair for Franklin and Middle Tennessee.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC & Heating Repair",
  description: "Vehicle air conditioning and heating system diagnosis and repair for residential and fleet vehicles in Franklin, TN and Middle Tennessee.",
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
    { "@type": "City", name: "Cool Springs", containedInPlace: { "@type": "State", name: "Tennessee" } },
  ],
  serviceType: "AC & Heating Repair",
  url,
};

export default function AcHeatingRepairLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
