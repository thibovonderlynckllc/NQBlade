'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg-dark)]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,152,194,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,152,194,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Background gradient orbs */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary-light)]/5 rounded-full blur-[120px]" />

      <div className="z-10 container px-4 sm:px-6 py-12 md:py-16 mx-auto">
        {/* Brand Section - Centered */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="/logo.webp"
              alt="NQBlade Logo"
              width={48}
              height={48}
              quality={100}
              className="h-10 md:h-12 w-auto rounded-full"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
                NQBlade
              </span>
            </h3>
          </div>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            The best automated trading bot for NQ Futures. Institutional-grade strategy with 5+ years of proven performance.
          </p>
        </div>

          {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mb-8 max-w-4xl mx-auto text-center">

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-white/60 hover:text-[var(--color-primary-light)] text-sm transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/60 hover:text-[var(--color-primary-light)] text-sm transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/60 hover:text-[var(--color-primary-light)] text-sm transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/60 hover:text-[var(--color-primary-light)] text-sm transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="http://t.me/Marlon_NQBlade" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[var(--color-primary-light)] text-sm transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#documentation" className="text-white/60 hover:text-[var(--color-primary-light)] text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#community" className="text-white/60 hover:text-[var(--color-primary-light)] text-sm transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-white/60 hover:text-[var(--color-primary-light)] text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white/60 hover:text-[var(--color-primary-light)] text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#refund" className="text-white/60 hover:text-[var(--color-primary-light)] text-sm transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Full Width */}
      <div className="border-t border-white/10">
        <div className="container px-4 sm:px-6 mx-auto py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <p className="text-white/40 text-xs sm:text-sm">
              © {currentYear} NQBlade. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs sm:text-sm">
              <span>Made with</span>
              <span className="text-[var(--color-primary-light)]">❤️</span>
              <span>for traders</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

