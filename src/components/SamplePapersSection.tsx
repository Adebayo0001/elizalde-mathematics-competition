"use client";
import React, { useState } from "react";
import { Folder, ExternalLink } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const paperCategories = [
  {
    id: "little-bee",
    name: "Elementary School",
    range: "(Year 4–6)",
    years: [
      {
        year: "Year 4",
        link: "https://drive.google.com/drive/folders/1EqlEcon--gLQi7NM21unSjZtWefBN9So"
      },
      {
        year: "Year 5",
        link: "https://drive.google.com/drive/folders/1P-APOK1aWGpCKm47myVDrgkOZqe1HDRr"
      },
      {
        year: "Year 6",
        link: "https://drive.google.com/drive/folders/1OewOBpvVNLC-gY3QztMolr-El26XytqJ"
      }
    ]
  },
  {
    id: "honey-bee",
    name: "Middle School",
    range: "(Year 7–9)",
    years: [
      {
        year: "Year 7",
        link: "https://drive.google.com/drive/folders/1yXSaEARtm2VCBIVt0y0RWrMNh76i8pEf"
      },
      {
        year: "Year 8",
        link: "https://drive.google.com/drive/folders/15PX9a5TLKwPPbpKcdnKY2rCPi98DXTRH"
      },
      {
        year: "Year 9",
        link: "https://drive.google.com/drive/folders/1uftNUkt_2YZpCflU_gDFlJayiPyun6tY"
      }
    ]
  },
  {
    id: "bumblebee",
    name: "High School",
    range: "(Year 10–12)",
    years: [
      {
        year: "Year 10",
        link: "https://drive.google.com/drive/folders/1W2GUKm2v5HIn9w2eI6JCZ9l2mYjrg0h9"
      },
      {
        year: "Year 11",
        link: "https://drive.google.com/drive/folders/1ANe9wQKPUG3KLJfvVmppFQLL0x6eN68M"
      }
    ]
  }
];

const SamplePapersSection = () => {
  const [activeTab, setActiveTab] = useState<string>("little-bee");

  const activeCategory = paperCategories.find(c => c.id === activeTab) || paperCategories[0];

  return (
    <section id="sample-papers" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform origin-top translate-x-20 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red font-display font-bold uppercase tracking-wider text-[10px] sm:text-xs mb-4 rounded-none">
            Practice Materials
          </span>
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mt-3 tracking-tight leading-[1.12]">
            Download Sample Papers
          </h2>
          <p className="text-slate-600 font-sans text-base sm:text-lg leading-[1.7] max-w-2xl mx-auto">
            Prepare for the upcoming competition by exploring our official past papers. Select your category below to view the available materials.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-slate-100 pb-8 mb-10 max-w-4xl mx-auto">
            {paperCategories.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-2.5 rounded-none text-xs sm:text-sm font-bold font-display tracking-widest transition-all cursor-pointer uppercase ${
                    isActive
                      ? "bg-brand-blue text-white shadow-md border border-brand-blue"
                      : "bg-white text-slate-500 border border-slate-200 hover:border-brand-blue/50 hover:text-brand-dark"
                  }`}
                >
                  {category.name} <span className="opacity-75 tracking-normal ml-1 text-[10px] sm:text-[11px] font-medium font-sans normal-case">{category.range}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Category Content - Links to Drive */}
        <div className="bg-white border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/[0.03] rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col divide-y divide-slate-100 relative z-10">
            {activeCategory.years.map((yearGroup) => {
              return (
                <a
                  key={yearGroup.year}
                  href={yearGroup.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-slate-50 transition-colors focus:outline-none group/link"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-none flex items-center justify-center transition-colors bg-brand-blue/10 text-brand-blue group-hover/link:bg-brand-blue group-hover/link:text-white">
                      <Folder className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-800 leading-tight">
                        {yearGroup.year}
                      </h3>
                      <span className="text-[11px] sm:text-xs text-slate-500 font-sans mt-0.5 block leading-tight">
                        View Questions
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-slate-100 text-slate-400 group-hover/link:bg-brand-blue group-hover/link:text-white">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SamplePapersSection;
