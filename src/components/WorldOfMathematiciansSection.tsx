import React from "react";
import { Users, Sparkles, MessageCircle, Heart } from "lucide-react";

interface SpotlightStudent {
  name: string;
  role: string;
  school: string;
  country: string;
  spotlightText: string;
  highlight: string;
  photoUrl: string;
}

const spotlightStudents: SpotlightStudent[] = [
  {
    name: "Elena Rostova",
    role: "Middle School Mentor",
    school: "Sofia Mathematics High School",
    country: "Bulgaria",
    spotlightText: "Elena organized a virtual study club that helped 18 elementary bracket competitors master complex geometric coordinate systems. Her patience and passion illustrate the true spirit of mathematical companionship.",
    highlight: "Coached 18 younger peers",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Kenji Sato",
    role: "Creative Proof Constructor",
    school: "Tokyo Science Academy",
    country: "Japan",
    spotlightText: "Kenji was recognized by our international jury for constructing an exceptionally elegant geometric proof during the Team Project Stage, resolving a multi-variable grid problem with rare originality.",
    highlight: "Awarded Jury Originality Citation",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Amadi Diallo",
    role: "Inspiring Team Leader",
    school: "Dakar Academy",
    country: "Senegal",
    spotlightText: "Amadi spearheaded coordinates for a remote high school team under severe connectivity limitations. His perseverance brought three school team math projects into full publication standards.",
    highlight: "Published 3 team math modules",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
  }
];

export default function WorldOfMathematiciansSection() {
  return (
    <section id="world-of-mathematicians" className="py-16 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-teal uppercase">
            Student Spotlights
          </span>
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mt-3 tracking-tight leading-[1.12]">
            The World of Mathematicians
          </h2>
          <div className="h-1.5 w-12 bg-brand-teal mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 font-sans mt-5 text-[15px] lg:text-[16px] leading-[1.6]">
            A celebration of outstanding student leadership, community support, and mathematical curiosity outside of direct exam results. These young thinkers inspire us all.
          </p>
        </div>

        {/* Spotlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {spotlightStudents.map((student, idx) => {
            const isFeatured = idx === 1;
            return (
              <div
                key={idx}
                className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col relative ${
                  isFeatured
                    ? "border-brand-teal/40 shadow-xl scale-[1.03] lg:scale-[1.05] ring-1 ring-brand-teal/20 z-10"
                    : "border-slate-200/50 hover:border-brand-teal/30 hover:shadow-xl"
                }`}
              >
                {/* Large Image — article card style */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={student.photoUrl}
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Badge overlay */}
                  {isFeatured && (
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-brand-teal text-white text-[10px] font-bold font-display uppercase px-3.5 py-1 rounded-full shadow-md tracking-wider">
                      Featured Leader
                    </div>
                  )}
                </div>

                {/* Card Content — below image */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h3 className="font-display font-semibold text-[16px] lg:text-[17px] text-brand-dark group-hover:text-brand-teal transition-colors tracking-tight leading-[1.2]">
                        {student.name}
                      </h3>
                      <div className="text-xs text-slate-500 font-medium font-sans mt-1">
                        {student.school}
                        <span className="font-bold font-display text-brand-teal uppercase ml-2">{student.country}</span>
                      </div>
                    </div>

                    {/* Narrative spotlight block */}
                    <p className="text-[13px] lg:text-[14px] text-slate-600 font-sans leading-[1.6] italic">
                      "{student.spotlightText}"
                    </p>
                  </div>

                  {/* Bottom Spotlight Badge Details */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold font-display tracking-wide text-brand-teal uppercase">
                    <span className="bg-brand-teal/5 px-2.5 py-1 rounded-md border border-brand-teal/10">
                      {student.role}
                    </span>
                    <span className="text-brand-gold flex items-center gap-1">
                      <Sparkles className="h-3 w-3 fill-brand-gold" />
                      Spotlight
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
