import Fuse, { type IFuseOptions, type FuseResult } from 'fuse.js';
import type { ChatbotQAItem } from '@/data/chatbot-qa.types';

export interface ChatMatchResult {
  best: ChatbotQAItem | null;
  suggestions: ChatbotQAItem[];
}

const FUSE_OPTIONS: IFuseOptions<ChatbotQAItem> = {
  includeScore: true,
  ignoreLocation: true,
  threshold: 0.42,
  minMatchCharLength: 2,
  keys: [
    { name: 'question', weight: 0.6 },
    { name: 'keywords', weight: 0.35 },
    { name: 'answer', weight: 0.05 },
  ],
};

const CONFIDENT_SCORE = 0.42;

let cachedQA: ChatbotQAItem[] | null = null;
let cachedFuse: Fuse<ChatbotQAItem> | null = null;

function getFuse(qa: ChatbotQAItem[]): Fuse<ChatbotQAItem> {
  if (cachedFuse && cachedQA === qa) return cachedFuse;
  cachedQA = qa;
  cachedFuse = new Fuse(qa, FUSE_OPTIONS);
  return cachedFuse;
}

export function findAnswer(query: string, qa: ChatbotQAItem[]): ChatMatchResult {
  const q = (query || '').trim();
  if (!q || qa.length === 0) {
    return { best: null, suggestions: [] };
  }

  const fuse = getFuse(qa);
  const results: FuseResult<ChatbotQAItem>[] = fuse.search(q, { limit: 8 });

  if (results.length === 0) {
    return { best: null, suggestions: [] };
  }

  const top = results[0];
  const topScore = typeof top.score === 'number' ? top.score : 1;
  const confident = topScore <= CONFIDENT_SCORE;

  const best = confident ? top.item : null;

  const seen = new Set<string>();
  if (best) seen.add(best.id);
  const suggestions: ChatbotQAItem[] = [];
  for (const r of results) {
    if (suggestions.length >= 3) break;
    if (seen.has(r.item.id)) continue;
    seen.add(r.item.id);
    suggestions.push(r.item);
  }

  return { best, suggestions };
}
