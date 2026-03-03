import Link from 'next/link';
import { LogoIcon } from '@/components/icons/logo-icon';
import { APP_CONFIG } from '@/lib/config';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: 'linear-gradient(150deg, #0A1628 0%, #0D2149 100%)' }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(90,184,255,.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#5AB8FF]/10 border border-[#5AB8FF]/20">
            <LogoIcon size={24} />
          </div>
          <span className="text-xl font-extrabold text-brand-gradient">{APP_CONFIG.name}</span>
        </div>

        <p className="text-[120px] font-extrabold leading-none text-white/5 mb-6 select-none">404</p>
        <h1 className="text-3xl font-extrabold text-white mb-3">Page not found</h1>
        <p className="text-white/50 text-base mb-10 max-w-sm mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#5AB8FF] to-[#3C7DD9] shadow-lg shadow-[#5AB8FF]/30 hover:-translate-y-0.5 transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
