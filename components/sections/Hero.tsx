'use client';

import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

function useCounter(end: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Ease out cubic for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = easeOut * end;
        
        // Check if we need decimal places
        if (end % 1 !== 0) {
          setCount(parseFloat(currentCount.toFixed(1)));
        } else {
          setCount(Math.floor(currentCount));
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, duration, delay]);

  return count;
}

export function Hero() {
  const totalReturn = useCounter(600, 2000, 0);
  const avgMonthlyLow = useCounter(9, 1800, 0);
  const avgMonthlyHigh = useCounter(12, 1800, 0);
  const activeUsers = useCounter(150, 2000, 0);
  const uptime = useCounter(99.9, 2000, 0);

  return (
    <section className="relative flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Main */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[var(--color-primary)]/30 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[var(--color-primary-light)]/25 rounded-full blur-[128px]"></div>
        
        {/* Additional Gradient Orbs */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary-light)]/18 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[var(--color-primary)]/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--color-primary-light)]/15 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/15 rounded-full blur-[110px]"></div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[var(--color-primary-light)]/12 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] bg-[var(--color-primary)]/15 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Animated Lines - Horizontal */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-light)]/40 to-transparent"></div>
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent"></div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-light)]/25 to-transparent"></div>
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent"></div>
        
        {/* Animated Lines - Vertical */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-primary-light)]/20 to-transparent"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)]/15 to-transparent"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-primary-light)]/10 to-transparent"></div>
        
        {/* Diagonal Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[2px] h-[200px] bg-gradient-to-b from-transparent via-[var(--color-primary-light)]/20 to-transparent rotate-45 blur-[1px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[2px] h-[200px] bg-gradient-to-t from-transparent via-[var(--color-primary)]/20 to-transparent -rotate-45 blur-[1px]"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-[var(--color-primary-light)]/10 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border border-[var(--color-primary)]/8 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-[var(--color-primary-light)]/20 rotate-45"></div>
        
        {/* Particle Dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[var(--color-primary-light)]/40 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[var(--color-primary)]/50 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-[var(--color-primary-light)]/15 rounded-full blur-[2px] animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-[var(--color-primary)]/60 rounded-full blur-[1px]"></div>
        <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-[var(--color-primary-light)]/40 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Radial Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'radial-gradient(circle at top left, var(--color-primary) 0%, transparent 50%)', opacity: 0.08 }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" style={{ background: 'radial-gradient(circle at center, var(--color-primary-light) 0%, transparent 60%)', opacity: 0.06 }}></div>
        
        {/* Animated Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[var(--color-primary-light)]/10 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[var(--color-primary)]/15 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
      </div>

      {/* Content */}
      <div className="relative container px-4 sm:px-6 pt-20 pb-12 md:pb-16 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-light)]/10 border border-[var(--color-primary-light)]/20 rounded-full animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-2 h-2 bg-[var(--color-primary-light)] rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-[var(--color-primary-light)]">Institutional-Grade Trading Bot</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl animate-fade-up font-bold" style={{ animationDelay: '0.2s' }}>
              This bot made{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)] bg-clip-text text-transparent animate-gradient bg-[size:200%_auto]">
                600% profit
              </span>{' '}
              over the past 5 years!
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-lg lg:text-xl text-white/90 max-w-xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Fully automated performance, averaging{' '}
              <span className="text-[var(--color-primary-light)] font-bold">{avgMonthlyLow}–{avgMonthlyHigh}%</span> per month for{' '}
              <span className="text-[var(--color-primary-light)] font-bold">{activeUsers}+</span> active users.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <button className="shiny-cta">
                <span>Get Lifetime Access</span>
              </button>
              <button className="shiny-cta-white">
                <span>Join Community</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-5 h-5 text-[var(--color-primary-light)]" />
                <span>Risk Managed</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Zap className="w-5 h-5 text-[var(--color-primary-light)]" />
                <span>Fully Automated</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <TrendingUp className="w-5 h-5 text-[var(--color-primary-light)]" />
                <span>5-Year Track Record</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Trading Graph Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Performance Card */}
              <div className="relative w-full max-w-lg animate-fade-up" style={{ animationDelay: '0.3s' }}>
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-[var(--color-bg-dark)]/90 to-[var(--color-bg-dark)]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 rounded-2xl blur-xl"></div>
                  
                  <div className="relative space-y-6">
                    {/* Stats Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/90">Total Return</p>
                        <p className="text-3xl sm:text-4xl md:text-4xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
                          +{totalReturn}%
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 rounded-xl flex items-center justify-center border border-[var(--color-primary-light)]/30">
                        <TrendingUp className="w-6 h-6 text-[var(--color-primary-light)]" />
                      </div>
                    </div>

                    {/* Performance Chart SVG */}
                    <div className="relative h-48 bg-[var(--color-bg-dark)]/50 rounded-xl p-4 border border-white/5">
                      <svg viewBox="0 0 400 150" className="w-full h-full">
                        {/* Grid Lines */}
                        <line x1="0" y1="0" x2="400" y2="0" stroke="#ffffff" strokeOpacity="0.05" />
                        <line x1="0" y1="50" x2="400" y2="50" stroke="#ffffff" strokeOpacity="0.05" />
                        <line x1="0" y1="100" x2="400" y2="100" stroke="#ffffff" strokeOpacity="0.05" />
                        <line x1="0" y1="150" x2="400" y2="150" stroke="#ffffff" strokeOpacity="0.05" />
                        
                        {/* Performance Line */}
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--color-primary)" />
                            <stop offset="100%" stopColor="var(--color-primary-light)" />
                          </linearGradient>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="var(--color-primary-light)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="var(--color-primary-light)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Area under curve */}
                        <path
                          d="M0,140 L40,130 L80,125 L120,115 L160,105 L200,90 L240,75 L280,55 L320,35 L360,15 L400,10 L400,150 L0,150 Z"
                          fill="url(#areaGradient)"
                          className="animate-fade-in"
                        />
                        
                        {/* Main line */}
                        <path
                          d="M0,140 L40,130 L80,125 L120,115 L160,105 L200,90 L240,75 L280,55 L320,35 L360,15 L400,10"
                          stroke="url(#lineGradient)"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          className="animate-draw-line"
                        />
                        
                        {/* Glow effect */}
                        <path
                          d="M0,140 L40,130 L80,125 L120,115 L160,105 L200,90 L240,75 L280,55 L320,35 L360,15 L400,10"
                          stroke="url(#lineGradient)"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          opacity="0.2"
                          filter="blur(4px)"
                          className="animate-draw-line"
                        />
                      </svg>
                      
                      {/* Time labels */}
                      <div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs text-white/90">
                        <span>2020</span>
                        <span>2022</span>
                        <span>2025</span>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[var(--color-bg-dark)]/50 rounded-lg p-3 border border-white/5">
                        <p className="text-xs text-white/90 mb-1">Avg Monthly</p>
                        <p className="text-base sm:text-lg md:text-lg text-[var(--color-primary-light)]">{avgMonthlyLow}–{avgMonthlyHigh}%</p>
                      </div>
                      <div className="bg-[var(--color-bg-dark)]/50 rounded-lg p-3 border border-white/5">
                        <p className="text-xs text-white/90 mb-1">Active Users</p>
                        <p className="text-base sm:text-lg md:text-lg text-[var(--color-primary-light)]">{activeUsers}+</p>
                      </div>
                      <div className="bg-[var(--color-bg-dark)]/50 rounded-lg p-3 border border-white/5">
                        <p className="text-xs text-white/90 mb-1">Uptime</p>
                        <p className="text-base sm:text-lg md:text-lg text-[var(--color-primary-light)]">{uptime}%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Indicators */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] px-4 py-2 rounded-full shadow-lg shadow-[var(--color-primary-light)]/50 animate-pulse">
                  <span className="text-sm">Live Trading</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-[var(--color-bg-dark)] border border-[var(--color-primary-light)]/30 px-4 py-2 rounded-full backdrop-blur-xl">
                  <span className="text-sm text-white/90">NQ Futures</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 border border-[var(--color-primary-light)]/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 border border-[var(--color-primary)]/20 rounded-lg rotate-45 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

