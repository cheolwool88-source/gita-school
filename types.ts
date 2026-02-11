
export type Language = 'ko' | 'en';

export interface Guitarist {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  style: string;
}

export interface Instructor {
  id: string;
  name: string;
  position: string;
  specialty: string;
  experience: string[];
  imageUrl: string;
}

export interface Course {
  id: string;
  title: string;
  target: string;
  description: string;
  level: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  date: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export enum NavigationTab {
  HOME = 'home',
  INTRO = 'intro',
  INSTRUCTORS = 'instructors',
  CURRICULUM = 'curriculum',
  REVIEWS = 'reviews',
  BLOG = 'blog',
  CONTACT = 'contact'
}
