'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string; // 'brand' | 'cert' | 'tool'
  icon?:    string; // emoji or short abbreviation for display
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Makes We Service',
    items: [
      { name: 'Ford',        type: 'brand', icon: '🚗' },
      { name: 'Chevrolet',   type: 'brand', icon: '🚗' },
      { name: 'Toyota',      type: 'brand', icon: '🚗' },
      { name: 'Honda',       type: 'brand', icon: '🚗' },
      { name: 'Nissan',      type: 'brand', icon: '🚗' },
      { name: 'GMC',         type: 'brand', icon: '🚗' },
      { name: 'Ram',         type: 'brand', icon: '🚗' },
      { name: 'Hyundai/Kia', type: 'brand', icon: '🚗' },
    ],
  },
  {
    label: 'Certifications & Licenses',
    items: [
      { name: 'ASE Certified',       type: 'cert', icon: '✓' },
      { name: 'ASE Blue Seal Shop',  type: 'cert', icon: '✓' },
      { name: 'EPA 609 Certified',   type: 'cert', icon: '✓' },
      { name: 'Fully Insured',       type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Oil Change & Maintenance', type: 'tool', icon: '🔧' },
      { name: 'Brake Systems',            type: 'tool', icon: '🔧' },
      { name: 'Engine Diagnostics',       type: 'tool', icon: '🔧' },
      { name: 'Transmissions',            type: 'tool', icon: '🔧' },
      { name: 'AC & Heating',             type: 'tool', icon: '🔧' },
      { name: 'Tires & Alignment',        type: 'tool', icon: '🔧' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'All Makes, All Repairs',
  subtitle = 'We service every major make and repair type — no brand-specific limitations, no excuses.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <div key={gi} className={styles.group}>
              <span className={styles.groupLabel}>{group.label}</span>
              <div className={styles.items}>
                {group.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    className={`${styles.item} ${item.type === 'cert' ? styles.itemCert : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: gi * 0.06 + ii * 0.04, duration: 0.4, ease: 'easeOut' }}
                  >
                    {item.type === 'cert' ? (
                      <div className={styles.certCheck} aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    ) : (
                      <div className={styles.itemDot} aria-hidden="true" />
                    )}
                    <span className={styles.itemName}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
