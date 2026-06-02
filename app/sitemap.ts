import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

const ROUTES = [
  '',
  '/start',
  '/membership',
  '/courses',
  '/courses/food-independence-blueprint',
  '/co-ops',
  '/vendors',
  '/health',
  '/community',
  '/homestead-real-estate',
  '/learn',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/disclaimers',
  '/community-guidelines',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-01');
  return ROUTES.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.7,
  }));
}
