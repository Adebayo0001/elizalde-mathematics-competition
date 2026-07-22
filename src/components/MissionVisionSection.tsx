"use client";
import React from "react";
import Image from "next/image";
import { Compass, Eye, Award } from "lucide-react";
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
                  src="/images/IMG_20260720_114534_965.jpg.jpeg"
                  alt="Elizalde Mathematics Competition students"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Smaller overlapping image (Logo) — bottom-right offset */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 lg:-bottom-8 lg:-right-8 w-[40%] sm:w-[35%] lg:w-[30%] rounded-full bg-white overflow-hidden shadow-2xl border-4 border-white z-[2] aspect-square flex items-center justify-center"
            >
              <Image
                src="https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/457328701_809259274749009_6911267050332238021_n.jpg?stp=dst-jpg_tt6&cstp=mx800x600&ctp=s800x600&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0hH4pGY0TKz-AgHnaBc5NUfjhA2ens89R-OEDZ6ezz9WI0wQ8O-R6-U_qmt87jkpX3S-OgoKZj_lDTms187fs&_nc_ohc=wGqlvuWqL3IQ7kNvwFb-WKz&_nc_oc=AdrMBVZbKNQ15d7VxgE9K4gkHYovynwkl_d-6Jr5nWngNhP6xZBIvdujzyZ6a7fxqKGlij3Y6OoMWJIb79ekSdHm&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=gLnLqLsgubnM2qEEP-owZQ&_nc_ss=7d2a8&oh=00_AQAmeys63sLzx_DIp2b6qf0TKaiCCXHIQ0eT3QKuCbaHzg&oe=6A61D051"
                alt="Elizalde Mathematics Competition Logo"
                fill
                sizes="(max-width: 1024px) 40vw, 30vw"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>

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
              <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark tracking-tight leading-[1.12]">
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
                <div className="h-10 w-10 rounded-none bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
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
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-brand-gold">
                <Award className="h-4 w-4 text-brand-gold" />
                <span>A Borderless Academic Network</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

