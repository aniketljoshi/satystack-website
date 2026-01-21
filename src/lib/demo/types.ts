// Demo type definitions for SatyaStack Demo MVP

export type Persona = 'user' | 'verifier' | 'regulator';

export type DemoState = 'idle' | 'processing' | 'success' | 'failure';

export interface Credential {
  id: string;
  type: string;
  kycLevel: number;
  issuer: string;
  issuedAt: string;
  expiresAt: string;
  status: 'active' | 'expired' | 'revoked';
}

export interface ZKProof {
  protocol: string;
  curve: string;
  pi_a: string[];
  pi_b: string[][];
  pi_c: string[];
  publicSignals: string[];
}

export interface GeneratedProof {
  proofId: string;
  status: 'generated' | 'shared' | 'verified';
  timestamp: string;
  proofHash: string;
  metadata: {
    kycLevel: number;
    issuer: string;
    issuedAt: string;
    expiresAt: string;
    checksPerformed: string[];
  };
  zkProof: ZKProof;
}

export interface ComplianceCheck {
  name: string;
  status: 'passed' | 'failed' | 'pending';
  icon: 'check' | 'x' | 'shield' | 'clock';
}

export interface VerificationResult {
  verificationId: string;
  status: 'verified' | 'failed' | 'pending';
  timestamp: string;
  proofHash: string;
  checks: ComplianceCheck[];
  metadata: {
    verifiedAt: string;
    verifier: string;
    policyVersion: string;
  };
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: 'proof_generated' | 'proof_verified' | 'proof_shared' | 'export_requested';
  proofHash: string;
  actor: string;
  result: 'success' | 'failure';
  details?: string;
}

export interface AuditLogResponse {
  logs: AuditLogEntry[];
  totalCount: number;
  exportFormats: string[];
}

export interface DemoStats {
  totalVerifications: number;
  successRate: number;
  activeIssuers: number;
  proofsToday: number;
}
