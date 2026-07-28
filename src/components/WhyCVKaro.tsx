import React from "react";

interface WhyCVKaroProps {
  onLearnMoreClick?: () => void;
}

export default function WhyCVKaro({ onLearnMoreClick }: WhyCVKaroProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-light-bg border-y border-border-gray/55 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4 inline-block px-4 py-1.5 bg-brand-green/10 rounded-full">
            Our Story
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-dark tracking-tight mb-6">
            Built by Educators. Driven by a Mission.
          </h3>
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
            For over 25 years, we've worked closely with students and graduates, helping them build successful careers. Along the way, we discovered a common challenge—not a lack of talent, but a lack of career clarity.
            <br/><br/>
            That's why we built CVKaro.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 sm:mb-20">
          
          {/* Founder Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border-gray/60 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 relative group flex flex-col">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-8">
              <div className="w-32 h-32 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center overflow-hidden border-4 border-white shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img src="/founder.jpg" alt="Phanindra Oruganti" className="w-full h-full object-cover" />
              </div>
              <div className="text-center sm:text-left mt-2 sm:mt-4">
                <h4 className="text-2xl font-display font-bold text-navy-dark">Phanindra Oruganti</h4>
                <p className="text-brand-green font-semibold mt-1">Founder & Product Owner</p>
              </div>
            </div>
            
            <div className="bg-light-bg/50 rounded-2xl p-6 sm:p-8 border border-border-gray/30 flex-grow">
              <h5 className="font-bold text-navy-dark mb-4 text-lg">The Problem I Saw</h5>
              <div className="text-text-muted space-y-4 leading-relaxed">
                <p>
                  For more than 25 years, I've mentored thousands of students entering the IT industry. Many were talented and hardworking, yet they struggled to answer three important questions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2 text-navy-dark/80 font-medium">
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
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border-gray/60 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 relative group flex flex-col">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-8">
              <div className="w-32 h-32 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center overflow-hidden border-4 border-white shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img src="/co-founder.jpeg" alt="Santhi Swaroopa Vakati" className="w-full h-full object-cover object-[50%_35%]" />
              </div>
              <div className="text-center sm:text-left mt-2 sm:mt-4">
                <h4 className="text-2xl font-display font-bold text-navy-dark">Santhi Swaroopa Vakati</h4>
                <p className="text-brand-green font-semibold mt-1">Co-Founder</p>
              </div>
            </div>
            
            <div className="bg-light-bg/50 rounded-2xl p-6 sm:p-8 border border-border-gray/30 flex-grow">
              <h5 className="font-bold text-navy-dark mb-4 text-lg">Turning Vision into Reality</h5>
              <div className="text-text-muted space-y-4 leading-relaxed">
                <p>
                  Santhi plays a key role in transforming the vision of CVKaro into a practical AI-powered platform. From product research and user experience to testing and continuous improvement, she focuses on creating a platform that is simple, intuitive, and valuable for students and graduates beginning their careers.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-12 border border-border-gray/50 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl -z-10 translate-x-1/2 -translate-y-1/2" />
          <h2 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4 inline-block">
            Our Mission
          </h2>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-navy-dark mb-6 leading-tight">
            We believe every student deserves the confidence to choose the right career.
          </h3>
          <p className="text-lg text-text-muted leading-relaxed">
            CVKaro combines education, technology, and artificial intelligence to help students discover their strengths, develop future-ready skills, and confidently prepare for their first job.
          </p>
        </div>

      </div>
    </section>
  );
}
