'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SuccessPage() {
  return (
    <section className="relative flex items-center justify-center min-h-screen py-12 md:py-16 lg:py-16">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary-light)]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="flex items-center justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 border-2 border-[var(--color-primary-light)]/50 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-[var(--color-primary-light)]" strokeWidth={2} />
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 tracking-tight font-bold">
            Payment Successful!
          </h1>
          
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto">
            Thank you for your purchase! Your order has been confirmed and you now have lifetime access to NQBlade.
          </p>

          <div className="space-y-4">
            <p className="text-white/80 text-sm sm:text-base">
              We appreciate your business! If you have any questions, please contact us through our support channels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                href="/"
                className="shiny-cta !py-3 !px-6 !text-sm sm:!text-base"
              >
                <span>Return Home</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

