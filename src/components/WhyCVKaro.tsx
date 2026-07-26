import React from "react";
import { Sparkles, UploadCloud, Gauge, Activity, Compass, ShieldCheck, Check, Search, Target, UserCircle, FileText } from "lucide-react";
import { WHY_ITEMS } from "../data";

interface WhyCVKaroProps {
  onLearnMoreClick: () => void;
}

export default function WhyCVKaro({ onLearnMoreClick }: WhyCVKaroProps) {
  
  // Icon lookup helper
  const getIcon = (name: string, className = "h-6 w-6 text-brand-green") => {
    switch (name) {
      case "Sparkles":
        return <Sparkles className={className} />;
      case "FileText":
        return <FileText className={className} />;
      case "UploadCloud":
        return <UploadCloud className={className} />;
      case "Gauge":
        return <Gauge className={className} />;
      case "Activity":
        return <Activity className={className} />;
      case "Compass":
        return <Compass className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      case "Search":
        return <Search className={className} />;
      case "Target":
        return <Target className={className} />;
      case "UserCircle":
        return <UserCircle className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-20 md:py-28 bg-light-bg border-y border-border-gray/55"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Meet the Founder Section */}
        <div className="mb-8 sm:mb-12 bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border-gray/50 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-left md:text-left relative z-10">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 overflow-hidden border-4 border-white shadow-md">
              <img src="/founder.jpg" alt="Phanindra Oruganti" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-display font-bold text-navy-dark">Phanindra Oruganti</h3>
            <p className="text-brand-green font-medium mt-1">Founder & Product Owner – CVKaro</p>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-col justify-center h-full relative z-10 pt-2 md:pt-4">
            <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-4 text-left md:text-left">Meet the Founder</h2>
            <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed">
              <p>
                For more than 25 years, Phanindra Oruganti has been passionate about helping individuals build successful careers in the IT industry. As the Founder of The Sun Technologies, established in 2001, he has dedicated his career to providing quality software training, mentoring aspiring professionals, and preparing them for industry success.
              </p>
              <p>
                Over the years, he has trained and mentored 10,000+ students and professionals, gaining deep insights into the evolving challenges of career preparation and recruitment.
              </p>
              <p>
                Inspired by these experiences, he founded CVKaro—an AI-powered career platform designed to help students, job seekers, and professionals build ATS-friendly resumes, identify skill gaps, receive personalized learning recommendations, and confidently prepare for their next career opportunity. CVKaro is proudly developed and powered by The Sun Technologies, combining decades of educational excellence with the power of Artificial Intelligence to shape the future of career development.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Co-Founder Section */}
        <div className="mb-20 sm:mb-28 bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border-gray/50 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-left md:text-left relative z-10">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 overflow-hidden border-4 border-white shadow-md">
              <img src="/co-founder.jpeg" alt="Santhi Swaroopa Vakati" className="w-full h-full object-cover object-[50%_35%]" />
            </div>
            <h3 className="text-2xl font-display font-bold text-navy-dark">Santhi Swaroopa Vakati</h3>
            <p className="text-brand-green font-medium mt-1">Co-Founder – CVKaro</p>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-col justify-center h-full relative z-10 pt-2 md:pt-4">
            <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-4 text-left md:text-left">Meet the Co-Founder</h2>
            <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed">
              <p>
                Santhi Swaroopa Vakati is the Co-Founder of CVKaro and a B.Tech graduate in Computer Science & Engineering (AI & ML). She was mentored and trained at The Sun Technologies for over four years, gaining practical exposure to software technologies, product development, and real-world problem solving.
              </p>
              <p>
                As a founding member of CVKaro, she contributes to product strategy, business operations, and user experience, working alongside the leadership team to build an AI-powered career platform that empowers students, job seekers, and professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-left max-w-3xl mx-auto mb-12 sm:mb-16" id="why-cvkaro-header">
          <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-3">Value Proposition</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-dark tracking-tight mb-4">
            Why Choose Our Platform?
          </h3>
          <p className="text-base sm:text-lg text-text-muted">
            Go beyond resume building with AI-powered Career Intelligence. Discover the right career path, build job-ready skills, optimize your resume, and receive personalized guidance at every stage of your career journey.
          </p>
        </div>

        {/* Interconnected Block Process */}
        <div className="flex flex-col lg:flex-row w-full rounded-2xl shadow-xl border border-border-gray/60 mb-12 sm:mb-16 md:mb-20">
          {WHY_ITEMS.map((item, index) => {
            const isLast = index === WHY_ITEMS.length - 1;
            
            return (
              <div 
                key={index} 
                className="flex-1 relative bg-white flex flex-col p-6 lg:p-4 xl:p-6 border-b lg:border-b-0 lg:border-r border-border-gray/40 last:border-0 group hover:bg-brand-green/5 transition-colors z-0 hover:z-10"
              >
                {/* Desktop Connection Arrow */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-1/2 -right-[17px] w-8 h-8 bg-white border-t border-r border-border-gray/40 rotate-45 -translate-y-1/2 z-20 group-hover:bg-[#f2f9f6] transition-colors" />
                )}
                
                {/* Mobile Connection Arrow */}
                {!isLast && (
                  <div className="lg:hidden absolute -bottom-[17px] left-1/2 w-8 h-8 bg-white border-b border-r border-border-gray/40 rotate-45 -translate-x-1/2 z-20 group-hover:bg-[#f2f9f6] transition-colors" />
                )}

                {/* Content */}
                <div className="bg-brand-green/10 text-brand-green p-2.5 xl:p-3 rounded-xl w-fit mb-4 transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white shrink-0 mx-auto lg:mx-0 relative z-30">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.icon, "h-5 w-5 text-inherit")}
                  </div>
                </div>
                
                <h4 className="text-sm xl:text-base font-display font-bold text-navy-dark mb-2 text-left lg:text-left relative z-30">
                  {item.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed text-left lg:text-left flex-grow relative z-30">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats / Highlight Banner */}
        <div
          className="bg-navy-dark text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl"
          id="why-cvkaro-banner"
        >
          {/* Decorative ambient spots */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <h4 className="text-2xl sm:text-3xl font-display font-bold mb-4 tracking-tight">
                Designed to bypass automated filters and maximize callbacks
              </h4>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                Over 98% of Fortune 500 companies utilize an Applicant Tracking System. Without proper keyword density and semantic structures, high-quality resumes are filtered out before reaching hiring managers. Our system balances exact science with professional layout design.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-green/25 p-1 rounded-full text-brand-green shrink-0">
                    <Check className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-sm font-medium text-white/90">W3C Compliant PDF Outputs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-green/25 p-1 rounded-full text-brand-green shrink-0">
                    <Check className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-sm font-medium text-white/90">Dynamic Keyword Matching</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-left">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex flex-col justify-center min-h-[120px]">
                <div className="text-xl sm:text-2xl font-display font-bold text-brand-green mb-1 leading-tight">
                  Multiple
                </div>
                <div className="text-xs text-white/75 font-medium">Resume Templates</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex flex-col justify-center min-h-[120px]">
                <div className="text-xl sm:text-2xl font-display font-bold text-brand-green mb-1 leading-tight">
                  Secure
                </div>
                <div className="text-xs text-white/75 font-medium">Cloud Storage</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex flex-col justify-center min-h-[120px]">
                <div className="text-xl sm:text-2xl font-display font-bold text-brand-green mb-1 leading-tight">
                  AI Powered
                </div>
                <div className="text-xs text-white/75 font-medium">Career Insights</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex flex-col justify-center min-h-[120px]">
                <div className="text-xl sm:text-2xl font-display font-bold text-brand-green mb-1 leading-tight">
                  Built For
                </div>
                <div className="text-xs text-white/75 font-medium">Students & Professionals</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
