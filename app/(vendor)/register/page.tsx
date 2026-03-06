import { Header } from '@/components/layout/header';
import { WizardContainer } from '@/components/onboarding/wizard-container';

export const metadata = {
  title: 'List Your Business on Cylinderly',
  description: 'Reach thousands of households looking for LPG cylinders in your area.',
};

export default function VendorRegisterPage() {
  return (
    <main
      className="min-h-screen relative flex flex-col overflow-x-hidden"
      style={{
        background: 'linear-gradient(145deg, #020617 0%, #060C18 100%)',
      }}
    >
      <Header />

      {/* Background glow effects */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(56,189,248,.05) 0%, transparent 60%)' }}
      />

      <div className="flex-1 flex items-center justify-center p-6 pt-32 pb-24 relative z-10 w-full">
        <WizardContainer />
      </div>
    </main>
  );
}
