import type { Vendor } from '@/types/vendor';

/** TODO: Replace with `fetch('/api/vendors?lat=...&lng=...')` when API is live. */
export const MOCK_VENDORS: Vendor[] = [
  {
    id: '1',
    name: 'GasPoint Lahore',
    price: 1800,
    distance: '1.2 km',
    rating: 4.7,
    reviewCount: 142,
    sizes: ['11 kg', '22 kg'],
    verified: true,
    available: true,
    phone: '+92-311-1234567',
    whatsapp: '923111234567',
  },
  {
    id: '2',
    name: 'QuickGas Supply',
    price: 1750,
    distance: '2.1 km',
    rating: 4.5,
    reviewCount: 89,
    sizes: ['11 kg'],
    verified: true,
    available: true,
    phone: '+92-321-9876543',
    whatsapp: '923219876543',
  },
  {
    id: '3',
    name: 'City LPG Depot',
    price: 1850,
    distance: '2.5 km',
    rating: 4.2,
    reviewCount: 61,
    sizes: ['11 kg', '16 kg', '22 kg'],
    verified: false,
    available: false,
    phone: '+92-300-5555555',
    whatsapp: '923005555555',
  },
];
