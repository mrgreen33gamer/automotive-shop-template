// src/app/fleet/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url      = `${BASE_URL}/fleet`;

export const metadata: Metadata = {
  title: "Fleet Accounts | Redline Auto Care — Franklin, TN",
  description:
    "Redline Auto Care services local delivery and courier fleets, rideshare drivers, small business service fleets, and municipal fleets across Middle Tennessee. Priority scheduling, volume pricing, and a dedicated fleet account manager.",
  keywords: [
    "fleet maintenance Franklin TN",
    "commercial fleet repair Middle Tennessee",
    "rideshare vehicle maintenance Franklin",
    "delivery fleet service Nashville",
    "municipal fleet repair Tennessee",
    "business fleet auto repair Franklin TN",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Fleet Accounts | Redline Auto Care — Franklin, TN",
    description:
      "Priority scheduling, volume pricing, and ASE certified technicians for delivery, rideshare, small business, and municipal fleets across Middle Tennessee.",
    url,
    siteName: "Redline Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/redline-auto-care-banner.png`, alt: "Redline Auto Care — Fleet Accounts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleet Accounts | Redline Auto Care",
    description: "Priority scheduling and volume pricing for fleets across Middle Tennessee.",
    images: [`${BASE_URL}/logos/redline-auto-care-banner.png`],
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Fleet",  item: url },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fleet Vehicle Maintenance & Repair — Franklin TN",
  description:
    "Redline Auto Care provides fleet maintenance and repair for local delivery and courier fleets, rideshare drivers, small business service fleets, and municipal fleets across Middle Tennessee.",
  provider: {
    "@type": "AutoRepair",
    name: "Redline Auto Care",
    url: BASE_URL,
    telephone: "+16159006400",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Franklin",
      addressRegion: "TN",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "State", name: "Tennessee" },
  serviceType: "Fleet Vehicle Maintenance & Repair",
  url,
};

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
