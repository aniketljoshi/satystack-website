"use client";

import { AlertTriangle, Lock, Banknote, Scale } from "lucide-react";
import { motion } from "framer-motion";

export default function TheProblem() {
    const problems = [
        {
            title: "Cost of Data Breaches",
            stat: "$2.18M",
            desc: "Average cost of a data breach in India (2024). Storing PII is now a massive liability.",
            icon: <Banknote className="w-8 h-8 text-red-500" />,
            color: "bg-red-50 border-red-100",
        },
        {
            title: "Regulatory Penalty",
            stat: "₹250 Crore",
            desc: "Maximum penalty under the DPDP Act for failing to prevent data breaches.",
            icon: <Scale className="w-8 h-8 text-orange-500" />,
            color: "bg-orange-50 border-orange-100",
        },
        {
            title: "Compliance Friction",
            stat: "48 Hours",
            desc: "Average time to verify complex entities manually, leading to 30% drop-offs.",
            icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
            color: "bg-yellow-50 border-yellow-100",
        },
        {
            title: "Privacy Paradox",
            stat: "Zero-Sum",
            desc: "Current systems force a choice: total surveillance or total anonymity. Both are failing.",
            icon: <Lock className="w-8 h-8 text-blue-500" />,
            color: "bg-blue-50 border-blue-100",
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        The <span className="text-red-600">Compliance Dilemma</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Fintechs and banks are caught in a crossfire. AML rules demand you
                        <strong> know everything</strong>. DPDP laws demand you
                        <strong> store nothing</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-3xl border ${item.color} hover:shadow-lg transition-shadow duration-300`}
                        >
                            <div className="mb-6 p-3 bg-white rounded-2xl w-fit shadow-sm border border-slate-100">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                {item.title}
                            </h3>
                            <div className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                                {item.stat}
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
