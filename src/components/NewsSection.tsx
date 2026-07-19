import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  imageUrl: string;
}

const newsItems: NewsItem[] = [
  {
    title: "EMC 2026 Registration Opens Globally",
    excerpt: "Schools from over 40 countries are preparing to submit student rosters for the upcoming national rounds this winter.",
    date: "July 12, 2026",
    tag: "Registration",
    imageUrl: "https://images.unsplash.com/photo-1518133680487-4179e7df786b?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    title: "Highlights from the Global Finals in London",
    excerpt: "Read about the record-setting mathematics scores, collaborative project layouts, and the crowning of this year's top champions.",
    date: "May 22, 2026",
    tag: "Global Finals",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    title: "New Mentorship Program Announced",
    excerpt: "EMC launches a comprehensive virtual tutoring and mentor guidance platform to assist schools entering the competition for the first time.",
    date: "March 15, 2026",
    tag: "Mentorship",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400&h=300",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-14 lg:py-24 bg-brand-bg border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.08em] text-brand-green uppercase">
            News & Updates
          </span>
          <h2 className="font-display font-semibold text-[26px] lg:text-[36px] text-brand-dark mt-2 tracking-tight leading-[1.15]">
            Latest from EMC
          </h2>
          <div className="h-1.5 w-12 bg-brand-green mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl border border-slate-200/50 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container with Consistent 4:3 Crop aspect-ratio */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-brand-green text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md">
                  {item.tag}
                </span>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-3">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  <time dateTime={item.date} className="font-sans">{item.date}</time>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-[18px] lg:text-[20px] text-brand-dark group-hover:text-brand-green transition-colors line-clamp-2 mb-2 leading-[1.2] tracking-tight">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[15px] lg:text-[16px] text-slate-500 line-clamp-3 mb-6 flex-grow leading-[1.6] font-sans">
                  {item.excerpt}
                </p>

                {/* Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
