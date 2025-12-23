'use client';

import { Target, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { useRef, useState } from "react";

const features = [
  {
    icon: Target,
    title: "Institutional-Grade Strategy",
    description: "Designed using professional futures trading logic, optimized for Nasdaq (NQ) market conditions.",
    stat: "99.9%",
    statLabel: "Precision",
    color: "#0698C2"
  },
  {
    icon: Zap,
    title: "Fully Automated",
    description: "No manual trading, no emotional decisions. NQBlade runs 24/7 with zero user intervention.",
    stat: "24/7",
    statLabel: "Uptime",
    color: "#15DBF8"
  },
  {
    icon: ShieldCheck,
    title: "Built-In Risk Management",
    description: "Strict drawdown controls, position sizing, and capital protection are embedded into the system.",
    stat: "< 15%",
    statLabel: "Max DD",
    color: "#0698C2"
  },
  {
    icon: TrendingUp,
    title: "5-Year Proven Performance",
    description: "Live-tested over multiple market cycles with consistent results and verified performance data.",
    stat: "600%",
    statLabel: "ROI",
    color: "#15DBF8"
  }
];

export function UniqueSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen py-12 md:py-16 lg:py-16">
      {/* Multiple gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-[var(--color-primary)] opacity-[0.15] blur-[140px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-0 w-[350px] md:w-[550px] lg:w-[700px] h-[350px] md:h-[550px] lg:h-[700px] bg-[var(--color-primary-light)] opacity-[0.12] blur-[160px] rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-[600px] bg-[var(--color-primary)] opacity-[0.08] blur-[180px] rounded-full" />

      <div className="relative z-10 container px-6">
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-[var(--color-primary-light)] rounded-full animate-pulse" />
        <div className="absolute top-40 left-20 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-[var(--color-primary-light)] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Section Header with Advanced Styling */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 relative">
          {/* Top decorative line */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-[var(--color-primary-light)]/50" />
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/20 bg-[var(--color-primary-light)]/5">
              <div className="w-1.5 h-1.5 bg-[var(--color-primary-light)] rounded-full animate-pulse" />
              <span className="text-[var(--color-primary-light)] text-xs sm:text-sm tracking-wider uppercase">Competitive Advantage</span>
            </div>
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-[var(--color-primary-light)]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 tracking-tight relative inline-block px-4 font-bold">
            What Makes{" "}
            <span className="relative">
              <span className="text-[var(--color-primary-light)] relative z-10">NQBlade</span>
              <div className="absolute inset-0 bg-[var(--color-primary-light)] blur-2xl opacity-20" />
            </span>{" "}
            Unique
          </h2>
          
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Built for consistency, automation, and long-term performance.
            <br className="hidden sm:block" />
            <span className="text-[var(--color-primary-light)]/70">Professional-grade infrastructure trusted by 150+ active traders.</span>
          </p>

          {/* Decorative corners */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40">
            <div className="absolute top-0 left-0 w-4 h-[1px] bg-gradient-to-r from-[var(--color-primary-light)]/50 to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-4 bg-gradient-to-b from-[var(--color-primary-light)]/50 to-transparent" />
            <div className="absolute top-0 right-0 w-4 h-[1px] bg-gradient-to-l from-[var(--color-primary-light)]/50 to-transparent" />
            <div className="absolute top-0 right-0 w-[1px] h-4 bg-gradient-to-b from-[var(--color-primary-light)]/50 to-transparent" />
          </div>
        </div>

        {/* Advanced Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AdvancedFeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

interface AdvancedFeatureCardProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  color: string;
  index: number;
}

function AdvancedFeatureCard({ icon: Icon, title, description, stat, statLabel, color, index }: AdvancedFeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Glow effect that follows mouse */}
      {isHovered && (
        <div
          className="absolute w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
      )}

      {/* Outer glow */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-[var(--color-primary-light)]/0 via-[var(--color-primary)]/20 to-[var(--color-primary-light)]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Card Container */}
      <div className="relative h-full rounded-2xl border border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-bg-dark)]/90 via-[var(--color-bg-dark)]/70 to-[var(--color-bg-dark)]/90 backdrop-blur-xl overflow-hidden group-hover:border-[var(--color-primary-light)]/40 transition-all duration-500">
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(21,219,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(21,219,248,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary-light)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Card Content */}
        <div className="relative p-6 sm:p-8 h-full flex flex-col">
          {/* Icon and Stat Row */}
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            {/* Icon Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-primary-light)]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/10 rounded-xl border border-[var(--color-primary-light)]/30 flex items-center justify-center group-hover:border-[var(--color-primary-light)]/60 group-hover:from-[var(--color-primary)]/30 group-hover:to-[var(--color-primary-light)]/20 transition-all duration-300">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-primary-light)] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              
              {/* Corner accents on icon */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-[var(--color-primary-light)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-[var(--color-primary-light)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Stat Badge */}
            <div className="text-right">
              <div className="text-xl sm:text-2xl text-[var(--color-primary-light)] mb-0.5 group-hover:scale-110 transition-transform duration-300">
                {stat}
              </div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{statLabel}</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl text-white mb-2 sm:mb-3 group-hover:text-[var(--color-primary-light)] transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-white/90 leading-relaxed text-xs sm:text-sm group-hover:text-white/90 transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Bottom accent elements */}
          <div className="mt-6 pt-4 border-t border-[var(--color-primary)]/10 group-hover:border-[var(--color-primary-light)]/20 transition-colors duration-300">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary-light)]/40 to-transparent rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] w-0 group-hover:w-full transition-all duration-1000 ease-out" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Scan line effect */}
          <div className="absolute inset-x-0 top-0 h-[200%] bg-gradient-to-b from-transparent via-[var(--color-primary-light)]/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[2000ms] ease-out" />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[var(--color-primary-light)]/0 group-hover:border-[var(--color-primary-light)]/40 transition-colors duration-500 rounded-tl-lg" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[var(--color-primary-light)]/0 group-hover:border-[var(--color-primary-light)]/40 transition-colors duration-500 rounded-br-lg" />
      </div>
    </div>
  );
}


