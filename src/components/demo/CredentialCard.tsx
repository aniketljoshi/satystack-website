"use client";

import { motion } from 'framer-motion';
import { Shield, Calendar, Building2, CheckCircle } from 'lucide-react';
import type { Credential } from '@/lib/demo/types';
import PolicyBadge from './PolicyBadge';

interface CredentialCardProps {
    credential: Credential;
}

export default function CredentialCard({ credential }: CredentialCardProps) {
    const isActive = credential.status === 'active';

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 p-6"
        >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />

            <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-600/20 rounded-xl border border-blue-500/30">
                            <Shield className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">
                                KYC Level {credential.kycLevel}
                            </h3>
                            <p className="text-sm text-slate-400">Verified Credential</p>
                        </div>
                    </div>

                    {isActive && (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-xs font-medium text-emerald-400">Active</span>
                        </div>
                    )}
                </div>

                {/* Credential Details */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                        <Building2 className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-400">Issued by:</span>
                        <span className="text-white font-medium">{credential.issuer}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-400">Valid:</span>
                        <span className="text-white font-medium">
                            {formatDate(credential.issuedAt)} — {formatDate(credential.expiresAt)}
                        </span>
                    </div>
                </div>

                {/* What can be proven */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">
                        Can be proven without revealing identity
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <PolicyBadge type="kyc" label="KYC Level 2" />
                        <PolicyBadge type="sanctions" label="Sanctions Clear" />
                        <PolicyBadge type="pep" label="PEP Screened" />
                        <PolicyBadge type="privacy" label="Zero PII Exposure" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
