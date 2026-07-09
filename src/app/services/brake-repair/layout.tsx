// src/app/services/brake-repair/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url = `${BASE_URL}/services/brake-repair`;

export const metadata: Metadata = {
  title: "Brake Repair & Replacement Franklin TN | Redline Auto Care",
  description:
    "Brake repair and replacement for Franklin and Middle Tennessee drivers. Pads, rotors, calipers, and full brake diagnostics. Flat-rate pricing, ASE certified technicians, 3-year / 36,000-mile warranty.",
  keywords: [
    "brake repair Franklin TN",
    "brake replacement Middle Tennessee",
    "brake pads rotors Franklin",
    "brake inspection Franklin TN",
    "Redline Auto Care brakes",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Brake Repair & Replacement Franklin TN | Redline Auto Care",
    description: "Pads, rotors, calipers, and full brake diagnostics for Franklin and Middle Tennessee drivers.",
    url,
    siteName: "Redline Auto Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brake Repair & Replacement Franklin TN | Redline Auto Care",
    description: "Flat-rate brake repair for Franklin and Middle Tennessee.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Brake Repair & Replacement",
  description: "Brake pad, rotor, and caliper repair and replacement for residential and fleet vehicles in Franklin, TN and Middle Tennessee.",
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
    { "@type": "City", name: "Cool Springs", containedInPlace: { "@type": "State", name: "Tennessee" } },
  ],
  serviceType: "Brake Repair",
  url,
};

export default function BrakeRepairLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
