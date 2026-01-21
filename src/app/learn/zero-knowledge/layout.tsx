import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How It Works | SatyaStack Educational Guide',
    description: 'Learn how SatyaStack enables privacy-preserving compliance using Zero-Knowledge Proofs. A simple guide for non-technical readers.',
};

export default function LearnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="antialiased">
            {children}
        </div>
    );
}
