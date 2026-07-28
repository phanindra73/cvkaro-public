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





      </div>
    </section>
  );
}
