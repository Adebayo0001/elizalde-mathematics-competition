"use client";
import React from "react";
import { Calendar, Users, Award, ShieldAlert, Sparkles, Trophy, BookOpen, Lightbulb } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

interface CalendarEvent {
  date: string;
  title: string;
  description: string;
  audience: string;
  icon: React.ReactNode;
  badge: string;
  imageAccent?: string;
}

const timelineEvents: CalendarEvent[] = [
  {
    date: "Mar 18–19, 2027",
    title: "Pre-Olympiad Conference",
    description: "Virtual preparation sessions, practice problem workshops, and exclusive teacher mentoring blueprints. Designed to foster confidence early.",
    audience: "Students & Teachers",
    icon: <Users className="h-5 w-5" />,
    badge: "Preparation Phase",
    imageAccent: "/images/IMG_20260720_114422_425.jpg.jpeg"
  },
  {
    date: "Apr 27, 2027",
    title: "Registration Deadline",
    description: "Final date for schools and coaches to submit student rosters, select participating categories, and lock team registration data.",
    audience: "Teachers & Coordinators",
    icon: <ShieldAlert className="h-5 w-5" />,
    badge: "Critical Deadline",
    imageAccent: "/images/IMG_20260720_114426_250.jpg.jpeg"
  },
  {
    date: "May 08, 2027",
    title: "National Round",
    description: "Concurrent paper-based exams supervised in official local school test centers across all participating country networks.",
    audience: "All Students",
    icon: <Calendar className="h-5 w-5" />,
    badge: "Testing Phase",
    imageAccent: "/images/IMG_20260720_114441_329.jpg.jpeg"
  },
  {
    date: "Aug 2–9, 2027 (Tentative)",
    title: "London Final",
    description: "The main international stage. Finalists gather in London for the written championship, cooperative math defense projects, and world medals.",
    audience: "Global Finalists",
    icon: <Trophy className="h-5 w-5" />,
    badge: "Tentative Date",
    imageAccent: "/images/IMG_20260720_114456_569.jpg.jpeg"
  },
];

export default function TimelineCalendarSection() {
  return (
    <section id="roadmap" className="py-16 lg:py-28 bg-white text-brand-dark relative overflow-hidden border-y border-slate-200">
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

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight leading-[1.12]">
            The Olympiad Roadmap — EMC 2026
          </h2>
          <div className="h-1.5 w-12 bg-brand-lime mx-auto mt-6 rounded-none" />
          <p className="font-sans mt-6 text-sm sm:text-base leading-[1.6] text-slate-600">
            A comprehensive milestone tracker for both teachers coordinating groups and students training for their moment on the world stage.
          </p>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* The Center Line (hidden on mobile, centered on md+) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-lime/30 -ml-px" />

          <StaggerContainer className="space-y-16 lg:space-y-24">
            {timelineEvents.map((event, index) => {
              return (
                <StaggerItem key={index} className="relative flex flex-col md:flex-row items-stretch justify-between w-full group">
                  
                  {/* The Timeline Node (Center dot) */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-none bg-white border-2 border-brand-lime shadow-md shadow-brand-lime/20 -translate-x-1/2 flex items-center justify-center z-20 group-hover:scale-125 transition-transform duration-500">
                    <div className="w-2.5 h-2.5 rounded-none bg-brand-lime animate-pulse" />
                  </div>

                  {/* Left Side: Event Cards Aligned */}
                  <div className="w-full pl-16 md:pl-0 md:w-[45%] md:pr-12 md:text-right flex flex-col items-start md:items-end">
                    <div className="bg-white rounded-none p-6 sm:p-8 border border-slate-200 shadow-xl hover:shadow-2xl hover:border-brand-lime/50 transition-all duration-300 w-full h-full relative overflow-hidden text-left flex flex-col justify-center">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-lime/5 rounded-none -mr-4 -mt-4 transform rotate-12 pointer-events-none" />
                      
                      <div className="space-y-3 relative z-10">
                        <span className="inline-block text-[10px] font-bold font-display uppercase bg-brand-lime/10 text-brand-green px-2.5 py-1 rounded-none border border-brand-lime/20 mb-1">
                          {event.badge}
                        </span>
                        <div className="text-slate-900 font-display font-bold text-xl sm:text-2xl tracking-tight">
                          {event.date}
                        </div>
                        
                        <div className="flex items-center gap-3 pt-2">
                          <div className="text-brand-green bg-brand-lime/10 p-2 rounded-none border border-brand-lime/20">
                            {event.icon}
                          </div>
                          <h3 className="font-display font-semibold text-lg sm:text-xl text-brand-dark group-hover:text-brand-green transition-colors tracking-tight leading-[1.2]">
                            {event.title}
                          </h3>
                        </div>

                        <p className="text-sm text-slate-600 font-sans leading-[1.6] pt-2">
                          {event.description}
                        </p>

                        <div className="pt-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500 font-sans">
                          <span className="text-brand-green">Target Audience:</span>
                          <span className="bg-slate-50 px-2 py-0.5 rounded-none text-slate-600 border border-slate-200">{event.audience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Images Aligned */}
                  <div className="w-full pl-16 md:pl-0 md:w-[45%] mt-8 md:mt-0 md:pl-12">
                    <div className="hidden md:flex w-full h-full min-h-[250px] items-stretch justify-center relative">
                      {event.imageAccent && (
                        <div className="relative w-full h-full overflow-hidden rounded-none shadow-xl border border-slate-200 group-hover:-translate-y-1 transition-transform duration-500">
                          <img src={event.imageAccent} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 border-[4px] border-white/20 pointer-events-none mix-blend-overlay" />
                        </div>
                      )}
                    </div>
                  </div>

                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
