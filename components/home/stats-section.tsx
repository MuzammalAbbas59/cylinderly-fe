'use client';

import { useRef, useEffect, useState } from 'react';
import { Store, Globe, BadgeCheck, Users } from 'lucide-react';
import { useInView } from 'framer-motion';
import { FadeUp } from '@/components/shared/motion';

interface Stat {
  icon: React.ElementType;
  prefix?: string;
  target: number;
  suffix: string;
  label: string;
  iconClass: string;
}

const STATS: Stat[] = [
  { icon: Store, target: 500, suffix: '+', label: 'Vendors Listed', iconClass: 'text-brand-primary' },
  { icon: Globe, target: 20, suffix: '+', label: 'Cities in Pakistan', iconClass: 'text-violet-400' },
  { icon: BadgeCheck, target: 100, suffix: '%', label: 'Sellers Vetted', iconClass: 'text-emerald-400' },
  { icon: Users, target: 5000, suffix: '+', label: 'Users Served Monthly', iconClass: 'text-amber-400' },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const { icon: Icon, target, suffix, label, iconClass } = stat;
  const count = useCountUp(target, active);

  return (
    <div className="flex flex-col items-center text-center py-8 px-4 group">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-5 h-5 ${iconClass}`} aria-hidden="true" />
      </div>
      <div className="text-brand-gradient text-4xl font-extrabold tracking-tight mb-1.5" aria-live="polite">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-white/50 text-sm font-semibold">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="px-6 py-4 border-b border-white/5"
      style={{ background: 'linear-gradient(180deg, #020617 0%, #060C18 100%)' }}
      aria-label="Product statistics"
    >
      <div className="max-w-6xl mx-auto">
        <FadeUp className="text-center mb-2">
          <p className="text-brand-primary/70 text-[11px] font-bold tracking-widest uppercase">
            Trusted across Pakistan
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
