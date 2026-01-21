"use client";

import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, XCircle, CircleDot } from 'lucide-react';
import type { DemoState } from '@/lib/demo/types';

interface StatusIndicatorProps {
    state: DemoState;
    processingMessage?: string;
    size?: 'sm' | 'md' | 'lg';
}

const stateConfig: Record<DemoState, {
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    label: string
}> = {
    idle: {
        icon: <CircleDot className="w-5 h-5" />,
        color: 'text-slate-400',
        bgColor: 'bg-slate-700/50',
        label: 'Ready',
    },
    processing: {
        icon: <Loader2 className="w-5 h-5 animate-spin" />,
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20',
        label: 'Processing',
    },
    success: {
        icon: <CheckCircle2 className="w-5 h-5" />,
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/20',
        label: 'Success',
    },
    failure: {
        icon: <XCircle className="w-5 h-5" />,
        color: 'text-red-400',
        bgColor: 'bg-red-500/20',
        label: 'Failed',
    },
};

export default function StatusIndicator({ state, processingMessage, size = 'md' }: StatusIndicatorProps) {
    const config = stateConfig[state];

    const sizeClasses = {
        sm: 'px-2 py-1 text-xs gap-1.5',
        md: 'px-3 py-1.5 text-sm gap-2',
        lg: 'px-4 py-2 text-base gap-2.5',
    };

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`
        inline-flex items-center rounded-full font-medium
        ${config.bgColor} ${config.color} ${sizeClasses[size]}
        border border-current/20
      `}
        >
            {config.icon}
            <span>{processingMessage || config.label}</span>
        </motion.div>
    );
}
