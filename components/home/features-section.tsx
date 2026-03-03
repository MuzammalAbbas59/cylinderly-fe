'use client';

import { useRef } from 'react';
import { Search, Shield, Phone, BarChart3 } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/shared/motion';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  tag: string;
  accent: string;
  /**
   * Tailwind col-span classes applied only at lg+.
   * Row 1: [Search ×2] [Verified ×1]
   * Row 2: [Contact ×1] [Prices ×2]
   */
  colSpan: string;
}

const FEATURES: Feature[] = [
  {
    icon: Search,
    title: 'Instant Search',
    description:
      'Enter your area or let us detect your location automatically. See every nearby vendor on an interactive map in seconds — no signup needed.',
    tag: 'Discovery',
    accent: '#5AB8FF',
    colSpan: 'lg:col-span-2',
  },
  {
    icon: Shield,
    title: 'Verified Sellers',
    description:
      'Every vendor is manually vetted before listing. Deal with confidence, knowing you are contacting a real, trusted supplier.',
    tag: 'Trust',
    accent: '#34D399',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: Phone,
    title: 'Direct Contact',
    description:
      'Call or WhatsApp any vendor directly from the listing — zero middleman, zero platform fees. Order how you want.',
    tag: 'Convenience',
    accent: '#A78BFA',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: BarChart3,
    title: 'Compare Live Prices',
    description:
      'Prices update daily. See multiple vendors side-by-side, sort by distance or price, and grab the best deal every time.',
    tag: 'Savings',
    accent: '#FB923C',
    colSpan: 'lg:col-span-2',
  },
];

/** Spotlight hover card — gradient follows the mouse cursor */
function FeatureCard({ feature }: { feature: Feature }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${feature.accent}22, transparent 70%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="feature-card-glow relative h-full rounded-2xl p-6 border border-white/8 bg-white/[0.04] backdrop-blur-sm overflow-hidden cursor-default group hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Spotlight gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: spotlight }}
      />

      <div className="relative z-10">
        {/* Tag */}
        <span
          className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-5 border"
          style={{ color: feature.accent, borderColor: `${feature.accent}30`, background: `${feature.accent}12` }}
        >
          {feature.tag}
        </span>

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border group-hover:scale-110 transition-transform duration-300"
          style={{ background: `${feature.accent}15`, borderColor: `${feature.accent}25` }}
        >
          <feature.icon className="w-6 h-6" style={{ color: feature.accent }} aria-hidden="true" />
        </div>

        <h3 className="text-[17px] font-bold text-white mb-2.5">{feature.title}</h3>
        <p className="text-[13px] text-white/50 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #020617 0%, #060C18 50%, #020617 100%)' }}
      aria-labelledby="features-heading"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(90,184,255,.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <FadeUp className="text-center mb-14">
          <p className="text-[11px] font-bold tracking-widest uppercase text-brand-primary mb-3">
            Why Cylinderly
          </p>
          <h2 id="features-heading" className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need.
            <br />
            <span className="text-hero-gradient">Nothing You Don&apos;t.</span>
          </h2>
          <p className="text-white/45 text-base max-w-md mx-auto leading-relaxed">
            Built specifically for Pakistan&apos;s LPG market — simple, fast, and reliable.
          </p>
        </FadeUp>

        {/*
          Bento grid (mobile → desktop):
            Mobile:  1 col — all cards stacked full-width
            sm:      2 cols — 2 equal columns
            lg:      3 cols with col-span:
                     [Search ×2] [Verified ×1]
                     [Contact ×1] [Prices ×2]
        */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title} className={`${feature.colSpan} flex flex-col`}>
              <FeatureCard feature={feature} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
