"use client";

import { Twitter, Linkedin, Github, Shield } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="max-w-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-xl text-white">SatyaStack</span>
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
                                <li><a href="#why-now" className="hover:text-white transition-colors">Why Now</a></li>
                                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                                <li><a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a></li>
                                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6">Developers</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li><a href="#developer-platform" className="hover:text-white transition-colors">Developer Platform</a></li>
                                <li><a href="#comparison" className="hover:text-white transition-colors">SatyaStack vs Traditional</a></li>
                                <li><a href="https://github.com/satyastack" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                                <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="mailto:hello@satyastack.com" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <div>© 2026 SatyaStack Private Limited. All rights reserved.</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
