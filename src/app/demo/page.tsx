"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { DemoProvider, useDemo } from '@/components/demo/DemoContext';
import DemoHeader from '@/components/demo/DemoHeader';
import PersonaSwitcher from '@/components/demo/PersonaSwitcher';
import UserView from '@/components/demo/UserView';
import VerifierView from '@/components/demo/VerifierView';
import RegulatorView from '@/components/demo/RegulatorView';

function DemoContent() {
    const { currentPersona } = useDemo();

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
            <DemoHeader />

            {/* Main Content */}
            <main className="pt-24 pb-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Persona Switcher */}
                    <PersonaSwitcher />

                    {/* Persona Views */}
                    <AnimatePresence mode="wait">
                        {currentPersona === 'user' && (
                            <motion.div
                                key="user"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <UserView />
                            </motion.div>
                        )}

                        {currentPersona === 'verifier' && (
                            <motion.div
                                key="verifier"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <VerifierView />
                            </motion.div>
                        )}

                        {currentPersona === 'regulator' && (
                            <motion.div
                                key="regulator"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <RegulatorView />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            {/* Background decorative elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>
        </div>
    );
}

export default function DemoPage() {
    return (
        <DemoProvider>
            <DemoContent />
        </DemoProvider>
    );
}
