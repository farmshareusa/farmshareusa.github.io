import Fuse, { type IFuseOptions, type FuseResult } from 'fuse.js';
import type { ChatbotQAItem } from '@/data/chatbot-qa.types';

export interface ChatMatchResult {
  best: ChatbotQAItem | null;
  suggestions: ChatbotQAItem[];
}

/**
 * Matching strategy (two complementary passes):
 *
 *  1. WHOLE-QUERY pass — the original behaviour. Fuse scores the full user
 *     sentence against each entry. If the best score is confident
 *     (<= CONFIDENT_WHOLE) we answer immediately. This preserves the prior
 *     accuracy on close phrasings and never makes existing matches worse.
 *
 *  2. TOKEN-RESCUE pass — for conversational paraphrases the whole-sentence
 *     score is often too high (Fuse treats the sentence as one fuzzy pattern).
 *     So we also search each meaningful word on its own and reward the entry
 *     that matches the MOST query words well (coverage x strength). We only
 *     answer from this pass when the winner (a) clears RESCUE_GATE, (b) is
 *     backed by >= TOKEN_MIN_MATCHES quality token hits, and (c) clearly beats
 *     the runner-up by RESCUE_MARGIN. This guards against a single common word
 *     (e.g. "land", "property") producing a confident-but-wrong answer.
 *
 * Either way, the top-ranked entries are returned as `suggestions` so the UI
 * can show "Did you mean…" chips when we don't answer confidently.
 */

// Whole-query Fuse: wider search threshold so good candidates are RETURNED
// (the CONFIDENT_WHOLE gate below decides whether we actually answer).
const WHOLE_OPTIONS: IFuseOptions<ChatbotQAItem> = {
  includeScore: true,
  ignoreLocation: true,
  threshold: 0.6,
  minMatchCharLength: 2,
  keys: [
    { name: 'question', weight: 0.6 },
    { name: 'keywords', weight: 0.35 },
    { name: 'answer', weight: 0.05 },
  ],
};

// Per-token Fuse: a single word must match a field reasonably well to count.
const TOKEN_OPTIONS: IFuseOptions<ChatbotQAItem> = {
  ...WHOLE_OPTIONS,
  threshold: 0.45,
};

const CONFIDENT_WHOLE = 0.42; // answer straight away if the whole query matches this well
const RESCUE_GATE = 0.5; // max combined score for a token-rescue answer
const RESCUE_MARGIN = 0.08; // top must beat #2 by this much to answer from rescue
const NEAR_EXACT = 0.2; // a near-perfect score only needs a tiny margin
const NEAR_EXACT_MARGIN = 0.03;
const TOKEN_MIN_MATCHES = 2; // rescue needs at least this many word hits on the winner
const TOKEN_MIN_STRENGTH = 0.5; // average word-match quality required (0..1, higher = better)

// Common words that carry no topic signal — ignored when tokenizing the query.
const STOP_WORDS = new Set(
  ('a an the is are am be been being do does did you your yours my mine me i we our us it its ' +
    'this that these those of for to on in at by with from and or but how what who whom when where ' +
    'why which can could would should will really just some any please help tell about give get got ' +
    'need want have has had me out here there')
    .split(/\s+/),
);

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 3 && !STOP_WORDS.has(w));
}

interface Candidate {
  item: ChatbotQAItem;
  whole: number; // whole-query score (0 best, 1 worst); 1 if not returned
  tokenMatches: number; // how many query tokens matched this item
  tokenStrength: number; // average match quality of those tokens (0..1, higher better)
  final: number; // combined score (0 best)
}

let cachedQA: ChatbotQAItem[] | null = null;
let cachedWhole: Fuse<ChatbotQAItem> | null = null;
let cachedToken: Fuse<ChatbotQAItem> | null = null;

function getFuses(qa: ChatbotQAItem[]): { whole: Fuse<ChatbotQAItem>; token: Fuse<ChatbotQAItem> } {
  if (cachedWhole && cachedToken && cachedQA === qa) {
    return { whole: cachedWhole, token: cachedToken };
  }
  cachedQA = qa;
  cachedWhole = new Fuse(qa, WHOLE_OPTIONS);
  cachedToken = new Fuse(qa, TOKEN_OPTIONS);
  return { whole: cachedWhole, token: cachedToken };
}

export function findAnswer(query: string, qa: ChatbotQAItem[]): ChatMatchResult {
  const q = (query || '').trim();
  if (!q || qa.length === 0) {
    return { best: null, suggestions: [] };
  }

  const { whole, token } = getFuses(qa);

  // --- Pass 1: whole-query search ---
  const wholeResults: FuseResult<ChatbotQAItem>[] = whole.search(q, { limit: 8 });
  const wholeScoreById = new Map<string, number>();
  for (const r of wholeResults) {
    wholeScoreById.set(r.item.id, typeof r.score === 'number' ? r.score : 1);
  }

  // --- Pass 2: per-token search, accumulate coverage + strength per item ---
  const tokens = tokenize(q);
  const tokenAgg = new Map<string, { n: number; sum: number }>();
  for (const t of tokens) {
    const seen = new Set<string>();
    for (const r of token.search(t, { limit: 6 })) {
      if (seen.has(r.item.id)) continue;
      seen.add(r.item.id);
      const score = typeof r.score === 'number' ? r.score : 1;
      const agg = tokenAgg.get(r.item.id) ?? { n: 0, sum: 0 };
      agg.n += 1;
      agg.sum += 1 - score; // convert to "strength" (higher = better)
      tokenAgg.set(r.item.id, agg);
    }
  }

  // --- Combine into a single ranked candidate list ---
  const byId = new Map<string, ChatbotQAItem>();
  for (const item of qa) byId.set(item.id, item);

  const ids = new Set<string>([...wholeScoreById.keys(), ...tokenAgg.keys()]);
  const candidates: Candidate[] = [];
  for (const id of ids) {
    const item = byId.get(id);
    if (!item) continue;
    const wholeScore = wholeScoreById.has(id) ? (wholeScoreById.get(id) as number) : 1;
    let tokenScore = 1;
    let n = 0;
    let strength = 0;
    if (tokens.length > 0 && tokenAgg.has(id)) {
      const agg = tokenAgg.get(id) as { n: number; sum: number };
      n = agg.n;
      strength = agg.sum / agg.n;
      const coverage = agg.n / tokens.length;
      tokenScore = 1 - coverage * strength; // needs both breadth AND quality
    }
    candidates.push({
      item,
      whole: wholeScore,
      tokenMatches: n,
      tokenStrength: strength,
      final: Math.min(wholeScore, tokenScore),
    });
  }
  candidates.sort((a, b) => a.final - b.final);

  // --- Decide the confident answer ---
  let best: ChatbotQAItem | null = null;

  // Pass 1 decision: preserve original behaviour exactly.
  if (wholeResults.length > 0) {
    const topWhole = wholeResults[0];
    const topWholeScore = typeof topWhole.score === 'number' ? topWhole.score : 1;
    if (topWholeScore <= CONFIDENT_WHOLE) best = topWhole.item;
  }

  // Pass 2 decision: token rescue (only when pass 1 wasn't confident).
  if (!best && candidates.length > 0) {
    const top = candidates[0];
    const runnerUp = candidates[1] ? candidates[1].final : 1;
    const margin = runnerUp - top.final;
    const supported = top.tokenMatches >= TOKEN_MIN_MATCHES && top.tokenStrength >= TOKEN_MIN_STRENGTH;
    if (top.final <= RESCUE_GATE && supported) {
      if (top.final <= NEAR_EXACT && margin >= NEAR_EXACT_MARGIN) {
        best = top.item;
      } else if (margin >= RESCUE_MARGIN) {
        best = top.item;
      }
    }
  }

  // --- Suggestions: top combined candidates excluding the chosen answer ---
  const seen = new Set<string>();
  if (best) seen.add(best.id);
  const suggestions: ChatbotQAItem[] = [];
  for (const c of candidates) {
    if (suggestions.length >= 3) break;
    if (seen.has(c.item.id)) continue;
    seen.add(c.item.id);
    suggestions.push(c.item);
  }

  return { best, suggestions };
}
