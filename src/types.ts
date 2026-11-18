export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  btn1Text: string;
  btn1Link: string;
  btn2Text: string;
  btn2Link: string;
  disciplines?: string[];
}

export interface PackageItem {
  badge: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
  whatsappMessage?: string;
}

export interface AboutContent {
  title: string;
  bioP1: string;
  bioP2: string;
  photoUrl: string;
  stat1Num: string;
  stat1Label: string;
  stat2Num: string;
  stat2Label: string;
  stat3Num: string;
  stat3Label: string;
  languages: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RateItem {
  item: string;
  category: string;
  unit: string;
  rate: string;
  updated: string;
}

export interface ArticleItem {
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  summary: string;
  link?: string;
  url?: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  client?: string;
  location?: string;
  year?: string;
  highlights?: string;
}

export interface ShowcaseItem {
  title: string;
  platform: 'Instagram' | 'Facebook' | 'Project' | string;
  category?: string;
  date?: string;
  imageUrl: string;
  link?: string;
  url?: string;
  description: string;
}

export interface PostItem {
  title: string;
  imageUrl: string;
  caption: string;
  link: string;
  location?: string;
  category?: string;
  area?: string;
  status?: string;
  blueprintRef?: string;
  highlights?: string[];
}

export interface DownloadItem {
  title: string;
  category: string;
  downloadUrl?: string;
  url?: string;
  fileSize?: string;
  size?: string;
}

export interface AdItem {
  title: string;
  imageUrl: string;
  caption: string;
  status: string;
  badge: string;
  ctaText?: string;
  ctaLink?: string;
}
