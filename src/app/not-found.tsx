import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import Logo from "../components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark flex flex-col justify-between">
      {/* Header Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <div className="leading-none">
              <span className="font-display font-extrabold text-lg text-brand-dark tracking-tight block">
                EMC 2026
              </span>
              <span className="text-[10px] font-bold font-display text-brand-blue uppercase tracking-widest block mt-0.5">
                Mathematics Competition
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* Center 404 Hero */}
      <main className="max-w-2xl mx-auto px-6 py-20 text-center space-y-6 my-auto">
        <div className="w-20 h-20 bg-brand-blue/10 text-brand-blue rounded-none flex items-center justify-center mx-auto">
          <BookOpen className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold font-display uppercase tracking-widest text-brand-blue block">
          404 — Page Not Found
        </span>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
          Looking for Something Specific?
        </h1>

        <p className="text-slate-600 font-sans text-base leading-relaxed">
          The page or news story you requested could not be located. It may have been renamed or moved.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold font-display text-xs uppercase tracking-widest transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/news"
            className="px-8 py-3.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold font-display text-xs uppercase tracking-widest transition-colors"
          >
            Browse Newsroom
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
