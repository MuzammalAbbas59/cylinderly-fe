import { Phone, MapPin, CheckCircle, MessageCircle, Star } from 'lucide-react';
import { LogoIcon } from '@/components/icons/logo-icon';

interface Vendor {
  id: string;
  name: string;
  price: number;
  distance: string;
  rating: number;
  sizes: string[];
  verified?: boolean;
  phone: string;
}

const mockVendors: Vendor[] = [
  {
    id: '1',
    name: 'GasPoint Lahore',
    price: 1800,
    distance: '1.2 km',
    rating: 4.7,
    sizes: ['11 kg', '22 kg'],
    verified: true,
    phone: '+92-311-1234567',
  },
  {
    id: '2',
    name: 'QuickGas Supply',
    price: 1750,
    distance: '2.1 km',
    rating: 4.5,
    sizes: ['11 kg'],
    verified: true,
    phone: '+92-321-9876543',
  },
  {
    id: '3',
    name: 'City LPG Depot',
    price: 1850,
    distance: '2.5 km',
    rating: 4.2,
    sizes: ['11 kg', '16 kg', '22 kg'],
    verified: false,
    phone: '+92-300-5555555',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      <span className="text-xs font-bold text-slate-600">{rating}</span>
    </div>
  );
}

export function VendorList() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5AB8FF] mb-2">
            Nearby Vendors
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
            Available Near You
          </h2>
          <p className="text-slate-500 text-base max-w-md">
            Live prices from verified sellers in your area. Contact any vendor instantly.
          </p>
        </div>

        {/* Vendor cards */}
        <div className="flex flex-col gap-3.5">
          {mockVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="vendor-card-accent relative bg-white border border-slate-200 rounded-2xl px-5 py-4 flex items-center justify-between gap-4 hover:border-[#5AB8FF]/40 hover:shadow-lg hover:shadow-[#5AB8FF]/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Left: icon + info */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border border-[#5AB8FF]/15 bg-gradient-to-br from-[#5AB8FF]/10 to-[#3C7DD9]/5">
                  <LogoIcon size={30} />
                </div>

                {/* Info */}
                <div className="min-w-0">
                  {/* Name row */}
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-base font-bold text-slate-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                      {vendor.name}
                    </h3>
                    {vendor.verified && (
                      <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        <CheckCircle className="w-2.5 h-2.5" />
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <p className="text-base font-bold text-[#3C7DD9] mb-1.5">
                    Rs {vendor.price.toLocaleString()}
                    <span className="text-slate-400 font-medium text-sm"> / cylinder</span>
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      {vendor.distance} away
                    </span>
                    <StarRating rating={vendor.rating} />
                    <div className="flex items-center gap-1">
                      {vendor.sizes.map((size) => (
                        <span key={size} className="text-[10px] font-semibold bg-[#EBF5FF] text-[#3C7DD9] px-1.5 py-0.5 rounded-md">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: action buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://wa.me/${vendor.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white text-sm font-semibold px-3.5 py-2 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 12px rgba(37,211,102,.35)' }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
                <a
                  href={`tel:${vendor.phone}`}
                  className="flex items-center gap-1.5 text-white text-sm font-semibold px-3.5 py-2 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #5AB8FF, #3C7DD9)', boxShadow: '0 4px 12px rgba(90,184,255,.35)' }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Call Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 border border-[#5AB8FF]/40 text-[#3C7DD9] font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-[#EBF5FF] transition-all">
            View All Vendors →
          </button>
        </div>
      </div>
    </section>
  );
}
