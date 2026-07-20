"use client";
import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Sparkles,
  Trophy,
  Users,
  BookOpen,
  Layers,
  GraduationCap,
  Brain,
  Target,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";

import Logo from "../components/Logo";
import MissionVisionSection from "../components/MissionVisionSection";
import ImpactSection from "../components/ImpactSection";
import CompetitionStagesSection from "../components/CompetitionStagesSection";
import TimelineCalendarSection from "../components/TimelineCalendarSection";
import WorldOfMathematiciansSection from "../components/WorldOfMathematiciansSection";

import FAQSection from "../components/FAQSection";
import MedalistsSection from "../components/MedalistsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ParticipatingCountriesSection from "../components/ParticipatingCountriesSection";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import WhoCanParticipateSection from "../components/WhoCanParticipateSection";

export default function HomePage() {

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark antialiased selection:bg-brand-blue/10 selection:text-brand-blue scroll-smooth">
      {/* ──────────────────────────────────────────────────────────────────
          1. NAVIGATION HEADER
          ────────────────────────────────────────────────────────────────── */}
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Brand/Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <Logo className="h-12 w-12 group-hover:rotate-6 transition-transform duration-300" />
            <div className="leading-none">
              <span className="font-display font-extrabold text-lg text-brand-dark tracking-tight block">
                EMC 2026
              </span>
              <span className="text-[10px] font-bold font-display text-brand-blue uppercase tracking-widest block mt-0.5">
                Mathematics Competition
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] font-semibold font-display tracking-wide text-brand-dark/80">
            <a href="#about" className="hover:text-brand-blue transition-colors">
              About
            </a>
            <a href="#competition-stages" className="hover:text-brand-blue transition-colors">
              Stages
            </a>
            <a href="#roadmap" className="hover:text-brand-blue transition-colors">
              Roadmap
            </a>
            <a href="#world-of-mathematicians" className="hover:text-brand-blue transition-colors">
              Spotlight
            </a>
            <a href="#winners" className="hover:text-brand-blue transition-colors">
              Medalists
            </a>
            <a href="#testimonials" className="hover:text-brand-blue transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-brand-blue transition-colors">
              FAQ
            </a>
          </nav>

          {/* Header CTA Button */}
          <div>
            <Link
              href="/register"
              id="nav-register-btn"
              className="px-5 py-2.5 bg-brand-blue/10 backdrop-blur-sm hover:bg-brand-blue text-brand-blue hover:text-white font-semibold rounded-none text-xs uppercase tracking-widest transition-all border border-brand-blue/20 hover:border-brand-blue focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue cursor-pointer"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ──────────────────────────────────────────────────────────────────
            2. HERO SECTION — Full-Width Video Background
            ────────────────────────────────────────────────────────────────── */}
        <section id="hero" className="relative min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-brand-blue flex items-end text-white pt-32 lg:pt-40">
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
                Every student has a <span className="text-brand-lime">moment</span> where they realize what they're capable of.
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
                Global Championship Stage
              </span>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────
            3. ABOUT SECTION — Two Column Layout
            ────────────────────────────────────────────────────────────────── */}
        <section id="about" className="py-16 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column — Image */}
              <div className="lg:col-span-5 w-full">
                <ScrollReveal direction="right" delay={0.1}>
                  <div className="relative overflow-hidden">
                    <img 
                      src="/images/EMC-global-winner.jpeg" 
                      alt="EMC Global Winner" 
                      className="w-full h-auto object-cover shadow-xl"
                    />
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column — Text & 4 Icon Feature Cards */}
              <div className="lg:col-span-7 flex flex-col lg:pl-6">
                {/* Header */}
                <ScrollReveal delay={0.2} className="text-left mb-12">
                  <span className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.15em] text-brand-green uppercase">
                    About Elizalde Mathematics Competition
                  </span>
                  <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mt-3 tracking-tight leading-[1.12]">
                    Together, We Solve.
                  </h2>
                  <div className="text-slate-500 font-sans mt-5 text-sm sm:text-base leading-[1.6] space-y-4 text-justify">
                    <p>
                      The Elizalde Mathematics Competition (EMC) is an International math contest dedicated to engaging students in the beauty and power of mathematics. Founded on the principles of academic excellence and inclusivity, EMC is designed to spark curiosity, challenge young minds, and cultivate a lifelong interest in mathematics across diverse student communities.
                    </p>
                    <p>
                      More than just a competition, EMC serves as a developmental platform that encourages participants to think critically, solve problems creatively, and apply logical reasoning to real-world scenarios. Through a series of thoughtfully curated rounds, students are exposed to stimulating mathematical challenges that deepen their understanding and stretch their intellectual capabilities.
                    </p>
                    <p>
                      Whether students are just beginning their mathematical journey or already excelling at advanced levels, EMC offers an enriching experience that promotes growth, resilience, and innovation. By participating, students not only gain recognition on a global stage but also join a vibrant community of aspiring mathematicians who are passionate about learning and discovery.
                    </p>
                    <p className="font-medium text-brand-dark">
                      Join thousands of students across the globe. Compete. Learn. Excel.
                    </p>
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
            4a. WHO CAN PARTICIPATE SECTION
            ────────────────────────────────────────────────────────────────── */}
        <WhoCanParticipateSection />

        {/* ──────────────────────────────────────────────────────────────────
            4b. IMPACT SECTION
            ────────────────────────────────────────────────────────────────── */}
        <ImpactSection />

        {/* ──────────────────────────────────────────────────────────────────
            10. WORLD OF MATHEMATICIANS SECTION
            ────────────────────────────────────────────────────────────────── */}
        <WorldOfMathematiciansSection />

        {/* ──────────────────────────────────────────────────────────────────
            12. GLOBAL FINALISTS / MEDALISTS — Article Cards (Reference Pattern #8)
            ────────────────────────────────────────────────────────────────── */}
        <MedalistsSection />

        {/* ──────────────────────────────────────────────────────────────────
            5. TESTIMONIALS — Carousel with Dot Pagination
            ────────────────────────────────────────────────────────────────── */}
        <TestimonialsSection />



        {/* ──────────────────────────────────────────────────────────────────
            7. PARTICIPATING COUNTRIES — Brand Row (Reference Pattern #6)
            ────────────────────────────────────────────────────────────────── */}
        <ParticipatingCountriesSection />

        {/* ──────────────────────────────────────────────────────────────────
            8. COMPETITION STAGES SECTION
            ────────────────────────────────────────────────────────────────── */}
        <CompetitionStagesSection />

        {/* ──────────────────────────────────────────────────────────────────
            9. EVENT CALENDAR / OLYMPIAD ROADMAP SECTION
            ────────────────────────────────────────────────────────────────── */}
        <TimelineCalendarSection />

        {/* ──────────────────────────────────────────────────────────────────
            11. FAQ SECTION — Split Layout (Reference Pattern #7)
            ────────────────────────────────────────────────────────────────── */}
        <FAQSection />

        {/* ──────────────────────────────────────────────────────────────────
            13. CLOSING CALL TO ACTION
            ────────────────────────────────────────────────────────────────── */}
        <section id="register-cta" className="relative py-14 lg:py-24 bg-brand-blue text-white overflow-hidden">
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
              Registration for EMC 2026 is officially open. Coordinate teams of 3–4 students across Elementary, Middle, or High School brackets.
            </p>

            <div className="pt-4">
              <Link
                href="/register"
                id="cta-register-school-btn"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-brand-blue font-bold rounded-none text-base transition-all shadow-lg shadow-black/10 inline-flex items-center justify-center gap-2 group focus:ring-4 focus:ring-white/30 cursor-pointer"
              >
                Register
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
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
      <div className="bg-brand-blue border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold font-display uppercase tracking-wider text-white/70">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>

      {/* Main CTA Footer */}
      <footer className="bg-brand-blue border-t border-white/10 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Large CTA Heading */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight max-w-2xl">
              Together, We Solve.
              <br />
              <span className="text-white/70">
                Just drop us a line —{" "}
                <a href="mailto:support@emcompetition.org" className="text-brand-lime hover:text-brand-gold transition-colors underline underline-offset-4 decoration-brand-lime/40">
                  support@emcompetition.org
                </a>
              </span>
            </h2>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5 text-white">
                <Logo className="h-8 w-8 text-white" />
                <span className="font-display font-extrabold text-sm text-white tracking-wide uppercase">
                  EMC Tournament
                </span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed max-w-xs font-sans">
                The Elizalde Mathematics Competition inspires young thinkers around the world to unlock their scientific and logical potential through real-world team challenges.
              </p>
            </div>

            <div className="md:col-span-2 space-y-3">
              <h5 className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.08em] text-white uppercase">
                Brackets
              </h5>
              <ul className="text-xs space-y-2 font-sans text-white/70">
                <li>Elementary (Grades 4–6)</li>
                <li>Middle School (Grades 7–9)</li>
                <li>High School (Grades 10–12)</li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-3">
              <h5 className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.08em] text-white uppercase">
                Competitions
              </h5>
              <ul className="text-xs space-y-2 font-sans text-white/70">
                <li>Pre-Olympiad Conference</li>
                <li>Math Projects</li>
                <li>National Round</li>
                <li>International Round</li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h5 className="text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.08em] text-white uppercase">
                Registration Help
              </h5>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Have questions regarding standard paper rosters, exam centers, or timeline extensions?
              </p>
              <div className="text-xs font-bold text-brand-lime font-sans">
                support@emcompetition.org
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p className="font-sans">© 2026 Elizalde Mathematics Competition. All rights reserved. Together, We Solve.</p>
            <div className="flex gap-6 font-sans">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* REGISTRATION FORM MODAL WINDOW REMOVED IN FAVOR OF DEDICATED PAGE */}
    </div>
  );
}

