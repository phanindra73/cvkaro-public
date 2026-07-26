import React, { useState } from "react";
import { 
  LogOut, RefreshCw, FileText, UploadCloud, Gauge, CheckCircle2, 
  AlertTriangle, Clock, ArrowRight, ChevronRight, Sparkles, BookOpen, 
  HelpCircle, Check, Info, Activity, Compass 
} from "lucide-react";
import { 
  SAMPLE_RESUMES, SAMPLE_JOB_DESCRIPTIONS, simulateResumeAnalysis 
} from "../data";
import { ResumeAnalysisResult } from "../types";

interface DashboardProps {
  userName: string;
  userEmail: string;
  onLogout: () => void;
  initialSelectedFeature?: string;
}

export default function Dashboard({ userName, userEmail, onLogout, initialSelectedFeature }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<"builder" | "analyzer" | "roadmap">(
    initialSelectedFeature === "feat-5" ? "roadmap" : "analyzer"
  );

  // Resume state
  const [resumeText, setResumeText] = useState(SAMPLE_RESUMES[0].text);
  const [resumeName, setResumeName] = useState(SAMPLE_RESUMES[0].label);

  // Job Description state
  const [jobText, setJobText] = useState(SAMPLE_JOB_DESCRIPTIONS[0].text);
  const [jobName, setJobName] = useState(SAMPLE_JOB_DESCRIPTIONS[0].label);

  // Analysis result state
  const [analysisResult, setAnalysisResult] = useState<ResumeAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Resume builder input states
  const [bName, setBName] = useState(userName);
  const [bRole, setBRole] = useState("Software Engineer");
  const [bEmail, setBEmail] = useState(userEmail);
  const [bSkills, setBSkills] = useState("HTML, CSS, JavaScript, React, Tailwind CSS, Git");
  const [bExp, setBExp] = useState("Junior Web Developer at TechCorp (1 year) - Fixed React components and styled grids.");
  const [bEdu, setBEdu] = useState("Bachelor of Computer Application (BCA), State University (Graduated 2025)");

  // Trigger analysis simulator
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      const result = simulateResumeAnalysis(resumeText, jobText);
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 1500);
  };

  // Convert builder form to markdown resume
  const compileBuilderResume = () => {
    const markdown = `${bName.toUpperCase()} - ${bRole.toUpperCase()}
Email: ${bEmail} | Secure Cloud Resume File

OBJECTIVE
Highly motivated professional seeking to expand technologies and contribute to high-performance development.

TECHNICAL SKILLS
* ${bSkills}

EXPERIENCE
${bExp}

EDUCATION
${bEdu}`;

    setResumeText(markdown);
    setResumeName("Built with CVKaro Builder");
    setActiveTab("analyzer");
    
    // Auto trigger analysis
    setIsAnalyzing(true);
    setTimeout(() => {
      const result = simulateResumeAnalysis(markdown, jobText);
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 1200);
  };

  const handleResumeSelect = (resId: string) => {
    const selected = SAMPLE_RESUMES.find(r => r.id === resId);
    if (selected) {
      setResumeText(selected.text);
      setResumeName(selected.label);
    }
  };

  const handleJobSelect = (jobId: string) => {
    const selected = SAMPLE_JOB_DESCRIPTIONS.find(j => j.id === jobId);
    if (selected) {
      setJobText(selected.text);
      setJobName(selected.label);
    }
  };

  const handleDropSimulation = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Simulate uploading senior resume
      const selected = SAMPLE_RESUMES[1];
      setResumeText(selected.text);
      setResumeName(selected.label + " (Auto-parsed PDF)");
      const result = simulateResumeAnalysis(selected.text, jobText);
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="bg-light-bg min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16" id="cvkaro-dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Header Bar */}
        <div className="bg-white rounded-2xl border border-border-gray p-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-green/10 text-brand-green rounded-full text-xs font-semibold mb-2">
              <Sparkles className="h-3 w-3" />
              <span>Workspace Active</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-dark">
              Welcome, {userName}!
            </h2>
            <p className="text-xs text-text-muted mt-1">
              Account: <span className="font-semibold text-dark-gray">{userEmail}</span> | Plan Type: <span className="text-brand-green font-bold">Pro Trial</span>
            </p>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center justify-center gap-2 px-4 py-2 border border-border-gray rounded-xl text-xs font-semibold text-text-primary hover:bg-light-bg hover:text-red-500 hover:border-red-200 transition-all cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>

        {/* Workspace Tab selectors */}
        <div className="flex border-b border-border-gray mb-8" id="dashboard-tab-headers">
          <button
            onClick={() => setActiveTab("analyzer")}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "analyzer"
                ? "border-brand-green text-brand-green"
                : "border-transparent text-text-muted hover:text-navy-dark"
            }`}
          >
            <Gauge className="h-4.5 w-4.5" />
            ATS Gap Analyzer
          </button>
          
          <button
            onClick={() => setActiveTab("builder")}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "builder"
                ? "border-brand-green text-brand-green"
                : "border-transparent text-text-muted hover:text-navy-dark"
            }`}
          >
            <FileText className="h-4.5 w-4.5" />
            AI Resume Draft Builder
          </button>

          {analysisResult && (
            <button
              onClick={() => setActiveTab("roadmap")}
              className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "roadmap"
                  ? "border-brand-green text-brand-green"
                  : "border-transparent text-text-muted hover:text-navy-dark"
              }`}
            >
              <BookOpen className="h-4.5 w-4.5" />
              Your Career Learning Path
            </button>
          )}
        </div>

        {/* Tab Contents */}
        {activeTab === "analyzer" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="tab-analyzer-content">
            
            {/* Input column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Resume selection area */}
              <div className="bg-white rounded-2xl border border-border-gray p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display font-bold text-base text-navy-dark">
                    Step 1: Resume Source
                  </h4>
                  <span className="text-[10px] bg-brand-green/10 text-brand-green px-2 py-0.5 rounded-full font-bold">
                    Encrypted Cloud Storage
                  </span>
                </div>

                {/* Predefined samples dropdown */}
                <div className="mb-4">
                  <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                    Load Existing Sample Resume
                  </label>
                  <select
                    onChange={(e) => handleResumeSelect(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-border-gray rounded-lg text-navy-dark focus:outline-hidden bg-light-bg"
                  >
                    {SAMPLE_RESUMES.map(r => (
                      <option key={r.id} value={r.id}>{r.label}</option>
                    ))}
                  </select>
                </div>

                {/* Simulated Drag and drop */}
                <div 
                  onClick={handleDropSimulation}
                  className="border-2 border-dashed border-border-gray hover:border-brand-green bg-light-bg/55 hover:bg-brand-green/3 p-6 rounded-xl text-left cursor-pointer transition-colors mb-4 group relative"
                >
                  <UploadCloud className="h-8 w-8 text-text-muted mx-auto mb-2 group-hover:scale-110 group-hover:text-brand-green transition-all" />
                  <span className="text-xs font-semibold text-navy-dark block">
                    Drag & Drop PDF Resume here
                  </span>
                  <span className="text-[10px] text-text-muted block mt-1">
                    Click to simulate instant upload of "Priya Choudhury (IIT Graduate)"
                  </span>
                </div>

                {/* Raw Resume Text Editor */}
                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase mb-1 block">
                    Active Resume Draft Content
                  </label>
                  <div className="text-[10px] text-brand-green font-semibold mb-1 italic">
                    Loaded: {resumeName}
                  </div>
                  <textarea
                    rows={8}
                    value={resumeText}
                    onChange={(e) => {
                      setResumeText(e.target.value);
                      setResumeName("Custom User Resume");
                    }}
                    className="w-full text-xs p-3 font-mono border border-border-gray rounded-xl focus:border-brand-green focus:outline-hidden bg-light-bg resize-none"
                  />
                </div>
              </div>

              {/* Job description section */}
              <div className="bg-white rounded-2xl border border-border-gray p-6 shadow-sm">
                <h4 className="font-display font-bold text-base text-navy-dark mb-4">
                  Step 2: Target Job Description
                </h4>

                <div className="mb-4">
                  <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                    Load Target Industry Role
                  </label>
                  <select
                    onChange={(e) => handleJobSelect(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-border-gray rounded-lg text-navy-dark focus:outline-hidden bg-light-bg"
                  >
                    {SAMPLE_JOB_DESCRIPTIONS.map(j => (
                      <option key={j.id} value={j.id}>{j.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase mb-1 block">
                    Job Requirements Text
                  </label>
                  <div className="text-[10px] text-brand-green font-semibold mb-1 italic">
                    Selected Profile: {jobName}
                  </div>
                  <textarea
                    rows={6}
                    value={jobText}
                    onChange={(e) => {
                      setJobText(e.target.value);
                      setJobName("Custom pasted requirements");
                    }}
                    className="w-full text-xs p-3 border border-border-gray rounded-xl focus:border-brand-green focus:outline-hidden bg-light-bg resize-none"
                  />
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full py-4 text-left font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-xl shadow-lg shadow-brand-green/10 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>Analyzing compliance loops...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    <span>Run ATS & Gap Analysis</span>
                  </>
                )}
              </button>

            </div>

            {/* Results Output column */}
            <div className="lg:col-span-7">
              {isAnalyzing ? (
                <div className="bg-white rounded-2xl border border-border-gray p-12 text-left shadow-sm flex flex-col justify-center items-center h-full min-h-[500px]">
                  <div className="relative mb-6">
                    <div className="h-16 w-16 rounded-full border-4 border-brand-green/20 border-t-brand-green animate-spin" />
                    <Sparkles className="h-6 w-6 text-brand-green absolute inset-0 m-auto animate-bounce" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-navy-dark mb-2">
                    CVKaro Semantic Engine Running
                  </h4>
                  <p className="text-xs text-text-muted max-w-sm">
                    Scanning headings, formatting compliance metrics, calculating keyword density, and mapping upskilling opportunities...
                  </p>
                </div>
              ) : analysisResult ? (
                <div className="space-y-6 animate-scale-up" id="analysis-results">
                  
                  {/* Score summary panel */}
                  <div className="bg-white rounded-2xl border border-border-gray p-6 sm:p-8 shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                      
                      <div className="sm:col-span-4 flex justify-center">
                        {/* Circle Score dial */}
                        <div className="relative h-32 w-32 rounded-full border-8 border-light-bg flex items-center justify-center">
                          {/* Simulated SVG border circle */}
                          <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              className="stroke-brand-green fill-none"
                              strokeWidth="8"
                              strokeDasharray="351.8"
                              strokeDashoffset={351.8 - (351.8 * analysisResult.score) / 100}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="text-left">
                            <span className="text-3xl font-display font-extrabold text-navy-dark">
                              {analysisResult.score}
                            </span>
                            <span className="text-xs text-text-muted block font-semibold">
                              / 100 Score
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-8 space-y-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          analysisResult.score >= 80 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {analysisResult.score >= 80 ? "ATS Ready (Excellent)" : "Needs Optimization"}
                        </span>
                        
                        <h4 className="font-display font-bold text-lg text-navy-dark">
                          Compliance Assessment Summary
                        </h4>
                        
                        <p className="text-xs text-text-muted leading-relaxed">
                          {analysisResult.summary}
                        </p>
                      </div>

                    </div>

                    {/* Sub-scores metrics columns */}
                    <div className="grid grid-cols-3 gap-4 mt-8 border-t border-border-gray pt-6">
                      <div className="text-left">
                        <div className="text-xs font-bold text-text-muted uppercase mb-1">Layout & Formats</div>
                        <div className="text-lg font-display font-bold text-navy-dark">{analysisResult.formattingScore}%</div>
                      </div>
                      <div className="text-left border-x border-border-gray">
                        <div className="text-xs font-bold text-text-muted uppercase mb-1">Readability</div>
                        <div className="text-lg font-display font-bold text-navy-dark">{analysisResult.readabilityScore}%</div>
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-text-muted uppercase mb-1">Impact & Numbers</div>
                        <div className="text-lg font-display font-bold text-navy-dark">{analysisResult.impactScore}%</div>
                      </div>
                    </div>

                  </div>

                  {/* Dual Column Keyword density and match analyzer */}
                  <div className="bg-white rounded-2xl border border-border-gray p-6 shadow-sm">
                    <h4 className="font-display font-bold text-base text-navy-dark mb-4 flex items-center gap-2">
                      <Activity className="h-5 w-5 text-brand-green" />
                      Applicant Tracking System (ATS) Keyword Matching
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Matched Column */}
                      <div className="bg-green-50/50 rounded-xl p-4 border border-green-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-green-700">Matched Key skills ({analysisResult.matchedKeywords.length})</span>
                          <CheckCircle2 className="h-4.5 w-4.5 text-brand-green" />
                        </div>
                        {analysisResult.matchedKeywords.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5">
                            {analysisResult.matchedKeywords.map(kw => (
                              <span key={kw} className="bg-white border border-green-200 text-green-800 text-[10px] font-semibold px-2 py-0.5 rounded-md font-mono">
                                {kw}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-[10px] text-text-muted italic">No overlapping skills found in CV.</span>
                        )}
                      </div>

                      {/* Missing Gaps Column */}
                      <div className="bg-yellow-50/50 rounded-xl p-4 border border-yellow-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-yellow-700">Missing Gaps ({analysisResult.missingKeywords.length})</span>
                          <AlertTriangle className="h-4.5 w-4.5 text-yellow-500" />
                        </div>
                        {analysisResult.missingKeywords.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5">
                            {analysisResult.missingKeywords.map(kw => (
                              <span key={kw} className="bg-white border border-yellow-200 text-yellow-800 text-[10px] font-semibold px-2 py-0.5 rounded-md font-mono">
                                {kw}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-[10px] text-text-muted italic">Perfect keyword coverage! Zero gaps identified.</span>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Immediate prompt card to switch to roadmap */}
                  <div className="bg-navy-dark text-white rounded-2xl p-5 border border-white/5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-green/20 p-2.5 rounded-xl text-brand-green hidden sm:block shrink-0">
                        <Compass className="h-5 w-5" />
                      </div>
                      <div>
                        <h5 className="font-display font-semibold text-sm">
                          AI Upskilling Path Generated ({analysisResult.skillGaps.length} gaps)
                        </h5>
                        <p className="text-[11px] text-white/70 mt-0.5">
                          Bridge these gaps with step-by-step modular phases and project instructions.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTab("roadmap")}
                      className="px-4 py-2 bg-brand-green hover:brightness-110 text-navy-dark text-xs font-bold rounded-lg cursor-pointer transition-all whitespace-nowrap shrink-0 flex items-center gap-1"
                    >
                      View Roadmap
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-border-gray p-12 text-left shadow-sm flex flex-col justify-center items-center h-full min-h-[500px]">
                  <div className="bg-brand-green/10 text-brand-green p-4 rounded-full mb-4">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-navy-dark mb-2">
                    CVKaro ATS Evaluation Sandbox
                  </h4>
                  <p className="text-xs text-text-muted max-w-sm mb-6 leading-relaxed">
                    Select a sample candidate and target requirements on the left, then trigger our compliance scanner to witness a high-fidelity evaluation.
                  </p>
                  
                  <button
                    onClick={handleAnalyze}
                    className="px-6 py-3 font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-xl shadow-md shadow-brand-green/10 cursor-pointer"
                  >
                    Analyze Default Configuration
                  </button>
                </div>
              )}
            </div>

          </div>
        )}

        {activeTab === "builder" && (
          <div className="bg-white rounded-3xl border border-border-gray p-6 sm:p-10 shadow-sm max-w-4xl mx-auto" id="tab-builder-content">
            <div className="flex items-center justify-between mb-6 border-b border-border-gray/55 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-dark">
                  AI-Guided Resume Draft Builder
                </h3>
                <p className="text-xs text-text-muted mt-1">
                  Input your raw career parameters. We compile it into a clean, single-column ATS-friendly template automatically.
                </p>
              </div>
              <span className="text-xs font-bold text-brand-green tracking-wide uppercase bg-brand-green/10 px-2.5 py-1 rounded-full">
                Format Proof
              </span>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); compileBuilderResume(); }} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={bName}
                    onChange={(e) => setBName(e.target.value)}
                    className="w-full px-3 py-2 border border-border-gray rounded-lg text-xs text-navy-dark focus:outline-hidden bg-light-bg"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                    Target Professional Title
                  </label>
                  <input
                    type="text"
                    required
                    value={bRole}
                    onChange={(e) => setBRole(e.target.value)}
                    className="w-full px-3 py-2 border border-border-gray rounded-lg text-xs text-navy-dark focus:outline-hidden bg-light-bg"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                    Contact Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={bEmail}
                    onChange={(e) => setBEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-border-gray rounded-lg text-xs text-navy-dark focus:outline-hidden bg-light-bg"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                  Technical Core Skills (Comma Separated)
                </label>
                <input
                  type="text"
                  required
                  placeholder="React, TypeScript, Redux, Node.js, Git"
                  value={bSkills}
                  onChange={(e) => setBSkills(e.target.value)}
                  className="w-full px-3 py-2 border border-border-gray rounded-lg text-xs text-navy-dark focus:outline-hidden bg-light-bg"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                  Work Experience Block (Include metrics and active verbs!)
                </label>
                <textarea
                  rows={4}
                  required
                  value={bExp}
                  onChange={(e) => setBExp(e.target.value)}
                  className="w-full px-3 py-2 border border-border-gray rounded-lg text-xs text-navy-dark focus:outline-hidden bg-light-bg resize-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                  Education Achievements
                </label>
                <input
                  type="text"
                  required
                  value={bEdu}
                  onChange={(e) => setBEdu(e.target.value)}
                  className="w-full px-3 py-2 border border-border-gray rounded-lg text-xs text-navy-dark focus:outline-hidden bg-light-bg"
                />
              </div>

              <div className="border-t border-border-gray pt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    // Populate default draft parameters
                    setBName(userName);
                    setBRole("Frontend Engineer");
                    setBSkills("React, JavaScript, CSS, HTML, Webpack, Git, Jest");
                    setBExp("Frontend Specialist at WebLabs (2 years) - Designed responsive dashboards and automated build scripts, increasing performance by 20%.");
                    setBEdu("Bachelor of Computer Science (B.Sc), Tech Institute (2024)");
                  }}
                  className="px-4 py-2.5 text-xs font-semibold text-text-primary border border-border-gray hover:bg-light-bg rounded-lg cursor-pointer"
                >
                  Load Sample Profile
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-lg shadow-sm cursor-pointer"
                >
                  Compile & Analyze Draft
                </button>
              </div>

            </form>
          </div>
        )}

        {activeTab === "roadmap" && analysisResult && (
          <div className="max-w-4xl mx-auto space-y-6 animate-scale-up" id="tab-roadmap-content">
            
            {/* Roadmap Header Summary card */}
            <div className="bg-navy-dark text-white rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl -z-10" />
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                <div>
                  <span className="text-xs font-bold text-brand-green uppercase tracking-wider block mb-2">
                    {analysisResult.suggestedLearningPath.title}
                  </span>
                  <h3 className="text-2xl font-display font-bold">
                    Skill Gap Closing Roadmap
                  </h3>
                  <p className="text-xs text-white/70 mt-1">
                    Based on the missing keywords found when comparing your resume to the target requirements.
                  </p>
                </div>

                <div className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl shrink-0">
                  <div className="flex items-center gap-1 text-xs text-white/60 mb-1 font-semibold">
                    <Clock className="h-3.5 w-3.5 text-brand-green" />
                    ESTIMATED WORKLOAD
                  </div>
                  <div className="text-xl font-display font-bold text-brand-green">
                    ~{analysisResult.suggestedLearningPath.estimatedHours} Hours
                  </div>
                </div>
              </div>
            </div>

            {/* Main timeline of steps */}
            <div className="bg-white rounded-3xl border border-border-gray p-6 sm:p-10 shadow-sm space-y-8 relative">
              
              {/* Vertical link timeline line */}
              <div className="absolute top-12 bottom-12 left-10 w-0.5 bg-border-gray/70 hidden sm:block" />

              {analysisResult.skillGaps.map((gap, idx) => (
                <div key={idx} className="relative flex flex-col sm:flex-row gap-6 items-start">
                  
                  {/* Step icon number */}
                  <div className="h-10 w-10 rounded-full bg-brand-green text-navy-dark font-display font-extrabold text-sm flex items-center justify-center shrink-0 border-4 border-white shadow-md relative z-10">
                    {idx + 1}
                  </div>

                  <div className="space-y-3 flex-1 border-b border-border-gray/55 pb-6 sm:pb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="text-lg font-display font-bold text-navy-dark">
                        Acquire Core Mastery: {gap.skill}
                      </h4>
                      <span className={`w-fit text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        gap.impactLevel === "High" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {gap.impactLevel} Gap Impact
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      <span className="font-semibold text-dark-gray block mb-1">Impact Evaluation:</span>
                      {gap.reason}
                    </p>

                    <div className="bg-light-bg rounded-xl p-4 border border-border-gray/55 flex items-start gap-3 mt-3">
                      <div className="bg-brand-green/10 text-brand-green p-1.5 rounded-lg shrink-0 mt-0.5">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-navy-dark uppercase tracking-wider">Curated Course Track</div>
                        <p className="text-xs text-text-primary mt-0.5 font-medium">{gap.learningResource}</p>
                      </div>
                    </div>

                    {/* Simulating mark complete */}
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={(e) => {
                          const target = e.currentTarget;
                          target.disabled = true;
                          target.className = "px-3 py-1.5 text-[10px] font-bold bg-green-100 text-brand-green rounded-lg flex items-center gap-1 cursor-default";
                          target.innerHTML = `✓ Skill Acquired!`;
                        }}
                        className="px-3 py-1.5 text-[10px] font-bold border border-border-gray text-text-primary hover:bg-light-bg rounded-lg cursor-pointer transition-colors"
                      >
                        Mark as Complete
                      </button>
                    </div>

                  </div>

                </div>
              ))}

              {/* Success summary and final steps */}
              <div className="flex gap-6 items-start">
                <div className="h-10 w-10 rounded-full bg-navy-dark text-white font-display font-bold text-sm flex items-center justify-center shrink-0 border-4 border-white shadow-md relative z-10">
                  ✓
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-navy-dark">
                    Re-verify Compliance
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed mt-1">
                    Once you've integrated these skills and listed matching hands-on sandbox projects on your resume draft, run the analyzer again to see your score approach **95%+**.
                  </p>
                  
                  <button
                    onClick={() => setActiveTab("analyzer")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:gap-2.5 transition-all mt-4"
                  >
                    Return to ATS Scanner
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
