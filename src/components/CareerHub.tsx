import React, { useState } from "react";
import { Search, Calendar, Clock, ChevronLeft, User, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_ARTICLES } from "../data";
import { BlogArticle } from "../types";

export default function CareerHub() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Resume Tips", "Interview Prep", "Career Advice", "Upskilling"];

  const filteredArticles = BLOG_ARTICLES.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="career-hub" className="py-12 sm:py-20 md:py-28 bg-light-bg border-y border-border-gray/55">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {selectedArticle ? (
          /* Detailed Article Reading Mode */
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-border-gray p-6 sm:p-12 shadow-sm animate-fade-in" id="blog-reader">
            {/* Back to Blog */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-green hover:text-brand-green/85 mb-8 cursor-pointer group"
            >
              <ChevronLeft className="h-4.5 w-4.5 transition-transform group-hover:-translate-x-1" />
              BACK TO CAREER HUB
            </button>

            {/* Category tag */}
            <span className="inline-block bg-brand-green/10 text-brand-green text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {selectedArticle.category}
            </span>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-dark leading-tight mb-6">
              {selectedArticle.title}
            </h3>

            {/* Author / Date Meta Header */}
            <div className="flex items-center gap-4 border-b border-border-gray pb-6 mb-8">
              <img
                src={selectedArticle.author.avatarUrl}
                alt={selectedArticle.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-green/30"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-sm font-semibold text-navy-dark">
                  {selectedArticle.author.name}
                </div>
                <div className="text-xs text-text-muted mt-0.5">
                  {selectedArticle.author.role}
                </div>
              </div>
              <div className="ml-auto text-right text-xs text-text-muted space-y-1">
                <div className="flex items-center gap-1 justify-end">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center gap-1 justify-end">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="prose max-w-none text-sm sm:text-base text-dark-gray leading-relaxed space-y-6 whitespace-pre-line font-sans">
              {selectedArticle.content}
            </div>

            {/* Reading Wrap-up Footer */}
            <div className="mt-12 pt-8 border-t border-border-gray/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-text-muted italic">
                Looking for tailored resume guidance? Try our resume score simulator.
              </span>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  const element = document.querySelector("#home");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-brand-green hover:bg-brand-green/90 rounded-lg cursor-pointer"
              >
                Scan My CV Now
              </button>
            </div>
          </div>
        ) : (
          /* Blog Landing Page view */
          <div>
            
            {/* Section Header */}
            <div className="text-left max-w-3xl mx-auto mb-12 sm:mb-16" id="blog-header">
              <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-3">Resource Center</h2>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-dark tracking-tight mb-4">
                CVKaro Career Hub
              </h3>
              <p className="text-base sm:text-lg text-text-muted">
                Insights, tutorials, and strategy guides to help you navigate modern recruiting systems and land your dream technical jobs.
              </p>
            </div>

            {/* Filter Categories & Search Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 sm:mb-12 md:mb-16" id="blog-controls">
              
              {/* Category tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none" id="blog-category-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-navy-dark text-white shadow-sm"
                        : "bg-white text-text-primary border border-border-gray hover:bg-light-bg"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search input field */}
              <div className="relative w-full md:max-w-xs" id="blog-search-wrapper">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm border border-border-gray rounded-xl focus:border-brand-green focus:outline-hidden bg-white text-navy-dark"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-muted" />
              </div>

            </div>

            {/* Articles Grid list */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="bg-white rounded-2xl border border-border-gray hover:border-brand-green/20 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-full overflow-hidden"
                  >
                    
                    {/* Header bar decorative strip */}
                    <div className="h-1.5 bg-brand-green/80" />

                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        {/* Meta Category and Reading Time */}
                        <div className="flex items-center justify-between text-xs font-bold text-brand-green mb-4">
                          <span>{article.category}</span>
                          <span className="text-text-muted font-medium flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="font-display font-bold text-lg text-navy-dark leading-snug mb-3 group-hover:text-brand-green transition-colors line-clamp-2">
                          {article.title}
                        </h4>

                        {/* Summary description */}
                        <p className="text-xs text-text-muted leading-relaxed text-justify mb-6 line-clamp-3">
                          {article.summary}
                        </p>
                      </div>

                      {/* Author card footer */}
                      <div className="border-t border-border-gray/60 pt-4 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={article.author.avatarUrl}
                            alt={article.author.name}
                            className="w-8 h-8 rounded-full object-cover border border-brand-green/20"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="text-[11px] font-bold text-navy-dark">
                              {article.author.name}
                            </div>
                            <div className="text-[9px] text-text-muted">
                              {article.author.role}
                            </div>
                          </div>
                        </div>

                        {/* Read Link */}
                        <div className="inline-flex items-center gap-1 text-xs font-bold text-brand-green group-hover:gap-2 transition-all">
                          <span>Read</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>

                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-left py-12 bg-white rounded-2xl border border-border-gray" id="blog-empty">
                <BookOpen className="h-10 w-10 text-text-muted mx-auto mb-3 animate-pulse" />
                <h4 className="font-display font-semibold text-lg text-navy-dark mb-1">
                  No Articles Found
                </h4>
                <p className="text-xs text-text-muted">
                  We couldn't find any career articles matching your filter parameters.
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
