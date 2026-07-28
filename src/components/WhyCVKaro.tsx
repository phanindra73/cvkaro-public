import React from "react";

interface WhyCVKaroProps {
  onLearnMoreClick?: () => void;
}

export default function WhyCVKaro({ onLearnMoreClick }: WhyCVKaroProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-light-bg border-y border-border-gray/55 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4 inline-block px-4 py-1.5 bg-brand-green/10 rounded-full">
            Our Story
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-dark tracking-tight mb-6">
            Built by Educators. Driven by a Mission.
          </h3>
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
            For over 25 years, I have worked closely with students and professionals, helping them build successful careers in the IT industry. Throughout this journey, I observed a common challenge—not a lack of talent, but a lack of career clarity.
            <br/><br/>
            That's why we built CVKaro.
          </p>
        </div>

        {/* Founder Cards (Stacked vertically) */}
        <div className="flex flex-col gap-10 sm:gap-12 mb-16 sm:mb-20">
          
          {/* Founder Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border-gray/50 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative overflow-hidden group hover:shadow-xl hover:border-brand-green/30 transition-all duration-300">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-green/10 transition-colors duration-500" />
            
            {/* Left Column: Photo & Info */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center relative z-10 shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500">
                <img src="/founder.jpg" alt="Phanindra Oruganti" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-display font-bold text-navy-dark">Phanindra Oruganti</h3>
              <p className="text-brand-green font-semibold mt-2">Founder & Product Owner</p>
            </div>
            
            {/* Right Column: Quote / Story */}
            <div className="w-full md:w-2/3 flex flex-col justify-center h-full relative z-10">
              <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-4">The Problem I Saw</h2>
              <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed">
                <p>
                  For more than 25 years, I've mentored thousands of students entering the IT industry. Many were talented and hardworking, yet they struggled to answer three important questions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2 text-text-muted font-medium">
                  <li>Which career is right for me?</li>
                  <li>What skills do I need?</li>
                  <li>How do I become job-ready?</li>
                </ul>
                <p>
                  Watching students make career decisions based on guesswork inspired me to build CVKaro—a platform that helps students discover the right career before they build a resume or apply for jobs.
                </p>
              </div>
            </div>
          </div>

          {/* Co-Founder Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border-gray/50 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative overflow-hidden group hover:shadow-xl hover:border-brand-green/30 transition-all duration-300">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-green/10 transition-colors duration-500" />
            
            {/* Left Column: Photo & Info */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center relative z-10 shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500">
                <img src="/co-founder.jpeg" alt="Santhi Swaroopa Vakati" className="w-full h-full object-cover object-[50%_35%]" />
              </div>
              <h3 className="text-2xl font-display font-bold text-navy-dark">Santhi Swaroopa Vakati</h3>
              <p className="text-brand-green font-semibold mt-2">Co-Founder</p>
            </div>
            
            {/* Right Column: Quote / Story */}
            <div className="w-full md:w-2/3 flex flex-col justify-center h-full relative z-10">
              <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-4">Turning Vision into Reality</h2>
              <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed">
                <p>
                  As a recent B.Tech graduate, Santhi represents the voice of the students and fresh graduates that CVKaro is designed to support. She contributes to product research, user experience, feature validation, testing, and continuous improvement, ensuring the platform delivers a simple, practical, and meaningful career guidance experience for every user.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-12 border border-border-gray/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-brand-green/30 transition-all duration-300">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-green/10 transition-colors duration-500" />
          <h2 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4 inline-block px-4 py-1.5 bg-brand-green/10 rounded-full">
            Our Mission
          </h2>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-navy-dark mb-6 leading-tight">
            We believe every student deserves the confidence to choose the right career.
          </h3>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            CVKaro combines education, technology, and artificial intelligence to help students discover their strengths, develop future-ready skills, and confidently prepare for their first job.
          </p>
        </div>

      </div>
    </section>
  );
}
