"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/EMC-global-winner.jpeg",
  "/images/about-us-2.jpeg",
  "/images/about-us.jpeg",
  "/images/about_us_students.jpg",
  "/images/about_us_students_collaborating.png",
  "/images/math.png.jpg",
];

// Duplicate the array to create a seamless loop
const marqueeImages = [...images, ...images];

export default function MomentsMarqueeSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-blue overflow-hidden relative border-y border-brand-gold/20">
      {/* Subtle Math Formula Texture Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-overlay"
        style={{ 
          backgroundImage: "url('/math-texture.svg')",
          backgroundSize: "1600px 1600px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center"
        }}
      />
      {/* Decorative Gradients for smooth fade out at edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-brand-blue to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-brand-blue to-transparent z-10 pointer-events-none" />

      {/* Optional Top Text */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10 lg:mb-14 text-center relative z-20">
        <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-gold uppercase block">
          The Journey
        </span>
        <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-white mt-3 tracking-tight leading-[1.12]">
          Unforgettable Moments
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden items-center group/marquee">
        <motion.div
          className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeImages.map((src, index) => (
            <div
              key={index}
              className="relative h-64 sm:h-72 lg:h-80 w-[300px] sm:w-[400px] lg:w-[450px] shrink-0 overflow-hidden border border-white/10 bg-white/5 group rounded-sm"
            >
              <img
                src={src}
                alt="EMC Event Moment"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
