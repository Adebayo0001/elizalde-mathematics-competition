"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Lightbulb, BookOpen, Search } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const MascotSection = () => {
  return (
    <section className="py-16 lg:py-28 bg-white overflow-hidden relative">
      {/* Subtle background pattern/blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Visual Story (Owlbert Image) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center lg:justify-center">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative">
                
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                    <Image 
                      src="/images/emc--mascot.jpeg" 
                      alt="Owlbert - The EMC Mascot" 
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 320px, 400px"
                      quality={100}
                      unoptimized={true}
                    />
                  </div>
                </motion.div>
                
                {/* Little floating elements */}
                <motion.div 
                  animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
                  className="absolute top-10 -left-6 bg-white p-2 rounded-full shadow-lg text-brand-gold"
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col lg:pl-8">
            <ScrollReveal direction="right" delay={0.2}>

              
              <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mb-5 tracking-tight leading-[1.12]">
                Meet <span className="text-brand-blue">Owlbert</span> – <br className="hidden sm:block" />
                The EMC Mascot!
              </h2>
              
              <div className="space-y-4 text-slate-500 font-sans text-base sm:text-lg leading-[1.6] text-justify sm:text-left">
                <p>
                  Say hello to Owlbert, the wise and curious owl who inspires every young mathematician at the Elizalde Mathematics Competition!
                </p>
                <p>
                  With eyes sharp for patterns and a mind that never stops solving, Owlbert represents the true spirit of EMC. He reminds us that mathematics is an adventure of discovery.
                </p>
              </div>


            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MascotSection;
