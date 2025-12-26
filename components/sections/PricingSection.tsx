'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const plan = {
  name: "NQBlade EA",
  price: "€349",
  originalPrice: "€499",
  period: "one-time",
  description: "Get lifetime access to our proven NQ Futures trading algorithm",
  features: [
    "Full Algorithm Access",
    "Unlimited Trading Accounts",
    "24/7 Automated Trading",
    "Lifetime Updates",
    "Priority Support",
    "Performance Dashboard",
    "Advanced Analytics",
    "Custom Risk Settings",
    "Installation Guide",
    "Trading Community Access",
  ]
};

export function PricingSection() {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <section id="pricing" className="relative flex items-center justify-center py-12 md:py-16 lg:py-16 overflow-hidden">
      {/* Complex radial gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(at 50% 0%, rgba(6, 152, 194, 0.25) 0%, rgba(10, 10, 15, 0.9) 40%),
            radial-gradient(at 20% 50%, rgba(21, 219, 248, 0.3) 0%, rgba(10, 10, 15, 0.9) 50%),
            radial-gradient(at 80% 50%, rgba(6, 152, 194, 0.25) 0%, rgba(10, 10, 15, 0.9) 50%),
            radial-gradient(at 35% 30%, rgba(21, 219, 248, 0.2) 0%, rgba(10, 10, 15, 0.9) 45%),
            radial-gradient(at 65% 70%, rgba(6, 152, 194, 0.28) 0%, rgba(10, 10, 15, 0.9) 48%),
            radial-gradient(at 50% 100%, rgba(21, 219, 248, 0.2) 0%, rgba(10, 10, 15, 0.9) 45%),
            radial-gradient(at 10% 80%, rgba(6, 152, 194, 0.18) 0%, rgba(10, 10, 15, 0.9) 50%),
            radial-gradient(at 90% 20%, rgba(21, 219, 248, 0.22) 0%, rgba(10, 10, 15, 0.9) 48%),
            linear-gradient(rgb(10, 10, 15) 0%, rgba(6, 152, 194, 0.12) 100%)
          `
        }}
      />
      {/* Grid Pattern Background - On top of gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,152,194,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(6,152,194,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" style={{ zIndex: 1 }} />
      

      {/* Enhanced dotted pattern that glows on hover - only around card with ripple effect */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-500"
        style={{
          zIndex: 2,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '800px',
          backgroundImage: 'radial-gradient(circle, rgba(21, 219, 248, 0.7) 2px, transparent 2px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(ellipse 800px 700px at center, black 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 70%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 800px 700px at center, black 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 70%, transparent 85%)',
          opacity: isCardHovered ? 0.5 : 0,
        }}
      />

      {/* Glow overlay that brightens dots around card on hover - ripple effect */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-500"
        style={{
          zIndex: 2,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '800px',
          background: 'radial-gradient(ellipse 800px 700px at center, rgba(21, 219, 248, 0.2) 0%, rgba(21, 219, 248, 0.15) 25%, rgba(6, 152, 194, 0.1) 45%, rgba(6, 152, 194, 0.05) 60%, rgba(21, 219, 248, 0.02) 75%, transparent 90%)',
          filter: 'blur(60px)',
          opacity: isCardHovered ? 0.7 : 0,
        }}
      />

      <div className="relative z-10 container px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6">
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-[var(--color-primary-light)]/50" />
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/20 bg-[var(--color-primary-light)]/5">
              <div className="w-1.5 h-1.5 bg-[var(--color-primary-light)] rounded-full animate-pulse" />
              <span className="text-[var(--color-primary-light)] text-xs sm:text-sm tracking-wider uppercase">Pricing</span>
            </div>
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-[var(--color-primary-light)]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 tracking-tight font-bold">
            Get{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
              NQBlade
            </span>
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            One-time purchase. Lifetime access. Start trading today.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto">
          <PricingCard plan={plan} onHoverChange={setIsCardHovered} />
        </div>

        {/* Free Trial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-12 md:mt-16"
        >
          <div className="relative rounded-2xl p-6 lg:p-8 border border-[var(--color-primary)]/30 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary-light)]/5 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 flex items-center justify-center border border-[var(--color-primary)]/30">
                  <svg className="w-5 h-5 text-[var(--color-primary-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Free Trial Available
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
                  Want to try NQBlade before purchasing? Start your free trial by registering with Vantage using our partner link and connecting the bot to your trading account.
                </p>
                <a
                  href="https://t.me/NQBladeBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-primary-light)] hover:text-[var(--color-primary)] font-medium text-sm sm:text-base transition-colors"
                >
                  Get Free Trial
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    originalPrice: string;
    period: string;
    description: string;
    features: string[];
  };
  onHoverChange?: (isHovered: boolean) => void;
}

function PricingCard({ plan, onHoverChange }: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Checkout error:', data.error || 'Unknown error');
        alert(`Error: ${data.error || 'Failed to create checkout session. Please check your Stripe configuration.'}`);
        setIsLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('No checkout URL returned', data);
        alert('Error: No checkout URL returned. Please check your Stripe configuration.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Error: Failed to connect to payment server. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative group"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        onHoverChange?.(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHoverChange?.(false);
      }}
    >
      {/* Glow effect that follows mouse */}
      {isHovered && (
        <div
          className="absolute w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, rgba(21, 219, 248, 0.25) 0%, transparent 70%)`,
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            zIndex: 0,
          }}
        />
      )}

      {/* Outer glow */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-[var(--color-primary-light)]/0 via-[var(--color-primary)]/20 to-[var(--color-primary-light)]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" style={{ zIndex: 0 }} />
      
      {/* Card Container */}
      <div className="relative h-full rounded-2xl border border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-bg-dark)]/90 via-[var(--color-bg-dark)]/70 to-[var(--color-bg-dark)]/90 backdrop-blur-xl overflow-hidden group-hover:border-[var(--color-primary-light)]/40 transition-all duration-500" style={{ zIndex: 1 }}>
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(21,219,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(21,219,248,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary-light)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Card Content */}
        <div className="relative p-8 lg:p-12">
          {/* Price Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-base sm:text-lg md:text-lg font-medium text-white/90 line-through uppercase">
                    {plan.originalPrice}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-sm sm:text-base md:text-lg font-bold group-hover:from-[var(--color-primary)]/30 group-hover:to-[var(--color-primary-light)]/30 transition-all duration-300">
                    Save 30%
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                  {plan.price}
                </div>
                <div className="text-white/90 uppercase tracking-wider group-hover:text-white/90 transition-colors duration-300">
                  {plan.period}
                </div>
              </div>  
              {/* Decorative lines */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-primary)]/30 hidden lg:block group-hover:to-[var(--color-primary-light)]/50 transition-colors duration-300" />
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-primary)]/30 hidden lg:block group-hover:to-[var(--color-primary-light)]/50 transition-colors duration-300" />
            </div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-sm sm:text-base md:text-base lg:text-lg text-center mb-10 leading-relaxed max-w-xl mx-auto group-hover:text-white transition-colors duration-300">
            {plan.description}
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 border-t border-white/10 group-hover:border-[var(--color-primary-light)]/30 transition-colors duration-300"></div>
            <span className="text-xs text-white/90 uppercase tracking-wider group-hover:text-[var(--color-primary-light)]/70 transition-colors duration-300">What's Included</span>
            <div className="flex-1 border-t border-white/10 group-hover:border-[var(--color-primary-light)]/30 transition-colors duration-300"></div>
          </div>

          {/* Features - 2 columns */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center border border-[var(--color-primary)]/30 group-hover/item:border-[var(--color-primary-light)]/60 group-hover/item:bg-[var(--color-primary-light)]/10 transition-all duration-300">
                    <Check className="w-3 h-3 text-[var(--color-primary-light)] group-hover/item:scale-110 transition-transform duration-300" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-white/90 text-sm md:text-base leading-relaxed group-hover/item:text-white transition-colors duration-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Bottom accent elements */}
          <div className="mb-10 pt-4 border-t border-[var(--color-primary)]/10 group-hover:border-[var(--color-primary-light)]/20 transition-colors duration-300">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary-light)]/40 to-transparent rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] w-0 group-hover:w-full transition-all duration-1000 ease-out" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleCheckout}
            disabled={isLoading}
            className="shiny-cta w-full !py-4 !px-8 !text-base lg:!text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isLoading ? 'Loading...' : 'Buy NQBlade Now'}</span>
          </button>

          {/* Scan line effect */}
          <div className="absolute inset-x-0 top-0 h-[200%] bg-gradient-to-b from-transparent via-[var(--color-primary-light)]/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[2000ms] ease-out" />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[var(--color-primary-light)]/0 group-hover:border-[var(--color-primary-light)]/40 transition-colors duration-500 rounded-tl-lg" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[var(--color-primary-light)]/0 group-hover:border-[var(--color-primary-light)]/40 transition-colors duration-500 rounded-br-lg" />
      </div>
    </motion.div>
  );
}

