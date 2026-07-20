"use client";
import React from "react";
import { Landmark, Globe, FileText, Users, ChevronRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

export default function CompetitionStagesSection() {
  return (
    <section id="competition-stages" className="relative py-16 lg:py-28 bg-white border-y border-slate-200 overflow-hidden">
      {/* Subtle Math Formula Texture Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{ 
          backgroundImage: "url('/math-texture.svg')",
          backgroundSize: "800px 800px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center"
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <StaggerContainer className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column (Header + Accent Card) */}
          <div className="xl:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* Header Card */}
            <StaggerItem className="bg-white/95 backdrop-blur-md rounded-none -[32px] p-8 lg:p-12 border border-white/20 shadow-xl flex flex-col justify-between h-auto lg:h-[420px]">
              <div>
                <span className="text-[10px] lg:text-[11px] font-bold font-display uppercase tracking-[0.15em] flex items-center gap-2 mb-8">
                  <span className="text-brand-green font-bold">[ 01 ] STRUCTURE</span>
                </span>
                
                <h2 className="font-display font-semibold text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.05] mb-10">
                  The Two Major<br className="hidden sm:block" /> Competitive Stages
                </h2>
                
                <p className="text-slate-600 font-sans text-sm sm:text-base leading-[1.6] max-w-sm">
                  EMC is built around rigorous academic standards that scale from local test environments to an international, collaborative championship.
                </p>
              </div>
            </StaggerItem>

            {/* Accent Card */}
            <StaggerItem className="bg-white/95 backdrop-blur-md rounded-none -[32px] p-8 lg:p-12 border border-white/20 shadow-xl flex items-center justify-center h-auto lg:h-[300px]">
              <h3 className="font-display font-bold text-3xl lg:text-4xl text-slate-900 text-center leading-[1.2] tracking-tight max-w-sm mx-auto">
                From Local Excellence to Global Collaboration.
              </h3>
            </StaggerItem>
          </div>

          {/* Right Column (Stage Cards) */}
          <div className="xl:col-span-7 flex flex-col gap-6 lg:gap-8">
            
            {/* Stage 1: National Round */}
            <StaggerItem className="bg-white/95 backdrop-blur-md rounded-none -[32px] p-8 lg:p-10 border border-white/20 shadow-lg relative overflow-hidden group hover:border-white/40 hover:shadow-xl transition-all flex-1">
              {/* Huge '1' in background */}
              <div className="absolute top-4 right-8 lg:top-6 lg:right-12 text-[140px] lg:text-[180px] font-display font-bold text-slate-900/[0.04] leading-none pointer-events-none">
                1
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <span className="text-[10px] lg:text-[11px] font-bold font-display uppercase bg-brand-lime/10 text-brand-green px-3 py-1 rounded-none border border-brand-lime/20">
                      Local Level
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-[1.2]">
                    The National Round
                  </h3>

                  <p className="text-slate-600 font-sans text-sm sm:text-base leading-[1.6] max-w-lg">
                    Held concurrently across 35+ partner nations inside official local test centers. It is a paper-based evaluation designed by the international jury of the EMC.
                  </p>

                  {/* Core Features - Side by side grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                    <div className="space-y-3">
                      <div className="h-8 w-8 rounded-none bg-brand-lime/10 text-brand-green flex items-center justify-center">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="block text-[14px] font-bold text-slate-900 mb-1">Paper-Based Exam</span>
                        <span className="block text-[13px] text-slate-600 font-sans leading-snug">90 mins of structured logic, geometry, algebra.</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="h-8 w-8 rounded-none bg-brand-lime/10 text-brand-green flex items-center justify-center">
                        <Landmark className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="block text-[14px] font-bold text-slate-900 mb-1">Official Hubs</span>
                        <span className="block text-[13px] text-slate-600 font-sans leading-snug">Coordinated locally with verified proctors.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 font-semibold font-sans">
                  <span className="text-slate-600">National Qualification Required</span>
                  <span className="text-brand-green flex items-center gap-1 font-display font-bold uppercase tracking-wider hover:gap-2 transition-all cursor-pointer">
                    Feb 22, 2026
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </StaggerItem>

            {/* Stage 2: Global Round */}
            <StaggerItem className="bg-white/95 backdrop-blur-md rounded-none -[32px] p-8 lg:p-10 border border-white/20 shadow-lg relative overflow-hidden group hover:border-white/40 hover:shadow-xl transition-all flex-1">
              {/* Huge '2' in background */}
              <div className="absolute top-4 right-8 lg:top-6 lg:right-12 text-[140px] lg:text-[180px] font-display font-bold text-slate-900/[0.04] leading-none pointer-events-none">
                2
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <span className="text-[10px] lg:text-[11px] font-bold font-display uppercase bg-brand-green/10 text-brand-green px-3 py-1 rounded-none border border-brand-green/20">
                      International
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-[1.2]">
                    The Global Round
                  </h3>

                  <p className="text-slate-600 font-sans text-sm sm:text-base leading-[1.6] max-w-lg">
                    The pinnacle championship. Top qualifying candidates move beyond standard tests, requiring teams to construct dynamic solutions to multi-variable challenges.
                  </p>

                  {/* Core Features - Side by side grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                    <div className="space-y-3">
                      <div className="h-8 w-8 rounded-none bg-brand-green/10 text-brand-green flex items-center justify-center">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="block text-[14px] font-bold text-slate-900 mb-1">Math Projects</span>
                        <span className="block text-[13px] text-slate-600 font-sans leading-snug">Teams present models of modern engineering.</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="h-8 w-8 rounded-none bg-brand-green/10 text-brand-green flex items-center justify-center">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="block text-[14px] font-bold text-slate-900 mb-1">World Stage</span>
                        <span className="block text-[13px] text-slate-600 font-sans leading-snug">Uniting students from across the globe.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 font-semibold font-sans">
                  <span className="text-slate-600">Invitational Placement only</span>
                  <span className="text-brand-green flex items-center gap-1 font-display font-bold uppercase tracking-wider hover:gap-2 transition-all cursor-pointer">
                    May 15-18, 2026
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </StaggerItem>

          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

