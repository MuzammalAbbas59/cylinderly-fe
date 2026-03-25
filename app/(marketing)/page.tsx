import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MobileNav } from '@/components/layout/mobile-nav';
import { HeroSection } from '@/components/home/hero-section';
import { StatsSection } from '@/components/home/stats-section';
import { FeaturesSection } from '@/components/home/features-section';
import { VendorGrid } from '@/components/home/vendor-grid';
import { CallToActionSection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-surface overflow-x-hidden">
      <Header />
      <article className="flex-grow">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <VendorGrid />
        <CallToActionSection />
      </article>
      <Footer />
      <MobileNav />
    </main>
  );
}
