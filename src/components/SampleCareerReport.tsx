import React from 'react';
import { Target, Briefcase, Brain, BarChart, Rocket, BookOpen, CheckCircle2 } from 'lucide-react';

export default function SampleCareerReport() {
  const highlights = [
    {
      title: "Career Match Score",
      description: "See a percentage match for how well different careers align with your unique profile.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Recommended Career Paths",
      description: "Discover top career roles specifically tailored to your strengths and interests.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Strengths & Personality Insights",
      description: "Understand your core strengths and how your personality fits into various work environments.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Skills Assessment",
      description: "Identify the skills you already have and the critical gaps you need to fill.",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Career Readiness Score",
      description: "Get a clear picture of how prepared you are to enter your chosen field right now.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Recommended Learning Roadmap",
      description: "Follow a step-by-step guide on what to learn next to achieve your career goals.",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-light-bg border-t border-border-gray/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-green uppercase bg-brand-green/10 rounded-full border border-brand-green/20">
            Your Career Report
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-dark mb-6 tracking-tight">
            Sample Career Discovery Report
          </h2>
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
            Get a preview of the personalized insights you'll receive after completing your AI-powered Career Discovery assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual/Mockup */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-green to-emerald-400 rounded-2xl blur-lg opacity-20"></div>
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-border-gray h-full flex flex-col justify-center items-center aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              
              <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold text-navy-dark mb-2 text-center">Your Personalized Report</h3>
              <p className="text-text-muted text-center max-w-sm mb-8">
                A comprehensive breakdown of your potential, skills, and roadmap to success.
              </p>
              
              <div className="w-full space-y-4 max-w-sm">
                <div className="h-4 bg-border-gray/50 rounded-full w-3/4 mx-auto"></div>
                <div className="h-4 bg-border-gray/50 rounded-full w-full mx-auto"></div>
                <div className="h-4 bg-border-gray/50 rounded-full w-5/6 mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature List */}
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border-gray/60 flex items-center justify-center text-brand-green shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-dark mb-1">{item.title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Steps Highlight */}
            <div className="mt-8 p-6 bg-brand-green/5 border border-brand-green/20 rounded-xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-bold text-navy-dark mb-1">Next Steps</h4>
                <p className="text-sm text-text-muted">
                  Clear, actionable advice on what to do immediately after reading your report to start advancing your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
