import React from "react";
import { Compass, Eye, Award } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-16 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Split Layout — Stacked Images Left + Flowing Text Right (Reference Pattern #3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Stacked/Overlapping Images */}
          <div className="lg:col-span-5 relative">
            {/* Large primary image */}
            <div className="rounded-3xl overflow-hidden shadow-xl relative z-[1]">
              <div className="aspect-[3/4] lg:aspect-[3/4]">
                <img
                  src="https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/482242974_945002121174723_6667028209231091350_n.jpg?stp=dst-jpg_tt6&cstp=mx1132x789&ctp=s1132x789&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGdTpCLKcSw1C1L99adgPJDXfvm_UmK5G5d--b9SYrkbqfJQb-92qjRvlVJeo4SUkhWeYDhq1zfiMUfhWb_OWTV&_nc_ohc=6icyO1sQIesQ7kNvwHN6VND&_nc_oc=AdqNkiHxj7eYW2wDF0ylnhOVUpX46F3Pr3fJxvRPjjjPHEraOJZoeCXJWYAxv143XZ7vokvvUk413x3V5Bc0Z1E4&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=_Ii6u8mRtlTIICgNsAhu8g&_nc_ss=7d2a8&oh=00_AQAkxWdWDuQSQ1RWwofBD7vchnQi2Q_Ua-F7kWpv9q1lSA&oe=6A61B9BB"
                  alt="Elizalde Mathematics Competition group"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Smaller overlapping image — bottom-right offset */}
            <div className="absolute -bottom-6 -right-4 lg:-bottom-8 lg:-right-8 w-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-[2]">
              <div className="aspect-[4/3]">
                <img
                  src="https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/457328701_809259274749009_6911267050332238021_n.jpg?stp=dst-jpg_tt6&cstp=mx800x600&ctp=s800x600&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0hH4pGY0TKz-AgHnaBc5NUfjhA2ens89R-OEDZ6ezz9WI0wQ8O-R6-U_qmt87jkpX3S-OgoKZj_lDTms187fs&_nc_ohc=wGqlvuWqL3IQ7kNvwFb-WKz&_nc_oc=AdrMBVZbKNQ15d7VxgE9K4gkHYovynwkl_d-6Jr5nWngNhP6xZBIvdujzyZ6a7fxqKGlij3Y6OoMWJIb79ekSdHm&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=gLnLqLsgubnM2qEEP-owZQ&_nc_ss=7d2a8&oh=00_AQAmeys63sLzx_DIp2b6qf0TKaiCCXHIQ0eT3QKuCbaHzg&oe=6A61D051"
                  alt="Elizalde Mathematics Competition group photo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Brand badge floating on images */}
            <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-6 h-14 w-14 rounded-2xl bg-brand-teal text-white flex items-center justify-center shadow-xl z-[3]">
              <Compass className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Right Column: Flowing Text (Mission + Vision combined) */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <div className="space-y-4">
              <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-teal uppercase block">
                Vision & Mission
              </span>
              <h2 className="font-display font-semibold text-[28px] lg:text-[40px] text-brand-dark tracking-tight leading-[1.12]">
                Beyond Exams
              </h2>
            </div>

            <p className="text-slate-500 font-sans text-[15px] lg:text-[16px] leading-[1.6]">
              EMC is more than an exam. It is a catalyst for logical discovery, global friendship, and lifetime confidence in young thinkers.
            </p>

            {/* Mission Text */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-[17px] lg:text-[18px] text-brand-dark tracking-tight">
                  Our Mission
                </h3>
              </div>
              <p className="text-slate-600 font-sans text-[15px] lg:text-[16px] leading-[1.6] pl-[52px]">
                Nuture talents and provide platforms for mathematical excellence.
              </p>
            </div>

            {/* Vision Text */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-[17px] lg:text-[18px] text-brand-dark tracking-tight">
                  Our Vision
                </h3>
              </div>
              <p className="text-slate-600 font-sans text-[15px] lg:text-[16px] leading-[1.6] pl-[52px]">
                To Inspire and empower young learners globally through Mathematics - bridging practical problem-solving, creativity, and excellence, while providing opportunities that open pathways toward higher education and international achievement.
              </p>
            </div>

            {/* Bottom tags */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200/60">
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-brand-teal">
                <Award className="h-4 w-4 text-brand-teal" />
                <span>Inspiring Logical Excellence</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-brand-gold">
                <Award className="h-4 w-4 text-brand-gold" />
                <span>A Borderless Academic Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
