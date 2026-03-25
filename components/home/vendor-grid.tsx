'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const VENDORS = [
  {
    id: 1,
    name: 'Blue Flame Distributors',
    icon: 'local_shipping',
    rating: 4.9,
    reviews: '1.2k',
    price: '3,120',
    type: '11.8kg Refill',
    delivery: '25-40 min',
    stock: 'High',
    verified: true
  },
  {
    id: 2,
    name: 'Lahore Gas Co.',
    icon: 'factory',
    rating: 4.7,
    reviews: '840',
    price: '3,090',
    type: '11.8kg Refill',
    delivery: '15-30 min',
    stock: 'Critical',
    verified: true
  },
  {
    id: 3,
    name: 'Indus Fuel Solutions',
    icon: 'store',
    rating: 4.8,
    reviews: '2.1k',
    price: '3,150',
    type: '11.8kg Refill',
    delivery: '45-60 min',
    stock: 'Medium',
    verified: true
  }
];

export function VendorGrid() {
  return (
    <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-4">Market Layer</p>
            <h2 className="font-headline text-4xl font-bold tracking-tight uppercase">Top-Rated Near You</h2>
          </div>
          <Link 
            href="#" 
            className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all group"
          >
            Explore All Distributors 
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VENDORS.map((vendor) => (
            <motion.div 
              key={vendor.id}
              whileHover={{ y: -5 }}
              className="group relative bg-surface-container-low p-0 rounded-sm border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer overflow-hidden shadow-lg hover:shadow-primary/5"
            >
              {/* Technical side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-container opacity-20 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-8">
                {/* Header Row: Tech Readout Style */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-sm border border-outline-variant/10 group-hover:border-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                      {vendor.icon}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="bg-primary-container text-primary text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-widest block mb-2">
                      {vendor.verified ? 'Verified Node' : 'Unverified'}
                    </span>
                    <div className="flex items-center justify-end space-x-1">
                      <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold text-on-surface">{vendor.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Vendor Name */}
                <h3 className="font-headline text-2xl font-bold mb-6 tracking-tight group-hover:text-primary transition-colors">
                  {vendor.name}
                </h3>
                
                {/* Technical Specs List */}
                <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-outline-variant/10">
                  <div>
                    <p className="text-[9px] font-black text-outline uppercase tracking-widest mb-1">Standard Unit</p>
                    <p className="text-xs font-bold text-on-surface-variant uppercase">{vendor.type}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-outline uppercase tracking-widest mb-1">Stock Level</p>
                    <p className={`text-xs font-bold uppercase ${vendor.stock === 'Critical' ? 'text-error' : 'text-primary'}`}>
                      {vendor.stock}
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-outline uppercase tracking-widest mb-1">Node Distance</p>
                    <p className="text-xs font-bold text-on-surface-variant">2.4 KM</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-outline uppercase tracking-widest mb-1">Est. Completion</p>
                    <p className="text-xs font-bold text-on-surface-variant">{vendor.delivery}</p>
                  </div>
                </div>

                {/* Footer Action Row */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/10">
                  <div>
                    <p className="text-[9px] font-black text-outline uppercase tracking-widest mb-0.5">Market Price</p>
                    <p className="text-xl font-headline font-black text-on-surface tracking-tighter">
                      PKR <span className="text-primary">{vendor.price}</span>
                    </p>
                  </div>
                  <button className="machined-button px-6 py-3 text-[10px] shadow-lg shadow-primary/10">
                    Initiate Book
                  </button>
                </div>
              </div>

              {/* Hover Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-b from-transparent via-primary/20 to-transparent h-[10%] w-full animate-[scan_3s_linear_infinite]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
