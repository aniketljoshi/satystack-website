"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Server, Smartphone, Lock, FileCheck, AlertTriangle, ArrowRight, CheckCircle2, Building, User } from "lucide-react";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Architecture() {
    return (
        <div className="min-h-screen bg-[#FDFDFC] font-sans selection:bg-blue-100 selection:text-blue-900 text-slate-900">
            {/* Navigation - Custom simplified version for this whitepaper */}
            <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-sm">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* Main Website Logo SVG */}
                        <svg className="w-9 h-9" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 24 L456 96 V272 C456 360 352 448 256 488 C160 448 56 360 56 272 V96 Z" fill="url(#shieldGradientArch)" />
                            <path d="M96 160 H416" stroke="rgba(255,255,255,0.35)" strokeWidth="10" />
                            <path d="M112 216 H400" stroke="rgba(255,255,255,0.30)" strokeWidth="10" />
                            <path d="M128 272 H384" stroke="rgba(255,255,255,0.25)" strokeWidth="10" />
                            <path d="M168 260 L232 320 L352 180" stroke="white" strokeWidth="44" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="shieldGradientArch" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3AB0FF" />
                                    <stop offset="50%" stopColor="#0B5ED7" />
                                    <stop offset="100%" stopColor="#083A9B" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tight leading-loose text-white">SatyaStack</span>
                            <span className="text-[10px] text-slate-400 font-medium tracking-wide -mt-1">Verify compliance. Reveal nothing.</span>
                        </div>
                    </Link>

                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-slate-800"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            <main className="container mx-auto px-6 py-16 max-w-5xl">
                {/* Header */}
                <header className="mb-20 border-b border-slate-200 pb-16">
                    <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
                                <AlertTriangle className="w-3 h-3" />
                                Pilot Phase Documentation
                            </div>
                            {/* Fixed H1 to be on one line */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight whitespace-nowrap">
                                Architecture & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Trust Model</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                                This document outlines the design intent and privacy mechanisms of the SatyaStack infrastructure.
                                It is intended for compliance officers, regulators, and technical evaluators.
                            </p>
                        </div>
                    </div>
                </header>

                {/* 1. Executive Summary */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">1</div>
                        <h2 className="text-2xl font-bold text-slate-900">Executive Summary</h2>
                    </div>

                    <div className="p-8 md:p-10 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 leading-loose text-lg text-slate-600">
                        <p className="mb-6">
                            SatyaStack is a privacy-preserving compliance infrastructure currently in its <strong>pilot / pre-production phase</strong>.
                            It addresses a critical conflict in the digital economy: the need for rigorous compliance (AML/KYC) versus the fundamental right to data privacy.
                        </p>
                        <p>
                            The core architectural principle of SatyaStack is <strong>"Verify without Exposure"</strong>.
                            The system is designed to enable regulated institutions to cryptographically verify user data (such as identity or financial status)
                            without ever receiving, storing, or transmitting the raw Personally Identifiable Information (PII).
                        </p>
                    </div>
                </section>

                {/* 2. High-Level System Architecture (Visual Diagram) */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">2</div>
                        <h2 className="text-2xl font-bold text-slate-900">High-Level System Architecture</h2>
                    </div>

                    {/* Visual Architecture Diagram */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

                        <div className="relative z-10 grid gap-12 md:gap-0 md:grid-cols-3 items-stretch text-white">

                            {/* Column 1: Trusted Zone (User) */}
                            <div className="flex flex-col gap-6 relative group">
                                <div className="absolute -inset-4 bg-emerald-500/5 rounded-3xl border border-emerald-500/20 md:border-dashed"></div>
                                <div className="relative text-center mb-4">
                                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">Trusted Zone</span>
                                </div>

                                {/* User Device Node */}
                                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg flex flex-col items-center text-center gap-4 relative z-10">
                                    <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                                        <Smartphone className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">User Device</h3>
                                        <p className="text-xs text-slate-400 mt-1">Local Vault & Prover</p>
                                    </div>
                                    <div className="w-full h-px bg-slate-700 my-2"></div>
                                    <ul className="text-xs text-left space-y-2 w-full text-slate-300">
                                        <li className="flex gap-2"><div className="w-3 h-3 rounded-full bg-emerald-400 mt-1" /> Stores Encrypted PII</li>
                                        <li className="flex gap-2"><div className="w-3 h-3 rounded-full bg-emerald-400 mt-1" /> Generates ZK Proof</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Arrow Connector 1 */}
                            <div className="hidden md:flex flex-col items-center justify-center relative">
                                <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 to-blue-500/50 absolute top-1/2 -translate-y-1/2"></div>
                                <div className="bg-slate-900 px-4 py-2 rounded-full border border-slate-700 relative z-10 text-xs text-slate-400 font-mono">
                                    Sends ZK Proof
                                </div>
                            </div>
                            <div className="md:hidden flex flex-col items-center justify-center gap-2">
                                <ArrowRight className="w-6 h-6 rotate-90 text-slate-600" />
                                <span className="text-xs text-slate-500 font-mono">Sends ZK Proof</span>
                                <ArrowRight className="w-6 h-6 rotate-90 text-slate-600 mb-4" />
                            </div>

                            {/* Column 2: Verification Zone */}
                            <div className="flex flex-col gap-6 relative">
                                <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl border border-blue-500/20 md:border-dashed"></div>
                                <div className="relative text-center mb-4">
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">Verification Zone</span>
                                </div>

                                {/* SatyaStack Node */}
                                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg flex flex-col items-center text-center gap-4 relative z-10 mb-6">
                                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400">
                                        <Shield className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">SatyaStack</h3>
                                        <p className="text-xs text-slate-400 mt-1">Infrastructure</p>
                                    </div>
                                    <div className="text-xs text-slate-300 bg-slate-900 px-3 py-1 rounded border border-slate-700">
                                        Validates Math Proof
                                    </div>
                                </div>

                                {/* Verifier Node */}
                                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg flex flex-col items-center text-center gap-4 relative z-10">
                                    <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400">
                                        <Building className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Verifier (Bank)</h3>
                                        <p className="text-xs text-slate-400 mt-1">Compliance Check</p>
                                    </div>
                                    <div className="text-xs text-slate-300 bg-slate-900 px-3 py-1 rounded border border-slate-700">
                                        Receives "Yes/No"
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Regulator Layer */}
                        <div className="mt-12 pt-8 border-t border-dashed border-slate-700 flex flex-col items-center">
                            <span className="text-slate-500 text-xs uppercase tracking-widest mb-4">Audit Layer</span>
                            <div className="flex items-center gap-4 bg-slate-800 px-6 py-3 rounded-xl border border-slate-700 w-full max-w-md justify-center">
                                <FileCheck className="w-5 h-5 text-slate-400" />
                                <span className="text-slate-300 font-medium">Regulator / Auditor</span>
                                <span className="text-xs text-slate-500 ml-auto border-l border-slate-700 pl-4">Audit Trails</span>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-6 text-xl">System Actors</h3>
                        <div className="grid md:grid-cols-2 gap-8 text-slate-600">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-900 block mb-1">Issuer</span>
                                    <span className="text-sm leading-relaxed">The trusted source of truth (e.g., DigiLocker, Bank) that issues the digital credential to the user.</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-900 block mb-1">User Device</span>
                                    <span className="text-sm leading-relaxed">The user's smartphone or computer. It acts as the secure vault where data lives and proofs are generated.</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-900 block mb-1">SatyaStack</span>
                                    <span className="text-sm leading-relaxed">The underlying infrastructure providing the cryptographic circuits and verification logic.</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                    <Building className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-900 block mb-1">Verifier</span>
                                    <span className="text-sm leading-relaxed">The business (Bank, NBFC, Fintech) that needs to check compliance (e.g., "Is User &gt; 18?").</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Architecture Conceptual Walkthrough (Previously simple list) */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">3</div>
                        <h2 className="text-2xl font-bold text-slate-900">Conceptual Walkthrough</h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            { title: "Data Origin & Storage", desc: "Raw data (PII) originates from an Issuer and is transmitted securely to the User Device. It is stored in local storage, encrypted continuously." },
                            { title: "The 'Air Gap' for PII", desc: "When a Verifier requests a check (e.g., Age > 18), the User Device inputs the raw data into a Zero-Knowledge Circuit locally. The raw data never leaves the device during this process." },
                            { title: "Transmission of Proof", desc: "Only the generated ZK-Proof (a small cryptographic string) is transmitted to the SatyaStack Infrastructure or the Verifier." },
                            { title: "Logging", desc: "The Verifier logs the successful verification result for audit purposes. This log contains metadata (timestamp, proof ID) but zero PII." },
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 items-start group">
                                <div className="w-px h-full bg-slate-200 absolute left-5 top-10 group-last:hidden"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center font-bold text-slate-400 shrink-0 relative z-10 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                                    {i + 1}
                                </div>
                                <div className="pb-8">
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed max-w-2xl">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* 4. Data Custody & Trust Model */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">4</div>
                        <h2 className="text-2xl font-bold text-slate-900">Data Custody & Trust Model</h2>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-900 text-sm uppercase tracking-wider">
                                <tr>
                                    <th className="p-6 font-bold w-1/4">Actor</th>
                                    <th className="p-6 font-bold border-l border-slate-200 w-1/3">What They Store</th>
                                    <th className="p-6 font-bold border-l border-slate-200 text-emerald-700 w-1/3">What They NEVER See</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-600 text-base">
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-6 font-bold text-slate-900">User Device</td>
                                    <td className="p-6 border-l border-slate-200">Full PII (Encrypted locally)</td>
                                    <td className="p-6 border-l border-slate-200 bg-slate-50/50 italic text-slate-400">N/A (Has full access)</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-6 font-bold text-slate-900">SatyaStack</td>
                                    <td className="p-6 border-l border-slate-200">Circuit Logic, Public Keys</td>
                                    <td className="p-6 border-l border-slate-200 bg-emerald-50/30 font-medium text-emerald-800">No PII, No User Identity</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-6 font-bold text-slate-900">Verifier (Bank)</td>
                                    <td className="p-6 border-l border-slate-200">Decision Logs ("Approved")</td>
                                    <td className="p-6 border-l border-slate-200 bg-emerald-50/30 font-medium text-emerald-800">No Raw PII (No DOB, No Address)</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-6 font-bold text-slate-900">Regulator</td>
                                    <td className="p-6 border-l border-slate-200">Audit Logs & Traces</td>
                                    <td className="p-6 border-l border-slate-200 bg-emerald-50/30 font-medium text-emerald-800">No Raw PII</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-slate-500 italic px-4">
                        * Assumption: User device is not compromised. See Security Model below.
                    </p>
                </section>

                {/* 5. Proof Flow */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">5</div>
                        <h2 className="text-2xl font-bold text-slate-900">Conceptual Proof Flow</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "1. Credential Issuance",
                                desc: "User downloads specific credentials (e.g. Aadhaar hash, Pan verification) from an Issuer into their SatyaStack-compatible wallet."
                            },
                            {
                                title: "2. Trigger Verification",
                                desc: "Platform requests a specific proof from User: 'Prove you are Indian Resident AND Age > 18'."
                            },
                            {
                                title: "3. Local Proof Generation",
                                desc: "User's device runs the ZK Circuit against stored credentials. This computationally intensive step happens client-side."
                            },
                            {
                                title: "4. Submission & Verification",
                                desc: "The generated proof is sent to the Verifier. Verifier checks proof validity mathematically."
                            },
                            {
                                title: "5. Audit Trail",
                                desc: "A tamper-evident log is created recording that a valid proof was presented at Timestamp T."
                            }
                        ].map((step, i) => (
                            <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                                <strong className="block text-slate-900 text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors">{step.title}</strong>
                                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. Security & Threat Model */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">6</div>
                        <h2 className="text-2xl font-bold text-slate-900">Security & Threat Model</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-amber-50/50 border border-amber-100 rounded-3xl">
                            <div className="flex items-center gap-3 mb-4 text-amber-900">
                                <Server className="w-6 h-6" />
                                <h3 className="font-bold text-lg">Infrastructure Compromise</h3>
                            </div>
                            <p className="text-amber-900/80 leading-relaxed mb-4">
                                <strong>Scenario:</strong> SatyaStack's servers are breached.
                            </p>
                            <div className="bg-white/60 p-4 rounded-xl text-amber-900/90 text-sm">
                                <strong>Outcome:</strong> Attackers cannot access user data because SatyaStack never stores PII. They only find public circuits and anonymized logs.
                            </div>
                        </div>
                        <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl">
                            <div className="flex items-center gap-3 mb-4 text-slate-900">
                                <Smartphone className="w-6 h-6" />
                                <h3 className="font-bold text-lg">Device Compromise</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong>Scenario:</strong> User phone is physically stolen and unlocked.
                            </p>
                            <div className="bg-white p-4 rounded-xl text-slate-600 text-sm shadow-sm border border-slate-100">
                                <strong>Mitigation:</strong> Credentials protected by Secure Enclave / TEE and biometrics. This relies on standard device security models.
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Regulatory Alignment */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">7</div>
                        <h2 className="text-2xl font-bold text-slate-900">Regulatory Alignment</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-200 transition-colors">
                            <div className="text-blue-600 font-extrabold text-xl mb-3">DPDP Act (India)</div>
                            <p className="text-slate-600 leading-relaxed">
                                Aligned with <strong>Data Minimization</strong> principles. Businesses only collect what is strictly necessary (the proof), not the underlying PII.
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-200 transition-colors">
                            <div className="text-blue-600 font-extrabold text-xl mb-3">FIU-IND (AML)</div>
                            <p className="text-slate-600 leading-relaxed">
                                Provides a verifiable <strong>Audit Trail</strong>. While data is private, the <i>fact</i> that compliance was checked is cryptographically undeniable.
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-200 transition-colors">
                            <div className="text-blue-600 font-extrabold text-xl mb-3">RBI Controls</div>
                            <p className="text-slate-600 leading-relaxed">
                                Designed to fit within existing KYC Master Directions by acting as a <strong>Tier-2 Technology Service Provider</strong> aiding in verification.
                            </p>
                        </div>
                    </div>
                </section>


                {/* 8. Non-Capabilities */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">8</div>
                        <h2 className="text-2xl font-bold text-slate-900">What SatyaStack Does NOT Do</h2>
                    </div>
                    <div className="bg-slate-50/80 p-10 rounded-3xl border border-slate-200">
                        <ul className="grid md:grid-cols-2 gap-y-6 gap-x-12">
                            <li className="flex gap-4 items-start text-slate-700">
                                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                                <span>SatyaStack does <strong>not</strong> store user PII.</span>
                            </li>
                            <li className="flex gap-4 items-start text-slate-700">
                                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                                <span>SatyaStack does <strong>not</strong> have an "admin view" of identities.</span>
                            </li>
                            <li className="flex gap-4 items-start text-slate-700">
                                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                                <span>We do <strong>not</strong> enable anonymous transactions for illicit activity (KYC is enforced, just privately).</span>
                            </li>
                            <li className="flex gap-4 items-start text-slate-700">
                                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                                <span>We do <strong>not</strong> bypass KYC; we upgrade its privacy.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 9. Pilot Status */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">9</div>
                        <h2 className="text-2xl font-bold text-slate-900">Pilot Phase Status</h2>
                    </div>
                    <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-3xl flex gap-6 items-start">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-indigo-600 flex items-center justify-center shrink-0">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-900 font-bold text-lg mb-4">
                                As of early 2026, SatyaStack is in a <strong>Pilot / Private Beta</strong> stage.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li>Our cryptographic circuits are being tested for performance and security.</li>
                                <li>We are running closed pilots with select fintech partners.</li>
                                <li>The platform is <strong>not yet</strong> generally available for production banking workloads.</li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* 10. FAO */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">10</div>
                        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="grid gap-6">
                        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">Is this legal in India?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                SatyaStack is designed to comply with the DPDP Act 2023. For regulated entities (REs),
                                implementation models are being developed to ensure full alignment with sector-specific regulators (RBI, SEBI).
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">Can SatyaStack decrypt user data?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>No.</strong> By design, SatyaStack does not possess the private keys required to decrypt user data stored on user devices.
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-slate-900 text-lg mb-3">Does this work on slow phones?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We are optimizing our ZK circuits to generate proofs efficiently on mid-range smartphones.
                                Performance benchmarking is a key part of our current pilot phase.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 11. Conceptual Integration Flow (Pilot Phase) */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold text-lg shadow-sm border border-blue-100">11</div>
                        <h2 className="text-2xl font-bold text-slate-900">Conceptual Integration Flow (Pilot Phase)</h2>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">

                        {/* 11.1 Purpose */}
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Purpose of This Section</h3>
                            <p className="text-slate-600 leading-relaxed">
                                This section clarifies the intended interaction model for banks and fintech partners participating in the pilot program.
                                It describes the conceptual flow of a verification request without defining specific technical implementation details,
                                as these may vary by pilot partner.
                            </p>
                        </div>

                        <div className="border-t border-slate-100 my-8"></div>

                        {/* 11.2 Verification Initiation */}
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Verification Initiation (Conceptual)</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The flow begins when a Verifier (e.g., a Bank App) requires a specific compliance check to proceed with a user action (e.g., opening an account).
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                                <li>The Verifier conceptually asks: <span className="font-medium text-slate-800">"Does User X meet Criteria Y?"</span> (e.g., Is Resident AND Age &gt; 18?).</li>
                                <li>The Verifier does <strong>not</strong> ask for the underlying document (e.g., "Send me the Passport").</li>
                            </ul>
                        </div>

                        {/* 11.3 User Consent & Proof Generation */}
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">User Consent & Proof Generation</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The user is prompted on their device to approve the request.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <ul className="space-y-3">
                                    <li className="flex gap-3 items-start text-slate-700">
                                        <Shield className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                        <span>The <strong>SatyaStack</strong>-compatible user application accesses the locally stored encrypted credential.</span>
                                    </li>
                                    <li className="flex gap-3 items-start text-slate-700">
                                        <Lock className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                        <span>A Zero-Knowledge Proof is generated <strong>locally on the device</strong>.</span>
                                    </li>
                                    <li className="flex gap-3 items-start text-slate-700">
                                        <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                                        <span className="italic">Crucial: The raw PII data never leaves the device during this calculation.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 11.4 Proof Presentation & Validation */}
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Proof Presentation & Validation</h3>
                            <p className="text-slate-600 leading-relaxed">
                                The generated cryptographic proof is presented for verification, either directly to the Verifier or via SatyaStack infrastructure, depending on pilot configuration.
                                The validation function returns a simple <strong>TRUE</strong> or <strong>FALSE</strong>.
                            </p>
                        </div>

                        {/* 11.5 Compliance Logging */}
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Compliance Logging & Oversight</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Upon successful verification, an immutable audit record is created.
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2 mt-2">
                                <li><strong>Included:</strong> Timestamp, Proof ID, Circuit ID, Result (Success/Fail).</li>
                                <li><strong>Excluded:</strong> User Identity, PII, Raw Credential Data.</li>
                            </ul>
                        </div>

                        <div className="border-t border-slate-100 my-8"></div>

                        {/* 11.6 Explicit Non-Goals */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Explicit Non-Goals (Pilot Phase)</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg">
                                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✕</div>
                                    <span className="text-sm text-slate-600">No identity lookup database.</span>
                                </div>
                                <div className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg">
                                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✕</div>
                                    <span className="text-sm text-slate-600">No user profiling or tracking.</span>
                                </div>
                                <div className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg">
                                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✕</div>
                                    <span className="text-sm text-slate-600">No continuous monitoring.</span>
                                </div>
                                <div className="flex gap-3 items-start p-4 bg-slate-50 rounded-lg">
                                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✕</div>
                                    <span className="text-sm text-slate-600">No automated enforcement actions.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            {/* Footer - Reverted to simplified darker version but with correct branding */}
            <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12 text-slate-400">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        <div className="max-w-sm">
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    {/* Correct SVG Logo for Footer */}
                                    <svg className="w-8 h-8" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M256 24 L456 96 V272 C456 360 352 448 256 488 C160 448 56 360 56 272 V96 Z" fill="url(#shieldGradientFooterArch)" />
                                        <path d="M96 160 H416" stroke="rgba(255,255,255,0.35)" strokeWidth="10" />
                                        <path d="M112 216 H400" stroke="rgba(255,255,255,0.30)" strokeWidth="10" />
                                        <path d="M128 272 H384" stroke="rgba(255,255,255,0.25)" strokeWidth="10" />
                                        <path d="M168 260 L232 320 L352 180" stroke="white" strokeWidth="44" strokeLinecap="round" strokeLinejoin="round" />
                                        <defs>
                                            <linearGradient id="shieldGradientFooterArch" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#3AB0FF" />
                                                <stop offset="50%" stopColor="#0B5ED7" />
                                                <stop offset="100%" stopColor="#083A9B" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div>
                                        <span className="font-bold text-xl text-white block">SatyaStack</span>
                                        <span className="text-xs">Risk & Governance</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Building trust through mathematics.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://twitter.com/satyastack" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com/company/satyastack" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://github.com/satyastack" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-12 text-sm">
                            <div>
                                <h4 className="font-bold text-white mb-4">Product</h4>
                                <ul className="space-y-3">
                                    <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                                    <li><Link href="/#use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
                                    <li><Link href="/learn/zero-knowledge" className="hover:text-white transition-colors">Learning Center</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-4">Legal & Trust</h4>
                                <ul className="space-y-3">
                                    <li><Link href="/architecture" className="text-white font-medium flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Architecture & Trust</Link></li>
                                    <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                                    <li><Link href="mailto:compliance@satyastack.com" className="hover:text-white transition-colors">Contact Compliance</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-800 text-xs text-slate-600 flex flex-col md:flex-row justify-between gap-4">
                        <div>© 2026 SatyaStack Private Limited. All rights reserved.</div>
                        <div className="flex gap-4">
                            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
