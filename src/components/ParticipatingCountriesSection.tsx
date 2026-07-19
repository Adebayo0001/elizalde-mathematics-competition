import React from "react";
import { Globe, ArrowUpRight } from "lucide-react";

interface CountryItem {
  name: string;
  region: string;
  code: string;
}

const participatingCountries: CountryItem[] = [
  { name: "Bulgaria", region: "Europe", code: "bg" },
  { name: "Nigeria", region: "Africa", code: "ng" },
  { name: "Singapore", region: "Asia-Pacific", code: "sg" },
  { name: "Japan", region: "Asia-Pacific", code: "jp" },
  { name: "South Korea", region: "Asia-Pacific", code: "kr" },
  { name: "United Kingdom", region: "Europe", code: "gb" },
  { name: "United States", region: "North America", code: "us" },
  { name: "Canada", region: "North America", code: "ca" },
  { name: "Germany", region: "Europe", code: "de" },
  { name: "Ukraine", region: "Europe", code: "ua" },
  { name: "Senegal", region: "Africa", code: "sn" },
  { name: "Brazil", region: "South America", code: "br" },
  { name: "Mexico", region: "Latin America", code: "mx" },
  { name: "Ireland", region: "Europe", code: "ie" },
  { name: "Australia", region: "Asia-Pacific", code: "au" },
  { name: "India", region: "Asia-Pacific", code: "in" }
];

export default function ParticipatingCountriesSection() {
  return (
    <section id="participating-countries" className="py-12 lg:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Full Countries Grid */}
        <div>
          {/* Split header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-teal uppercase block">
                Global Scale
              </span>
              <h2 className="font-display font-semibold text-[26px] lg:text-[36px] text-brand-dark tracking-tight leading-[1.15]">
                EMC Participating Countries Around the Globe
              </h2>
              <div className="h-1.5 w-12 bg-brand-teal rounded-full" />
            </div>
            
            <div className="lg:col-span-6">
              <p className="text-slate-500 font-sans text-[15px] lg:text-[16px] leading-[1.6]">
                EMC connects thousands of outstanding students across dozens of countries, creating a unified international benchmark of scientific excellence, logical coordination, and cooperative research.
              </p>
            </div>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {participatingCountries.map((country, idx) => (
              <div
                key={idx}
                className="bg-brand-bg rounded-xl p-4 border border-slate-200/50 hover:border-brand-teal/30 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-24"
              >
                <img 
                  src={`https://flagcdn.com/w40/${country.code}.png`} 
                  srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`}
                  alt={`${country.name} flag`}
                  className="h-4 w-auto rounded-[2px] shadow-sm group-hover:scale-110 transition-all duration-300" 
                />
                <div>
                  <h4 className="font-display font-semibold text-[13px] lg:text-[14px] text-brand-dark leading-tight">
                    {country.name}
                  </h4>
                  <span className="text-[9px] font-bold font-display text-slate-400 uppercase tracking-wider block mt-0.5">
                    {country.region}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Global summary card */}
          <div className="mt-10 bg-brand-bg text-brand-dark rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-brand-teal/20">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="h-12 w-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold font-display text-base shrink-0 border border-brand-teal/20">
                35+
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-brand-dark">
                  Interested in bringing EMC to your home country?
                </h4>
                <p className="text-xs text-slate-500 font-sans mt-0.5">
                  We actively expand local national testing hubs for regional Olympiad proctoring.
                </p>
              </div>
            </div>

            <a
              href="mailto:support@emcompetition.org"
              className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold rounded-xl text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-1.5 shrink-0"
            >
              Become a partner hub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
