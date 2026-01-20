"use client";

import { motion } from "framer-motion";
import { Landmark, Smartphone, Coins, Globe, CreditCard } from "lucide-react";

export default function TargetAudience() {
    const audiences = [
        {
            title: "Banks & NBFCs",
            desc: "Verify assets and income without handling sensitive PDF bank statements.",
            icon: <Landmark className="w-6 h-6 text-blue-600" />,
        },
        {
            title: "Fintechs",
            desc: "Reduce onboarding drop-offs by 40% with instant reusable KYC.",
            icon: <Smartphone className="w-6 h-6 text-purple-600" />,
        },
        {
            title: "Crypto Exchanges",
            desc: "Comply with FIU-IND PMLA rules without managing a 'honeypot' of user data.",
            icon: <Coins className="w-6 h-6 text-orange-600" />,
        },
        {
            title: "Remittance",
            desc: "Instant cross-border sanctions screening that respects user privacy.",
            icon: <Globe className="w-6 h-6 text-emerald-600" />,
        },
        {
            title: "Payment Gateways",
            desc: "Merchant risk assessment without intrusive data collection.",
            icon: <CreditCard className="w-6 h-6 text-pink-600" />,
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-16">
                    Who Is This For?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm pl-[3.25rem]">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
