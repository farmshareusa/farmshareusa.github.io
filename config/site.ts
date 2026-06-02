export const siteConfig = {
  siteName: 'FarmShare USA',
  domain: 'farmshareusa.com',
  url: 'https://farmshareusa.com',
  tagline: 'Grow Food. Build Community. Live Freely.',
  description:
    'FarmShare USA helps families reclaim food independence, improve health, and build local community through homesteading education, farm co-ops, and land-based living.',
  emailProvider: null as null | 'convertkit' | 'beehiiv' | 'mailchimp' | 'formspree',
  emailFormId: null as null | string,
  analyticsId: null as null | string,
  checkoutUrl: null as null | string,
} as const;

export type SiteConfig = typeof siteConfig;
