import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { UniqueSection } from '@/components/sections/UniqueSection';

export default function Home() {
  return (
    <div className="bg-[var(--color-bg-dark)] text-white overflow-x-hidden relative">
      {/* Global Grid Pattern Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(6,152,194,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,152,194,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <UniqueSection />
      </div>
    </div>
  );
}
