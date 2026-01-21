// Mock data fixtures for SatyaStack Demo MVP
import type {
    Credential,
    GeneratedProof,
    VerificationResult,
    AuditLogEntry,
    DemoStats
} from './types';

// User's stored credential
export const mockCredential: Credential = {
    id: 'cred_hdfc_2025_06_15',
    type: 'KYC_LEVEL_2',
    kycLevel: 2,
    issuer: 'HDFC Bank',
    issuedAt: '2025-06-15T10:00:00Z',
    expiresAt: '2026-06-15T10:00:00Z',
    status: 'active',
};

// Generated proof object
export const mockGeneratedProof: GeneratedProof = {
    proofId: 'prf_2026_01_21_a7b3c9d2',
    status: 'generated',
    timestamp: '2026-01-21T14:30:00Z',
    proofHash: '0x8a3f4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a',
    metadata: {
        kycLevel: 2,
        issuer: 'HDFC Bank',
        issuedAt: '2025-06-15T10:00:00Z',
        expiresAt: '2026-06-15T10:00:00Z',
        checksPerformed: ['identity_verification', 'sanctions_screening', 'pep_check'],
    },
    zkProof: {
        protocol: 'groth16',
        curve: 'bn254',
        pi_a: [
            '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
            '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
        ],
        pi_b: [
            [
                '0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f',
                '0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b',
            ],
            [
                '0x9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d',
                '0x1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f',
            ],
        ],
        pi_c: [
            '0x3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b',
            '0x5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d',
        ],
        publicSignals: ['1', '2', '1705827600'],
    },
};

// Verification result
export const mockVerificationResult: VerificationResult = {
    verificationId: 'ver_2026_01_21_f8e7d6c5',
    status: 'verified',
    timestamp: '2026-01-21T14:30:05Z',
    proofHash: '0x8a3f4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a',
    checks: [
        { name: 'KYC Level 2', status: 'passed', icon: 'check' },
        { name: 'Not on Sanctions List', status: 'passed', icon: 'check' },
        { name: 'PEP Screening Clear', status: 'passed', icon: 'check' },
        { name: 'No Identity Data Exposed', status: 'passed', icon: 'shield' },
    ],
    metadata: {
        verifiedAt: '2026-01-21T14:30:05Z',
        verifier: 'CoinDCX Exchange',
        policyVersion: '1.2.0',
    },
};

// Audit log entries
export const mockAuditLogs: AuditLogEntry[] = [
    {
        id: 'log_001',
        timestamp: '2026-01-21T14:30:05Z',
        action: 'proof_verified',
        proofHash: '0x8a3f...2f3a',
        actor: 'CoinDCX Exchange',
        result: 'success',
    },
    {
        id: 'log_002',
        timestamp: '2026-01-21T14:25:00Z',
        action: 'proof_generated',
        proofHash: '0x7b2e...1a9c',
        actor: 'HDFC Bank User',
        result: 'success',
    },
    {
        id: 'log_003',
        timestamp: '2026-01-21T14:10:22Z',
        action: 'proof_verified',
        proofHash: '0x5d4c...8b7a',
        actor: 'Razorpay',
        result: 'success',
    },
    {
        id: 'log_004',
        timestamp: '2026-01-21T13:55:18Z',
        action: 'proof_shared',
        proofHash: '0x3e2f...6d5c',
        actor: 'Axis Bank User',
        result: 'success',
    },
    {
        id: 'log_005',
        timestamp: '2026-01-21T13:42:33Z',
        action: 'proof_verified',
        proofHash: '0x1a0b...4c3d',
        actor: 'WazirX',
        result: 'success',
    },
    {
        id: 'log_006',
        timestamp: '2026-01-21T13:30:00Z',
        action: 'proof_verified',
        proofHash: '0x9f8e...2a1b',
        actor: 'Jupiter Fintech',
        result: 'failure',
        details: 'Proof expired',
    },
    {
        id: 'log_007',
        timestamp: '2026-01-21T13:15:45Z',
        action: 'export_requested',
        proofHash: '-',
        actor: 'RBI Audit Team',
        result: 'success',
        details: 'CSV export of last 30 days',
    },
    {
        id: 'log_008',
        timestamp: '2026-01-21T12:58:12Z',
        action: 'proof_generated',
        proofHash: '0x6e5d...0f9e',
        actor: 'ICICI Bank User',
        result: 'success',
    },
];

// Demo stats for regulator view
export const mockDemoStats: DemoStats = {
    totalVerifications: 247,
    successRate: 99.2,
    activeIssuers: 12,
    proofsToday: 47,
};

// Processing step messages
export const proofGenerationSteps = [
    { message: 'Preparing credential data...', duration: 600 },
    { message: 'Computing zero-knowledge circuit...', duration: 1200 },
    { message: 'Generating cryptographic proof...', duration: 800 },
    { message: 'Finalizing proof...', duration: 400 },
];

export const proofVerificationSteps = [
    { message: 'Validating proof signature...', duration: 500 },
    { message: 'Checking issuer registry...', duration: 800 },
    { message: 'Running policy engine...', duration: 1000 },
    { message: 'Completing verification...', duration: 500 },
];
