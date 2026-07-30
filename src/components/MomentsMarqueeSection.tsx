"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";

const MOMENT_IMAGES = [
  "/images/Young Master Challenge-11.jpg.jpeg",
  "/images/EMC Schools visit B-5.jpg.jpeg",
  "/images/IMG_20260720_114514_419.jpg.jpeg",
  "/images/278020.jpg.jpeg",
  "/images/Young Master Challenge-135.jpg (1).jpeg",
  "/images/EMC Schools visit B-12.jpg.jpeg",
  "/images/276091.jpg.jpeg",
  "/images/IMG_20260720_114441_329.jpg.jpeg",
  "/images/Young Master Challenge-357.jpg.jpeg",
  "/images/EMC Schools visit B-6.jpg.jpeg",
  "/images/IMG_20260720_114546_209.jpg.jpeg",
  "/images/276442.jpg.jpeg",
  "/images/Young Master Challenge-243.jpg.jpeg",
  "/images/278036.jpg.jpeg",
  "/images/IMG_20260720_114508_069.jpg.jpeg",
  "/images/EMC Schools visit B-8.jpg.jpeg",
  "/images/Young Master Challenge-16.jpg.jpeg",
  "/images/278027.jpg.jpeg",
  "/images/IMG_20260720_114534_965.jpg.jpeg",
  "/images/Young Master Challenge-360.jpg.jpeg",
  "/images/278320.jpg.jpeg",
  "/images/IMG_20260720_114530_719.jpg.jpeg",
  "/images/EMC Schools visit B-13.jpg.jpeg",
  "/images/Young Master Challenge-358.jpg.jpeg",
  "/images/IMG_20260720_114422_425.jpg.jpeg",
  "/images/276090.jpg.jpeg",
  "/images/Young Master Challenge-13.jpg.jpeg",
  "/images/IMG_20260720_114552_862.jpg.jpeg",
  "/images/278035.jpg.jpeg",
  "/images/IMG_20260720_114540_416.jpg.jpeg",
  "/images/Young Master Challenge-359.jpg.jpeg",
  "/images/EMC Schools visit B-11.jpg.jpeg",
  "/images/IMG_20260720_114502_765.jpg.jpeg",
  "/images/IMG-20260621-WA0020.jpg.jpeg"
];

// Duplicate the array to create a seamless loop
const marqueeImages = [...MOMENT_IMAGES, ...MOMENT_IMAGES];

export default function MomentsMarqueeSection() {
  const [contentWidth, setContentWidth] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!measureRef.current) return;
    const observer = new ResizeObserver((entries) => {
      // The container holds 2x images, so half of it is the loop width
      setContentWidth(entries[0].contentRect.width / 2);
    });
    observer.observe(measureRef.current);
    return () => observer.disconnect();
  }, []);

  const baseX = useMotionValue(0);
  
  // Wrap the offset between -contentWidth and 0 for seamless infinite scrolling
  const x = useTransform(baseX, (v) => {
    if (contentWidth === 0) return 0;
    return wrap(-contentWidth, 0, v);
  });

  const velocity = 1; // Base speed (pixels per frame)

  useAnimationFrame((t, delta) => {
    if (isDragging || contentWidth === 0) return;
    
    let moveBy = velocity * (delta / 16);
    if (isHovered) {
      moveBy *= 0.2; // Slow down on hover
    }
    
    baseX.set(baseX.get() - moveBy);
  });

  const handleDrag = (event: any, info: any) => {
    // Add the drag delta to the motion value
    baseX.set(baseX.get() + info.delta.x);
  };

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

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10 lg:mb-14 text-center relative z-20">
        <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-gold uppercase block">
          The Journey
        </span>
        <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-white mt-3 tracking-tight leading-[1.12]">
          Unforgettable Moments
        </h2>
      </div>

      <div 
        className="relative flex w-full overflow-hidden items-center group/marquee cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setIsDragging(false); }}
      >
        <motion.div
          ref={measureRef}
          className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0 w-max"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onDrag={handleDrag}
        >
          {marqueeImages.map((src, index) => (
            <div
              key={index}
              className="relative h-64 sm:h-72 lg:h-80 w-[300px] sm:w-[400px] lg:w-[450px] shrink-0 overflow-hidden border border-white/10 bg-white/5 group/card rounded-sm"
            >
              <Image
                src={src}
                alt="EMC Event Moment"
                fill
                draggable={false}
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 450px"
                className="object-cover transform group-hover/card:scale-105 transition-transform duration-700 ease-out pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
