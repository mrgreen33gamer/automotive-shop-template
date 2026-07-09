'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faLeaf, faBolt, faGaugeHigh, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Synthetic oil is everywhere now — most new vehicles are factory-filled with it, and shops push it hard. But is it actually worth the extra cost for your vehicle, or is conventional oil still the smarter call in 2026? Here's an honest breakdown.",
  },
  {
    type: 'cards',
    heading: 'Synthetic vs. Conventional — Side-by-Side',
    cards: [
      { icon: faLeaf, title: 'Engine Protection', body: 'Synthetic oil resists breakdown and maintains consistent viscosity far better than conventional, especially under heat and stress.' },
      { icon: faBolt, title: 'Performance in Extreme Temps', body: 'Synthetic flows better in cold starts and holds up better in high summer heat — a real advantage for Tennessee\'s temperature swings.' },
      { icon: faGaugeHigh, title: 'Change Interval', body: 'Synthetic goes 7,500–10,000+ miles between changes; conventional needs attention every 3,000–5,000 miles.' },
      { icon: faDollarSign, title: 'Upfront Cost', body: 'Conventional oil changes run $40–$70; full synthetic runs $70–$120 per change.' },
    ],
  },
  {
    type: 'cards',
    heading: 'Which Vehicles Benefit Most from Synthetic',
    cards: [
      { title: 'Newer vehicles (2015+)', body: 'Most modern engines are designed and tested around synthetic oil specs — many manufacturers require it to keep the warranty valid.' },
      { title: 'Turbocharged engines', body: 'Turbos run hotter and need oil that resists breakdown under extreme heat — synthetic is close to essential here.' },
      { title: 'High-mileage vehicles (75,000+ miles)', body: 'High-mileage synthetic blends include seal conditioners that help reduce leaks and burn-off in older engines.' },
      { title: 'Vehicles that tow or carry heavy loads', body: 'Extra engine strain means synthetic\'s superior heat resistance pays off fastest here.' },
    ],
  },
  {
    type: 'table',
    heading: 'Cost-Per-Mile Comparison',
    tableHeaders: ['Oil Type', 'Cost Per Change', 'Miles Between Changes', 'Cost Per Mile'],
    tableRows: [
      ['Conventional', '$40–$70', '3,000–5,000', '~$0.013–$0.018'],
      ['Synthetic blend', '$55–$85', '5,000–7,500', '~$0.010–$0.014'],
      ['Full synthetic', '$70–$120', '7,500–10,000', '~$0.009–$0.013'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Full synthetic usually costs about the same per mile as conventional once you factor in the longer interval — plus you get better engine protection and fewer shop visits.",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Synthetic vs. Conventional Oil: What's Right for Your Vehicle in 2026?"
        description="Real pros, cons, and costs — plus which vehicles benefit most from synthetic and how the cost-per-mile actually compares."
        imageSrc="/pages/blogs/synthetic-vs-conventional-oil.jpg"
        imageAlt="Synthetic vs conventional motor oil comparison for Middle Tennessee vehicles"
        category="Oil Change"
        date="April 10, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Not Sure Which Oil Is Right for Your Vehicle?"
        body="Get a free recommendation from Redline Auto Care's ASE Certified Master Technicians."
        buttonText="Get Free Recommendation"
        buttonHref="/services/oil-change-maintenance"
      />
      <NewsletterSignup
        variant={1}
        spot="synthetic-oil-blog"
        title="Stay ahead of repairs."
        body="Get seasonal maintenance reminders and real repair-cost breakdowns for Middle Tennessee drivers — delivered straight to your inbox. No fluff, no spam."
        tag="Blog Updates"
      />
    </>
  );
}
