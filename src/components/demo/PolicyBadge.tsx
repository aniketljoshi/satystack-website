"use client";

import { Shield, CheckCircle, Lock, Globe, UserCheck, FileCheck } from 'lucide-react';

type BadgeType = 'kyc' | 'sanctions' | 'pep' | 'privacy' | 'verified' | 'policy';

interface PolicyBadgeProps {
    type: BadgeType;
    label?: string;
    size?: 'sm' | 'md';
}

const badgeConfig: Record<BadgeType, {
    icon: React.ReactNode;
    defaultLabel: string;
    color: string;
    bgColor: string;
}> = {
    kyc: {
        icon: <UserCheck className="w-3.5 h-3.5" />,
        defaultLabel: 'KYC Verified',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10 border-blue-500/30',
    },
    sanctions: {
        icon: <Globe className="w-3.5 h-3.5" />,
        defaultLabel: 'Sanctions Clear',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10 border-emerald-500/30',
    },
    pep: {
        icon: <FileCheck className="w-3.5 h-3.5" />,
        defaultLabel: 'PEP Screened',
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/10 border-purple-500/30',
    },
    privacy: {
        icon: <Shield className="w-3.5 h-3.5" />,
        defaultLabel: 'Privacy Protected',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10 border-amber-500/30',
    },
    verified: {
        icon: <CheckCircle className="w-3.5 h-3.5" />,
        defaultLabel: 'Verified',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10 border-emerald-500/30',
    },
    policy: {
        icon: <Lock className="w-3.5 h-3.5" />,
        defaultLabel: 'Policy Compliant',
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-500/10 border-cyan-500/30',
    },
};

export default function PolicyBadge({ type, label, size = 'md' }: PolicyBadgeProps) {
    const config = badgeConfig[type];

    const sizeClasses = {
        sm: 'px-2 py-0.5 text-xs gap-1',
        md: 'px-2.5 py-1 text-xs gap-1.5',
    };

    return (
        <span
            className={`
        inline-flex items-center rounded-full font-medium border
        ${config.bgColor} ${config.color} ${sizeClasses[size]}
      `}
        >
            {config.icon}
            {label || config.defaultLabel}
        </span>
    );
}
