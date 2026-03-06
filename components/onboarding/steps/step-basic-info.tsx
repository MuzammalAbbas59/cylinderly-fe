'use client';

import { useOnboardingStore } from '@/lib/store/use-onboarding-store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AnimatedButton } from '@/components/shared/motion';
import { ArrowRight, Building2, UserCircle, Phone } from 'lucide-react';
import { useState } from 'react';

export function StepBasicInfo({ onNext }: { onNext: () => void }) {
  const { businessName, ownerName, phone, updateField } = useOnboardingStore();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!businessName || !ownerName || !phone) {
      setError('Please fill in all fields to continue.');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-2xl font-bold text-white mb-2">Basic Details</h2>
        <p className="text-slate-400 text-sm">
          Let’s start with the name customers will see when searching for LPG in your area.
        </p>
      </div>

      <div className="space-y-6 flex-1">
        <div className="space-y-2">
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            placeholder="e.g. Ali Gas Point"
            value={businessName}
            onChange={(e) => updateField('businessName', e.target.value)}
            icon={<Building2 className="w-4 h-4" />}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="ownerName">Your Name</Label>
            <Input
              id="ownerName"
              placeholder="e.g. Ali Hassan"
              value={ownerName}
              onChange={(e) => updateField('ownerName', e.target.value)}
              icon={<UserCircle className="w-4 h-4" />}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+92 300 1234567"
              value={phone}
              onChange={(e) => updateField('phone', e.target.value)}
              icon={<Phone className="w-4 h-4" />}
            />
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

      <div className="mt-8 flex justify-end">
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
