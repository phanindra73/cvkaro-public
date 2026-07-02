export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingTier {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: "Resume Tips" | "Interview Prep" | "Career Advice" | "Upskilling";
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "ATS & Resume" | "Billing" | "AI Learning Paths" | "General";
}

export interface UserSession {
  isLoggedIn: boolean;
  email?: string;
  fullName?: string;
  currentResumeText?: string;
}

export interface SkillGapItem {
  skill: string;
  impactLevel: "High" | "Medium" | "Low";
  reason: string;
  learningResource: string;
}

export interface ResumeAnalysisResult {
  score: number;
  summary: string;
  formattingScore: number;
  readabilityScore: number;
  impactScore: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  skillGaps: SkillGapItem[];
  suggestedLearningPath: {
    title: string;
    estimatedHours: number;
    steps: {
      title: string;
      description: string;
      skillsGained: string[];
    }[];
  };
}
