// components/PageComponents/AuthorBio/AuthorBio.tsx
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";

interface AuthorBioProps {
  cityName:  string;
  imageSrc?: string;
  imageAlt?: string;
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marcus Reyes",
  jobTitle: "Founder & Owner",
  worksFor: {
    "@type": "Organization",
    name: "Redline Auto Care",
    url: "https://redlineautocare.com",
  },
  url: "https://redlineautocare.com/about",
  sameAs: [
    "https://redlineautocare.com",
  ],
  knowsAbout: [
    "Auto Repair", "ASE Certification", "Engine Diagnostics",
    "Brake Repair", "Transmission Service", "Fleet Maintenance",
    "Middle Tennessee Business",
  ],
  description:
    "Founder of Redline Auto Care in Franklin, TN. 13+ years running an ASE Certified independent auto repair shop for Middle Tennessee drivers and fleets. Straight answers, flat-rate pricing.",
};

const AuthorBio: React.FC<AuthorBioProps> = ({
  cityName,
  imageSrc = "/pages/seo-template-resources/owner.jpg",
  imageAlt = "Marcus Reyes - Founder of Redline Auto Care",
}) => {
  return (
    <section className={styles.authorBio} aria-label="About the Author">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className={styles.card}>
        <div className={styles.accentStrip} aria-hidden="true" />

        <div className={styles.imageCol}>
          <div className={styles.imageRing}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={180}
              height={180}
              className={styles.authorImage}
              priority
            />
          </div>
          <div className={styles.verifiedBadge}>✓ Verified Owner</div>
        </div>

        <div className={styles.content}>
          <p className={styles.role}>Founder & Owner · Redline Auto Care</p>
          <h2 className={styles.title}>Marcus Reyes</h2>

          <p className={styles.description}>
            13+ years running an ASE Certified independent auto repair shop for Middle Tennessee
            drivers. Based in <strong>Franklin, TN</strong> — serving{" "}
            <strong>{cityName}</strong> and the surrounding region. Every repair is
            flat-rate, ASE certified, and backed by a real warranty.
          </p>

          <ul className={styles.credentials} aria-label="Credentials and specializations">
            <li>ASE Master Technician — certified since 2012</li>
            <li>Owner of an ASE Blue Seal of Excellence Shop</li>
            <li>12,000+ vehicles serviced across Middle Tennessee</li>
            <li>Google Business Profile — 4.9★ rated, 850+ reviews</li>
          </ul>

          <p className={styles.updated}>
            Last updated April 2026 · Based on real local data &amp; current Middle Tennessee service pricing
          </p>

          <div className={styles.footer}>
            <div className={styles.badges}>
              <span className={styles.badge}>13+ Years</span>
              <span className={styles.badge}>4.9 ★ Rated</span>
              <span className={styles.badge}>Franklin, TN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
