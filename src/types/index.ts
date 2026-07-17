export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectLinks {
  website?: string;
  github?: string;
}

export interface CaseStudy {
  overview: string;
  challenge: string;
  solution: string;
  results: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  summary: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  image: ProjectImage;
  links: ProjectLinks;
  featured: boolean;
  caseStudy: CaseStudy;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  shortBio: string;
  aboutBio: string;
  email: string;
  linkedin: string;
  github: string;
  url: string;
  ogImage: string;
}

export interface NavLink {
  label: string;
  href: string;
}
