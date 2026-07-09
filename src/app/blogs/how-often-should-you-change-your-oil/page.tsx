'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faOilCan, faRoad, faGasPump, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Stop-and-go traffic on the Franklin/Cool Springs corridor and long commutes into Nashville both work your engine harder than the open highway. Here's the honest oil-change schedule for Middle Tennessee drivers — not just the sticker on your windshield.",
  },
  {
    type: 'tips',
    heading: 'Recommended Oil Change Schedule for Middle Tennessee Drivers',
    items: [
      'Conventional oil → every 3,000–5,000 miles',
      'Synthetic blend → every 5,000–7,500 miles',
      'Full synthetic → every 7,500–10,000 miles (some vehicles up to 15,000)',
      'Short trips under 10 minutes → change on the shorter end of the range',
      'Towing, heavy cargo, or frequent stop-and-go → change on the shorter end of the range',
      "Always check your owner's manual — it lists your manufacturer's actual interval",
    ],
  },
  {
    type: 'cards',
    heading: 'Driving Conditions That Shorten Your Interval',
    cards: [
      { icon: faRoad, title: 'Stop-and-go traffic', body: 'Frequent idling and braking on commutes like I-65 and Moores Lane breaks oil down faster than steady highway miles.' },
      { icon: faGasPump, title: 'Short trips', body: 'Trips under 10 minutes mean your engine rarely reaches full operating temperature, letting moisture and acids build up in the oil.' },
      { icon: faOilCan, title: 'Towing or heavy loads', body: 'Extra strain raises engine temperature and accelerates oil breakdown — tow-rated vehicles need shorter intervals.' },
      { icon: faTriangleExclamation, title: 'Extreme heat or cold', body: 'Tennessee summers push oil viscosity to its limits; consistently short or extreme-temperature trips call for more frequent changes.' },
    ],
  },
  {
    type: 'cards',
    heading: 'What Happens When You Wait Too Long',
    cards: [
      { title: 'Increased engine wear', body: 'Old oil loses its ability to lubricate, letting metal-on-metal contact wear down engine components.' },
      { title: 'Sludge buildup', body: 'Degraded oil forms sludge that clogs passages and starves your engine of proper lubrication.' },
      { title: 'Lower fuel economy', body: 'A dirty, thickened oil forces your engine to work harder, burning more fuel to do the same job.' },
      { title: 'Costly engine damage', body: 'In the worst cases, neglected oil changes lead to premature engine failure — a repair that costs far more than routine maintenance.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: When in doubt, follow your owner's manual interval — but if you do mostly short trips or stop-and-go driving around Franklin and Nashville, treat that number as the maximum, not the target.",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Change Your Oil in Middle Tennessee?"
        description="Conventional vs. synthetic, short trips vs. highway miles — here's the honest oil-change schedule for Franklin, Brentwood, and Nashville-area drivers."
        imageSrc="/pages/blogs/oil-change-schedule.jpg"
        imageAlt="Oil change schedule guide for Middle Tennessee drivers"
        category="Oil Change"
        date="April 14, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Due for an Oil Change?"
        body="Fast, honest oil changes from ASE Certified Master Technicians. Same-day service, most vehicles in and out in under an hour."
        buttonText="Schedule Oil Change"
        buttonHref="/services/oil-change-maintenance"
      />
      <NewsletterSignup
        variant={1}
        spot="oil-change-blog"
        title="Stay ahead of repairs."
        body="Get seasonal maintenance reminders and real repair-cost breakdowns for Middle Tennessee drivers — delivered straight to your inbox. No fluff, no spam."
        tag="Blog Updates"
      />
    </>
  );
}
