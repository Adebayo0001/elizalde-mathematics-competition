"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Clock, Sparkles } from "lucide-react";
import { newsArticles, NewsItem } from "../data/newsData";
import ArticleModal from "./ArticleModal";

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  // Take top 3 articles for homepage preview
  const previewArticles = newsArticles.slice(0, 3);

  return (
    <section id="news" className="py-16 lg:py-24 bg-brand-bg border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] lg:text-[12px] font-semibold font-display tracking-[0.08em] text-brand-red uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>News & Updates</span>
            </div>
            <h2 className="font-display font-bold text-2xl lg:text-4xl text-brand-dark tracking-tight leading-[1.15]">
              Latest News & Competition Announcements
            </h2>
            <div className="h-1.5 w-12 bg-brand-red mt-4 rounded-none" />
          </div>

          <div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-dark text-white text-xs font-semibold uppercase tracking-widest transition-colors font-display group shadow-sm"
            >
              <span>View All News & Updates</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-white" />
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewArticles.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="group bg-white rounded-none border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Image Container with Fixed Height & Cover */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-none shadow-md">
                  {item.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      <time dateTime={item.date} className="font-sans">{item.date}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-[18px] lg:text-[20px] text-brand-dark group-hover:text-brand-blue transition-colors line-clamp-2 mb-2 leading-[1.25] tracking-tight">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[14px] lg:text-[15px] text-slate-500 line-clamp-3 mb-6 leading-[1.6] font-sans">
                    {item.excerpt}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-dark group-hover:text-brand-blue transition-colors font-display">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Story Detail Overlay Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
