export interface Brand {
  name: string;
  logo: string;
  link?: string;
}

export interface Project {
  id: string;
  brand: string;
  tag: string;
  role: string;
  period: string;
  desc: string;
  metrics: { val: string; label: string }[];
  approach: string[];
  images: string[];
  featured?: boolean;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  teamSize?: string;
  location?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'Strategic' | 'Technical' | 'Creative';
}

export interface Community {
  name: string;
  platform: string;
  handle: string;
  followers: string;
  engagement: string;
  description: string;
  image: string;
  link?: string;
}
