"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Database, Zap } from "lucide-react";

export default function Explanation() {
    const features = [
        {
            title: "Compliant Privacy",
            desc: "Prove you know the customer without seeing their ID. Mathematical guarantees for regulators.",
            icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
            bg: "bg-emerald-50",
        },
        {
            title: "Instant Auditability",
            desc: "Every verification generates an immutable ZK-proof. Audit trails are cryptographic, not manual.",
            icon: <Check className="w-6 h-6 text-blue-600" />,
            bg: "bg-blue-50",
        },
        {
            title: "Zero PII Storage",
            desc: "Never store Aadhaar or PAN data. Eliminate the risk of data leaks and DPDP fines.",
            icon: <Database className="w-6 h-6 text-purple-600" />,
            bg: "bg-purple-50",
        },
        {
            title: "SDK First",
            desc: "Integrate in minutes with TypeScript SDKs. Framework agnostic and developer friendly.",
            icon: <Zap className="w-6 h-6 text-amber-600" />,
            bg: "bg-amber-50",
        },
    ];

    return (
        <section className="py-32 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                        Introducing SatyaStack
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        The Privacy Layer for India
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        SatyaStack is an infrastructure protocol that allows entities to verify
                        compliance attributes (KYC, Sanctions, Solvency) using <strong>Zero-Knowledge Proofs</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 ${feat.bg} rounded-2xl flex items-center justify-center mb-6`}>
                                {feat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
