"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";
import Logo from "../components/Logo";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js Error caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark flex flex-col justify-between">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center">
          <Link href="/" className="flex items-center focus:outline-none">
            <Logo className="h-14 w-48 sm:h-16 sm:w-56" />
          </Link>
        </div>
      </header>

      {/* Error Hero */}
      <main className="max-w-xl mx-auto px-6 py-20 text-center space-y-6 my-auto">
        <div className="w-20 h-20 bg-brand-red/10 text-brand-red rounded-none flex items-center justify-center mx-auto">
          <AlertCircle className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold font-display uppercase tracking-widest text-brand-red block">
          Application Error
        </span>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
          Something went wrong
        </h1>

        <p className="text-slate-600 font-sans text-base leading-relaxed">
          An unexpected error occurred while loading this page. You can try refreshing the page or returning to the homepage.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-8 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold font-display text-xs uppercase tracking-widest transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="px-8 py-3.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold font-display text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-8 border-t border-white/10 text-center text-xs text-white/60">
        <p>© 2026 Elizalde Mathematics Competition. All rights reserved.</p>
      </footer>
    </div>
  );
}
