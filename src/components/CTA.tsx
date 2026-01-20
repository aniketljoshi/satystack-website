"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

interface CTAProps {
    onRequestAccess: () => void;
}

export default function CTA({ onRequestAccess }: CTAProps) {
    return (
        <section className="py-32 bg-slate-900 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-blue-600/30 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[200%] bg-indigo-600/30 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight"
                >
                    Build Compliant Privacy <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                        Into Your Platform
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={onRequestAccess}
                        className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group"
                    >
                        Request Early Access
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white rounded-xl font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-3">
                        Join RBI Sandbox Pilot
                        <span className="px-2 py-0.5 text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Soon
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
