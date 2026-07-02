import React from "react";
import { Sparkles, UploadCloud, Gauge, Activity, Compass, ShieldCheck, Check } from "lucide-react";
import { WHY_ITEMS } from "../data";

interface WhyCVKaroProps {
  onLearnMoreClick: () => void;
}

export default function WhyCVKaro({ onLearnMoreClick }: WhyCVKaroProps) {
  
  // Icon lookup helper
  const getIcon = (name: string, className = "h-6 w-6 text-brand-green") => {
    switch (name) {
      case "Sparkles":
        return <Sparkles className={className} />;
      case "UploadCloud":
        return <UploadCloud className={className} />;
      case "Gauge":
        return <Gauge className={className} />;
      case "Activity":
        return <Activity className={className} />;
      case "Compass":
        return <Compass className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-20 md:py-28 bg-light-bg border-y border-border-gray/55"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" id="why-cvkaro-header">
          <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-3">Value Proposition</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-dark tracking-tight mb-4">
            Why Choose CVKaro?
          </h3>
          <p className="text-base sm:text-lg text-text-muted">
            Standard resumes fail modern digital checkpoints. CVKaro is built from the ground up to empower developers, engineers, and creatives with AI tools designed to impress systems and human recruiters alike.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20" id="why-cvkaro-grid">
          {WHY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-border-gray/80 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-brand-green/10 text-brand-green p-3 rounded-xl w-fit mb-5 transition-colors duration-300 group-hover:bg-brand-green group-hover:text-navy-dark shrink-0">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {index === 0 ? (
                    <img src="/logo_main.png" alt="Logo" className="h-6 w-6 object-contain" referrerPolicy="no-referrer" />
                  ) : (
                    getIcon(item.icon, "h-6 w-6 text-inherit")
                  )}
                </div>
              </div>
              <h4 className="text-lg font-display font-bold text-navy-dark mb-2 group-hover:text-brand-green transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats / Highlight Banner */}
        <div
          className="bg-navy-dark text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl"
          id="why-cvkaro-banner"
        >
          {/* Decorative ambient spots */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <h4 className="text-2xl sm:text-3xl font-display font-bold mb-4 tracking-tight">
                Designed to bypass automated filters and maximize callbacks
              </h4>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                Over 98% of Fortune 500 companies utilize an Applicant Tracking System. Without proper keyword density and semantic structures, high-quality resumes are filtered out before reaching hiring managers. CVKaro balances exact science with professional layout design.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-green/25 p-1 rounded-full text-brand-green shrink-0">
                    <Check className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-sm font-medium text-white/90">W3C Compliant PDF Outputs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-green/25 p-1 rounded-full text-brand-green shrink-0">
                    <Check className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-sm font-medium text-white/90">Dynamic Keyword Matching</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex flex-col justify-center min-h-[120px]">
                <div className="text-xl sm:text-2xl font-display font-bold text-brand-green mb-1 leading-tight">
                  Multiple
                </div>
                <div className="text-xs text-white/75 font-medium">Resume Templates</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex flex-col justify-center min-h-[120px]">
                <div className="text-xl sm:text-2xl font-display font-bold text-brand-green mb-1 leading-tight">
                  Secure
                </div>
                <div className="text-xs text-white/75 font-medium">Cloud Storage</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex flex-col justify-center min-h-[120px]">
                <div className="text-xl sm:text-2xl font-display font-bold text-brand-green mb-1 leading-tight">
                  AI Powered
                </div>
                <div className="text-xs text-white/75 font-medium">Career Insights</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex flex-col justify-center min-h-[120px]">
                <div className="text-xl sm:text-2xl font-display font-bold text-brand-green mb-1 leading-tight">
                  Built For
                </div>
                <div className="text-xs text-white/75 font-medium">Students & Professionals</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
