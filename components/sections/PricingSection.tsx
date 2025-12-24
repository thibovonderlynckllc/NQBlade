'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

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
  return (
    <section className="relative flex items-center justify-center py-12 md:py-16 lg:py-16 overflow-hidden">
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
      
      {/* Dotted grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          zIndex: 1,
          backgroundImage: 'radial-gradient(circle, rgba(6, 152, 194, 0.4) 2px, transparent 2px)',
          backgroundSize: '20px 20px'
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Card */}
            <div className="relative h-full rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-[var(--color-primary)]/30">
              {/* Price Badge */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-lg font-medium text-white/40 line-through uppercase">
                        {plan.originalPrice}
                      </span>
                      <span className="px-2 py-1 rounded-md bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-lg font-bold">
                        Save 30%
                      </span>
                    </div>
                    <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent mb-2">
                      {plan.price}
                    </div>
                    <div className="text-white/60 text-sm uppercase tracking-wider">
                      {plan.period}
                    </div>
                  </div>
                  {/* Decorative lines */}
                  <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-primary)]/30 hidden lg:block" />
                  <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-primary)]/30 hidden lg:block" />
                </div>
              </div>

              {/* Description */}
              <p className="text-white/90 text-base lg:text-lg text-center mb-10 leading-relaxed max-w-xl mx-auto">
                {plan.description}
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 border-t border-white/10"></div>
                <span className="text-xs text-white/50 uppercase tracking-wider">What's Included</span>
                <div className="flex-1 border-t border-white/10"></div>
              </div>

              {/* Features - 2 columns */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center border border-[var(--color-primary)]/30 group-hover/item:border-[var(--color-primary)]/50 transition-colors">
                        <Check className="w-3 h-3 text-[var(--color-primary-light)]" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-white/90 text-sm lg:text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="shiny-cta w-full !py-4 !px-8 !text-base lg:!text-lg">
                <span>Buy NQBlade Now</span>
              </button>

            </div>

          </motion.div>
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
                  href="#"
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

