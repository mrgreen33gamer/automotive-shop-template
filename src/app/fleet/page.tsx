// src/app/fleet/page.tsx
// Redline Auto Care — Fleet Accounts
"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./page.module.scss";

import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
  faTruck, faCarSide, faBriefcase, faLandmark,
} from "@fortawesome/free-solid-svg-icons";

const FLEET_SEGMENTS = [
  {
    icon: faTruck,
    title: "Local Delivery & Courier Fleets",
    description: "Package, food, and same-day courier vehicles rack up miles fast. We build a maintenance schedule around your delivery windows — not the other way around.",
  },
  {
    icon: faCarSide,
    title: "Rideshare & Ride-Hailing Drivers",
    description: "Rideshare inspections, brake wear, and oil changes on a driver's schedule. Fast turnaround so you're back earning, not sitting in a waiting room.",
  },
  {
    icon: faBriefcase,
    title: "Small Business Service Fleets",
    description: "Plumbers, electricians, contractors, and HVAC techs — your van or truck is your business. We keep it road-ready with priority scheduling and loaner options.",
  },
  {
    icon: faLandmark,
    title: "Municipal & Government Fleets",
    description: "Compliant, documented service records for municipal and government vehicles, with the flat-rate pricing and audit-ready invoicing your fleet manager needs.",
  },
];

export default function FleetPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "A Dedicated Fleet Account Manager",
      description: "One point of contact who knows your vehicles, your schedule, and your business. No re-explaining your fleet to a different tech every visit.",
    },
    {
      icon: faShieldHalved,
      title: "ASE Certified, Priority Scheduling",
      description: "Fleet accounts get priority booking and the same ASE Certified Master Technicians who work on every vehicle in our shop — no second-tier service.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Volume Pricing & Consolidated Invoicing",
      description: "Flat-rate volume pricing across your fleet, with consolidated monthly invoicing so your books stay clean and your costs stay predictable.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 40,    label: "Fleet accounts actively serviced",           suffix: "+", duration: 2 },
    { icon: faChartLine, value: 12000, label: "Vehicles serviced across Middle Tennessee",   suffix: "+", duration: 3 },
    { icon: faClock,     value: 13,    label: "Years serving Middle Tennessee businesses",   suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Franklin",     benefit: "Our home base — fastest scheduling for fleet accounts.",    badge: "Headquarters" },
    { town: "Brentwood",    benefit: "Regular route for delivery and small business fleets.",      badge: "" },
    { town: "Nashville",    benefit: "Full coverage for rideshare and courier fleets citywide.",   badge: "" },
    { town: "Spring Hill",  benefit: "Priority scheduling for municipal and contractor fleets.",   badge: "" },
    { town: "Murfreesboro", benefit: "Full coverage for delivery and service fleets.",              badge: "" },
    { town: "Cool Springs", benefit: "Convenient drop-off and shuttle service for business fleets.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Dedicated fleet account manager",         us: true, others: false },
    { feature: "Volume pricing across your fleet",        us: true, others: 'Sometimes' },
    { feature: "Consolidated monthly invoicing",          us: true, others: false },
    { feature: "Priority scheduling for fleet vehicles",  us: true, others: false },
    { feature: "ASE certified technicians on every job",  us: true, others: true },
    { feature: "3-Yr / 36,000-mile warranty on repairs",  us: true, others: false },
  ];

  const faq = [
    {
      question: "What kinds of fleets does Redline Auto Care service?",
      answer: "We work with local delivery and courier fleets, rideshare and ride-hailing drivers, small business service fleets (plumbers, electricians, contractors, HVAC techs), and municipal and government fleets across Middle Tennessee.",
    },
    {
      question: "How many vehicles do I need to qualify for a fleet account?",
      answer: "There's no strict minimum — we work with everything from a single rideshare driver to fleets of 20+ vehicles. Volume pricing scales with the size of your account.",
    },
    {
      question: "Do you offer priority or after-hours scheduling for fleets?",
      answer: "Yes. Fleet accounts get priority booking, and we work with you to schedule service around your delivery windows or duty cycles so vehicles spend less time off the road.",
    },
    {
      question: "Can you handle consolidated billing for multiple vehicles?",
      answer: "Yes — fleet accounts get a single consolidated monthly invoice covering all vehicles serviced that month, with per-vehicle line items for your records.",
    },
    {
      question: "Do fleet vehicles get the same warranty as personal vehicles?",
      answer: "Yes — every repair on a fleet vehicle is backed by our standard 3-year / 36,000-mile nationwide warranty on parts and labor.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Fleet" },
      ]} />

      <SectionIntro
        title="Fleet Accounts for Middle Tennessee Businesses"
        subtitle="Priority scheduling, volume pricing, and ASE certified technicians for delivery, rideshare, small business, and municipal fleets."
      />

      <TrustBar headline="Trusted by delivery, rideshare, and small business fleets across Middle Tennessee" />

      {/* ── FLEET SEGMENTS ── */}
      <div className={styles.section}>
        <div className={styles.segmentIntro}>
          <span className={styles.segmentEyebrow}>Who We Serve</span>
          <h2 className={styles.segmentTitle}>Built for Fleets That Can't Afford Downtime</h2>
        </div>
        <div className={styles.segmentGrid}>
          {FLEET_SEGMENTS.map((seg, i) => (
            <div key={i} className={styles.segmentCard}>
              <div className={styles.segmentIconWrap} aria-hidden="true">
                <FontAwesomeIcon icon={seg.icon} className={styles.segmentIcon} />
              </div>
              <h3 className={styles.segmentCardTitle}>{seg.title}</h3>
              <p className={styles.segmentCardDesc}>{seg.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Middle Tennessee"
          features={whyFeatures}
          title="Why Fleet Managers Choose Redline"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Middle Tennessee" />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Franklin"
          areas={localAreas}
          title="Fleet Service Across Middle Tennessee"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison
          title="Why Fleets Choose Redline Auto Care"
          rows={comparisonRows}
        />
      </div>

      <div className={styles.section}>
        <FAQ
          cityName="Franklin"
          faq={faq}
          title="Fleet Accounts — Frequently Asked Questions"
        />
      </div>

      <CTABanner
        headline="Ready to Set Up Your Fleet Account?"
        subline="Tell us about your fleet and we'll build a maintenance plan around your schedule — priority booking, volume pricing, and one consolidated invoice."
        primaryText="Talk to a Fleet Manager"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+16159006400"
      />

      <div className={styles.section}>
        <Variant4
          title="Get a Free Fleet Account Quote"
          cityName="Franklin"
          slug="fleet"
          spot="fleet-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
