'use client';

import Image from 'next/image';

export function CallToActionSection() {
  return (
    <section className="py-24 bg-primary-container relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 grayscale brightness-50 z-0">
        <Image 
          src="/cta-bg.jpg" 
          alt="Technical piping background" 
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 uppercase">
          Ready to scale your distribution?
        </h2>
        <p className="text-on-primary-container text-lg mb-12 font-body leading-relaxed">
          Whether you're a local distributor or a nationwide supplier, Cylinderly provides the technical infrastructure to manage, track, and scale your LPG sales.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="machined-button px-10 py-5 text-[14px] tracking-[0.2em] shadow-xl hover:scale-105">
            Register as a Vendor
          </button>
          <button className="bg-surface px-10 py-5 font-headline font-black text-primary border border-primary/20 uppercase tracking-[0.2em] hover:bg-surface-container-high transition-colors active:scale-95">
            Book a Refill
          </button>
        </div>
      </div>
    </section>
  );
}
