"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Smartphone, FileCheck, ArrowRight, Server, CheckCircle2, XCircle, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function LearnZKP() {
    return (
        <div className="min-h-screen bg-[#FDFDFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
            {/* Navigation Header */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-xl">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3L4 7v6c0 5.5 3.4 10.6 8 12 4.6-1.4 8-6.5 8-12V7l-8-4z" fill="white" />
                                <path d="M12 5.5L6 8.5v4.5c0 4.1 2.6 7.9 6 9 3.4-1.1 6-4.9 6-9V8.5l-6-3z" fill="#2563eb" />
                                <path d="M10 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="font-bold text-lg text-white tracking-tight">SatyaStack</span>
                    </Link>
                    <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <span>Close Guide</span>
                        <XCircle className="w-4 h-4" />
                    </Link>
                </div>
            </nav>

            <main className="flex-grow container mx-auto px-6 pt-32 pb-20 max-w-4xl space-y-32">

                {/* Hero Section */}
                <section className="text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100 shadow-sm"
                    >
                        <BookOpen className="w-4 h-4" />
                        <span>Privacy Education Series</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
                    >
                        How to prove compliance<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">without sharing data.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        A non-technical guide to understanding Zero-Knowledge Proofs.
                    </motion.p>
                </section>

                {/* 1. The Problem */}
                <section className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Old Way vs. The Safe Way</h2>
                        <p className="text-slate-500 text-lg">
                            Traditionally, proving who you are meant sharing <i>everything</i> about yourself.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* The Problem Card */}
                        <div className="p-8 rounded-3xl bg-white border border-red-100 shadow-xl shadow-red-500/5 relative overflow-hidden group hover:border-red-200 transition-all">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <XCircle className="w-32 h-32 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                                <XCircle className="w-6 h-6" />
                                The Old Way
                            </h3>
                            <p className="text-slate-600 font-medium mb-8 text-lg">
                                To prove you are over 18, you hand over your ID card.
                            </p>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 mt-1">❌</span>
                                    <span>You share your <strong className="text-slate-900">full name, address, and ID number</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 mt-1">❌</span>
                                    <span>The other person sees <strong className="text-slate-900">more data</strong> than they need.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 mt-1">❌</span>
                                    <span>Your data is stored in <strong className="text-slate-900">yet another database</strong> (risk of breach).</span>
                                </li>
                            </ul>
                        </div>

                        {/* The Solution Card */}
                        <div className="p-8 rounded-3xl bg-white border border-emerald-100 shadow-xl shadow-emerald-500/5 relative overflow-hidden group hover:border-emerald-200 transition-all">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <CheckCircle2 className="w-32 h-32 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-emerald-600 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6" />
                                The Privacy Way
                            </h3>
                            <p className="text-slate-600 font-medium mb-8 text-lg">
                                You use technology to prove a specific fact, nothing more.
                            </p>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-500 mt-1">✅</span>
                                    <span>You only prove: <strong className="text-slate-900">&ldquo;Yes, I am over 18.&rdquo;</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-500 mt-1">✅</span>
                                    <span>No name, address, or ID number is revealed.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-500 mt-1">✅</span>
                                    <span>No sensitive data is <strong className="text-slate-900">ever stored</strong> by the verifier.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 2. Where Personal Data Lives (FIXED OVERLAP) */}
                <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-2xl shadow-slate-200/50">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                                <Smartphone className="w-7 h-7" />
                            </div>
                            <h2 className="text-4xl font-bold text-slate-900">Your Device is the Vault</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Your personal data (like your ID or bank statement) originates from trusted sources like government systems or banks.
                                <br /><br />
                                This data is downloaded <strong>directly to your phone or computer</strong>. It is encrypted and lives locally with you.
                            </p>
                            <div className="inline-block px-5 py-3 bg-blue-50 border border-blue-100 rounded-xl">
                                <span className="text-blue-700 font-semibold">Raw personal data never leaves your device.</span>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            {/* Illustration */}
                            <div className="w-full aspect-square max-w-sm bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center p-8">
                                <div className="text-center space-y-6">
                                    <div className="w-28 h-48 mx-auto bg-white border-4 border-slate-200 rounded-[2rem] flex items-center justify-center shadow-xl relative">
                                        <Lock className="w-10 h-10 text-emerald-500" />
                                    </div>
                                    {/* FIXED: Removed absolute positioning */}
                                    <div>
                                        <div className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Your Device</div>
                                        <p className="text-sm text-slate-500">
                                            Data is processed here. <br />Only the result leaves.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. What SatyaStack Does */}
                <section className="text-center space-y-16">
                    <div className="max-w-2xl mx-auto">
                        <div className="w-14 h-14 mx-auto bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-600/20 mb-8">
                            <Server className="w-7 h-7" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">What SatyaStack Does</h2>
                        <p className="text-slate-500 text-lg">
                            SatyaStack is the <strong>infrastructure</strong> that makes this privacy possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">We provide logic</h3>
                            <p className="text-slate-600 leading-relaxed">SatyaStack provides the mathematical &quot;recipes&quot; (circuits) to convert facts into proofs.</p>
                        </div>
                        <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">We verify results</h3>
                            <p className="text-slate-600 leading-relaxed">Our system checks the proof to ensure it follows the rules, without seeing the data.</p>
                        </div>
                        <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">We prevent fraud</h3>
                            <p className="text-slate-600 leading-relaxed">We ensure credentials are valid and haven&apos;t been revoked by the issuer.</p>
                        </div>
                    </div>

                    <p className="text-purple-600 font-bold text-xl md:text-2xl">
                        &quot;SatyaStack converts facts into verifiable proofs.&quot;
                    </p>
                </section>

                {/* 4. The Analogy */}
                <section className="space-y-8">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Imagine a Sealed Envelope</h2>
                        <p className="text-slate-500 text-lg">
                            How Zero-Knowledge Proofs work in the real world.
                        </p>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-2xl shadow-slate-200/50">
                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-900 border border-slate-200">1</div>
                                <div>
                                    <h4 className="text-slate-900 font-bold text-lg mb-2">The Question</h4>
                                    <p className="text-slate-600 leading-relaxed">A bank asks: &quot;Are you over 18?&quot;</p>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-slate-200 ml-5"></div>
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-900 border border-slate-200">2</div>
                                <div>
                                    <h4 className="text-slate-900 font-bold text-lg mb-2">The Proof</h4>
                                    <p className="text-slate-600 leading-relaxed">Instead of showing your ID, your device checks your birth date locally.</p>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-slate-200 ml-5"></div>
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-900 border border-slate-200">3</div>
                                <div>
                                    <h4 className="text-slate-900 font-bold text-lg mb-2">The Answer</h4>
                                    <p className="text-slate-600 leading-relaxed">Your device generates a tamper-proof digital certificate that just says <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">&quot;YES&quot;</span>.</p>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-slate-200 ml-5"></div>
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-900 border border-slate-200">4</div>
                                <div>
                                    <h4 className="text-slate-900 font-bold text-lg mb-2">The Verification</h4>
                                    <p className="text-slate-600 leading-relaxed">The bank accepts this &quot;YES&quot; certificate because it is mathematically signed. They never saw your birth date.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Summary Flow */}
                <section className="text-center border-t border-slate-200 pt-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-12">The Ecosystem Result</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-3xl shadow-sm">👤</div>
                            <span className="font-bold text-slate-900">User</span>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Keeps Data Control</span>
                        </div>

                        <ArrowRight className="w-6 h-6 text-slate-300 rotate-90 md:rotate-0" />

                        <div className="flex flex-col items-center gap-4">
                            <div className="px-6 py-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-600 text-sm font-mono font-bold">
                                Proof
                            </div>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Encrypted Evidence</span>
                        </div>

                        <ArrowRight className="w-6 h-6 text-slate-300 rotate-90 md:rotate-0" />

                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-3xl shadow-sm">🏦</div>
                            <span className="font-bold text-slate-900">Platform</span>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Stays Compliant</span>
                        </div>

                        <ArrowRight className="w-6 h-6 text-slate-300 rotate-90 md:rotate-0" />

                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-3xl shadow-sm">⚖️</div>
                            <span className="font-bold text-slate-900">Regulator</span>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Possesses Audit Trail</span>
                        </div>
                    </div>

                    <div className="mt-20 p-8 bg-slate-50 rounded-3xl inline-block">
                        <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-sm">In Summary</h3>
                        <div className="space-y-2 text-lg">
                            <p className="text-slate-600">Platforms stay compliant.</p>
                            <p className="text-slate-600">Users keep control of their data.</p>
                            <p className="text-emerald-600 font-bold">No sensitive information is exchanged.</p>
                        </div>
                    </div>
                </section>

                <footer className="w-full text-center py-12 text-sm text-slate-500 border-t border-slate-200">
                    <div className="container mx-auto px-6">
                        <p className="font-medium">© 2026 SatyaStack. Educational Material.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
