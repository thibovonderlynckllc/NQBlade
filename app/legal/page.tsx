'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function LegalPage() {
  return (
    <div className="bg-[var(--color-bg-dark)] text-white overflow-x-hidden relative min-h-screen">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,152,194,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,152,194,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" style={{ zIndex: 0 }} />
      
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary-light)]/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="relative py-34">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 tracking-tight font-bold text-left">
                Legal Disclaimer
              </h1>
              
              <div className="prose prose-invert max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-6 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed text-left"
                >
                  <p className="text-left">
                    <strong className="text-white">Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Who We Are and What We're Not</h2>
                      <p className="text-left mb-3">
                        NQBlade operates as an independent software provider. We are not a brokerage, financial institution, or proprietary trading firm. We do not offer trading accounts, manage funds, or provide financial services of any kind.
                      </p>
                      <p className="text-left">
                        Our automated trading system is a standalone software tool. Any mentions of proprietary trading firms, funded account challenges, or similar services on our website are purely informational. These references do not indicate partnerships, endorsements, or business relationships with such entities.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Understanding Trading Risks</h2>
                      <p className="text-left mb-3">
                        NQ Futures trading presents substantial financial risks that can lead to significant losses, potentially including your entire investment. This form of trading is not appropriate for everyone and requires careful consideration of your financial situation and risk tolerance.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">Critical Warning:</strong> Never risk capital that you cannot afford to lose completely. Historical performance data does not predict future outcomes. We make no claims that any trading account will replicate the results shown or discussed on this platform.
                      </p>
                      <p className="text-left">
                        Market dynamics are constantly evolving. Strategies and algorithms that performed well in the past may fail in different market conditions. There is no guarantee that past success will continue.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Educational Purpose Only</h2>
                      <p className="text-left mb-3">
                        Everything on this website—including our trading bot, algorithms, strategies, performance metrics, and educational materials—serves educational and informational purposes exclusively. Nothing here should be interpreted as financial, investment, or trading guidance.
                      </p>
                      <p className="text-left mb-3">
                        NQBlade does not employ licensed financial advisors, and we do not provide advisory services. Before engaging in futures trading, thoroughly evaluate your financial circumstances and risk capacity. We strongly advise consulting qualified financial professionals before making investment decisions.
                      </p>
                      <p className="text-left">
                        All content, whether accessed on this website or obtained through purchased materials, is intended solely for educational use and should never replace professional financial advice.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Required Regulatory Disclosure</h2>
                      <p className="text-left mb-3">
                        Futures trading on margin offers the possibility of substantial returns but equally substantial risks. Participation in futures markets requires full awareness and acceptance of these risks. Only trade with funds you can afford to lose entirely.
                      </p>
                      <p className="text-left">
                        We do not represent or guarantee that any trading account will achieve results comparable to those presented on this website. Historical performance of trading systems or methodologies cannot reliably predict future performance.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Important Disclosure About Performance Data</h2>
                      <p className="text-left mb-3">
                        <strong className="text-white">HYPOTHETICAL AND SIMULATED PERFORMANCE DATA CONTAINS INHERENT LIMITATIONS.</strong> Performance results shown in simulated or backtested scenarios differ fundamentally from actual trading records. These simulated results may not accurately reflect real-world market factors such as liquidity constraints, execution delays, or slippage.
                      </p>
                      <p className="text-left mb-3">
                        Simulated trading systems are typically developed with the advantage of hindsight, which can create unrealistic expectations. We make no representation that any account will achieve profits or losses resembling the hypothetical results displayed.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">NO GUARANTEE EXISTS THAT ANY INDIVIDUAL WILL ACHIEVE RESULTS SIMILAR TO THOSE SHOWN.</strong> In reality, actual trading results often differ substantially from hypothetical performance data. Many factors present in live trading cannot be fully replicated in simulations.
                      </p>
                      <p className="text-left mb-3">
                        Simulated trading eliminates real financial risk, which significantly impacts decision-making and emotional responses. The psychological aspects of trading—including handling losses and maintaining discipline during drawdowns—cannot be accurately simulated and can dramatically affect real trading outcomes.
                      </p>
                      <p className="text-left">
                        Numerous market variables and implementation challenges cannot be completely accounted for in hypothetical scenarios. These unaccounted factors frequently cause actual results to deviate from simulated performance.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">No Performance Guarantees</h2>
                      <p className="text-left mb-3">
                        NQBlade provides no guarantees regarding trading outcomes or profitability. Any profit projections or income statements, whether explicit or implied, should not be considered guarantees. Trading systems can and do experience losses, and your actual results may include significant losses.
                      </p>
                      <p className="text-left">
                        Final trading results depend on numerous variables including market volatility, account size, risk parameters, broker execution quality, slippage, commission structures, and other factors that we cannot control or predict.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Third-Party Trading Platforms</h2>
                      <p className="text-left mb-3">
                        If you use NQBlade with funded account challenge providers or proprietary trading firms, you must comply with their specific terms, rules, and requirements. We have no control over their policies, decisions, or operations.
                      </p>
                      <p className="text-left">
                        NQBlade maintains no affiliations, partnerships, or endorsements with any funded account challenge providers or proprietary trading firms. References to such entities are provided for informational purposes only and should not be construed as recommendations or endorsements.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Our Limited Responsibility</h2>
                      <p className="text-left mb-3">
                        <strong className="text-white">Real money trading carries real risk of loss.</strong> NQBlade and its owners accept no responsibility for financial losses resulting from use of our trading bot, including losses caused by software defects, technical malfunctions, programming errors, or system failures.
                      </p>
                      <p className="text-left mb-3">
                        We do not guarantee the accuracy, completeness, or reliability of any information, content, or materials on this website. Errors, inaccuracies, or omissions may exist, and we assume no liability for such issues.
                      </p>
                      <p className="text-left mb-3">
                        To the fullest extent allowed by law, NQBlade and its owners disclaim all liability for direct, indirect, incidental, special, consequential, or punitive damages. This includes but is not limited to lost profits, lost revenues, trading losses, data loss, or other intangible losses arising from use of our services.
                      </p>
                      <p className="text-left">
                        By using our trading bot, you agree to release and hold harmless NQBlade and its owners from all claims, damages, and liabilities of any kind.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Your Obligations and Legal Requirements</h2>
                      <p className="text-left mb-3">
                        You bear complete responsibility for all trading decisions, account management, and financial outcomes. By using our services, you confirm that you understand trading risks and possess sufficient financial resources to withstand potential losses.
                      </p>
                      <p className="text-left mb-3">
                        You are responsible for ensuring that purchasing and using our products complies with all applicable local, national, and international laws and regulations. We cannot be held liable for legal consequences you may face due to non-compliance with relevant regulations.
                      </p>
                      <p className="text-left">
                        You accept full accountability for all trading activities, outcomes, and consequences. You agree to indemnify and hold harmless NQBlade, its owners, and authorized distributors from any claims, damages, or legal actions arising from your use of our services.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Trademark Acknowledgments</h2>
                      <p className="text-left">
                        This website operates independently and is not associated with Facebook, Inc. or the Facebook platform. This site is not endorsed, sponsored, or affiliated with Facebook in any manner. FACEBOOK is a registered trademark of FACEBOOK, Inc. All other trademarks referenced on this website belong to their respective owners.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Key Points to Remember</h2>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li><strong className="text-white">High Risk:</strong> Futures trading can result in total loss of your investment capital.</li>
                        <li><strong className="text-white">No Assurances:</strong> Historical performance cannot guarantee future results. Your results may differ significantly.</li>
                        <li><strong className="text-white">Limited Liability:</strong> We are not responsible for losses from using our trading bot. You agree to hold us harmless.</li>
                        <li><strong className="text-white">Not Financial Advice:</strong> Our services and information are educational only and should not be treated as financial advice.</li>
                      </ul>
                      <p className="text-left">
                        All rights reserved. Accessing or using this website and its contents indicates your acceptance of this disclaimer in its entirety.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Questions or Concerns</h2>
                      <p className="text-left">
                        Should you have questions about this disclaimer or need clarification on any point, please reach out through our website's support channels.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

