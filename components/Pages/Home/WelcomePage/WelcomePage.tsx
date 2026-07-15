// Auto Hero — Redline Bay
// Photographic parallax stage + an authentic technician photo card replaces
// the OBD "Service Bay Board" dashboard panel. Real garage/engine-bay
// imagery, red-on-obsidian identity, Racing Sans One display headline.
// Photos live in /public/pages/home/welcome and are shared with other
// sections of the page (before/after slider, materials grid, texture fills).
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '14%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, reduceMotion ? 1.06 : 1.15]);

const badgeText = 'Franklin\'s Most Trusted Auto Shop — Since 2012';
const headlineLines = [
  'Fast Fix.',
  'Fair Price.',
];
const headlineAccent = 'Redline.';
const subheadline = 'Flat-rate pricing. Same-day service. 3-year / 36,000-mile warranty on every repair. Serving Franklin and Middle Tennessee with licensed, ASE certified technicians.';
const primaryCta = { label: 'Call (615) 900-6400', href: 'tel:+16159006400' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Same-Day Service',
  'No Contracts',
  'ASE Certified',
  '13+ Yrs Local',
  '3-Yr/36k Warranty',
];
const stats = [
  {
    "value": "12,000+",
    "label": "Vehicles Serviced"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "3-Yr/36k",
    "label": "Warranty Included"
  },
  {
    "value": "Same-Day",
    "label": "Service Available"
  }
];
const meterTarget = 72;
const meterTopLabel = "Peak";
const meterMidLabel = "Local";
const meterBotLabel = "Base";
const particleColor = '#ef4444';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Check engine";
const afterLabel = "Road ready";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Brakes", swatch: "#ef4444", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Engine", swatch: "#f87171", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Tires", swatch: "#b91c1c", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "AC", swatch: "#fecaca", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Electrical", swatch: "#991b1b", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Fleet", swatch: "#450a0a", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "They showed me the inspection photos and fixed exactly what was wrong. No mystery fees.";
const authorName = "Angela R.";
const authorMeta = "Brake service · Georgetown";
const rating = 5;
const schematicLabel = "Redline schematic";
const toggles = [
  { label: "Licensed crew", on: true },
  { label: "Same-week", on: true },
  { label: "Warrantied", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "Redline";

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — real shop-floor scene */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/after.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Obsidian-to-red scrim keeps the headline legible and on-brand */}
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Authentic technician photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/before.jpg"
              alt="ASE certified technician tightening a bolt deep in an engine bay at the shop"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              ASE-Certified Tech · On-Site
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Flat-rate pricing
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> 3-Yr / 36k-Mile warranty
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
