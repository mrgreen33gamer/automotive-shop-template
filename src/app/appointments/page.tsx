// src/app/appointments/page.tsx
// Redline Auto Care — Appointments
"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";

import styles from "./page.module.scss";

import SectionIntro      from "#/PageComponents/SectionIntro/SectionIntro";
import ProcessTimeline   from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import LocalCitationBlock from "#/PageComponents/LocalCitationBlock/LocalCitationBlock";
import CTABanner         from "#/PageComponents/CTABanner/CTABanner";
import Variant4          from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faPhone, faCalendarCheck, faCarSide, faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const BOOKING_STEPS = [
  {
    number: 1,
    title: "Call or Book Online",
    description: "Call (615) 900-6400 or fill out the form below. Tell us what your vehicle needs and we'll find a time that works.",
    icon: faPhone,
  },
  {
    number: 2,
    title: "We Confirm Your Appointment",
    description: "We'll confirm a same-day or next-day appointment window and let you know approximately how long the visit will take.",
    icon: faCalendarCheck,
  },
  {
    number: 3,
    title: "Drop Off or Wait On-Site",
    description: "Drop your vehicle off and grab a shuttle ride, or wait in our lobby. Ask about a loaner vehicle for longer repairs.",
    icon: faCarSide,
  },
  {
    number: 4,
    title: "Pick Up — Done Right",
    description: "We'll call when it's ready with a clear, flat-rate invoice. Every repair is backed by our 3-year / 36,000-mile warranty.",
    icon: faCircleCheck,
  },
];

const APPOINTMENT_HOURS = [
  { days: 'Monday – Friday', hours: '7:00 AM – 6:00 PM' },
  { days: 'Saturday',        hours: '8:00 AM – 2:00 PM' },
  { days: 'Sunday',          hours: 'Closed' },
];

export default function AppointmentsPage() {
  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Appointments" },
      ]} />

      <SectionIntro
        title="Book Your Appointment"
        subtitle="Same-day appointments available for most repairs and maintenance. Call, or book online below — no account required."
      />

      <div className={styles.section}>
        <ProcessTimeline steps={BOOKING_STEPS} />
      </div>

      {/* ── What to bring / loaner / financing ── */}
      <div className={styles.section}>
        <div className={styles.infoIntro}>
          <span className={styles.infoEyebrow}>Good to Know</span>
          <h2 className={styles.infoTitle}>What to Expect on Your Visit</h2>
        </div>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoCardTitle}>What to Bring</h3>
            <ul className={styles.infoList}>
              <li>Your vehicle's key and registration</li>
              <li>Any warning lights or noises — write down when they happen</li>
              <li>Prior service records, if you have them</li>
              <li>A valid ID for financing or warranty claims</li>
            </ul>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.infoCardTitle}>Loaner & Shuttle Service</h3>
            <p className={styles.infoCardDesc}>
              For same-day repairs, wait in our lobby with free WiFi and coffee. For longer jobs, ask about our local shuttle service or a loaner vehicle — availability varies, so mention it when you book.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.infoCardTitle}>Financing Available</h3>
            <p className={styles.infoCardDesc}>
              Larger repairs don't have to wait. We work with major auto-repair financing partners to offer flexible payment plans with approved credit — ask about financing when you get your quote.
            </p>
          </div>
        </div>
      </div>

      {/* ── Hours & contact ── */}
      <div className={styles.section}>
        <LocalCitationBlock
          businessName="Redline Auto Care"
          address="615 Mallory Ln, Franklin, TN 37067"
          phone="(615) 900-6400"
          email="hello@redlineautocare.com"
          googleMapsUrl="https://maps.google.com/?q=Redline+Auto+Care+Franklin+TN"
          hours={APPOINTMENT_HOURS}
          cityName="Franklin"
        />
      </div>

      <CTABanner
        headline="Ready to Book Your Appointment?"
        subline="Same-day appointments available. Flat-rate pricing — no hidden fees. Call now or book below."
        primaryText="Call (615) 900-6400"
        primaryLink="tel:+16159006400"
        secondaryText="Book Below"
        secondaryLink="#book"
      />

      <div id="book" className={styles.section}>
        <Variant4
          title="Request Your Appointment"
          cityName="Franklin"
          slug="appointments"
          spot="appointments-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
