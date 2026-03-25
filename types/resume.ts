export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  yearRange: string;
  bullets?: string[];
}

export interface Project {
  title: string;
  description: string;
  techTags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  email: string;
  github: string;
  linkedin: string;
}
