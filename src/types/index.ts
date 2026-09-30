export interface ProjectScreenshot {
  src: string;
  alt: string;
  label: string;
  caption?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  category: 'Full-Stack' | 'AI Applications' | 'Embedded Systems' | 'All';
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  projectType?: 'Software' | 'Hardware / Embedded';
  codeSnippet?: string;
  imageUrl?: string;
  screenshots?: ProjectScreenshot[];
}

export interface SkillItem {
  name: string;
  description?: string;
  isKeySkill?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface JourneyMilestone {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: 'fullstack' | 'ai' | 'iot' | 'dsa';
  description: string;
  keyPoints: string[];
  technologies: string[];
}

export interface DsaTopic {
  title: string;
  description: string;
  concepts: string[];
  status: string;
}

export interface EducationData {
  degree: string;
  field: string;
  institution: string;
  university: string;
  location: string;
  duration: string;
  focus: string;
  coursework: string[];
  skillsGained: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  leetcode?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  about: {
    summary: string;
    story: string[];
    coreValues: { title: string; desc: string; icon: string }[];
  };
  socialLinks: SocialLinks;
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  journey: JourneyMilestone[];
  dsaTopics: DsaTopic[];
  education: EducationData;
}
