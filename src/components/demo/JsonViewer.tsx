"use client";

import { useState } from 'react';
import { ChevronDown, ChevronRight, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface JsonViewerProps {
    data: object;
    title?: string;
    defaultExpanded?: boolean;
}

export default function JsonViewer({ data, title = 'Proof Object', defaultExpanded = false }: JsonViewerProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    const [copied, setCopied] = useState(false);

    const jsonString = JSON.stringify(data, null, 2);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(jsonString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-700">
            {/* Header */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
                <div className="flex items-center gap-2">
                    {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                    ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                    <span className="font-mono text-sm text-slate-300">{title}</span>
                    <span className="text-xs text-slate-500">
                        ({Object.keys(data).length} keys)
                    </span>
                </div>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCopy();
                    }}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                    {copied ? (
                        <>
                            <Check className="w-3.5 h-3.5 text-green-400" />
                            <span className="text-green-400">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed max-h-[400px] overflow-y-auto">
                            <code className="text-slate-300">
                                {jsonString.split('\n').map((line, index) => (
                                    <div key={index} className="hover:bg-slate-700/30 px-2 -mx-2">
                                        <span className="text-slate-500 select-none inline-block w-8 text-right mr-4">
                                            {index + 1}
                                        </span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: syntaxHighlight(line),
                                            }}
                                        />
                                    </div>
                                ))}
                            </code>
                        </pre>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Simple syntax highlighting
function syntaxHighlight(json: string): string {
    return json
        .replace(/"([^"]+)":/g, '<span class="text-blue-400">"$1"</span>:')
        .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
        .replace(/: (\d+)/g, ': <span class="text-amber-400">$1</span>')
        .replace(/: (true|false)/g, ': <span class="text-purple-400">$1</span>')
        .replace(/: (null)/g, ': <span class="text-red-400">$1</span>');
}
