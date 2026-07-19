import React, { useState } from "react";
import { Award, Trophy, Star, Shield, Filter } from "lucide-react";

interface Medalist {
  name: string;
  award: string; // Gold Medalist, Silver Medalist, Global Qualifier, etc.
  category: string;
  school: string;
  country: string;
  photoUrl: string;
  year: number;
}

const medalistsData: Medalist[] = [
  // 2025
  {
    name: "Alexander Petrov",
    award: "Gold Medalist",
    category: "Albert Einstein Bracket",
    school: "Sofia Mathematics High School",
    country: "Bulgaria",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250&h=250",
    year: 2025
  },
  {
    name: "Chloe Chen",
    award: "Gold Medalist",
    category: "Fibonacci Bracket",
    school: "Singapore International School",
    country: "Singapore",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250&h=250",
    year: 2025
  },
  {
    name: "Maimunah Salako",
    award: "Silver Medalist",
    category: "Honey Bee Bracket",
    school: "Greensprings School",
    country: "Nigeria",
    photoUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=250&h=250",
    year: 2025
  },
  {
    name: "Liam O'Connor",
    award: "Global Finals Qualifier",
    category: "Albert Einstein Bracket",
    school: "Dublin Academic Center",
    country: "Ireland",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250&h=250",
    year: 2025
  },
  {
    name: "Sofia Martinez",
    award: "Global Finals Qualifier",
    category: "Honey Bee Bracket",
    school: "Colegio de Monterrey",
    country: "Mexico",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=250&h=250",
    year: 2025
  },

  // 2024
  {
    name: "Ji-Woo Park",
    award: "Gold Medalist",
    category: "Albert Einstein Bracket",
    school: "Seoul Science High School",
    country: "South Korea",
    photoUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=250&h=250",
    year: 2024
  },
  {
    name: "Taras Kovalenko",
    award: "Gold Medalist",
    category: "Fibonacci Bracket",
    school: "Kyiv Academic Lyceum",
    country: "Ukraine",
    photoUrl: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=250&h=250",
    year: 2024
  },
  {
    name: "Carlos Souza",
    award: "Silver Medalist",
    category: "Honey Bee Bracket",
    school: "São Paulo Technical Institute",
    country: "Brazil",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=250&h=250",
    year: 2024
  },
  {
    name: "Fatima Al-Mutawa",
    award: "Global Finals Qualifier",
    category: "Albert Einstein Bracket",
    school: "Kuwait National Academy",
    country: "Kuwait",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250&h=250",
    year: 2024
  },
  {
    name: "Hans Weber",
    award: "Global Finals Qualifier",
    category: "Fibonacci Bracket",
    school: "Munich Academic Gymnasium",
    country: "Germany",
    photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=250&h=250",
    year: 2024
  }
];

export default function MedalistsSection() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filteredMedalists = medalistsData.filter((student) => {
    if (student.year !== selectedYear) return false;
    if (activeFilter === "ALL") return true;
    if (activeFilter === "MEDALS") return student.award.includes("Medalist");
    if (activeFilter === "QUALIFIERS") return student.award.includes("Qualifier");
    return true;
  });

  return (
    <section id="winners" className="py-16 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header — Centered (Reference Pattern #8: "OUR BLOG / Latest articles") */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-gold uppercase">
            Global Elite
          </span>
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mt-3 tracking-tight leading-[1.12]">
            Global Finals Medalists & Qualifiers
          </h2>
          <p className="text-slate-500 font-sans mt-4 text-[15px] lg:text-[16px] leading-[1.6]">
            Honoring the young minds who demonstrated logical excellence at the EMC Global Finals. Meet our champions, silver medalists, and qualifiers from every corner of the earth.
          </p>
        </div>

        {/* Year and Type Selection Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-10">
          {/* Year Buttons */}
          <div className="flex bg-brand-bg p-1 rounded-xl border border-slate-200/50">
            <button
              onClick={() => setSelectedYear(2025)}
              className={`px-5 py-2 rounded-lg text-xs font-bold font-display tracking-wider transition-all cursor-pointer ${
                selectedYear === 2025 ? "bg-brand-teal text-white shadow-sm" : "text-slate-500 hover:text-brand-dark"
              }`}
            >
              EMC 2025
            </button>
            <button
              onClick={() => setSelectedYear(2024)}
              className={`px-5 py-2 rounded-lg text-xs font-bold font-display tracking-wider transition-all cursor-pointer ${
                selectedYear === 2024 ? "bg-brand-teal text-white shadow-sm" : "text-slate-500 hover:text-brand-dark"
              }`}
            >
              EMC 2024
            </button>
          </div>

          {/* Award Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter("ALL")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all border cursor-pointer ${
                activeFilter === "ALL"
                  ? "bg-brand-gold/15 text-brand-gold border-brand-gold/30 font-bold"
                  : "bg-white border-slate-200 text-slate-500 hover:text-brand-dark hover:border-slate-300"
              }`}
            >
              All Honorees
            </button>
            <button
              onClick={() => setActiveFilter("MEDALS")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all border cursor-pointer ${
                activeFilter === "MEDALS"
                  ? "bg-brand-gold/15 text-brand-gold border-brand-gold/30 font-bold"
                  : "bg-white border-slate-200 text-slate-500 hover:text-brand-dark hover:border-slate-300"
              }`}
            >
              Medalists Only
            </button>
            <button
              onClick={() => setActiveFilter("QUALIFIERS")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all border cursor-pointer ${
                activeFilter === "QUALIFIERS"
                  ? "bg-brand-gold/15 text-brand-gold border-brand-gold/30 font-bold"
                  : "bg-white border-slate-200 text-slate-500 hover:text-brand-dark hover:border-slate-300"
              }`}
            >
              Qualifiers Only
            </button>
          </div>
        </div>

        {/* Article-style Card Grid (Reference Pattern: Blog cards with image, tag, title, date) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMedalists.map((student, index) => {
            const isGold = student.award === "Gold Medalist";
            const isSilver = student.award === "Silver Medalist";

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-slate-200/50 hover:border-brand-gold/30 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Large Image — article card style */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={student.photoUrl}
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Award badge overlay */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold font-display uppercase tracking-wider text-white shadow-md ${
                    isGold ? "bg-brand-gold" : isSilver ? "bg-slate-500" : "bg-brand-teal"
                  }`}>
                    {student.award}
                  </div>
                </div>

                {/* Card Content — below image */}
                <div className="p-5 space-y-3">
                  {/* Category tag */}
                  <span className="text-[10px] font-bold font-display text-brand-teal uppercase tracking-widest">
                    {student.category}
                  </span>

                  {/* Name */}
                  <h3 className="font-display font-semibold text-[16px] lg:text-[17px] text-brand-dark group-hover:text-brand-gold transition-colors leading-tight">
                    {student.name}
                  </h3>

                  {/* School + Country */}
                  <div className="flex items-center justify-between text-xs text-slate-500 font-sans pt-2 border-t border-slate-100">
                    <span className="truncate mr-2">{student.school}</span>
                    <span className="font-bold font-display text-brand-teal uppercase text-[10px] shrink-0">{student.country}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state when filtering yields no match */}
        {filteredMedalists.length === 0 && (
          <div className="text-center py-16 bg-brand-bg rounded-2xl border border-dashed border-slate-200">
            <span className="block text-slate-400 font-display text-xs">No honorees found match these filter rules.</span>
          </div>
        )}
      </div>
    </section>
  );
}
