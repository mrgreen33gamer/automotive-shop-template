// Redline Auto Care — Oil Change & Maintenance Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhatToExpect → WhyChooseUs
//        → GuaranteeSection → ProcessTimeline → ImpactMetrics → Testimonials
//        → ValueComparison → FAQ → CTABanner → Form
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb       from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect     from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import ProcessTimeline  from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import ValueComparison  from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ              from "#/PageComponents/FAQ/FAQ";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import Variant2         from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faOilCan, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faLeaf, faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function MaintenancePage() {

  const expectations = [
    { icon: faOilCan,        title: "Full-Synthetic Oil Change",  description: "Oil and filter change with your choice of conventional, blend, or full-synthetic, plus a fluid top-off and tire pressure check every visit." },
    { icon: faSearch,        title: "Multi-Point Inspection",     description: "Brakes, belts, hoses, battery, lights, and suspension checked at every visit — so small issues get caught before they become expensive ones." },
    { icon: faCheckCircle,   title: "Written Inspection Report",  description: "After every visit you get a written report with everything we inspected, what we found, and any recommendations — no mystery, no pressure." },
    { icon: faLeaf,          title: "Priority Scheduling & Discounts", description: "Plan members get priority booking during busy weeks and 15% off any repair parts needed. The plan more than pays for itself." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Prevent Breakdowns Before They Happen",  description: "Most roadside breakdowns are preventable with proper maintenance. Our plan customers consistently avoid the $500–$3,000 repairs that catch neglected vehicles off guard." },
    { icon: faShieldHalved, title: "Keep Your Manufacturer Warranty Valid",  description: "Most factory warranties require documented, on-schedule maintenance. Our plan provides the service records your warranty demands." },
    { icon: faLeaf,         title: "Better Mileage, Lower Costs",            description: "A neglected engine works harder and burns more fuel. A properly maintained vehicle can see meaningfully better mileage — often more than covering the plan's annual cost." },
  ];

  const guarantees = [
    { icon: faFileContract, title: "No Long-Term Contracts",   description: "Month-to-month plan. Cancel anytime with 30 days notice — no cancellation fees." },
    { icon: faRotateLeft,   title: "15% Off All Repair Parts", description: "Plan members receive 15% off all repair parts needed throughout the year." },
    { icon: faHeadset,      title: "Priority Booking",         description: "Jump to the front of the queue during our busiest weeks of the year." },
    { icon: faLock,         title: "Manufacturer Warranty Docs", description: "We provide written service records for your manufacturer warranty compliance." },
  ];

  const processSteps = [
    { number: 1, title: "Sign Up",          description: "Call or sign up online. No contracts — cancel anytime with 30 days notice.",                                    icon: faFileContract },
    { number: 2, title: "First Service Visit", description: "We schedule your first oil change and multi-point inspection around your mileage and driving habits.",       icon: faSearch },
    { number: 3, title: "Ongoing Reminders",   description: "We track your mileage and reach out when your next service is due — you never have to remember on your own.", icon: faCalendarCheck },
    { number: 4, title: "Priority Access",     description: "Plan members jump the queue during busy weeks and get 15% off any repair parts needed throughout the year.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 900, label: "Vehicles on the Redline maintenance plan",       suffix: "+", duration: 2 },
    { icon: faChartLine, value: 70,  label: "Of breakdowns prevented by proper maintenance",  suffix: "%", duration: 2 },
    { icon: faClock,     value: 13,  label: "Years keeping Middle Tennessee drivers on the road", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "No long-term contract",       us: "✅ Month-to-month",    others: "❌ Annual lock-in" },
    { feature: "Written inspection report",   us: "✅ After every visit", others: "❌ Verbal summary only" },
    { feature: "Parts discount included",     us: "✅ 15% off",           others: "❌ No discount" },
    { feature: "Priority scheduling",         us: "✅ Jump the queue",    others: "❌ Standard wait" },
    { feature: "Mileage-based reminders",     us: "✅ We track it for you", others: "❌ You remember yourself" },
  ];

  const faq = [
    { question: "How much does the maintenance plan cost?",              answer: "Our plan is $189/year or $18/month, covering scheduled oil changes and multi-point inspections based on your mileage. The 15% parts discount and priority booking typically offset the cost within a single visit." },
    { question: "What's included in a standard oil change visit?",       answer: "Oil and filter change (conventional, blend, or full-synthetic — your choice), fluid top-off, tire pressure check, and a full multi-point inspection covering brakes, belts, hoses, battery, and lights." },
    { question: "Is there a contract or cancellation fee?",              answer: "No contract, no cancellation fee. Cancel anytime with 30 days notice. We want you to stay because the service is worth it — not because you're locked in." },
    { question: "Does a maintenance plan void my manufacturer warranty?", answer: "The opposite, actually — skipping maintenance is what voids most factory warranties. Our service visits generate documented records that demonstrate compliance with manufacturer requirements." },
    { question: "Can I add more than one vehicle to the plan?",          answer: "Yes — multi-vehicle discounts are available for households and small business fleets with more than one vehicle. Call us for a custom quote." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Oil Change & Maintenance" },
      ]} />

      <SectionIntro
        title="Oil Change & Maintenance Plans in Franklin, TN"
        subtitle="Scheduled oil changes, multi-point inspections, 15% off repairs, priority booking — month-to-month, no contracts."
      />

      <TrustBar headline="900+ Middle Tennessee drivers on the Redline maintenance plan" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What's Included in Every Visit" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Franklin" features={whyFeatures} title="Why a Maintenance Plan Pays for Itself" />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
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
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Franklin" faq={faq} title="Oil Change & Maintenance FAQs" />
      </div>

      <CTABanner
        headline="Stop Reacting. Start Preventing."
        subline="$189/year or $18/month. Scheduled oil changes, 15% off repairs, priority booking, no contracts."
        primaryText="Sign Up Now"
        primaryLink="/contact"
        secondaryText="Call Us First"
        secondaryLink="tel:+16159006400"
      />

      <div className={styles.section}>
        <Variant2
          title="Sign Up for the Maintenance Plan"
          cityName="Franklin"
          slug="services/oil-change-maintenance"
          spot="maintenance-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
