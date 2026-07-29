import React from 'react';
import { Compass, User, Target, Lightbulb, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

interface Props {
  onGetStartedClick: () => void;
}

export default function WhyChooseCVKaro({ onGetStartedClick }: Props) {
  const cards = [
    {
      title: "Discover the Right Career",
      description: "Find the career that matches your strengths, interests, personality, and aspirations so you can begin your journey with confidence.",
      icon: <Compass className="w-6 h-6 text-inherit" />
    },
    {
      title: "Understand Yourself Better",
      description: "Gain personalized insights into your strengths, work style, and potential through AI-powered Career Discovery.",
      icon: <User className="w-6 h-6 text-inherit" />
    },
    {
      title: "Build Job-Ready Skills",
      description: "Identify the skills employers expect and understand what you need to learn before applying for jobs.",
      icon: <Target className="w-6 h-6 text-inherit" />
    },
    {
      title: "Make Smarter Career Decisions",
      description: "Receive personalized recommendations that help you choose the right career path instead of relying on guesswork.",
      icon: <Lightbulb className="w-6 h-6 text-inherit" />
    },
    {
      title: "Prepare for Your First Job",
      description: "Build confidence with a clear roadmap that prepares you for interviews, projects, and real-world opportunities.",
      icon: <Rocket className="w-6 h-6 text-inherit" />
    },
    {
      title: "Grow Your Career",
      description: "Start with the right first job and continue building a successful career through continuous learning and guidance.",
      icon: <TrendingUp className="w-6 h-6 text-inherit" />
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-light-bg border-t border-border-gray/30 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-green uppercase bg-brand-green/10 rounded-full border border-brand-green/20">
            Why CVKaro
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-dark mb-6 tracking-tight">
            Why Choose CVKaro?
          </h2>
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
            Your first career decision deserves more than guesswork. CVKaro helps you discover the right career path, understand your strengths, and prepare confidently for your first job through AI-powered career guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-border-gray/60 hover:shadow-xl hover:shadow-brand-green/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-dark mb-4 group-hover:text-brand-green transition-colors">
                {card.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 sm:mt-16">
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
