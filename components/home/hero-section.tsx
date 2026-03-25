'use client';

import { motion } from 'framer-motion';
import { Globe } from '@/components/home/globe';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Layer: Industrial Image + Globe */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-container-low/80 to-surface z-10"></div>
        
        {/* The 3D Globe */}
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          <Globe className="w-[120%] h-[120%] lg:w-full lg:h-full max-w-[1200px]" />
        </div>

        {/* Industrial background texture */}
        <Image 
          src="/hero-bg.jpg" 
          alt="Industrial Background" 
          fill
          className="object-cover opacity-10 grayscale brightness-50 z-0"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-container px-3 py-1 rounded-sm mb-6">
            <div className="market-pulse"></div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase font-label">
              Real-time Price Index Live
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            THE SMARTEST WAY <br/> TO <span className="text-primary">REFILL</span> IN PAKISTAN.
          </h1>

          <p className="text-on-surface-variant text-lg max-w-xl mb-10 font-body leading-relaxed">
            A high-performance marketplace for LPG distribution. Compare verified local vendors, track logistics in real-time, and ensure 100% price transparency.
          </p>

          {/* Location Selector / Search Bar */}
          <div className="bg-surface-container-highest p-1 rounded-sm flex flex-col md:flex-row shadow-2xl max-w-2xl border border-outline-variant/20 transition-all hover:border-primary/30">
            <div className="flex-grow flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-outline-variant/20">
              <span className="material-symbols-outlined text-primary mr-3">location_on</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-outline text-sm outline-none" 
                placeholder="Enter your city or area..." 
                type="text"
              />
            </div>
            <div className="flex items-center px-4 py-3 md:w-48">
              <span className="material-symbols-outlined text-outline mr-3">propane_tank</span>
              <select className="bg-transparent border-none focus:ring-0 text-on-surface w-full text-sm font-label outline-none appearance-none cursor-pointer">
                <option className="bg-surface">11.8kg Cylinder</option>
                <option className="bg-surface">45.4kg Cylinder</option>
              </select>
            </div>
            <button className="machined-button px-8 py-4 font-headline font-black text-on-primary uppercase tracking-widest hover:brightness-110 transition-all active:scale-95">
              Compare Vendors
            </button>
          </div>
        </motion.div>

        {/* Right Column: Market Dashboard (Dashboard only on Desktop) */}
        <motion.div 
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="glass-card p-8 rounded-lg relative overflow-hidden group">
            {/* Subtle glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
            
            <div className="flex justify-between items-end mb-8 relative z-10">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-outline uppercase mb-1">Market Average</p>
                <h3 className="font-headline text-3xl font-bold">PKR 3,140.50</h3>
              </div>
              <div className="text-right">
                <p className="text-error text-xs font-bold">-2.4% Today</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "66%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
              <div className="flex justify-between text-[10px] font-bold tracking-tighter uppercase text-outline">
                <span>Supply Status: Stable</span>
                <span>Verified Vendors: 124</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-outline-variant/20 grid grid-cols-2 gap-4 relative z-10">
              <div className="p-3 bg-surface-container-low rounded-sm hover:bg-surface-container transition-colors">
                <span className="text-[10px] font-bold text-outline uppercase">Verification</span>
                <p className="text-sm font-bold text-primary">OGRA Compliant</p>
              </div>
              <div className="p-3 bg-surface-container-low rounded-sm hover:bg-surface-container transition-colors">
                <span className="text-[10px] font-bold text-outline uppercase">Transparency</span>
                <p className="text-sm font-bold text-primary">Zero Hidden Fees</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
