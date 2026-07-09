'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faVolumeHigh, faGaugeHigh, faRoad, faLightbulb, faRulerCombined, faArrowsLeftRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Middle Tennessee traffic — I-65, I-24, and the daily Franklin-to-Nashville commute — puts real wear on your brakes. A squeal today can turn into a full caliper job next month if you wait too long. Here's how to tell whether you need a simple pad swap or a full brake replacement.",
  },
  {
    type: 'cards',
    heading: '7 Signs Your Brakes Need Replacing (Not Just a Pad Swap)',
    cards: [
      { icon: faVolumeHigh, title: 'Squealing or grinding noises', body: 'A high-pitched squeal means your pads are worn to the wear indicator. Grinding means metal-on-metal — the pads are gone and rotors are likely damaged.' },
      { icon: faGaugeHigh, title: 'Pulsating or vibrating brake pedal', body: 'A pulsing pedal usually points to warped rotors, which need resurfacing or replacement, not just new pads.' },
      { icon: faRoad, title: 'Longer stopping distance', body: 'If your car takes noticeably more room to stop than it used to, your brake system has lost stopping power.' },
      { icon: faLightbulb, title: 'Dashboard warning light', body: 'A brake or ABS warning light on your dash means it is time for a full inspection — do not ignore it.' },
      { icon: faRulerCombined, title: 'Visible pad wear under 3mm', body: 'Look through your wheel spokes — if the pad material looks thinner than a quarter inch, replacement is close.' },
      { icon: faArrowsLeftRight, title: 'Car pulls to one side when braking', body: 'Uneven pulling often means a stuck caliper or unevenly worn pads — a safety issue, not just a comfort one.' },
      { icon: faCalendarAlt, title: 'Age and mileage', body: 'Most pads last 25,000–65,000 miles depending on driving style. Rotors typically last two pad cycles before they need replacing too.' },
    ],
  },
  {
    type: 'table',
    heading: 'Pad Swap vs. Full Brake Replacement — Cost Comparison',
    tableHeaders: ['Service', 'What It Covers', 'Typical Cost (Per Axle)'],
    tableRows: [
      ['Pads only', 'New pads, existing rotors resurfaced if usable', '$150–$250'],
      ['Pads + rotors', 'New pads and new rotors', '$300–$500'],
      ['Full brake job', 'Pads, rotors, calipers, hardware, fluid flush', '$500–$900'],
      ['Warning light ignored 6+ months', 'Often escalates to caliper or rotor damage', '$700–$1,200+'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Squealing brakes are your pads asking for help early. Get them checked at the first squeal and you'll almost always be looking at a $150–$250 pad job — not an $800 rotor-and-caliper repair.",
  },
  {
    type: 'tips',
    heading: 'What to Do Next',
    items: [
      'Get a free brake inspection before your next long drive to Nashville',
      'Ask for a written estimate that separates pads, rotors, and labor',
      'Have your pad thickness measured and documented at every oil change',
      'Never ignore a brake or ABS dashboard warning light',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs Your Brakes Need Replacing (Not Just a Pad Swap)"
        description="Squealing, grinding, or a pulsing pedal? Here are the 7 clear warning signs it's time for a real brake job — not just a quick pad swap."
        imageSrc="/pages/blogs/brake-replacement.jpg"
        imageAlt="Mechanic inspecting worn brake pads and rotors at Redline Auto Care in Franklin, TN"
        category="Brakes"
        date="April 18, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Hearing Noises When You Brake?"
        body="Get a free brake inspection from Redline Auto Care — ASE Certified Master Technicians serving Franklin, TN and Middle Tennessee."
        buttonText="Get Free Inspection"
        buttonHref="/services/brake-repair"
      />
      <NewsletterSignup
        variant={1}
        spot="brake-replacement-blog"
        title="Stay ahead of repairs."
        body="Get seasonal maintenance reminders and real repair-cost breakdowns for Middle Tennessee drivers — delivered straight to your inbox. No fluff, no spam."
        tag="Blog Updates"
      />
    </>
  );
}
