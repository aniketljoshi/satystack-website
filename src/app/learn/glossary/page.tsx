"use client";

import Link from "next/link";
import { ArrowLeft, Search, BookOpen, CheckCircle2, Twitter, Linkedin, Github } from "lucide-react";

const glossaryTerms = [
    {
        term: "Zero-Knowledge Proof (ZKP)",
        definition: "A cryptographic method by which one party (the prover) can prove to another party (the verifier) that a given statement is true while the prover avoids conveying any additional information apart from the fact that the statement is indeed true.",
        category: "Cryptography"
    },
    {
        term: "DPDP Act 2023",
        definition: "The Digital Personal Data Protection Act, 2023 is a law in India that governs the processing of digital personal data. It emphasizes consent, data minimization, and heavy penalties for data breaches.",
        category: "Regulation"
    },
    {
        term: "PII (Personally Identifiable Information)",
        definition: "Any data that could potentially identify a specific individual. Examples include full name, Aadhaar number, PAN card details, or biometric data.",
        category: "Data Privacy"
    },
    {
        term: "Fiat-Shamir Heuristic",
        definition: "A technique for taking an interactive proof of knowledge and creating a digital signature based on it. This way, it can be applied to some zero-knowledge proofs to make them non-interactive.",
        category: "Cryptography"
    },
    {
        term: "Circuit (ZKP)",
        definition: "In zero-knowledge proofs, a 'circuit' is a fixed computation graph that represents the logic to be proven. For example, 'Is Age > 18' is a circuit.",
        category: "Technical"
    },
    {
        term: "Trusted Setup",
        definition: "A one-time initialization event required for some ZK protocols (like SNARKs) to generate the cryptographic parameters. Modern protocols like STARKs do not require a trusted setup.",
        category: "Cryptography"
    },
    {
        term: "FIU-IND (Financial Intelligence Unit - India)",
        definition: "The central national agency responsible for receiving, processing, analyzing and disseminating information relating to suspect financial transactions. It is responsible for coordinating and strengthening efforts of national and international intelligence, investigation and enforcement agencies in pursuing the global efforts against money laundering and financing of terrorism.",
        category: "Regulation"
    },
    {
        term: "On-Chain Verification",
        definition: "The process of verifying a ZK proof directly on a blockchain (like Ethereum or Polygon) via a smart contract. This provides public, immutable evidence of compliance.",
        category: "Web3"
    },
    {
        term: "Selective Disclosure",
        definition: "The ability for a user to reveal only specific subsets of information (e.g., 'Over 18') from a larger credential (e.g., Driver's License) without sharing the entire document.",
        category: "Privacy"
    },
    {
        term: "Verifiable Credential (VC)",
        definition: "A digital credential that is cryptographically signed by an issuer (like a government) and can be easily verified by a third party. SatyaStack uses VCs as inputs for ZK proofs.",
        category: "Identity"
    }
];

export default function Glossary() {
    return (
        <div className="min-h-screen bg-[#FDFDFC] font-sans selection:bg-blue-100 selection:text-blue-900 text-slate-900">
            {/* Schema for DefinedTerms */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "DefinedTermSet",
                        "name": "SatyaStack ZKP Glossary",
                        "description": "Glossary of terms related to Zero-Knowledge Proofs and Compliance",
                        "hasDefinedTerm": glossaryTerms.map(item => ({
                            "@type": "DefinedTerm",
                            "name": item.term,
                            "description": item.definition,
                            "inDefinedTermSet": "https://satyastack.com/learn/glossary"
                        }))
                    })
                }}
            />

            {/* Navigation - Dark Theme matching Architecture page */}
            <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-sm">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* Main Website Logo SVG */}
                        <svg className="w-9 h-9" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 24 L456 96 V272 C456 360 352 448 256 488 C160 448 56 360 56 272 V96 Z" fill="url(#shieldGradientGlossary)" />
                            <path d="M96 160 H416" stroke="rgba(255,255,255,0.35)" strokeWidth="10" />
                            <path d="M112 216 H400" stroke="rgba(255,255,255,0.30)" strokeWidth="10" />
                            <path d="M128 272 H384" stroke="rgba(255,255,255,0.25)" strokeWidth="10" />
                            <path d="M168 260 L232 320 L352 180" stroke="white" strokeWidth="44" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="shieldGradientGlossary" x1="0" y1="0" x2="0" y2="1">
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
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
                            <BookOpen className="w-3 h-3" />
                            Knowledge Base
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                            Glossary of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Terms</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                            Essential definitions for understanding Zero-Knowledge Proofs, Indian Compliance Regulations (DPDP, RBI), and Privacy Technology.
                        </p>
                    </div>
                </header>

                <div className="grid gap-8">
                    {glossaryTerms.map((item, index) => (
                        <div key={index} id={item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {item.term}
                                </h2>
                                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border ${item.category === 'Regulation' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                        item.category === 'Cryptography' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                            item.category === 'Privacy' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                                                'bg-slate-50 text-slate-600 border-slate-100'
                                    }`}>
                                    {item.category}
                                </span>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {item.definition}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to implement privacy-preserving compliance?</h3>
                        <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg">
                            Explore our architectural deep-dive to see how these concepts come together in the SatyaStack infrastructure.
                        </p>
                        <Link href="/architecture" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25">
                            View Architecture
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer - Dark Theme matching Architecture */}
            <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12 text-slate-400">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        <div className="max-w-sm">
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <svg className="w-8 h-8" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M256 24 L456 96 V272 C456 360 352 448 256 488 C160 448 56 360 56 272 V96 Z" fill="url(#shieldGradientFooterGlossary)" />
                                        <path d="M96 160 H416" stroke="rgba(255,255,255,0.35)" strokeWidth="10" />
                                        <path d="M112 216 H400" stroke="rgba(255,255,255,0.30)" strokeWidth="10" />
                                        <path d="M128 272 H384" stroke="rgba(255,255,255,0.25)" strokeWidth="10" />
                                        <path d="M168 260 L232 320 L352 180" stroke="white" strokeWidth="44" strokeLinecap="round" strokeLinejoin="round" />
                                        <defs>
                                            <linearGradient id="shieldGradientFooterGlossary" x1="0" y1="0" x2="0" y2="1">
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
                                    <li><Link href="/learn/glossary" className="text-white font-medium hover:text-white transition-colors">Glossary</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-4">Legal & Trust</h4>
                                <ul className="space-y-3">
                                    <li><Link href="/architecture" className="hover:text-white transition-colors flex items-center gap-2">Architecture & Trust</Link></li>
                                    <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                                    <li><Link href="mailto:compliance@satyastack.com" className="hover:text-white transition-colors">Contact Compliance</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-800 text-xs text-slate-600 flex flex-col md:flex-row justify-between gap-4">
                        <div>© 2026 SatyaStack Private Limited. All rights reserved.</div>
                        <div className="flex gap-4">
                            <Link href="/coming-soon" className="hover:text-white">Privacy Policy</Link>
                            <Link href="/coming-soon" className="hover:text-white">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
