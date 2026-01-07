'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function ImpressumPage() {
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
                Impressum
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
                    According to § 5 TMG (German Telemedia Act), we are required to provide the following information about the operator of this website.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Responsible for Content</h2>
                      <p className="text-left mb-3">
                        <strong className="text-white">NQ Blade</strong>
                      </p>
                      <p className="text-left mb-3">
                        <strong className="text-white">Marlon Grahl</strong>
                      </p>
                      <p className="text-left">
                        Bei den Mühren 1<br />
                        20457 Hamburg<br />
                        Deutschland
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Contact Information</h2>
                      <p className="text-left mb-3">
                        For inquiries, please contact us through the support channels available on our website.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Liability for Content</h2>
                      <p className="text-left mb-3">
                        As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG (German Telemedia Act) and general law. However, according to §§ 8 to 10 TMG, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                      </p>
                      <p className="text-left">
                        Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. Upon becoming aware of such violations, we will remove this content immediately.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Liability for Links</h2>
                      <p className="text-left mb-3">
                        Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.
                      </p>
                      <p className="text-left">
                        However, a permanent content control of the linked pages is not reasonable without concrete evidence of a violation of the law. Upon becoming aware of violations, we will remove such links immediately.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Copyright</h2>
                      <p className="text-left mb-3">
                        The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.
                      </p>
                      <p className="text-left">
                        Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of violations, we will remove such content immediately.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 text-left">Data Protection</h2>
                      <p className="text-left">
                        The use of our website is usually possible without providing personal information. As far as personal data (such as name, address or e-mail addresses) is collected on our pages, this is always done, as far as possible, on a voluntary basis. This data will not be passed on to third parties without your express consent.
                      </p>
                      <p className="text-left mt-3">
                        We point out that data transmission over the Internet (e.g., when communicating by e-mail) can have security gaps. A complete protection of data against access by third parties is not possible.
                      </p>
                      <p className="text-left mt-3">
                        For detailed information on how we collect, use, and protect your personal data, please refer to our <a href="/privacy" className="text-[var(--color-primary-light)] hover:underline">Privacy Policy</a>.
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

