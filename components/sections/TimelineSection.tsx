'use client';

import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import contentData from '@/data/content.json';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

function TimelineStep({ step, index, isLast }: { step: TimelineStep; index: number; isLast: boolean }) {
  const stepRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepRef, { once: true, amount: 0.4 });
  const isEven = index % 2 === 0;

  // Scroll progress for this step
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start center", "center center"]
  });

  // Subtle parallax
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Dot activation - goes from gray to cyan as we approach
  const dotProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const dotOpacity = useTransform(dotProgress, [0, 1], [0.3, 1]);
  const dotScale = useTransform(dotProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div 
      ref={stepRef} 
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
    >
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -60 : 60 }}
        style={{ y: contentY }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 ${isEven ? 'lg:order-1 lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'}`}
      >
        {/* Step Number */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mb-6 relative"
        >
          <div 
            className="text-[120px] leading-none tracking-tighter relative"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(6, 152, 194, 0.3))'
            }}
          >
            {step.number}
            
            {/* Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-0 h-1"
              style={{
                width: '80px',
                left: isEven ? 'auto' : '0',
                right: isEven ? '0' : 'auto',
                originX: isEven ? 1 : 0,
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
                boxShadow: '0 0 8px rgba(21, 219, 248, 0.5)'
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white mb-4 text-lg sm:text-xl font-bold"
        >
          {step.title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`text-white/90 leading-relaxed max-w-md text-sm sm:text-base md:text-base text-left ${isEven ? 'lg:text-right lg:ml-auto lg:mr-0' : 'lg:text-left lg:ml-0 lg:mr-auto'}`}
        >
          {step.description}
        </motion.p>

        {/* Connector Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:block absolute top-1/2 w-16 h-[2px]"
          style={{
            left: isEven ? 'auto' : '100%',
            right: isEven ? '100%' : 'auto',
            originX: isEven ? 1 : 0,
            backgroundColor: 'rgba(6, 152, 194, 0.3)'
          }}
        />
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: isEven ? 60 : -60 }}
        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: isEven ? 60 : -60 }}
        style={{ y: imageY }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="relative">
          {/* Scroll-based Glow - activates with dot */}
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 rounded-2xl blur-2xl"
            style={{
              opacity: dotOpacity
            }}
          />
          
          {/* Image Container */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
            <motion.img 
              src={step.imageUrl} 
              alt={step.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            
            {/* Subtle Gradient Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 14, 26, 0.2) 0%, transparent 50%, rgba(6, 152, 194, 0.1) 100%)',
              }}
            />
            
            {/* Inner Shadow */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-xl"
              style={{
                boxShadow: 'inset 0 0 60px rgba(10, 14, 26, 0.4)'
              }}
            />
          </div>

          {/* Border Accent */}
          <div 
            className="absolute inset-0 rounded-xl pointer-events-none border border-[var(--color-primary)]/20"
          />
        </div>
      </motion.div>

      {/* Timeline Dot - Color activates on scroll */}
      <motion.div
        className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ 
          scale: dotScale,
          opacity: dotOpacity
        }}
      >
        <div className="relative">
          {/* Subtle Pulse when active */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full blur-md"
            style={{
              width: '24px',
              height: '24px',
              top: '-4px',
              left: '-4px',
              backgroundColor: useTransform(
                dotProgress,
                [0, 1],
                ['rgba(120, 120, 120, 0.3)', 'rgba(21, 219, 248, 0.3)']
              )
            }}
          />
          
          {/* Main Dot */}
          <motion.div 
            className="relative w-4 h-4 rounded-full"
            style={{
              backgroundColor: useTransform(
                dotProgress,
                [0, 1],
                ['rgba(120, 120, 120, 1)', 'rgba(21, 219, 248, 1)']
              ),
              boxShadow: useTransform(
                dotProgress,
                [0, 1],
                [
                  '0 0 8px rgba(120, 120, 120, 0.3)',
                  '0 0 20px rgba(21, 219, 248, 0.8)'
                ]
              )
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function TimelineSection() {
  const timelineContent = contentData.timeline;
  const steps: TimelineStep[] = timelineContent.steps;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.8 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const springLineHeight = useSpring(lineHeight, { stiffness: 100, damping: 30 });

  return (
    <section id="timeline" ref={containerRef} className="relative flex items-center justify-center py-12 md:py-16 lg:py-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary-light)]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container px-4 sm:px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6">
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-[var(--color-primary-light)]/50" />
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/20 bg-[var(--color-primary-light)]/5">
              <div className="w-1.5 h-1.5 bg-[var(--color-primary-light)] rounded-full animate-pulse" />
              <span className="text-[var(--color-primary-light)] text-xs sm:text-sm tracking-wider uppercase">{timelineContent.badge}</span>
            </div>
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-[var(--color-primary-light)]/50" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 tracking-tight font-bold">
              {timelineContent.title}{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
                {timelineContent.titleHighlight}
              </span>
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              {timelineContent.description}
            </p>
          </motion.div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Static Spine */}
          <div 
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(120, 120, 120, 0.3), rgba(120, 120, 120, 0.3), transparent)',
            }}
          />

          {/* Animated Progress Line */}
          <motion.div 
            className="hidden lg:block absolute left-1/2 top-0 w-[2px] -translate-x-1/2 origin-top"
            style={{
              height: springLineHeight,
              background: 'linear-gradient(to bottom, var(--color-primary), var(--color-primary-light))',
              boxShadow: '0 0 10px rgba(6, 152, 194, 0.5)',
            }}
          />

          {/* Timeline Steps */}
          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <TimelineStep 
                key={step.number} 
                step={step} 
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

