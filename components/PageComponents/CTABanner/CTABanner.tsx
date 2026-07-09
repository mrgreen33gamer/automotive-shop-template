'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

interface CTABannerProps {
  headline?: string;
  subline?: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  spot?: string;
  imageSrc?: string;
  eyebrow?: string;
  badgeA?: string;
  badgeB?: string;
  badgeC?: string;
}

/** Redline — gear motif */
export default function CTABanner({
  headline = "Honest Auto Repair. No Surprises.",
  subline = "Diagnostics, brakes, engines, and maintenance — digital inspections and written quotes before any wrench turns.",
  primaryText = "Call (615) 900-6400",
  primaryLink = "tel:+16159006400",
  secondaryText = "Schedule Service",
  secondaryLink = "/contact",
  spot = "CTABanner",
  imageSrc,
  eyebrow = "Redline · Central Texas",
  badgeA = "Digital Insp.",
  badgeB = "ASE Techs",
  badgeC = "Loaner*",
}: CTABannerProps) {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.banner} aria-label="Call to action">
      {imageSrc ? (
        <div className={styles.photoBg} aria-hidden="true">
          <img src={imageSrc} alt="" className={styles.photoBgImg} />
          <div className={styles.photoScrim} />
        </div>
      ) : null}

      <div className={styles.grid} aria-hidden="true" />

      <motion.div
        className={styles.bgMotif}
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      >
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.03 7.03 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 13.9 2h-3.8a.5.5 0 0 0-.49.42l-.36 2.54c-.58.23-1.12.54-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.48a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.83 14.5a.5.5 0 0 0-.12.64l1.92 3.32c.14.24.43.34.68.22l2.39-.96c.5.4 1.05.72 1.63.94l.36 2.54c.05.24.25.42.49.42h3.8c.24 0 .44-.18.49-.42l.36-2.54c.58-.22 1.13-.54 1.63-.94l2.39.96c.25.12.54.02.68-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z" opacity="0.8"/></svg>
      </motion.div>

      <div className={styles.inner}>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {eyebrow}
          </span>
          <h2 className={styles.heading}>{headline}</h2>
          <p className={styles.sub}>{subline}</p>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <a
            href={primaryLink}
            className={styles.primaryBtn}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: primaryText, section: spot })}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {primaryText}
          </a>
          <Link
            href={secondaryLink}
            className={styles.secondaryBtn}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: secondaryText, section: spot })}
          >
            {secondaryText}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
          <div className={styles.badges}>
            <span className={styles.badge}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              {badgeA}
            </span>
            <span className={styles.badge}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              {badgeB}
            </span>
            <span className={styles.badge}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              {badgeC}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
