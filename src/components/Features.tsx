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
      className="py-20 sm:py-28 bg-light-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" id="features-header">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-green uppercase bg-brand-green/10 rounded-full border border-brand-green/20">
            PLATFORM FEATURES
          </div>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-dark tracking-tight mb-4">
            Everything You Need to Build a Successful Career
          </h3>
          <p className="text-base sm:text-lg text-text-muted">
            From discovering the right career to building a professional resume, improving your skills, and preparing for job opportunities, CVKaro brings everything together in one AI-powered Career Intelligence Platform.
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

                <p className="text-sm text-text-muted leading-relaxed text-justify mb-6">
                  {feat.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-green group-hover:gap-2.5 transition-all mt-auto pt-2">
                <span>Learn More</span>
                <span className="text-sm">→</span>
              </div>
            </div>
          ))}


        </div>

      </div>
    </section>
  );
}
