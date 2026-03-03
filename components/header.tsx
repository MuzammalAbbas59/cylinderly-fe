'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { LogoIcon } from '@/components/icons/logo-icon';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-blue-100'
        : 'bg-white/70 backdrop-blur-md border-b border-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#5AB8FF]/15 to-[#3C7DD9]/10 border border-[#5AB8FF]/20 group-hover:scale-105 transition-transform">
            <LogoIcon size={22} />
          </div>
          <span className="text-xl font-extrabold text-brand-gradient tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
            Cylinderly
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-slate-500 hover:text-[#3C7DD9] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:rounded-full after:bg-[#5AB8FF] after:transition-[width] after:duration-250 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop Actions ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/vendor/register"
            className="text-sm font-semibold text-[#3C7DD9] border border-[#5AB8FF]/50 px-4 py-2 rounded-lg hover:bg-[#EBF5FF] transition-all"
          >
            List Your Business
          </Link>
          <Link
            href="/login"
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#5AB8FF] to-[#3C7DD9] shadow-md shadow-[#5AB8FF]/30 hover:shadow-[#5AB8FF]/50 hover:-translate-y-0.5 transition-all"
          >
            Login
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-[#3C7DD9] transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <Link
              href="/vendor/register"
              className="text-center text-sm font-semibold text-[#3C7DD9] border border-[#5AB8FF]/50 py-2.5 rounded-lg hover:bg-[#EBF5FF] transition-all"
            >
              List Your Business
            </Link>
            <Link
              href="/login"
              className="text-center text-sm font-semibold text-white py-2.5 rounded-lg bg-gradient-to-r from-[#5AB8FF] to-[#3C7DD9]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
