'use client';

const FEATURES = [
  {
    icon: 'verified_user',
    title: 'Verified Network',
    description: 'NTN & OGRA verified distributors only. Every vendor undergoes a 12-point security check.'
  },
  {
    icon: 'analytics',
    title: 'Price Comparison',
    description: 'No hidden costs. Real-time index matching with local market rates in your specific area.'
  },
  {
    icon: 'distance',
    title: 'GPS Tracking',
    description: 'Track your delivery from the warehouse to your door with precise millisecond updates.'
  },
  {
    icon: 'shield_with_heart',
    title: 'Cylinderly Guarantee',
    description: 'Dispute protection for weight discrepancies or quality issues. Your funds are protected.'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4">
        <div>
          <p className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-4">Industrial Layer</p>
          <h2 className="font-headline text-4xl font-bold tracking-tight">THE LOGISTICS OF LPG</h2>
        </div>
        <p className="text-outline-variant max-w-md text-sm leading-relaxed">
          We've digitized the supply chain from bulk storage to your doorstep, eliminating middle-men and ensuring regulatory compliance.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feature, idx) => (
          <div 
            key={idx}
            className="surface-container-low p-8 border-b-2 border-primary/20 hover:border-primary transition-all group cursor-pointer"
          >
            <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </span>
            <h4 className="font-headline text-lg font-bold mb-3">{feature.title}</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
