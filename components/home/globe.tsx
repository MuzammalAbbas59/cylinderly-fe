'use client';

import { useEffect, useRef, useCallback } from 'react';
import createGlobe from 'cobe';

// ── Pakistan city names scattered across the globe ───────────
interface CityMarker {
  name: string;
  id: string;
  location: [number, number]; // [lat, lng]
  size: number;
}

const PAKISTAN_CITIES: CityMarker[] = [
  // Spread across every region of the globe for visual impact
  { name: 'Karachi',     id: 'karachi',     location: [25.0,   67.0],   size: 0.12 }, // South Asia (actual)
  { name: 'Lahore',      id: 'lahore',      location: [48.0,  -2.0],    size: 0.11 }, // Europe region
  { name: 'Islamabad',   id: 'islamabad',   location: [40.0,  -74.0],   size: 0.11 }, // North America East
  { name: 'Peshawar',    id: 'peshawar',    location: [35.0,  139.0],   size: 0.09 }, // East Asia
  { name: 'Quetta',      id: 'quetta',      location: [-34.0,  18.5],   size: 0.09 }, // Africa South
  { name: 'Multan',      id: 'multan',      location: [55.0,   37.0],   size: 0.09 }, // Eastern Europe
  { name: 'Hyderabad',   id: 'hyderabad',   location: [-23.5, -46.5],   size: 0.08 }, // South America
  { name: 'Faisalabad',  id: 'faisalabad',  location: [34.0, -118.0],   size: 0.09 }, // North America West
  { name: 'Rawalpindi',  id: 'rawalpindi',  location: [-33.8,  151.0],  size: 0.08 }, // Australia
  { name: 'Sialkot',     id: 'sialkot',     location: [1.3,   103.8],   size: 0.08 }, // Southeast Asia
  { name: 'Bahawalpur',  id: 'bahawalpur',  location: [14.0,   45.0],   size: 0.08 }, // Middle East
  { name: 'Sukkur',      id: 'sukkur',      location: [60.0,  -150.0],  size: 0.08 }, // Alaska/North
];

// Arcs connecting cities across the globe — creates a global network effect
const ARCS = [
  { from: PAKISTAN_CITIES[0].location, to: PAKISTAN_CITIES[1].location },  // Karachi → Lahore (Asia → Europe)
  { from: PAKISTAN_CITIES[1].location, to: PAKISTAN_CITIES[2].location },  // Lahore → Islamabad (Europe → N.America)
  { from: PAKISTAN_CITIES[2].location, to: PAKISTAN_CITIES[7].location },  // Islamabad → Faisalabad (East → West coast)
  { from: PAKISTAN_CITIES[0].location, to: PAKISTAN_CITIES[3].location },  // Karachi → Peshawar (S.Asia → E.Asia)
  { from: PAKISTAN_CITIES[3].location, to: PAKISTAN_CITIES[9].location },  // Peshawar → Sialkot (E.Asia → SE.Asia)
  { from: PAKISTAN_CITIES[4].location, to: PAKISTAN_CITIES[6].location },  // Quetta → Hyderabad (Africa → S.America)
  { from: PAKISTAN_CITIES[5].location, to: PAKISTAN_CITIES[10].location }, // Multan → Bahawalpur (E.Europe → M.East)
  { from: PAKISTAN_CITIES[8].location, to: PAKISTAN_CITIES[9].location },  // Rawalpindi → Sialkot (Australia → SE.Asia)
  { from: PAKISTAN_CITIES[2].location, to: PAKISTAN_CITIES[11].location }, // Islamabad → Sukkur (N.America → Alaska)
];

// Convert degrees to radians
const DEG_TO_RAD = Math.PI / 180;

// Start centred on South Asia, then auto-rotate
const INITIAL_PHI = 25 * DEG_TO_RAD;
const INITIAL_THETA = -67 * DEG_TO_RAD;

export function Globe({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const widthRef = useRef(0);

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const pixelWidth = widthRef.current * 2;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: pixelWidth,
      height: pixelWidth,
      phi: INITIAL_PHI,
      theta: INITIAL_THETA,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 6,
      baseColor: [0.05, 0.1, 0.2],
      markerColor: [0.35, 0.73, 1.0],
      glowColor: [0.05, 0.15, 0.35],
      scale: 1,
      offset: [0, 0],
      markers: PAKISTAN_CITIES.map((city) => ({
        location: city.location,
        size: city.size,
        id: city.id,
      })),
      arcs: ARCS.map((arc) => ({
        from: arc.from as [number, number],
        to: arc.to as [number, number],
        color: [0.35, 0.73, 1.0] as [number, number, number],
      })),
      arcColor: [0.35, 0.73, 1.0],
      arcWidth: 0.4,
      arcHeight: 0.25,
      markerElevation: 0.02,
    });

    // Auto-rotation loop
    let rafId: number;
    const animate = () => {
      if (!pointerInteracting.current) {
        phiRef.current += 0.003;
      }
      const currentWidth = widthRef.current * 2;
      globe.update({
        phi: INITIAL_PHI + phiRef.current + pointerInteractionMovement.current,
        width: currentWidth,
        height: currentWidth,
      });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  // ── Drag interaction handlers ──
  const handlePointerDown = (e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    (e.target as HTMLElement).style.cursor = 'grabbing';
  };

  const handlePointerUp = () => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
  };

  const handlePointerOut = () => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta / 200;
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className ?? ''}`}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          contain: 'layout paint size',
          maxWidth: '100%',
          aspectRatio: '1',
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerOut}
        onPointerMove={handlePointerMove}
      />

      {/* City labels — anchored to cobe markers via CSS Anchor Positioning */}
      {PAKISTAN_CITIES.map((city) => (
        <span
          key={city.id}
          className="globe-city-label"
          style={{
            positionAnchor: `--cobe-${city.id}`,
            opacity: `var(--cobe-visible-${city.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${city.id}, 0)) * 6px))`,
          } as React.CSSProperties}
        >
          {city.name}
        </span>
      ))}
    </div>
  );
}
