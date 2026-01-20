"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What is privacy-preserving KYC?",
        answer: "Privacy-preserving KYC is a verification method that allows businesses to confirm customer identity and compliance status without collecting or storing personal identifiable information (PII). Using zero-knowledge proofs, users can prove they meet specific requirements (like age or residency) without revealing the underlying data.",
    },
    {
        question: "How does zero-knowledge KYC work?",
        answer: "Zero-knowledge KYC uses cryptographic proofs that allow one party to prove a statement is true without revealing any additional information. For example, a user can prove their bank account balance exceeds ₹10 Lakhs without revealing the exact amount. The proof is mathematically verifiable but reveals nothing about the underlying data.",
    },
    {
        question: "Is SatyaStack DPDP compliant?",
        answer: "Yes, SatyaStack is designed from the ground up for DPDP (Digital Personal Data Protection) Act compliance. Since we use zero-knowledge proofs, your organization never stores personal data, eliminating the risk of data breaches and the associated penalties of up to ₹250 Crore under the DPDP Act.",
    },
    {
        question: "How does SatyaStack help with FIU crypto compliance?",
        answer: "SatyaStack enables Virtual Digital Asset (VDA) service providers to meet FIU-IND AML/CFT guidelines without becoming a honeypot of user data. Our platform supports enhanced Customer Due Diligence (CDD), sanctions screening, and transaction monitoring while maintaining user privacy through zero-knowledge proofs.",
    },
    {
        question: "What is RBI compliance infrastructure?",
        answer: "RBI compliance infrastructure refers to systems that help regulated entities meet Reserve Bank of India requirements for KYC, AML (Anti-Money Laundering), and risk management. SatyaStack provides programmable compliance that integrates with existing workflows while ensuring data minimization and privacy.",
    },
    {
        question: "How does privacy-preserving AML work?",
        answer: "Privacy-preserving AML (Anti-Money Laundering) uses zero-knowledge proofs to verify that individuals are not on sanctions lists (like OFAC or UN) without revealing their actual identity. This allows businesses to maintain full AML compliance while minimizing the personal data they process and store.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Generate FAQ Schema JSON-LD
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100" id="faq">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
                        <HelpCircle className="w-4 h-4" />
                        Frequently Asked Questions
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Got Questions? We Have Answers
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Learn more about privacy-preserving KYC, zero-knowledge compliance, and how SatyaStack helps you meet regulatory requirements.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-200 transition-colors"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
