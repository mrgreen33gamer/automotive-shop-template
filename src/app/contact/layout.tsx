// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact Redline Auto Care | Schedule Service in Franklin & Middle Tennessee',
  description:
    'Contact Redline Auto Care to schedule an oil change, brake repair, engine diagnostics, or a free estimate. Serving Franklin, Brentwood, Nashville, and all of Middle Tennessee. Call (615) 900-6400.',
  keywords: [
    'contact Redline Auto Care',
    'auto repair Franklin TN',
    'schedule brake repair Franklin',
    'auto repair estimate Middle Tennessee',
    'Redline Auto Care contact',
    '615-900-6400',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact Redline Auto Care | Schedule Service in Franklin & Middle Tennessee',
    description:
      'Call, text, or submit a request. Same-day appointments available. Flat-rate pricing, 3-year/36,000-mile warranty, ASE certified techs.',
    url,
    siteName: 'Redline Auto Care',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Redline Auto Care | Franklin & Middle Tennessee',
    description: 'Schedule auto repair service or get a free estimate. Call (615) 900-6400.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
