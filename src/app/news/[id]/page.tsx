import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  Tag,
} from "lucide-react";

import Logo from "../../../components/Logo";
import { newsArticles } from "../../../data/newsData";

interface NewsDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id,
  }));
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  let resolvedParams: { id: string } | null = null;
  try {
    resolvedParams = await params;
  } catch (err) {
    console.error("Failed to resolve route params:", err);
    notFound();
  }

  if (!resolvedParams || !resolvedParams.id) {
    notFound();
  }

  const article = newsArticles.find(
    (a) => a.id === resolvedParams.id || a.slug === resolvedParams.id
  );

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark antialiased">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <div className="leading-none">
              <span className="font-display font-extrabold text-lg text-brand-dark tracking-tight block">
                EMC 2026
              </span>
              <span className="text-[10px] font-bold font-display text-brand-blue uppercase tracking-widest block mt-0.5">
                Mathematics Competition
              </span>
            </div>
          </Link>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-brand-blue font-display transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Newsroom</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 lg:py-20 space-y-8">
        {/* Category Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-green uppercase tracking-wider font-display">
          <Tag className="w-3.5 h-3.5" />
          <span>{article.tag}</span>
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-[1.15] tracking-tight">
          {article.title}
        </h1>

        {/* Meta Bar */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 font-sans border-y border-slate-200/80 py-4">
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
            <span>
              {article.author.name} — <span className="text-slate-400">{article.author.role}</span>
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden bg-slate-100 border border-slate-200/50">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="p-6 bg-white border-l-4 border-brand-green shadow-sm space-y-3">
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

        {/* Article Story Body */}
        <div className="bg-white p-8 lg:p-12 border border-slate-200/80 space-y-6 text-slate-700 text-base lg:text-lg leading-[1.75]">
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

        {/* Navigation Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-brand-blue font-display"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All News</span>
          </Link>

          <Link
            href="/register"
            className="px-6 py-3 bg-brand-blue text-white text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2"
          >
            <span>Register for EMC 2026</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-10 mt-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-white/60">
          <p>© 2026 Elizalde Mathematics Competition. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
