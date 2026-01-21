"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, Send, Hash, Lock, Shield } from 'lucide-react';
import { useDemo } from './DemoContext';
import { mockCredential } from '@/lib/demo/fixtures';
import CredentialCard from './CredentialCard';
import StatusIndicator from './StatusIndicator';
import JsonViewer from './JsonViewer';

export default function UserView() {
    const {
        demoState,
        processingStep,
        currentProof,
        generateProof,
        resetDemo
    } = useDemo();

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Your Privacy Vault
                </h1>
                <p className="text-lg text-slate-400">
                    Your verified credentials, stored securely on your device
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
                        {/* Credential Card */}
                        <CredentialCard credential={mockCredential} />

                        {/* Issuer Trust Model (Collapsible) */}
                        <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                            <details className="group">
                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-800/50 transition-colors">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                                        <Shield className="w-4 h-4 text-blue-400" />
                                        Issuer Trust Model
                                    </div>
                                    <div className="text-slate-500 group-open:rotate-180 transition-transform">▼</div>
                                </summary>
                                <div className="px-4 pb-4 pt-0 text-sm text-slate-400 space-y-2 border-t border-slate-700/50 mt-2 pt-4">
                                    <p>
                                        <strong className="text-slate-300">Regulated Entities:</strong> Issuers (banks, DigiLocker, NBFCs) are approved, revocable entities in the SatyaStack network.
                                    </p>
                                    <p>
                                        <strong className="text-slate-300">Cryptographic Signatures:</strong> Credentials are cryptographically signed by the issuer. SatyaStack does not issue identity—it only verifies proofs.
                                    </p>
                                    <p className="text-xs text-slate-500 italic">
                                        * In this demo, issuer signatures are simulated.
                                    </p>
                                </div>
                            </details>
                        </div>

                        {/* Generate Proof Button */}
                        <div className="space-y-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={generateProof}
                                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 transition-all"
                            >
                                <Sparkles className="w-5 h-5" />
                                Generate Compliance Proof
                            </motion.button>
                            <p className="text-center text-xs text-slate-500 font-mono">
                                ⚡ Generated locally on user device
                            </p>
                        </div>

                        {/* Info Box */}
                        <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                            <div className="flex items-start gap-3">
                                <Lock className="w-5 h-5 text-slate-400 mt-0.5" />
                                <div className="text-sm text-slate-400">
                                    <p>
                                        Your personal data never leaves your device. Only a cryptographic proof
                                        is generated that verifies your compliance status without revealing any identity information.
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
                                <Sparkles className="w-8 h-8 text-blue-400" />
                            </div>
                        </div>

                        <h2 className="text-xl font-semibold text-white mb-4">
                            Generating Cryptographic Proof
                        </h2>

                        <StatusIndicator state="processing" processingMessage={processingStep} />

                        <p className="text-sm text-slate-500 mt-6 max-w-md text-center">
                            Computing zero-knowledge proof using your credential data.
                            No personal information is transmitted.
                        </p>
                    </motion.div>
                )}

                {demoState === 'success' && currentProof && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                    >
                        {/* Success Header */}
                        <div className="text-center p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/30">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', bounce: 0.5 }}
                                className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <Sparkles className="w-8 h-8 text-emerald-400" />
                            </motion.div>
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Proof Generated Successfully
                            </h2>
                            <p className="text-slate-400">
                                This proof verifies your KYC status without revealing your identity
                            </p>
                        </div>

                        {/* Proof Hash */}
                        <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                            <div className="flex items-center gap-2 mb-2">
                                <Hash className="w-4 h-4 text-slate-400" />
                                <span className="text-sm font-medium text-slate-300">Proof Hash</span>
                            </div>
                            <code className="text-sm font-mono text-blue-400 break-all">
                                {currentProof.proofHash}
                            </code>
                        </div>

                        {/* Proof Metadata */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">KYC Level</p>
                                <p className="text-lg font-semibold text-white">Level {currentProof.metadata.kycLevel}</p>
                            </div>
                            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Issuer</p>
                                <p className="text-lg font-semibold text-white">{currentProof.metadata.issuer}</p>
                            </div>
                        </div>

                        {/* ZK Proof JSON Viewer */}
                        <JsonViewer data={currentProof.zkProof} title="ZK Proof Object" />

                        {/* Actions */}
                        <div className="flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => { }}
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all"
                            >
                                <Send className="w-5 h-5" />
                                Share with Verifier
                            </motion.button>

                            <button
                                onClick={resetDemo}
                                className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold border border-slate-700 transition-colors"
                            >
                                <RefreshCw className="w-5 h-5" />
                            </button>
                        </div>
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
                            Proof Generation Failed
                        </h2>
                        <p className="text-slate-400 mb-6">
                            An error occurred while generating the proof. Please try again.
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
