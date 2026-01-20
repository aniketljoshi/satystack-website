"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Comparison() {
    const features = [
        { name: "Privacy", satya: "Zero-Knowledge", trad: "PII Stored" },
        { name: "Compliance", satya: "Programmable", trad: "Manual" },
        { name: "Cost", satya: "Low (Reusable)", trad: "High (Recurring)" },
        { name: "Auditability", satya: "Instant & Immutable", trad: "Difficult" },
        { name: "Developer Exp.", satya: "Modern SDKs", trad: "Legacy APIs" },
    ];

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100" id="comparison">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-16">
                    The SatyaStack Advantage
                </h2>

                <div className="max-w-4xl mx-auto">
                    {/* Header Row */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="p-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                            Feature
                        </div>
                        <div className="p-4 text-sm font-semibold text-slate-500 uppercase tracking-wider text-center">
                            Traditional KYC
                        </div>
                        <div className="p-4 text-sm font-bold text-blue-600 uppercase tracking-wider text-center bg-blue-50 rounded-t-2xl">
                            SatyaStack
                        </div>
                    </div>

                    {/* Data Rows */}
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="grid grid-cols-3 gap-4 bg-white rounded-xl border border-slate-200 mb-3 hover:shadow-md transition-shadow"
                        >
                            <div className="p-5 font-semibold text-slate-900 flex items-center">
                                {item.name}
                            </div>
                            <div className="p-5 text-slate-500 flex items-center justify-center gap-2 border-x border-slate-100">
                                <X className="w-5 h-5 text-red-500 shrink-0" />
                                <span>{item.trad}</span>
                            </div>
                            <div className="p-5 font-bold text-blue-700 flex items-center justify-center gap-2 bg-blue-50/50">
                                <Check className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>{item.satya}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
