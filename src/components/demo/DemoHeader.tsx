"use client";

import { Beaker } from 'lucide-react';
import Link from 'next/link';
import SatyaStackLogo from '../SatyaStackLogo';

export default function DemoHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="group">
                    <SatyaStackLogo size="sm" />
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
