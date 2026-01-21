"use client";

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRightLeft, FileText, Download } from 'lucide-react';
import type { AuditLogEntry } from '@/lib/demo/types';

interface AuditTimelineProps {
    logs: AuditLogEntry[];
    maxItems?: number;
}

const actionIcons = {
    proof_generated: ArrowRightLeft,
    proof_verified: CheckCircle,
    proof_shared: ArrowRightLeft,
    export_requested: Download,
};

const actionLabels = {
    proof_generated: 'Proof Generated',
    proof_verified: 'Proof Verified',
    proof_shared: 'Proof Shared',
    export_requested: 'Export Requested',
};

export default function AuditTimeline({ logs, maxItems = 5 }: AuditTimelineProps) {
    const displayLogs = logs.slice(0, maxItems);

    const formatTime = (timestamp: string) => {
        return new Date(timestamp).toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    };

    return (
        <div className="space-y-1">
            {displayLogs.map((log, index) => {
                const Icon = actionIcons[log.action];
                const isSuccess = log.result === 'success';

                return (
                    <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                    >
                        {/* Timeline indicator */}
                        <div className="flex flex-col items-center">
                            <div className={`
                p-2 rounded-lg
                ${isSuccess ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}
              `}>
                                <Icon className="w-4 h-4" />
                            </div>
                            {index < displayLogs.length - 1 && (
                                <div className="w-px h-8 bg-slate-700/50 mt-2" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-sm font-medium text-white">
                                    {actionLabels[log.action]}
                                </span>
                                <span className="text-xs text-slate-500 font-mono">
                                    {formatTime(log.timestamp)}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-slate-400">{log.actor}</span>
                                {log.proofHash !== '-' && (
                                    <>
                                        <span className="text-xs text-slate-600">•</span>
                                        <code className="text-xs font-mono text-blue-400/70">
                                            {log.proofHash}
                                        </code>
                                    </>
                                )}
                            </div>

                            {log.details && (
                                <p className="text-xs text-slate-500 mt-1">{log.details}</p>
                            )}
                        </div>

                        {/* Status */}
                        <div className={`
              flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium
              ${isSuccess
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'bg-red-500/20 text-red-400'
                            }
            `}>
                            {isSuccess ? (
                                <CheckCircle className="w-3 h-3" />
                            ) : (
                                <XCircle className="w-3 h-3" />
                            )}
                            {isSuccess ? 'Success' : 'Failed'}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
