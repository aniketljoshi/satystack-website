"use client";

import { Twitter, Linkedin, Github, Shield } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="max-w-sm">
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <svg
                                    className="w-10 h-10"
                                    viewBox="0 0 512 512"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M256 24 L456 96 V272 C456 360 352 448 256 488 C160 448 56 360 56 272 V96 Z"
                                        fill="url(#shieldGradientFooter)"
                                    />
                                    <path d="M96 160 H416" stroke="rgba(255,255,255,0.35)" strokeWidth="10" />
                                    <path d="M112 216 H400" stroke="rgba(255,255,255,0.30)" strokeWidth="10" />
                                    <path d="M128 272 H384" stroke="rgba(255,255,255,0.25)" strokeWidth="10" />
                                    <path
                                        d="M168 260 L232 320 L352 180"
                                        stroke="white"
                                        strokeWidth="44"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <defs>
                                        <linearGradient id="shieldGradientFooter" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#3AB0FF" />
                                            <stop offset="50%" stopColor="#0B5ED7" />
                                            <stop offset="100%" stopColor="#083A9B" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div>
                                    <span className="font-bold text-xl text-white block">SatyaStack</span>
                                    <span className="text-sm text-slate-400">Verify compliance. Reveal nothing.</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Privacy-Preserving Compliance Infrastructure for India's regulated digital economy.
                            Zero-knowledge proofs for compliant privacy.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com/satyastack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/company/satyastack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:bg-blue-700 hover:text-white transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/satyastack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full md:w-auto">
                        <div>
                            <h4 className="font-bold text-white mb-6">Platform</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li><Link href="/#why-now" className="hover:text-white transition-colors">Why Now</Link></li>
                                <li><Link href="/learn/zero-knowledge" className="hover:text-white transition-colors text-blue-400 font-medium">Learning Center</Link></li>
                                <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                                <li><Link href="/#use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
                                <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                                <li><Link href="/learn/glossary" className="hover:text-white transition-colors text-blue-400 font-medium">Glossary</Link></li>
                                <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6">Developers</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li><Link href="/#developer-platform" className="hover:text-white transition-colors">Developer Platform</Link></li>
                                <li><Link href="/#comparison" className="hover:text-white transition-colors">SatyaStack vs Traditional</Link></li>
                                <li><a href="https://github.com/satyastack" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                                <li><Link href="/#roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li><Link href="/coming-soon" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/coming-soon" className="hover:text-white transition-colors">Blog</Link></li>
                                <li><Link href="/architecture" className="hover:text-white transition-colors text-emerald-400 font-medium">Architecture & Trust</Link></li>
                                <li><Link href="/coming-soon" className="hover:text-white transition-colors">Careers</Link></li>
                                <li><a href="mailto:contact@satyastack.com" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <div>© 2026 SatyaStack Private Limited. All rights reserved.</div>
                    <div className="flex gap-8">
                        <Link href="/coming-soon" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/coming-soon" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
