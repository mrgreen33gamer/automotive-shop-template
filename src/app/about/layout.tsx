// src/app/about/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url      = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About Redline Auto Care — Franklin TN Auto Repair Shop Since 2012",
  description:
    "Meet the Redline Auto Care team. Locally owned and operated in Franklin, Tennessee since 2012. ASE Certified Master Technicians, honest pricing, and a 3-year/36,000-mile warranty on every repair. Serving Franklin, Brentwood, Nashville, Spring Hill, and all of Middle Tennessee.",
  keywords: [
    "about Redline Auto Care",
    "Franklin TN auto repair shop",
    "auto repair contractor Franklin TN",
    "locally owned auto repair Franklin",
    "ASE certified mechanic Franklin Tennessee",
    "Middle Tennessee auto repair company",
    "auto repair shop history Franklin",
    "Marcus Reyes Redline Auto Care",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About Redline Auto Care — Franklin TN Auto Repair Shop Since 2012",
    description:
      "Locally owned and operated in Franklin since 2012. ASE Certified, flat-rate pricing, 3-year/36,000-mile warranty on every repair. Serving all of Middle Tennessee.",
    url,
    siteName: "Redline Auto Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Redline Auto Care — Franklin TN Since 2012",
    description:
      "Locally owned auto repair shop in Franklin, TN. ASE Certified, flat-rate pricing, 3-year/36,000-mile warranty.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${BASE_URL}/#organization`,
  name: "Redline Auto Care",
  url: BASE_URL,
  telephone: "+16159006400",
  email: "hello@redlineautocare.com",
  foundingDate: "2012",
  founder: {
    "@type": "Person",
    name: "Marcus Reyes",
    jobTitle: "Owner & ASE Master Technician",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "615 Mallory Ln",
    addressLocality: "Franklin",
    addressRegion: "TN",
    postalCode: "37067",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Franklin",     containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Brentwood",    containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Nashville",    containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Spring Hill",  containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Murfreesboro", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Cool Springs", containedInPlace: { "@type": "State", name: "Tennessee" } },
  ],
  sameAs: [
    "https://www.facebook.com/redlineautocare",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: url },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
