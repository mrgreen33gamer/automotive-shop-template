import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Redline Auto Care",
  description: "How we collect, use, and protect your information at Redline Auto Care in Franklin, TN.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}