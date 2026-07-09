// Redline Auto Care — Brake Repair Page
// Order: Breadcrumb → SectionIntro → TrustBar → ImpactMetrics → WhatToExpect
//        → WhyChooseUs → ProcessTimeline → GuaranteeSection → LocalServiceAreas
//        → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faFileContract, faWrench, faTrophy, faChartLine,
  faRuler, faDollarSign, faTriangleExclamation, faOilCan, faThermometerHalf,
} from "@fortawesome/free-solid-svg-icons";

export default function BrakeRepairPage() {

  const metrics = [
    { icon: faTrophy,    value: 3200, label: "Brake jobs completed across Middle Tennessee",         suffix: "+", duration: 2 },
    { icon: faChartLine, value: 100,  label: "Of brake jobs road-tested before pickup",               suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years keeping Middle Tennessee drivers stopping safely", suffix: "+", duration: 2 },
  ];

  const expectations = [
    { icon: faSearch,       title: "Full Brake System Inspection",         description: "We measure pad thickness, check rotor wear and runout, and inspect calipers, lines, and fluid condition before recommending anything." },
    { icon: faRuler,        title: "Precise Measurements, Not Guesswork",  description: "Pad and rotor wear are measured against manufacturer spec — so you know exactly how much life is left before you pay for anything." },
    { icon: faCheckCircle,  title: "Flat-Rate Quote Before We Touch Anything", description: "You see the price for pads, rotors, or a full brake job before we start. It doesn't change once we're under the car." },
    { icon: faShieldHalved, title: "Road-Tested Before Pickup",            description: "Every brake job is bled, torqued to spec, and road-tested before your car leaves the shop." },
  ];

  const whyFeatures = [
    { icon: faTriangleExclamation, title: "We Catch Warning Signs Early",  description: "Squealing, grinding, or a soft pedal — our techs know exactly what each symptom means and check for it on every visit, not just when you ask." },
    { icon: faDollarSign,          title: "Honest, Per-Axle Pricing",      description: "We quote brake work per axle so you know exactly what pads, rotors, or a full job costs — no vague 'brake service' line items." },
    { icon: faShieldHalved,        title: "3-Year / 36,000-Mile Warranty", description: "Every brake repair is backed by our nationwide parts and labor warranty." },
  ];

  const processSteps = [
    { number: 1, title: "Free Brake Inspection", description: "We check pad thickness, rotor condition, and fluid on the spot — most inspections take 15 minutes.", icon: faSearch },
    { number: 2, title: "Written Quote",         description: "Per-axle pricing for pads, rotors, or a full brake job — approved by you before we start.",         icon: faFileContract },
    { number: 3, title: "Repair",                description: "Pads, rotors, calipers, or a fluid flush completed with quality parts by an ASE certified tech.",   icon: faWrench },
    { number: 4, title: "Road Test & Warranty",  description: "Every brake job is road-tested before pickup and backed by our 3-year/36,000-mile warranty.",       icon: faCheckCircle },
  ];

  const localAreas = [
    { town: "Franklin",      benefit: "Home base — fastest scheduling for brake inspections and repairs.", badge: "Home Base" },
    { town: "Brentwood",     benefit: "Full brake service coverage for Brentwood drivers.",                 badge: "" },
    { town: "Nashville",     benefit: "Regular route — quick turnaround for Nashville commuters.",         badge: "" },
    { town: "Spring Hill",   benefit: "Same-day brake inspections available for Spring Hill.",             badge: "" },
    { town: "Murfreesboro",  benefit: "On our regular route — fast response for Murfreesboro customers.",  badge: "" },
    { town: "Cool Springs",  benefit: "Convenient brake service for Cool Springs commuters.",               badge: "" },
  ];

  const comparisonRows = [
    { feature: "Per-axle written pricing",              us: "✅ Always",             others: "❌ Vague estimates" },
    { feature: "Pad/rotor measurements shown to you",   us: "✅ Every visit",        others: "❌ Rarely shown" },
    { feature: "3-year/36,000-mile warranty",           us: "✅ Every brake job",    others: "❌ 12 months or less" },
    { feature: "Road test before pickup",               us: "✅ Every job",          others: "❌ Not always" },
    { feature: "ASE certified technicians",              us: "✅ All techs",          others: "❌ Varies" },
  ];

  const faq = [
    { question: "How do I know if I need new brake pads?",         answer: "Squealing or a high-pitched screech usually means the wear indicator is contacting the rotor — time to check pads. Grinding means the pads are gone and metal is hitting metal, which can damage your rotors. Either way, get it inspected before it gets worse." },
    { question: "How much does brake repair cost?",                answer: "Pad replacement typically runs $150–$300 per axle; pads and rotors together run $250–$500 per axle depending on your vehicle. A brake fluid flush is usually $100–$150. We always quote per axle before starting any work." },
    { question: "How often should brake pads be replaced?",        answer: "Most pads last 30,000–70,000 miles depending on driving style and terrain. Middle Tennessee stop-and-go commuter traffic tends to wear pads faster than highway driving. We check pad thickness at every oil change so you're never caught off guard." },
    { question: "Do I need to replace rotors every time I replace pads?", answer: "Not always. If your rotors are within spec and not warped or grooved, we can resurface or reuse them. We measure rotor thickness and runout before recommending replacement — we won't sell you rotors you don't need." },
    { question: "My brake pedal feels soft or spongy — what does that mean?", answer: "That's usually air in the brake lines or a fluid leak, and it should be checked right away. A brake fluid flush and inspection can often resolve it, but it needs to be diagnosed rather than ignored." },
  ];

  const crossServices = [
    { icon: faOilCan,           title: "Oil Change & Maintenance", body: "Scheduled oil changes and multi-point inspections that catch brake wear before it becomes a problem.", link: "/services/oil-change-maintenance" },
    { icon: faTriangleExclamation, title: "Engine Diagnostics",     body: "Check engine light on too? We diagnose the cause and give you a flat-rate repair quote.",              link: "/services/engine-diagnostics" },
    { icon: faThermometerHalf,  title: "AC & Heating Repair",      body: "Keep the whole car running right — A/C recharge, heater core, and climate system repair.",            link: "/services/ac-heating-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Brake Repair & Replacement" },
      ]} />

      <SectionIntro
        title="Brake Repair in Franklin, TN"
        subtitle="Pads, rotors, calipers, and fluid flushes — per-axle pricing, free inspections, and a 3-year/36,000-mile warranty on every brake job."
      />

      <TrustBar headline="3,200+ brake jobs completed for Middle Tennessee drivers" />

      <div className={styles.section}>
        <ImpactMetrics title="Our Brake Repair Track Record" metrics={metrics} cityName="Franklin" />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Your Brake Service Includes" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Franklin" features={whyFeatures} title="Why Franklin Drivers Trust Redline for Brakes" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Franklin" areas={localAreas} servicePath="services/brake-repair" title="Brake Repair Across Middle Tennessee" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Franklin" faq={faq} title="Brake Repair FAQs" />
      </div>

      <CTABanner
        headline="Squealing, Grinding, or a Soft Pedal? Get It Checked Today."
        subline="Free brake inspection, per-axle pricing, and a 3-year/36,000-mile warranty on every repair."
        primaryText="Call Us Now"
        primaryLink="tel:+16159006400"
        secondaryText="Book an Inspection"
        secondaryLink="/appointments"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant2
          title="Book Your Brake Inspection"
          cityName="Franklin"
          slug="services/brake-repair"
          spot="brake-repair-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
