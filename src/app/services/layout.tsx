// src/app/services/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Auto Repair Services | Redline Auto Care — Franklin, TN",
  description:
    "Redline Auto Care offers oil changes, brake repair, engine diagnostics, transmission service, AC & heating repair, and tire service for Middle Tennessee drivers. Flat-rate pricing, no contracts, ASE certified technicians.",
  keywords: [
    "auto repair Franklin TN",
    "brake repair Franklin Tennessee",
    "oil change Franklin TN",
    "engine diagnostics Middle Tennessee",
    "Redline Auto Care services",
    "auto repair shop Franklin Texas",
    "tire service Franklin TN",
    "ASE certified mechanic Franklin TN",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Auto Repair Services | Redline Auto Care — Franklin, TN",
    description:
      "Oil changes, brake repair, engine diagnostics, transmission service, AC & heating repair, and tire service for Middle Tennessee. Flat-rate pricing, ASE certified.",
    url,
    siteName: "Redline Auto Care",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/logos/redline-auto-care-banner.png?v=3`,
        alt: "Redline Auto Care — Services for Middle Tennessee Drivers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair Services | Redline Auto Care",
    description:
      "Oil changes, brake repair, engine diagnostics, transmission service, AC & heating repair, and tire service for Middle Tennessee.",
    images: [`${BASE_URL}/logos/redline-auto-care-banner.png?v=3`],
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Redline Auto Care — Auto Repair Services",
  description:
    "Full-service auto repair offerings for Middle Tennessee drivers: oil change & maintenance, brake repair, engine diagnostics, transmission service, AC & heating repair, and tire service.",
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
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Oil Change & Maintenance",
        description:
          "Full-synthetic and conventional oil changes with a multi-point inspection on every visit.",
        url: `${BASE_URL}/services/oil-change-maintenance`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Brake Repair & Replacement",
        description:
          "Pads, rotors, calipers, and full brake system diagnostics with a free brake inspection.",
        url: `${BASE_URL}/services/brake-repair`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Engine Diagnostics & Check Engine Light",
        description:
          "Computerized diagnostics to pinpoint check engine light and performance issues.",
        url: `${BASE_URL}/services/engine-diagnostics`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Transmission Service",
        description:
          "Fluid flushes, filter replacement, and full transmission diagnostics and repair.",
        url: `${BASE_URL}/services/transmission-service`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AC & Heating Repair",
        description:
          "Diagnosis and repair of your vehicle's climate control system, with flat-rate pricing.",
        url: `${BASE_URL}/services/ac-heating-repair`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Tire Service & Wheel Alignment",
        description:
          "Rotations, replacements, and precision wheel alignment for even wear and a smoother ride.",
        url: `${BASE_URL}/services/tire-service`,
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: url },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
