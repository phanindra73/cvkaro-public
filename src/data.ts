import { FeatureItem, PricingTier, BlogArticle, FAQItem, ResumeAnalysisResult } from "./types";

export const WHY_ITEMS = [
  {
    title: "AI Career Discovery",
    description: "Discover the right career path based on your interests, strengths, skills, and aspirations using AI-powered career intelligence.",
    icon: "Search"
  },
  {
    title: "Customer Ikigai Framework",
    description: "Identify your purpose by aligning what you love, what you're good at, market needs, and career opportunities.",
    icon: "Target"
  },
  {
    title: "Career Intelligence Profile",
    description: "Build a personalized Career Intelligence Profile that evolves with your skills, learning, and career journey.",
    icon: "UserCircle"
  },
  {
    title: "AI Resume Builder",
    description: "Create professional, ATS-friendly resumes with AI-powered suggestions tailored to your career goals and industry expectations.",
    icon: "Sparkles"
  },
  {
    title: "Resume Upload",
    description: "Upload your existing resume to receive intelligent analysis, structured insights, and personalized recommendations for improvement.",
    icon: "UploadCloud"
  },
  {
    title: "ATS Analysis",
    description: "Evaluate your resume against ATS standards and improve your chances of getting shortlisted by top employers.",
    icon: "Gauge"
  },
  {
    title: "Job Description Gap Analysis",
    description: "Compare your resume with job requirements to identify missing skills, keywords, and experience needed for your target role.",
    icon: "Activity"
  },
  {
    title: "Personalized Learning Path",
    description: "Receive a personalized AI learning roadmap designed to bridge skill gaps and accelerate your career growth.",
    icon: "Compass"
  },
  {
    title: "Secure Cloud Storage",
    description: "Securely store and manage your career documents with encrypted cloud storage, accessible anytime from anywhere.",
    icon: "ShieldCheck"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Create or Upload Resume",
    description: "Import your current CV in PDF/DOCX or use our interactive form builder to draft a sleek, professional resume from scratch.",
    color: "bg-green-100 text-green-700"
  },
  {
    step: 2,
    title: "Analyze ATS Score",
    description: "Run an instant compliance audit covering formatting, keyword density, section hierarchy, and impact metrics.",
    color: "bg-blue-100 text-blue-700"
  },
  {
    step: 3,
    title: "Compare with Job Description",
    description: "Paste your target job posting. Our semantic parser highlights critical keyword gaps and soft/hard skill matches in seconds.",
    color: "bg-purple-100 text-purple-700"
  },
  {
    step: 4,
    title: "Receive AI Learning Path",
    description: "Get an actionable, personalized roadmap of courses, projects, and interview preparation guides to land the specific role.",
    color: "bg-emerald-100 text-emerald-700"
  }
];

export const FEATURE_HIGHLIGHTS: FeatureItem[] = [
  {
    id: "feat-1",
    title: "Resume Builder",
    description: "Create professional, ATS-friendly resumes with AI-powered suggestions tailored to your career goals.",
    iconName: "FileText"
  },
  {
    id: "feat-2",
    title: "Resume Upload",
    description: "Upload your resume to receive intelligent analysis and personalized recommendations for improvement.",
    iconName: "UploadCloud"
  },
  {
    id: "feat-3",
    title: "ATS Resume Analysis",
    description: "Evaluate your resume against ATS standards and improve your chances of getting shortlisted.",
    iconName: "CheckCircle"
  },
  {
    id: "feat-4",
    title: "Job Description Gap Analysis",
    description: "Compare your resume with job requirements to identify missing skills and experience.",
    iconName: "BarChart3"
  },
  {
    id: "feat-5",
    title: "Learning Path",
    description: "Receive a personalized AI learning roadmap to bridge skill gaps and accelerate career growth.",
    iconName: "Compass"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "tier-free",
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Perfect for testing CVKaro's foundational ATS analysis capabilities.",
    features: [
      "1 resume (basic template)",
      "ATS score — 1 scan/month",
      "JD gap analysis",
      "Learning path",
      "5 job listings / month",
      "PDF export",
      "Priority support"
    ],
    ctaText: "Get Started"
  },
  {
    id: "tier-pro",
    name: "Pro",
    priceMonthly: 299,
    priceYearly: 199,
    description: "The ultimate tool for active job seekers targeting tech and business roles.",
    features: [
      "5 resumes + 10 templates",
      "Unlimited ATS scans",
      "JD gap analysis — 10/month",
      "Learning path per skill gap",
      "Unlimited job listings",
      "PDF + DOCX export",
      "Priority support"
    ],
    isPopular: true,
    ctaText: "Upgrade to Pro"
  },
  {
    id: "tier-elite",
    name: "Elite",
    priceMonthly: 599,
    priceYearly: 399,
    description: "Tailored for senior professionals seeking specialized executive coaching.",
    features: [
      "Unlimited resumes + templates",
      "Unlimited ATS scans",
      "Unlimited JD gap analysis",
      "Full learning roadmap + courses",
      "AI ranked job matching",
      "LinkedIn profile review",
      "Priority support"
    ],
    ctaText: "Get Elite Access"
  },
  {
    id: "tier-teams",
    name: "Teams (B2B)",
    priceMonthly: 199,
    priceYearly: 149,
    description: "For universities, coding bootcamps, and outplacement agencies.",
    features: [
      "All Pro features per seat",
      "Admin dashboard",
      "Batch resume analysis",
      "Placement analytics report",
      "Branded resume templates",
      "Dedicated account manager",
      "Custom onboarding"
    ],
    ctaText: "Contact Sales"
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "art-1",
    title: "Cracking the 2026 ATS: The Ultimate Guide for Tech Professionals",
    summary: "Discover how AI-powered Applicant Tracking Systems filter candidate resumes and exactly how to optimize your bullet points to rank in the top 5%.",
    category: "Resume Tips",
    readTime: "6 min read",
    date: "June 28, 2026",
    author: {
      name: "Saurabh Sharma",
      role: "Lead Technical Recruiter",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
    },
    content: `### Understanding the Modern ATS in 2026

Applicant Tracking Systems (ATS) have evolved far beyond simple keyword matching algorithms. Today, they leverage large language models to understand context, impact, and skill hierarchies. If you write "Managed React development" and the job description asks for "Frontend Engineering with state management focus", modern AI models understand the semantic relationship, but they still score you higher if your metrics are explicit.

#### 1. Formatting is Still King
Avoid multi-column tables, unusual icon bullet points, and images. Modern parsers work linearly; a table can cause your professional experience to merge with your education in the text parser, resulting in a zero-score for experience duration. Stick to standard single-column text templates with clear heading hierarchies (e.g., "Professional Experience", "Skills", "Education").

#### 2. The Power of Action Verbs with Metrics
Every bullet point in your career section should follow the **XYZ formula**:
*Accomplished [X] as measured by [Y], by doing [Z].*

* **Bad**: Worked on scaling the backend server.
* **Good**: Scaled backend database read operations by **42%** through redis caching layer implementation and query optimization, handling over 10,000 active concurrent connections.

#### 3. Semantic Keywords vs Exact Matching
While context parsing is smarter, exact keyword inclusion for hard-core skills (e.g., 'Kubernetes', 'Typescript', 'CI/CD') is vital because non-technical recruiters often use exact filter strings. Make sure your resume lists both the high-level ecosystem and specific tools.

Stay tuned to CVKaro's interactive builders to ensure your document always compiles into an ATS-proof format!`
  },
  {
    id: "art-2",
    title: "Navigating Your Career Pivot: Identifying Transferable Skills Gaps",
    summary: "Switching from engineering to product, or finance to tech? Here is how to cross-analyze your qualifications against a brand new field.",
    category: "Career Advice",
    readTime: "8 min read",
    date: "June 15, 2026",
    author: {
      name: "Meera Nair",
      role: "Career Coach & Author",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
    },
    content: `### Pivoting Careers in the Modern Job Market

Changing career trajectories can be daunting. Recruiters look at dozens of specialized resumes every day, and if yours looks like a standard engineering list for a Product Management role, they will click reject in under 10 seconds. Your goal is to rewrite your past under a new light, highlighting transferable achievements and bridging any core technological gaps.

#### Step 1: Deconstruct the Target Role
Analyze 10 job descriptions for your target role. What are the common themes?
- For Product Management, it is **Stakeholder Management**, **Roadmapping**, **Product Strategy**, and **Customer Discovery**.
- If your background is software engineering, do not talk about "wrote refactored clean typescript APIs". Instead, talk about: "Led cross-functional sprint planning, aligning 6 developers and 2 designers on core feature releases, resulting in a 20% faster time-to-market."

#### Step 2: Bridge Technical Gaps with Micro-Credentials
If a PM role requires data querying via SQL and basic analytics, and you've never used them, do not fake it. Use CVKaro's Personalized Learning Path. Taking a structured course, creating a simple dashboard project, and placing it in your "Projects" section will satisfy ATS filters and show genuine proactivity.

#### Step 3: Speak the Language
The terminologies of different careers vary wildly. Educating yourself on the standard terminology used in your target industry is crucial. Spend time reading industry-level newsletters, listening to podcasts, and interacting on forums to naturally pick up the vocabulary.`
  },
  {
    id: "art-3",
    title: "Top 5 Upskilling Courses for Frontend Engineers in 2026",
    summary: "As frameworks shift and AI assistance reshapes development, these are the key technologies and skills that will keep you indispensable.",
    category: "Upskilling",
    readTime: "5 min read",
    date: "May 29, 2026",
    author: {
      name: "David Chen",
      role: "Director of Curriculum, TechEd",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    content: `### Staying Ahead as a Frontend Engineer

The role of a frontend engineer has fundamentally expanded. Writing standard components is largely automated by AI workflows. Today's high-value frontend specialists focus on edge rendering, extreme performance optimization, deep state architecture, and AI-assisted interactions.

Here are the top 5 areas and curated courses to level up your resume this quarter:

#### 1. Web Assembly (Wasm) and Heavy Client-Side Calculations
If you are building visual tools, editor apps, or high-performance dashboards, understanding Web Assembly is a game changer.
* *Recommended Path*: WebAssembly for Modern Frontend Developers. Learn Rust-to-JS compilation.

#### 2. Advanced State Machines and Reactive Architectures
Managing asynchronous events, collaborative cursors, and instant UI state changes requires robust structural state engines.
* *Recommended Path*: State Chart Architectures with XState and React 19.

#### 3. Real-Time Interactions (WebSockets & WebRTC)
Collaborative canvas and direct streaming applications are highly valued in SaaS.
* *Recommended Path*: Real-Time Systems using Socket.io and Redis.

#### 4. Design System Orchestration
Bridge the gap between product design and functional component codebases by mastering dynamic styling tools and Tailwind V4 advanced configurations.
* *Recommended Path*: Building Scalable Multi-Brand Design Systems.

By continuously logging your learning achievements and upskilling, CVKaro can highlight your active educational pursuits directly in your ATS report, signals to recruiters that you are a continuous, fast-growing learner.`
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is an ATS (Applicant Tracking System), and why does it reject resumes?",
    answer: "An Applicant Tracking System (ATS) is software used by recruiters to organize, parse, and filter candidate resumes. Many systems reject resumes automatically if they have unreadable layouts (such as complex tables, graphics, headers/footers, or text in shapes), or if they lack critical hard skills and relevant action keywords that match the target job description.",
    category: "ATS & Resume"
  },
  {
    id: "faq-2",
    question: "How does CVKaro's Gap Analysis work?",
    answer: "Our Gap Analysis system performs a deep comparison between your resume text and your target job description. It scans for hard technologies, soft skills, methodologies, and specific experience lengths mentioned in the job post. It then highlights exactly what is matched and what is missing, so you can tailor your resume before applying.",
    category: "ATS & Resume"
  },
  {
    id: "faq-3",
    question: "How do the Personalized AI Learning Paths help me get hired?",
    answer: "When CVKaro identifies missing skills in your resume relative to your target jobs, it doesn't just tell you what's missing—it maps out an educational path. It generates modular learning steps with estimated hours, key concepts, practical project suggestions, and links to top learning platforms so you can acquire the skill and add it to your CV confidently.",
    category: "AI Learning Paths"
  },
  {
    id: "faq-4",
    question: "Is my personal career data safe with CVKaro?",
    answer: "Absolutely. We prioritize your privacy above everything else. Your resumes, parsed text, and search metrics are protected by high-standard AES-256 cloud encryption. We never share, sell, or train external LLMs with your private employment history or uploaded files without your explicit consent.",
    category: "General"
  },
  {
    id: "faq-5",
    question: "Do you offer pricing packages for colleges, universities, or bootcamps?",
    answer: "Yes! Our Teams (B2B) subscription starting at ₹799/mo is ideal for student career offices and educational institutes. It includes bulk resume parsing, customizable templates, student progress reports, and an administrator panel to manage student success. Contact our sales team for custom volume setups.",
    category: "Billing"
  },
  {
    id: "faq-6",
    question: "Can I cancel or change my plan at any time?",
    answer: "Yes, you have complete control over your subscription. You can upgrade, downgrade, or cancel any premium plan at any time directly through your Account Settings. If you cancel, your premium benefits will remain active until the end of the current billing cycle.",
    category: "Billing"
  }
];

// Sample Resumes for Simulator
export const SAMPLE_RESUMES = [
  {
    id: "res-junior",
    label: "Junior Software Engineer",
    text: `SAURABH KUMAR - JUNIOR DEVELOPER
Email: saurabh.k@example.com | Phone: +91 9876543210
Web: github.com/saurabh-dev

OBJECTIVE
Self-motivated developer with 1 year of experience in building websites. Looking to join a professional tech company to write React and JavaScript code.

TECHNICAL SKILLS
* HTML, CSS, JavaScript, React, Git, Bootstrap
* Basic understanding of databases like MongoDB

EXPERIENCE
Junior Web Developer at TechStartup (July 2025 - Present)
* Fixed bugs in standard React components.
* Styled landing pages using CSS and Bootstrap.
* Collaborated with senior engineers on git branches.
* Participated in team meetings.

EDUCATION
Bachelor of Computer Application (BCA), State University (Graduated 2025)`
  },
  {
    id: "res-senior",
    label: "Senior Frontend Engineer (Highly Optimized)",
    text: `PRIYA CHOUDHURY - SENIOR FRONTEND ENGINEER
Email: priya.ch@example.com | Phone: +91 9998887776 | LinkedIn: linkedin.com/in/priyach

PROFESSIONAL SUMMARY
Highly accomplished Senior Frontend Engineer with 6+ years of experience leading UI development in high-growth SaaS environments. Specialized in React, TypeScript, and state management optimization, with a proven track record of boosting conversion and decreasing page load speeds.

CORE TECHNOLOGIES & TOOLS
* Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3, SQL
* Frameworks: React 18/19, Next.js, Redux Toolkit, Tailwind CSS, Sass
* Infrastructure/Ops: Git, CI/CD pipelines, Docker, AWS S3, Vite, Webpack
* Practices: Agile/Scrum, Test-Driven Development (Jest, Cypress), Web Accessibility (WCAG 2.1)

PROFESSIONAL EXPERIENCE
Lead Frontend Engineer at ScaleSaaS Inc (March 2023 - Present)
* Engineered high-performance, responsive React dashboard that decreased initial page-load latency by 38% and elevated active user engagement by 15%.
* Led a collaborative team of 4 engineers to design and implement a reusable TypeScript component library, shortening feature-to-market cycles by 25% across 3 company sub-products.
* Integrated complex WebSockets architecture to deliver real-time metrics, supporting up to 8,000 concurrent active users.
* Authored thorough automated unit and end-to-end test suites, raising overall code coverage from 62% to 91% and eliminating major regression errors.

Senior Frontend Developer at WebFlow Solutions (Jan 2021 - Feb 2023)
* Restructured legacy web applications to modern React architecture with Tailwind CSS, delivering a highly polished, responsive interface that improved mobile user conversion by 22%.
* Spearheaded SEO and performance audits, resulting in a consistent Lighthouse Performance Score of 95+.
* Set up automated CI/CD pipeline deployments using GitHub Actions, cutting release cycles from 2 weeks to daily deployments.

EDUCATION
Bachelor of Technology in Computer Science, Indian Institute of Technology (B.Tech, IIT), 2020`
  }
];

export const SAMPLE_JOB_DESCRIPTIONS = [
  {
    id: "job-react",
    label: "Senior Frontend Engineer (React & TypeScript)",
    text: `ABOUT THE ROLE
We are seeking a high-caliber Senior Frontend Engineer with a deep passion for craft, typography, and exceptional user experiences. In this role, you will lead the frontend architecture of our next-generation cloud-based collaboration suite.

REQUIREMENTS & HARD SKILLS
- 5+ years of experience building scalable production web applications.
- Strong expertise in React, Next.js, and modern state-management patterns (Redux, Zustand, or XState).
- Proficient in TypeScript, ES6+ Javascript, and modern CSS/styling (Tailwind CSS is highly preferred).
- Experience setting up Automated CI/CD pipelines (GitHub Actions, Jenkins) and containerization with Docker.
- Passion for performance: Experience with Webpack/Vite optimization, lazy loading, and caching strategies.
- Excellent communication skills and familiarity working in high-growth agile environments.

KEY RESPONSIBILITIES
- Architect and develop high-performance, accessible, and responsive user interfaces.
- Collaborate with designers to build a robust, scalable components system.
- Mentor junior engineers and perform structured code reviews.
- Integrate WebSockets/GraphQL to support multi-user real-time collaborations.
- Ensure 90%+ unit and integration test coverage.`
  },
  {
    id: "job-ai",
    label: "Full Stack AI Engineer",
    text: `POSITION OVERVIEW
We are looking for a Full Stack Software Engineer with deep expertise in JavaScript/TypeScript and cloud-native databases. You will join our high-impact AI Labs team to build interactive interfaces and robust microservices that utilize LLM APIs and real-time agents.

SKILLS & QUALIFICATIONS
- Solid engineering foundation in Node.js, Express, and React.
- Experience with modern AI SDKs (Google Gen AI SDK, OpenAI, LangChain) is a major plus.
- Proficiency in database design: SQL (PostgreSQL), NoSQL (MongoDB), and key-value caching (Redis).
- Familiarity with cloud platforms (AWS, GCP, or Azure) and Serverless deployment.
- Experience implementing WebSockets, microservices architectures, and event-driven backends.`
  }
];

// Mock Analysis logic helper
export function simulateResumeAnalysis(resumeText: string, jobDescText: string): ResumeAnalysisResult {
  const normResume = resumeText.toLowerCase();
  const normJob = jobDescText.toLowerCase();

  // Basic scores initialized
  let score = 55;
  let formattingScore = 75;
  let readabilityScore = 80;
  let impactScore = 50;

  // Keyword check lists
  const targetKeywords = [
    "typescript", "react", "next.js", "tailwind", "websockets", "ci/cd", "docker", "redux", "jest", "cypress", "aws", "postgresql", "node.js", "express", "redis", "agile", "seo", "lighthouse"
  ];

  const matchedKeywords: string[] = [];
  const missingKeywords: string[] = [];

  // Look for keywords in job desc. If they are in job desc, check if they are in resume.
  targetKeywords.forEach(kw => {
    const inJob = normJob.includes(kw);
    const inResume = normResume.includes(kw);
    if (inJob) {
      if (inResume) {
        matchedKeywords.push(kw.toUpperCase());
      } else {
        missingKeywords.push(kw.toUpperCase());
      }
    }
  });

  // Calculate scores based on matches
  const totalKeywordsInJob = matchedKeywords.length + missingKeywords.length;
  if (totalKeywordsInJob > 0) {
    const matchRatio = matchedKeywords.length / totalKeywordsInJob;
    score = Math.round(55 + (matchRatio * 35)); // base 55, up to 90
    impactScore = Math.round(45 + (matchRatio * 45));
  } else {
    // defaults
    if (normResume.includes("senior") || normResume.includes("lead")) {
      score = 88;
      formattingScore = 90;
      readabilityScore = 92;
      impactScore = 85;
      matchedKeywords.push("REACT", "TYPESCRIPT", "GIT", "CI/CD", "TAILWIND");
      missingKeywords.push("WEBSOCKETS", "DOCKER");
    } else {
      score = 64;
      formattingScore = 75;
      readabilityScore = 80;
      impactScore = 55;
      matchedKeywords.push("REACT", "JAVASCRIPT", "HTML", "CSS");
      missingKeywords.push("TYPESCRIPT", "TAILWIND", "CI/CD", "DOCKER");
    }
  }

  // Double checks on specific resume quality metrics
  if (normResume.includes("%") || normResume.includes("percent") || /\d+/.test(normResume)) {
    impactScore = Math.min(100, impactScore + 10);
  } else {
    impactScore = Math.max(30, impactScore - 15);
  }

  // Adjust overall score
  score = Math.round((formattingScore * 0.2) + (readabilityScore * 0.3) + (impactScore * 0.5));
  // Keep score within logical boundaries
  score = Math.max(30, Math.min(99, score));

  // Determine skill gaps
  const skillGaps: any[] = [];
  missingKeywords.forEach((kw, index) => {
    const impact = index === 0 || index === 1 ? "High" : "Medium";
    let reason = `Target job mentions ${kw} as a core technical skill, but it is not listed in your skills or project descriptions.`;
    let resource = `Complete learning track for ${kw} on Coursera/freeCodeCamp.`;

    if (kw === "TYPESCRIPT") {
      reason = "The job listing requires TypeScript. Your resume lists standard JavaScript. Strong typing is critical for this engineering team.";
      resource = "Complete the TypeScript Developer Roadmap on frontendmasters.com or official TypeScript docs.";
    } else if (kw === "WEBSOCKETS") {
      reason = "The job requirements highlight real-time interactive dashboards. Lack of real-time communication libraries (Socket.io/WebSockets) is a high-risk gap.";
      resource = "Build a collaborative chat server project with Socket.io on freeCodeCamp, then add it to your Projects portfolio.";
    } else if (kw === "CI/CD") {
      reason = "Automation pipelines are specified for deployments. Listing continuous deployment expertise reduces onboarding duration.";
      resource = "Take 'Introduction to Git & GitHub Actions' on Coursera.";
    } else if (kw === "DOCKER") {
      reason = "Containerization is required for local testing and cloud-native Kubernetes deployment pipelines.";
      resource = "Docker & Kubernetes Practical Boot camp on Udemy.";
    }

    skillGaps.push({
      skill: kw,
      impactLevel: impact,
      reason,
      learningResource: resource
    });
  });

  // If no missing keywords but score is still high, mock 1-2 minor upskill points
  if (skillGaps.length === 0) {
    skillGaps.push({
      skill: "System Design",
      impactLevel: "Low",
      reason: "To secure a Lead/Senior frontend slot, adding System Design architecture elements shows executive execution capabilities.",
      learningResource: "Check out 'ByteByteGo System Design Primer' by Alex Xu."
    });
  }

  // Assemble dynamic suggested learning path
  const steps = skillGaps.map((gap, i) => {
    return {
      title: `Phase ${i + 1}: Master ${gap.skill}`,
      description: `Target the technical gap in ${gap.skill}. Read core documentations, complete interactive tutorials, and implement an open-source sandbox.`,
      skillsGained: [gap.skill, `Expertise in ${gap.skill}`]
    };
  });

  if (steps.length === 0) {
    steps.push({
      title: "Phase 1: Advanced Mock Interviews",
      description: "Practise interactive system architecture questions with peer engineering leads.",
      skillsGained: ["System Design", "Technical Communication"]
    });
  }

  const estimatedHours = steps.length * 12;

  const suggestedLearningPath = {
    title: `Tailored Roadmap for ${normJob.includes("frontend") ? "Frontend Excellence" : "AI Full Stack Systems"}`,
    estimatedHours,
    steps
  };

  return {
    score,
    summary: score >= 80 
      ? "Excellent! Your resume exhibits highly quantitative achievements and strong keyword matches. With just a few optimizations, you are ready to apply."
      : "Solid start. Your layout is highly readable, but you are missing critical technical keywords and metric-driven achievements that recruiters actively scan for. Follow the roadmap below to boost your scores.",
    formattingScore,
    readabilityScore,
    impactScore,
    matchedKeywords,
    missingKeywords,
    skillGaps,
    suggestedLearningPath
  };
}
