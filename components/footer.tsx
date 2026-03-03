import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LogoIcon } from '@/components/icons/logo-icon';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/contact', label: 'Contact' },
];

const vendorLinks = [
  { href: '/vendor/register', label: 'Register Your Business' },
  { href: '/vendor/login', label: 'Vendor Login' },
  { href: '/vendor/pricing', label: 'Pricing' },
];

export function Footer() {
  return (
    <footer
      className="border-t px-6 pt-16 pb-8"
      style={{ background: '#050D1A', borderColor: 'rgba(90,184,255,.1)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(90,184,255,.12)', border: '1px solid rgba(90,184,255,.2)' }}>
                <LogoIcon size={18} />
              </div>
              <span className="text-lg font-extrabold text-footer-gradient tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
                Cylinderly
              </span>
            </div>
            <p className="text-[15px] leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,.4)' }}>
              Connecting Pakistan with local LPG suppliers — fast, simple, reliable.
            </p>
            {/* Social / WhatsApp CTA */}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: 'white', boxShadow: '0 4px 14px rgba(37,211,102,.3)' }}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,.85)' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[15px] transition-colors hover:text-[#5AB8FF]" style={{ color: 'rgba(255,255,255,.4)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,.85)' }}>
              For Vendors
            </h4>
            <ul className="flex flex-col gap-3">
              {vendorLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[15px] transition-colors hover:text-[#5AB8FF]" style={{ color: 'rgba(255,255,255,.4)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,.85)' }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { icon: Mail, text: 'info@cylinderly.pk' },
                { icon: Phone, text: '+92 300 1234567' },
                { icon: MapPin, text: 'Lahore, Pakistan' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-[15px]" style={{ color: 'rgba(255,255,255,.4)' }}>
                  <Icon className="w-4 h-4 shrink-0" style={{ color: '#5AB8FF' }} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(255,255,255,.28)' }}>
            © {new Date().getFullYear()} Cylinderly. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-sm transition-colors hover:text-[#5AB8FF]"
                style={{ color: 'rgba(255,255,255,.28)' }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
