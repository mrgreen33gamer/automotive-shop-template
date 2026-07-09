// src/app/api/admin/analytics/route.ts
// FIXED:
//  - isDevTest leads NOW SHOWN in dashboard (flagged but included) so localhost
//    testing actually shows data. They appear with a DEV badge.
//  - Funnel simplified: Sessions → Page Views → CTA Clicks → Leads
//  - form_open removed from funnel (that event type is retired)
//  - pageViewsByCity added for Overview map
//  - leadsByCity enriched with lat/lng for Leads map
import { NextRequest, NextResponse } from 'next/server';
import { MongoDB } from '&/mongodb';
import { requireAdminSession } from '&/adminAuth';

function getRangeDate(range: string): Date | null {
  const days: Record<string, number> = { '7d': 7, '14d': 14, '30d': 30, '49d': 49, '90d': 90 };
  if (!days[range]) return null;
  const d = new Date();
  d.setDate(d.getDate() - days[range]);
  return d;
}

const TN_COORDS: Record<string, [number, number]> = {
  'Franklin':       [-86.8689, 35.9251],
  'Brentwood':      [-86.7828, 35.9887],
  'Nashville':      [-86.7816, 36.1627],
  'Spring Hill':    [-86.9297, 35.7512],
  'Murfreesboro':   [-86.3903, 35.8456],
  'Cool Springs':   [-86.8025, 35.9184],
  'Hendersonville': [-86.6200, 36.3048],
  'Mount Juliet':   [-86.5186, 36.2000],
  'Gallatin':       [-86.4467, 36.3881],
  'Smyrna':         [-86.5186, 35.9828],
  'La Vergne':      [-86.5808, 36.0034],
  'Columbia':       [-87.0353, 35.6151],
  'Memphis':        [-90.0490, 35.1495],
  'Knoxville':      [-83.9207, 35.9606],
  'Chattanooga':    [-85.3097, 35.0456],
  'Clarksville':    [-87.3595, 36.5298],
  'Jackson':        [-88.8140, 35.6145],
  'Cookeville':     [-85.5016, 36.1628],
  'Johnson City':   [-82.3535, 36.3134],
  'Kingsport':      [-82.5541, 36.5484],
};

function getCoordsForCity(city: string): [number, number] | null {
  if (TN_COORDS[city]) return TN_COORDS[city];
  const key = Object.keys(TN_COORDS).find(k => k.toLowerCase() === city.toLowerCase());
  return key ? TN_COORDS[key] : null;
}

export async function GET(req: NextRequest) {
  const session = await requireAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const range     = req.nextUrl.searchParams.get('range') ?? '30d';
    const sinceDate = getRangeDate(range);
    const db        = await MongoDB.getDb();

    // FIXED: Include ALL leads (including isDevTest) so localhost testing shows data.
    // The dashboard shows a DEV badge on test entries.
    const dateFilter = sinceDate
      ? { submittedAt: { $gte: sinceDate } }
      : {};

    const pvFilter = sinceDate ? { timestamp: { $gte: sinceDate } } : {};
    const evFilter = sinceDate ? { timestamp: { $gte: sinceDate } } : {};

    const [
      totalLeads,
      leadsThisPeriod,
      devLeadsThisPeriod,
      uniqueSessions,
      leadsByDay,
      leadsByService,
      leadsByCity,
      topJourneyPaths,
      deviceBreakdown,
      statusBreakdown,
      funnelPageViews,
      funnelCtaClicks,
      pageViewsByCity,
    ] = await Promise.all([
      // Total leads all time (ALL including dev)
      db.collection('Leads').countDocuments({}),

      // Leads this period (ALL)
      db.collection('Leads').countDocuments(dateFilter),

      // How many are dev test this period
      db.collection('Leads').countDocuments({ ...dateFilter, isDevTest: true }),

      // Unique sessions
      db.collection('PageViews').distinct('sessionId', pvFilter).then(ids => ids.filter(Boolean).length),

      // Leads per day
      db.collection('Leads').aggregate([
        { $match: dateFilter },
        { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$submittedAt' } }, count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
        { $project: { date: '$_id', count: 1, _id: 0 } },
      ]).toArray(),

      // Leads by service
      db.collection('Leads').aggregate([
        { $match: dateFilter },
        { $unwind: { path: '$services', preserveNullAndEmptyArrays: false } },
        { $group: { _id: '$services', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 },
        { $project: { service: '$_id', count: 1, _id: 0 } },
      ]).toArray(),

      // Leads by city
      db.collection('Leads').aggregate([
        { $match: { ...dateFilter, ipCity: { $nin: ['Unknown', null, ''] } } },
        { $group: { _id: '$ipCity', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 50 },
        { $project: { city: '$_id', count: 1, _id: 0 } },
      ]).toArray(),

      // Top journey paths (only from non-dev leads with journey data)
      db.collection('Leads').aggregate([
        { $match: { ...dateFilter, isDevTest: { $ne: true }, journeyPath: { $exists: true, $not: { $size: 0 } } } },
        { $group: { _id: '$journeyPath', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 },
        { $project: { path: '$_id', count: 1, _id: 0 } },
      ]).toArray(),

      // Device breakdown
      db.collection('Leads').aggregate([
        { $match: dateFilter },
        { $group: { _id: { $toLower: { $ifNull: ['$deviceType', 'desktop'] } }, count: { $sum: 1 } } },
        { $project: { device: '$_id', count: 1, _id: 0 } },
      ]).toArray(),

      // Status breakdown (all leads)
      db.collection('Leads').aggregate([
        { $match: {} },
        { $group: { _id: { $ifNull: ['$status', 'new'] }, count: { $sum: 1 } } },
        { $project: { status: '$_id', count: 1, _id: 0 } },
      ]).toArray(),

      // Funnel: page views
      db.collection('PageViews').countDocuments(pvFilter),

      // Funnel: CTA clicks (click + phone_click + email_click)
      db.collection('Events').countDocuments({
        ...evFilter,
        eventType: { $in: ['click', 'phone_click', 'email_click'] },
      }),

      // Page view locations for Overview map
      db.collection('PageViews').aggregate([
        { $match: { ...pvFilter, city: { $nin: ['Unknown', null, ''] } } },
        { $group: { _id: '$city', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 100 },
        { $project: { city: '$_id', count: 1, _id: 0 } },
      ]).toArray(),
    ]);

    // Top converting page
    const topPageResult = await db.collection('Leads').aggregate([
      { $match: { ...dateFilter, isDevTest: { $ne: true }, lastTouchSource: { $exists: true, $ne: null } } },
      { $group: { _id: '$lastTouchSource', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 },
    ]).toArray();

    const topConvertingPage = topPageResult[0]?._id ?? 'N/A';

    const realLeads       = leadsThisPeriod - devLeadsThisPeriod;
    const conversionRate  = uniqueSessions > 0
      ? ((realLeads / uniqueSessions) * 100).toFixed(1)
      : '0.0';

    const avgJourneyResult = await db.collection('Leads').aggregate([
      { $match: { ...dateFilter, isDevTest: { $ne: true }, journeyLength: { $gt: 0 } } },
      { $group: { _id: null, avg: { $avg: '$journeyLength' } } },
    ]).toArray();

    const avgJourneyLength = avgJourneyResult[0]?.avg?.toFixed(1) ?? '0';

    // Enrich with coords
    const leadsByCityWithCoords = (leadsByCity as any[]).map(item => {
      const coords = getCoordsForCity(item.city);
      return { ...item, lng: coords?.[0] ?? null, lat: coords?.[1] ?? null };
    }).filter(item => item.lat && item.lng);

    const pageViewsByCityWithCoords = (pageViewsByCity as any[]).map(item => {
      const coords = getCoordsForCity(item.city);
      return { ...item, lng: coords?.[0] ?? null, lat: coords?.[1] ?? null };
    }).filter(item => item.lat && item.lng);

    return NextResponse.json({
      totalLeads,
      leadsThisPeriod,
      devLeadsThisPeriod,
      uniqueSessions,
      conversionRate:    `${conversionRate}%`,
      avgJourneyLength,
      topConvertingPage,
      leadsByDay,
      leadsByService,
      leadsByCity:       leadsByCityWithCoords,
      pageViewsByCity:   pageViewsByCityWithCoords,
      topJourneyPaths,
      deviceBreakdown,
      statusBreakdown,
      funnel: {
        sessions:    uniqueSessions,
        pageViews:   funnelPageViews,
        ctaClicks:   funnelCtaClicks,
        submissions: leadsThisPeriod,
      },
    });
  } catch (err) {
    console.error('[admin/analytics] error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
