"use client";
import React from "react";
import Image from "next/image";

export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/Elizade-logo.png"
        alt="Elizalde Mathematics Competition Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}

