import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Interactive Demo | SatyaStack",
    description: "Experience SatyaStack's privacy-preserving compliance platform. See how users, verifiers, and regulators interact with zero-knowledge proofs for KYC compliance.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
