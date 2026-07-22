"use client";
import React, { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
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
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-green uppercase">
            Testimonials
          </span>
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mt-3 tracking-tight leading-[1.12]">
            What Teachers, Students, & Parents Say
          </h2>
        </ScrollReveal>

        {/* Video Testimonial for Teacher */}
        <ScrollReveal className="max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="bg-white p-4 lg:p-6 border border-slate-200 shadow-xl relative overflow-hidden group">
             {/* Decorative accents */}
             <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-blue" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pl-2">
               <div className="aspect-video bg-slate-900 relative">
                 <video 
                   src="/images/testimonials.mp4" 
                   controls 
                   className="w-full h-full object-cover"
                   poster="/images/IMG_20260720_114502_765.jpg.jpeg"
                 />
               </div>
               <div className="py-2 pr-4">
                 <div className="flex items-center gap-2 mb-4">
                   <div className="flex gap-1">
                     <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                     <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                     <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                     <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                     <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                   </div>
                 </div>
                 <p className="font-sans text-[14px] lg:text-[15px] leading-[1.65] text-slate-600 italic mb-6">
                   "EMC has completely transformed the mathematics culture in our department. Our students no longer see math as dry formulas on a chalkboard, but as a collaborative, highly exciting sport on a global court."
                 </p>
                 <div>
                   <h4 className="font-display font-semibold text-[15px] lg:text-[16px] text-brand-dark">Dr. Sarah Jenkins</h4>
                   <p className="text-xs font-sans font-medium text-slate-500">Head of Mathematics & Senior Coach</p>
                   <p className="text-[10px] font-bold font-display uppercase tracking-wider text-brand-green mt-1">Oakwood High School, UK</p>
                 </div>
               </div>
             </div>
          </div>
        </ScrollReveal>


        {/* Carousel Cards Container */}
        <div className="relative">
          {/* Desktop: show all cards in a row, with active one highlighted */}
          <StaggerContainer className="hidden md:grid md:grid-cols-3 gap-8 items-stretch">
            {testimonials.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <StaggerItem
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-none p-6 lg:p-8 border transition-all duration-500 flex flex-col justify-between relative cursor-pointer ${
                    isActive
                      ? "bg-white border-brand-green/30 shadow-xl scale-[1.03] z-10"
                      : "bg-white/60 border-slate-200/50 hover:border-brand-green/20 shadow-xs hover:shadow-md opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* Quote Content */}
                  <div className="space-y-5">
                    {/* 5-Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>

                    <p className="font-sans text-[14px] lg:text-[15px] leading-[1.65] text-slate-600 italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-6 border-t border-slate-100 mt-6 space-y-1">
                    <h4 className="font-display font-semibold text-[15px] lg:text-[16px] text-brand-dark">
                      {item.author}
                    </h4>
                    <p className="text-xs font-sans font-medium text-slate-500">
                      {item.role}
                    </p>
                    <p className="text-[10px] font-bold font-display uppercase tracking-wider text-brand-green">
                      {item.location}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Mobile: Single card carousel */}
          <div className="md:hidden">
            <ScrollReveal className="rounded-none p-6 bg-white border border-brand-green/30 shadow-xl flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="font-sans text-[14px] leading-[1.65] text-slate-600 italic">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 space-y-1">
                <h4 className="font-display font-semibold text-[15px] text-brand-dark">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-xs font-sans font-medium text-slate-500">
                  {testimonials[activeIndex].role}
                </p>
                <p className="text-[10px] font-bold font-display uppercase tracking-wider text-brand-green">
                  {testimonials[activeIndex].location}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Navigation Arrows - Mobile */}
          <div className="md:hidden flex items-center justify-between mt-6">
            <button
              onClick={goPrev}
              className="h-10 w-10 rounded-none border border-slate-200 flex items-center justify-center hover:bg-brand-green/10 hover:border-brand-green/30 transition-all cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>
            <button
              onClick={goNext}
              className="h-10 w-10 rounded-none border border-slate-200 flex items-center justify-center hover:bg-brand-green/10 hover:border-brand-green/30 transition-all cursor-pointer"
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Dot Pagination (Reference Pattern) */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-none transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "h-3 w-3 bg-brand-green dot-active"
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

