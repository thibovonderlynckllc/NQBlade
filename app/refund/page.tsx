'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function RefundPage() {
  return (
    <div className="bg-[var(--color-bg-dark)] text-white overflow-x-hidden relative min-h-screen">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,152,194,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,152,194,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" style={{ zIndex: 0 }} />
      
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary-light)]/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="relative pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 tracking-tight font-bold text-left">
                Refund Policy
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
                    This Refund Policy outlines our policy regarding refunds, cancellations, and returns for NQBlade products and services.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">No Refund Policy</h2>
                      <p className="text-left mb-3">
                        All sales of NQBlade products and services are final. We do not offer refunds, returns, or cancellations for any purchases, including but not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li>Lifetime access purchases</li>
                        <li>Monthly subscription payments</li>
                        <li>Any other products or services offered by NQBlade</li>
                      </ul>
                      <p className="text-left">
                        By completing a purchase, you acknowledge that you have read, understood, and agree to this no-refund policy.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Why We Don't Offer Refunds</h2>
                      <p className="text-left mb-3">
                        NQBlade is a digital product that provides immediate access to our automated trading algorithm upon purchase. Due to the nature of digital products and the immediate access granted, we cannot process refunds.
                      </p>
                      <p className="text-left">
                        Additionally, as stated in our Terms of Service and Legal Disclaimer, our trading bot is provided for educational purposes and we cannot guarantee trading results. Refunds are not available based on trading performance or outcomes.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Subscription Cancellations</h2>
                      <p className="text-left mb-3">
                        If you have purchased a monthly subscription, you may cancel your subscription at any time to prevent future charges. However, cancellation does not entitle you to a refund for any payments already made, including the current billing period.
                      </p>
                      <p className="text-left">
                        Once cancelled, your subscription will remain active until the end of the current billing period, after which you will lose access to the service. No refunds will be issued for the remaining days of your subscription period.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Technical Issues</h2>
                      <p className="text-left mb-3">
                        If you experience technical difficulties or issues with the trading bot, please contact our support team. We are committed to resolving technical problems and will work with you to ensure the product functions as intended.
                      </p>
                      <p className="text-left">
                        However, technical issues do not qualify for refunds. We will provide support and assistance to resolve any problems you encounter.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Payment Disputes</h2>
                      <p className="text-left mb-3">
                        As stated in our Terms of Service, by making a purchase you agree not to initiate payment disputes, chargebacks, or payment reversals through your payment provider, except in cases of actual fraud or unauthorized charges.
                      </p>
                      <p className="text-left">
                        If you have concerns about your purchase, please contact us directly through our support channels. We are committed to addressing legitimate concerns and resolving issues amicably.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Exceptions</h2>
                      <p className="text-left">
                        The only potential exception to this policy would be in cases of proven fraud or unauthorized use of your payment method. In such cases, please contact us immediately and we will investigate the matter. Any refunds in these exceptional circumstances are at our sole discretion.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Contact Us</h2>
                      <p className="text-left">
                        If you have questions about this refund policy or need assistance with your purchase, please contact us through our support channels available on the website.
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

