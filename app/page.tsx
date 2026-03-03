import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { StatsSection } from '@/components/home/stats-section';
import { VendorList } from '@/components/home/vendor-list';
import { HowItWorksSection } from '@/components/home/how-it-works-section';
import { FeaturesSection } from '@/components/home/features-section';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <VendorList />
      <HowItWorksSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
