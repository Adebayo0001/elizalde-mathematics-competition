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
        
        {/* Header Section */}
        <ScrollReveal className="mb-12 lg:mb-16 text-center lg:text-left max-w-2xl">
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-slate-900 mt-3 tracking-tight leading-[1.12] mb-6">
            The Competition Structure
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-[1.6]">
            EMC is built around rigorous academic standards that scale from local test environments to an international, collaborative championship.
          </p>
        </ScrollReveal>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          
          {/* Column 1: Image */}
          <ScrollReveal className="relative w-full aspect-square lg:aspect-[4/5] self-start rounded-none overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="/images/EMC-global-winner_2.jpeg"
              alt="EMC global winner"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white leading-[1.2] tracking-tight">
                From Local Excellence to Global Collaboration.
              </h3>
            </div>
          </ScrollReveal>

          {/* Stagger Container for the 2 Cards */}
          <StaggerContainer className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Stage 1: National Round */}
            <StaggerItem className="h-full bg-white/95 backdrop-blur-md rounded-none p-6 lg:p-8 border border-slate-200 shadow-lg relative overflow-hidden group hover:border-brand-blue/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300">
              {/* Huge '1' in background */}
              <div className="absolute -top-6 -right-4 lg:-top-8 lg:-right-6 text-[120px] lg:text-[160px] font-display font-bold text-slate-900/[0.03] leading-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                1
              </div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="text-[10px] lg:text-[11px] font-bold font-display uppercase bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-none border border-brand-blue/20">
                    Local Level
                  </span>
                </div>

                <h3 className="font-display font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-[1.1] mb-4">
                  The National Round
                </h3>

                <p className="text-slate-600 font-sans text-sm leading-[1.6] mb-8">
                  Held concurrently across 35+ partner nations inside official local test centers. It is a paper-based evaluation designed by the international jury of the EMC.
                </p>

                {/* Core Features */}
                <div className="flex flex-col gap-5 pt-6 border-t border-slate-100 flex-grow">
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 shrink-0 rounded-none bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[14px] font-bold text-slate-900 mb-0.5">Paper-Based Exam</span>
                      <span className="block text-xs text-slate-600 font-sans leading-snug">90 mins of structured logic, geometry, algebra.</span>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 shrink-0 rounded-none bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                      <Landmark className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[14px] font-bold text-slate-900 mb-0.5">Official Hubs</span>
                      <span className="block text-xs text-slate-600 font-sans leading-snug">Coordinated locally with verified representatives.</span>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 shrink-0 rounded-none bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[14px] font-bold text-slate-900 mb-0.5">Math Projects</span>
                      <span className="block text-xs text-slate-600 font-sans leading-snug">Teams present models of modern engineering.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-500 font-semibold font-sans">
                  <span className="text-slate-600">National Qualification Required</span>
                  <span className="text-brand-blue flex items-center gap-1 font-display font-bold uppercase tracking-wider">
                    May 08, 2027
                    <ChevronRight className="text-brand-blue h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </StaggerItem>

            {/* Stage 2: Global Round */}
            <StaggerItem className="h-full bg-white/95 backdrop-blur-md rounded-none p-6 lg:p-8 border border-slate-200 shadow-lg relative overflow-hidden group hover:border-brand-red/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-red/10 transition-all duration-300">
              {/* Huge '2' in background */}
              <div className="absolute -top-6 -right-4 lg:-top-8 lg:-right-6 text-[120px] lg:text-[160px] font-display font-bold text-slate-900/[0.03] leading-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                2
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="text-[10px] lg:text-[11px] font-bold font-display uppercase bg-brand-red/10 text-brand-red px-3 py-1 rounded-none border border-brand-red/20">
                    International
                  </span>
                </div>

                <h3 className="font-display font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-[1.1] mb-4">
                  The Global Round
                </h3>

                <p className="text-slate-600 font-sans text-sm leading-[1.6] mb-8">
                  The pinnacle championship. Top qualifying candidates move beyond standard tests, requiring teams to construct dynamic solutions to multi-variable challenges.
                </p>

                {/* Core Features */}
                <div className="flex flex-col gap-5 pt-6 border-t border-slate-100 flex-grow">
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 shrink-0 rounded-none bg-brand-red/10 text-brand-red flex items-center justify-center">
                      <Globe className="!text-brand-red h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[14px] font-bold text-slate-900 mb-0.5">World Stage</span>
                      <span className="block text-xs text-slate-600 font-sans leading-snug">Uniting students from across the globe.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-500 font-semibold font-sans">
                  <span className="text-slate-600">Invitational Placement only</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-red font-display font-bold uppercase tracking-wider">
                      17-24 July, 2027 <span className="text-[10px] text-slate-500 lowercase ml-1">or</span>
                    </span>
                    <span className="text-brand-red flex items-center gap-1 font-display font-bold uppercase tracking-wider">
                      2-9 August, 2027
                      <ChevronRight className="!text-brand-red h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
            
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
