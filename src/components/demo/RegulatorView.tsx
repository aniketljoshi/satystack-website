"use client";

import { motion } from 'framer-motion';
import { Scale, Activity, Building2, Shield, FileCheck } from 'lucide-react';
import { useDemo } from './DemoContext';
import AuditTimeline from './AuditTimeline';
import ExportButtons from './ExportButtons';

export default function RegulatorView() {
    const { auditLogs, stats } = useDemo();

    const statCards = [
        {
            label: 'Total Verifications',
            value: stats.totalVerifications.toLocaleString(),
            icon: <Activity className="w-5 h-5" />,
            color: 'text-blue-400',
            bgColor: 'bg-blue-500/10',
        },
        {
            label: 'Success Rate',
            value: `${stats.successRate}%`,
            icon: <Shield className="w-5 h-5" />,
            color: 'text-emerald-400',
            bgColor: 'bg-emerald-500/10',
        },
        {
            label: 'Active Issuers',
            value: stats.activeIssuers.toString(),
            icon: <Building2 className="w-5 h-5" />,
            color: 'text-purple-400',
            bgColor: 'bg-purple-500/10',
        },
        {
            label: 'Proofs Today',
            value: stats.proofsToday.toString(),
            icon: <FileCheck className="w-5 h-5" />,
            color: 'text-amber-400',
            bgColor: 'bg-amber-500/10',
        },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-4">
                    <Scale className="w-4 h-4" />
                    Regulatory Access
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Audit Dashboard
                </h1>
                <p className="text-lg text-slate-400">
                    Complete visibility into compliance activity with full audit trails
                </p>
            </div>

            {/* Stats Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
                {statCards.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50"
                    >
                        <div className={`inline-flex p-2 rounded-lg ${stat.bgColor} mb-3`}>
                            <span className={stat.color}>{stat.icon}</span>
                        </div>
                        <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                        <p className="text-sm text-slate-400">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Main Content */}
            <div className="space-y-6">
                {/* Timeline Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                Verification Activity
                            </h2>
                            <p className="text-sm text-slate-400">
                                Real-time audit trail • <span className="text-blue-400 font-mono text-xs">Logged in SatyaStack Audit Layer</span>
                            </p>
                        </div>
                        <ExportButtons />
                    </div>

                    {/* Timeline */}
                    <div className="p-4">
                        <AuditTimeline logs={auditLogs} maxItems={8} />
                    </div>
                </motion.div>

                {/* Compliance Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {/* Verification Breakdown */}
                    <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Verification Types
                        </h3>
                        <div className="space-y-3">
                            {[
                                { type: 'KYC Level 2', count: 156, percentage: 63 },
                                { type: 'KYC Level 1', count: 67, percentage: 27 },
                                { type: 'Sanctions Only', count: 24, percentage: 10 },
                            ].map((item) => (
                                <div key={item.type}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-slate-300">{item.type}</span>
                                        <span className="text-slate-400">{item.count}</span>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.percentage}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Verifiers */}
                    <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Top Verifiers
                        </h3>
                        <div className="space-y-3">
                            {[
                                { name: 'CoinDCX Exchange', count: 87 },
                                { name: 'Razorpay', count: 62 },
                                { name: 'Jupiter Fintech', count: 48 },
                                { name: 'WazirX', count: 31 },
                                { name: 'Instarem', count: 19 },
                            ].map((verifier, index) => (
                                <div
                                    key={verifier.name}
                                    className="flex items-center justify-between py-2 border-b border-slate-700/30 last:border-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center bg-slate-700 rounded text-xs font-medium text-slate-400">
                                            {index + 1}
                                        </span>
                                        <span className="text-slate-300">{verifier.name}</span>
                                    </div>
                                    <span className="text-sm font-medium text-slate-400">
                                        {verifier.count} verifications
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Data Custody Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30"
                >
                    <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-emerald-400 mt-0.5" />
                        <div>
                            <h4 className="font-semibold text-emerald-400 mb-1">
                                Zero PII Custody
                            </h4>
                            <p className="text-sm text-slate-400">
                                All verification records shown here contain only compliance metadata.
                                No personal identity information is stored in audit logs. Full regulatory
                                visibility is maintained while protecting individual privacy under DPDP Act requirements.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
