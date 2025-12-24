import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingChatButton } from '@/components/layout/FloatingChatButton';
import { Hero } from '@/components/sections/Hero';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { UniqueSection } from '@/components/sections/UniqueSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <div className="bg-[var(--color-bg-dark)] text-white overflow-x-hidden relative">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TestimonialsSection />
        <UniqueSection />
        <TimelineSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </div>
      
      <FloatingChatButton />
    </div>
  );
}
