"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Sparkles,
  Trophy,
  Users,
  BookOpen,
  Book,
  Calculator,
  Layers,
  GraduationCap,
  Brain,
  Target,
  Play,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

import Logo from "../components/Logo";
import MascotSection from "../components/MascotSection";
import MissionVisionSection from "../components/MissionVisionSection";
import ImpactSection from "../components/ImpactSection";
import CompetitionStagesSection from "../components/CompetitionStagesSection";
import TimelineCalendarSection from "../components/TimelineCalendarSection";
import WorldOfMathematiciansSection from "../components/WorldOfMathematiciansSection";
import MomentsMarqueeSection from "../components/MomentsMarqueeSection";

import FAQSection from "../components/FAQSection";
import MedalistsSection from "../components/MedalistsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ParticipatingCountriesSection from "../components/ParticipatingCountriesSection";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import WhoCanParticipateSection from "../components/WhoCanParticipateSection";
import NewsSection from "../components/NewsSection";
import PartnersSection from "../components/PartnersSection";
import SamplePapersSection from "../components/SamplePapersSection";
import GlobalHeader from "../components/GlobalHeader";

export default function HomePage() {
  const router = useRouter();
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const handleRegisterClick = () => {
    if (isRegisterLoading) return;
    setIsRegisterLoading(true);
    router.push("/register");
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark antialiased selection:bg-brand-blue/10 selection:text-brand-blue scroll-smooth">
      {/* ──────────────────────────────────────────────────────────────────
          1. NAVIGATION HEADER
          ────────────────────────────────────────────────────────────────── */}
      <GlobalHeader />

      <main>
        {/* ──────────────────────────────────────────────────────────────────
            2. HERO SECTION — Full-Width Video Background
            ────────────────────────────────────────────────────────────────── */}
        <section id="hero" className="relative min-h-[80vh] lg:min-h-[85vh] overflow-hidden bg-brand-blue flex items-end text-white pt-16 lg:pt-24">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          >
            <source src="/images/hero-bg.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay — ensures text readability over video */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/70 to-brand-blue/40 z-[1]" />

          {/* Hero Content — positioned at bottom-left like reference */}
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24 pt-20 lg:pt-32 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="max-w-3xl space-y-6"
            >


              {/* Large Editorial Headline */}
              <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-6xl text-white leading-[1.08] tracking-tight">
                Every student has a <span className="text-brand-red">moment</span> where they realize what they're capable of.
              </h1>

              <p className="text-white/80 font-sans text-base sm:text-lg leading-[1.6] max-w-2xl">
                EMC gives students around the world the chance to test their thinking, build their confidence, and discover what they can really do — in math and in themselves.
              </p>

              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <a
                  href="#about"
                  className="px-6 py-4 border border-white hover:bg-white/10 text-white font-semibold rounded-none text-sm transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </motion.div>

            {/* Social Proof Bar — bottom edge overlay */}
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-8 text-[13px] font-medium text-white/70">
              <span className="flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-white" />
                35+ Countries Participating
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-white" />
                Global Final Stage
              </span>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────
            3. ABOUT SECTION — Two Column Layout
            ────────────────────────────────────────────────────────────────── */}
        <section id="about" className="py-16 lg:py-28 bg-white relative overflow-hidden group/section">


          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column — Image */}
              <div className="lg:col-span-5 w-full">
                <ScrollReveal direction="right" delay={0.1}>
                  <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-transparent flex items-center justify-center mb-6 lg:mb-0 w-full rounded-none group">
                    <Image 
                      src="/images/logo-elizalde.png" 
                      alt="Elizalde Mathematics Competition Logo" 
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-12 relative z-10 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column — Text & 4 Icon Feature Cards */}
              <div className="lg:col-span-7 flex flex-col lg:pl-6">
                {/* Header */}
                <ScrollReveal delay={0.2} className="text-left mb-12">
                  <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-red uppercase">
                    About Elizalde Mathematics Competition
                  </span>
                  <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mt-3 tracking-tight leading-[1.12]">
                    Together, We Solve.
                  </h2>
                  <div className="text-slate-500 font-sans mt-5 text-sm sm:text-base leading-[1.6] space-y-4 text-justify">
                    <p>
                      The Elizalde Mathematics Competition (EMC) is an international math contest dedicated to engaging students in the beauty and power of mathematics. Founded on academic excellence and inclusivity, it challenges young minds and cultivates a lifelong passion for problem-solving across diverse communities.
                    </p>
                    <p>
                      More than a competition, EMC is a developmental platform for critical thinking. Through curated rounds, participants at all levels stretch their intellectual capabilities, build resilience, and join a vibrant global community of aspiring mathematicians.
                    </p>
                    <div className="mt-8 pt-8 border-t border-slate-100">
                      <p className="font-medium text-brand-dark mb-6">
                        Join thousands of students across the globe:
                      </p>
                      <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.2
                            }
                          }
                        }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-10 overflow-hidden pt-4 -mt-4"
                      >
                        {/* Compete */}
                        <motion.div 
                          variants={{
                            hidden: { y: 80, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.5, duration: 0.8 } }
                          }}
                          className="flex items-center justify-between sm:justify-start gap-3 group cursor-default w-full sm:w-auto p-4 px-6 sm:p-0 sm:px-0 bg-brand-red/5 sm:bg-transparent rounded-xl sm:rounded-none hover:bg-brand-red/10 sm:hover:bg-transparent transition-colors"
                        >
                          <span className="font-display font-black text-brand-red text-5xl lg:text-6xl tracking-tight group-hover:scale-105 transition-transform">Compete.</span>
                          <Calculator className="h-8 w-8 lg:h-10 lg:w-10 text-brand-red opacity-80 group-hover:scale-110 transition-transform" />
                        </motion.div>
                        {/* Learn */}
                        <motion.div 
                          variants={{
                            hidden: { y: 80, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.5, duration: 0.8 } }
                          }}
                          className="flex items-center justify-between sm:justify-start gap-3 group cursor-default w-full sm:w-auto p-4 px-6 sm:p-0 sm:px-0 bg-brand-blue/5 sm:bg-transparent rounded-xl sm:rounded-none hover:bg-brand-blue/10 sm:hover:bg-transparent transition-colors"
                        >
                          <span className="font-display font-black text-brand-blue text-5xl lg:text-6xl tracking-tight group-hover:scale-105 transition-transform">Learn.</span>
                          <Book className="h-8 w-8 lg:h-10 lg:w-10 text-brand-blue opacity-80 group-hover:scale-110 transition-transform" />
                        </motion.div>
                        {/* Excel */}
                        <motion.div 
                          variants={{
                            hidden: { y: 80, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.5, duration: 0.8 } }
                          }}
                          className="flex items-center justify-between sm:justify-start gap-3 group cursor-default w-full sm:w-auto p-4 px-6 sm:p-0 sm:px-0 bg-brand-gold/5 sm:bg-transparent rounded-xl sm:rounded-none hover:bg-brand-gold/10 sm:hover:bg-transparent transition-colors"
                        >
                          <span className="font-display font-black text-brand-gold text-5xl lg:text-6xl tracking-tight group-hover:scale-105 transition-transform">Excel.</span>
                          <Trophy className="h-8 w-8 lg:h-10 lg:w-10 text-brand-gold opacity-80 group-hover:scale-110 transition-transform" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>


              </div>

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────
            4. MISSION & VISION SECTION — Stacked Images + Text
            ────────────────────────────────────────────────────────────────── */}
        <MissionVisionSection />

        {/* ──────────────────────────────────────────────────────────────────
            4a. MASCOT SECTION
            ────────────────────────────────────────────────────────────────── */}
        <MascotSection />

        {/* ──────────────────────────────────────────────────────────────────
            4a. WHO CAN PARTICIPATE SECTION
            ────────────────────────────────────────────────────────────────── */}
        <WhoCanParticipateSection />

        {/* ──────────────────────────────────────────────────────────────────
            4b. IMPACT SECTION
            ────────────────────────────────────────────────────────────────── */}
        <ImpactSection />

        {/* ──────────────────────────────────────────────────────────────────
            8. COMPETITION STAGES SECTION
            ────────────────────────────────────────────────────────────────── */}
        <CompetitionStagesSection />

        {/* ──────────────────────────────────────────────────────────────────
            9. EVENT CALENDAR / OLYMPIAD ROADMAP SECTION
            ────────────────────────────────────────────────────────────────── */}
        <TimelineCalendarSection />

        {/* ──────────────────────────────────────────────────────────────────
            8.5. MOMENTS MARQUEE SECTION
            ────────────────────────────────────────────────────────────────── */}
        <MomentsMarqueeSection />

        {/* ──────────────────────────────────────────────────────────────────
            10. WORLD OF MATHEMATICIANS SECTION
            ────────────────────────────────────────────────────────────────── */}
        <WorldOfMathematiciansSection />

        {/* ──────────────────────────────────────────────────────────────────
            12. GLOBAL FINALISTS / MEDALISTS — Article Cards (Reference Pattern #8)
            ────────────────────────────────────────────────────────────────── */}
        <MedalistsSection />

        {/* ──────────────────────────────────────────────────────────────────
            7. PARTICIPATING COUNTRIES — Brand Row (Reference Pattern #6)
            ────────────────────────────────────────────────────────────────── */}
        <ParticipatingCountriesSection />

        {/* ──────────────────────────────────────────────────────────────────
            5. TESTIMONIALS — Carousel with Dot Pagination
            ────────────────────────────────────────────────────────────────── */}
        <TestimonialsSection />


        {/* ──────────────────────────────────────────────────────────────────
            11. FAQ SECTION — Split Layout (Reference Pattern #7)
            ────────────────────────────────────────────────────────────────── */}
        <PartnersSection />
        <SamplePapersSection />
        <FAQSection />

        {/* ──────────────────────────────────────────────────────────────────
            12. NEWS & UPDATES SECTION — Latest Announcements
            ────────────────────────────────────────────────────────────────── */}
        <NewsSection />

        {/* ──────────────────────────────────────────────────────────────────
            13. CLOSING CALL TO ACTION
            ────────────────────────────────────────────────────────────────── */}
        <section id="register-cta" className="relative py-14 lg:py-24 bg-brand-blue text-white overflow-hidden">
          {/* Subtle Math Formula Texture Background */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{ 
              backgroundImage: "url('/math-texture.svg')",
              backgroundSize: "800px 800px",
              backgroundRepeat: "repeat",
              backgroundPosition: "center"
            }}
          />
          {/* Visual Accents */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-none animate-pulse pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-none opacity-60 pointer-events-none" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
            <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.08em] text-brand-gold uppercase block">
              Enroll Your Candidates
            </span>
            
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-[1.15] max-w-2xl mx-auto text-white">
              Give your student the stage they deserve.
            </h2>
            
            <p className="text-slate-100 font-sans text-sm sm:text-base leading-[1.6] max-w-xl mx-auto">
              Registration for EMC 2027 is officially open. Coordinate teams of 3–4 students across Elementary, Middle, or High School categories.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleRegisterClick}
                disabled={isRegisterLoading}
                id="cta-register-school-btn"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 disabled:opacity-80 disabled:cursor-wait text-brand-blue font-bold rounded-none text-base transition-all shadow-lg shadow-black/10 inline-flex items-center justify-center gap-2 group focus:ring-4 focus:ring-white/30 cursor-pointer min-w-[10rem]"
              >
                {isRegisterLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin text-brand-blue" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <span>Register</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform text-brand-blue" />
                  </>
                )}
              </button>
            </div>

            {/* Verification Tag */}
            <div className="pt-6 text-xs text-brand-bg/80 flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-gold" />
              <span>Standard paper packets sent internationally upon roster confirmation</span>
            </div>
          </div>
        </section>
      </main>

      {/* ──────────────────────────────────────────────────────────────────
          14. FOOTER — Social Links Bar + CTA Footer (Reference Pattern #9, #10)
          ────────────────────────────────────────────────────────────────── */}
      {/* Social Links Strip */}
      <div className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          <a href="https://www.facebook.com/profile.php?id=100069948300838" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 border border-slate-200 rounded-full text-slate-500 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center group" aria-label="Facebook">
            <svg className="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/theelizaldegroup" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 border border-slate-200 rounded-full text-slate-500 hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center group" aria-label="Instagram">
            <svg className="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/elizalde-mathematics-competition-emc/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 border border-slate-200 rounded-full text-slate-500 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center group" aria-label="LinkedIn">
            <svg className="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.youtube.com/@theemcolympiad" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 border border-slate-200 rounded-full text-slate-500 hover:text-[#FF0000] hover:border-[#FF0000] hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center group" aria-label="YouTube">
            <svg className="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 border border-slate-200 rounded-full text-slate-500 hover:text-[#25D366] hover:border-[#25D366] hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center group" aria-label="WhatsApp">
            <svg className="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24"><path d="M11.996 0a11.967 11.967 0 0 0-10.155 18.35L0 24l5.807-1.521a11.968 11.968 0 1 0 6.189-22.48zM19.066 17.15c-.328.925-1.892 1.774-2.613 1.848-.682.071-1.529.135-4.321-1.025-3.344-1.39-5.501-4.835-5.666-5.056-.164-.22-1.354-1.8-1.354-3.435 0-1.635.848-2.438 1.15-2.753.303-.314.654-.393.872-.393.218 0 .436 0 .622.01.196.01.464-.075.725.556.273.655.939 2.292 1.021 2.457.082.164.136.353.027.573-.109.219-.164.354-.327.546-.164.191-.345.419-.49.563-.164.164-.336.345-.147.671.189.327.844 1.395 1.815 2.26 1.252 1.115 2.302 1.458 2.628 1.611.327.153.518.125.714-.093.196-.219.845-1.023 1.074-1.373.229-.35.458-.292.752-.185.295.107 1.865.88 2.181 1.037.316.157.527.235.603.366.077.13.077.75-.251 1.675z"/></svg>
          </a>
        </div>
      </div>

      {/* Main CTA Footer */}
      <footer className="relative bg-white border-t border-slate-200 text-slate-800 py-16 lg:py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
          {/* Large CTA Heading */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-[1.1] tracking-tight max-w-2xl">
              Together, We Solve.
            </h2>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3 text-brand-dark">
                <Logo className="h-10 w-10 text-brand-blue" />
                <span className="font-display font-extrabold text-base text-brand-dark tracking-wide uppercase">
                  EMC OLYMPIAD
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm font-sans">
                The Elizalde Mathematics Competition inspires young thinkers around the world to unlock their scientific and logical potential through real-world team challenges.
              </p>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h5 className="text-sm lg:text-[15px] font-bold font-display tracking-[0.05em] text-brand-dark uppercase">
                Categories
              </h5>
              <ul className="text-sm space-y-3 font-sans text-slate-500">
                <li className="whitespace-nowrap">Elementary (Year 4–6)</li>
                <li className="whitespace-nowrap">Middle School (Year 7–9)</li>
                <li className="whitespace-nowrap">High School (Year 10–12)</li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h5 className="text-sm lg:text-[15px] font-bold font-display tracking-[0.05em] text-brand-dark uppercase">
                Competitions
              </h5>
              <ul className="text-sm space-y-3 font-sans text-slate-500">
                <li>Pre-Olympiad Conference</li>
                <li>Math Projects</li>
                <li>National Round</li>
                <li>International Round</li>
                <li><a href="#sample-papers" className="hover:text-brand-blue transition-colors block mt-3">Sample Papers</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h5 className="text-sm lg:text-[15px] font-bold font-display tracking-[0.05em] text-brand-dark uppercase">
                Do you need our help?
              </h5>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                Have questions regarding standard paper rosters, exam centers, or timeline extensions?
              </p>
              <div className="text-sm font-bold text-brand-red font-sans">
                support@emcompetition.org
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p className="font-sans">© 2026 Elizalde Mathematics Competition. All rights reserved. Together, We Solve.</p>
            <div className="flex gap-6 font-sans">
              <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* REGISTRATION FORM MODAL WINDOW REMOVED IN FAVOR OF DEDICATED PAGE */}
    </div>
  );
}

