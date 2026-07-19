import React from "react";

export default function ImpactSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="py-6 md:py-0 flex flex-col items-center justify-center">
            <h3 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-3">
              5,000+
            </h3>
            <p className="font-sans text-white/80 font-semibold uppercase tracking-[0.15em] text-sm">
              Global Participants
            </p>
          </div>
          <div className="py-6 md:py-0 flex flex-col items-center justify-center">
            <h3 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-3">
              700+
            </h3>
            <p className="font-sans text-white/80 font-semibold uppercase tracking-[0.15em] text-sm">
              Schools Applied
            </p>
          </div>
          <div className="py-6 md:py-0 flex flex-col items-center justify-center">
            <h3 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-3">
              35+
            </h3>
            <p className="font-sans text-white/80 font-semibold uppercase tracking-[0.15em] text-sm">
              Countries Covered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
