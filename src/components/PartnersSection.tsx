"use client";
import React from "react";
import Image from "next/image";
import { Compass, Cpu, Landmark, Globe } from "lucide-react";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 lg:py-24 bg-brand-bg border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-[13px] lg:text-[15px] font-semibold font-display tracking-[0.08em] text-slate-500 uppercase">
          Meet Our Partners
        </span>
        
        {/* Logos Marquee */}
        <div className="mt-12 overflow-hidden relative w-full flex items-center">
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max items-center">
            {/* 4 identical sets for seamless infinite scrolling loop (-50% translation) */}
            {[...Array(4)].map((_, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-16 md:gap-32 pr-16 md:pr-32"
              >
                <div className="relative h-24 w-48 sm:h-32 sm:w-64">
                  <Image
                    src="/images/air-peace.webp"
                    alt="Air Peace"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-24 w-48 sm:h-32 sm:w-64">
                  <Image
                    src="/images/lgo-1-238x300.jpg"
                    alt="Partner Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-24 w-48 sm:h-32 sm:w-64">
                  <Image
                    src="/images/partner-vista.jpeg"
                    alt="Vista Partner"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

