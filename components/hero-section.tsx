'use client';

import { useState } from 'react';
import { MapPin, Navigation, Search } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const [location, setLocation] = useState('');

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`),
        (err) => console.error('Geolocation error:', err)
      );
    }
  };

  return (
    <section
      className="hero-dot-grid relative pt-32 pb-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #0A1628 0%, #0D2149 55%, #163461 100%)' }}
    >
      {/* Glow orb top-right */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(90,184,255,.18) 0%, transparent 70%)' }} />

      {/* Glow orb bottom-left */}
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(60,125,217,.12) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* ── Left: Content ── */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#5AB8FF]/10 border border-[#5AB8FF]/25 text-[#5AB8FF] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5AB8FF] animate-pulse-dot" />
            Pakistan&apos;s #1 LPG Marketplace
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-5" style={{ fontFamily: 'var(--font-poppins)' }}>
            Find LPG Cylinders{' '}
            <span className="text-hero-gradient">Near You</span>
          </h1>

          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            Instantly discover nearby LPG vendors, compare prices, and contact them via call or WhatsApp — when you need gas the most.
          </p>

          {/* Search bar */}
          <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-1.5 flex items-center gap-3 max-w-[520px] mb-4 focus-within:border-[#5AB8FF]/50 focus-within:bg-white/12 focus-within:shadow-[0_0_0_4px_rgba(90,184,255,.12)] transition-all">
            <MapPin className="w-5 h-5 text-[#5AB8FF] ml-3 shrink-0" />
            <input
              type="text"
              placeholder="Enter your area, city or street..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/40 text-[15px] font-medium py-2.5 min-w-0"
              style={{ fontFamily: 'var(--font-nunito)' }}
            />
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-[#5AB8FF] to-[#3C7DD9] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-[#5AB8FF]/40 hover:shadow-[#5AB8FF]/60 hover:-translate-y-0.5 transition-all shrink-0"
            >
              <Search className="w-4 h-4" />
              Find Vendors
            </button>
          </div>

          {/* Detect location button */}
          <button
            onClick={handleDetectLocation}
            className="flex items-center gap-2 text-[#5AB8FF] text-sm font-semibold hover:text-white transition-colors mb-10"
          >
            <Navigation className="w-4 h-4" />
            Use my current location
          </button>

          {/* Trust chips */}
          <div className="flex items-center gap-6 flex-wrap">
            {[
              '500+ Vendors',
              '20+ Cities',
              'Free to Use',
            ].map((chip) => (
              <div key={chip} className="flex items-center gap-1.5 text-white/55 text-sm font-semibold">
                <span className="text-[#5AB8FF] text-base leading-none">✓</span>
                {chip}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Illustration ── */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(90,184,255,.15) 0%, transparent 70%)' }} />
          <Image
            src="/hero-illustration.png"
            alt="Find LPG vendors on a map near you"
            width={560}
            height={560}
            priority
            className="w-full max-w-[540px] rounded-2xl shadow-2xl animate-float-slow relative z-10"
            style={{ boxShadow: '0 30px 80px rgba(0,0,0,.35), 0 0 60px rgba(90,184,255,.18)' }}
          />
        </div>
      </div>
    </section>
  );
}
