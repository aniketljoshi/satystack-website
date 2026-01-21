"use client";

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Shield, Clock } from 'lucide-react';
import type { ComplianceCheck } from '@/lib/demo/types';

interface ComplianceChecksProps {
    checks: ComplianceCheck[];
}

const iconMap = {
    check: CheckCircle,
    x: XCircle,
    shield: Shield,
    clock: Clock,
};

const statusColors = {
    passed: {
        icon: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
    },
    failed: {
        icon: 'text-red-400',
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
    },
    pending: {
        icon: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
    },
};

export default function ComplianceChecks({ checks }: ComplianceChecksProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checks.map((check, index) => {
                const Icon = iconMap[check.icon];
                const colors = statusColors[check.status];

                return (
                    <motion.div
                        key={check.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`
              flex items-center gap-3 p-4 rounded-xl border
              ${colors.bg} ${colors.border}
            `}
                    >
                        <div className={`p-2 rounded-lg ${colors.bg}`}>
                            <Icon className={`w-5 h-5 ${colors.icon}`} />
                        </div>
                        <div>
                            <p className="font-medium text-white">{check.name}</p>
                            <p className={`text-sm ${colors.icon}`}>
                                {check.status === 'passed' ? 'Passed' : check.status === 'failed' ? 'Failed' : 'Pending'}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
