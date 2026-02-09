"use client";

import { motion } from "framer-motion";
import { User, Server, Shield, FileCheck, Landmark } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            title: "ISSUER",
            desc: "Bank/Govt signs a credential (e.g., Aadhaar, Bank Statement).",
            icon: <Landmark className="w-8 h-8 text-blue-600" />,
        },
        {
            title: "USER",
            desc: "Stores credential locally. Generates a Zero-Knowledge Proof.",
            icon: <User className="w-8 h-8 text-purple-600" />,
        },
        {
            title: "SATYASTACK",
            desc: "Verifies the ZK Proof without seeing the data.",
            icon: <Server className="w-8 h-8 text-slate-800" />,
        },
        {
            title: "VERIFIER",
            desc: "Receives a simple YES/NO confirmation of compliance.",
            icon: <FileCheck className="w-8 h-8 text-emerald-600" />,
        },
    ];

    return (
        <section className="py-24 bg-white border-b border-slate-100" id="how-it-works">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A seamless flow of trust, completely preserving user privacy.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-slate-100">
                                    {step.icon}
                                </div>
                                <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3">
                                    Step 0{index + 1}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="/learn/zero-knowledge"
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 hover:gap-3 transition-all group"
                        >
                            Read our non-technical guide to Zero-Knowledge Proofs
                            <User className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
