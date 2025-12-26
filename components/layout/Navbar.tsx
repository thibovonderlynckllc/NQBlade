'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
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
                width={42}
                height={42}
                quality={100}
                className="h-6 md:h-10 w-auto cursor-pointer rounded-full"
                priority
              />
              <span className="text-xl tracking-tight hidden sm:inline font-bold">
                NQBlade
              </span>
            </Link>
          </div>


          {/* CTA Buttons */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <button className="shiny-cta !text-xs md:!text-sm !py-1.5 md:!py-2 !px-3 md:!px-4 !h-8 md:!h-auto">
              <span>Get Access</span>
            </button>
          </div>

        </div>
      </div>

    </nav>
  );
}

