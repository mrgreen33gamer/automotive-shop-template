// src/app/appointments/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://redlineautocare.com';
const url      = `${BASE_URL}/appointments`;

export const metadata: Metadata = {
  title: "Appointments | Redline Auto Care — Franklin, TN",
  description:
    "Book your appointment with Redline Auto Care in Franklin, TN. See shop hours, what to bring, loaner and shuttle options, and financing details for your next service visit.",
  keywords: [
    "book auto repair appointment Franklin TN",
    "auto shop hours Franklin TN",
    "schedule oil change Franklin TN",
    "Redline Auto Care appointments",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Appointments | Redline Auto Care — Franklin, TN",
    description:
      "Book your appointment online or by phone. Shop hours, what to bring, loaner/shuttle options, and financing details.",
    url,
    siteName: "Redline Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/redline-auto-care-banner.png`, alt: "Redline Auto Care — Appointments" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appointments | Redline Auto Care",
    description: "Book your appointment online or by phone with Redline Auto Care in Franklin, TN.",
    images: [`${BASE_URL}/logos/redline-auto-care-banner.png`],
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",         item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Appointments", item: url },
  ],
};

export default function AppointmentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
