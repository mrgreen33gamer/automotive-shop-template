// Redline Auto Care — Services Overview
// Order: Breadcrumb → SectionIntro → TrustBar → ServiceCards → WhatToExpect
//        → ImpactMetrics → WhyChooseUs → ProcessTimeline → GuaranteeSection
//        → Testimonials → LocalServiceAreas → ValueComparison → FAQ → CTABanner → Form
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faFan, faFire, faWrench, faFilter, faThermometerHalf, faWind,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faFan,            title: "Oil Change & Maintenance",        body: "Fast, accurate diagnosis on all makes. Same-day service available — we stock common parts on every job.",                           link: "/services/oil-change-maintenance" },
    { icon: faFire,           title: "Brake Repair & Replacement",      body: "Pads, rotors, calipers, and full brake diagnostics across Middle Tennessee — 7 days a week.",                                 link: "/services/brake-repair" },
    { icon: faWrench,         title: "Engine Diagnostics",              body: "Check engine light diagnostics and repair. Financing available for qualified customers.",               link: "/services/engine-diagnostics" },
    { icon: faFilter,         title: "Transmission Service",            body: "Fluid flushes, filter replacement, and full transmission diagnostics. A real difference for vehicle longevity.",           link: "/services/transmission-service" },
    { icon: faThermometerHalf, title: "AC & Heating Repair",            body: "Climate system diagnosis and repair that keep breakdowns away. Month-to-month — no contracts.",                          link: "/services/ac-heating-repair" },
    { icon: faWind,           title: "Tire Service & Wheel Alignment",  body: "Rotations, replacements, and precision alignment that make every drive safer.",                   link: "/services/tire-service" },
  ];

  const expectations = [
    { icon: faSearch,       title: "Upfront Diagnostic Pricing",   description: "Every diagnostic starts at a flat $100–$150, waived when you approve the repair. We explain exactly what's wrong before anything is touched." },
    { icon: faCheckCircle,  title: "Upfront Flat-Rate Pricing",    description: "No hourly billing, no surprise fees. You approve the price before we start — and it never changes mid-job." },
    { icon: faShieldHalved, title: "ASE Certified Master Technicians", description: "Every tech is ASE certified and background-checked. Redline is an ASE Blue Seal of Excellence Shop — you know exactly who's working on your car." },
    { icon: faWrench,       title: "3-Year / 36,000-Mile Warranty", description: "Every repair we complete is backed by a nationwide warranty on both parts and labor. No fine print." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 12000, label: "Vehicles serviced since 2012",              suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating",               suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,    label: "Years serving Middle Tennessee drivers",     suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faBolt,          title: "Same-Day Service Available",   description: "We staff for Middle Tennessee's daily commuter traffic and interstate wear. Most repairs are completed same-day when you call before early afternoon." },
    { icon: faHeadset,       title: "No Contracts, Ever",            description: "Our maintenance plan is month-to-month. Every other repair is a one-time job with a written quote — no service agreements, ever." },
    { icon: faShieldHalved,  title: "Financing Available",           description: "Major repairs don't have to break the bank. We offer flexible financing options for qualified customers — ask us for details." },
  ];

  const processSteps = [
    { number: 1, title: "Schedule",  description: "Call, text, or book online. We'll get you in — usually same-day.",                              icon: faHeadset },
    { number: 2, title: "Diagnose",  description: "Tech inspects your vehicle and explains the problem in plain English — no pressure.",             icon: faSearch },
    { number: 3, title: "Quote",     description: "Flat-rate written quote before any work starts. No surprises, no hidden fees.",                    icon: faFileContract },
    { number: 4, title: "Fix",       description: "Completed with quality parts, road-tested, and backed by our 3-year/36,000-mile warranty.",       icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",             description: "The price you approve is the price you pay. No hourly billing, no change orders mid-job." },
    { icon: faRotateLeft,   title: "3-Year / 36,000-Mile Warranty", description: "Every repair is backed by a nationwide warranty covering parts and labor." },
    { icon: faHeadset,      title: "Real People Answer the Phone",  description: "Call us and someone in Franklin answers. No call centers, no hold queues." },
    { icon: faLock,         title: "ASE Certified & Fully Insured", description: "Every technician is ASE certified and Redline is a fully insured Blue Seal of Excellence shop. Credentials available on request." },
  ];

  const localAreas = [
    { town: "Franklin",      benefit: "Home base — best availability and fastest turnaround in the shop.", badge: "Home Base" },
    { town: "Brentwood",     benefit: "Full-service coverage with flexible drop-off and pickup scheduling.", badge: "" },
    { town: "Nashville",     benefit: "Regular pickup and drop-off route for Nashville commuters.",         badge: "" },
    { town: "Spring Hill",   benefit: "Same-day availability for Spring Hill drivers.",                     badge: "" },
    { town: "Murfreesboro",  benefit: "Quick turnaround for Murfreesboro customers on our regular route.",  badge: "" },
    { town: "Cool Springs",  benefit: "Convenient service for Cool Springs commuters and businesses.",      badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate upfront pricing",         us: "✅ Always",        others: "❌ Hourly + surprise fees" },
    { feature: "3-year/36,000-mile warranty",       us: "✅ Every repair",  others: "❌ 12 months or less" },
    { feature: "ASE certified technicians",         us: "✅ All techs",     others: "❌ Varies" },
    { feature: "No service contracts required",     us: "✅ Always",        others: "❌ Often required" },
    { feature: "Same-day appointments available",   us: "✅ Most days",     others: "❌ Days-long wait" },
  ];

  const faq = [
    { question: "How much does auto repair cost in Franklin?",     answer: "Diagnostic visits run $100–$150, waived when you approve the repair. Brake jobs typically run $150–$400 per axle, and most common repairs fall between $150–$800 depending on the issue. We always provide a flat-rate written quote before any work begins." },
    { question: "Do you work on all vehicle makes and models?",    answer: "Yes — domestic, import, and hybrid vehicles. Our ASE certified techs are trained across all major makes, and we stock common parts for same-day turnaround on most jobs." },
    { question: "What does the maintenance plan include?",         answer: "Scheduled oil changes and multi-point inspections based on your mileage, plus 15% off any repair parts and priority booking. Month-to-month, cancel anytime with 30 days notice." },
    { question: "Are you available for same-day or emergency service?", answer: "Most repairs are completed same-day when you call before early afternoon. We understand a car that won't start is an emergency — call us and we'll get you in as soon as we can." },
    { question: "Do you offer a warranty on repairs?",             answer: "Yes — every repair we complete is backed by a 3-year / 36,000-mile nationwide warranty on parts and labor, honored at thousands of shops across the country if you're away from Franklin." },
  ];

  return (
    <>
      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services" },
      ]} />

      <SectionIntro
        title="Auto Repair Services in Franklin, TN"
        subtitle="Brakes, diagnostics, transmission, AC, tires, and more — ASE certified technicians, flat-rate pricing, and a 3-year/36,000-mile warranty on every repair."
      />

      <TrustBar headline="Trusted by 12,000+ Middle Tennessee drivers since 2012" />

      <div className={styles.section}>
        <ServiceCardComponent heading="What We Do" cards={services} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How Every Service Call Works" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Results That Speak for Themselves" metrics={metrics} cityName="Franklin" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Franklin" features={whyFeatures} title="Why Middle Tennessee Chooses Redline" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Franklin" areas={localAreas} servicePath="services" title="Serving All of Middle Tennessee" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Franklin" faq={faq} title="Auto Repair FAQs" />
      </div>

      <CTABanner
        headline="Ready to Schedule Your Service?"
        subline="Same-day appointments available. Flat-rate pricing, a 3-year/36,000-mile warranty, and ASE certified techs on every job."
        primaryText="Call Us Now"
        primaryLink="tel:+16159006400"
        secondaryText="Schedule Online"
        secondaryLink="/appointments"
      />

      <div className={styles.section}>
        <Variant2
          title="Request a Service or Free Estimate"
          cityName="Franklin"
          slug="services"
          spot="services-page-form"
          formVariant={2}
        />
      </div>
    </>
  );
}
