// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for Redline Auto Care — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Franklin, TN',
    rating:   5,
    date:     'March 2026',
    service:  'Transmission Service',
    text:     "My transmission started slipping on a road trip. Redline got me in the same day, explained everything clearly, pricing was upfront, and the truck has never shifted this smoothly. I can't recommend them enough.",
  },
  {
    name:     'Sandra K.',
    location: 'Brentwood, TN',
    rating:   5,
    date:     'February 2026',
    service:  'Brake Repair',
    text:     'Heard grinding on my way to work and called Redline in a panic. They had someone look at it by lunch. Fixed the same day, fair price. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Nashville, TN',
    rating:   5,
    date:     'January 2026',
    service:  'Oil Change & Maintenance',
    text:     'Been on their maintenance plan for two years now. They catch issues before they become expensive emergencies, and they never try to upsell services I don\'t need. The plan pays for itself every single year.',
  },
  {
    name:     'Patricia L.',
    location: 'Spring Hill, TN',
    rating:   5,
    date:     'December 2025',
    service:  'Engine Diagnostics',
    text:     'Had three shops quote us. Redline was honest about what was actually wrong — not just replacing parts to run up the bill. The repair was clean, fast, and the check engine light hasn\'t come back on since.',
  },
  {
    name:     'David M.',
    location: 'Murfreesboro, TN',
    rating:   5,
    date:     'November 2025',
    service:  'AC & Heating Repair',
    text:     'Had the AC repaired before the summer heat hit and the difference was immediate. Great crew, very professional, explained exactly what they replaced and why. Left the shop feeling like I got a fair deal.',
  },
  {
    name:     'Angela W.',
    location: 'Cool Springs, TN',
    rating:   5,
    date:     'October 2025',
    service:  'Tire Service & Alignment',
    text:     'Noticed my car pulling to one side and brought it in same day. They diagnosed the alignment issue fast and had new tires on within the hour. No upsell, totally fair rate. My new go-to shop for life.',
  },
  {
    name:     'Robert H.',
    location: 'Franklin, TN',
    rating:   5,
    date:     'September 2025',
    service:  'Fleet Account',
    text:     'We run three service vans and Redline set up our fleet account with volume pricing and one consolidated invoice. The account manager is patient and knowledgeable — didn\'t feel rushed at all. Highly recommend for any small business fleet.',
  },
  {
    name:     'Cheryl B.',
    location: 'Nashville, TN',
    rating:   5,
    date:     'August 2025',
    service:  'Brake Repair',
    text:     'Called them same-day when my brakes started squeaking badly. They got me in that afternoon and fixed it before end of day. I drive my kids around every day — this shop genuinely put my mind at ease. Thank you.',
  },
];

export default reviews;
