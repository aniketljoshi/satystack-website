"use client";

import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
    onRequestAccess: () => void;
}

export default function Navbar({ onRequestAccess }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "How It Works", to: "how-it-works" },
        { name: "Use Cases", to: "use-cases" },
        { name: "Pricing", to: "pricing" },
    ];

    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    };

    const handleRequestAccess = () => {
        setIsMobileMenuOpen(false);
        onRequestAccess();
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl text-white tracking-tight">
                        SatyaStack
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.to}`}
                            onClick={(e) => scrollToSection(e, link.to)}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={handleRequestAccess}
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Request Access
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-700 p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.to}`}
                            onClick={(e) => scrollToSection(e, link.to)}
                            className="text-lg font-medium text-slate-300 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={handleRequestAccess}
                        className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold text-center"
                    >
                        Request Access
                    </button>
                </div>
            )}
        </header>
    );
}
