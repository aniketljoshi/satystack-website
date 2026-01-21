"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Persona, DemoState, GeneratedProof, VerificationResult, AuditLogEntry } from '@/lib/demo/types';
import { generateProof as apiGenerateProof, verifyProof as apiVerifyProof } from '@/lib/demo/mockApi';
import { mockAuditLogs, mockDemoStats } from '@/lib/demo/fixtures';

interface DemoContextType {
    // Persona management
    currentPersona: Persona;
    setCurrentPersona: (persona: Persona) => void;

    // Demo state management
    demoState: DemoState;
    setDemoState: (state: DemoState) => void;

    // Processing state
    processingStep: string;
    setProcessingStep: (step: string) => void;

    // Proof management
    currentProof: GeneratedProof | null;
    generateProof: () => Promise<void>;

    // Verification management
    verificationResult: VerificationResult | null;
    verifyProof: () => Promise<void>;

    // Audit logs
    auditLogs: AuditLogEntry[];

    // Stats
    stats: typeof mockDemoStats;

    // Reset demo
    resetDemo: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
    const [currentPersona, setCurrentPersona] = useState<Persona>('user');
    const [demoState, setDemoState] = useState<DemoState>('idle');
    const [processingStep, setProcessingStep] = useState<string>('');
    const [currentProof, setCurrentProof] = useState<GeneratedProof | null>(null);
    const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
    const [auditLogs] = useState<AuditLogEntry[]>(mockAuditLogs);

    const generateProof = useCallback(async () => {
        setDemoState('processing');

        // Animate through processing steps
        const steps = [
            'Preparing credential data...',
            'Computing zero-knowledge circuit...',
            'Generating cryptographic proof...',
            'Finalizing proof...',
        ];

        for (let i = 0; i < steps.length; i++) {
            setProcessingStep(steps[i]);
            await new Promise(resolve => setTimeout(resolve, 600 + i * 200));
        }

        try {
            const proof = await apiGenerateProof();
            setCurrentProof(proof);
            setDemoState('success');
        } catch {
            setDemoState('failure');
        }

        setProcessingStep('');
    }, []);

    const verifyProof = useCallback(async () => {
        setDemoState('processing');

        // Animate through verification steps
        const steps = [
            'Validating proof signature...',
            'Checking issuer registry...',
            'Running policy engine...',
            'Completing verification...',
        ];

        for (let i = 0; i < steps.length; i++) {
            setProcessingStep(steps[i]);
            await new Promise(resolve => setTimeout(resolve, 500 + i * 150));
        }

        try {
            const result = await apiVerifyProof(currentProof?.proofHash || '');
            setVerificationResult(result);
            setDemoState('success');
        } catch {
            setDemoState('failure');
        }

        setProcessingStep('');
    }, [currentProof]);

    const resetDemo = useCallback(() => {
        setDemoState('idle');
        setProcessingStep('');
        setCurrentProof(null);
        setVerificationResult(null);
    }, []);

    const value: DemoContextType = {
        currentPersona,
        setCurrentPersona,
        demoState,
        setDemoState,
        processingStep,
        setProcessingStep,
        currentProof,
        generateProof,
        verificationResult,
        verifyProof,
        auditLogs,
        stats: mockDemoStats,
        resetDemo,
    };

    return (
        <DemoContext.Provider value={value}>
            {children}
        </DemoContext.Provider>
    );
}

export function useDemo() {
    const context = useContext(DemoContext);
    if (context === undefined) {
        throw new Error('useDemo must be used within a DemoProvider');
    }
    return context;
}
