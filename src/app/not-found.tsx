import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import Logo from "../components/Logo";
import "../index.css";

export default function NotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans text-brand-dark bg-brand-bg">
        <div className="min-h-screen flex flex-col justify-between">
          {/* Header Navbar */}
          <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center">
              {/* Brand/Logo */}
              <Link href="/" className="flex items-center focus:outline-none">
                <Logo className="h-14 w-48 sm:h-16 sm:w-56" />
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
      </body>
    </html>
  );
}
