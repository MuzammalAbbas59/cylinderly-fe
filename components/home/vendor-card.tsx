import { Phone, MapPin, CheckCircle, MessageCircle } from 'lucide-react';
import { StarRating } from '@/components/shared/star-rating';
import { LogoIcon } from '@/components/icons/logo-icon';
import type { Vendor } from '@/types/vendor';

interface VendorCardProps {
  vendor: Vendor;
}

export function VendorCard({ vendor }: VendorCardProps) {
  const whatsappUrl = `https://wa.me/${vendor.whatsapp}`;

  return (
    <article
      className="vendor-card-accent relative bg-[#0A1628]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-white/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-brand-primary/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      aria-label={`${vendor.name} — Rs ${vendor.price.toLocaleString()} per cylinder`}
    >
      {/* Left: icon + info */}
      <div className="flex items-start md:items-center gap-4 md:gap-5 flex-1 min-w-0">

        {/* Vendor icon */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-brand-primary/20 bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 group-hover:scale-105 group-hover:shadow-[inset_0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300">
          <LogoIcon size={32} className="opacity-90" minimal />
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          {/* Header row: Name + Badges */}
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <h3 className="text-base md:text-lg font-bold text-white truncate">
              {vendor.name}
            </h3>
            {vendor.verified && (
              <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shrink-0">
                <CheckCircle className="w-3 h-3" aria-hidden="true" />
                Verified
              </span>
            )}
            {/* Availability */}
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${vendor.available
                  ? 'bg-brand-primary/10 text-brand-primary border-brand-primary/25'
                  : 'bg-white/5 text-slate-400 border-white/10'
                }`}
              aria-label={vendor.available ? 'Currently available' : 'Currently unavailable'}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${vendor.available ? 'bg-brand-primary animate-pulse shadow-[0_0_8px_#38BDF8]' : 'bg-slate-500'}`}
                aria-hidden="true"
              />
              {vendor.available ? 'Available Now' : 'Closed'}
            </span>
          </div>

          {/* Pricing & Location Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-3">
            <p className="text-xl md:text-2xl font-black text-white tracking-tight">
              Rs {vendor.price.toLocaleString()}
              <span className="text-slate-400 font-semibold text-sm tracking-normal"> / refil</span>
            </p>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600" aria-hidden="true" />
            <span className="flex items-center gap-1.5 text-slate-400 text-sm font-medium">
              <MapPin className="w-4 h-4 text-brand-primary" aria-hidden="true" />
              {vendor.distance} away
            </span>
          </div>

          {/* Meta: rating + sizes */}
          <div className="flex items-center gap-4 flex-wrap">
            <StarRating rating={vendor.rating} reviewCount={vendor.reviewCount} />
            <div className="flex items-center gap-1.5" aria-label={`Sizes: ${vendor.sizes.join(', ')}`}>
              {vendor.sizes.map((size) => (
                <span
                  key={size}
                  className="text-[10px] sm:text-xs font-bold bg-white/5 text-slate-300 px-2 py-1 rounded-md border border-white/10"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex flex-row md:flex-col lg:flex-row items-stretch md:items-center gap-2.5 shrink-0 mt-2 md:mt-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${vendor.name}`}
          className="flex-1 md:flex-none flex justify-center items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 text-sm font-bold px-5 py-3 md:py-2.5 rounded-xl transition-all hover:bg-emerald-500/20 hover:scale-[1.02] active:scale-95"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={`tel:${vendor.phone}`}
          aria-label={`Call ${vendor.name}`}
          className="flex-1 md:flex-none flex justify-center items-center gap-2 text-white text-sm font-bold px-5 py-3 md:py-2.5 rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-primary/25 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)' }}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call Now
        </a>
      </div>
    </article>
  );
}
