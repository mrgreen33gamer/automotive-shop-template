// ClientMap\MapContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';
interface Project {
  city: string;
  count: number;
}
interface MapContextType {
  coordinates: Record<string, [number, number]>;
  loading: boolean;
  map: mapboxgl.Map | null;
  setMap: (map: mapboxgl.Map | null) => void;
  mapContainer: HTMLDivElement | null;
  setMapContainer: (container: HTMLDivElement | null) => void;
}
const MapContext = createContext<MapContextType | undefined>(undefined);
const projectsCompletedInCities: Project[] = [
  { city: 'Franklin, Tennessee', count: 18 },
  { city: 'Brentwood, Tennessee', count: 6 },
  { city: 'Nashville, Tennessee', count: 9 },
  { city: 'Spring Hill, Tennessee', count: 3 },
  { city: 'Murfreesboro, Tennessee', count: 4 },
  { city: 'Cool Springs, Tennessee', count: 2 },
];
const defaultCoordinates: Record<string, [number, number]> = {
  'Franklin, Tennessee':      [-86.8689, 35.9251],
  'Brentwood, Tennessee':     [-86.7828, 36.0331],
  'Nashville, Tennessee':     [-86.7816, 36.1627],
  'Spring Hill, Tennessee':   [-86.9300, 35.7512],
  'Murfreesboro, Tennessee':  [-86.3903, 35.8456],
  'Cool Springs, Tennessee':  [-86.8006, 35.9273],
};
export const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [coordinates, setCoordinates] = useState<Record<string, [number, number]>>({});
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    const cachedCoords = localStorage.getItem('mapCoordinates');
    if (cachedCoords) {
      try {
        const parsedCoords = JSON.parse(cachedCoords);
        // Validate parsed coordinates
        if (Object.keys(parsedCoords).length === projectsCompletedInCities.length) {
          setCoordinates(parsedCoords);
          setLoading(false);
          return;
        } else {
          console.warn('Cached coordinates invalid, fetching new ones');
        }
      } catch (error) {
        console.error('Error parsing cached coordinates:', error);
      }
    }
    const fetchCoordinates = async () => {
      try {
        const coords = await Promise.all(
          projectsCompletedInCities.map(async (project) => {
            try {
              const response = await axios.get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(project.city)}.json?access_token=${mapboxgl.accessToken}`
              );
              const coordinates = response.data.features[0]?.geometry.coordinates as [number, number];
              return { city: project.city, coordinates: coordinates || defaultCoordinates[project.city] || [-86.8689, 35.9251] };
            } catch (error) {
              console.error(`Error fetching coordinates for ${project.city}:`, error);
              return { city: project.city, coordinates: defaultCoordinates[project.city] || [-86.8689, 35.9251] };
            }
          })
        );
        const coordsMap = coords.reduce((acc, { city, coordinates }) => {
          acc[city] = coordinates;
          return acc;
        }, {} as Record<string, [number, number]>);
        setCoordinates(coordsMap);
        localStorage.setItem('mapCoordinates', JSON.stringify(coordsMap));
      } catch (error) {
        console.error('Error fetching coordinates, using defaults:', error);
        setCoordinates(defaultCoordinates);
      } finally {
        setLoading(false);
      }
    };
    fetchCoordinates();
  }, []);
  useEffect(() => {
    return () => {
      if (map) {
        map.remove();
        setMap(null);
      }
      if (mapContainer) {
        setMapContainer(null);
      }
    };
  }, []);
  const contextValue = useMemo(
    () => ({
      coordinates,
      loading,
      map,
      setMap,
      mapContainer,
      setMapContainer,
    }),
    [coordinates, loading, map, mapContainer]
  );
  return <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>;
};
export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};