// Redline Auto Care — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faSearch, faWrench, faClipboardCheck, faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2012",
      description: "Redline Auto Care was founded in Franklin by Marcus Reyes, a Middle Tennessee native and ASE Master Technician with over 20 years in the trade. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust with Your Vehicle",
      description: "Every technician on our team is background-checked and ASE Certified. We treat every vehicle that comes through our bay doors like it's our own — clean workspace, careful handling, no shortcuts.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell repairs you don't need. We won't recommend a replacement when a repair will do the job for years. Our reputation is built on straight talk — and 13 years of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 12000, label: "Vehicles we've serviced across Middle Tennessee", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rate",                       suffix: "%", duration: 2 },
    { icon: faClock,     value: 13,    label: "Years serving Franklin and Middle Tennessee",       suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free Diagnostic Visit",       description: "Bring your vehicle in and we'll inspect it and explain exactly what's wrong — no guesswork, no pressure. Diagnostic fee waived when you proceed.",  icon: faSearch },
    { number: 2, title: "Flat-Rate Written Quote",      description: "You get a clear, upfront price before we touch anything. No hourly billing, no surprise line items on the invoice.",                                 icon: faClipboardCheck },
    { number: 3, title: "ASE Certified Repair Work",    description: "Every job is completed by an ASE Certified Master Technician using quality parts — done right the first time.",                                       icon: faWrench },
    { number: 4, title: "3-Year / 36,000-Mile Warranty", description: "Every repair we complete is backed by our nationwide warranty on both parts and labor — no fine print.",                                              icon: faHandshake },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About Redline Auto Care"
        subtitle="Franklin-owned, Franklin-operated, and Franklin-proud since 2012. We do honest auto repair at fair prices for the drivers and fleets we've called neighbors for 13 years."
      />

      <TrustBar headline="12,000+ Middle Tennessee vehicles trust Redline — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Franklin"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="13 Years, By the Numbers" metrics={metrics} cityName="Franklin" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Franklin's Auto Repair Shop — Ready When You Need Us"
        subline="Same-day appointments available. Flat-rate pricing. 3-year/36,000-mile warranty. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+16159006400"
        secondaryText="Book an Appointment"
        secondaryLink="/appointments"
      />

    </main>
  );
}
