// components/AdminComponents/Map/LeadMap.tsx
// Lead Geography map — plots lead origins as dots on a Mapbox map.
// FIXED: Now accepts pre-enriched lat/lng from analytics API (no need for local lookup table).
// Falls back to internal TX city table if lat/lng missing.
'use client';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

interface CityLead {
  city:   string;
  count:  number;
  lng?:   number;
  lat?:   number;
}

interface LeadMapProps {
  data:    CityLead[];
  height?: number;
}

// Static TN city coordinates — fallback if API doesn't include lat/lng
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

function getCoords(item: CityLead): [number, number] | null {
  if (item.lng && item.lat) return [item.lng, item.lat];
  const coords = TN_COORDS[item.city];
  if (coords) return coords;
  // case-insensitive fallback
  const key = Object.keys(TN_COORDS).find(k => k.toLowerCase() === item.city.toLowerCase());
  return key ? TN_COORDS[key] : null;
}

export default function LeadMap({ data, height = 380 }: LeadMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef       = useRef<mapboxgl.Map | null>(null);
  const markersRef   = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const map = new mapboxgl.Map({
      container:   containerRef.current,
      style:       'mapbox://styles/mapbox/dark-v11',
      center:      [-98.5, 31.5],
      zoom:        5.5,
      interactive: true,
      attributionControl: false,
    });

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');
    map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right');

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    const plotData = data
      .map(item => ({ ...item, coords: getCoords(item) }))
      .filter(item => item.coords !== null) as (CityLead & { coords: [number, number] })[];

    if (!plotData.length) return;

    const maxCount = Math.max(...plotData.map(d => d.count), 1);

    plotData.forEach(item => {
      const scale   = 0.3 + (item.count / maxCount) * 0.7;
      const size    = Math.round(10 + scale * 22);
      const opacity = 0.5 + scale * 0.5;

      const el = document.createElement('div');
      el.style.cssText = `
        width:         ${size}px;
        height:        ${size}px;
        border-radius: 50%;
        background:    rgba(40, 106, 153, ${opacity});
        border:        1.5px solid rgba(202, 151, 93, 0.7);
        box-shadow:    0 0 ${size * 1.5}px rgba(40,106,153,${opacity * 0.6});
        cursor:        pointer;
        transition:    transform 0.15s ease;
      `;
      el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.3)'; });
      el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)'; });

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset:      12,
      }).setHTML(`
        <div style="
          background: #1e1916;
          border:     1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding:    8px 12px;
          font-family: sans-serif;
          font-size:  12px;
          color:      #fff;
          white-space: nowrap;
        ">
          <strong style="color:#5dcaa5">${item.city}</strong><br/>
          <span style="color:rgba(255,255,255,0.6)">${item.count} lead${item.count !== 1 ? 's' : ''}</span>
        </div>
      `);

      el.addEventListener('mouseenter', () => popup.addTo(map));
      el.addEventListener('mouseleave', () => popup.remove());

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat(item.coords)
        .addTo(map);

      markersRef.current.push(marker);
    });

    if (plotData.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      plotData.forEach(d => bounds.extend(d.coords));
      map.fitBounds(bounds, { padding: 60, maxZoom: 9, duration: 800 });
    }
  }, [data]);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height, borderRadius: '8px', overflow: 'hidden' }}
    />
  );
}
