// Redline Auto Care — AC & Heating Repair Page
// Order: Breadcrumb → SectionIntro → TrustBar → ProcessTimeline → WhatToExpect
//        → ImpactMetrics → WhyChooseUs → GuaranteeSection → LocalServiceAreas
//        → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faFan, faFilter, faThermometerHalf,
  faLeaf, faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function ACHeatingRepairPage() {

  const processSteps = [
    { number: 1, title: "Diagnose",             description: "We check refrigerant levels, test the compressor and blower motor, and pinpoint exactly why your A/C or heat isn't working.", icon: faSearch },
    { number: 2, title: "Honest Recommendation", description: "We recommend the actual fix and give you options with real pros, cons, and pricing — no upselling equipment you don't need.", icon: faCheckCircle },
    { number: 3, title: "Repair & Recharge",     description: "A/C recharge, compressor or condenser repair, heater core, or blower motor service completed by an ASE certified tech.",       icon: faShieldHalved },
    { number: 4, title: "Verify & Test",         description: "We verify vent temperature and system performance before you leave — so you know it's actually fixed.",                       icon: faRotateLeft },
  ];

  const expectations = [
    { icon: faWind,          title: "A/C Recharge & Leak Check",       description: "We recharge your system with the correct refrigerant (R-134a or R-1234yf) and check for leaks before and after — a recharge that doesn't address a leak is a repeat visit waiting to happen." },
    { icon: faFan,           title: "Compressor & Condenser Repair",   description: "The compressor and condenser are the heart of your A/C system. We diagnose and repair both, from clutch issues to full compressor replacement." },
    { icon: faThermometerHalf, title: "Heater Core & Blower Motor",    description: "No heat blowing? We diagnose and repair heater cores, blower motors, and resistors so you're not driving cold all winter." },
    { icon: faFilter,        title: "Cabin Air Filter & System Check", description: "We check your cabin air filter and full climate control system as part of every A/C or heating visit — small issues caught before they get expensive." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2600, label: "A/C and heating repairs completed",              suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97,   label: "First-visit fix rate",                            suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years keeping Middle Tennessee drivers comfortable", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faSearch,       title: "Real Diagnosis Before Recharge",     description: "A recharge without a leak check just means you're back in six months. We pressure-test and diagnose the actual cause before recommending a fix." },
    { icon: faShieldHalved, title: "R-134a and R-1234yf Both Serviced",  description: "We service both older R-134a systems and newer R-1234yf systems — correctly identified and handled per EPA regulations." },
    { icon: faLeaf,         title: "Long-Term Fixes, Not Band-Aids",     description: "We fix the root cause — a leaking hose, a failing compressor, a cracked heater core — not just top off refrigerant and send you on your way." },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate A/C & Heating Quote",  description: "The price we quote for a recharge, repair, or component replacement is the price you pay." },
    { icon: faRotateLeft,   title: "3-Year / 36,000-Mile Warranty",  description: "Every A/C and heating repair is backed by a full parts and labor warranty, nationwide." },
    { icon: faShieldHalved, title: "Leak Check Included",            description: "We don't recharge without checking for leaks first — so you're not paying for the same fix twice." },
    { icon: faLock,         title: "ASE Certified Technicians",      description: "Every technician working on your climate control system is ASE certified." },
  ];

  const localAreas = [
    { town: "Franklin",      benefit: "Home base — fastest scheduling for A/C and heating repair.", badge: "Home Base" },
    { town: "Brentwood",     benefit: "Full A/C and heating service coverage for Brentwood.",         badge: "" },
    { town: "Nashville",     benefit: "Regular route — quick turnaround for Nashville commuters.",   badge: "" },
    { town: "Spring Hill",   benefit: "Same-day A/C diagnostics for Spring Hill.",                    badge: "" },
    { town: "Murfreesboro",  benefit: "On our regular route — fast response for Murfreesboro.",       badge: "" },
    { town: "Cool Springs",  benefit: "Convenient A/C and heating service for Cool Springs commuters.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Leak check before recharge",       us: "✅ Always",         others: "❌ Recharge-only, no check" },
    { feature: "R-134a and R-1234yf serviced",     us: "✅ Both systems",   others: "❌ Limited system support" },
    { feature: "3-year/36,000-mile warranty",      us: "✅ Every repair",   others: "❌ Parts only, or none" },
    { feature: "Flat-rate written quote",          us: "✅ Before any work", others: "❌ Hourly + estimate" },
    { feature: "ASE certified technicians",         us: "✅ All techs",      others: "❌ Varies" },
  ];

  const faq = [
    { question: "Why is my A/C blowing warm air?",  answer: "The most common causes are low refrigerant from a leak, a failing compressor, a bad condenser, or an electrical issue with the clutch or relay. We pressure-test the system to pinpoint the actual cause before recommending a fix." },
    { question: "What's the difference between R-134a and R-1234yf refrigerant?", answer: "R-1234yf is the newer, more environmentally-friendly refrigerant required in most vehicles built after roughly 2014; R-134a is used in older vehicles. They're not interchangeable — we identify which your vehicle uses and service it correctly under current EPA regulations." },
    { question: "How much does A/C recharge or repair cost?", answer: "A recharge with leak check typically runs $150–$300. Compressor replacement is more involved and usually runs $600–$1,200 depending on the vehicle. We diagnose first and give you a flat-rate quote before any work starts." },
    { question: "My heat isn't working — is that the same system as my A/C?", answer: "They share some components (blower motor, controls) but heat comes from your engine's coolant running through the heater core, not the A/C refrigerant system. We diagnose both systems since a 'no heat' complaint can have several different causes." },
    { question: "How often does a car A/C system need to be recharged?", answer: "A properly sealed system shouldn't need regular recharging — if you're losing refrigerant, that means there's a leak somewhere. Repeated recharges without fixing a leak just mean you'll be back again in a few months." },
  ];

  const crossServices = [
    { icon: faLeaf,   title: "Oil Change & Maintenance", body: "Scheduled maintenance keeps your whole vehicle — climate system included — running reliably.", link: "/services/oil-change-maintenance" },
    { icon: faFilter, title: "Engine Diagnostics",       body: "Check engine light on too? We diagnose the cause with a flat-rate scan.",                       link: "/services/engine-diagnostics" },
    { icon: faFan,    title: "Tire Service & Wheel Alignment", body: "Rotations, replacement, and alignment for a smoother, safer ride.",                       link: "/services/tire-service" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "AC & Heating Repair" },
      ]} />

      <SectionIntro
        title="A/C & Heating Repair in Franklin, TN"
        subtitle="A/C recharge, compressor and condenser repair, heater core and blower motor service — for R-134a and R-1234yf systems, backed by a 3-year/36,000-mile warranty."
      />

      <TrustBar headline="2,600+ A/C and heating repairs completed for Middle Tennessee drivers" />

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="A/C & Heating Services We Provide" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="A/C & Heating Repair by the Numbers" metrics={metrics} cityName="Franklin" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Franklin" features={whyFeatures} title="How We Approach A/C & Heating Repair" />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Franklin" areas={localAreas} servicePath="services/ac-heating-repair" title="A/C & Heating Repair Across Middle Tennessee" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Franklin" faq={faq} title="A/C & Heating Repair FAQs" />
      </div>

      <CTABanner
        headline="No A/C or No Heat? We'll Find the Real Cause."
        subline="Leak checks, recharges, and full climate system repair — backed by a 3-year/36,000-mile warranty."
        primaryText="Call Us Now"
        primaryLink="tel:+16159006400"
        secondaryText="Book Service"
        secondaryLink="/appointments"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Pair With These Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant2
          title="Schedule A/C or Heating Repair"
          cityName="Franklin"
          slug="services/ac-heating-repair"
          spot="ac-heating-repair-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
