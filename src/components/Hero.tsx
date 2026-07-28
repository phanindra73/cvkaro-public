import React from "react";
import { CheckCircle, ShieldCheck, Sparkles } from "lucide-react";


interface HeroProps {
  onGetStartedClick: () => void;
}

export default function Hero({ onGetStartedClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-white"
    >
      {/* Decorative ambient background curves */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[600px] bg-brand-green/3 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-[40%] left-0 -z-10 w-[30%] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Division */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left" id="hero-left-content">
            
            {/* Elegant brand pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-xs font-semibold tracking-wide w-fit mb-6 animate-fade-in">
              <span>AI-Powered Career Discovery</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-dark leading-[1.1] tracking-tight mb-6">
              Your First Job Can Shape the Rest of Your Career. <br />
              <span className="text-brand-green">Make It Your Best One.</span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8 max-w-xl font-roboto text-justify">
              Choosing your first job is one of the most important decisions you'll make. Discover the right career path, understand your strengths, and prepare with confidence through AI-powered Career Discovery.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onGetStartedClick}
                id="btn-hero-cta"
                className="px-8 py-4 text-left font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-xl shadow-lg shadow-brand-green/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
              >
                Start Career Discovery
                <span className="text-lg">→</span>
              </button>
              <a
                href="#features"
                className="px-6 py-4 text-left font-semibold text-navy-dark hover:text-brand-green bg-light-bg hover:bg-border-gray/35 rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                See How It Works
              </a>
            </div>

            {/* Trust factors */}
            <div className="grid grid-cols-2 gap-4 border-t border-border-gray/60 pt-6 max-w-md">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-green shrink-0" />
                <span className="text-xs font-medium text-dark-gray">ATS-Proof Check list</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-green shrink-0" />
                <span className="text-xs font-medium text-dark-gray">No Credit Card Required</span>
              </div>
            </div>

          </div>

          {/* Right Division */}
          <div className="lg:col-span-6 flex items-center justify-center" id="hero-right-content">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Main Image */}
              <img
                src="/heroimage.png"
                alt="AI-Powered Career Discovery Dashboard"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to picsum if local image generation is missing or fails
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/dashboard/800/500";
                }}
              />
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
