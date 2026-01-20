"use client";

import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

export default function Pricing() {
    const plans = [
        {
            name: "Freemium",
            price: "₹0",
            period: "/mo",
            features: ["100 Verifications", "Basic API Access", "Community Support"],
            cta: "Start Free",
            popular: false,
        },
        {
            name: "Professional",
            price: "₹8-15",
            period: "/check",
            features: ["Volume: 100-10k/mo", "Standard SLA (99.5%)", "Compliance Dashboard"],
            cta: "Get Started",
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            features: ["Volume: 10k+/mo", "Premium SLA (99.9%)", "Dedicated Support", "Custom Integrations"],
            cta: "Contact Sales",
            popular: false,
        },
    ];

    return (
        <section className="py-24 bg-white border-y border-slate-100" id="pricing">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Transparent Pricing
                    </h2>
                    <p className="text-xl text-slate-600">
                        Choose the plan that fits your compliance scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-3xl border ${plan.popular
                                    ? "border-blue-500 shadow-2xl scale-105 z-10 bg-white"
                                    : "border-slate-200 shadow-lg bg-slate-50"
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-bold rounded-full uppercase tracking-wider shadow-md">
                                    Most Popular
                                </span>
                            )}

                            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                <span className="text-slate-500 font-medium">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                                        <Check className="w-5 h-5 text-blue-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${plan.popular
                                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
                                        : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                                    }`}
                            >
                                {plan.cta}
                                <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200 rounded-full flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    Soon
                                </span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
