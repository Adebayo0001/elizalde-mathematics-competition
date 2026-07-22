"use client";
import React, { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "My experience with EMC was truly an incredible experience. I have been inspired to embrace bigger challenges in Mathematics and be more creative in all aspect of LIFE. Thank YOU, EMC!",
    author: "ALVARO AGHENTA",
    role: "Student Competitor",
    location: "Nigeria",
    rating: 5,
  },
  {
    quote: "I had a wonderful time at the Elizalde Mathematics Competition, EMC challenge me, helped me learn new things, and improved both my math and presentation skills. It was truly a stimulating experience. I enjoyed being at EMC, and I am looking foward to join again this YEAR!",
    author: "IKECHUKWU OGALA",
    role: "Student Competitor",
    location: "Nigeria",
    rating: 5,
  },
  {
    quote: "EMC Modelling round was one unforgettable experience at the Elizalde Mathematics Competition series, to my TEAMMATES and our mentor, I believe we all had a wonderful and impactful round. Thank YOU, EMC!",
    author: "Isley George",
    role: "Student Competitor",
    location: "USA",
    rating: 5,
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-16 lg:py-28 bg-brand-bg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Centered Header (Reference Pattern #4) */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-red uppercase">
            Testimonials
          </span>
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mt-3 tracking-tight leading-[1.12]">
            What Teachers, Students, & Parents Say
          </h2>
        </ScrollReveal>

        {/* Video Testimonial for Teacher - Standalone Video */}
        <ScrollReveal className="max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="bg-white p-2 lg:p-3 border border-slate-200 shadow-xl relative overflow-hidden group">
            <div className="aspect-video bg-slate-900 relative">
              <video 
                src="/images/testimonials.mp4" 
                controls 
                preload="none"
                className="w-full h-full object-cover"
                poster="/images/IMG_20260720_114502_765.jpg.jpeg"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel Cards Container */}
        <div className="relative max-w-4xl mx-auto px-4 md:px-12">
          {/* Sliding Carousel */}
          <ScrollReveal className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex flex-col justify-between text-center px-4"
              >
                <div className="space-y-6 flex-grow flex flex-col justify-center">
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-slate-700 italic max-w-2xl mx-auto">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </div>
                <div className="pt-8 mt-8 space-y-1">
                  <h4 className="font-display font-semibold text-[16px] md:text-[18px] text-brand-dark uppercase">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-sm font-sans font-medium text-slate-500">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-[11px] font-bold font-display uppercase tracking-wider text-brand-red mt-2">
                    {testimonials[activeIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>

        {/* Dot Pagination (Reference Pattern) */}
        <div className="flex items-center justify-center gap-2.5 mt-8 md:mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-none transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "h-3 w-3 bg-brand-red dot-active"
                  : "h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

