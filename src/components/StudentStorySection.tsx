"use client";
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function StudentStorySection() {
  return (
    <section id="student-story" className="py-14 lg:py-24 bg-brand-bg border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.08em] text-brand-red uppercase">
            A Student's Story
          </span>
          <h2 className="font-display font-semibold text-[26px] lg:text-[36px] text-brand-dark mt-2 tracking-tight leading-[1.15]">
            "I didn't know I was good at this until EMC."
          </h2>
        </div>

        <div className="bg-white rounded-none p-8 md:p-12 shadow-xl shadow-slate-100/50 border border-slate-200/50 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-none blur-2xl opacity-70 -z-0" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-red/5 rounded-none blur-3xl opacity-75 -z-0" />

          {/* Student Photo */}
          <div className="relative shrink-0 z-10">
            <div className="w-48 h-48 rounded-none overflow-hidden shadow-lg border-4 border-white ring-1 ring-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Maimunah Salako"
                fill
                sizes="(max-width: 768px) 192px, 192px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Tag Badge */}
            <span className="absolute -bottom-3 right-4 px-3 py-1 bg-brand-red text-white font-display text-[10px] font-bold tracking-wider rounded-none uppercase shadow-md shadow-brand-red/20">
              Past Competitor
            </span>
          </div>

          {/* Quote & Info */}
          <div className="flex-grow space-y-6 z-10 relative">
            <div className="absolute -top-6 -left-4 text-brand-red/10">
              <Quote className="h-16 w-16 rotate-180 fill-current opacity-40" />
            </div>

            <p className="text-slate-700 text-[15px] lg:text-[18px] leading-[1.6] italic relative font-sans">
              "I used to think math was just about copying formulas from the board. During the EMC team challenge, our group had to model water purification layouts using geometry. It clicked for the first time: math is a language to shape reality. Winning third place was amazing, but discovering I was a problem solver changed what I believe I can do with my life."
            </p>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-display font-semibold text-[16px] text-brand-dark leading-tight">
                  Maimunah Salako
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Greensprings School, Anthony Campus • Honey Bee Competitor
                </p>
              </div>
              
              <div className="hidden sm:block">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-brand-red/10 text-brand-red text-xs font-semibold">
                  <span className="w-2 h-2 rounded-none bg-brand-red animate-pulse" />
                  Now pursuing STEM at University
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

