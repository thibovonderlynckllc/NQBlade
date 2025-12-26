'use client';

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const DESKTOP_ITEMS_PER_PAGE = 4;
const MOBILE_ITEMS_PER_PAGE = 1;

const testimonialImages = [
  "/testimonials/1.PNG",
  "/testimonials/2.PNG",
  "/testimonials/3.PNG",
  "/testimonials/4.PNG",
  "/testimonials/5.PNG",
  "/testimonials/6.PNG",
  "/testimonials/7.PNG",
];

export function TestimonialsSection() {
  const [pageIndex, setPageIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(MOBILE_ITEMS_PER_PAGE);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const newItemsPerPage = window.innerWidth >= 768 ? DESKTOP_ITEMS_PER_PAGE : MOBILE_ITEMS_PER_PAGE;
      setItemsPerPage(newItemsPerPage);
      // Reset to first page when switching between mobile/desktop
      setPageIndex(0);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonialImages.length / itemsPerPage);

  const handlePrev = () => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setPageIndex((prev) => Math.min(prev + 1, Math.max(totalPages - 1, 0)));
  };

  return (
    <section className="relative flex items-center justify-center py-12 md:py-16 lg:py-16">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary-light)]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '5rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[1px] bg-gradient-to-r from-transparent to-[var(--color-primary-light)]/50"
            />
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/20 bg-[var(--color-primary-light)]/5">
              <div className="w-1.5 h-1.5 bg-[var(--color-primary-light)] rounded-full animate-pulse" />
              <span className="text-[var(--color-primary-light)] text-xs sm:text-sm tracking-wider uppercase">Real Results</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '5rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[1px] bg-gradient-to-l from-transparent to-[var(--color-primary-light)]/50"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 tracking-tight font-bold"
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
              150+ Traders
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            See what our community is achieving with NQBlade's automated trading system
          </motion.p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="relative group">
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary-light)]/10 to-[var(--color-primary)]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Slider wrapper */}
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-primary-light)]/20 bg-[var(--color-bg-dark)] p-4 sm:p-6">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-transparent pointer-events-none z-10" />
              
              {/* Images Slider */}
              <div className="relative z-0 overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  style={{
                    width: `${totalPages * 100}%`,
                    transform: `translateX(-${(pageIndex * 100) / totalPages}%)`,
                  }}
                >
                  {Array.from({ length: totalPages }).map((_, page) => (
                    <div
                      key={page}
                      className="flex items-center justify-center gap-0 md:gap-4"
                      style={{ width: `${100 / totalPages}%` }}
                    >
                      {Array.from({ length: itemsPerPage }).map((_, offset) => {
                        const imgIndex = page * itemsPerPage + offset;
                        const src = testimonialImages[imgIndex];

                        if (!src) {
                          return <div key={`empty-${page}-${offset}`} className="flex-1 aspect-[9/16]" />;
                        }

                        return (
                          <div
                            key={src}
                            className="relative flex-1 aspect-[9/16] rounded-xl overflow-hidden border border-[var(--color-primary-light)]/25 bg-black/80 max-w-full md:max-w-none"
                          >
                            <img
                              src={src}
                              alt={`Customer testimonial ${imgIndex + 1}`}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={pageIndex === 0}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg-dark)]/70 text-white shadow-lg border border-[var(--color-primary-light)]/20 hover:bg-[var(--color-bg-dark)] hover:border-[var(--color-primary-light)]/40 transition-all ${
                  pageIndex === 0 ? "opacity-40 cursor-not-allowed pointer-events-none" : ""
                }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={pageIndex === totalPages - 1}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg-dark)]/70 text-white shadow-lg border border-[var(--color-primary-light)]/20 hover:bg-[var(--color-bg-dark)] hover:border-[var(--color-primary-light)]/40 transition-all ${
                  pageIndex === totalPages - 1 ? "opacity-40 cursor-not-allowed pointer-events-none" : ""
                }`}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

