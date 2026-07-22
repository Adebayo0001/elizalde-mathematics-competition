"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Newspaper,
  BookOpen,
} from "lucide-react";

import Logo from "../../components/Logo";
import { newsArticles, NewsItem } from "../../data/newsData";
import ArticleModal from "../../components/ArticleModal";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const categories = ["All", "Registration", "Global Finals", "Mentorship", "Announcements"];

  // Filter articles based on Category tab and Search Query
  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.tag === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = newsArticles.find((a) => a.featured) || newsArticles[0];

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark antialiased">
      {/* ──────────────────────────────────────────────────────────────────
          1. HEADER NAVBAR
          ────────────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center focus:outline-none">
            <Logo className="h-14 w-48 sm:h-16 sm:w-56" />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-brand-blue font-display transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/register"
              className="px-6 py-2.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold rounded-none text-xs uppercase tracking-widest transition-all shadow-sm"
            >
              Register Now
            </Link>
          </div>
        </div>
      </header>

      {/* ──────────────────────────────────────────────────────────────────
          2. HERO BANNER
          ────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-blue text-white py-16 lg:py-24 overflow-hidden">
        {/* Abstract Geometry Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 border border-white rounded-full" />
          <div className="absolute top-1/2 left-10 w-72 h-72 border border-white/50 rounded-none rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.08em] text-brand-red uppercase">
              <Newspaper className="w-4 h-4" />
              <span>Official Newsroom & Publications</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              News, Stories & Competition Updates
            </h1>
            <p className="text-white/80 font-sans text-base sm:text-lg leading-relaxed pt-2">
              Stay up to date with the latest announcements, team showcases, Olympiad schedules, and educational initiatives from the Elizalde Mathematics Competition.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          3. FEATURED STORY HIGHLIGHT
          ────────────────────────────────────────────────────────────────── */}
      {selectedCategory === "All" && !searchQuery && featuredArticle && (
        <section className="py-12 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-xs font-bold font-display uppercase tracking-widest text-brand-blue mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Featured Spotlight Story</span>
            </div>

            <div
              onClick={() => setActiveArticle(featuredArticle)}
              className="group grid grid-cols-1 lg:grid-cols-12 bg-slate-50 border border-slate-200/80 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              {/* Image Column */}
              <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-full min-h-[320px] w-full overflow-hidden bg-slate-200 shrink-0">
                <Image
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-md">
                  {featuredArticle.tag}
                </span>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-bold text-2xl lg:text-3xl text-brand-dark group-hover:text-brand-blue transition-colors leading-[1.2]">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-slate-600 font-sans text-sm lg:text-base leading-relaxed line-clamp-4">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-brand-blue group-hover:text-brand-blue uppercase tracking-wider font-display">
                  <span>Read Full Featured Story</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────────────────────────
          4. FILTER TABS & SEARCH BAR
          ────────────────────────────────────────────────────────────────── */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider font-display transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-dark text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-brand-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search news & updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-200/80 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue text-slate-800 placeholder:text-slate-400 font-sans"
            />
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────────
            5. ARTICLES GRID
            ────────────────────────────────────────────────────────────────── */}
        {filteredArticles.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-display font-semibold text-xl text-brand-dark">No updates found</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              We couldn't find any articles matching your search criteria. Try selecting another category or clearing your search term.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 bg-brand-blue text-white text-xs font-semibold uppercase tracking-widest cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="group bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-red/40 transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Image Container with Fixed Height & Cover */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-md">
                    {article.tag}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-display font-semibold text-lg lg:text-xl text-brand-dark group-hover:text-brand-blue transition-colors line-clamp-2 leading-[1.25]">
                      {article.title}
                    </h3>

                    <p className="text-slate-500 font-sans text-sm line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-dark group-hover:text-brand-blue transition-colors font-display mt-6">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          6. FOOTER
          ────────────────────────────────────────────────────────────────── */}
      <footer className="bg-brand-blue text-white py-12 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/60 font-sans">
          <p>© 2026 Elizalde Mathematics Competition. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/register" className="hover:text-white transition-colors">Register</Link>
            <a href="mailto:support@emcompetition.org" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>

      {/* Interactive Story Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
}
