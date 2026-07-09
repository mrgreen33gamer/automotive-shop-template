// src/app/service-areas/page.tsx
// Redline Auto Care — Service Areas Page
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city:        'Franklin',
    slug:        'franklin-tn',
    county:      'Williamson County',
    badge:       'Home Base',
    description: 'Our headquarters. Fastest turnaround times, same-day appointments available most weekdays. Full auto repair, maintenance, and fleet service across all of Franklin.',
    highlights:  ['Same-day appointments', 'Fleet accounts', 'All services available'],
  },
  {
    city:        'Brentwood',
    slug:        'brentwood-tn',
    county:      'Williamson County',
    badge:       'Primary Area',
    description: 'Full auto repair coverage for Brentwood drivers and businesses. Quick turnaround from our Franklin base — typically a short drive.',
    highlights:  ['Fast turnaround', 'Personal & fleet vehicles', 'Maintenance plans'],
  },
  {
    city:        'Nashville',
    slug:        'nashville-tn',
    county:      'Davidson County',
    badge:       'Primary Area',
    description: "Serving Nashville's neighborhoods with the same flat-rate pricing and 3-year/36,000-mile warranty as every other area we cover.",
    highlights:  ['Flat-rate pricing', '3-yr / 36k-mi warranty', 'All makes & models'],
  },
  {
    city:        'Spring Hill',
    slug:        'spring-hill-tn',
    county:      'Williamson/Maury County',
    badge:       '',
    description: 'Reliable auto repair for Spring Hill residents. We service all makes and models — domestic, import, and everything in between.',
    highlights:  ['All makes serviced', 'ASE certified techs', 'No contracts'],
  },
  {
    city:        'Murfreesboro',
    slug:        'murfreesboro-tn',
    county:      'Rutherford County',
    badge:       '',
    description: 'Auto repair and maintenance for Murfreesboro drivers and small business fleets. We make the drive worth it — flat-rate pricing applies just the same.',
    highlights:  ['Fleet-friendly', 'Flat-rate pricing', 'Same-day when available'],
  },
  {
    city:        'Cool Springs',
    slug:        'cool-springs-tn',
    county:      'Williamson County',
    badge:       '',
    description: 'Full-service auto repair for the Cool Springs commercial corridor and surrounding neighborhoods. Convenient drop-off and shuttle service available.',
    highlights:  ['Shuttle service', 'Full service coverage', 'Commercial & personal'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'We serve Franklin and the surrounding Middle Tennessee region — including Brentwood, Nashville, Spring Hill, Murfreesboro, Cool Springs, and most communities within the greater Franklin/Nashville commuter corridor. Call us if you\'re not sure — we probably cover your area.',
  },
  {
    question: 'Is your pricing the same in all service areas?',
    answer: 'Yes — flat-rate pricing applies across every city and community we serve. The price we quote before we start is the price you pay, regardless of your location.',
  },
  {
    question: 'Do you offer appointments outside of Franklin?',
    answer: 'Yes. Same-day appointments are available most weekdays across all of our service areas. Turnaround times vary by distance from our Franklin base — we\'ll give you an honest window when you call.',
  },
  {
    question: 'Do you service fleet vehicles in all areas?',
    answer: 'Yes — delivery, rideshare, small business, and municipal fleet service is available across all our coverage areas. See our Fleet Accounts page or call to discuss your fleet.',
  },
  {
    question: 'How fast can I get an appointment?',
    answer: 'For Franklin and immediate surrounding areas (Brentwood, Cool Springs), same-day appointments are usually available. For outlying areas like Nashville, Murfreesboro, and Spring Hill, same-day service is often available too — call to confirm availability.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Middle Tennessee Auto Repair — Since 2012
            </div>
            <h1 className={styles.heroTitle}>
              Service Areas
              <span className={styles.heroAccent}>We're Close By.</span>
            </h1>
            <p className={styles.heroSub}>
              Based in Franklin, serving all of Middle Tennessee. Flat-rate pricing, ASE certified techs, and a 3-year/36,000-mile warranty — no matter where you are.
            </p>
            <div className={styles.heroActions}>
              <a href="tel:+16159006400" className={styles.heroCTAPrimary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call (615) 900-6400
              </a>
              <Link href="/contact" className={styles.heroCTASecondary}>
                Free Estimate
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Quick trust strip */}
          <motion.div className={styles.trustStrip}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            {[
              { val: '30mi',   lbl: 'Coverage radius from Franklin' },
              { val: '6+',     lbl: 'Cities we actively serve' },
              { val: 'Same Day', lbl: 'Appointments when available' },
              { val: '3-Yr',   lbl: 'Warranty on every repair' },
            ].map(({ val, lbl }) => (
              <div key={lbl} className={styles.trustStat}>
                <span className={styles.trustVal}>{val}</span>
                <span className={styles.trustLbl}>{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Areas grid ── */}
      <section className={styles.areasSection}>
        <div className={styles.areasSectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Full Coverage Map</span>
            <h2 className={styles.sectionTitle}>Every Community We Serve</h2>
            <p className={styles.sectionSub}>
              Click any city to see local service details and what to expect from our team.
            </p>
          </div>

          <div className={styles.areasGrid}>
            {SERVICE_AREAS.map((area, i) => {
              const isHub = area.badge === 'Home Base';
              const isPrimary = area.badge === 'Primary Area';

              return (
                <motion.div
                  key={area.slug}
                  className={`${styles.areaCard} ${isHub ? styles.areaCardHub : ''} ${isPrimary ? styles.areaCardPrimary : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                >
                  {area.badge && (
                    <span className={`${styles.areaBadge} ${isHub ? styles.areaBadgeHub : styles.areaBadgeNearby}`}>
                      {area.badge}
                    </span>
                  )}

                  <div className={styles.areaPin} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>

                  <div className={styles.areaTopRow}>
                    <h3 className={styles.areaCity}>{area.city}</h3>
                    <span className={styles.areaCounty}>{area.county}</span>
                  </div>

                  <p className={styles.areaDesc}>{area.description}</p>

                  <ul className={styles.areaHighlights}>
                    {area.highlights.map(h => (
                      <li key={h}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.areaFooter}>
                    <a href="tel:+16159006400" className={styles.areaCallBtn}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      Call Now
                    </a>
                    <Link href="/contact" className={styles.areaEstimateBtn}>
                      Free Estimate
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Not on the list? ── */}
      <section className={styles.unlisted}>
        <div className={styles.unlistedInner}>
          <div className={styles.unlistedIcon} aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div className={styles.unlistedText}>
            <h3>Don't see your city?</h3>
            <p>We cover most of the greater Franklin/Nashville commuter corridor. Call us — there's a good chance we serve your area.</p>
          </div>
          <a href="tel:+16159006400" className={styles.unlistedCTA}>
            Call (615) 900-6400
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        cityName="Middle Tennessee"
        faq={faq}
        title="Service Area FAQs"
      />

      {/* ── CTA Banner ── */}
      <CTABanner
        headline="Ready to Schedule? We're Close By."
        subline="Same-day appointments available across Middle Tennessee. Flat-rate pricing, 3-year/36,000-mile warranty, no contracts ever."
        primaryText="Call (615) 900-6400"
        primaryLink="tel:+16159006400"
        secondaryText="Book an Appointment"
        secondaryLink="/appointments"
      />

    </main>
  );
}
