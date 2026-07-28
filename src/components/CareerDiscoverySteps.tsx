import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  onGetStartedClick?: () => void;
}

export default function CareerDiscoverySteps({ onGetStartedClick }: Props) {
  const steps = [
    {
      num: "01",
      title: "Tell Us About Yourself",
      description: "Share your interests, strengths, and aspirations."
    },
    {
      num: "02",
      title: "AI Analyzes Your Profile",
      description: "Our AI identifies careers that best fit your profile."
    },
    {
      num: "03",
      title: "Get Your Career Discovery Report",
      description: "Receive career matches, strengths, and personalized recommendations."
    },
    {
      num: "04",
      title: "Start Your Career Journey",
      description: "Use your insights to confidently prepare for your first job."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-border-gray/30">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-dark mb-6 tracking-tight">
            Discover Your Ideal Career in 4 Simple Steps
          </h2>
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
            Our AI-powered Career Discovery process helps you understand yourself, explore the right career paths, and take your first step toward a successful future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Optional connecting line for desktop */}
          <div className="hidden lg:block absolute top-[2rem] left-[10%] right-[10%] h-[2px] bg-border-gray/50 -z-10"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-light-bg/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border-gray/60 hover:shadow-xl hover:shadow-brand-green/10 hover:-translate-y-1 transition-all duration-300 group relative z-10"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl font-bold font-display text-navy-dark border border-border-gray/30 mb-6 group-hover:bg-brand-green group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-brand-green transition-colors">
                {step.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center flex flex-col items-center">
          <p className="text-xl font-bold text-navy-dark mb-6">
            Your journey starts with one simple step.
          </p>
          <button
            onClick={onGetStartedClick}
            className="px-8 py-4 font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-xl shadow-lg shadow-brand-green/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
          >
            Start Career Discovery
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
