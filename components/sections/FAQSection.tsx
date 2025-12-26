'use client';

import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "@/data/faq.json";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
  order: number;
}

const getFAQItems = (): FAQ[] => {
  return faqData.sort((a, b) => a.order - b.order);
};

export function FAQSection() {
  const faqItems = getFAQItems();

  return (
    <section id="faq" className="relative flex items-center justify-center py-12 md:py-16 lg:py-16">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary-light)]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '5rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-[1px] bg-gradient-to-r from-transparent to-[var(--color-primary-light)]/50"
              />
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/20 bg-[var(--color-primary-light)]/5">
                <div className="w-1.5 h-1.5 bg-[var(--color-primary-light)] rounded-full animate-pulse" />
                <span className="text-[var(--color-primary-light)] text-xs sm:text-sm tracking-wider uppercase">Support</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '5rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-[1px] bg-gradient-to-l from-transparent to-[var(--color-primary-light)]/50"
              />
            </motion.div>

            {/* Section Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary-light)]/10 border border-[var(--color-primary-light)]/20 mb-6 mx-auto"
            >
              <HelpCircle className="h-8 w-8 text-[var(--color-primary-light)]" />
            </motion.div>

            {/* Section Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 tracking-tight font-bold"
            >
              <span className="block">Frequently</span>
              <span className="block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
                Asked Questions
              </span>
            </motion.h2>
          </motion.div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-white/20"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium text-white hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg leading-relaxed text-white/90">
                    <ReactMarkdown
                      components={{
                        strong: ({ children }) => (
                          <strong className="text-[var(--color-primary-light)] font-semibold">
                            {children}
                          </strong>
                        ),
                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      }}
                    >
                      {faq.answer}
                    </ReactMarkdown>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

