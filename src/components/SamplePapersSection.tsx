"use client";
import React, { useState } from "react";
import { Download, FileText, Folder, ChevronDown } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const paperCategories = [
  {
    id: "little-bee",
    name: "Little Bee",
    range: "(Year 4–6)",
    years: [
      {
        year: "Year 4",
        files: [
          "EMC25 Year 4 (1).pdf",
          "EMC25 Year 4 (2).pdf",
          "EMC25 Year 4 (3).pdf",
          "EMC25 Year 4.pdf",
        ]
      },
      {
        year: "Year 5",
        files: [
          "EMC25 Year 5 (1).pdf",
          "EMC25 Year 5.pdf",
        ]
      },
      {
        year: "Year 6",
        files: [
          "EMC25 Year 6 (1).pdf",
          "EMC25 Year 6.pdf",
        ]
      }
    ]
  },
  {
    id: "honey-bee",
    name: "Honey Bee",
    range: "(Year 7–9)",
    years: [
      {
        year: "Year 7",
        files: [
          "EMC25 - YEAR 7.pdf",
          "EMC25 Year 7 (1).pdf",
          "EMC25 Year 7.pdf",
        ]
      },
      {
        year: "Year 8",
        files: [
          "EMC25 - YEAR 8.pdf",
          "EMC25 Year 8 (1).pdf",
          "EMC25 Year 8 (2).pdf",
          "EMC25 Year 8 (3).pdf",
          "EMC25 Year 8.pdf",
        ]
      },
      {
        year: "Year 9",
        files: [
          "EMC25 - YEAR 9.pdf",
          "EMC25 Year 9 (1).pdf",
          "EMC25 Year 9 (2).pdf",
          "EMC25 Year 9.pdf",
        ]
      }
    ]
  },
  {
    id: "bumblebee",
    name: "Bumblebee",
    range: "(Year 10–12)",
    years: [
      {
        year: "Year 10",
        files: [
          "EMC25 - YEAR 10.pdf",
          "EMC25 Year 10 (1).pdf",
          "EMC25 Year 10 (2).pdf",
          "EMC25 Year 10.pdf",
        ]
      },
      {
        year: "Year 11",
        files: [
          "EMC25 Year 11 (1).pdf",
          "EMC25 Year 11 (2).pdf",
          "EMC25 Year 11.pdf",
        ]
      },
      {
        year: "Year 12",
        files: [
          "EMC25 Year 12 (1).pdf",
          "EMC25 Year 12 (2).pdf",
          "EMC25 Year 12 (3).pdf",
          "EMC25 Year 12.pdf",
        ]
      }
    ]
  }
];

const SamplePapersSection = () => {
  const [activeTab, setActiveTab] = useState<string>("little-bee");
  const [activeYear, setActiveYear] = useState<string | null>(null);

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
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight mb-5 leading-[1.1]">
            Download Sample Papers
          </h2>
          <p className="text-slate-600 font-sans text-base sm:text-lg leading-[1.7] max-w-2xl mx-auto">
            Prepare for the upcoming competition by exploring our official past papers. Select your category below to view the available materials.
          </p>
        </ScrollReveal>

        {/* 3-Column Tabs on a single line */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 max-w-4xl mx-auto">
            {paperCategories.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveTab(category.id);
                    setActiveYear(null);
                  }}
                  className={`flex flex-col items-center justify-center p-4 border rounded-none transition-all duration-300 ${
                    isActive 
                      ? 'bg-brand-blue border-brand-blue text-white shadow-md transform -translate-y-1' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-brand-blue/30 hover:bg-slate-50'
                  }`}
                >
                  <span className={`font-display font-bold text-lg mb-1 ${isActive ? 'text-white' : 'text-brand-dark'}`}>
                    {category.name}
                  </span>
                  <span className={`font-sans text-xs tracking-wide font-medium ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    {category.range}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Category Content - Collapsible Accordion */}
        <div className="bg-white border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/[0.03] rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col divide-y divide-slate-100 relative z-10">
            {activeCategory.years.map((yearGroup, index) => {
              const isExpanded = activeYear === yearGroup.year;
              return (
                <div key={yearGroup.year} className="bg-white">
                  <button
                    onClick={() => setActiveYear(isExpanded ? null : yearGroup.year)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-none flex items-center justify-center transition-colors ${isExpanded ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'}`}>
                        <Folder className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800">
                          {yearGroup.year}
                        </h3>
                        <span className="text-xs text-slate-500 font-sans mt-0.5 block">
                          {yearGroup.files.length} {yearGroup.files.length === 1 ? 'Paper' : 'Papers'}
                        </span>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-slate-200 text-slate-600 rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 pt-0 bg-slate-50/50">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {yearGroup.files.map((file, fileIdx) => (
                              <a
                                key={fileIdx}
                                href={`/EMC - Sample Papers/${file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 sm:p-4 bg-white border border-slate-200 hover:border-brand-blue hover:shadow-md transition-all duration-300 group/link rounded-none"
                              >
                                <div className="flex items-center gap-3 overflow-hidden pr-3">
                                  <FileText className="w-4 h-4 text-brand-red shrink-0" />
                                  <span className="text-xs sm:text-sm font-sans font-medium text-slate-700 truncate group-hover/link:text-brand-blue transition-colors" title={file.replace(/\.pdf$/i, "")}>
                                    {file.replace(/\.pdf$/i, "")}
                                  </span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover/link:bg-brand-blue group-hover/link:border-brand-blue text-slate-400 group-hover/link:text-white transition-all duration-300 shrink-0">
                                  <Download className="w-3.5 h-3.5" />
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SamplePapersSection;
