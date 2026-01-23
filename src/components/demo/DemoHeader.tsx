"use client";

import { Beaker } from 'lucide-react';
import Link from 'next/link';

export default function DemoHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <svg
                        className="w-8 h-8"
                        viewBox="0 0 512 512"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M256 24 L456 96 V272 C456 360 352 448 256 488 C160 448 56 360 56 272 V96 Z"
                            fill="url(#shieldGradientDemo)"
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
                            <linearGradient id="shieldGradientDemo" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3AB0FF" />
                                <stop offset="50%" stopColor="#0B5ED7" />
                                <stop offset="100%" stopColor="#083A9B" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl text-white tracking-tight leading-tight">
                            SatyaStack
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                            Verify compliance. Reveal nothing.
                        </span>
                    </div>
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
