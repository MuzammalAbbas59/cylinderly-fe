import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { StaggerContainer, StaggerItem, FadeUp } from '@/components/shared/motion';
import { VendorCard } from '@/components/home/vendor-card';
import { MOCK_VENDORS } from '@/lib/data/vendors';

export function VendorList() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: '#060C18' }} aria-labelledby="vendors-heading">
      {/* Subtle organic background shapes for depth */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 60%)' }}
        />
        <div
          className="absolute top-[200px] -left-[300px] w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.04) 0%, transparent 60%)' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeUp className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              Live Pricing
            </div>
            <h2 id="vendors-heading" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Near You</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Skip the middleman. Compare live prices from trusted local sellers and order directly.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="hidden md:block">
            <Link
              href="/vendors"
              className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
            >
              View All Vendors
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-primary/20 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-all">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </FadeUp>
        </div>

        {/* Vendor cards stack */}
        <StaggerContainer className="flex flex-col gap-4">
          {MOCK_VENDORS.map((vendor) => (
            <StaggerItem key={vendor.id}>
              <VendorCard vendor={vendor} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile-only CTA */}
        <FadeUp delay={0.3} className="mt-8 md:hidden">
          <Link
            href="/vendors"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
          >
            View All Vendors
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
