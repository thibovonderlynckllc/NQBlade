'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const withNQBlade = [
  "Fully automated trading with zero manual intervention",
  "Proven 5-year track record with 600% ROI",
  "Built-in risk management with <15% max drawdown",
  "24/7 automated execution, never miss opportunities",
  "Lifetime access with continuous updates and support"
];

const withoutNQBlade = [
  "Spend countless hours analyzing charts and markets",
  "Make emotional decisions that lead to losses",
  "Face unlimited drawdown risk without protection",
  "Miss trading opportunities while you sleep",
  "Pay ongoing fees and subscriptions for tools"
];

export function ComparisonSection() {
  return (
    <section id="comparison" className="relative flex items-center justify-center py-12 md:py-16 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(at 20% 50%, rgba(6, 152, 194, 0.15) 0%, rgba(10, 10, 15, 0.9) 50%),
              radial-gradient(at 80% 50%, rgba(21, 219, 248, 0.15) 0%, rgba(10, 10, 15, 0.9) 50%),
              linear-gradient(rgb(10, 10, 15) 0%, rgba(6, 152, 194, 0.08) 100%)
            `
          }}
        />
        {/* Red overlay from right side */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.06) 40%, rgba(239, 68, 68, 0.02) 60%, transparent 75%)'
          }}
        />
        {/* Red glow orb */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-500/8 rounded-full blur-[120px] pointer-events-none" />
      </div>


      <div className="relative z-10 container px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6">
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-[var(--color-primary-light)]/50" />
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/20 bg-[var(--color-primary-light)]/5">
              <div className="w-1.5 h-1.5 bg-[var(--color-primary-light)] rounded-full animate-pulse" />
              <span className="text-[var(--color-primary-light)] text-xs sm:text-sm tracking-wider uppercase">The Choice</span>
            </div>
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-[var(--color-primary-light)]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 tracking-tight font-bold">
            Trading{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
              With NQBlade
            </span>{" "}
            vs{" "}
            <span className="text-red-400">Trading Alone</span>
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            See the difference between automated trading and manual trading
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="max-w-7xl mx-auto relative">
          {/* Divider Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-primary-light)]/20 to-transparent -translate-x-1/2" />
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative">
            {/* Left Side - With NQBlade */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-primary)]/5 to-transparent rounded-2xl" />
              
              {/* Card */}
              <div className="relative rounded-2xl border border-[var(--color-primary-light)]/30 bg-gradient-to-br from-[var(--color-bg-dark)]/90 to-[var(--color-bg-dark)]/70 backdrop-blur-xl p-6 md:p-8 h-full">
                {/* Title */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Trading With{" "}
                    <span className="text-[var(--color-primary-light)]">NQBlade</span>
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-primary-light)] to-transparent rounded-full" />
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {withNQBlade.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl border border-[var(--color-primary-light)]/20 bg-[var(--color-primary-light)]/5 hover:bg-[var(--color-primary-light)]/10 hover:border-[var(--color-primary-light)]/30 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary-light)]/20 to-[var(--color-primary)]/20 border border-[var(--color-primary-light)]/40 flex items-center justify-center">
                          <Check className="w-5 h-5 text-[var(--color-primary-light)]" strokeWidth={3} />
                        </div>
                      </div>
                      <p className="text-white/90 text-sm sm:text-base md:text-base leading-relaxed flex-1">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Without NQBlade */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-500/5 to-red-500/2 rounded-2xl" />
              
              {/* Red glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-red-500/20 via-red-600/10 to-red-500/5 rounded-2xl blur-sm opacity-30" />
              
              {/* Card */}
              <div className="relative rounded-2xl border border-red-500/30 bg-gradient-to-br from-[var(--color-bg-dark)]/90 to-[var(--color-bg-dark)]/70 backdrop-blur-xl p-6 md:p-8 h-full shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                {/* Title */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-2">
                    Trading By{" "}
                    <span className="text-red-400">Yourself</span>
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-red-500/60 via-red-500/40 to-transparent rounded-full" />
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {withoutNQBlade.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl border border-red-500/25 bg-red-500/8 hover:bg-red-500/12 hover:border-red-500/35 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500/25 to-red-600/25 border border-red-500/40 flex items-center justify-center">
                          <X className="w-5 h-5 text-red-400" strokeWidth={3} />
                        </div>
                      </div>
                      <p className="text-white/80 text-sm sm:text-base md:text-base leading-relaxed flex-1">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

