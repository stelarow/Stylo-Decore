// Tipos globais do projeto Stylo Decore

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
  variant?: "default" | "whatsapp";
}

export interface Product {
  id: string;
  name: string;
  category: "cortinas" | "persianas" | "papeis-de-parede" | "tapetes";
  description: string;
  image: string;
  features?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[];
}

export interface Subcategory {
  name: string;
  slug: string;
  href: string;
  description: string;
  image: string;
}

export interface Category {
  name: string;
  slug: string;
  href: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  workingHours: string;
}
