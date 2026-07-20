"use client";
import React from "react";
import { Award, Trophy, Star } from "lucide-react";

interface Winner {
  name: string;
  placement: string;
  category: string;
  school: string;
  campus: string;
  photoUrl: string;
}

const winnersData: Winner[] = [
  {
    name: "Maimunah Salako",
    placement: "1st Place Champion",
    category: "Honey Bee Category",
    school: "Greensprings School",
    campus: "Anthony Campus",
    photoUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=250&h=250",
  },
  {
    name: "Alexander Petrov",
    placement: "1st Place Champion",
    category: "Albert Einstein Category",
    school: "Sofia Mathematics High School",
    campus: "Sofia Campus",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250&h=250",
  },
  {
    name: "Chloe Chen",
    placement: "1st Place Champion",
    category: "Fibonacci Category",
    school: "Singapore International School",
    campus: "West Coast Campus",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250&h=250",
  },
];

export default function WinnersGrid() {
  return (
    <section id="winners" className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold font-display tracking-widest text-brand-gold uppercase">
            Global Elite
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-dark mt-2 tracking-tight">
            Global Finals Winners
          </h2>
          <div className="h-1.5 w-12 bg-brand-gold mx-auto mt-4 rounded-none " />
          <p className="text-slate-500 font-sans mt-4 text-base">
            Meet the students who proved what they could do. From team projects to complex exams, these young minds led the international bracket.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {winnersData.map((winner, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-white rounded-none p-6 border border-slate-200/50 hover:border-brand-gold/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative"
            >
              {/* Badge Overlay */}
              <div className="absolute top-4 right-4 bg-brand-gold/10 text-brand-gold p-2 rounded-none shadow-xs">
                <Trophy className="h-4 w-4" />
              </div>

              {/* Photo Frame */}
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-none overflow-hidden border-4 border-white shadow-md ring-1 ring-slate-100 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={winner.photoUrl}
                    alt={winner.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Placement Banner */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-gold text-white rounded-none text-[10px] font-bold uppercase tracking-wider shadow-md">
                  {winner.placement}
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2 mt-2">
                <span className="text-xs font-bold font-display text-brand-gold uppercase tracking-wider block">
                  {winner.category}
                </span>
                <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-gold transition-colors">
                  {winner.name}
                </h3>
                <div className="text-sm text-slate-600 font-medium font-sans">
                  {winner.school}
                </div>
                <div className="text-xs text-slate-400 font-sans">
                  {winner.campus}
                </div>
              </div>

              {/* Score card detail */}
              <div className="w-full mt-6 pt-4 border-t border-slate-100 flex justify-around text-[11px] font-semibold text-slate-400">
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-brand-gold fill-brand-gold" />
                  <span>Rank #1</span>
                </div>
                <div className="h-4 w-[1px] bg-slate-200" />
                <div className="flex items-center gap-1">
                  <Award className="h-3.5 w-3.5 text-brand-gold" />
                  <span>EMC Gold</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

