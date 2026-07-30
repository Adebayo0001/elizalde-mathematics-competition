import React from "react";
import { Backpack, BookOpen, GraduationCap } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const categories = [
  {
    title: "Elementary School Category",
    grades: "Year 4 to 6",
    icon: <Backpack className="w-6 h-6" />,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "Middle School Category",
    grades: "Year 7 to 9",
    icon: <BookOpen className="w-6 h-6" />,
    color: "text-brand-red",
    bg: "bg-brand-red/10",
    border: "border-brand-red/20",
  },
  {
    title: "High School Category",
    grades: "Year 10 to 12",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-brand-gold",
    bg: "bg-brand-gold/10",
    border: "border-brand-gold/20",
  },
];

export default function WhoCanParticipateSection() {
  return (
    <section className="py-16 lg:py-28 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-blue uppercase">
            Eligibility
          </span>
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mt-3 tracking-tight leading-[1.12]">
            Who Can Participate
          </h2>
          <div className="h-1.5 w-12 bg-brand-blue mx-auto mt-4 rounded-none" />
          <p className="text-slate-500 font-sans mt-5 text-sm sm:text-base leading-[1.6]">
            Participating schools select 3 to 4 students in each class to represent them on the national and global stage.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image Collage */}
          <ScrollReveal className="relative w-full aspect-square sm:aspect-auto sm:h-[500px] lg:h-[600px] hidden sm:block">
            <div className="absolute inset-0 grid grid-cols-2 gap-3 sm:gap-4 p-4 lg:p-8">
              <div className="w-full h-full rounded-none overflow-hidden shadow-lg border-2 border-white transform translate-y-4 hover:scale-[1.02] hover:z-40 transition-transform duration-500 hover:shadow-2xl">
                <img src="/images/EMC%20Schools%20visit%20B-5.jpg.jpeg" alt="Students learning" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-full rounded-none overflow-hidden shadow-lg border-2 border-white transform -translate-y-4 hover:scale-[1.02] hover:z-40 transition-transform duration-500 hover:shadow-2xl">
                <img src="/images/276090.jpg.jpeg" alt="Math competition students" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-full rounded-none overflow-hidden shadow-lg border-2 border-white transform translate-y-4 hover:scale-[1.02] hover:z-40 transition-transform duration-500 hover:shadow-2xl">
                <img src="/images/Young%20Master%20Challenge-135.jpg%20(1).jpeg" alt="Young Master Challenge" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-full rounded-none overflow-hidden shadow-lg border-2 border-white transform -translate-y-4 hover:scale-[1.02] hover:z-40 transition-transform duration-500 hover:shadow-2xl">
                <img src="/images/278027.jpg.jpeg" alt="Students collaborating" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-red/10 rounded-full blur-2xl -z-10" />
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2" />
          </ScrollReveal>
          
          {/* Mobile Collage (simplified) */}
          <ScrollReveal className="w-full h-64 sm:hidden relative mb-8 grid grid-cols-2 gap-3">
             <div className="w-full h-full rounded-none overflow-hidden shadow-lg border-2 border-white">
               <img src="/images/278027.jpg.jpeg" alt="Students" className="w-full h-full object-cover" />
             </div>
             <div className="w-full h-full rounded-none overflow-hidden shadow-lg border-2 border-white transform translate-y-4">
               <img src="/images/278320.jpg.jpeg" alt="Students learning" className="w-full h-full object-cover" />
             </div>
          </ScrollReveal>

          {/* Right Column: Categories */}
          <StaggerContainer className="flex flex-col space-y-6">
            {categories.map((category, idx) => (
              <StaggerItem
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-none border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-start gap-6 relative overflow-hidden"
              >
                {/* Hover accent line */}
                <div className={`absolute top-0 left-0 w-1 h-full ${category.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div
                  className={`w-16 h-16 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${category.bg} ${category.color} ${category.border} border`}
                >
                  {category.icon}
                </div>
                <div className="pt-1">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark mb-1 group-hover:text-brand-blue transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="font-sans font-semibold text-slate-500 uppercase tracking-widest text-xs sm:text-sm">
                    {category.grades}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

