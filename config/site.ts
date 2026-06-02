export const siteConfig = {
  siteName: 'FarmShare USA',
  domain: 'farmshareusa.com',
  url: 'https://farmshareusa.com',
  tagline: 'Grow Food. Build Community. Live Freely.',
  description:
    'FarmShare USA helps families reclaim food independence, improve health, and build local community through homesteading education, farm co-ops, and land-based living.',

  // PRIMARY site-wide CTA — funnels every page into the free community.
  // `communityUrl` is a TEMPORARY stub pointing at the in-site /community/ page.
  // Replace with the live Membership.io community URL when ready; every
  // "Join the Free Community" CTA across the site reads from here, so a
  // single edit updates header, hero, homepage final CTA, footer, and
  // the community page hero in one go.
  communityUrl: '/community/',
  communityCtaLabel: 'Join the Free Community',

  emailProvider: null as null | 'convertkit' | 'beehiiv' | 'mailchimp' | 'formspree',
  emailFormId: null as null | string,
  analyticsId: null as null | string,
  checkoutUrl: null as null | string,
} as const;

export type SiteConfig = typeof siteConfig;
