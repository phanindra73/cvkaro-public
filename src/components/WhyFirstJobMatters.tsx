import React from 'react';

interface Props {
  onGetStartedClick: () => void;
}

export default function WhyFirstJobMatters({ onGetStartedClick }: Props) {
  const points = [
    { emoji: "🚀", title: "Build the Right Skills" },
    { emoji: "📈", title: "Accelerate Your Career Growth" },
    { emoji: "💡", title: "Discover Your True Potential" },
    { emoji: "🎯", title: "Make Smarter Career Decisions" }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-border-gray/30">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-green uppercase bg-brand-green/10 rounded-full border border-brand-green/20">
            Career Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-dark mb-6 tracking-tight">
            Why Your First Job Matters
          </h2>
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            Your first job isn't just your first paycheck. It's the beginning of your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {points.map((point, index) => (
            <div 
              key={index}
              className="bg-light-bg/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border-gray/60 hover:shadow-md hover:border-brand-green/40 transition-all duration-300 flex items-center gap-5 group"
            >
              <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                {point.emoji}
              </div>
              <h3 className="text-xl font-bold text-navy-dark">
                {point.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={onGetStartedClick}
            className="px-8 py-4 font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-xl shadow-lg shadow-brand-green/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
          >
            Start Career Discovery
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
