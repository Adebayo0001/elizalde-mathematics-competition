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
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/495382619_990501873291414_3612276526910567374_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFv6y7bM9mTJYWCmLoUpv86IM-Cgj_Uw9Ygz4KCP9TD1mzdrPxJCFA60RQkbY5q9LQyNs6L_Oe7FCwdZhpasQot&_nc_ohc=o7FQb64lt0MQ7kNvwGIyoUD&_nc_oc=AdpUkaQAiTdjhHaRtjayjeEJjpFFPeShM_IRCaix-ZLfzZuL_sCfTAl9qrnPJ68xcAfde0OWvT6UPl4A1IGhOICy&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=3LZFZbICEBBduXvjFwe48w&_nc_ss=7d2a8&oh=00_AQAkaRWz_M_snsCySwep_QVM3ByiJEupgn9ZmuNbWLu30Q&oe=6A633E42",
  },
  {
    name: "Kenji Sato",
    role: "Creative Proof Constructor",
    school: "Tokyo Science Academy",
    country: "Japan",
    spotlightText: "Kenji was recognized by our international jury for constructing an exceptionally elegant geometric proof during the Team Project Stage, resolving a multi-variable grid problem with rare originality.",
    highlight: "Awarded Jury Originality Citation",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/539593770_1072374651770802_6069385857612464208_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGAWrKlVTiuMvAgm4VMg-OW9eeSqCaabu3155KoJppu7TmBWj-xlkxuzL5Z3J3Wxj7I_u3-VIrnrnFS_Yh4SMBe&_nc_ohc=JyTI1LTRPb8Q7kNvwEYwuYq&_nc_oc=AdqIQl3oEukCBaq2n0OoJHKMQDmc_0WFFVbqShvVGeh6MS38UzCUyVApkDNTIHLcE38E0mNipLmKskBfmPOpU7Kw&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=CfIlTZwpblZZFw7994Qdqg&_nc_ss=7d2a8&oh=00_AQB4a15GF9uQRcifhhds0PAbWIHA8drMMrzNgfhz8OY__Q&oe=6A633E84",
  },
  {
    name: "Amadi Diallo",
    role: "Inspiring Team Leader",
    school: "Dakar Academy",
    country: "Senegal",
    spotlightText: "Amadi spearheaded coordinates for a remote high school team under severe connectivity limitations. His perseverance brought three school team math projects into full publication standards.",
    highlight: "Published 3 team math modules",
    photoUrl: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/495380972_990501793291422_1182093296632822667_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUAZ8aemcCjcgGnt6clcxc1SprCsYzWXzVKmsKxjNZfOoOpAACT7yNCTvicIX7DJl2YysBn_64lw-UdHEPCSFR&_nc_ohc=aXn6Y4YsreoQ7kNvwF910sZ&_nc_oc=Adr2ZmiqFQopChIJCEpvaJyNU8KOvBoWk5OlgeDSRyaUnrDgF5V9EIExWQHHEjK9A2-VIQxDLs1Wf_xWWBnkHnev&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=Jf_edBxOa6mKe_k1s-PegQ&_nc_ss=7d2a8&oh=00_AQBN43CxtTLPmtfr4adhZ56dkzJNAYFokTJfQtJxcYal-Q&oe=6A633F3F",
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
