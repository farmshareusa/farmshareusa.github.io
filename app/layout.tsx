import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { siteConfig } from '@/config/site';
import { EngravedDefs } from '@/components/EngravedDefs';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteClient } from '@/components/SiteClient';
import { Analytics } from '@/components/Analytics';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.siteName} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: '/images/Image_S17.png', width: 1600, height: 900, alt: siteConfig.siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.siteName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/Image_S17.png'],
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.siteName,
      url: siteConfig.url,
      description: siteConfig.description,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/Logo_L1.png`,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.siteName,
      description: siteConfig.description,
      publisher: { '@id': `${siteConfig.url}/#organization` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <EngravedDefs />
        <SiteHeader />
        {children}
        <SiteFooter />
        <SiteClient />
        <Analytics />
      </body>
    </html>
  );
}
