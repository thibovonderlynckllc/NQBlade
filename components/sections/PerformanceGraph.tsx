'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { motion } from 'framer-motion';

interface TradeData {
  openDate: string;
  closeDate: string;
  symbol: string;
  action: string;
  gain: number;
  pips: number;
}

interface EquityPoint {
  date: string;
  equity: number;
  balance: number;
}

export function PerformanceGraph() {
  const [equityData, setEquityData] = useState<EquityPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAndProcessData = async () => {
      try {
        const response = await fetch('/numbers.csv');
        const csvText = await response.text();
        
        // Parse CSV
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        
        // Find column indices
        const openDateIdx = headers.indexOf('Open Date');
        const closeDateIdx = headers.indexOf('Close Date');
        const gainIdx = headers.indexOf('Gain');
        const actionIdx = headers.indexOf('Action');
        
        // Process trades and calculate equity curve
        const trades: Array<{ date: Date; gain: number }> = [];
        
        // Parse all trades
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;
          
          // Handle CSV with potential commas in values (quoted fields)
          const values: string[] = [];
          let current = '';
          let inQuotes = false;
          
          for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
              values.push(current.trim());
              current = '';
            } else {
              current += char;
            }
          }
          values.push(current.trim());
          
          if (values.length < headers.length) continue;
          
          const action = values[actionIdx]?.trim();
          const openDate = values[openDateIdx]?.trim();
          const closeDate = values[closeDateIdx]?.trim();
          const gainStr = values[gainIdx]?.trim();
          
          // Skip deposits, withdrawals, and invalid entries
          if (!action || action === 'Deposit' || action === 'Withdrawal' || !openDate || !closeDate || closeDate === '') {
            continue;
          }
          
          const gain = parseFloat(gainStr || '0');
          if (isNaN(gain)) continue;
          
          // Parse date (MM/DD/YYYY HH:MM format)
          try {
            const datePart = closeDate.split(' ')[0];
            const [month, day, year] = datePart.split('/');
            const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            if (!isNaN(date.getTime())) {
              trades.push({ date, gain });
            }
          } catch (e) {
            continue;
          }
        }
        
        // Sort trades by date (oldest first)
        trades.sort((a, b) => a.date.getTime() - b.date.getTime());
        
        // Calculate cumulative equity
        let cumulativeGain = 0;
        const equityPoints: EquityPoint[] = [];
        
        // Group by date and accumulate
        const dailyMap = new Map<string, number>();
        trades.forEach(trade => {
          const dateKey = trade.date.toISOString().split('T')[0];
          if (!dailyMap.has(dateKey)) {
            dailyMap.set(dateKey, 0);
          }
          dailyMap.set(dateKey, dailyMap.get(dateKey)! + trade.gain);
        });
        
        // Build equity curve
        const sortedDates = Array.from(dailyMap.keys()).sort();
        sortedDates.forEach(dateKey => {
          cumulativeGain += dailyMap.get(dateKey)!;
          equityPoints.push({
            date: dateKey,
            equity: cumulativeGain,
            balance: cumulativeGain,
          });
        });
        
        // Normalize to start from 0 (percentage based on initial)
        if (equityPoints.length > 0) {
          const firstEquity = equityPoints[0].equity;
          const normalizedPoints = equityPoints.map(point => ({
            ...point,
            equity: point.equity - firstEquity,
            balance: point.balance - firstEquity,
          }));
          
          setEquityData(normalizedPoints);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading CSV data:', error);
        setIsLoading(false);
      }
    };
    
    loadAndProcessData();
  }, []);

  // Format date for display
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[var(--color-bg-dark)] border border-[var(--color-primary)]/30 rounded-lg p-3 shadow-lg">
          <p className="text-white/90 text-sm mb-1">{formatDate(data.date)}</p>
          <p className="text-[var(--color-primary-light)] font-semibold">
            Equity: {data.equity.toFixed(2)}%
          </p>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <section id="performance" className="relative flex items-center justify-center py-12 md:py-16 lg:py-16">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[var(--color-primary-light)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/90">Loading performance data...</p>
        </div>
      </section>
    );
  }

  if (equityData.length === 0) {
    return null;
  }

  // Calculate stats
  const maxEquity = Math.max(...equityData.map(d => d.equity));
  const minEquity = Math.min(...equityData.map(d => d.equity));
  const finalEquity = equityData[equityData.length - 1]?.equity || 0;
  const initialEquity = equityData[0]?.equity || 0;
  const totalReturn = initialEquity !== 0 
    ? ((finalEquity / Math.abs(initialEquity)) * 100).toFixed(1)
    : finalEquity.toFixed(1);

  return (
    <section id="performance" className="relative flex items-center justify-center py-12 md:py-16 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(at 50% 0%, rgba(6, 152, 194, 0.15) 0%, rgba(10, 10, 15, 0.9) 40%),
              radial-gradient(at 20% 50%, rgba(21, 219, 248, 0.2) 0%, rgba(10, 10, 15, 0.9) 50%),
              radial-gradient(at 80% 50%, rgba(6, 152, 194, 0.15) 0%, rgba(10, 10, 15, 0.9) 50%),
              linear-gradient(rgb(10, 10, 15) 0%, rgba(6, 152, 194, 0.08) 100%)
            `
          }}
        />
        {/* Grid Pattern Background - On top of gradients */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,152,194,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(6,152,194,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" style={{ zIndex: 1 }} />
      </div>

      <div className="relative z-10 container px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6">
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-[var(--color-primary-light)]/50" />
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/20 bg-[var(--color-primary-light)]/5">
              <div className="w-1.5 h-1.5 bg-[var(--color-primary-light)] rounded-full animate-pulse" />
              <span className="text-[var(--color-primary-light)] text-xs sm:text-sm tracking-wider uppercase">Live Performance</span>
            </div>
            <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-[var(--color-primary-light)]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 tracking-tight font-bold">
            Verified{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
              Trading Results
            </span>
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Real performance data from Myfxbook. Track record spanning multiple years.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[var(--color-bg-dark)]/90 to-[var(--color-bg-dark)]/70 backdrop-blur-xl border border-[var(--color-primary)]/20 rounded-xl p-4">
            <p className="text-white/90 mb-1 text-sm sm:text-base">Total Return</p>
            <p className="text-xl sm:text-2xl md:text-2xl font-bold text-[var(--color-primary-light)]">{totalReturn}%</p>
          </div>
          <div className="bg-gradient-to-br from-[var(--color-bg-dark)]/90 to-[var(--color-bg-dark)]/70 backdrop-blur-xl border border-[var(--color-primary)]/20 rounded-xl p-4">
            <p className="text-white/90 mb-1 text-sm sm:text-base">Peak Gain</p>
            <p className="text-xl sm:text-2xl md:text-2xl font-bold text-[var(--color-primary-light)]">{maxEquity >= 0 ? '+' : ''}{maxEquity.toFixed(1)}%</p>
          </div>
          <div className="bg-gradient-to-br from-[var(--color-bg-dark)]/90 to-[var(--color-bg-dark)]/70 backdrop-blur-xl border border-[var(--color-primary)]/20 rounded-xl p-4">
            <p className="text-white/90 mb-1 text-sm sm:text-base">Trades Analyzed</p>
            <p className="text-xl sm:text-2xl md:text-2xl font-bold text-[var(--color-primary-light)]">{equityData.length}</p>
          </div>
        </motion.div>

        {/* Chart Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto relative"
        >
          {/* Left glow - behind chart */}
          <div className="absolute -left-20 md:-left-32 top-1/3 -translate-y-1/2 w-64 md:w-96 h-[500px] md:h-[600px] bg-[var(--color-primary)]/15 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Right glow - behind chart */}
          <div className="absolute -right-20 md:-right-32 top-2/3 -translate-y-1/2 w-64 md:w-96 h-[500px] md:h-[600px] bg-[var(--color-primary-light)]/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative bg-gradient-to-br from-[var(--color-bg-dark)]/90 to-[var(--color-bg-dark)]/70 backdrop-blur-xl border border-[var(--color-primary)]/20 rounded-2xl p-6 md:p-8">
            <div className="h-[400px] md:h-[500px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={equityData} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
                  <defs>
                    <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#15DBF8" stopOpacity={0.4} />
                      <stop offset="50%" stopColor="#15DBF8" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#15DBF8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="rgba(6, 152, 194, 0.15)" 
                    vertical={false}
                  />
                  <XAxis 
                    dataKey="date" 
                    stroke="rgba(255, 255, 255, 0.3)"
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                    tickFormatter={formatDate}
                    interval="preserveStartEnd"
                    axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
                  />
                  <YAxis 
                    stroke="rgba(255, 255, 255, 0.3)"
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                    tickFormatter={(value) => `${value >= 0 ? '+' : ''}${value.toFixed(0)}%`}
                    axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
                  />
                  <Tooltip 
                    content={<CustomTooltip />}
                    cursor={{ stroke: 'rgba(21, 219, 248, 0.3)', strokeWidth: 1 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="equity"
                    stroke="#15DBF8"
                    strokeWidth={2.5}
                    fill="url(#equityGradient)"
                    dot={false}
                    activeDot={{ 
                      r: 5, 
                      fill: '#15DBF8',
                      stroke: '#0698C2',
                      strokeWidth: 2
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            {/* Chart Label */}
            <div className="mt-4 text-center">
              <p className="text-white/90 text-sm sm:text-base md:text-base">Equity Curve - Performance Over Time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

