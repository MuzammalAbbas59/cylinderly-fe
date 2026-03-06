'use client';

import { useState } from 'react';
import { useOnboardingStore } from '@/lib/store/use-onboarding-store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AnimatedButton } from '@/components/shared/motion';
import { ArrowLeft, ArrowRight, MapPin, Navigation } from 'lucide-react';

export function StepLocation({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  const { address, updateField } = useOnboardingStore();
  const [detecting, setDetecting] = useState(false);
  const [error, setError] = useState('');

  const handleDetectLocation = () => {
    if (!navigator.geolocation) return;
    setDetecting(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        updateField('latitude', pos.coords.latitude);
        updateField('longitude', pos.coords.longitude);
        updateField('address', 'Current Location Selected (GPS Linked)');
        setDetecting(false);
      },
      () => {
        setDetecting(false);
        setError('Location access denied. Please enter manually.');
      }
    );
  };

  const handleNext = () => {
    if (!address) {
      setError('Please provide a shop address or use GPS location.');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-2xl font-bold text-white mb-2">Set Your Location</h2>
        <p className="text-slate-400 text-sm">
          Customers rely on distance to choose vendors. A precise location gets you more orders.
        </p>
      </div>

      <div className="space-y-6 flex-1">
        <div className="space-y-3">
          <Label htmlFor="address">Shop Address</Label>
          <Input
            id="address"
            placeholder="e.g. Shop #4, Main Market, Gulberg, Lahore"
            value={address}
            onChange={(e) => updateField('address', e.target.value)}
            icon={<MapPin className="w-4 h-4" />}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0A1628] px-3 text-xs uppercase text-slate-500 font-bold tracking-widest">
              Or
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDetectLocation}
          disabled={detecting}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-brand-primary/30 bg-brand-primary/10 text-brand-primary font-bold hover:bg-brand-primary/20 transition-colors disabled:opacity-50"
        >
          <Navigation className={`w-4 h-4 ${detecting ? 'animate-spin' : ''}`} />
          {detecting ? 'Detecting Location...' : 'Use Current GPS Location'}
        </button>

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-4 animate-in fade-in slide-in-from-bottom-2">
            <p className="text-rose-400 text-sm font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              {error}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors px-4 py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <AnimatedButton>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        </AnimatedButton>
      </div>
    </div>
  );
}
