import React from "react";

export default function MathDiagram() {
  return (
    <div className="relative w-[85%] max-w-[360px] mx-auto aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-none bg-white border border-slate-200 shadow-2xl overflow-visible">
      {/* 1. Base SVG Canvas */}
      <svg
        viewBox="-80 -80 660 660"
        className="absolute inset-0 w-full h-full text-slate-400"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "hidden" }}
      >
        <defs>
          {/* Dot Grid Pattern */}
          <pattern
            id="dotGrid"
            x="0"
            y="0"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#cbd5e1" />
          </pattern>

          {/* Arrowhead Markers */}
          <marker
            id="arrowhead-y"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
          </marker>
          <marker
            id="arrowhead-x"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
          </marker>
        </defs>

        {/* Fill Background with Grid */}
        <rect x="-100" y="-100" width="700" height="700" fill="url(#dotGrid)" />

        {/* Axes */}
        <g stroke="#94a3b8" strokeWidth="3">
          {/* Y-Axis */}
          <line x1="250" y1="30" x2="250" y2="470" markerStart="url(#arrowhead-y)" />
          {/* X-Axis */}
          <line x1="30" y1="250" x2="470" y2="250" markerEnd="url(#arrowhead-x)" />
        </g>

        {/* Dashed Unit Circle */}
        <circle
          cx="250"
          cy="250"
          r="100"
          stroke="#3b82f6"
          strokeWidth="4"
          strokeDasharray="10 10"
          fill="none"
        />

        {/* Teal Sine Wave */}
        <path
          d="M 25 250 C 100 0, 150 0, 250 250 C 350 500, 400 500, 475 250"
          stroke="#0d9488"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Horizontal chord in circle */}
        <line x1="163.4" y1="300" x2="336.6" y2="300" stroke="#3b82f6" strokeWidth="4" />

        {/* Golden Right Triangle */}
        {/* Hypotenuse goes from origin to (370, 130) */}
        <polygon
          points="250,250 370,250 370,130"
          fill="#fef3c7"
          fillOpacity="0.8"
          stroke="#f59e0b"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Right Angle Indicator */}
        <polyline points="350,250 350,230 370,230" stroke="#f59e0b" strokeWidth="3" fill="none" />

        {/* Theta Angle Arc */}
        <path
          d="M 300 250 A 50 50 0 0 0 285.35 214.65"
          stroke="#f59e0b"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="315"
          y="235"
          fill="#f59e0b"
          fontSize="24"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          θ
        </text>

        {/* Center Red Dot */}
        <circle cx="250" cy="250" r="8" fill="#ef4444" />
      </svg>

      {/* 2. Floating Formula Cards */}
      <div className="absolute top-[15%] left-[8%] md:left-[12%] bg-white px-5 py-2.5 rounded-none shadow-lg border border-slate-100 flex items-center justify-center font-mono font-bold text-[#0d9488] text-sm md:text-lg tracking-tight hover:-translate-y-1 transition-transform cursor-default">
        f(x) = sin(x)
      </div>

      <div className="absolute bottom-[20%] right-[10%] md:right-[15%] bg-white px-5 py-2.5 rounded-none shadow-lg border border-slate-100 flex items-center justify-center font-mono font-bold text-slate-800 text-sm md:text-lg tracking-tight hover:-translate-y-1 transition-transform cursor-default z-10">
        a² + b² = c²
      </div>

      {/* 3. EMC Academic Challenge Tournament 2026 Card */}
      {/* Placed breaking out of the bottom right corner slightly */}
      <div className="absolute -bottom-6 -right-2 md:-right-8 bg-white p-4 rounded-none shadow-2xl border border-slate-100 flex items-center gap-4 z-20 hover:-translate-y-2 transition-transform duration-300">
        <div className="bg-brand-teal/10 text-brand-teal font-display font-extrabold text-sm md:text-base px-3 py-2 rounded-none">
          EMC
        </div>
        <div className="pr-4">
          <div className="font-sans font-bold text-brand-dark text-sm md:text-[15px] leading-tight">
            Academic Challenge
          </div>
          <div className="font-sans font-semibold text-brand-teal text-xs md:text-sm mt-0.5">
            Tournament 2026
          </div>
        </div>
      </div>
    </div>
  );
}
