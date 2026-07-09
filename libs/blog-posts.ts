// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'signs-you-need-brake-replacement',
    title:    '7 Signs Your Brakes Need Replacing (Not Just a Pad Swap)',
    excerpt:  'Squealing, grinding, or a pulsing pedal? Here are the 7 clear warning signs it’s time for a real brake job — not just a quick pad swap — before your next long drive.',
    category: 'Brakes',
    date:     'April 18, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/brake-replacement.jpg',
    imageAlt: 'Mechanic inspecting worn brake pads and rotors at Redline Auto Care in Franklin, TN',
    featured: true,
  },
  {
    slug:     'how-often-should-you-change-your-oil',
    title:    'How Often Should You Change Your Oil in Middle Tennessee?',
    excerpt:  'Conventional vs. synthetic, short trips vs. highway miles — here’s the honest oil-change schedule for Franklin, Brentwood, and Nashville-area drivers.',
    category: 'Oil Change',
    date:     'April 14, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/oil-change-schedule.jpg',
    imageAlt: 'Oil change schedule guide for Middle Tennessee drivers',
  },
  {
    slug:     'synthetic-vs-conventional-oil',
    title:    'Synthetic vs. Conventional Oil: What’s Right for Your Vehicle in 2026?',
    excerpt:  'Real pros, cons, and costs — plus which vehicles benefit most from synthetic and how the cost-per-mile actually compares.',
    category: 'Oil Change',
    date:     'April 10, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/synthetic-vs-conventional-oil.jpg',
    imageAlt: 'Synthetic vs conventional motor oil comparison for Middle Tennessee vehicles',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }