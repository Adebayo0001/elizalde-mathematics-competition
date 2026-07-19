import React from "react";

export default function OwlbertMascot({ className = "h-40 w-40" }: { className?: string }) {
  return (
    <svg
      id="owlbert-mascot"
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Soft Circle */}
      <circle cx="100" cy="110" r="75" fill="#f0fdfa" />
      <circle cx="100" cy="110" r="70" fill="#e0f2fe" opacity="0.6" />

      {/* Owl Body/Wings */}
      <path
        d="M60 150 C50 120, 50 80, 100 80 C150 80, 150 120, 140 150 C130 170, 70 170, 60 150 Z"
        fill="#0f766e"
      />
      {/* Chest Feathers (light teal) */}
      <path
        d="M75 125 C75 105, 125 105, 125 125 C125 145, 75 145, 75 125 Z"
        fill="#f0fdfa"
      />
      {/* Little Feather Textures */}
      <path d="M90 120 C95 125, 105 125, 110 120" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M85 132 C92 137, 108 137, 115 132" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M92 142 C96 146, 104 146, 108 142" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />

      {/* Head */}
      <path
        d="M50 90 C50 65, 150 65, 150 90 C150 115, 50 115, 50 90 Z"
        fill="#0d9488"
      />

      {/* Ears / Feather Tufts */}
      <path d="M50 80 L35 55 L65 72 Z" fill="#0f766e" />
      <path d="M150 80 L165 55 L135 72 Z" fill="#0f766e" />

      {/* Cute Big Eyes */}
      {/* Left Eye Outer (White) */}
      <circle cx="78" cy="88" r="20" fill="#ffffff" stroke="#115e59" strokeWidth="1.5" />
      <circle cx="78" cy="88" r="14" fill="#f59e0b" /> {/* Iris */}
      <circle cx="76" cy="88" r="7" fill="#111111" /> {/* Pupil */}
      <circle cx="73" cy="85" r="3" fill="#ffffff" /> {/* Specular highlight */}

      {/* Right Eye Outer (White) */}
      <circle cx="122" cy="88" r="20" fill="#ffffff" stroke="#115e59" strokeWidth="1.5" />
      <circle cx="122" cy="88" r="14" fill="#f59e0b" /> {/* Iris */}
      <circle cx="124" cy="88" r="7" fill="#111111" /> {/* Pupil */}
      <circle cx="121" cy="85" r="3" fill="#ffffff" /> {/* Specular highlight */}

      {/* Intellectual Round Glasses */}
      <circle cx="78" cy="88" r="22" stroke="#111111" strokeWidth="3" fill="none" />
      <circle cx="122" cy="88" r="22" stroke="#111111" strokeWidth="3" fill="none" />
      <path d="M100 88 H100" stroke="#111111" strokeWidth="4" />
      <path d="M56 88 H48" stroke="#111111" strokeWidth="3" />
      <path d="M144 88 H152" stroke="#111111" strokeWidth="3" />

      {/* Orange Beak */}
      <path
        d="M100 92 L94 104 L106 104 Z"
        fill="#f59e0b"
        stroke="#d97706"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Graduation Cap on Owl Head */}
      <path
        d="M100 32 L145 46 L100 60 L55 46 Z"
        fill="#111111"
        stroke="#111111"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M78 52 V64 C78 74, 122 74, 122 64 V52"
        fill="#111111"
        stroke="#111111"
        strokeWidth="1"
      />
      {/* Tassel */}
      <path
        d="M66 49 V66 L62 70"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="62" cy="72" r="3" fill="#f59e0b" />

      {/* Little Owl Feet */}
      <path d="M80 162 V170 M85 162 V170 M75 162 V168" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <path d="M120 162 V170 M115 162 V170 M125 162 V168" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
