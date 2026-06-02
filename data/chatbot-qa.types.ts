export type ChatbotQACategory = string;

export interface ChatbotQAItem {
  id: string;
  category: ChatbotQACategory;
  question: string;
  answer: string;
  keywords: string[];
  link?: string;
}

export interface ChatbotQAMeta {
  name: string;
  version: string;
  voice: string;
  fallback: string;
  fallbackLink: string;
  updated?: string;
  notes?: string;
}

export interface ChatbotQA {
  meta: ChatbotQAMeta;
  categories: ChatbotQACategory[];
  qa: ChatbotQAItem[];
}
