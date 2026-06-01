export type Article = {
  slug: string;
  cluster: ClusterKey;
  title: string;
  excerpt: string;
  img: string;
};

export const CLUSTERS = [
  { key: 'food-independence', label: 'Food Independence' },
  { key: 'beginner', label: 'Beginner' },
  { key: 'land-use', label: 'Land Use (1–5 acres)' },
  { key: 'animals', label: 'Animals' },
  { key: 'systems', label: 'Systems' },
  { key: 'co-ops', label: 'Co-ops' },
  { key: 'income', label: 'Income' },
  { key: 'lifestyle', label: 'Lifestyle' },
] as const;

export type ClusterKey = (typeof CLUSTERS)[number]['key'];

export const ARTICLES: Article[] = [
  {
    slug: '#',
    cluster: 'food-independence',
    title: 'The four-system rule of food independence',
    excerpt:
      'Most homesteads fail because they over-invest in one system. Here are the four that pay back when balanced.',
    img: '/images/Image_S10.png',
  },
  {
    slug: '#',
    cluster: 'food-independence',
    title: 'What 80% food sovereignty actually looks like on a half acre',
    excerpt:
      'A monthly breakdown of what comes from the land vs. the store across a real year.',
    img: '/images/Image_S31.png',
  },
  {
    slug: '#',
    cluster: 'beginner',
    title: 'Start here: the smallest first step that still teaches you something',
    excerpt:
      'A 90-minute weekend project that gets your hands in soil and your first crop in the ground.',
    img: '/images/Image_S30.png',
  },
  {
    slug: '#',
    cluster: 'beginner',
    title: 'The six crops that never fail',
    excerpt:
      'Across every USDA zone, these six produce in the first 30 days — even with mediocre soil and inconsistent watering.',
    img: '/images/Image_S5.png',
  },
  {
    slug: '#',
    cluster: 'land-use',
    title: 'The 1-acre suburban lot, mapped',
    excerpt:
      'Where to put the beds, the coop, the rainwater catchment, and the path you actually use — without violating HOA aesthetics.',
    img: '/images/Image_S21.png',
  },
  {
    slug: '#',
    cluster: 'land-use',
    title: 'Five-acre build order, year by year',
    excerpt:
      'The phased plan we use with consulting clients: year one, year two, year three. What goes in, in what order, and why.',
    img: '/images/Image_S16.png',
  },
  {
    slug: '#',
    cluster: 'animals',
    title: 'Suburban chickens without a zoning fight',
    excerpt:
      'How to size your flock, design a quiet coop, and stay on the right side of every neighbor and ordinance.',
    img: '/images/Image_S24.png',
  },
  {
    slug: '#',
    cluster: 'animals',
    title: 'Goats vs. sheep vs. nothing: a small-acreage protein matrix',
    excerpt:
      'A practical comparison of the three livestock options most 2–5 acre homesteads consider — and what we recommend.',
    img: '/images/Image_S3.png',
  },
  {
    slug: '#',
    cluster: 'systems',
    title: 'Rainwater catchment math for the suburban roof',
    excerpt:
      'How much water you actually capture per inch of rain, and how to size your tanks for a dry July.',
    img: '/images/Image_S26.png',
  },
  {
    slug: '#',
    cluster: 'systems',
    title: 'Building a four-season pantry from scratch',
    excerpt:
      'Canning, fermenting, dehydrating, root-cellaring. The minimum-viable pantry that actually feeds you in February.',
    img: '/images/Image_S11.png',
  },
  {
    slug: '#',
    cluster: 'co-ops',
    title: 'How to start a 12-family co-op in 90 days',
    excerpt:
      'The playbook from our most successful founding cohorts. What to ask, who to invite, and how to handle the first season.',
    img: '/images/Image_S28.png',
  },
  {
    slug: '#',
    cluster: 'co-ops',
    title: 'Legal structures for small food co-ops, plain-language',
    excerpt:
      'LLC vs. cooperative vs. informal — what holds up at scale and what becomes a problem at 30 members.',
    img: '/images/Image_S7.png',
  },
  {
    slug: '#',
    cluster: 'income',
    title: 'Five small-homestead income streams ranked by hours-per-dollar',
    excerpt:
      'Eggs, value-add preserves, plant starts, classes, and consulting — what actually pays, and what just keeps you busy.',
    img: '/images/Image_S12.png',
  },
  {
    slug: '#',
    cluster: 'lifestyle',
    title: 'What changes when you stop relying on the system',
    excerpt:
      'Honest reflections from founding members on the quiet shifts — sleep, money, conflict, time — that no one warns you about.',
    img: '/images/Image_S33.png',
  },
];
