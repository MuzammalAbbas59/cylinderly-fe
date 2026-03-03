export interface Vendor {
  id: string;
  name: string;
  /** Price in PKR */
  price: number;
  distance: string;
  rating: number;
  reviewCount: number;
  /** Cylinder sizes available e.g. ['11 kg', '22 kg'] */
  sizes: string[];
  verified: boolean;
  available: boolean;
  phone: string;
  whatsapp: string;
}
