'use client';

import { useRef, useState } from 'react';
import { MapPin, Navigation, Search, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '@/lib/config';
import { AnimatedButton, EASE_OUT_EXPO } from '@/components/shared/motion';

const TRUST_CHIPS = ['500+ Vendors', '20+ Cities', 'Free to Use'] as const;

// Stagger config for hero entrance
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
};

export function HeroSection() {
  const [location, setLocation] = useState('');
  const [detecting, setDetecting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDetectLocation = () => {
    if (!navigator.geolocation) return;
    setDetecting(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`);
        setDetecting(false);
        inputRef.current?.focus();
      },
      () => setDetecting(false)
    );
  };

  return (
    <section
      className="hero-dot-grid relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #020617 0%, #020617 45%, #060C18 75%, #020617 100%)',
      }}
    >
      {/* Aurora glow orbs */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,.10) 0%, transparent 65%)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,.08) 0%, transparent 65%)' }}
      />
      {/* Subtle violet accent orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(56,189,248,.05) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* ── Left panel ─────────────────────────────── */}
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-[11px] font-bold px-4 py-1.5 rounded-full mb-7 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse-dot" />
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              {APP_CONFIG.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl lg:text-[4.25rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Find LPG Cylinders{' '}
            <span className="text-hero-gradient">Near You</span>
            <span className="text-white">.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={item} className="text-lg text-white/55 mb-10 max-w-[480px] leading-relaxed">
            Instantly discover nearby LPG vendors, compare live prices, and contact them
            via call or WhatsApp — when you need gas the most.
          </motion.p>

          {/* Search bar */}
          <motion.div variants={item}>
            <div className="relative flex items-center bg-white/[0.07] backdrop-blur-md border border-white/12 rounded-2xl p-1.5 max-w-[520px] mb-3 focus-within:border-brand-primary/50 focus-within:ring-4 focus-within:ring-brand-primary/10 transition-all duration-300">
              <MapPin className="w-5 h-5 text-brand-primary ml-3 shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                placeholder="Enter your area, city or street…"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/35 text-[15px] font-medium px-3 py-2.5 min-w-0"
                aria-label="Search for LPG vendors by location"
              />
              <AnimatedButton>
                <button
                  type="button"
                  className="flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-brand-primary/35 shrink-0"
                >
                  <Search className="w-4 h-4" aria-hidden="true" />
                  Find Vendors
                </button>
              </AnimatedButton>
            </div>

            {/* GPS detect */}
            <button
              type="button"
              onClick={handleDetectLocation}
              disabled={detecting}
              className="flex items-center gap-1.5 text-brand-primary/80 text-sm font-semibold hover:text-brand-primary transition-colors disabled:opacity-50 mb-10"
            >
              <Navigation className={`w-4 h-4 ${detecting ? 'animate-spin' : ''}`} aria-hidden="true" />
              {detecting ? 'Detecting…' : 'Use my current location'}
            </button>
          </motion.div>

          {/* Trust chips */}
          <motion.div variants={item} className="flex items-center gap-5 flex-wrap">
            {TRUST_CHIPS.map((chip) => (
              <div key={chip} className="flex items-center gap-1.5 text-white/50 text-sm font-semibold">
                <span className="text-brand-primary text-base leading-none" aria-hidden="true">✓</span>
                {chip}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right panel: Illustration ───────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.35 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          {/* Glow ring behind illustration */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(90,184,255,.18) 0%, transparent 70%)' }}
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          >
            <Image
              src="/hero-illustration.png"
              alt="Interactive map showing LPG vendors near you in Pakistan"
              width={580}
              height={580}
              priority
              className="w-full max-w-[540px] rounded-3xl relative z-10"
              style={{ boxShadow: '0 40px 100px rgba(0,0,0,.45), 0 0 80px rgba(90,184,255,.20)' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-white/25 text-[10px] tracking-widest uppercase font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
