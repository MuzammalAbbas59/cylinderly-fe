'use client';

import { useState } from 'react';
import { useOnboardingStore } from '@/lib/store/use-onboarding-store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { AnimatedButton } from '@/components/shared/motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export function StepInventory({
  onBack,
  onComplete,
}: {
  onBack: () => void;
  onComplete: () => void;
}) {
  const { has11kg, price11kg, has45kg, price45kg, updateField } = useOnboardingStore();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleComplete = () => {
    if (!has11kg && !has45kg) {
      setError('Please select at least one cylinder size to sell.');
      return;
    }
    if ((has11kg && price11kg <= 0) || (has45kg && price45kg <= 0)) {
      setError('Please enter a valid price for the selected sizes.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Simulate API call to register vendor
    setTimeout(() => {
      setIsSubmitting(false);
      onComplete();
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-2xl font-bold text-white mb-2">Stock & Pricing</h2>
        <p className="text-slate-400 text-sm">
          What cylinder sizes are currently available at your shop, and what is your today's price?
        </p>
      </div>

      <div className="space-y-6 flex-1">
        {/* 11kg Option */}
        <div
          className={`relative p-5 rounded-2xl border transition-all duration-300 ${has11kg
            ? 'bg-brand-primary/5 border-brand-primary/30 shadow-[inset_0_0_20px_rgba(56,189,248,0.1)]'
            : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Checkbox
                id="has11kg"
                checked={has11kg}
                onCheckedChange={(checked) => updateField('has11kg', checked === true)}
              />
              <div className="grid gap-1">
                <Label htmlFor="has11kg" className="text-base text-white cursor-pointer">
                  Standard Cylinder (11kg)
                </Label>
                <p className="text-xs font-semibold text-slate-500">For domestic household use</p>
              </div>
            </div>
          </div>

          <div
            className={`grid transition-all duration-300 ${has11kg ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
          >
            <div className="overflow-hidden">
              <div className="pt-2">
                <Label htmlFor="price11kg" className="sr-only">Price for 11kg</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                    Rs
                  </span>
                  <Input
                    id="price11kg"
                    type="number"
                    min="0"
                    placeholder="2500"
                    className="pl-11 text-lg font-bold"
                    value={price11kg || ''}
                    onChange={(e) => updateField('price11kg', parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 45kg Option */}
        <div
          className={`relative p-5 rounded-2xl border transition-all duration-300 ${has45kg
            ? 'bg-brand-primary/5 border-brand-primary/30 shadow-[inset_0_0_20px_rgba(56,189,248,0.1)]'
            : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Checkbox
                id="has45kg"
                checked={has45kg}
                onCheckedChange={(checked) => updateField('has45kg', checked === true)}
              />
              <div className="grid gap-1">
                <Label htmlFor="has45kg" className="text-base text-white cursor-pointer">
                  Commercial Cylinder (45kg)
                </Label>
                <p className="text-xs font-semibold text-slate-500">For restaurants & commercial</p>
              </div>
            </div>
          </div>

          <div
            className={`grid transition-all duration-300 ${has45kg ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
          >
            <div className="overflow-hidden">
              <div className="pt-2">
                <Label htmlFor="price45kg" className="sr-only">Price for 45kg</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                    Rs
                  </span>
                  <Input
                    id="price45kg"
                    type="number"
                    min="0"
                    placeholder="9500"
                    className="pl-11 text-lg font-bold"
                    value={price45kg || ''}
                    onChange={(e) => updateField('price45kg', parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

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
          disabled={isSubmitting}
          className="flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors px-4 py-2 disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <AnimatedButton>
          <button
            onClick={handleComplete}
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-emerald-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all disabled:opacity-70"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Finish & List
              </>
            )}
          </button>
        </AnimatedButton>
      </div>
    </div>
  );
}
