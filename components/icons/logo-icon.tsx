import { useId } from 'react';

export interface LogoIconProps {
  size?: number;
  className?: string;
  /** If true renders a minimal version (no badge bg) — for use on dark surfaces */
  minimal?: boolean;
}

/**
 * Cylinderly logo mark.
 *
 * Design: A rounded-square badge with a bold flame inside — communicates
 * "gas / energy" at a glance. Legible down to 16 × 16 px.
 *
 * Uses `useId()` to prevent SVG gradient ID collisions when rendered
 * multiple times on the same page.
 */
export function LogoIcon({ size = 24, className, minimal = false }: LogoIconProps) {
  const uid = useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Cylinderly"
      role="img"
      className={className}
    >
      <defs>
        {/* Badge background gradient */}
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5AB8FF" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>

        {/* Flame inner glow */}
        <radialGradient id={`${uid}-flame`} cx="50%" cy="70%" r="50%" gradientUnits="objectBoundingBox">
          <stop stopColor="white" stopOpacity="1" />
          <stop offset="1" stopColor="#BAE6FD" stopOpacity="0.8" />
        </radialGradient>
      </defs>

      {/* Badge: rounded square */}
      {!minimal && (
        <rect width="32" height="32" rx="8" fill={`url(#${uid}-bg)`} />
      )}

      {/*
        Flame shape — a bold, clean single-path flame.
        On the badge the flame is white; in minimal mode it uses the brand gradient.
      */}
      <path
        d="M16 4 C14 7 11 9 11 13 C11 11 13 10 14 11 C12 13 12 15 13 17 C13 15 15 14 16 12 C17 14 19 15 19 17 C20 15 20 13 18 11 C19 10 21 11 21 13 C21 9 18 7 16 4Z"
        fill={minimal ? `url(#${uid}-bg)` : 'white'}
      />

      {/* Pin dot at the base of the flame — subtly implies "location" */}
      <circle
        cx="16"
        cy="24"
        r="2.5"
        fill={minimal ? `url(#${uid}-bg)` : 'rgba(255,255,255,0.55)'}
      />

      {/* Tiny connecting stem */}
      <rect
        x="15"
        y="20"
        width="2"
        height="4"
        rx="1"
        fill={minimal ? `url(#${uid}-bg)` : 'rgba(255,255,255,0.45)'}
      />
    </svg>
  );
}
