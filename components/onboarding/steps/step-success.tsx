'use client';

import { CheckCircle2, Home, ExternalLink } from 'lucide-react';
import { AnimatedButton } from '@/components/shared/motion';
import Link from 'next/link';
import { useOnboardingStore } from '@/lib/store/use-onboarding-store';
import { useEffect } from 'react';

export function StepSuccess() {
  const { businessName, reset } = useOnboardingStore();

  // Reset store when unmounting the success screen (e.g. they navigate away)
  useEffect(() => {
    return () => reset();
  }, [reset]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-8">
      {/* Animated Success Icon */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse" />
        <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center relative">
          <CheckCircle2 className="w-12 h-12 text-emerald-400" />
        </div>
      </div>

      <h2 className="text-3xl font-extrabold text-white mb-4">
        You're Live!
      </h2>
      <p className="text-slate-400 text-base max-w-[320px] mx-auto mb-10 leading-relaxed">
        Congratulations! <strong className="text-white">{businessName || 'Your business'}</strong> is now visible to customers searching for LPG cylinders nearby.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <AnimatedButton>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors w-full"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </AnimatedButton>
        <AnimatedButton>
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold px-6 py-3.5 rounded-xl hover:bg-brand-primary/20 transition-colors w-full"
          >
            Go to Dashboard
            <ExternalLink className="w-4 h-4" />
          </Link>
        </AnimatedButton>
      </div>
    </div>
  );
}
