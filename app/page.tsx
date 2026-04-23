
import HeroSection from '@/components/hero-section';
import PremiumMaterialSection from '@/components/premium-material-section';
import ServicesSection from '@/components/services-section';
import TestimonialsSection from '@/components/testimonials-section';

import MasteringTropicalHorizonSection from '@/components/mastering-tropical-horizon-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MasteringTropicalHorizonSection />
      <ServicesSection />
      <PremiumMaterialSection />
      <TestimonialsSection />
    </main>
  );
}
