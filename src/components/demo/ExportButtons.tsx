"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Database, Check, Loader2 } from 'lucide-react';
import { exportAuditData } from '@/lib/demo/mockApi';

export default function ExportButtons() {
    const [exporting, setExporting] = useState<string | null>(null);
    const [exported, setExported] = useState<string | null>(null);

    const handleExport = async (format: 'csv' | 'pdf' | 'json') => {
        setExporting(format);
        setExported(null);

        const result = await exportAuditData(format);

        setExporting(null);
        if (result.success) {
            setExported(format);
            setTimeout(() => setExported(null), 2000);
        }
    };

    const formats: { id: 'csv' | 'pdf' | 'json'; label: string; icon: React.ReactNode }[] = [
        { id: 'csv', label: 'CSV', icon: <Database className="w-4 h-4" /> },
        { id: 'pdf', label: 'PDF', icon: <FileText className="w-4 h-4" /> },
        { id: 'json', label: 'JSON', icon: <Download className="w-4 h-4" /> },
    ];

    return (
        <div className="flex gap-2">
            {formats.map((format) => {
                const isExporting = exporting === format.id;
                const isExported = exported === format.id;

                return (
                    <motion.button
                        key={format.id}
                        whileHover={{ scale: isExporting ? 1 : 1.05 }}
                        whileTap={{ scale: isExporting ? 1 : 0.95 }}
                        onClick={() => handleExport(format.id)}
                        disabled={isExporting}
                        className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
              transition-all border
              ${isExported
                                ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
                            }
              ${isExporting ? 'opacity-70 cursor-not-allowed' : ''}
            `}
                    >
                        {isExporting ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : isExported ? (
                            <Check className="w-4 h-4" />
                        ) : (
                            format.icon
                        )}
                        <span>
                            {isExported ? 'Downloaded!' : `Export ${format.label}`}
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
}
