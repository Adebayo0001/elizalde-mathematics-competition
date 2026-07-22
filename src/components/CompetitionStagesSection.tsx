"use client";
import React from "react";
import Image from "next/image";
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
        
        {/* Split-screen grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Image & Intro (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
            
            <ScrollReveal>
              <h2 className="font-display font-semibold text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.05] mb-6">
                The Competition <br className="hidden sm:block" /> Structure
              </h2>
              
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-[1.6] max-w-sm mb-8">
                EMC is built around rigorous academic standards that scale from local test environments to an international, collaborative championship.
              </p>
            </ScrollReveal>

            <ScrollReveal className="relative w-full h-[400px] lg:h-[500px] rounded-none overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/EMC-global-winner_2.jpeg"
                alt="EMC global winner"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-white leading-[1.2] tracking-tight">
                  From Local Excellence to Global Collaboration.
                </h3>
              </div>
            </ScrollReveal>
            
          </div>

          {/* Right Column: Scrolling Stage Cards (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 mt-12 lg:mt-0">
            <StaggerContainer className="flex flex-col gap-6 lg:gap-8">
            
              {/* Stage 1: National Round */}
              <StaggerItem className="bg-white/95 backdrop-blur-md rounded-none p-6 lg:p-8 border border-slate-200 shadow-xl relative overflow-hidden group hover:border-brand-blue/50 transition-all">
                {/* Huge '1' in background */}
                <div className="absolute -top-10 -right-6 lg:-top-14 lg:-right-8 text-[200px] lg:text-[280px] font-display font-bold text-slate-900/[0.03] leading-none pointer-events-none transition-transform group-hover:scale-105">
                  1
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <span className="text-[10px] lg:text-[11px] font-bold font-display uppercase bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-none border border-brand-blue/20">
                        Local Level
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-[1.1]">
                      The National Round
                    </h3>

                    <p className="text-slate-600 font-sans text-sm sm:text-base leading-[1.6] max-w-lg">
                      Held concurrently across 35+ partner nations inside official local test centers. It is a paper-based evaluation designed by the international jury of the EMC.
                    </p>

                    {/* Core Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
                      <div className="space-y-3">
                        <div className="h-10 w-10 rounded-none bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="block text-[15px] font-bold text-slate-900 mb-1">Paper-Based Exam</span>
                          <span className="block text-[13px] text-slate-600 font-sans leading-snug">90 mins of structured logic, geometry, algebra.</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="h-10 w-10 rounded-none bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                          <Landmark className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="block text-[15px] font-bold text-slate-900 mb-1">Official Hubs</span>
                          <span className="block text-[13px] text-slate-600 font-sans leading-snug">Coordinated locally with verified proctors.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 font-semibold font-sans">
                    <span className="text-slate-600">National Qualification Required</span>
                    <span className="text-brand-red flex items-center gap-1 font-display font-bold uppercase tracking-wider">
                      Feb 22, 2026
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </StaggerItem>

              {/* Stage 2: Global Round */}
              <StaggerItem className="bg-white/95 backdrop-blur-md rounded-none p-6 lg:p-8 border border-slate-200 shadow-xl relative overflow-hidden group hover:border-brand-red/50 transition-all">
                {/* Huge '2' in background */}
                <div className="absolute -top-10 -right-6 lg:-top-14 lg:-right-8 text-[200px] lg:text-[280px] font-display font-bold text-slate-900/[0.03] leading-none pointer-events-none transition-transform group-hover:scale-105">
                  2
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <span className="text-[10px] lg:text-[11px] font-bold font-display uppercase bg-brand-red/10 text-brand-red px-3 py-1 rounded-none border border-brand-red/20">
                        International
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-[1.1]">
                      The Global Round
                    </h3>

                    <p className="text-slate-600 font-sans text-sm sm:text-base leading-[1.6] max-w-lg">
                      The pinnacle championship. Top qualifying candidates move beyond standard tests, requiring teams to construct dynamic solutions to multi-variable challenges.
                    </p>

                    {/* Core Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
                      <div className="space-y-3">
                        <div className="h-10 w-10 rounded-none bg-brand-red/10 text-brand-red flex items-center justify-center">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="block text-[15px] font-bold text-slate-900 mb-1">Math Projects</span>
                          <span className="block text-[13px] text-slate-600 font-sans leading-snug">Teams present models of modern engineering.</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="h-10 w-10 rounded-none bg-brand-red/10 text-brand-red flex items-center justify-center">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="block text-[15px] font-bold text-slate-900 mb-1">World Stage</span>
                          <span className="block text-[13px] text-slate-600 font-sans leading-snug">Uniting students from across the globe.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 font-semibold font-sans">
                    <span className="text-slate-600">Invitational Placement only</span>
                    <span className="text-brand-red flex items-center gap-1 font-display font-bold uppercase tracking-wider">
                      May 15-18, 2026
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </StaggerItem>
              
            </StaggerContainer>
          </div>
          
        </div>
      </div>
    </section>
  );
}
