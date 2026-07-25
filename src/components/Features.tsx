import React from "react";
import { FileText, UploadCloud, CheckCircle, BarChart3, Compass, Sparkles } from "lucide-react";
import { FEATURE_HIGHLIGHTS } from "../data";

interface FeaturesProps {
  onFeatureSelect: (featureId: string) => void;
}

export default function Features({ onFeatureSelect }: FeaturesProps) {
  
  // Icon lookup helper
  const getIcon = (iconName: string, className = "h-6 w-6 text-brand-green") => {
    switch (iconName) {
      case "FileText":
        return <FileText className={className} />;
      case "UploadCloud":
        return <UploadCloud className={className} />;
      case "CheckCircle":
        return <CheckCircle className={className} />;
      case "BarChart3":
        return <BarChart3 className={className} />;
      case "Compass":
        return <Compass className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section
      id="features"
      className="py-12 sm:py-20 md:py-28 bg-light-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" id="features-header">
          <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-3">Key Highlights</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-dark tracking-tight mb-4">
            Feature Highlights
          </h3>
          <p className="text-base sm:text-lg text-text-muted">
            Everything you need to discover your career, improve your employability, and achieve career success—all in one AI-powered platform.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="features-grid">
          {FEATURE_HIGHLIGHTS.map((feat) => (
            <div
              key={feat.id}
              onClick={() => onFeatureSelect(feat.id)}
              className="bg-white rounded-2xl p-8 border border-border-gray hover:border-brand-green/30 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="bg-brand-green/10 text-brand-green p-3.5 rounded-xl w-fit mb-6 transition-all duration-300 group-hover:bg-brand-green group-hover:text-navy-dark shrink-0">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {getIcon(feat.iconName, "h-6 w-6 text-inherit")}
                  </div>
                </div>

                <h4 className="text-xl font-display font-bold text-navy-dark mb-3 group-hover:text-brand-green transition-colors">
                  {feat.title}
                </h4>

                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {feat.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-green group-hover:gap-2.5 transition-all mt-auto pt-2">
                <span>Learn More</span>
                <span className="text-sm">→</span>
              </div>
            </div>
          ))}

          {/* Bonus Bento card to complete the clean symmetrical layout */}
          <div className="bg-navy-dark text-white rounded-2xl p-8 border border-white/5 md:col-span-2 lg:col-span-1 flex flex-col justify-between relative overflow-hidden group cursor-pointer" onClick={() => onFeatureSelect('career-intelligence')}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/15 rounded-full blur-2xl group-hover:bg-brand-green/25 transition-colors duration-500" />
            
            <div>
              <div className="bg-white/10 p-3 rounded-xl w-fit mb-6 text-brand-green group-hover:scale-110 transition-transform duration-300">
                <img src="/logo_main.png" alt="Logo" className="h-6 w-6 object-contain" referrerPolicy="no-referrer" />
              </div>

              <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                Career Intelligence Profile
              </h4>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Build a personalized Career Intelligence Profile that evolves with your skills, learning, and career journey.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-green group-hover:gap-2.5 transition-all mt-auto pt-2">
              <span>Learn More</span>
              <span className="text-sm">→</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
