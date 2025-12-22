'use client';

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [itemsPerPage, setItemsPerPage] = useState(DESKTOP_ITEMS_PER_PAGE);
  
  const totalPages = Math.ceil(testimonialImages.length / itemsPerPage);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      setItemsPerPage(width < 640 ? MOBILE_ITEMS_PER_PAGE : DESKTOP_ITEMS_PER_PAGE);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    setPageIndex((prev) => {
      const maxIndex = Math.max(totalPages - 1, 0);
      return Math.min(prev, maxIndex);
    });
  }, [totalPages]);

  const handlePrev = () => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setPageIndex((prev) => Math.min(prev + 1, Math.max(totalPages - 1, 0)));
  };

  return (
    <section className="relative flex items-center justify-center py-12 md:py-16 lg:py-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary-light)]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6">
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-[var(--color-primary-light)]/50" />
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/20 bg-[var(--color-primary-light)]/5">
              <div className="w-1.5 h-1.5 bg-[var(--color-primary-light)] rounded-full animate-pulse" />
              <span className="text-[var(--color-primary-light)] text-xs sm:text-sm tracking-wider uppercase">Real Results</span>
            </div>
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-[var(--color-primary-light)]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 md:mb-4 tracking-tight font-bold">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
              150+ Traders
            </span>
          </h2>
          
          <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            See what our community is achieving with NQBlade's automated trading system
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-md sm:max-w-4xl mx-auto">
          <div className="relative group">
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary-light)]/10 to-[var(--color-primary)]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Slider wrapper */}
            <div className="relative aspect-[9/16] sm:aspect-video rounded-2xl overflow-hidden border border-[var(--color-primary-light)]/20 bg-[var(--color-bg-dark)]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-transparent pointer-events-none z-10" />
              
              {/* Visible slides */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                  className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  style={{
                    width: `${totalPages * 100}%`,
                    transform: `translateX(-${(pageIndex * 100) / totalPages}%)`,
                  }}
                >
                  {Array.from({ length: totalPages }).map((_, page) => (
                    <div
                      key={page}
                      className="flex h-full items-center justify-center gap-4 px-4"
                      style={{ width: `${100 / totalPages}%` }}
                    >
                      {Array.from({ length: itemsPerPage }).map((_, offset) => {
                        const imgIndex = page * itemsPerPage + offset;
                        const src = testimonialImages[imgIndex];

                        if (!src) {
                          return <div key={`empty-${page}-${offset}`} className="flex-1 h-[80%]" />;
                        }

                        return (
                          <div
                            key={src}
                            className="relative h-[90%] sm:h-[80%] flex-1 rounded-xl overflow-hidden border border-[var(--color-primary-light)]/25 bg-black/80 transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.01]"
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

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setPageIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full border border-[var(--color-primary-light)]/60 transition-all ${
                      index === pageIndex ? "bg-[var(--color-primary-light)] shadow-[0_0_20px_var(--color-primary-light)] scale-105" : "bg-[var(--color-bg-dark)]/60"
                    }`}
                    aria-label={`Show testimonial group ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

