import React from "react";

export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      id="emc-logo"
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Upper Mortarboard Cap */}
      <path
        d="M100 25 L165 52 L100 79 L35 52 Z"
        fill="#141414"
        stroke="#141414"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M62 63 V85 C62 105, 138 105, 138 85 V63"
        fill="#141414"
        stroke="#141414"
        strokeWidth="2"
      />
      {/* Tassel */}
      <path
        d="M50 58 V78 L45 83"
        stroke="#141414"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="45" cy="85" r="4.5" fill="#F2A93B" />

      {/* Circle Badge below Cap */}
      <circle cx="100" cy="115" r="45" fill="#141414" />
      <circle cx="100" cy="115" r="41" fill="#FAF9F6" />

      {/* Grid Quadrants */}
      {/* Top Left Quadrant - Orange/Yellow (+) */}
      <path
        d="M100 115 H60 A40 40 0 0 1 100 75 Z"
        fill="#F2A93B"
      />
      {/* Plus Sign */}
      <path
        d="M77 95 H83 M80 92 V98"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Top Right Quadrant - Teal (-) */}
      <path
        d="M100 115 V75 A40 40 0 0 1 140 115 Z"
        fill="#0F7173"
      />
      {/* Minus Sign */}
      <path
        d="M117 95 H123"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Bottom Left Quadrant - Green (x) */}
      <path
        d="M100 115 V155 A40 40 0 0 1 60 115 Z"
        fill="#2E8B3D"
      />
      {/* Multiply Sign */}
      <path
        d="M77 132 L83 138 M83 132 L77 138"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Bottom Right Quadrant - Red (divide) */}
      <path
        d="M100 115 H140 A40 40 0 0 1 100 155 Z"
        fill="#D9342B"
      />
      {/* Division Sign */}
      <path
        d="M117 135 H123 M120 131 A1.2 1.2 0 1 1 120 131 M120 139 A1.2 1.2 0 1 1 120 139"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Surrounding outer colored ring segments */}
      {/* Orange Arcs left-top */}
      <path
        d="M52 100 A 58 58 0 0 1 58 83"
        stroke="#F2A93B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Teal Arcs bottom-left */}
      <path
        d="M48 122 A 58 58 0 0 0 60 143"
        stroke="#0F7173"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Green Arcs bottom */}
      <path
        d="M75 160 A 58 58 0 0 0 112 165"
        stroke="#2E8B3D"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Red Arcs bottom-right */}
      <path
        d="M128 158 A 58 58 0 0 0 148 143"
        stroke="#D9342B"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
