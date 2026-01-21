"use client";

import { motion } from 'framer-motion';
import { User, Building2, Scale } from 'lucide-react';
import { useDemo } from './DemoContext';
import type { Persona } from '@/lib/demo/types';

const personas: { id: Persona; label: string; description: string; icon: React.ReactNode }[] = [
    {
        id: 'user',
        label: 'User',
        description: 'Credential Holder',
        icon: <User className="w-5 h-5" />,
    },
    {
        id: 'verifier',
        label: 'Verifier',
        description: 'Bank / Fintech',
        icon: <Building2 className="w-5 h-5" />,
    },
    {
        id: 'regulator',
        label: 'Regulator',
        description: 'Auditor',
        icon: <Scale className="w-5 h-5" />,
    },
];

export default function PersonaSwitcher() {
    const { currentPersona, setCurrentPersona, resetDemo } = useDemo();

    const handlePersonaChange = (personaId: Persona) => {
        if (personaId !== currentPersona) {
            resetDemo();
            setCurrentPersona(personaId);
        }
    };

    return (
        <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-1.5 border border-slate-700/50 inline-flex gap-1">
                {personas.map((persona) => (
                    <button
                        key={persona.id}
                        onClick={() => handlePersonaChange(persona.id)}
                        className={`
              relative px-5 py-3 rounded-xl transition-all duration-300 min-w-[140px]
              ${currentPersona === persona.id
                                ? 'text-white'
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
                            }
            `}
                    >
                        {currentPersona === persona.id && (
                            <motion.div
                                layoutId="activePersona"
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <div className="relative z-10 flex flex-col items-center gap-1">
                            <div className="flex items-center gap-2">
                                {persona.icon}
                                <span className="font-semibold">{persona.label}</span>
                            </div>
                            <span className="text-xs opacity-70">{persona.description}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
