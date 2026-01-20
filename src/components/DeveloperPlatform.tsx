"use client";

import { motion } from "framer-motion";
import { Copy, Terminal, CheckCircle2, Clock } from "lucide-react";

export default function DeveloperPlatform() {
    const features = [
        "Typescript SDK with Full Types",
        "Zero-Knowledge Proof Generation (WASM)",
        "Framework Agnostic (React, Node, Go)",
        "Comprehensive Documentation",
    ];

    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative" id="developer-platform">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-blue-900/20 blur-3xl rounded-full opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                {/* Text Content */}
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-blue-400 rounded-full text-xs font-bold mb-6 border border-slate-700">
                        <Terminal className="w-3 h-3" />
                        Developer First
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Built for Builders. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Shipped in Minutes.
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        Integrate privacy-preserving compliance without becoming a cryptographer.
                        Our SDK handles the heavy lifting of ZK circuits and proof generation.
                    </p>

                    <div className="space-y-4">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 text-slate-300"
                            >
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                {item}
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 flex gap-4">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2">
                            Read Docs
                            <span className="px-2 py-0.5 text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                Soon
                            </span>
                        </button>
                        <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-semibold transition-colors flex items-center gap-2">
                            View on GitHub
                            <span className="px-2 py-0.5 text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                Soon
                            </span>
                        </button>
                    </div>
                </div>

                {/* Code Block */}
                <div className="lg:w-1/2 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-slate-700 shadow-2xl"
                    >
                        {/* Mac Window Header */}
                        <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-black/20">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-xs text-slate-400 font-mono">verify.ts</div>
                            <Copy className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white transition-colors" />
                        </div>

                        {/* Code Content */}
                        <div className="p-6 overflow-x-auto">
                            <pre className="font-mono text-sm leading-relaxed text-blue-100">
                                <code>
                                    <span className="text-purple-400">import</span> {"{ SatyaClient }"} <span className="text-purple-400">from</span> <span className="text-green-400">"@satyastack/sdk"</span>;
                                    {"\n\n"}
                                    <span className="text-slate-500">{"// Initialize Client"}</span>
                                    {"\n"}
                                    <span className="text-purple-400">const</span> client = <span className="text-purple-400">await</span> SatyaClient.<span className="text-blue-400">init</span>({"{ API_KEY, ENV }"});
                                    {"\n\n"}
                                    <span className="text-slate-500">{"// Verify KYC without seeing data"}</span>
                                    {"\n"}
                                    <span className="text-purple-400">const</span> proof = <span className="text-purple-400">await</span> client.zk.<span className="text-blue-400">verifyV2</span>({"{"}
                                    {"\n"}
                                    {"  "}userAddress: <span className="text-green-400">"0x123...abc"</span>,
                                    {"\n"}
                                    {"  "}requirement: <span className="text-green-400">"KYC_LEVEL_3"</span>,
                                    {"\n"}
                                    {"}"});
                                    {"\n\n"}
                                    <span className="text-purple-400">if</span> (proof.isValid) {"{"}
                                    {"\n"}
                                    {"  "}console.<span className="text-blue-400">log</span>(<span className="text-green-400">"User is trusted!"</span>);
                                    {"\n"}
                                    {"}"}
                                </code>
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
