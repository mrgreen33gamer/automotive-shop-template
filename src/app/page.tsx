// Redline Auto Care — Homepage
// Phase 2: Reshuffled component order + fresh content
// Original order: WelcomePage → TrustBar → ServiceCards → WhatToExpect → WhyChooseUs
//                 → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection
//                 → LocalServiceAreas → FAQ → CTABanner → BlogPreview → Form
//
// New order:      WelcomePage → TrustBar → ImpactMetrics → ServiceCards
//                 → WhyChooseUs → CTABanner (mid) → ProcessTimeline → Testimonials
//                 → GuaranteeSection → LocalServiceAreas → WhatToExpect → FAQ
//                 → BlogPreview → Form
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faFan, faFire, faWrench, faFilter, faThermometerHalf, faWind,
  faTrophy, faChartLine, faClock,
  faBolt, faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faFileAlt, faRotateLeft, faLock, faStar,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  // ── Services ────────────────────────────────────────────────────────────────
  const services = [
    {
      icon: faFan,
      title: "Oil Change & Maintenance",
      body: "Full-synthetic and conventional oil changes, multi-point inspection on every visit. Most vehicles in and out in under 30 minutes.",
      link: "/services/oil-change-maintenance",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faFire,
      title: "Brake Repair & Replacement",
      body: "Pads, rotors, calipers, and full brake system diagnostics — repaired fast with a free brake inspection on every visit.",
      link: "/services/brake-repair",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faWrench,
      title: "Engine Diagnostics",
      body: "Check engine light on? Computerized diagnostics pinpoint the real issue. We never recommend work your vehicle doesn't need.",
      link: "/services/engine-diagnostics",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faFilter,
      title: "Transmission Service",
      body: "Fluid flushes, filter replacement, and full transmission diagnostics — protects one of the most expensive systems in your vehicle.",
      link: "/services/transmission-service",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faThermometerHalf,
      title: "AC & Heating Repair",
      body: "Blowing warm in summer or cold in winter? We diagnose and repair your vehicle's climate system fast, with upfront flat-rate pricing.",
      link: "/services/ac-heating-repair",
      image: "/pages/home/welcome/before.jpg",
    },
    {
      icon: faWind,
      title: "Tire Service & Wheel Alignment",
      body: "Rotations, replacements, and precision wheel alignment. Even wear, better mileage, and a smoother ride in every lane.",
      link: "/services/tire-service",
      image: "/pages/home/welcome/after.jpg",
    },
  ];

  // ── Impact metrics (moved up — builds trust before selling) ─────────────────
  const metrics = [
    { icon: faTrophy,    value: 12000, label: "Vehicles serviced across Middle Tennessee",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 13,    label: "Years of local auto repair experience",       suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating",                suffix: "%", duration: 2 },
  ];

  // ── Why Choose Us (3 differentiators) ───────────────────────────────────────
  const whyFeatures = [
    {
      icon: faBolt,
      title: "Fast, Same-Day Appointments",
      description: "Need your car back on the road today? We offer same-day appointments for most repairs and maintenance. Middle Tennessee traffic doesn't wait, and neither do we.",
    },
    {
      icon: faShieldHalved,
      title: "ASE Certified Master Technicians",
      description: "Every technician on our crew holds ASE Master certification, and Redline is an ASE Blue Seal of Excellence Shop. No unlicensed subs, no shortcuts. Your vehicle is protected from the first call to the final invoice.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2012",
      description: "We're not a franchise. Redline Auto Care was founded in Franklin by Marcus Reyes, a Middle Tennessee native with years in the trade. Every decision is made locally, and every call is answered by someone who lives here.",
    },
  ];

  // ── How it works (process) ───────────────────────────────────────────────────
  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day appointment that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Tech Arrives On Time",
      description: "Uniformed, background-checked tech shows up in the window we promised. Full diagnosis — explained in plain English, not shop jargon.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before we touch anything. You decide — zero pressure to proceed. The quote covers parts and labor, and it never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Warranted",
      description: "Quality parts, clean worksite, 3-year / 36,000-mile nationwide warranty on every repair. We leave when you're satisfied — not when we feel like it.",
      icon: faCheckCircle,
    },
  ];

  // ── What to expect (moved lower — reinforces process detail after trust built) ─
  const expectations = [
    {
      icon: faSearch,
      title: "Honest Vehicle Assessment",
      description: "We diagnose what's actually wrong — not what's most profitable to fix. You see the findings before we recommend anything.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Service",
      description: "Seat covers on, floor mats protected, vehicle left exactly as we found it. Every single visit.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work starts. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Quality Parts Every Time",
      description: "We use OEM-quality parts on every repair, backed by the full 3-year / 36,000-mile warranty. No gray-market components, no shortcuts.",
    },
  ];

  // ── Service areas ────────────────────────────────────────────────────────────
  const localAreas = [
    { town: "Franklin",      benefit: "Home base — fastest scheduling and most available techs in the shop.", badge: "Home Base" },
    { town: "Brentwood",     benefit: "Full coverage for personal vehicles and small business fleets.",        badge: "" },
    { town: "Nashville",     benefit: "Same-day availability for Nashville drivers and commuters.",            badge: "" },
    { town: "Spring Hill",   benefit: "Regular service area — quick turnaround guaranteed.",                   badge: "" },
    { town: "Murfreesboro",  benefit: "Full coverage for Murfreesboro drivers and fleets.",                    badge: "" },
    { town: "Cool Springs",  benefit: "Convenient drop-off and shuttle service for Cool Springs customers.",   badge: "" },
  ];

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  const faq = [
    {
      question: "How much does brake repair cost in Franklin?",
      answer: "Most brake jobs run $150–$650 depending on the issue. Pad replacement is typically $150–$300 per axle. Rotor resurfacing or replacement runs $250–$500. We always provide a flat-rate written quote before starting — the diagnostic fee is waived when you proceed.",
    },
    {
      question: "Do you offer same-day appointments?",
      answer: "Yes — same-day appointments are available most days for oil changes, brakes, and diagnostics. Call us at (615) 900-6400 to check availability.",
    },
    {
      question: "How quickly can I get in?",
      answer: "Same-day service is available most days. We'll give you an honest ETA when you call — not a vague window.",
    },
    {
      question: "What makes and models do you service?",
      answer: "All major makes and models — domestic and import. Whether it's a daily driver, a work truck, or a fleet vehicle, our ASE Certified techs have you covered.",
    },
    {
      question: "Are you ASE certified?",
      answer: "Yes — Redline Auto Care is an ASE Blue Seal of Excellence Shop, staffed entirely by ASE Certified Master Technicians, bonded and insured. Certification available on request.",
    },
    {
      question: "Do you offer financing for larger repairs?",
      answer: "Yes — flexible financing with approved credit, including promotional interest options for qualifying customers. Ask us when you get your quote.",
    },
  ];

  // ── TrustBar badges (auto-repair-specific) ────────────────────────────────
  const trustBadges = [
    { icon: faStar,          label: "4.9 Google Rating",    sub: "850+ Reviews" },
    { icon: faShieldHalved,  label: "ASE Blue Seal Shop",   sub: "Master Technicians" },
    { icon: faTrophy,        label: "ASE Certified",        sub: "All Technicians" },
    { icon: faClock,         label: "Same-Day Service",     sub: "Most Repairs" },
    { icon: faBolt,          label: "Fast Turnaround",      sub: "In & Out Quick" },
    { icon: faFileAlt,       label: "Flat-Rate Pricing",    sub: "No Surprises" },
    { icon: faRotateLeft,    label: "3-Yr/36k Warranty",    sub: "Parts & Labor" },
    { icon: faLock,          label: "No Contracts",         sub: "Pay As You Go" },
    { icon: faWrench,        label: "All Makes Serviced",   sub: "Any Make & Model" },
    { icon: faUsers,         label: "Locally Owned",        sub: "Since 2012" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Franklin's trusted auto repair shop — ASE certified, insured, and warrantied on every job"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Auto Repair Services for Your Vehicle"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Franklin"
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Franklin"
          features={whyFeatures}
          title="What Makes Redline Different"
        />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <CTABanner
        headline="Honest Auto Repair. No Surprises."
        subline="Diagnostics, brakes, engines, and maintenance — digital inspections and written quotes before any wrench turns."
        primaryText="Call (615) 900-6400"
        primaryLink="tel:+16159006400"
        secondaryText="Schedule Service"
        secondaryLink="/contact"
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Franklin"
          areas={localAreas}
          servicePath=""
          title="Serving All of Middle Tennessee"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Service Visit, Every Time"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ
          cityName="Franklin"
          faq={faq}
          title="Auto Repair Questions — Answered Straight"
        />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Request Service or a Free Quote"
          cityName="Franklin"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
