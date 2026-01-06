'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
                Privacy Policy
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
                    At NQBlade, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website or use our automated trading bot services.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">What Personal Data We Gather</h2>
                      <p className="text-left mb-3">
                        During your interactions with NQBlade, we collect various categories of personal information:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li><strong className="text-white">Contact Details:</strong> Your email address and any additional information you voluntarily provide when reaching out to us or setting up an account.</li>
                        <li><strong className="text-white">Transaction Data:</strong> When completing purchases, billing information is processed through our payment provider. Complete payment card numbers are never stored on our systems.</li>
                        <li><strong className="text-white">Technical Data:</strong> Information about your device, browser, IP address, and website interaction patterns collected automatically during your visit.</li>
                        <li><strong className="text-white">Session Data:</strong> Cookies and similar technologies help us maintain your session and remember your preferences.</li>
                      </ul>
                      <p className="text-left">
                        Information collection occurs both directly (when you provide it) and automatically (through your use of our services).
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Why We Process Your Information</h2>
                      <p className="text-left mb-3">
                        Your personal data enables us to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li>Deliver, operate, and enhance our automated trading bot services</li>
                        <li>Handle payment processing and manage your subscription or lifetime access account</li>
                        <li>Respond to your inquiries and maintain communication about your account and our services</li>
                        <li>Protect our platform's security and prevent fraudulent activities</li>
                        <li>Meet legal requirements and safeguard our legitimate business interests</li>
                        <li>Detect and prevent unauthorized access or misuse of our services</li>
                      </ul>
                      <p className="text-left">
                        We never sell your personal information. Data sharing occurs only as specified in this policy or when you provide explicit consent.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Services We Integrate With</h2>
                      <p className="text-left mb-4">
                        To deliver our services effectively, we partner with established third-party providers:
                      </p>
                      
                      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6 mb-3 text-left">Stripe Payment Processing</h3>
                      <p className="text-left mb-3">
                        Payment transactions are handled by Stripe, Inc., a leading payment processor. Stripe manages your payment information according to their own privacy standards. We receive transaction confirmations but never access your complete payment card details.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">Information shared:</strong> Payment card details, billing address, email, and purchase transaction information.
                      </p>
                      <p className="text-left mb-4">
                        <strong className="text-white">Review Stripe's policy:</strong> <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-light)] hover:underline">https://stripe.com/privacy</a>
                      </p>

                      <h3 className="text-lg sm:text-xl font-semibold text-white mt-6 mb-3 text-left">Google Fonts Service</h3>
                      <p className="text-left mb-3">
                        Website typography is delivered through Google Fonts, a service operated by Google LLC. Visiting our site may result in Google collecting certain usage metrics related to font loading.
                      </p>
                      <p className="text-left mb-4">
                        <strong className="text-white">Google's privacy information:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-light)] hover:underline">https://policies.google.com/privacy</a>
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Protecting Your Data</h2>
                      <p className="text-left mb-3">
                        We employ comprehensive security protocols designed to safeguard your personal information against unauthorized access, modification, disclosure, or destruction. Our protective measures encompass:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li>End-to-end encryption for data transmission via secure HTTPS protocols</li>
                        <li>Protected storage systems for sensitive data</li>
                        <li>Ongoing security monitoring and system updates</li>
                        <li>Strict access controls restricting data visibility to authorized personnel only</li>
                      </ul>
                      <p className="text-left">
                        Despite our best efforts, no internet-based system can guarantee absolute security. While we implement robust protections, complete security cannot be assured.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">How Long We Keep Your Data</h2>
                      <p className="text-left mb-3">
                        We maintain your personal information only for the duration necessary to serve the purposes described in this policy, except when extended retention is mandated or permitted by applicable laws.
                      </p>
                      <p className="text-left mb-3">
                        Retention periods vary by data type:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li><strong className="text-white">Account Data:</strong> Retained while your account remains active and for as long as needed to provide services.</li>
                        <li><strong className="text-white">Financial Records:</strong> Payment and transaction documentation is kept for a minimum of 7 years to satisfy tax and accounting legal requirements.</li>
                        <li><strong className="text-white">Correspondence:</strong> Support communications and related records may be retained for customer service and legal compliance purposes.</li>
                      </ul>
                      <p className="text-left">
                        Once retention periods expire, we securely delete or anonymize your personal information.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Your Data Protection Rights</h2>
                      <p className="text-left mb-3">
                        Your location may grant you specific rights concerning your personal information:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li><strong className="text-white">Access Rights:</strong> Request a copy of all personal data we maintain about you.</li>
                        <li><strong className="text-white">Correction Rights:</strong> Request updates to inaccurate or incomplete information.</li>
                        <li><strong className="text-white">Deletion Rights:</strong> Request removal of your personal data, subject to legal retention requirements.</li>
                        <li><strong className="text-white">Processing Restrictions:</strong> Request limitations on how we process your information.</li>
                        <li><strong className="text-white">Data Portability:</strong> Request your data in a structured, commonly used format for transfer to another service.</li>
                        <li><strong className="text-white">Objection Rights:</strong> Object to specific types of data processing activities.</li>
                        <li><strong className="text-white">Consent Withdrawal:</strong> Revoke consent for processing based on consent at any time.</li>
                      </ul>
                      <p className="text-left mb-3">
                        To exercise these rights, contact us through the support channels listed below. We commit to responding within 30 days of receiving your request.
                      </p>
                      <p className="text-left">
                        European Economic Area residents who believe we haven't adequately addressed privacy concerns may file a complaint with their local data protection supervisory authority.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Cookie Usage and Website Tracking</h2>
                      <p className="text-left mb-3">
                        Our website utilizes cookies and related tracking mechanisms to improve functionality and user experience. Cookies are small data files placed on your device that enable us to remember settings and analyze site usage patterns.
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">Cookie categories:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li><strong className="text-white">Necessary Cookies:</strong> Essential for basic website functionality, including session management.</li>
                        <li><strong className="text-white">Preference Cookies:</strong> Store your settings and preferences to personalize your experience.</li>
                      </ul>
                      <p className="text-left">
                        Browser settings allow you to manage cookie preferences. Note that disabling certain cookies may impact website functionality.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Cross-Border Data Transfers</h2>
                      <p className="text-left mb-3">
                        Your information may be processed in countries outside your country of residence. These jurisdictions may have different data protection standards than your home country.
                      </p>
                      <p className="text-left mb-3">
                        When transferring data internationally, we implement appropriate safeguards including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li>Standard contractual clauses recognized by data protection authorities</li>
                        <li>Verification that third-party processors meet applicable data protection requirements</li>
                      </ul>
                      <p className="text-left">
                        Using our services indicates your consent to these international data transfers.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Protection of Minors</h2>
                      <p className="text-left">
                        Our services target users 18 years of age or older. We do not intentionally collect information from individuals under 18. If we discover we've inadvertently collected data from a minor, we will delete it immediately upon notification.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Policy Updates and Modifications</h2>
                      <p className="text-left mb-3">
                        This Privacy Policy may be revised periodically to reflect changes in our practices, legal requirements, or operational needs. When updates occur, we will modify the "Last Updated" date at the top of this document.
                      </p>
                      <p className="text-left">
                        We recommend reviewing this policy regularly to stay informed about our data handling practices. Continued use of our services after policy changes constitutes acceptance of the updated terms.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Getting in Touch</h2>
                      <p className="text-left mb-3">
                        For questions, concerns, or requests related to this Privacy Policy or our data practices, please contact us via the support channels available on our website.
                      </p>
                      <p className="text-left">
                        <strong className="text-white">Data Controller:</strong> NQBlade
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Legal Foundations for Data Processing</h2>
                      <p className="text-left mb-3">
                        For European Economic Area users, we process personal information under these legal bases:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-left mb-3">
                        <li><strong className="text-white">Contractual Necessity:</strong> Processing required to fulfill service agreements when you purchase our products.</li>
                        <li><strong className="text-white">Legitimate Business Interests:</strong> Processing necessary for business operations, fraud prevention, and security maintenance.</li>
                        <li><strong className="text-white">Legal Compliance:</strong> Processing required to meet legal and regulatory obligations.</li>
                        <li><strong className="text-white">Consent-Based Processing:</strong> Processing conducted with your explicit consent for specific purposes.</li>
                      </ul>
                      <p className="text-left">
                        This Privacy Policy aligns with the General Data Protection Regulation (GDPR) (EU) 2016/679 and other relevant data protection legislation.
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

