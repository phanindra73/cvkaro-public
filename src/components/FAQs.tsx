import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ChevronDown, CheckCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "ATS & Resume", "AI Learning Paths", "Billing", "General"];

  const filteredFAQs = FAQ_ITEMS.filter((faq) => {
    return selectedCategory === "All" || faq.category === selectedCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-12 sm:py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" id="faqs-header">
          <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-3">Questions & Answers</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-dark tracking-tight mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-base sm:text-lg text-text-muted">
            Everything you need to know about ATS scoring metrics, resume templates, automated audits, and career learning roadmaps.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 scrollbar-none" id="faqs-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-brand-green text-white shadow-sm"
                  : "bg-light-bg text-text-primary border border-border-gray/70 hover:bg-white hover:border-brand-green/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-4" id="faqs-accordion">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-brand-green bg-light-bg shadow-sm"
                    : "border-border-gray bg-white hover:border-brand-green/25"
                }`}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-navy-dark focus:outline-hidden cursor-pointer"
                >
                  <span className="flex items-start gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 mt-0.5 ${isOpen ? "text-brand-green" : "text-text-muted"}`} />
                    <span>{faq.question}</span>
                  </span>
                  
                  <span className={`p-1 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? "bg-brand-green text-white rotate-180" : "bg-light-bg text-text-muted"
                  }`}>
                    <ChevronDown className="h-4.5 w-4.5" />
                  </span>
                </button>

                {/* Accordion body drawer panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-border-gray/60 px-6 py-5" : "max-h-0 pointer-events-none"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-dark-gray leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions card prompt */}
        <div className="mt-12 bg-light-bg border border-border-gray rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-navy-dark text-lg mb-1">
              Still have queries?
            </h4>
            <p className="text-xs text-text-muted">
              Can't find the answers you are looking for? Send us a quick direct message via our support form.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-brand-green hover:bg-brand-green/90 rounded-lg shadow-sm whitespace-nowrap cursor-pointer shrink-0"
          >
            Contact Support Team
          </a>
        </div>

      </div>
    </section>
  );
}
