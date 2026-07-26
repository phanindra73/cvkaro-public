import React, { useState } from "react";
import { FileText, Gauge, Compass, ArrowDown, ChevronRight, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../data";

interface HowItWorksProps {
  onInteractiveTryClick: () => void;
}

export default function HowItWorks({ onInteractiveTryClick }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <FileText className="h-6 w-6" />;
      case 2:
        return <Gauge className="h-6 w-6" />;
      case 3:
        return <ArrowRight className="h-6 w-6 rotate-45 sm:rotate-0" />; // representing compare/match
      case 4:
        return <Compass className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  const stepPreviews = {
    1: {
      title: "Interactive Form or PDF Import",
      badge: "Step 1: Onboarding",
      details: "Our intelligent parsers read multiple sections: Header, Experience history, Education, Projects, and Tech stacks. We support simple drag and drop PDF upload.",
      mockupText: "Importing 'saurabh_cv_v2.pdf'...\nDetected fields:\n• Full Name: Saurabh Kumar\n• Contact: saurabh.k@example.com\n• Skills: React, HTML, CSS, JavaScript"
    },
    2: {
      title: "ATS Scans & Structural Heuristics",
      badge: "Step 2: Scoring Engine",
      details: "Your resume is evaluated against core parameters: readability, section identification, date alignments, spelling, passive vs active verbs, and layout hierarchy.",
      mockupText: "Analyzing PDF structures...\n✓ Readability: High\n✗ Active Verbs: Low (found 'worked on', 'helped with')\n✓ Section headers identified (4/4)\nCurrent ATS Score: 58/100"
    },
    3: {
      title: "Job Description Semantic Compare",
      badge: "Step 3: Gap Evaluation",
      details: "We align your skills against the specific requirements. If the job description asks for 'TypeScript developers with continuous integration (CI/CD) understanding', we cross-reference your past.",
      mockupText: "Target Job: Senior Frontend Engineer\nAnalyzing Gaps...\n• React, HTML, CSS -> MATCHED\n• TypeScript -> MISSING (Found: JavaScript)\n• CI/CD Pipelines -> MISSING\nSkill overlap: 60%"
    },
    4: {
      title: "AI-Generated Micro-Learning Pathways",
      badge: "Step 4: Career Acceleration",
      details: "For every validated technical gap, CVKaro maps out an immediate path. Learn high-value frameworks, finish coding labs, build portfolio projects, and update your CV in real-time.",
      mockupText: "Generating learning path...\nPhase 1: Master TypeScript\n• Goal: Understand Types, Interfaces, Generics.\n• Course: TS Fundamentals on Coursera.\n• Project: Convert React landing page to TS."
    }
  };

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mx-auto mb-12 sm:mb-16" id="how-it-works-header">
          <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-3">The Workflow</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-dark tracking-tight mb-4">
            How It Works
          </h3>
          <p className="text-base sm:text-lg text-text-muted">
            Four simple steps to bridge your professional skill gap and optimize your hiring prospects.
          </p>
        </div>

        {/* Vertical/Horizontal step buttons (with arrows as requested) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20" id="workflow-steps-connector">
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const isCurrent = activeStep === item.step;
            return (
              <React.Fragment key={item.step}>
                
                {/* Step Card */}
                <button
                  onClick={() => setActiveStep(item.step)}
                  className={`w-full lg:w-64 p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "bg-navy-dark text-white border-navy-dark shadow-xl -translate-y-1"
                      : "bg-light-bg text-text-primary border-border-gray/70 hover:border-brand-green/30 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      isCurrent ? "bg-brand-green text-navy-dark" : item.color
                    }`}>
                      Step {item.step}
                    </span>
                    <div className={`${isCurrent ? "text-brand-green" : "text-text-muted"}`}>
                      {getStepIcon(item.step)}
                    </div>
                  </div>
                  
                  <h4 className="font-display font-bold text-base mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isCurrent ? "text-white/80" : "text-text-muted"}`}>
                    {item.description}
                  </p>
                </button>

                {/* Arrow Connector (↓ on mobile, → on desktop) as requested */}
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="flex items-center justify-center py-2 lg:py-0 shrink-0">
                    {/* Desktop Arrow */}
                    <ChevronRight className="hidden lg:block h-6 w-6 text-text-muted/40 animate-pulse" />
                    {/* Mobile Arrow */}
                    <ArrowDown className="lg:hidden h-5 w-5 text-brand-green/60 animate-bounce" />
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </div>

        {/* Interactive Step Preview Dashboard */}
        <div
          className="bg-light-bg rounded-3xl border border-border-gray p-6 sm:p-10 max-w-5xl mx-auto shadow-sm"
          id="how-it-works-interactive"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Explanatory text */}
            <div className="md:col-span-7">
              <span className="text-xs font-bold text-brand-green tracking-wide uppercase mb-2 block">
                {stepPreviews[activeStep as keyof typeof stepPreviews].badge}
              </span>
              <h4 className="text-2xl font-display font-bold text-navy-dark mb-4">
                {stepPreviews[activeStep as keyof typeof stepPreviews].title}
              </h4>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
                {stepPreviews[activeStep as keyof typeof stepPreviews].details}
              </p>
              
              <button
                onClick={onInteractiveTryClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-lg shadow-sm transition-all duration-200 cursor-pointer"
              >
                Launch Simulator Playground
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Code / CLI Mockup Visual */}
            <div className="md:col-span-5 bg-navy-dark rounded-xl p-5 shadow-inner border border-white/10 relative overflow-hidden h-64 flex flex-col justify-between">
              
              {/* Terminal window controls */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                </div>
                <span className="text-[10px] text-white/40 font-mono">cvkaro_engine_logs.log</span>
              </div>

              {/* Terminal text output */}
              <div className="flex-1 font-mono text-[11px] text-brand-green/90 py-3 leading-relaxed whitespace-pre-line overflow-y-auto">
                {stepPreviews[activeStep as keyof typeof stepPreviews].mockupText}
              </div>

              {/* Cursor flicker */}
              <div className="text-[10px] text-white/35 font-mono border-t border-white/5 pt-2 flex items-center justify-between">
                <span>Active thread: ok_</span>
                <span className="animate-pulse font-bold text-brand-green">● RUNNING</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
