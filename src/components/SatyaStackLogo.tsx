"use client";

interface SatyaStackLogoProps {
    size?: "sm" | "md" | "lg";
    showText?: boolean;
    className?: string;
}

/**
 * SatyaStack Logo Component
 * Renders the official SatyaStack 3D glossy shield logo with optional brand text.
 * Features cyan highlights, deep blue gradient, and glow effect matching brand guidelines.
 */
export default function SatyaStackLogo({
    size = "md",
    showText = true,
    className = ""
}: SatyaStackLogoProps) {
    const sizeConfig = {
        sm: { icon: "w-8 h-8", text: "text-lg" },
        md: { icon: "w-10 h-10", text: "text-xl" },
        lg: { icon: "w-12 h-12", text: "text-2xl" }
    };

    const config = sizeConfig[size];

    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <svg
                className={config.icon}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Main shield gradient - deep blue */}
                    <linearGradient id="mainGradient" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1e88e5" />
                        <stop offset="40%" stopColor="#1565c0" />
                        <stop offset="100%" stopColor="#0d47a1" />
                    </linearGradient>
                    {/* Top highlight - cyan/turquoise */}
                    <linearGradient id="topHighlight" x1="32" y1="4" x2="32" y2="30" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#4dd0e1" />
                        <stop offset="50%" stopColor="#26c6da" />
                        <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
                    </linearGradient>
                    {/* Inner shield gradient */}
                    <linearGradient id="innerGradient" x1="32" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#42a5f5" />
                        <stop offset="50%" stopColor="#1e88e5" />
                        <stop offset="100%" stopColor="#1565c0" />
                    </linearGradient>
                    {/* Glow filter */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.8 0 0 0 0 0.9 0 0 0 0.5 0" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Main shield body */}
                <path
                    d="M32 6L10 15v17c0 15.4 9.5 29.7 22 33.6 12.5-3.9 22-18.2 22-33.6V15L32 6z"
                    fill="url(#mainGradient)"
                    filter="url(#glow)"
                />

                {/* Top cyan highlight */}
                <path
                    d="M32 6L10 15v8c12-2 22-2 44 0v-8L32 6z"
                    fill="url(#topHighlight)"
                    opacity="0.7"
                />

                {/* Inner shield layer */}
                <path
                    d="M32 12L16 19v13c0 11 6.8 21.2 16 24 9.2-2.8 16-13 16-24V19L32 12z"
                    fill="url(#innerGradient)"
                />

                {/* Checkmark */}
                <path
                    d="M24 34l6 6 14-14"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />

                {/* Glossy highlight */}
                <ellipse cx="32" cy="20" rx="10" ry="5" fill="white" opacity="0.15" />
            </svg>
            {showText && (
                <span className={`font-bold ${config.text} text-white tracking-tight`}>
                    SatyaStack
                </span>
            )}
        </div>
    );
}
