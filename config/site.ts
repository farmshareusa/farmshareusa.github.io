export const siteConfig = {
  siteName: 'FarmShare USA',
  domain: 'farmshareusa.com',
  url: 'https://farmshareusa.com',
  tagline: 'Take Back Control of Your Food, Health, and Future.',
  description:
    'FarmShare USA is the operating system for modern self-sufficiency — grow your own food, build independent systems, and join local farm co-ops nationwide.',
  emailProvider: null as null | 'convertkit' | 'beehiiv' | 'mailchimp' | 'formspree',
  emailFormId: null as null | string,
  analyticsId: null as null | string,
  checkoutUrl: null as null | string,
} as const;

export type SiteConfig = typeof siteConfig;
