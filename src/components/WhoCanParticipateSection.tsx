import React from "react";
import { Backpack, BookOpen, GraduationCap } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const categories = [
  {
    title: "Elementary School Category",
    grades: "Grade 4 to 6",
    icon: <Backpack className="w-8 h-8" />,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "Middle School Category",
    grades: "Grade 7 to 9",
    icon: <BookOpen className="w-8 h-8" />,
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "border-brand-green/20",
  },
  {
    title: "High School Category",
    grades: "Grade 10 to 12",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "text-brand-gold",
    bg: "bg-brand-gold/10",
    border: "border-brand-gold/20",
  },
];

export default function WhoCanParticipateSection() {
  return (
    <section className="py-16 lg:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-blue uppercase">
            Eligibility
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mt-3 tracking-tight leading-[1.12]">
            Who Can Participate
          </h2>
          <div className="h-1.5 w-12 bg-brand-blue mx-auto mt-4 rounded-none" />
          <p className="text-slate-500 font-sans mt-5 text-sm sm:text-base leading-[1.6]">
            Participating schools select 3 to 4 students in each class to represent them on the national and global stage.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <StaggerItem
              key={idx}
              className="bg-white p-8 rounded-none border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${category.bg} ${category.color} ${category.border} border`}
              >
                {category.icon}
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark mb-2">
                {category.title}
              </h3>
              <p className="font-sans font-semibold text-slate-500 uppercase tracking-widest text-sm">
                {category.grades}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

