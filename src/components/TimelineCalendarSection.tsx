"use client";
import React from "react";
import { Calendar, Users, Award, ShieldAlert, Sparkles, Trophy } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

interface CalendarEvent {
  date: string;
  title: string;
  description: string;
  audience: string;
  icon: React.ReactNode;
  badge: string;
}

const timelineEvents: CalendarEvent[] = [
  {
    date: "Oct 12–14, 2025",
    title: "Pre-Olympiad Mentoring Conference",
    description: "Virtual preparation sessions, practice problem workshops, and exclusive teacher mentoring blueprints. Designed to foster confidence early.",
    audience: "Students & Teachers",
    icon: <Users className="h-5 w-5" />,
    badge: "Preparation Phase",
  },
  {
    date: "Nov 30, 2025",
    title: "School Registration Deadline",
    description: "Final date for schools and coaches to submit student rosters, select participating categories, and lock team registration data.",
    audience: "Teachers & Coordinators",
    icon: <ShieldAlert className="h-5 w-5" />,
    badge: "Critical Deadline",
  },
  {
    date: "Feb 22, 2026",
    title: "National Written Round",
    description: "Concurrent paper-based exams supervised in official local school test centers across all participating country networks.",
    audience: "All Students",
    icon: <Calendar className="h-5 w-5" />,
    badge: "Testing Phase",
  },
  {
    date: "Mar 15, 2026",
    title: "Qualification & Invitation Release",
    description: "Official score verification and publication. Elite national bracket qualifiers receive direct invitations to the Global Finals.",
    audience: "Qualified Students",
    icon: <Sparkles className="h-5 w-5" />,
    badge: "Results Release",
  },
  {
    date: "May 15–18, 2026",
    title: "EMC Global Finals (London / Online Hybrid)",
    description: "The main international stage. Finalists gather for the written championship, cooperative math defense projects, and world medals.",
    audience: "Global Finalists",
    icon: <Trophy className="h-5 w-5" />,
    badge: "Championship Stage",
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
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight leading-[1.12]">
            The Olympiad Roadmap — EMC 2026
          </h2>
          <div className="h-1.5 w-12 bg-brand-lime mx-auto mt-4 rounded-none" />
          <p className="font-sans mt-5 text-sm sm:text-base leading-[1.6] text-slate-600">
            A comprehensive milestone tracker for both teachers coordinating groups and students training for their moment on the world stage.
          </p>
        </ScrollReveal>

        {/* Vertical/Timeline Flow */}
        <StaggerContainer className="relative border-l border-brand-lime/20 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
          {timelineEvents.map((event, index) => (
            <StaggerItem key={index} className="relative group">
              {/* Vertical timeline node indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-6 w-6 rounded-none bg-white border-2 border-brand-lime flex items-center justify-center shadow-md shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                <div className="h-2 w-2 rounded-none bg-brand-lime" />
              </div>

              {/* Event card layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white rounded-none p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-lime/30 transition-all duration-300">
                
                {/* Date & Badge Block */}
                <div className="md:col-span-4 space-y-2">
                  <div className="text-slate-900 font-display font-bold text-lg sm:text-xl">
                    {event.date}
                  </div>
                  <span className="inline-block text-[10px] font-bold font-display uppercase bg-brand-lime/10 text-brand-green px-2.5 py-1 rounded-none border border-brand-lime/20">
                    {event.badge}
                  </span>
                </div>

                {/* Event Main Content */}
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="text-brand-green bg-brand-lime/10 p-1.5 rounded-none border border-brand-lime/20">
                      {event.icon}
                    </div>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-brand-dark group-hover:text-brand-green transition-colors tracking-tight leading-[1.2]">
                      {event.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-[1.6]">
                    {event.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500 font-sans">
                    <span className="text-brand-green">Target Audience:</span>
                    <span className="bg-slate-50 px-2 py-0.5 rounded-none text-slate-600 border border-slate-200">{event.audience}</span>
                  </div>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

