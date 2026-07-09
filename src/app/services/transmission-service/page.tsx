// Redline Auto Care — Transmission Service Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhyChooseUs → WhatToExpect
//        → ProcessTimeline → ImpactMetrics → Testimonials → LocalServiceAreas
//        → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTrophy, faChartLine,
  faFan, faWrench, faOilCan,
} from "@fortawesome/free-solid-svg-icons";

export default function TransmissionServicePage() {

  const whyFeatures = [
    { icon: faClock,        title: "Same-Day Fluid Service",       description: "Transmission fluid flush and filter service — most appointments completed same day." },
    { icon: faSearch,       title: "Automatic & Manual",           description: "From routine fluid service to full diagnostics for slipping or rough shifting — we service both automatic and manual transmissions." },
    { icon: faShieldHalved, title: "Diagnose Before We Recommend", description: "Slipping, delayed engagement, or rough shifts get a real diagnosis — not an automatic recommendation to rebuild or replace." },
  ];

  const expectations = [
    { icon: faSearch,       title: "Full Transmission Inspection", description: "We check fluid condition and level, scan for stored codes, and road-test to identify slipping, delayed engagement, or rough shifts." },
    { icon: faFileContract, title: "Flat-Rate Service Quote",      description: "Written price before any work begins — whether it's a routine fluid service or a diagnostic for a shifting problem." },
    { icon: faCheckCircle,  title: "Fluid & Filter Done Right",    description: "Full fluid flush (not just a drain-and-fill) with filter replacement on applicable vehicles, using manufacturer-spec fluid." },
    { icon: faShieldHalved, title: "3-Year / 36,000-Mile Warranty", description: "Every transmission repair is backed by a full parts and labor warranty, nationwide." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",         description: "Same-day fluid service appointments available — call or book online.",                 icon: faHeadset },
    { number: 2, title: "Inspection & Diagnosis", description: "We check fluid condition, scan for codes, and road-test to identify the actual issue.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",      description: "Written price before we start — for fluid service or a full repair.",                    icon: faFileContract },
    { number: 4, title: "Service & Road Test",  description: "Completed with manufacturer-spec fluid, then road-tested to confirm smooth shifting.",   icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Transmission services completed across Middle Tennessee", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 96,   label: "Same-visit service completion rate",                      suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years of transmission service experience",                suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Franklin",      benefit: "Home base — fastest transmission service scheduling.",       badge: "Home Base" },
    { town: "Brentwood",     benefit: "Full transmission service coverage for Brentwood drivers.",  badge: "" },
    { town: "Nashville",     benefit: "Regular route — quick turnaround for Nashville commuters.",  badge: "" },
    { town: "Spring Hill",   benefit: "Same-day fluid service for Spring Hill.",                     badge: "" },
    { town: "Murfreesboro",  benefit: "On our regular route — fast response for Murfreesboro.",     badge: "" },
    { town: "Cool Springs",  benefit: "Convenient transmission service for Cool Springs commuters.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Full fluid flush, not drain-and-fill",   us: "✅ Every service",       others: "❌ Often drain-and-fill only" },
    { feature: "Manufacturer-spec fluid",                us: "✅ Always",              others: "❌ Generic fluid common" },
    { feature: "Diagnosis before repair recommendation", us: "✅ Always",              others: "❌ Replace-first approach" },
    { feature: "3-year/36,000-mile warranty",            us: "✅ Every repair",        others: "❌ Parts only, or none" },
    { feature: "Automatic and manual serviced",          us: "✅ Both",                others: "❌ Automatic only, often" },
  ];

  const faq = [
    { question: "How often should transmission fluid be changed?", answer: "Most manufacturers recommend every 30,000–60,000 miles, though severe driving conditions (towing, stop-and-go traffic) can shorten that interval. Check your owner's manual — we'll also flag it during your regular maintenance visits." },
    { question: "What are signs my transmission needs service?",   answer: "Slipping between gears, delayed engagement when shifting into drive, rough or hard shifts, unusual noises, or fluid that smells burnt are all signs to get it checked. Catching these early is often the difference between a fluid service and a full rebuild." },
    { question: "How much does transmission service cost?",        answer: "A full fluid flush typically runs $150–$250. Diagnostics for slipping or shifting issues start with a $100–$150 diagnostic fee, waived on repair. More involved repairs vary widely depending on what's found — we'll give you a written quote before any work starts." },
    { question: "Do you service manual transmissions too?",        answer: "Yes — fluid service, clutch-related diagnostics, and repair for manual transmissions in addition to automatics and CVTs." },
    { question: "Can a fluid flush fix a slipping transmission?",  answer: "Sometimes, especially if the fluid is old, low, or contaminated. But persistent slipping can also point to worn internal components that a fluid change won't fix — we diagnose before recommending, so you're not paying for a flush that won't solve the problem." },
  ];

  const crossServices = [
    { icon: faFan,     title: "AC & Heating Repair",      body: "Climate system diagnosis and repair for every make and model.",                            link: "/services/ac-heating-repair" },
    { icon: faWrench,  title: "Engine Diagnostics",       body: "Check engine light on? We diagnose and repair the same day in most cases.",                link: "/services/engine-diagnostics" },
    { icon: faOilCan,  title: "Oil Change & Maintenance", body: "Scheduled maintenance catches problems — including early transmission issues — before they get expensive.", link: "/services/oil-change-maintenance" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Transmission Service" },
      ]} />

      <SectionIntro
        title="Transmission Service in Franklin, TN"
        subtitle="Fluid flushes, filter service, and diagnostics for slipping or rough shifting — automatic and manual, backed by a 3-year/36,000-mile warranty."
      />

      <TrustBar headline="1,800+ transmission services completed for Middle Tennessee drivers" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Franklin" features={whyFeatures} title="Transmission Service Done Right" />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect for Transmission Service" expectations={expectations} />
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
        <LocalServiceAreas cityName="Franklin" areas={localAreas} servicePath="services/transmission-service" title="Transmission Service Across Middle Tennessee" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Franklin" faq={faq} title="Transmission Service FAQs" />
      </div>

      <CTABanner
        headline="Slipping Gears or Rough Shifts? Let's Diagnose It."
        subline="Fluid service, diagnostics, and repair for automatic and manual transmissions — backed by a 3-year/36,000-mile warranty."
        primaryText="Call Us Now"
        primaryLink="tel:+16159006400"
        secondaryText="Book Service"
        secondaryLink="/appointments"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services We Offer" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant2
          title="Schedule Transmission Service"
          cityName="Franklin"
          slug="services/transmission-service"
          spot="transmission-service-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
