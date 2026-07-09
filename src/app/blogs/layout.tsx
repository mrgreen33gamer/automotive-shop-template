// src/app/blogs/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Redline Auto Care | Auto Repair Tips for Middle Tennessee",
  description: "Practical advice on vehicle maintenance, repair costs, and staying safe on the road — for Franklin, Brentwood, Nashville, and Middle Tennessee drivers.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}