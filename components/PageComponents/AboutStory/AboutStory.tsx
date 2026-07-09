// PageComponents/AboutStory/AboutStory.tsx
import styles from './styles.module.scss';

interface AboutStoryProps {
  cityName: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ cityName }) => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>

        <div className={styles.labelRow}>
          <span className={styles.label}>Our Story</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.storyTitle}>
          A Local Company Built on<br />
          <span className={styles.highlight}>Honest Work & Fair Prices</span>
        </h2>

        <div className={styles.storyBody}>
          <div className={styles.storyPull}>
            <p className={styles.pullQuote}>
              "We started Redline because we were tired of watching drivers get ripped off by fly-by-night repair shops."
            </p>
            <div className={styles.pullAttrib}>
              <span className={styles.pullName}>— Marcus Reyes</span>
              <span className={styles.pullTitle}>Founder, Redline Auto Care</span>
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.storyParagraph}>
              Founded in 2012 in Franklin, TN, Redline Auto Care started with one bay and one principle:
              give drivers the straight story about their vehicle, charge a fair price, and back the
              work with a real warranty. No hourly billing surprises, no upsell pressure, no contracts.
            </p>
            <p className={styles.storyParagraph}>
              Today we proudly serve <strong>{cityName}</strong> and every surrounding community —
              from Brentwood to Murfreesboro — with a crew of ASE Certified Master Technicians
              who live and work right here in Middle Tennessee.
            </p>

            <div className={styles.milestones}>
              {[
                { year: '2012', label: 'Founded in Franklin' },
                { year: '2016', label: 'Expanded to 5 techs' },
                { year: '2020', label: '5,000 vehicles served' },
                { year: '2026', label: '12,000+ vehicles serviced' },
              ].map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <span className={styles.milestoneLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
