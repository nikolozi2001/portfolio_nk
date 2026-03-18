export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "frontend" | "fullstack" | "mobile" | "design" | "other";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "design" | "other";
}

export interface Experience {
  id: string;
  role: string;
  roleKa: string;
  company: string;
  companyKa: string;
  companyUrl?: string;
  location: string;
  locationKa: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  descriptionKa: string;
  highlights: string[];
  highlightsKa: string[];
  technologies: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  tags: string[];
  readingTime: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
