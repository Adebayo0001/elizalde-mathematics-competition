"use client";
import React from "react";
import Image from "next/image";
import { Compass, Eye, Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-16 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Split Layout — Stacked Images Left + Flowing Text Right (Reference Pattern #3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Stacked/Overlapping Images */}
          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-5 relative">
            {/* Large primary image */}
            <div className="rounded-none overflow-hidden shadow-xl relative z-[1]">
              <div className="aspect-[3/4] lg:aspect-[3/4]">
                <Image
                  src="/images/EMC-global-winner.jpeg"
                  alt="Elizalde Mathematics Competition students"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating High-Contrast White Glass Card */}
            <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md text-brand-dark p-3.5 sm:p-4 border-l-4 border-brand-gold shadow-2xl border border-slate-200/80 flex items-center gap-3.5 z-20">
              <div className="h-10 w-10 bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-md">
                <Trophy className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold font-display text-brand-red uppercase tracking-widest block">
                  Championship Spotlight
                </span>
                <span className="font-display font-extrabold text-xs sm:text-sm text-brand-dark tracking-tight block">
                  EMC UK Global Winner 2026
                </span>
              </div>
            </div>

            {/* Brand badge floating on images */}
            <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-6 h-14 w-14 rounded-none bg-brand-blue text-white flex items-center justify-center shadow-xl z-[3]">
              <Compass className="h-6 w-6 text-white" />
            </div>
          </ScrollReveal>

          {/* Right Column: Flowing Text (Mission + Vision combined) */}
          <ScrollReveal delay={0.2} className="lg:col-span-7 space-y-8 lg:pl-6">
            <div className="space-y-4">
              <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-blue uppercase block">
                Vision & Mission
              </span>
              <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mt-3 tracking-tight leading-[1.12]">
                Beyond Exams
              </h2>
            </div>

            <p className="text-slate-500 font-sans text-[15px] lg:text-[16px] leading-[1.6]">
              EMC is more than an exam. It is a catalyst for logical discovery, global friendship, and lifetime confidence in young thinkers.
            </p>

            {/* Mission Text */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-none bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-[17px] lg:text-[18px] text-brand-dark tracking-tight">
                  Our Mission
                </h3>
              </div>
              <p className="text-slate-600 font-sans text-[15px] lg:text-[16px] leading-[1.6] pl-[52px]">
                Nuture talents and provide platforms for mathematical excellence.
              </p>
            </div>

            {/* Vision Text */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-none bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-[17px] lg:text-[18px] text-brand-dark tracking-tight">
                  Our Vision
                </h3>
              </div>
              <p className="text-slate-600 font-sans text-[15px] lg:text-[16px] leading-[1.6] pl-[52px]">
                To Inspire and empower young learners globally through Mathematics - bridging practical problem-solving, creativity, and excellence, while providing opportunities that open pathways toward higher education and international achievement.
              </p>
            </div>

            {/* Bottom tags */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200/60">
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-brand-blue">
                <Award className="h-4 w-4 text-brand-blue" />
                <span>Inspiring Logical Excellence</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-brand-red">
                <Award className="h-4 w-4 text-brand-red" />
                <span>A Borderless Academic Network</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

