"use client";

import { motion } from "framer-motion";
import { Calendar, AlertTriangle, Clock } from "lucide-react";

export default function WhyNow() {
    const events = [
        {
            date: "Jan 8, 2026",
            title: "FIU-IND AML/CFT Guidance",
            desc: "New KYC requirements for VDA providers. Enhanced CDD, liveness detection, and explicit discouragement of anonymity tools.",
            icon: <AlertTriangle className="w-5 h-5" />,
            urgent: true,
        },
        {
            date: "Nov 13, 2025",
            title: "DPDP Rules Published",
            desc: "Digital Personal Data Protection Rules released. 18-month implementation window begins.",
            icon: <Calendar className="w-5 h-5" />,
            urgent: false,
        },
        {
            date: "May 13, 2027",
            title: "Full DPDP Enforcement",
            desc: "Final compliance deadline. No grace period. Penalties up to ₹250 crore for safeguards failure.",
            icon: <Clock className="w-5 h-5" />,
            urgent: true,
        },
    ];

    return (
        <section className="py-24 bg-white border-y border-slate-100" id="why-now">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        Why Now?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A narrow 18-month window of regulatory opportunity. First-movers will define the standard.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connector Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-red-200 -translate-y-1/2 hidden md:block rounded-full" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`bg-white p-8 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 text-center group ${event.urgent
                                        ? "border-red-200 hover:border-red-300"
                                        : "border-slate-200 hover:border-blue-200"
                                    }`}
                            >
                                <div
                                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full mb-6 ${event.urgent
                                            ? "bg-red-50 text-red-700"
                                            : "bg-blue-50 text-blue-700"
                                        }`}
                                >
                                    {event.icon}
                                    {event.date}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {event.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {event.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
