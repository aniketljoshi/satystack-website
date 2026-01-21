"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Scan, RefreshCw, Building2, Clock, Hash } from 'lucide-react';
import { useDemo } from './DemoContext';
import { mockGeneratedProof } from '@/lib/demo/fixtures';
import StatusIndicator from './StatusIndicator';
import ComplianceChecks from './ComplianceChecks';
import JsonViewer from './JsonViewer';

export default function VerifierView() {
    const {
        demoState,
        processingStep,
        verificationResult,
        verifyProof,
        resetDemo
    } = useDemo();

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Verification Dashboard
                </h1>
                <p className="text-lg text-slate-400">
                    Verify customer compliance without accessing personal data
                </p>
            </div>

            {/* Main Content */}
            <AnimatePresence mode="wait">
                {demoState === 'idle' && (
                    <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                    >
                        {/* Pending Proof Card */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 p-6">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />

                            <div className="relative">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-amber-500/20 rounded-xl border border-amber-500/30">
                                            <Clock className="w-6 h-6 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">Incoming Proof</h3>
                                            <p className="text-sm text-slate-400">Awaiting verification</p>
                                        </div>
                                    </div>
                                    <StatusIndicator state="idle" size="sm" />
                                </div>

                                {/* Proof Preview */}
                                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 mb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Hash className="w-4 h-4 text-slate-400" />
                                        <span className="text-sm font-medium text-slate-300">Proof Hash</span>
                                    </div>
                                    <code className="text-sm font-mono text-blue-400 break-all">
                                        {mockGeneratedProof.proofHash}
                                    </code>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-slate-400">
                                    <div className="flex items-center gap-1.5">
                                        <Building2 className="w-4 h-4" />
                                        <span>Issuer: {mockGeneratedProof.metadata.issuer}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span>KYC Level {mockGeneratedProof.metadata.kycLevel}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Verify Button */}
                        <div className="space-y-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={verifyProof}
                                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 transition-all"
                            >
                                <Scan className="w-5 h-5" />
                                Verify Proof
                            </motion.button>
                            <p className="text-center text-xs text-slate-500 font-mono">
                                🔍 Verified via SatyaStack Verification API
                            </p>
                        </div>

                        {/* Info Box */}
                        <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-slate-400 mt-0.5" />
                                <div className="text-sm text-slate-400">
                                    <p>
                                        Verification confirms compliance status cryptographically. You receive
                                        definitive pass/fail results without ever seeing the customer&apos;s personal identity data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {demoState === 'processing' && (
                    <motion.div
                        key="processing"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center justify-center py-16"
                    >
                        {/* Animated Loader */}
                        <div className="relative mb-8">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                className="w-20 h-20 rounded-full border-4 border-slate-700 border-t-blue-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Scan className="w-8 h-8 text-blue-400" />
                            </div>
                        </div>

                        <h2 className="text-xl font-semibold text-white mb-4">
                            Verifying Compliance Proof
                        </h2>

                        <StatusIndicator state="processing" processingMessage={processingStep} />

                        <p className="text-sm text-slate-500 mt-6 max-w-md text-center">
                            Running cryptographic verification and policy engine checks.
                            No personal identity data is accessed.
                        </p>
                    </motion.div>
                )}

                {demoState === 'success' && verificationResult && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                    >
                        {/* Success Header */}
                        <div className="text-center p-8 bg-emerald-500/10 rounded-2xl border border-emerald-500/30">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', bounce: 0.5 }}
                                className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <ShieldCheck className="w-10 h-10 text-emerald-400" />
                            </motion.div>
                            <h2 className="text-3xl font-bold text-emerald-400 mb-2">
                                ✅ Verified
                            </h2>
                            <p className="text-slate-300">
                                Customer passed all compliance requirements
                            </p>
                        </div>

                        {/* Policy Applied (Enterprise Config) */}
                        <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                            <div className="flex items-center justify-between mb-3 border-b border-slate-700/50 pb-2">
                                <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                                    Policy Applied
                                </h3>
                                <div className="text-xs font-mono text-slate-500 px-2 py-0.5 bg-slate-800 rounded">
                                    v1.2.0-enterprise
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-xs md:text-sm">
                                <div className="p-2 bg-slate-800/50 rounded flex flex-col gap-1">
                                    <span className="text-slate-500">KYC Requirement</span>
                                    <span className="text-emerald-400 font-medium">≥ Level 2</span>
                                </div>
                                <div className="p-2 bg-slate-800/50 rounded flex flex-col gap-1">
                                    <span className="text-slate-500">Sanctions</span>
                                    <div className="flex items-center gap-1 text-emerald-400 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Clear
                                    </div>
                                </div>
                                <div className="p-2 bg-slate-800/50 rounded flex flex-col gap-1">
                                    <span className="text-slate-500">PEP Check</span>
                                    <div className="flex items-center gap-1 text-emerald-400 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Clear
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Compliance Checks */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Compliance Checks
                            </h3>
                            <ComplianceChecks checks={verificationResult.checks} />
                        </div>

                        {/* Verification Metadata */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Verifier</p>
                                <p className="text-lg font-semibold text-white">{verificationResult.metadata.verifier}</p>
                            </div>
                            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Timestamp</p>
                                <p className="text-sm font-semibold text-white">
                                    {new Date(verificationResult.timestamp).toLocaleString()}
                                </p>
                            </div>
                        </div>

                        {/* Full Verification Result */}
                        <JsonViewer
                            data={{
                                verificationId: verificationResult.verificationId,
                                status: verificationResult.status,
                                timestamp: verificationResult.timestamp,
                                proofHash: verificationResult.proofHash,
                                checksCount: verificationResult.checks.length,
                                allChecksPassed: verificationResult.checks.every(c => c.status === 'passed'),
                            }}
                            title="Verification Result"
                        />

                        {/* "What Happens Next" Context */}
                        <div className="border-t border-slate-800 pt-6 mt-8">
                            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                In Production, This Verification Can:
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="p-3 bg-slate-800/20 rounded-lg border border-slate-800 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">1</div>
                                    <span className="text-sm text-slate-300">Approve onboarding instantly</span>
                                </div>
                                <div className="p-3 bg-slate-800/20 rounded-lg border border-slate-800 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">2</div>
                                    <span className="text-sm text-slate-300">Unblock high-value transactions</span>
                                </div>
                                <div className="p-3 bg-slate-800/20 rounded-lg border border-slate-800 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">3</div>
                                    <span className="text-sm text-slate-300">Create immutable audit record</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <button
                            onClick={resetDemo}
                            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold border border-slate-700 transition-colors mt-4"
                        >
                            <RefreshCw className="w-5 h-5" />
                            Verify Another Proof
                        </button>
                    </motion.div>
                )}

                {demoState === 'failure' && (
                    <motion.div
                        key="failure"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center py-16"
                    >
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">❌</span>
                        </div>
                        <h2 className="text-xl font-semibold text-white mb-2">
                            Verification Failed
                        </h2>
                        <p className="text-slate-400 mb-6">
                            The proof could not be verified. It may be expired or invalid.
                        </p>
                        <button
                            onClick={resetDemo}
                            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold border border-slate-700 transition-colors"
                        >
                            <RefreshCw className="w-5 h-5 inline mr-2" />
                            Try Again
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
