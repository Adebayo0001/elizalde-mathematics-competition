"use client";
import React from "react";
import { Compass, Cpu, Landmark, Globe } from "lucide-react";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-12 lg:py-16 bg-brand-bg border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.08em] text-slate-400 uppercase">
          In Collaboration With
        </span>
        
        {/* Monochromatic Logo Grid */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60">
          {/* Logo 1 */}
          <div className="flex items-center gap-2 text-slate-500 hover:text-brand-teal hover:opacity-100 transition-all duration-300">
            <Globe className="h-6 w-6 shrink-0" />
            <div className="text-left leading-none">
              <div className="font-display font-black text-xs uppercase tracking-wider">
                Global Math
              </div>
              <div className="font-display text-[9px] uppercase tracking-widest">
                Alliance
              </div>
            </div>
          </div>

          {/* Logo 2 */}
          <div className="flex items-center gap-2 text-slate-500 hover:text-brand-teal hover:opacity-100 transition-all duration-300">
            <Landmark className="h-6 w-6 shrink-0" />
            <div className="text-left leading-none">
              <div className="font-display font-black text-xs uppercase tracking-wider">
                Sofia Science
              </div>
              <div className="font-display text-[9px] uppercase tracking-widest">
                Institute
              </div>
            </div>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center gap-2 text-slate-500 hover:text-brand-teal hover:opacity-100 transition-all duration-300">
            <Cpu className="h-6 w-6 shrink-0" />
            <div className="text-left leading-none">
              <div className="font-display font-black text-xs uppercase tracking-wider">
                STEM Federation
              </div>
              <div className="font-display text-[9px] uppercase tracking-widest">
                Research Hub
              </div>
            </div>
          </div>

          {/* Logo 4 */}
          <div className="flex items-center gap-2 text-slate-500 hover:text-brand-teal hover:opacity-100 transition-all duration-300">
            <Compass className="h-6 w-6 shrink-0" />
            <div className="text-left leading-none">
              <div className="font-display font-black text-xs uppercase tracking-wider">
                Olympiad
              </div>
              <div className="font-display text-[9px] uppercase tracking-widest">
                Foundation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
