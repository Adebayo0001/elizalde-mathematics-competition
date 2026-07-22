"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, GraduationCap, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

export interface Inductee {
  id: string;
  name: string;
  category: "High School Category" | "Upper Grade Category" | "Middle School Category";
  school: string;
  year: "2024" | "2025" | "2026";
}

export const inductees: Inductee[] = [
  // --- 2024 INDUCTEES ---
  {
    id: "2024-1",
    name: "Ikechukwu Ogala",
    category: "Upper Grade Category",
    school: "Greensprings School, Anthony Campus",
    year: "2024",
  },
  {
    id: "2024-2",
    name: "Maimunah Salako",
    category: "High School Category",
    school: "Greensprings School, Anthony Campus",
    year: "2024",
  },
  {
    id: "2024-3",
    name: "Ayomide Awoniyi",
    category: "Upper Grade Category",
    school: "Greensprings School, Anthony Campus",
    year: "2024",
  },

  // --- 2025 INDUCTEES ---
  {
    id: "2025-1",
    name: "Oluwatobiloba Mimiko",
    category: "High School Category",
    school: "Corona Day Secondary School, Lekki",
    year: "2025",
  },
  {
    id: "2025-2",
    name: "Oluwasemilore Oluboyo",
    category: "High School Category",
    school: "Greensprings School, Anthony Campus",
    year: "2025",
  },
  {
    id: "2025-3",
    name: "Demilade Afon",
    category: "Upper Grade Category",
    school: "Emerald School",
    year: "2025",
  },
  {
    id: "2025-4",
    name: "Awesola Aderinsola",
    category: "Middle School Category",
    school: "Greensprings School, Anthony Campus",
    year: "2025",
  },
  {
    id: "2025-5",
    name: "Oluwatishe Ogunjobi",
    category: "Middle School Category",
    school: "Greensprings School, Anthony Campus",
    year: "2025",
  },
  {
    id: "2025-6",
    name: "Oluwatimileyin Adedeji",
    category: "Upper Grade Category",
    school: "Greensprings School, Anthony Campus",
    year: "2025",
  },

  // --- 2026 INDUCTEES ---
  {
    id: "2026-1",
    name: "Chad Molokwu",
    category: "Middle School Category",
    school: "The Regent Secondary School, Abuja",
    year: "2026",
  },
  {
    id: "2026-2",
    name: "Chisom Ugochukwu",
    category: "Middle School Category",
    school: "Greensprings School, Anthony Campus",
    year: "2026",
  },
  {
    id: "2026-3",
    name: "Oladele Hans Oladutire-Deji",
    category: "Middle School Category",
    school: "Bloombreed Schools",
    year: "2026",
  },
  {
    id: "2026-4",
    name: "Oluwatobiloba Tayo-Adewale",
    category: "Middle School Category",
    school: "Corona Day Secondary School",
    year: "2026",
  },
  {
    id: "2026-5",
    name: "Tirenioluwa Balogun",
    category: "Upper Grade Category",
    school: "Greensprings School, Ikoyi Campus",
    year: "2026",
  },
  {
    id: "2026-6",
    name: "Nsikanabasi Edem",
    category: "Middle School Category",
    school: "Corona Secondary School, Agbara",
    year: "2026",
  },
  {
    id: "2026-7",
    name: "Adriel Chioma",
    category: "Upper Grade Category",
    school: "Bloombreed Schools",
    year: "2026",
  },
  {
    id: "2026-8",
    name: "Tirenioluwa Akeredolu",
    category: "Middle School Category",
    school: "Greensprings School, Anthony Campus",
    year: "2026",
  },
  {
    id: "2026-9",
    name: "Nathan Sotunde",
    category: "Upper Grade Category",
    school: "Great Bloomers School",
    year: "2026",
  },
];

const yearTabs = ["2026", "2025", "2024", "2027 (Upcoming)"];

const categoryStyles = {
  "High School Category": {
    badge: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
    border: "hover:border-brand-blue/40",
    iconColor: "text-brand-blue",
    topLine: "bg-brand-blue",
  },
  "Upper Grade Category": {
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    border: "hover:border-indigo-300",
    iconColor: "text-indigo-600",
    topLine: "bg-indigo-600",
  },
  "Middle School Category": {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    border: "hover:border-emerald-300",
    iconColor: "text-emerald-600",
    topLine: "bg-emerald-600",
  },
};

export default function WorldOfMathematiciansSection() {
  const [selectedYear, setSelectedYear] = useState<string>("2026");

  const filteredInductees = inductees.filter((student) => student.year === selectedYear);

  return (
    <section id="wall-of-mathematicians" className="py-16 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-blue uppercase">
            Official Honor Roll
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mt-3 tracking-tight leading-[1.12]">
            Wall of Mathematicians
          </h2>
          <div className="h-1.5 w-12 bg-brand-blue mx-auto mt-4 rounded-none" />
          <p className="text-slate-500 font-sans mt-5 text-sm sm:text-base leading-[1.6]">
            Celebrating outstanding student inductees from across Nigeria, the home country of the National Rounds.
          </p>
        </ScrollReveal>

        {/* Clean Year Tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          {yearTabs.map((year) => {
            const isActive = selectedYear === year;
            return (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 text-xs font-bold font-display uppercase tracking-wider transition-all rounded-none flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-brand-dark border border-slate-200/60"
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>{year}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        {selectedYear === "2027 (Upcoming)" ? (
          /* Upcoming 2027 Teaser Card */
          <div className="bg-brand-blue text-white p-8 sm:p-12 lg:p-16 text-center space-y-6 max-w-3xl mx-auto border border-brand-blue/30 shadow-2xl relative overflow-hidden">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto text-brand-gold font-display font-extrabold text-6xl shadow-inner">
              ?
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold font-display uppercase tracking-widest text-brand-gold block">
                2027 Upcoming Season
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                Will Your Name Be Inducted Next?
              </h3>
            </div>
            <p className="text-white/80 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Nominations and qualifying rounds for the 2027 Wall of Mathematicians will open following the National Rounds. Register your school or student profile today to compete for a spot on the honor roll.
            </p>
            <div className="pt-4">
              <Link
                href="/register"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-extrabold font-display text-xs uppercase tracking-widest transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <span>Register for EMC 2027</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Clean Student Cards Grid */
          <StaggerContainer key={selectedYear} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInductees.map((student) => {
              const style = categoryStyles[student.category] || categoryStyles["High School Category"];
              return (
                <StaggerItem
                  key={student.id}
                  className={`bg-white border border-slate-200/90 ${style.border} p-6 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md relative overflow-hidden`}
                >
                  {/* Top Subtle Color Strip */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${style.topLine}`} />

                  <div className="space-y-3">
                    {/* Sentence Case Category Badge */}
                    <div>
                      <span className={`inline-block text-[11px] font-semibold font-display px-3 py-1 border ${style.badge}`}>
                        {student.category}
                      </span>
                    </div>

                    {/* Student Name */}
                    <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-blue transition-colors uppercase tracking-tight leading-snug">
                      {student.name}
                    </h3>
                  </div>

                  {/* School Name */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-600 font-sans">
                    <GraduationCap className={`w-4 h-4 ${style.iconColor} shrink-0 mt-0.5`} />
                    <span className="font-medium leading-relaxed">{student.school}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
