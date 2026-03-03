/**
 * Centralised app configuration.
 * Import from here, never hardcode these values in components.
 */
export const APP_CONFIG = {
  name: 'Cylinderly',
  tagline: "Pakistan's #1 LPG Marketplace",
  description:
    'Quickly connect with local gas suppliers. Find nearby LPG cylinder vendors, compare prices, and contact them instantly.',
  url: 'https://cylinderly.pk',
  email: 'info@cylinderly.pk',
  phone: '+92 300 1234567',
  whatsapp: '923001234567',
  city: 'Lahore, Pakistan',
  social: {
    twitter: '@cylinderly',
  },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_VENDOR_LINKS = [
  { href: '/vendor/register', label: 'Register Your Business' },
  { href: '/vendor/login', label: 'Vendor Login' },
  { href: '/vendor/pricing', label: 'Pricing' },
] as const;
