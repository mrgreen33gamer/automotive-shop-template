// src/app/service-areas/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Auto Repair Service Areas | Franklin, Brentwood, Nashville & Middle TN | Redline',
  description:
    'Redline Auto Care serves Franklin, Brentwood, Nashville, Spring Hill, Murfreesboro, Cool Springs, and all of Middle Tennessee. Flat-rate pricing, same-day appointments, 3-year/36,000-mile warranty.',
  keywords: [
    'auto repair service areas Middle Tennessee',
    'auto repair Franklin TN',
    'auto repair Brentwood TN',
    'auto repair Nashville TN',
    'auto repair Murfreesboro TN',
    'brake repair Middle Tennessee',
    'oil change Franklin',
    'Redline Auto Care service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Auto Repair Service Areas | Redline Auto Care — Middle Tennessee',
    description:
      'Serving Franklin and all of Middle Tennessee with flat-rate auto repair, maintenance, and fleet service. Same-day appointments available.',
    url,
    siteName: 'Redline Auto Care',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Repair Service Areas | Redline Auto Care — Middle Tennessee',
    description: 'Serving Franklin and all of Middle Tennessee. Flat-rate pricing, same-day appointments, 3-year/36,000-mile warranty.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Redline Auto Care',
  url: BASE_URL,
  telephone: '+16159006400',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '615 Mallory Ln',
    addressLocality: 'Franklin',
    addressRegion: 'TN',
    postalCode: '37067',
    addressCountry: 'US',
  },
  areaServed: [
    'Franklin, TN', 'Brentwood, TN', 'Nashville, TN', 'Spring Hill, TN',
    'Murfreesboro, TN', 'Cool Springs, TN',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],
  priceRange: '$$',
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
