// src/types/portfolio.types.ts
export interface Profile {
  name: string;
  title: string;
  description: string;
  contact: {
    email: string[];
    phone: string;
    website?: string;
    address: string[];
  };
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Passion {
  title: string;
  description: string;
}