"use client";
import React from "react";
import CountUp from "./CountUp";
import { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

export default function ImpactSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-brand-green text-white overflow-hidden">
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
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <StaggerItem className="py-6 md:py-0 flex flex-col items-center justify-center">
            <h3 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-3">
              <CountUp end={5000} />+
            </h3>
            <p className="font-sans text-white/80 font-semibold uppercase tracking-[0.15em] text-sm">
              Global Participants
            </p>
          </StaggerItem>
          <StaggerItem className="py-6 md:py-0 flex flex-col items-center justify-center">
            <h3 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-3">
              <CountUp end={700} />+
            </h3>
            <p className="font-sans text-white/80 font-semibold uppercase tracking-[0.15em] text-sm">
              Schools Applied
            </p>
          </StaggerItem>
          <StaggerItem className="py-6 md:py-0 flex flex-col items-center justify-center">
            <h3 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-3">
              <CountUp end={35} />+
            </h3>
            <p className="font-sans text-white/80 font-semibold uppercase tracking-[0.15em] text-sm">
              Countries Covered
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
