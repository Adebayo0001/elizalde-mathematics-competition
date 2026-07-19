import React from "react";
import { Calendar, Users, Award, ShieldAlert, Sparkles, Trophy } from "lucide-react";

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
    <section id="roadmap" className="py-16 lg:py-28 bg-brand-green/[0.03] text-brand-dark relative overflow-hidden border-y border-slate-100">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] border border-brand-green/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-green/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-green uppercase">
            Interactive Calendar
          </span>
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mt-3 tracking-tight leading-[1.12]">
            The Olympiad Roadmap — EMC 2026
          </h2>
          <div className="h-1.5 w-12 bg-brand-green mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 font-sans mt-5 text-[15px] lg:text-[16px] leading-[1.6]">
            A comprehensive milestone tracker for both teachers coordinating groups and students training for their moment on the world stage.
          </p>
        </div>

        {/* Vertical/Timeline Flow */}
        <div className="relative border-l border-brand-green/20 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative group">
              {/* Vertical timeline node indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-6 w-6 rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-md shadow-brand-green/20 group-hover:scale-110 transition-transform duration-300">
                <div className="h-2 w-2 rounded-full bg-brand-green" />
              </div>

              {/* Event card layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300">
                
                {/* Date & Badge Block */}
                <div className="md:col-span-4 space-y-2">
                  <div className="text-brand-green font-display font-bold text-lg sm:text-xl">
                    {event.date}
                  </div>
                  <span className="inline-block text-[10px] font-bold font-display uppercase bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-full border border-brand-green/20">
                    {event.badge}
                  </span>
                </div>

                {/* Event Main Content */}
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="text-brand-green bg-brand-green/10 p-1.5 rounded-lg border border-brand-green/20">
                      {event.icon}
                    </div>
                    <h3 className="font-display font-semibold text-[16px] lg:text-[18px] text-brand-dark group-hover:text-brand-green transition-colors tracking-tight leading-[1.2]">
                      {event.title}
                    </h3>
                  </div>

                  <p className="text-[13px] lg:text-[14px] text-slate-600 font-sans leading-[1.6]">
                    {event.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500 font-sans">
                    <span className="text-brand-green">Target Audience:</span>
                    <span className="bg-slate-50 px-2 py-0.5 rounded-md text-slate-600 border border-slate-200">{event.audience}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
