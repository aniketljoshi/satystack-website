"use client";

import { Beaker } from 'lucide-react';
import Link from 'next/link';

export default function DemoHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 3L4 7v6c0 5.5 3.4 10.6 8 12 4.6-1.4 8-6.5 8-12V7l-8-4z"
                                fill="white"
                            />
                            <path
                                d="M12 5.5L6 8.5v4.5c0 4.1 2.6 7.9 6 9 3.4-1.1 6-4.9 6-9V8.5l-6-3z"
                                fill="#2563eb"
                            />
                            <path
                                d="M10 12l2 2 4-4"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <span className="font-bold text-xl text-white tracking-tight">
                        SatyaStack
                    </span>
                </Link>

                {/* Sandbox Indicator */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
                        <Beaker className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-medium text-amber-400">
                            Simulated Interactive Demo — No real user data or live systems involved
                        </span>
                    </div>
                    {/* Mobile version (compact) */}
                    <div className="md:hidden flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
                        <Beaker className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-medium text-amber-400">Simulated Demo</span>
                    </div>

                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </header>
    );
}
