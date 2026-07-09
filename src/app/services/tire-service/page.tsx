// Redline Auto Care — Tire Service & Wheel Alignment Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhyChooseUs → ImpactMetrics
//        → WhatToExpect → ProcessTimeline → GuaranteeSection → LocalServiceAreas
//        → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant3             from "#/PageComponents/ContactForms/Variant3/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function TireServicePage() {

  const whyFeatures = [
    { icon: faShieldHalved, title: "Safety You Can Feel", description: "Worn tires and misaligned wheels affect braking distance and handling. A rotation or alignment check is one of the cheapest ways to stay safe on the road." },
    { icon: faClock,        title: "Extend Tire Life",    description: "Regular rotation evens out tread wear across all four tires — often adding thousands of miles to the life of a set." },
    { icon: faCheckCircle,  title: "Alignment Done Right", description: "We check camber, caster, and toe against manufacturer spec — both 2-wheel and 4-wheel alignment available." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 5400, label: "Tires rotated, balanced, or replaced across Middle Tennessee", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 20,   label: "Average tread life improvement with regular rotation",         suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years keeping Middle Tennessee drivers rolling safely",        suffix: "+", duration: 2 },
  ];

  const expectations = [
    { icon: faSearch,      title: "Tread & Wear Inspection",        description: "We measure tread depth at multiple points and look for uneven wear patterns that point to alignment or suspension issues." },
    { icon: faRotateLeft,  title: "Rotation & Balancing",           description: "Tires rotated front-to-back (and side-to-side where applicable) and balanced on a computer wheel balancer for a smooth ride." },
    { icon: faCheckCircle, title: "2-Wheel & 4-Wheel Alignment",    description: "We check and adjust camber, caster, and toe to manufacturer spec — 4-wheel alignment for most modern vehicles, 2-wheel where applicable." },
    { icon: faShieldHalved, title: "Flat-Rate Pricing on New Tires", description: "Need replacements? We quote a flat, all-in price per tire — mounting, balancing, and disposal included." },
  ];

  const processSteps = [
    { number: 1, title: "Inspection",    description: "We check tread depth, wear pattern, and air pressure on all four tires — most inspections take 15 minutes.", icon: faSearch },
    { number: 2, title: "Written Quote", description: "Flat-rate pricing for rotation, balancing, alignment, or new tires — approved by you before we start.",      icon: faFileContract },
    { number: 3, title: "Service",       description: "Rotation, balancing, alignment, or replacement completed by an ASE certified technician.",                    icon: faRotateLeft },
    { number: 4, title: "Road Test",     description: "We road-test after alignment or replacement to confirm the vehicle tracks straight and rides smooth.",        icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Tire Pricing",       description: "New tire pricing includes mounting, balancing, and disposal — no surprise add-ons at checkout." },
    { icon: faRotateLeft,   title: "Free Rotation with Purchase",  description: "Buy a set of tires from us and rotations are free for the life of the tread." },
    { icon: faShieldHalved, title: "3-Year / 36,000-Mile Warranty", description: "Alignment and repair work is backed by our nationwide parts and labor warranty." },
    { icon: faLock,         title: "ASE Certified Technicians",    description: "Every alignment and tire service is performed by an ASE certified tech on calibrated equipment." },
  ];

  const localAreas = [
    { town: "Franklin",      benefit: "Home base — fastest scheduling for tire service and alignment.", badge: "Home Base" },
    { town: "Brentwood",     benefit: "Full tire service coverage for Brentwood drivers.",                badge: "" },
    { town: "Nashville",     benefit: "Regular route — quick turnaround for Nashville commuters.",       badge: "" },
    { town: "Spring Hill",   benefit: "Same-day tire rotation and balancing for Spring Hill.",           badge: "" },
    { town: "Murfreesboro",  benefit: "On our regular route — fast response for Murfreesboro.",          badge: "" },
    { town: "Cool Springs",  benefit: "Convenient tire service for Cool Springs commuters.",              badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate new tire pricing",        us: "✅ Mounting & balancing included", others: "❌ Add-on fees at checkout" },
    { feature: "Free rotations with tire purchase", us: "✅ Life of the tread",              others: "❌ Rarely included" },
    { feature: "4-wheel alignment available",       us: "✅ Calibrated equipment",           others: "❌ 2-wheel only, often" },
    { feature: "3-year/36,000-mile warranty",       us: "✅ On repair work",                 others: "❌ Limited or none" },
    { feature: "ASE certified technicians",          us: "✅ All techs",                      others: "❌ Varies" },
  ];

  const faq = [
    { question: "How often should tires be rotated?", answer: "Every 5,000–7,500 miles, or roughly every other oil change. Regular rotation evens out tread wear across all four tires and can meaningfully extend the life of a set." },
    { question: "How do I know if I need an alignment?", answer: "The car pulling to one side, the steering wheel off-center when driving straight, or uneven tread wear on one edge of a tire are the classic signs. If you've hit a pothole or curb hard, it's worth checking even without symptoms." },
    { question: "What's the difference between 2-wheel and 4-wheel alignment?", answer: "2-wheel (front-end) alignment adjusts only the front wheels and is used mainly on older vehicles with a solid rear axle. Most modern vehicles have independent rear suspension and need a 4-wheel alignment to be adjusted correctly — we'll tell you which your vehicle needs." },
    { question: "How much does tire replacement cost?", answer: "It depends heavily on your vehicle and tire size, but most passenger tires run $100–$250 each installed, with mounting, balancing, and disposal included in our flat-rate price. We'll give you options at a few price points." },
    { question: "What causes uneven tire wear?",       answer: "Misalignment, under- or over-inflation, worn suspension components, or skipping rotations are the most common causes. We check for all of these during a tire inspection so we're fixing the cause, not just replacing the tire." },
  ];

  const crossServices = [
    { icon: faShieldHalved, title: "Brake Repair",             body: "Tires and brakes wear together — get both checked in one visit.",                link: "/services/brake-repair" },
    { icon: faRotateLeft,   title: "Oil Change & Maintenance", body: "Add a tire rotation to your next scheduled maintenance visit.",                    link: "/services/oil-change-maintenance" },
    { icon: faSearch,       title: "Engine Diagnostics",        body: "Check engine light on? We diagnose the cause with a flat-rate scan.",              link: "/services/engine-diagnostics" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Tire Service & Wheel Alignment" },
      ]} />

      <SectionIntro
        title="Tire Service & Wheel Alignment in Franklin, TN"
        subtitle="Rotation, balancing, replacement, and 2-wheel or 4-wheel alignment — flat-rate pricing and a 3-year/36,000-mile warranty on repair work."
      />

      <TrustBar headline="5,400+ tires rotated, balanced, or replaced for Middle Tennessee drivers" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Franklin" features={whyFeatures} title="Why Tire Service Matters" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Our Tire Service Results" metrics={metrics} cityName="Franklin" />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How We Handle Tire Service" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Franklin" areas={localAreas} servicePath="services/tire-service" title="Tire Service Across Middle Tennessee" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Franklin" faq={faq} title="Tire Service & Alignment FAQs" />
      </div>

      <CTABanner
        headline="Pulling, Vibrating, or Worn Unevenly? Let's Take a Look."
        subline="Rotation, balancing, alignment, and flat-rate tire replacement — backed by a 3-year/36,000-mile warranty on repair work."
        primaryText="Call Us Now"
        primaryLink="tel:+16159006400"
        secondaryText="Book Tire Service"
        secondaryLink="/appointments"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Pair With These Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant3
          title="Schedule Tire Service"
          cityName="Franklin"
          slug="services/tire-service"
          spot="tire-service-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
