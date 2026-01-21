"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero3DScene = dynamic(() => import("./Hero3DScene"), { ssr: false });

interface HeroProps {
    onRequestAccess: () => void;
}

export default function Hero({ onRequestAccess }: HeroProps) {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <Hero3DScene />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-[1]" />

            <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center min-h-[80vh]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20 mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        DPDP Compliance Deadline: May 13, 2027
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-8 leading-[1.05] text-center"
                >
                    Prove Compliance <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                        Without Revealing Data
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed text-center"
                >
                    India's first <strong className="text-white">Zero-Knowledge Compliance Infrastructure</strong>.
                    Meet DPDP, FIU-IND, and RBI requirements with programmable privacy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={onRequestAccess}
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold text-lg hover:from-blue-500 hover:to-blue-400 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                    >
                        Request Early Access
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link
                        href="/demo"
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-3 group"
                    >
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        Try Interactive Demo
                        <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center"
                >
                    <div>
                        <div className="text-3xl md:text-4xl font-extrabold text-white">97%</div>
                        <div className="text-sm text-slate-400 mt-1">Data Exposure Reduced</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-extrabold text-white">&lt;2s</div>
                        <div className="text-sm text-slate-400 mt-1">Proof Generation</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-extrabold text-white">₹250Cr</div>
                        <div className="text-sm text-slate-400 mt-1">DPDP Penalty Avoided</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-extrabold text-white">28%</div>
                        <div className="text-sm text-slate-400 mt-1">Cost Reduction</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
