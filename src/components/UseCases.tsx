"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function UseCases() {
    const cases = [
        {
            title: "Proof-of-KYC Membership",
            desc: "Prove you have a valid KYC from a regulated bank without sharing the ID.",
            tags: ["Onboarding", "Reusable"],
        },
        {
            title: "Sanctions Screening Proof",
            desc: "Prove you are NOT on a sanctions list (OFAC/UN) without revealing your name.",
            tags: ["Compliance", "Privacy"],
        },
        {
            title: "Solvency Proof",
            desc: "Prove you have > ₹10 Lakhs in assets without revealing your exact balance.",
            tags: ["Lending", "DeFi"],
        },
        {
            title: "Accredited Investor Proof",
            desc: "Prove eligibility for high-risk investments without sharing tax returns.",
            tags: ["Investments", "Access"],
        },
    ];

    return (
        <section className="py-24 bg-white border-y border-slate-100" id="use-cases">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-16">
                    Key Use Cases
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-wrap gap-2 mb-4">
                                {useCase.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-500"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                {useCase.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {useCase.desc}
                            </p>
                            <div className="mt-6 flex items-center text-amber-600 font-semibold text-sm gap-2">
                                <Clock className="w-4 h-4" />
                                Coming Soon in SDK v1.0
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
