import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LogoIcon } from '@/components/icons/logo-icon';
import {
  APP_CONFIG,
  FOOTER_QUICK_LINKS,
  FOOTER_VENDOR_LINKS,
} from '@/lib/config';

const CONTACT_ITEMS = [
  { icon: Mail, text: APP_CONFIG.email },
  { icon: Phone, text: APP_CONFIG.phone },
  { icon: MapPin, text: APP_CONFIG.city },
] as const;

const LEGAL_LINKS = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
] as const;

export function Footer() {
  return (
    <footer
      className="border-t px-6 pt-16 pb-8"
      style={{ background: '#020617', borderColor: 'rgba(56,189,248,.1)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-brand-primary/10 border border-brand-primary/20">
                <LogoIcon size={18} />
              </div>
              <span className="text-lg font-extrabold text-footer-gradient tracking-tight">
                {APP_CONFIG.name}
              </span>
            </div>
            <p className="text-[15px] leading-relaxed mb-5 text-white/40">
              Connecting Pakistan with local LPG suppliers — fast, simple, reliable.
            </p>
            <a
              href={`https://wa.me/${APP_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', boxShadow: '0 4px 14px rgba(37,211,102,.3)' }}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <FooterCol title="Quick Links">
            {FOOTER_QUICK_LINKS.map(({ href, label }) => (
              <FooterLink key={href} href={href}>{label}</FooterLink>
            ))}
          </FooterCol>

          {/* For Vendors */}
          <FooterCol title="For Vendors">
            {FOOTER_VENDOR_LINKS.map(({ href, label }) => (
              <FooterLink key={href} href={href}>{label}</FooterLink>
            ))}
          </FooterCol>

          {/* Contact */}
          <FooterCol title="Contact">
            {CONTACT_ITEMS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5 text-[15px] text-white/40">
                <Icon className="w-4 h-4 shrink-0 text-brand-primary" aria-hidden="true" />
                {text}
              </li>
            ))}
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}
        >
          <p className="text-sm text-white/28">
            © {new Date().getFullYear()} {APP_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-white/28 hover:text-brand-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Sub-components ──────────────────────────────────── */

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-bold tracking-widest uppercase text-white/85 mb-5">{title}</h4>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[15px] text-white/40 hover:text-brand-primary transition-colors">
        {children}
      </Link>
    </li>
  );
}
