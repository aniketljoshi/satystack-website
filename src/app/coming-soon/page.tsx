import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Construction className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Coming Soon</h1>
            <p className="text-slate-600 max-w-md mb-8">
                This page is currently under construction. Please check back later.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </Link>
        </div>
    );
}
