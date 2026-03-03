import { MapPin, Search, Phone } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MapPin,
    title: 'Enter Your Location',
    description: 'Type your area or street — or just tap "Use my location" to auto-detect.',
    iconColor: 'text-[#5AB8FF]',
  },
  {
    number: '02',
    icon: Search,
    title: 'Browse & Compare',
    description: 'See nearby vendors with live prices, distances, and cylinder sizes.',
    iconColor: 'text-violet-500',
  },
  {
    number: '03',
    icon: Phone,
    title: 'Call or WhatsApp',
    description: 'Contact the vendor directly — order happens offline, simple and fast.',
    iconColor: 'text-emerald-500',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5AB8FF] mb-3">
            Simple Process
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Gas in 3 Easy Steps
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            No registration required. Find and contact a vendor in under a minute.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-connector relative grid md:grid-cols-3 gap-10">
          {steps.map(({ number, icon: Icon, title, description, iconColor }) => (
            <div key={number} className="relative z-10 flex flex-col items-center text-center">
              {/* Circle number */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative"
                style={{
                  background: 'linear-gradient(135deg, #5AB8FF, #3C7DD9)',
                  boxShadow: '0 8px 24px rgba(90,184,255,.40)',
                }}
              >
                {/* outer ring */}
                <span className="absolute inset-0 rounded-full border-2 border-[#5AB8FF]/25 scale-[1.18]" />
                <Icon className="w-8 h-8 text-white" />
              </div>

              <span
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: '#5AB8FF' }}
              >
                Step {number}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                {title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
