// Redline Auto Care — Engine Diagnostics Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhatToExpect → WhyChooseUs
//        → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection
//        → LocalServiceAreas → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTrophy, faChartLine,
  faThermometerHalf, faWrench, faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function EngineDiagnosticsPage() {

  const expectations = [
    { icon: faSearch,       title: "Same-Day OBD-II Scan",             description: "We connect a professional-grade scan tool, pull the stored codes, and explain what's actually wrong — not just a generic code number." },
    { icon: faFileContract, title: "Flat-Rate Diagnostic Fee",          description: "A $100–$150 diagnostic fee gets you a real answer, and it's waived when you approve the repair." },
    { icon: faCheckCircle,  title: "Fix the Cause, Not Just the Code",  description: "A code points to a system, not always the exact part. Our techs verify the actual failure before recommending a repair." },
    { icon: faShieldHalved, title: "3-Year / 36,000-Mile Warranty",     description: "Every diagnostic repair is backed by a full parts and labor warranty — nationwide." },
  ];

  const whyFeatures = [
    { icon: faClock,         title: "Most Diagnostics Completed Same Day", description: "Call ahead and in most cases we'll have your car scanned and diagnosed within hours, not days." },
    { icon: faWrench,        title: "All Makes & Models",                  description: "Domestic, import, and hybrid — our ASE certified techs are trained on modern engine management systems across every major brand." },
    { icon: faShieldHalved,  title: "Financing Available",                 description: "Bigger repairs like ignition coils or sensor replacement don't have to break the bank. Ask about financing for qualified customers." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",     description: "Contact us by phone or online — we'll get your car in, usually same-day.",                     icon: faHeadset },
    { number: 2, title: "OBD-II Scan",      description: "We pull the stored codes and freeze-frame data, then verify the actual cause with hands-on testing.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",  description: "You see the exact price for parts and labor before we touch anything.",                          icon: faFileContract },
    { number: 4, title: "Repair & Re-Test", description: "Repaired with quality parts, then re-scanned to confirm the code is cleared and stays cleared.",  icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 4100, label: "Check engine light diagnostics completed",    suffix: "+", duration: 3 },
    { icon: faChartLine, value: 95,   label: "First-visit fix rate",                        suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years diagnosing Middle Tennessee vehicles",  suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Franklin",      benefit: "Home base — fastest scan-tool availability and dispatch.",  badge: "Home Base" },
    { town: "Brentwood",     benefit: "Full diagnostic coverage for Brentwood drivers.",            badge: "" },
    { town: "Nashville",     benefit: "Regular route — quick turnaround for Nashville commuters.", badge: "" },
    { town: "Spring Hill",   benefit: "Same-day diagnostic scans for Spring Hill.",                 badge: "" },
    { town: "Murfreesboro",  benefit: "On our regular route — fast response for Murfreesboro.",     badge: "" },
    { town: "Cool Springs",  benefit: "Convenient diagnostic service for Cool Springs commuters.",  badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate diagnostic fee",              us: "✅ $100–$150, waived on repair", others: "❌ Diagnostic-only, non-refundable" },
    { feature: "Root-cause verification, not just a code", us: "✅ Always",                  others: "❌ Code = guess" },
    { feature: "3-year/36,000-mile warranty",           us: "✅ Every repair",                 others: "❌ Parts only, or none" },
    { feature: "Same-day scan available",                us: "✅ Most days",                    others: "❌ Days-long wait" },
    { feature: "ASE certified technicians",               us: "✅ All techs",                    others: "❌ Varies" },
  ];

  const faq = [
    { question: "What does it mean when my check engine light comes on?", answer: "It means your engine's computer detected a reading outside normal range — anything from a loose gas cap to a failing sensor or ignition coil. An OBD-II scan pulls the stored code, but a tech still needs to verify the actual cause before you replace parts." },
    { question: "Is it safe to keep driving with the check engine light on?", answer: "If the light is steady, it's usually safe to drive carefully to get it checked soon. If it's flashing, that typically signals a misfire that can damage your catalytic converter — pull over and get it towed or diagnosed right away." },
    { question: "How much does engine diagnostics cost?",                 answer: "The diagnostic scan itself is a flat $100–$150, waived when you approve the repair. Common fixes like an O2 sensor run $150–$300, while an ignition coil replacement typically runs $200–$450 depending on the vehicle." },
    { question: "Will a generic auto parts store code scan tell me everything?", answer: "It'll give you a code, but not the full picture. Codes point to a system, not always the exact failed part. Our shop-grade diagnostic equipment and hands-on testing confirm the actual cause before you pay for a repair." },
    { question: "Why does my check engine light keep coming back after I fix something?", answer: "Either the original repair didn't address the root cause, or there's a second unrelated issue. We re-scan and road-test after every repair to confirm the code clears and stays cleared before you leave." },
  ];

  const crossServices = [
    { icon: faWrench,      title: "Transmission Service", body: "Slipping or rough shifting? We diagnose and service automatic and manual transmissions.", link: "/services/transmission-service" },
    { icon: faThermometerHalf, title: "AC & Heating Repair", body: "Climate system diagnosis and repair — A/C recharge, heater core, blower motor, and more.", link: "/services/ac-heating-repair" },
    { icon: faRotateLeft,  title: "Oil Change & Maintenance", body: "Scheduled maintenance catches small issues — like failing sensors — before they trigger a check engine light.", link: "/services/oil-change-maintenance" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Engine Diagnostics & Check Engine Light" },
      ]} />

      <SectionIntro
        title="Engine Diagnostics in Franklin, TN"
        subtitle="Check engine light diagnostics, OBD-II scanning, and sensor repair — flat-rate pricing and a 3-year/36,000-mile warranty on every repair."
      />

      <TrustBar headline="4,100+ check engine lights diagnosed for Middle Tennessee drivers" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Bring In a Check Engine Light" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Franklin" features={whyFeatures} title="Why Franklin Drivers Trust Redline for Diagnostics" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Franklin" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Franklin" areas={localAreas} servicePath="services/engine-diagnostics" title="Engine Diagnostics Across Middle Tennessee" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Franklin" faq={faq} title="Engine Diagnostics FAQs" />
      </div>

      <CTABanner
        headline="Check Engine Light On? Let's Find Out Why."
        subline="Flat-rate $100–$150 diagnostic, waived on repair. Same-day scans available, 3-year/36,000-mile warranty."
        primaryText="Call Us Now"
        primaryLink="tel:+16159006400"
        secondaryText="Book a Diagnostic"
        secondaryLink="/appointments"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Schedule Your Diagnostic"
          cityName="Franklin"
          slug="services/engine-diagnostics"
          spot="engine-diagnostics-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
