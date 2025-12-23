'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 animate-slide-down">
      <div className="container mx-auto rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-3xl px-2 md:px-6 py-2 md:py-4 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                alt="NQBlade Logo"
                width={32}
                height={32}
                quality={100}
                className="h-6 md:h-8 w-auto cursor-pointer rounded-lg"
                priority
              />
              <span className="text-xl tracking-tight hidden sm:inline font-bold">
                NQBlade
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-white/90 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#performance" className="text-white/90 hover:text-white transition-colors">
              Performance
            </Link>
            <Link href="#how-it-works" className="text-white/90 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-white/90 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-white/90 hover:text-white transition-colors">
              FAQ
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <button className="shiny-cta !text-xs md:!text-sm !py-1.5 md:!py-2 !px-3 md:!px-4 !h-8 md:!h-auto">
              <span>Get Access</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/90 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 rounded-xl border border-white/10 backdrop-blur-3xl px-4 py-4 space-y-3 shadow-lg">
          <Link href="#home" className="block py-2 text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="#performance" className="block py-2 text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Performance
          </Link>
          <Link href="#how-it-works" className="block py-2 text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
            How It Works
          </Link>
          <Link href="#pricing" className="block py-2 text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="#faq" className="block py-2 text-white/90 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </Link>
          <div className="pt-4">
            <button className="w-full shiny-cta !text-sm !py-2 !px-4">
              <span>Get Access</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

