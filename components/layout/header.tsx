'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoIcon } from '@/components/icons/logo-icon';
import { NAV_LINKS, APP_CONFIG } from '@/lib/config';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#060C18]/90 backdrop-blur-2xl'
          : 'bg-transparent'
          }`}
        style={{
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between gap-6">

          {/* ── Logo ───────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Cylinderly home"
          >
            {/* Badge icon */}
            <div className="relative w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <LogoIcon size={36} />
            </div>

            {/* Wordmark */}
            <span className="text-[1.2rem] font-extrabold tracking-tight leading-none select-none">
              <span className="text-brand-gradient">Cylin</span>
              <span className="text-white">derly</span>
            </span>
          </Link>

          {/* ── Desktop Nav ────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-1 bg-white/5 border border-white/8 rounded-full px-2 py-1.5"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-[13px] font-semibold px-4 py-1.5 rounded-full transition-all duration-200 ${active
                    ? 'text-white'
                    : 'text-white/55 hover:text-white'
                    }`}
                >
                  {/* Active pill background */}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/12 border border-white/15"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop Actions ──────────────────── */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Ghost CTA */}
            <Link
              href="/register"
              className="group flex items-center gap-1.5 text-[13px] font-semibold text-white/70 border border-white/15 px-4 py-2 rounded-full hover:text-white hover:border-white/35 hover:bg-white/5 transition-all duration-200"
            >
              <Flame className="w-3.5 h-3.5 text-brand-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
              List Your Business
            </Link>

            {/* Primary CTA */}
            <Link
              href="/login"
              className="flex items-center gap-1.5 text-[13px] font-bold text-white px-5 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-primary/30 active:scale-[0.97]"
              style={{ background: 'linear-gradient(135deg, #5AB8FF 0%, #2563EB 100%)' }}
            >
              Login
            </Link>
          </div>

          {/* ── Mobile Hamburger ─────────────────── */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <X className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <Menu className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer (portal-like, below header) ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col"
              style={{ background: '#0A1628', borderLeft: '1px solid rgba(255,255,255,.08)' }}
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <LogoIcon size={28} />
                  <span className="text-base font-extrabold">
                    <span className="text-brand-gradient">Cylin</span>
                    <span className="text-white">derly</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ href, label }) => {
                  const active = isActive(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${active
                        ? 'bg-white/10 text-white border border-white/10'
                        : 'text-white/55 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              {/* Drawer CTAs */}
              <div className="p-4 border-t border-white/8 flex flex-col gap-2">
                <Link
                  href="/register"
                  className="text-center text-sm font-semibold text-white/70 border border-white/15 py-2.5 rounded-xl hover:text-white hover:bg-white/5 transition-all"
                >
                  List Your Business
                </Link>
                <Link
                  href="/login"
                  className="text-center text-sm font-bold text-white py-2.5 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #5AB8FF 0%, #2563EB 100%)' }}
                >
                  Login
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
