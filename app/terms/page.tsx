'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function TermsPage() {
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
                Terms of Service
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
                  
                  <p className="text-left mt-4">
                    By accessing or purchasing our products and services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">1. Understanding Our Service</h2>
                      <p className="text-left mb-3">
                        <strong className="text-white">Educational Purposes:</strong> Our automated trading bot (NQBlade) is intended for educational and informational purposes. While it can be used in live trading environments, it is not a guarantee of financial success and should be used with caution and proper risk management.
                      </p>
                      <p className="text-left">
                        <strong className="text-white">Service:</strong> Refers to the NQBlade automated trading algorithm, associated software, documentation, and any related services provided by NQBlade.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">2. About NQBlade</h2>
                      <p className="text-left mb-3">
                        NQBlade is an automated trading system designed for NQ Futures contracts. The system is provided for use in trading environments, whether simulated or live, at the user's discretion and risk.
                      </p>
                      <p className="text-left">
                        NQBlade does not constitute financial advice or financial services of any kind. All trading decisions and their consequences are solely the responsibility of the user.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">3. Your Agreement and Responsibilities</h2>
                      <p className="text-left mb-3">
                        By purchasing and using NQBlade, you acknowledge that:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li>The trading bot is provided for use in trading environments, and any application for live trading is solely at your discretion and risk.</li>
                        <li>NQBlade is not liable for any financial gains or losses resulting from the use of the trading bot in any trading environment, whether simulated or live.</li>
                        <li>Trading futures contracts involves substantial risk of loss and may not be suitable for all investors.</li>
                        <li>Past performance is not indicative of future results, and no guarantee of profitability is provided.</li>
                        <li>You have the financial capacity to bear the risks associated with futures trading.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">4. Purchasing and Using NQBlade</h2>
                      <p className="text-left mb-3">
                        <strong className="text-white">Payment Options:</strong> NQBlade is available for purchase as a one-time lifetime access payment or as a monthly subscription. The specific terms of your purchase will be outlined at the time of purchase.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">Delivery:</strong> Upon successful purchase, you will receive access to the trading bot and installation instructions via the email address provided during purchase.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">License Grant:</strong> You are granted a non-exclusive, non-transferable license to use NQBlade for your personal trading purposes. The license is perpetual for lifetime access purchases, or valid for the duration of your active subscription for monthly subscriptions.
                      </p>
                      <p className="text-left">
                        <strong className="text-white">Important:</strong> The trading bot is licensed, not sold. Reselling, sublicensing, redistributing, or transferring the trading bot or access credentials to others is strictly prohibited. Any violation of this provision may result in immediate termination of your license and legal action.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">5. Customer Support and Software Updates</h2>
                      <p className="text-left mb-3">
                        <strong className="text-white">Customer Support:</strong> We provide customer support for issues related to the trading bot. Support is available through our designated support channels as outlined on our website.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">Updates:</strong> Updates and improvements to the trading bot may be provided at our discretion. Lifetime access customers will receive updates as they become available. Subscription customers will receive updates during their active subscription period.
                      </p>
                      <p className="text-left">
                        We reserve the right to modify, update, or discontinue features of the trading bot at any time without prior notice.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">6. Refunds and Cancellations</h2>
                      <p className="text-left">
                        Please refer to our Refund Policy for detailed information regarding refunds, cancellations, and returns. By making a purchase, you acknowledge that you have read and understood our refund policy.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">7. Risks, Disclaimers, and Our Liability</h2>
                      <p className="text-left mb-3">
                        <strong className="text-white">Risk Disclosure:</strong> Trading NQ Futures contracts on margin carries a high level of risk. The trading bot is provided for use in trading environments and is not a guarantee of financial success. You may lose all or more than your initial investment.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">Disclaimer:</strong> NQBlade disclaims all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, reliability, accuracy, or non-infringement.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">Liability Limitation:</strong> To the maximum extent permitted by law, NQBlade and its owners, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, trading capital, or other intangible losses, arising from your use of the trading bot.
                      </p>
                      <p className="text-left">
                        NQBlade is not responsible for any losses resulting from software bugs, glitches, malfunctions, market conditions, broker issues, internet connectivity problems, or any other factors beyond our control.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">8. Ownership and Prohibited Uses</h2>
                      <p className="text-left mb-3">
                        The trading bot, all associated software, documentation, materials, and related intellectual property remain the exclusive property of NQBlade and its owners.
                      </p>
                      <p className="text-left mb-3">
                        Users are strictly prohibited from:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li>Reverse engineering, decompiling, disassembling, or attempting to access the source code of the trading bot</li>
                        <li>Copying, modifying, or creating derivative works based on the trading bot</li>
                        <li>Removing or altering any copyright, trademark, or proprietary notices</li>
                        <li>Using the trading bot or any portion thereof for any commercial purpose beyond personal trading</li>
                      </ul>
                      <p className="text-left">
                        Any violation of these intellectual property rights may result in immediate termination of your license and legal action.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">9. Keeping Information Confidential</h2>
                      <p className="text-left">
                        All information exchanged with NQBlade, including but not limited to technical details, business information, trading strategies, account information, and communications, must be kept confidential. You agree not to disclose such information to third parties except as required by law or with our express written consent.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">10. Events Beyond Our Control</h2>
                      <p className="text-left">
                        NQBlade shall not be liable for any delays or failures in performance resulting from circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, pandemics, governmental actions, internet outages, broker system failures, or any other force majeure events.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">11. Changes to These Terms</h2>
                      <p className="text-left mb-3">
                        We reserve the right to modify these terms of service at any time. Updated terms will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes your acceptance of the modified terms.
                      </p>
                      <p className="text-left">
                        It is your responsibility to review these terms periodically. The "Last Updated" date at the top of this page indicates when the terms were last revised.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">12. Applicable Law and Resolving Disputes</h2>
                      <p className="text-left mb-3">
                        These terms of service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                      </p>
                      <p className="text-left">
                        Any disputes arising from or relating to these terms or our services shall be resolved through good faith negotiation. If a resolution cannot be reached, disputes may be subject to binding arbitration or resolved in the appropriate courts, as determined by applicable law.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">13. How We Handle Your Personal Information</h2>
                      <p className="text-left mb-3">
                        <strong className="text-white">GDPR Compliance:</strong> We comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">Data Use:</strong> We collect personal information only as necessary for account setup, service delivery, customer support, and legal compliance.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">Data Rights:</strong> You have the right to access, correct, update, or delete your personal data. You may also request data portability or object to certain processing activities.
                      </p>
                      <p className="text-left">
                        <strong className="text-white">Data Security:</strong> NQBlade takes all necessary technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction. For more detailed information, please refer to our Privacy Policy.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">14. Prohibited Statements and Reviews</h2>
                      <p className="text-left mb-3">
                        You agree not to make, publish, or communicate any false, misleading, or disparaging statements, comments, or reviews about NQBlade, its products, services, owners, employees, or affiliates, whether orally, in writing, or through any media or platform.
                      </p>
                      <p className="text-left">
                        Any breach of this clause may result in immediate termination of your license and may subject you to legal action, including claims for damages. This clause does not restrict your right to provide honest feedback through legitimate channels or as required by law.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">15. Payment Disputes and Chargebacks</h2>
                      <p className="text-left mb-3">
                        By completing a purchase, you acknowledge and agree that you waive the right to initiate any payment disputes, chargebacks, or payment reversals through your payment provider, credit card company, or bank, except in cases of actual fraud or unauthorized charges.
                      </p>
                      <p className="text-left">
                        If you have concerns about your purchase, you agree to contact us directly through our support channels to resolve the matter. Any violation of this clause, including initiating a chargeback without first attempting to resolve the issue with us, may result in immediate termination of your license and may subject you to legal action, including claims for damages and recovery of costs.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">16. Termination</h2>
                      <p className="text-left mb-3">
                        We reserve the right to terminate or suspend your access to the trading bot and our services immediately, without prior notice, for any violation of these terms, including but not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li>Violation of intellectual property rights</li>
                        <li>Reselling or unauthorized distribution of the trading bot</li>
                        <li>Initiation of unauthorized payment disputes or chargebacks</li>
                        <li>Any fraudulent or illegal activity</li>
                        <li>Breach of confidentiality obligations</li>
                      </ul>
                      <p className="text-left">
                        Upon termination, your license to use the trading bot will immediately cease, and you must discontinue all use of the service. Termination does not affect any provisions that by their nature should survive, including but not limited to intellectual property rights, confidentiality, and limitation of liability.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">17. Contact</h2>
                      <p className="text-left">
                        If you have any questions about these terms of service, please contact us through our support channels available on the website.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Acceptance of Terms</h2>
                      <p className="text-left">
                        By accessing, purchasing, or using NQBlade, you acknowledge that you have read, understood, and agree to be bound by these terms of service. If you do not agree to these terms, you must not use our services and should not make a purchase.
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

