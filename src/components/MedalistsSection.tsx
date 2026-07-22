"use client";
import React, { useState } from "react";
import { Award, Trophy, Star, Shield, Filter } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

interface Medalist {
  name: string;
  award: string; // Gold Medalist, Silver Medalist, Bronze Medalist
  category: string;
  country: string;
}

const medalistsData: Medalist[] = [
  // Little Bee
  { name: "Chad Molokwu", award: "Gold Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Oladele Hans Oladutire", award: "Gold Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Ugochukwu Chisom Michelle", award: "Gold Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Oluwatobiloba Tayo Adewale", award: "Gold Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Tirenioluwa Akeredolu", award: "Gold Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Naomi Tirenioluwa Balogun", award: "Gold Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Nsikanabasi Edem", award: "Gold Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Adriel Urioma Chioma", award: "Gold Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Jawad Fagbola", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Chimkasi Ikokwu", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Olamitesiwaju Olabiyisi", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Sebastian Eyitayo", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Folajimi Wiliams", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Ifeanyi Akueche", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Kaetochukwu Nwosu", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Fijin Asher Arulogun", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Moyinoluwa Ajibawo", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Oreofeoluwa Yomi-Sadiq", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Jude Chibueze Okoroji", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Obiajulu Anyikwa", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Daniel Awaj-Ogak Clinton-Okwere", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Priscilla Oyemade", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Jaden Ekelida Chime-Harcourt", award: "Silver Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Abubakar Olatundun", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Oladipupo Sesan", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Nabil Olorunfemi", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Trust Amusa", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Kaitobenna Jayden Ikwumelu", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Jesutevre Doghor", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Zoe Oseji", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Iyunade Ogunnifa", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Joel Itodo", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Afolademi Ajagbe", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Amir Adetuyi", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Jahdiel Oyakhilome", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Kobi Ike-Okoli", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Osezele Alenkhe", award: "Bronze Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Oluwatosetemi Adelaja", award: "London Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Oluwadamiloju Balogun", award: "London Medalist", category: "Little Bee", country: "Nigeria" },
  { name: "Eliana Ogogo", award: "London Medalist", category: "Little Bee", country: "Nigeria" },

  // Honey Bee
  { name: "Awesola Nathan Aderinsola", award: "Silver Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Olivia Chime", award: "Silver Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Ikechukwu Ogala", award: "Silver Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Haniel Aniebiet Robert", award: "Silver Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Otaru Idawu", award: "Silver Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Beauty Ekeocha", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Nnabuike Nicholas Michael", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Hakeem Hechitu Hamadina", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Tioluwani Adebogun", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Nadine Eugenia Ebhaleme", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Fareehah Oyolola", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Nathan Itsukwi", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Caleb Adeniyi", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Oluwafunmilola Olakunde", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Munachimso Chukwurah", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },
  { name: "Omowonuola Olaleye", award: "Bronze Medalist", category: "Honey Bee", country: "Nigeria" },

  // Bloom Bee
  { name: "Oluwadamilare Olakunde", award: "Silver Medalist", category: "Bloom Bee", country: "Nigeria" },
  { name: "Ibukunoluwa Mimiko", award: "Bronze Medalist", category: "Bloom Bee", country: "Nigeria" },
  { name: "Daniel Fasehun", award: "Bronze Medalist", category: "Bloom Bee", country: "Nigeria" },
  { name: "Marzooq Oladipo", award: "London Medalist", category: "Bloom Bee", country: "Nigeria" },
];

export default function MedalistsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Little Bee");
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredMedalists = medalistsData.filter((student) => student.category === activeCategory);
  const displayedMedalists = showAll ? filteredMedalists : filteredMedalists.slice(0, 7);

  return (
    <section id="winners" className="py-16 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-red uppercase">
            London Elite
          </span>
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mt-3 tracking-tight leading-[1.12]">
            London Finals Medalists
          </h2>
          <p className="text-slate-500 font-sans mt-4 text-[15px] lg:text-[16px] leading-[1.6]">
            Honoring the young minds who demonstrated logical excellence at the EMC London Finals.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal className="flex flex-wrap items-center justify-center gap-3 border-b border-slate-100 pb-8 mb-10">
          {["Little Bee", "Honey Bee", "Bloom Bee"].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-6 py-2.5 rounded-none text-xs sm:text-sm font-bold font-display tracking-widest transition-all cursor-pointer uppercase ${
                activeCategory === category
                  ? "bg-brand-blue text-white shadow-md border border-brand-blue"
                  : "bg-white text-slate-500 border border-slate-200 hover:border-brand-blue/50 hover:text-brand-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Responsive Table */}
        <ScrollReveal className="w-full overflow-x-auto bg-white border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-6 text-sm font-semibold font-sans text-slate-600 w-1/3">Name</th>
                <th className="py-4 px-6 text-sm font-semibold font-sans text-slate-600 w-1/4">Award</th>
                <th className="py-4 px-6 text-sm font-semibold font-sans text-slate-600 w-1/12 text-center">Country</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {displayedMedalists.map((student, index) => {
                const isGold = student.award.includes("Gold");
                const isSilver = student.award.includes("Silver");
                const isBronze = student.award.includes("Bronze");

                return (
                  <tr key={index} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="py-4 px-6">
                      <span className="font-display font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">
                        {student.name}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold font-sans rounded-none ${
                        isGold ? "bg-brand-gold/10 text-brand-gold border border-brand-gold/20" :
                        isSilver ? "bg-slate-100 text-slate-600 border border-slate-200" :
                        isBronze ? "bg-amber-100/50 text-amber-700 border border-amber-200" :
                        "bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                      }`}>
                        {student.award}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-sm font-sans text-slate-500">
                        {student.country}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          {filteredMedalists.length === 0 && (
            <div className="text-center py-12 bg-white">
              <span className="block text-slate-400 font-display text-xs uppercase tracking-wider">No medalists yet for this category.</span>
            </div>
          )}
        </ScrollReveal>

        {filteredMedalists.length > 7 && !showAll && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-display font-semibold text-brand-blue hover:text-brand-dark transition-colors cursor-pointer border-b border-brand-blue hover:border-brand-dark pb-0.5"
            >
              View All
            </button>
          </div>
        )}
        {filteredMedalists.length > 7 && showAll && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="text-sm font-display font-semibold text-brand-blue hover:text-brand-dark transition-colors cursor-pointer border-b border-brand-blue hover:border-brand-dark pb-0.5"
            >
              Show Less
            </button>
          </div>
        )}      </div>
    </section>
  );
}
