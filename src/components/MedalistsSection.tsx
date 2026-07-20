"use client";
import React, { useState } from "react";
import { Award, Trophy, Star, Shield, Filter } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

interface Medalist {
  name: string;
  award: string; // Gold Medalist, Silver Medalist, Global Qualifier, etc.
  category: string;
  school: string;
  country: string;
  photoUrl: string;
  year: number;
}

const medalistsData: Medalist[] = [
  // 2025
  {
    name: "Alexander Petrov",
    award: "Gold Medalist",
    category: "Albert Einstein Bracket",
    school: "Sofia Mathematics High School",
    country: "Bulgaria",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/539067889_1072374581770809_6929289282660913785_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHACzMLO1RmgC0sOalBa_LrcSrMG1iROhpxKswbWJE6GkQUd-oC8HVB0rf4buWzNYkW9WykzJOIWBXEuKOerUku&_nc_ohc=cHWcbeGJknAQ7kNvwE7CB5s&_nc_oc=AdpTGMi44LO009cCHxe_JPhnAFlRmcgKXdvLri__DtgJU4i8U6kmC95SNzUTbQI6zlEVsbw9_1Yfu3HjOA2ciAFY&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=0QDSfVf5r78YTsE-7WMlNQ&_nc_ss=7d2a8&oh=00_AQB1MXwFF9g-tkVJWUqm3ziWvXilyObG5PQmnxN8t5OHNQ&oe=6A6335FE",
    year: 2025
  },
  {
    name: "Chloe Chen",
    award: "Gold Medalist",
    category: "Fibonacci Bracket",
    school: "Singapore International School",
    country: "Singapore",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/495382619_990501873291414_3612276526910567374_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFv6y7bM9mTJYWCmLoUpv86IM-Cgj_Uw9Ygz4KCP9TD1mzdrPxJCFA60RQkbY5q9LQyNs6L_Oe7FCwdZhpasQot&_nc_ohc=o7FQb64lt0MQ7kNvwGIyoUD&_nc_oc=AdpUkaQAiTdjhHaRtjayjeEJjpFFPeShM_IRCaix-ZLfzZuL_sCfTAl9qrnPJ68xcAfde0OWvT6UPl4A1IGhOICy&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=3LZFZbICEBBduXvjFwe48w&_nc_ss=7d2a8&oh=00_AQAkaRWz_M_snsCySwep_QVM3ByiJEupgn9ZmuNbWLu30Q&oe=6A633E42",
    year: 2025
  },
  {
    name: "Maimunah Salako",
    award: "Silver Medalist",
    category: "Honey Bee Bracket",
    school: "Greensprings School",
    country: "Nigeria",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/539593770_1072374651770802_6069385857612464208_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGAWrKlVTiuMvAgm4VMg-OW9eeSqCaabu3155KoJppu7TmBWj-xlkxuzL5Z3J3Wxj7I_u3-VIrnrnFS_Yh4SMBe&_nc_ohc=JyTI1LTRPb8Q7kNvwEYwuYq&_nc_oc=AdqIQl3oEukCBaq2n0OoJHKMQDmc_0WFFVbqShvVGeh6MS38UzCUyVApkDNTIHLcE38E0mNipLmKskBfmPOpU7Kw&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=CfIlTZwpblZZFw7994Qdqg&_nc_ss=7d2a8&oh=00_AQB4a15GF9uQRcifhhds0PAbWIHA8drMMrzNgfhz8OY__Q&oe=6A633E84",
    year: 2025
  },
  {
    name: "Liam O'Connor",
    award: "Global Finals Qualifier",
    category: "Albert Einstein Bracket",
    school: "Dublin Academic Center",
    country: "Ireland",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/495380972_990501793291422_1182093296632822667_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUAZ8aemcCjcgGnt6clcxc1SprCsYzWXzVKmsKxjNZfOoOpAACT7yNCTvicIX7DJl2YysBn_64lw-UdHEPCSFR&_nc_ohc=aXn6Y4YsreoQ7kNvwF910sZ&_nc_oc=Adr2ZmiqFQopChIJCEpvaJyNU8KOvBoWk5OlgeDSRyaUnrDgF5V9EIExWQHHEjK9A2-VIQxDLs1Wf_xWWBnkHnev&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=Jf_edBxOa6mKe_k1s-PegQ&_nc_ss=7d2a8&oh=00_AQBN43CxtTLPmtfr4adhZ56dkzJNAYFokTJfQtJxcYal-Q&oe=6A633F3F",
    year: 2025
  },
  {
    name: "Sofia Martinez",
    award: "Global Finals Qualifier",
    category: "Honey Bee Bracket",
    school: "Colegio de Monterrey",
    country: "Mexico",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/539067889_1072374581770809_6929289282660913785_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHACzMLO1RmgC0sOalBa_LrcSrMG1iROhpxKswbWJE6GkQUd-oC8HVB0rf4buWzNYkW9WykzJOIWBXEuKOerUku&_nc_ohc=cHWcbeGJknAQ7kNvwE7CB5s&_nc_oc=AdpTGMi44LO009cCHxe_JPhnAFlRmcgKXdvLri__DtgJU4i8U6kmC95SNzUTbQI6zlEVsbw9_1Yfu3HjOA2ciAFY&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=0QDSfVf5r78YTsE-7WMlNQ&_nc_ss=7d2a8&oh=00_AQB1MXwFF9g-tkVJWUqm3ziWvXilyObG5PQmnxN8t5OHNQ&oe=6A6335FE",
    year: 2025
  },

  // 2024
  {
    name: "Ji-Woo Park",
    award: "Gold Medalist",
    category: "Albert Einstein Bracket",
    school: "Seoul Science High School",
    country: "South Korea",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/495382619_990501873291414_3612276526910567374_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFv6y7bM9mTJYWCmLoUpv86IM-Cgj_Uw9Ygz4KCP9TD1mzdrPxJCFA60RQkbY5q9LQyNs6L_Oe7FCwdZhpasQot&_nc_ohc=o7FQb64lt0MQ7kNvwGIyoUD&_nc_oc=AdpUkaQAiTdjhHaRtjayjeEJjpFFPeShM_IRCaix-ZLfzZuL_sCfTAl9qrnPJ68xcAfde0OWvT6UPl4A1IGhOICy&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=3LZFZbICEBBduXvjFwe48w&_nc_ss=7d2a8&oh=00_AQAkaRWz_M_snsCySwep_QVM3ByiJEupgn9ZmuNbWLu30Q&oe=6A633E42",
    year: 2024
  },
  {
    name: "Taras Kovalenko",
    award: "Gold Medalist",
    category: "Fibonacci Bracket",
    school: "Kyiv Academic Lyceum",
    country: "Ukraine",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/539593770_1072374651770802_6069385857612464208_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGAWrKlVTiuMvAgm4VMg-OW9eeSqCaabu3155KoJppu7TmBWj-xlkxuzL5Z3J3Wxj7I_u3-VIrnrnFS_Yh4SMBe&_nc_ohc=JyTI1LTRPb8Q7kNvwEYwuYq&_nc_oc=AdqIQl3oEukCBaq2n0OoJHKMQDmc_0WFFVbqShvVGeh6MS38UzCUyVApkDNTIHLcE38E0mNipLmKskBfmPOpU7Kw&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=CfIlTZwpblZZFw7994Qdqg&_nc_ss=7d2a8&oh=00_AQB4a15GF9uQRcifhhds0PAbWIHA8drMMrzNgfhz8OY__Q&oe=6A633E84",
    year: 2024
  },
  {
    name: "Carlos Souza",
    award: "Silver Medalist",
    category: "Honey Bee Bracket",
    school: "São Paulo Technical Institute",
    country: "Brazil",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/495380972_990501793291422_1182093296632822667_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUAZ8aemcCjcgGnt6clcxc1SprCsYzWXzVKmsKxjNZfOoOpAACT7yNCTvicIX7DJl2YysBn_64lw-UdHEPCSFR&_nc_ohc=aXn6Y4YsreoQ7kNvwF910sZ&_nc_oc=Adr2ZmiqFQopChIJCEpvaJyNU8KOvBoWk5OlgeDSRyaUnrDgF5V9EIExWQHHEjK9A2-VIQxDLs1Wf_xWWBnkHnev&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=Jf_edBxOa6mKe_k1s-PegQ&_nc_ss=7d2a8&oh=00_AQBN43CxtTLPmtfr4adhZ56dkzJNAYFokTJfQtJxcYal-Q&oe=6A633F3F",
    year: 2024
  },
  {
    name: "Fatima Al-Mutawa",
    award: "Global Finals Qualifier",
    category: "Albert Einstein Bracket",
    school: "Kuwait National Academy",
    country: "Kuwait",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/539067889_1072374581770809_6929289282660913785_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHACzMLO1RmgC0sOalBa_LrcSrMG1iROhpxKswbWJE6GkQUd-oC8HVB0rf4buWzNYkW9WykzJOIWBXEuKOerUku&_nc_ohc=cHWcbeGJknAQ7kNvwE7CB5s&_nc_oc=AdpTGMi44LO009cCHxe_JPhnAFlRmcgKXdvLri__DtgJU4i8U6kmC95SNzUTbQI6zlEVsbw9_1Yfu3HjOA2ciAFY&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=0QDSfVf5r78YTsE-7WMlNQ&_nc_ss=7d2a8&oh=00_AQB1MXwFF9g-tkVJWUqm3ziWvXilyObG5PQmnxN8t5OHNQ&oe=6A6335FE",
    year: 2024
  },
  {
    name: "Hans Weber",
    award: "Global Finals Qualifier",
    category: "Fibonacci Bracket",
    school: "Munich Academic Gymnasium",
    country: "Germany",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/495382619_990501873291414_3612276526910567374_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFv6y7bM9mTJYWCmLoUpv86IM-Cgj_Uw9Ygz4KCP9TD1mzdrPxJCFA60RQkbY5q9LQyNs6L_Oe7FCwdZhpasQot&_nc_ohc=o7FQb64lt0MQ7kNvwGIyoUD&_nc_oc=AdpUkaQAiTdjhHaRtjayjeEJjpFFPeShM_IRCaix-ZLfzZuL_sCfTAl9qrnPJ68xcAfde0OWvT6UPl4A1IGhOICy&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=3LZFZbICEBBduXvjFwe48w&_nc_ss=7d2a8&oh=00_AQAkaRWz_M_snsCySwep_QVM3ByiJEupgn9ZmuNbWLu30Q&oe=6A633E42",
    year: 2024
  }
];

export default function MedalistsSection() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filteredMedalists = medalistsData.filter((student) => {
    if (student.year !== selectedYear) return false;
    if (activeFilter === "ALL") return true;
    if (activeFilter === "MEDALS") return student.award.includes("Medalist");
    if (activeFilter === "QUALIFIERS") return student.award.includes("Qualifier");
    return true;
  });

  return (
    <section id="winners" className="py-16 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header — Centered (Reference Pattern #8: "OUR BLOG / Latest articles") */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-gold uppercase">
            Global Elite
          </span>
          <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark mt-3 tracking-tight leading-[1.12]">
            Global Finals Medalists & Qualifiers
          </h2>
          <p className="text-slate-500 font-sans mt-4 text-[15px] lg:text-[16px] leading-[1.6]">
            Honoring the young minds who demonstrated logical excellence at the EMC Global Finals. Meet our champions, silver medalists, and qualifiers from every corner of the earth.
          </p>
        </ScrollReveal>

        {/* Year and Type Selection Filters */}
        <ScrollReveal className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-10">
          {/* Year Buttons */}
          <div className="flex bg-brand-bg p-1 rounded-none border border-slate-200/50">
            <button
              onClick={() => setSelectedYear(2025)}
              className={`px-5 py-2 rounded-none text-xs font-bold font-display tracking-wider transition-all cursor-pointer ${
                selectedYear === 2025 ? "bg-brand-teal text-white shadow-sm" : "text-slate-500 hover:text-brand-dark"
              }`}
            >
              EMC 2025
            </button>
            <button
              onClick={() => setSelectedYear(2024)}
              className={`px-5 py-2 rounded-none text-xs font-bold font-display tracking-wider transition-all cursor-pointer ${
                selectedYear === 2024 ? "bg-brand-teal text-white shadow-sm" : "text-slate-500 hover:text-brand-dark"
              }`}
            >
              EMC 2024
            </button>
          </div>

          {/* Award Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter("ALL")}
              className={`px-4 py-1.5 rounded-none text-xs font-medium transition-all border cursor-pointer ${
                activeFilter === "ALL"
                  ? "bg-brand-gold/15 text-brand-gold border-brand-gold/30 font-bold"
                  : "bg-white border-slate-200 text-slate-500 hover:text-brand-dark hover:border-slate-300"
              }`}
            >
              All Honorees
            </button>
            <button
              onClick={() => setActiveFilter("MEDALS")}
              className={`px-4 py-1.5 rounded-none text-xs font-medium transition-all border cursor-pointer ${
                activeFilter === "MEDALS"
                  ? "bg-brand-gold/15 text-brand-gold border-brand-gold/30 font-bold"
                  : "bg-white border-slate-200 text-slate-500 hover:text-brand-dark hover:border-slate-300"
              }`}
            >
              Medalists Only
            </button>
            <button
              onClick={() => setActiveFilter("QUALIFIERS")}
              className={`px-4 py-1.5 rounded-none text-xs font-medium transition-all border cursor-pointer ${
                activeFilter === "QUALIFIERS"
                  ? "bg-brand-gold/15 text-brand-gold border-brand-gold/30 font-bold"
                  : "bg-white border-slate-200 text-slate-500 hover:text-brand-dark hover:border-slate-300"
              }`}
            >
              Qualifiers Only
            </button>
          </div>
        </ScrollReveal>

        {/* Article-style Card Grid (Reference Pattern: Blog cards with image, tag, title, date) */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMedalists.map((student, index) => {
            const isGold = student.award === "Gold Medalist";
            const isSilver = student.award === "Silver Medalist";

            return (
              <StaggerItem
                key={`${student.name}-${index}`}
                className="group bg-white rounded-none border border-slate-200/50 hover:border-brand-gold/30 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Large Image — article card style */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={student.photoUrl}
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Award badge overlay */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-none text-[9px] font-bold font-display uppercase tracking-wider text-white shadow-md ${
                    isGold ? "bg-brand-gold" : isSilver ? "bg-slate-500" : "bg-brand-teal"
                  }`}>
                    {student.award}
                  </div>
                </div>

                {/* Card Content — below image */}
                <div className="p-5 space-y-3">
                  {/* Category tag */}
                  <span className="text-[10px] font-bold font-display text-brand-teal uppercase tracking-widest">
                    {student.category}
                  </span>

                  {/* Name */}
                  <h3 className="font-display font-semibold text-[16px] lg:text-[17px] text-brand-dark group-hover:text-brand-gold transition-colors leading-tight">
                    {student.name}
                  </h3>

                  {/* School + Country */}
                  <div className="flex items-center justify-between text-xs text-slate-500 font-sans pt-2 border-t border-slate-100">
                    <span className="truncate mr-2">{student.school}</span>
                    <span className="font-bold font-display text-brand-teal uppercase text-[10px] shrink-0">{student.country}</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Empty state when filtering yields no match */}
        {filteredMedalists.length === 0 && (
          <div className="text-center py-16 bg-brand-bg rounded-none border border-dashed border-slate-200">
            <span className="block text-slate-400 font-display text-xs">No honorees found match these filter rules.</span>
          </div>
        )}
      </div>
    </section>
  );
}
