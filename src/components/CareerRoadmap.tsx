import React from 'react';
import { CheckCircle2, Clock, Target } from 'lucide-react';

export default function CareerRoadmap() {
  const steps = [
    { icon: "🧭", title: "Career Discovery", status: "Available Today", statusType: "available" },
    { icon: "🧠", title: "Career Intelligence Profile", status: "Coming Soon", statusType: "upcoming" },
    { icon: "📄", title: "AI Resume Builder", status: "Coming Soon", statusType: "upcoming" },
    { icon: "📊", title: "Resume Intelligence", status: "Coming Soon", statusType: "upcoming" },
    { icon: "🎯", title: "ATS Resume Analysis", status: "Coming Soon", statusType: "upcoming" },
    { icon: "📑", title: "Job Description Gap Analysis", status: "Coming Soon", statusType: "upcoming" },
    { icon: "📚", title: "Skill Gap Analysis & AI Learning Path", status: "Coming Soon", statusType: "upcoming" },
    { icon: "🚀", title: "Career Success", status: "Your Goal", statusType: "goal" }
  ];

  const getStatusBadge = (status: string, type: string) => {
    switch (type) {
      case "available":
        return (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold border border-brand-green/20">
            <CheckCircle2 className="w-4 h-4" />
            {status}
          </div>
        );
      case "upcoming":
        return (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-600 text-sm font-semibold border border-yellow-500/20">
            <Clock className="w-4 h-4" />
            {status}
          </div>
        );
      case "goal":
        return (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold border border-blue-500/20">
            <Target className="w-4 h-4" />
            {status}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-border-gray/30">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-dark mb-6 tracking-tight">
            From Career Discovery to Career Success
          </h2>
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-3xl mx-auto">
            Every successful career starts with the right first step. CVKaro guides you through every stage of your journey—from discovering the right career to becoming job-ready and achieving long-term success.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line connecting the steps */}
          <div className="absolute left-[39px] sm:left-1/2 top-4 bottom-4 w-0.5 bg-border-gray/50 sm:-translate-x-1/2 z-0 hidden sm:block"></div>

          <div className="space-y-4 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-light-bg/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-border-gray/60 hover:shadow-md hover:border-brand-green/40 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:bg-brand-green/5 transition-all duration-300 border border-border-gray/30">
                    {step.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-dark group-hover:text-brand-green transition-colors">
                    {step.title}
                  </h3>
                </div>
                <div className="ml-16 sm:ml-0">
                  {getStatusBadge(step.status, step.statusType)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
