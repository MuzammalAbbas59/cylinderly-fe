import { MapPin, Search, Phone } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/shared/motion';

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    icon: MapPin,
    title: 'Enter Location',
    description: 'Auto-detect or type your area. No signup forms or passwords required.',
    gradient: 'from-brand-primary to-brand-accent',
  },
  {
    number: '02',
    icon: Search,
    title: 'Compare Prices',
    description: 'Instantly view verified local suppliers, live prices, and distance.',
    gradient: 'from-[#A78BFA] to-[#7C3AED]', // Violet 400->600
  },
  {
    number: '03',
    icon: Phone,
    title: 'Order Directly',
    description: 'Call or WhatsApp the vendor directly. We take zero commission.',
    gradient: 'from-[#34D399] to-[#059669]', // Emerald 400->600
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060C18 0%, #020617 50%, #060C18 100%)' }}
      aria-labelledby="how-it-works-heading"
    >
      {/* Abstract dark tech background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Radial soft glow top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(90,184,255,0.05) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <FadeUp className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6">
            Frictionless Process
          </div>
          <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Gas in <span className="text-hero-gradient">3 Easy Steps</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto leading-relaxed">
            We removed all the friction. No apps to download, no accounts to create. Just find and order.
          </p>
        </FadeUp>

        {/* Premium Dark Glass Steps */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">

          {/* Subtle connecting line behind cards */}
          <div className="hidden md:block absolute top-[110px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent z-0" />

          {STEPS.map(({ number, icon: Icon, title, description, gradient }) => (
            <StaggerItem key={number} className="relative z-10">
              <div className="feature-card-glow h-full group bg-[#0A1628]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">

                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-[#060C18] border border-white/10 flex items-center justify-center shadow-xl rotate-3 group-hover:rotate-6 transition-transform">
                  <span className="text-sm font-black text-white/40">{number}</span>
                </div>

                {/* Glowing Icon Container */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full`} />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} p-[1px] group-hover:scale-105 transition-transform duration-500 shadow-xl`}>
                    <div className="absolute inset-0 bg-[#060C18] rounded-2xl opacity-90" />
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
                <p className="text-white/50 text-base leading-relaxed">{description}</p>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
