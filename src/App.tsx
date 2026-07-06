import React, { useState, useEffect } from "react";
import { 
  Sparkles, Mail, Github, Heart, Shield, Terminal, ArrowUp, Code2 
} from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyCVKaro from "./components/WhyCVKaro";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import CareerHub from "./components/CareerHub";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import AuthModal from "./components/AuthModal";
import Dashboard from "./components/Dashboard";
import CareerPilotChatbot from "./components/CareerPilotChatbot";
import SurveySection from "./components/SurveySection";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  
  // Auth states
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  
  // Selected feature to scroll/focus
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | undefined>(undefined);

  // Scroll to section helper
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Sync activeSection with isLoggedIn state changes
  useEffect(() => {
    if (isLoggedIn) {
      setActiveSection("cvkaro-dashboard");
    } else {
      setActiveSection("home");
    }
  }, [isLoggedIn]);

  // Intersection Observer to detect scroll positions
  useEffect(() => {
    const sections = isLoggedIn 
      ? ["cvkaro-dashboard"] 
      : ["home", "features", "pricing", "about", "contact", "career-hub", "faqs"];
    
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.1, rootMargin: "-80px 0px 0px 0px" }
      );
      
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, [isLoggedIn]); // Re-observe if layout shifts when dashboard toggles

  const handleLoginClick = () => {
    setAuthMode("login");
    setAuthModalOpen(true);
  };

  const handleGetStartedClick = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = (fullName: string, email: string) => {
    setUserName(fullName);
    setUserEmail(email);
    setIsLoggedIn(true);
    
    // Smooth scroll down to dashboard workspace
    setTimeout(() => {
      scrollToId("cvkaro-dashboard");
    }, 100);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setUserEmail("");
    setSelectedFeatureId(undefined);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFeatureSelect = (featId: string) => {
    setSelectedFeatureId(featId);
    if (!isLoggedIn) {
      // Trigger modal to prompt user
      setAuthMode("signup");
      setAuthModalOpen(true);
    } else {
      // Already logged in, switch dashboard view tab
      scrollToId("cvkaro-dashboard");
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-green selection:text-white antialiased font-sans">
      
      {/* Sticky Header */}
      <Header
        onLoginClick={handleLoginClick}
        onGetStartedClick={handleGetStartedClick}
        activeSection={activeSection}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      {isLoggedIn ? (
        /* Logged In View - Shows interactive dashboard at the top */
        <main className="flex-grow">
          <Dashboard
            userName={userName}
            userEmail={userEmail}
            onLogout={handleLogout}
            initialSelectedFeature={selectedFeatureId}
          />
        </main>
      ) : (
        /* Landing Page for Guest Users */
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero onGetStartedClick={handleGetStartedClick} />

          {/* Why CVKaro (Value Pros) */}
          <WhyCVKaro onLearnMoreClick={handleGetStartedClick} />

          {/* Feature Highlights bento cards */}
          <Features onFeatureSelect={handleFeatureSelect} />

          {/* How It Works active step timeline */}
          <HowItWorks onInteractiveTryClick={handleGetStartedClick} />

          {/* Transparent Pricing Cards */}
          <Pricing onPlanSelect={(plan) => {
            if (!isLoggedIn) {
              setAuthMode("signup");
              setAuthModalOpen(true);
            }
          }} />

          {/* Career Hub Blog */}
          <CareerHub />

          {/* FAQs Accordions */}
          <FAQs />

          {/* Pre-launch Survey */}
          <SurveySection />

          {/* Contact Support Form */}
          <Contact />
        </main>
      )}

      {/* Auth Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
        defaultMode={authMode}
      />

      {/* Humble, visually polished global footer */}
      <footer className="bg-navy-dark text-white border-t border-white/5 pt-16 pb-8" id="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-12 mb-8">
            
            {/* Brand column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo_main.png" alt="CVKaro Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  Career Workspace
                </span>
              </div>
              
              <p className="text-white/60 text-xs leading-relaxed max-w-sm">
                Optimizing global engineering and technical talent checkpoints. Build beautiful layouts, parse with exact compliant criteria, close skill gaps, and land your next career destination.
              </p>
              
              <div className="flex items-center gap-3 text-white/40">
                <a href="#github" onClick={(e) => e.preventDefault()} className="hover:text-brand-green transition-colors">
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a href="#mail" onClick={(e) => e.preventDefault()} className="hover:text-brand-green transition-colors">
                  <Mail className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>

            {/* Links column 1 */}
            <div className="md:col-span-3 space-y-3">
              <h5 className="text-xs font-bold text-brand-green uppercase tracking-wider">Product Scope</h5>
              <ul className="space-y-2 text-xs text-white/70">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToId("home"); }} className="hover:text-white transition-colors">Resume Score Builder</a></li>
                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToId("features"); }} className="hover:text-white transition-colors">ATS Format Checkers</a></li>
                <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToId("pricing"); }} className="hover:text-white transition-colors">Enterprise Pricing plans</a></li>
                <li><a href="#career-hub" onClick={(e) => { e.preventDefault(); scrollToId("career-hub"); }} className="hover:text-white transition-colors">Personal Career Advisor</a></li>
              </ul>
            </div>

            {/* Links column 2 */}
            <div className="md:col-span-4 space-y-4">
              <h5 className="text-xs font-bold text-brand-green uppercase tracking-wider">Join Career Newsletter</h5>
              <p className="text-xs text-white/60 leading-relaxed">
                Stay updated with weekly resume tips and upskilling guidelines curated by lead tech recruiters.
              </p>
              
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for joining our simulated newsletter!");
                  const input = e.currentTarget.querySelector("input");
                  if (input) input.value = "";
                }} 
                className="flex items-center gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter email..."
                  className="bg-white/5 border border-white/10 text-white placeholder-white/40 px-3 py-2 text-xs rounded-lg focus:outline-hidden focus:border-brand-green w-full"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-semibold bg-brand-green hover:bg-brand-green/90 rounded-lg text-white shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Bottom attribution copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <div>
              &copy; {new Date().getFullYear()} Powered By The Sun Technologies. All rights reserved.
            </div>
            
            <div className="flex items-center gap-1">
              <span>Designed to build careers, not just resumes.</span>
              <Heart className="h-3 w-3 text-brand-green fill-brand-green shrink-0 animate-pulse" />
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Chatbot Guide */}
      <CareerPilotChatbot />

    </div>
  );
}
