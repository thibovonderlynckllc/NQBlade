import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingChatButton } from '@/components/layout/FloatingChatButton';
import { Hero } from '@/components/sections/Hero';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { UniqueSection } from '@/components/sections/UniqueSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { PerformanceGraph } from '@/components/sections/PerformanceGraph';
import { FAQSection } from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <div className="bg-[var(--color-bg-dark)] text-white overflow-x-hidden relative">
      {/* Grid Pattern Background - Applied globally to all sections */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,152,194,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,152,194,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" style={{ zIndex: 0 }} />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TestimonialsSection />
        <ComparisonSection />
        <UniqueSection />
        <TimelineSection />
        <PricingSection />
        <PerformanceGraph />
        <FAQSection />
        <Footer />
      </div>
      
      <FloatingChatButton />
    </div>
  );
}
