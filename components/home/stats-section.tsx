'use client';

export function StatsSection() {
  return (
    <div className="bg-surface-container-low border-y border-outline-variant/10 py-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-1">
            <p className="font-headline text-4xl font-bold text-primary">100+</p>
            <p className="text-[10px] font-black tracking-[0.3em] text-outline uppercase">
              Verified Vendors
            </p>
          </div>
          <div className="space-y-1 md:border-x border-outline-variant/20">
            <p className="font-headline text-4xl font-bold text-primary">50,000+</p>
            <p className="text-[10px] font-black tracking-[0.3em] text-outline uppercase">
              Orders Managed
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-headline text-4xl font-bold text-primary">15 Cities</p>
            <p className="text-[10px] font-black tracking-[0.3em] text-outline uppercase">
              Covered Network
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
