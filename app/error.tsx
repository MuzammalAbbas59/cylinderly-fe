'use client';

import Link from 'next/link';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'linear-gradient(150deg, #0A1628 0%, #0D2149 100%)' }}
    >
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-red-400" />
        </div>
        <h1 className="text-2xl font-extrabold text-white mb-3">Something went wrong</h1>
        <p className="text-white/50 text-base mb-8 leading-relaxed">
          {error.message ?? 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#5AB8FF] to-[#3C7DD9]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white/60 border border-white/15 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
