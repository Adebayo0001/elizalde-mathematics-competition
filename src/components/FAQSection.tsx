"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Play } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do schools register student teams?",
    answer: "Schools can register their teams directly on our web portal. An official school math coach or teacher should coordinate the profile setup, specify participation brackets, and supply the student roster list. All candidates must compete under their official school representation.",
  },
  {
    question: "What is the team size and composition?",
    answer: "EMC challenges are designed around cohesive school team units. Each registered team must consist of 3 to 4 students belonging to the same academic bracket. Schools are encouraged to submit multiple team blocks per bracket.",
  },
  {
    question: "Are scientific calculators permitted during exams?",
    answer: "No. Calculators are prohibited during the National Written Round to evaluate fundamental deductive arithmetic and pure geometric calculations. However, in the Global Finals Stage, computer-aided mathematical modeling software is authorized during Team Project presentations.",
  },
  {
    question: "How are the paper exam packets securely delivered?",
    answer: "Upon full school registration and roster locking, standard physical paper exam packets are shipped internationally via registered courier. These packets arrive sealed and must only be opened on exam day under direct proctor supervision.",
  },
  {
    question: "What international awards and credentials do qualifiers earn?",
    answer: "Outstanding National Round achievers receive regional certification badges, certificates of honor, and direct invitation credentials. Global Finalists compete for world-recognized gold, silver, and bronze championship medals, team trophies, and STEM scholarship access.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-28 bg-brand-bg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Split Layout — Accordion Left + Image/Stats Right (Reference Pattern #7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Accordion */}
          <div className="lg:col-span-6 space-y-8">
            {/* Play icon badge */}
            <ScrollReveal className="h-12 w-12 rounded-none bg-brand-teal text-white flex items-center justify-center">
              <Play className="h-5 w-5 fill-white ml-0.5" />
            </ScrollReveal>

            {/* Section Header — left-aligned */}
            <ScrollReveal className="space-y-3">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.12]">
                Frequently Asked Questions
              </h2>
            </ScrollReveal>

            {/* Accordion */}
            <StaggerContainer className="space-y-3">
              {faqData.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <StaggerItem
                    key={idx}
                    className="bg-white rounded-none border border-slate-200/50 hover:border-brand-teal/20 transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-display font-semibold text-brand-dark hover:text-brand-teal transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="text-sm sm:text-base leading-[1.4] flex items-center gap-2.5">
                        <span className="text-brand-teal text-lg">+</span>
                        {item.question}
                      </span>
                      <span className="shrink-0 text-slate-400">
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4 text-brand-teal" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`transition-all duration-300 ease-in-out font-sans ${
                        isOpen ? "max-h-60 border-t border-slate-100 py-4 px-5 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <p className="text-slate-600 text-xs sm:text-sm leading-[1.6]">
                        {item.answer}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right Column: Large Image + Overlapping Stat Badges */}
          <ScrollReveal className="lg:col-span-6 relative">
            {/* Main image */}
            <div className="rounded-none overflow-hidden shadow-lg">
              <div className="aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src="https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/482242974_945002121174723_6667028209231091350_n.jpg?stp=dst-jpg_tt6&cstp=mx1132x789&ctp=s1132x789&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGdTpCLKcSw1C1L99adgPJDXfvm_UmK5G5d--b9SYrkbqfJQb-92qjRvlVJeo4SUkhWeYDhq1zfiMUfhWb_OWTV&_nc_ohc=6icyO1sQIesQ7kNvwHN6VND&_nc_oc=AdqNkiHxj7eYW2wDF0ylnhOVUpX46F3Pr3fJxvRPjjjPHEraOJZoeCXJWYAxv143XZ7vokvvUk413x3V5Bc0Z1E4&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=_Ii6u8mRtlTIICgNsAhu8g&_nc_ss=7d2a8&oh=00_AQAkxWdWDuQSQ1RWwofBD7vchnQi2Q_Ua-F7kWpv9q1lSA&oe=6A61B9BB"
                  alt="Elizalde Mathematics Competition"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Overlapping Stat Badges (like reference "100+ Instructions" and "16 Programs") */}
            <div className="absolute -bottom-6 left-4 lg:-bottom-8 lg:left-6 flex gap-3 z-10">
              {/* Stat 1 */}
              <div className="bg-brand-red text-white rounded-none px-5 py-4 shadow-xl float-badge">
                <span className="text-[10px] font-display font-bold uppercase tracking-wider block text-white/70">
                  Countries
                </span>
                <span className="font-display font-bold text-[32px] lg:text-[36px] leading-none block mt-1">
                  35+
                </span>
                <span className="text-[10px] text-white/60 font-sans block mt-1">
                  Participating globally
                </span>
              </div>

              {/* Stat 2 */}
              <div className="bg-brand-teal text-white rounded-none px-5 py-4 shadow-xl float-badge" style={{ animationDelay: '0.5s' }}>
                <span className="text-[10px] font-display font-bold uppercase tracking-wider block text-brand-gold">
                  Programs
                </span>
                <span className="font-display font-bold text-[32px] lg:text-[36px] leading-none block mt-1">
                  3
                </span>
                <span className="text-[10px] text-white/80 font-sans block mt-1">
                  Academic brackets
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
