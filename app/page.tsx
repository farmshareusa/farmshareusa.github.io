import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bone text-ink flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center">
        <h1 className="font-display text-display-xl text-heritage-green">
          {siteConfig.siteName}
        </h1>
        <p className="mt-6 font-sans text-xl sm:text-2xl text-ink/80 max-w-2xl mx-auto">
          {siteConfig.tagline}
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="/start/"
            className="inline-flex items-center justify-center rounded-full bg-harvest-gold px-8 py-4 font-sans text-base sm:text-lg font-semibold text-ink shadow-sm transition hover:bg-clay hover:text-bone focus:outline-none focus:ring-2 focus:ring-heritage-green focus:ring-offset-2 focus:ring-offset-bone"
          >
            Get Started Free
          </a>
        </div>
        <p className="mt-16 font-sans text-sm uppercase tracking-[0.2em] text-sage">
          Foundation build — real site coming soon
        </p>
      </div>
    </main>
  );
}
