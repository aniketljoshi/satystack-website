// Mock API layer for SatyaStack Demo MVP
// All responses are deterministic and return static fixtures

import type { GeneratedProof, VerificationResult, AuditLogResponse } from './types';
import { mockGeneratedProof, mockVerificationResult, mockAuditLogs, mockDemoStats } from './fixtures';

// Simulated network delay
const simulateDelay = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms));

/**
 * POST /api/mock/generate-proof
 * Simulates generating a zero-knowledge proof from user credentials
 */
export async function generateProof(): Promise<GeneratedProof> {
    // Simulate 3 second proof generation
    await simulateDelay(3000);

    return {
        ...mockGeneratedProof,
        proofId: `prf_${Date.now()}_${Math.random().toString(36).substr(2, 8)}`,
        timestamp: new Date().toISOString(),
    };
}

/**
 * POST /api/mock/verify-proof
 * Simulates verifying a zero-knowledge proof
 */
export async function verifyProof(proofHash: string): Promise<VerificationResult> {
    // Simulate 2.5 second verification
    await simulateDelay(2800);

    return {
        ...mockVerificationResult,
        verificationId: `ver_${Date.now()}_${Math.random().toString(36).substr(2, 8)}`,
        timestamp: new Date().toISOString(),
        proofHash: proofHash || mockVerificationResult.proofHash,
        metadata: {
            ...mockVerificationResult.metadata,
            verifiedAt: new Date().toISOString(),
        },
    };
}

/**
 * GET /api/mock/audit-log
 * Returns the audit log for regulator view
 */
export async function getAuditLog(): Promise<AuditLogResponse> {
    // Minimal delay for log fetching
    await simulateDelay(500);

    return {
        logs: mockAuditLogs,
        totalCount: 247,
        exportFormats: ['csv', 'pdf', 'json'],
    };
}

/**
 * Simulates exporting audit data
 */
export async function exportAuditData(format: 'csv' | 'pdf' | 'json'): Promise<{ success: boolean; filename: string }> {
    await simulateDelay(1500);

    const timestamp = new Date().toISOString().split('T')[0];
    return {
        success: true,
        filename: `satyastack_audit_${timestamp}.${format}`,
    };
}

/**
 * Get demo statistics
 */
export function getDemoStats() {
    return mockDemoStats;
}
