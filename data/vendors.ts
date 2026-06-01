export type Vendor = {
  id: string;
  name: string;
  category:
    | 'tools'
    | 'seeds'
    | 'equipment'
    | 'meat'
    | 'processing'
    | 'contractor'
    | 'consulting';
  city: string;
  state: string;
  desc: string;
  certified: boolean;
};

export const VENDORS: Vendor[] = [
  {
    id: 'red-barn-tools',
    name: 'Red Barn Hand Tools',
    category: 'tools',
    city: 'Lancaster',
    state: 'PA',
    desc: 'American-made hand tools forged for serious gardens and small homesteads.',
    certified: true,
  },
  {
    id: 'heritage-seed-co',
    name: 'Heritage Seed Company',
    category: 'seeds',
    city: 'Mansfield',
    state: 'MO',
    desc: 'Open-pollinated, regionally adapted seed catalog with planting guides for every zone.',
    certified: true,
  },
  {
    id: 'four-season-greenhouse',
    name: 'Four-Season Greenhouse Kits',
    category: 'equipment',
    city: 'Boulder',
    state: 'CO',
    desc: 'Modular passive-solar greenhouse kits designed for 1–5 acre homesteads.',
    certified: true,
  },
  {
    id: 'cascade-butchers',
    name: 'Cascade Custom Butchers',
    category: 'meat',
    city: 'Salem',
    state: 'OR',
    desc: 'Mobile slaughter and cut-and-wrap service for small pasture-raised herds.',
    certified: true,
  },
  {
    id: 'midwest-deer-processing',
    name: 'Midwest Deer Processing',
    category: 'processing',
    city: 'Madison',
    state: 'WI',
    desc: 'Whole-animal venison processing — sausage, jerky, and bone broth bundles.',
    certified: true,
  },
  {
    id: 'piedmont-farm-builders',
    name: 'Piedmont Farm Builders',
    category: 'contractor',
    city: 'Asheville',
    state: 'NC',
    desc: 'Barn, coop, and rainwater-system contractors specializing in small homesteads.',
    certified: true,
  },
  {
    id: 'great-plains-tractor',
    name: 'Great Plains Compact Tractor',
    category: 'equipment',
    city: 'Lincoln',
    state: 'NE',
    desc: 'New and refurbished sub-compact tractors, implements, and on-farm training.',
    certified: true,
  },
  {
    id: 'high-tunnel-supply',
    name: 'High Tunnel Supply',
    category: 'equipment',
    city: 'Asheville',
    state: 'NC',
    desc: 'Caterpillar-tunnel and high-tunnel kits priced for backyard producers.',
    certified: true,
  },
  {
    id: 'old-mill-seed-saving',
    name: 'Old Mill Seed-Saving Co.',
    category: 'consulting',
    city: 'Floyd',
    state: 'VA',
    desc: 'Seed-saving education, custom heirloom collections, and grow-out contracts.',
    certified: true,
  },
  {
    id: 'tidewater-oyster-gear',
    name: 'Tidewater Oyster Gear',
    category: 'equipment',
    city: 'Annapolis',
    state: 'MD',
    desc: 'Oyster cages, tumblers, and small-scale aquaculture starter packages.',
    certified: false,
  },
  {
    id: 'high-desert-irrigation',
    name: 'High Desert Drip Irrigation',
    category: 'equipment',
    city: 'Santa Fe',
    state: 'NM',
    desc: 'Custom drip systems engineered for arid climates and rainwater harvest.',
    certified: true,
  },
  {
    id: 'green-mountain-maple',
    name: 'Green Mountain Sugarworks',
    category: 'consulting',
    city: 'Burlington',
    state: 'VT',
    desc: 'Backyard maple sugaring consulting and small-batch evaporator equipment.',
    certified: true,
  },
];

export const VENDOR_CATS: Array<{ key: Vendor['category']; label: string }> = [
  { key: 'tools', label: 'Tools' },
  { key: 'seeds', label: 'Seeds' },
  { key: 'equipment', label: 'Equipment' },
  { key: 'meat', label: 'Meat & Butchery' },
  { key: 'processing', label: 'Processing' },
  { key: 'contractor', label: 'Contractors' },
  { key: 'consulting', label: 'Consulting' },
];
