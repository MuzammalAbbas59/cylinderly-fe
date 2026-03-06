'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, MapPin, PackageOpen, CheckCircle2 } from 'lucide-react';
import { useOnboardingStore } from '@/lib/store/use-onboarding-store';
import { StepBasicInfo } from './steps/step-basic-info';
import { StepLocation } from './steps/step-location';
import { StepInventory } from './steps/step-inventory'
import { StepSuccess } from './steps/step-success';

const STEPS = [
  { id: 1, title: 'Details', icon: Store },
  { id: 2, title: 'Location', icon: MapPin },
  { id: 3, title: 'Stock & Pricing', icon: PackageOpen },
];

export function WizardContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goToNextStep = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const goToPrevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Header and Progress Indicator */}
      {currentStep < 4 && (
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            List Your Business
          </h1>
          <p className="text-slate-400 font-medium">
            Join Cylinderly and reach new customers locally.
          </p>

          {/* Stepper */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-8 px-2">
            {STEPS.map((step, index) => {
              const active = currentStep === step.id;
              const completed = currentStep > step.id;

              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${active
                        ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                        : completed
                          ? 'bg-emerald-500 text-white'
                          : 'bg-white/5 border border-white/10 text-slate-500'
                        }`}
                    >
                      {completed ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /> : step.id}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block ${active || completed ? 'text-white' : 'text-slate-500'
                        }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`w-6 sm:w-16 md:w-20 h-0.5 mx-1 sm:mx-2 rounded-full transition-colors duration-500 mb-0 sm:mb-6 ${completed ? 'bg-emerald-500' : 'bg-white/10'
                        }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Card Container for Steps */}
      <div className="relative bg-[#0A1628]/80 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[400px]">
        {/* Decorative inner glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <AnimatePresence mode="wait" custom={direction}>
          {currentStep === 1 && (
            <StepWrapper key="step1" direction={direction}>
              <StepBasicInfo onNext={goToNextStep} />
            </StepWrapper>
          )}
          {currentStep === 2 && (
            <StepWrapper key="step2" direction={direction}>
              <StepLocation onBack={goToPrevStep} onNext={goToNextStep} />
            </StepWrapper>
          )}
          {currentStep === 3 && (
            <StepWrapper key="step3" direction={direction}>
              <StepInventory onBack={goToPrevStep} onComplete={goToNextStep} />
            </StepWrapper>
          )}
          {currentStep === 4 && (
            <StepWrapper key="step4" direction={direction}>
              <StepSuccess />
            </StepWrapper>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Animation Wrapper ─────────────────────────────────────────────── */

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 30 : -30,
    opacity: 0,
  }),
};

function StepWrapper({ children, direction }: { children: React.ReactNode; direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="relative z-10 w-full h-full"
    >
      {children}
    </motion.div>
  );
}
