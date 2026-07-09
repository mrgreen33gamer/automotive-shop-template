"use client";
import React, { useEffect, useRef, useState, useMemo } from 'react';
import mapboxgl, { GeoJSONSource } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion, PanInfo } from 'framer-motion';
import { PulseLoader } from 'react-spinners';
import { throttle } from 'lodash';
import styles from './styles.module.scss';
import { useMapContext } from './MapContext';
import fallbackMapImage from '../../../../public/pages/home/welcome/background.png';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface Project {
  city: string;
  count: number;
}

const projectsCompletedInCities: Project[] = [
  { city: 'Franklin, Tennessee', count: 18 },
  { city: 'Brentwood, Tennessee', count: 6 },
  { city: 'Nashville, Tennessee', count: 9 },
  { city: 'Spring Hill, Tennessee', count: 3 },
  { city: 'Murfreesboro, Tennessee', count: 4 },
  { city: 'Cool Springs, Tennessee', count: 2 },
];

interface ClientMapProps {
  animationComplete: boolean;
  direction: number;
  variants: any;
  handleDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
  handleAnimationComplete: () => void;
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const ClientMap: React.FC<ClientMapProps> = ({
  animationComplete,
  direction,
  variants,
  handleDragEnd,
  handleAnimationComplete,
  isModalOpen,
  setModalOpen,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const { coordinates, loading: coordsLoading, map: contextMap, setMap, mapContainer: contextMapContainer, setMapContainer } = useMapContext();
  const [loading, setLoading] = useState<boolean>(!!contextMap ? false : true);
  const [showFallback, setShowFallback] = useState(false);

  const memoizedFeatures = useMemo(
    () =>
      projectsCompletedInCities.map((project) => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: coordinates[project.city] || [-86.8689, 35.9251],
        },
        properties: {
          count: project.count,
        },
      })),
    [coordinates]
  );

  const addCirclesToMap = () => {
    if (!map.current) return;
    const addLayers = () => {
      try {
        const source = map.current!.getSource('projects') as GeoJSONSource | undefined;
        if (source) {
          source.setData({
            type: 'FeatureCollection',
            features: memoizedFeatures,
          });
        } else {
          map.current!.addSource('projects', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: memoizedFeatures,
            },
          });
        }
        if (!map.current!.getLayer('project-circles')) {
          map.current!.addLayer({
            id: 'project-circles',
            type: 'circle',
            source: 'projects',
            paint: {
              'circle-radius': ['interpolate', ['linear'], ['get', 'count'], 1, 25, 25, 65],
              'circle-color': '#dc2626',
              'circle-opacity': 0.7,
              'circle-pitch-alignment': 'map',
            },
          });
        }
        if (!map.current!.getLayer('project-labels')) {
          map.current!.addLayer({
            id: 'project-labels',
            type: 'symbol',
            source: 'projects',
            layout: {
              'text-field': ['get', 'count'],
              'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
              'text-size': 12,
              'text-pitch-alignment': 'viewport',
              'text-rotation-alignment': 'viewport',
            },
            paint: {
              'text-color': '#fde8e8',
            },
          });
        }
      } catch (error) {
        console.error('Error in addCirclesToMap:', error);
        setLoading(false);
        setShowFallback(true);
      }
    };

    if (map.current.isStyleLoaded()) {
      addLayers();
    } else {
      map.current.once('style.load', addLayers);
    }
  };

  useEffect(() => {
    const fallbackTimeout = setTimeout(() => {
      if (loading || coordsLoading) {
        setShowFallback(true);
        setLoading(false);
      }
    }, 6000);

    if (!mapContainer.current || !animationComplete || coordsLoading) {
      setLoading(coordsLoading);
      return () => clearTimeout(fallbackTimeout);
    }

    let rotateCamera: ((timestamp: number) => void) | undefined;

    if (contextMap && contextMapContainer) {
      map.current = contextMap;
      if (mapContainer.current && !mapContainer.current.contains(contextMapContainer)) {
        mapContainer.current.appendChild(contextMapContainer);
      }
      map.current.on('error', (e) => {
        console.error('Mapbox GL error:', e);
        setLoading(false);
        setShowFallback(true);
      });
      const resizeTimeout = setTimeout(() => {
        if (map.current) {
          map.current.resize();
          map.current.triggerRepaint();
          addCirclesToMap();
        }
      }, 0);
      rotateCamera = (timestamp: number) => {
        if (map.current) {
          map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
          requestAnimationFrame(rotateCamera!);
        }
      };
      requestAnimationFrame(rotateCamera);
      return () => {
        clearTimeout(resizeTimeout);
        if (contextMapContainer && mapContainer.current && mapContainer.current.contains(contextMapContainer)) {
          mapContainer.current.removeChild(contextMapContainer);
        }
      };
    } else {
      setLoading(true);
      const newContainer = document.createElement('div');
      newContainer.id = styles.map;
      newContainer.style.width = '100%';
      newContainer.style.height = '100%';
      newContainer.style.position = 'absolute';
      newContainer.style.top = '0';
      newContainer.style.left = '0';
      map.current = new mapboxgl.Map({
        container: newContainer,
        style: 'mapbox://styles/wacoexchange/clt29tbhd01w901p471g3hcj3',
        center: [-86.8689, 35.9251],
        zoom: 6,
        pitch: 45,
        interactive: false,
        scrollZoom: false,
        dragPan: false,
        touchZoomRotate: false,
      });
      map.current.on('load', () => {
        addCirclesToMap();
        setLoading(false);
        rotateCamera = (timestamp: number) => {
          if (map.current) {
            map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
            requestAnimationFrame(rotateCamera!);
          }
        };
        requestAnimationFrame(rotateCamera);
      });
      map.current.on('error', (e) => {
        console.error('Mapbox GL error:', e);
        setLoading(false);
        setShowFallback(true);
      });
      setMap(map.current);
      setMapContainer(newContainer);
      if (mapContainer.current) {
        mapContainer.current.appendChild(newContainer);
      }
      const resizeTimeout = setTimeout(() => {
        if (map.current) {
          map.current.resize();
          map.current.triggerRepaint();
        }
      }, 0);
      return () => clearTimeout(resizeTimeout);
    }
  }, [animationComplete, coordsLoading, coordinates, contextMap, setMap, contextMapContainer, setMapContainer, memoizedFeatures]);

  useEffect(() => {
    const handleResize = throttle(() => {
      if (map.current) {
        map.current.resize();
      }
    }, 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  return (
    <motion.section
      className={styles.section}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5 }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={1}
      onDragEnd={handleDragEnd}
      onAnimationComplete={handleAnimationComplete}
      key="CLIENT_MAP_ANIMATIONS"
    >
      <div className={styles.mapContainer}>
        {(loading || coordsLoading) && !showFallback && (
          <div id={styles.loading}>
            <PulseLoader size={30} color="#dc2626" />
          </div>
        )}
        {showFallback && (
          <img src={fallbackMapImage.src} alt="Fallback Map" className={styles.fallbackImage} />
        )}
        <div id={styles.map} ref={mapContainer} className={styles.mapWrapper} />
      </div>
    </motion.section>
  );
};

export default ClientMap;