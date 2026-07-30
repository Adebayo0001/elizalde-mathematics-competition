"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function GlobalHeader() {
  const router = useRouter();
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRegisterClick = () => {
    if (isRegisterLoading) return;
    setIsRegisterLoading(true);
    router.push("/register");
  };

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Roadmap", href: "/#roadmap" },
    { name: "Spotlight", href: "/#wall-of-mathematicians" },
    { name: "News & Updates", href: "/news" },
    { name: "Sample Papers", href: "/#sample-papers" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center gap-3 text-brand-dark focus:outline-none hover:opacity-90 transition-opacity">
          <Logo className="h-16 w-16 text-brand-blue" />
          <span className="font-display font-extrabold text-[1.15rem] sm:text-xl text-brand-dark tracking-wide uppercase mt-1">
            EMC OLYMPIAD
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-8 text-[15px] font-semibold font-display tracking-wide text-slate-700">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand-blue transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-4">
          {/* Register Button (Desktop & Mobile) */}
          <button
            type="button"
            onClick={handleRegisterClick}
            disabled={isRegisterLoading}
            id="nav-register-btn"
            className="px-5 py-2 sm:px-6 sm:py-2.5 bg-brand-blue hover:bg-brand-blue/90 disabled:opacity-80 disabled:cursor-wait text-white font-semibold rounded-none text-xs uppercase tracking-widest transition-all shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue cursor-pointer inline-flex items-center justify-center gap-2 min-w-[6rem] sm:min-w-[7.5rem]"
          >
            {isRegisterLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-white" />
                <span className="hidden sm:inline">Loading...</span>
              </>
            ) : (
              "Register"
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="xl:hidden p-2 text-slate-600 hover:text-brand-blue transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden overflow-hidden bg-white border-b border-slate-200 shadow-md absolute w-full left-0 top-20"
          >
            <nav className="flex flex-col py-4 px-6 gap-2 bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-base font-semibold font-display tracking-wide text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition-colors border-l-4 border-transparent hover:border-brand-blue"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
