"use client";

import { motion } from "framer-motion";
import { Rocket, Target, TrendingUp, CheckCircle2, Clock } from "lucide-react";

export default function Roadmap() {
    const steps = [
        {
            phase: "NOW",
            title: "MVP & Pilots",
            items: ["Core KYC Membership Proofs", "B2C Credential Vault App", "Pilot with 2 Crypto Exchanges"],
            icon: <Rocket className="w-6 h-6" />,
            status: "active",
        },
        {
            phase: "Q2 2026",
            title: "Regulatory Sandbox",
            items: ["RBI Sandbox Participation", "DigiLocker Integration", "SDK v1.0 Launch"],
            icon: <Target className="w-6 h-6" />,
            status: "upcoming",
        },
        {
            phase: "Q4 2026",
            title: "Enterprise Scale",
            items: ["Bank & NBFC Rollout", "Cross-Border Compliance", "Supply Chain Audit Proofs"],
            icon: <TrendingUp className="w-6 h-6" />,
            status: "future",
        },
    ];

    return (
        <section className="py-24 bg-white border-y border-slate-100" id="roadmap">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Execution Roadmap
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        From MVP to enterprise scale in 18 months
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative rounded-3xl border-2 p-8 ${step.status === "active"
                                    ? "bg-blue-50 border-blue-200"
                                    : "bg-slate-50 border-slate-200"
                                }`}
                        >
                            {/* Status Badge */}
                            <div className="absolute -top-3 left-6">
                                <span
                                    className={`px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1 ${step.status === "active"
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-200 text-slate-600"
                                        }`}
                                >
                                    {step.status === "active" ? (
                                        <>
                                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                            In Progress
                                        </>
                                    ) : (
                                        <>
                                            <Clock className="w-3 h-3" />
                                            Coming Soon
                                        </>
                                    )}
                                </span>
                            </div>

                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${step.status === "active"
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-200 text-slate-500"
                                    }`}
                            >
                                {step.icon}
                            </div>

                            {/* Phase Label */}
                            <div
                                className={`inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-4 ${step.status === "active"
                                        ? "bg-blue-100 text-blue-700"
                                        : "bg-slate-100 text-slate-500"
                                    }`}
                            >
                                {step.phase}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">
                                {step.title}
                            </h3>

                            {/* Items */}
                            <ul className="space-y-3">
                                {step.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-slate-700"
                                    >
                                        {step.status === "active" ? (
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        ) : (
                                            <div className="w-2 h-2 rounded-full bg-slate-400 shrink-0 mt-2" />
                                        )}
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
