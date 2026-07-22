"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Calendar, Clock, User, Share2, Tag, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { NewsItem } from "../data/newsData";

interface ArticleModalProps {
  article: NewsItem | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (article) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [article, onClose]);

  return (
    <AnimatePresence>
      {article && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-900/70 backdrop-blur-md">
          {/* Backdrop Click */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Modal Window */}
          <motion.article
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-white border border-slate-200/80 shadow-2xl overflow-hidden my-auto z-10 max-h-[90vh] flex flex-col rounded-none"
          >
            {/* Top Bar with Sticky Close Button */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-green uppercase tracking-wider font-display">
                <Tag className="w-3.5 h-3.5" />
                <span>{article.tag}</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-brand-dark hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 lg:p-12 space-y-8">
              {/* Header Title & Meta */}
              <header className="space-y-4 max-w-3xl">
                <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-dark leading-[1.2] tracking-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-sans border-b border-slate-100 pb-6 pt-2">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-brand-blue" />
                    <time dateTime={article.date}>{article.date}</time>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-brand-blue" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <User className="w-4 h-4 text-brand-green" />
                    <span>{article.author.name} — <span className="text-slate-400">{article.author.role}</span></span>
                  </div>
                </div>
              </header>

              {/* Cover Image */}
              <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden bg-slate-100 border border-slate-200/50">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  EMC Story Spotlight
                </div>
              </div>

              {/* Key Takeaways Box */}
              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <div className="p-6 bg-slate-50 border-l-4 border-brand-green space-y-3">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-dark flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Key Takeaways
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-sans">
                    {article.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Main Storytelling Article Content */}
              <div className="space-y-6 text-slate-700 text-base lg:text-lg leading-[1.75] font-sans">
                <p className="font-medium text-slate-900 text-lg sm:text-xl leading-relaxed border-l-2 border-brand-blue pl-4 py-1">
                  {article.content.intro}
                </p>

                {article.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4 pt-4">
                    {section.heading && (
                      <h3 className="font-display font-semibold text-xl sm:text-2xl text-brand-dark tracking-tight">
                        {section.heading}
                      </h3>
                    )}
                    <p className="whitespace-pre-line">{section.body}</p>

                    {section.quote && (
                      <blockquote className="my-6 p-6 bg-brand-blue/5 border-l-4 border-brand-blue text-brand-dark font-display font-semibold italic text-lg sm:text-xl leading-snug">
                        "{section.quote}"
                      </blockquote>
                    )}
                  </div>
                ))}

                {article.content.conclusion && (
                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-slate-600 font-medium italic">{article.content.conclusion}</p>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <footer className="pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 font-display">
                  <Share2 className="w-4 h-4 text-brand-blue" />
                  <span>Share this story</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="/register"
                    onClick={onClose}
                    className="px-5 py-2.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-xs uppercase tracking-widest transition-all inline-flex items-center gap-2"
                  >
                    <span>Register for EMC 2026</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </footer>
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
}
