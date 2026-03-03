import { MapPin, Search, Phone, Shield } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Instant Search',
    description: 'Enter your area and see nearby LPG vendors on a map in seconds.',
    gradient: 'from-[#5AB8FF]/20 to-[#3C7DD9]/10',
    iconColor: 'text-[#5AB8FF]',
  },
  {
    icon: Shield,
    title: 'Verified Sellers',
    description: 'Every vendor is verified before listing so you deal with trusted suppliers.',
    gradient: 'from-emerald-400/20 to-emerald-600/10',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Phone,
    title: 'Contact Instantly',
    description: 'Call or WhatsApp any vendor directly — no middleman, no delays.',
    gradient: 'from-violet-400/20 to-violet-600/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: MapPin,
    title: 'Compare Prices',
    description: 'See prices from multiple vendors side-by-side and pick the best deal.',
    gradient: 'from-amber-400/20 to-orange-500/10',
    iconColor: 'text-amber-400',
  },
];

export function FeaturesSection() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0A1628 0%, #0D2149 100%)' }}
    >
      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(90,184,255,.09) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5AB8FF] mb-3">
            Why Cylinderly
          </p>
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Everything You Need, Nothing You Don&apos;t
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto leading-relaxed">
            Built specifically for Pakistan&apos;s LPG market — simple, fast, and reliable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, description, gradient, iconColor }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-[#5AB8FF]/30 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
              </div>
              <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                {title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
