import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function SurveySection() {
  return (
    <section className="py-16 md:py-24 bg-brand-green/5 relative overflow-hidden border-y border-border-gray/55" id="survey">
      <div className="absolute top-0 right-0 w-[40%] h-[400px] bg-brand-green/10 rounded-full blur-3xl opacity-50 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-border-gray/50 text-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-dark mb-6 tracking-tight">
            Help Shape the Future of <span className="text-brand-green">CVKaro</span>
          </h2>
          
          <p className="text-lg md:text-xl text-text-muted mb-6 leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
            We're building CVKaro, an AI-powered career platform designed to help students, job seekers, and professionals succeed in their careers.
          </p>
          
          <p className="text-base md:text-lg text-text-muted mb-10 max-w-2xl mx-auto text-justify sm:text-center">
            Before we launch, we want to understand the real challenges people face and build solutions that truly make a difference. By taking our 5–7 minute survey, you'll help us:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
            {[
              "Build features that solve real career challenges",
              "Prioritize what matters most to users",
              "Design a better user experience",
              "Offer pricing that delivers real value"
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3 bg-light-bg p-4 rounded-xl border border-border-gray/30 transition-all hover:border-brand-green/40 hover:shadow-sm">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-navy-dark font-medium text-sm md:text-base">{text}</span>
              </div>
            ))}
          </div>
          
          <a
            href="https://forms.gle/FDJqq9PG93RLAmot7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-green text-navy-dark px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 shadow-lg shadow-brand-green/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            Take the Survey
            <ArrowRight className="w-5 h-5" />
          </a>
          
        </div>
      </div>
    </section>
  );
}
