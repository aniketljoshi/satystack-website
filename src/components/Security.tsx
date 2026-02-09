"use client";

import { motion } from "framer-motion";
import { Shield, Fingerprint, EyeOff, FileKey } from "lucide-react";

export default function Security() {
    const items = [
        {
            title: "Zero PII Transmission",
            desc: "User data never leaves their device. Proofs are generated locally in WASM.",
            icon: <EyeOff className="w-10 h-10 text-blue-600" />,
        },
        {
            title: "Unlinkability",
            desc: "Prevent correlation attacks. Each proof is unique and cannot be tracked back.",
            icon: <Fingerprint className="w-10 h-10 text-emerald-600" />,
        },
        {
            title: "Military-Grade Encryption",
            desc: "All proofs use zk-SNARKs (Groth16) for quantum-resistant security.",
            icon: <Shield className="w-10 h-10 text-purple-600" />,
        },
        {
            title: "Immutable Logs",
            desc: "Verification results are hashed on-chain (or verifiable database) for audit.",
            icon: <FileKey className="w-10 h-10 text-orange-600" />,
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Security by Principle
                    </h2>
                    We don&apos;t just secure data. We ensure you never have to touch it.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
