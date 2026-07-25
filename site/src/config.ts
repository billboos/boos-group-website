import heroImage from './assets/hero-somali-jet.jpg';

export const SITE = {
  website: 'https://boos.netlify.app/', // TODO: confirm final Netlify URL before merge
  author: 'William Boos',
  description: 'Using theory, observations, and numerical models to understand the fundamental controls on tropical climate.',
  title: 'Boos Research Group',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes

  // Lab Info
  labName: 'Boos Research Group',
  university: 'UC Berkeley · Earth & Planetary Science',
  logo: '', // No logo asset yet; nav shows text only (LOGO_IMAGE.enable is false below)
  avatar: '/assets/william-boos.jpg',
  email: 'william.boos@berkeley.edu',

  // Hero Section (Home Page)
  hero: {
    title: 'Atmospheric dynamics & tropical climate',
    subtitle: 'The Boos research group at UC Berkeley studies the circulations, monsoons, and extreme weather that move heat and water around the planet.',
    action: 'View Publications',
    image: heroImage,
  },

  // Navigation. Research is deliberately not linked here (kept reachable only by
  // direct URL, per project decision) and there is no Contact page or form —
  // each Team member's profile lists their own email instead.
  nav: [
    { text: 'Home', link: '/', key: 'home' },
    { text: 'About', link: '/about', key: 'about' },
    { text: 'People', link: '/team', key: 'team' },
    { text: 'Publications', link: '/publications', key: 'publications' },
    { text: 'Data & Tools', link: '/data-tools', key: 'data-tools' },
    { text: 'Teaching', link: '/teaching', key: 'teaching' },
    { text: 'Opportunities', link: '/opportunities', key: 'opportunities' },
    { text: 'Search', link: '/search', key: 'search' },
  ],

  // Custom Pages (Appended after the main nav)
  customPages: [] as { text: string; link: string; key: string }[],

  // i18n Config
  i18n: {
    enabled: false,
    defaultLocale: 'en',
  }
};

export const LOCALE = {
  lang: 'en', // html lang code. Set this empty and default will be "en"
  langTag: ['en-EN'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    link: 'https://bsky.app/profile/billboos.bsky.social',
    active: true,
  },
];

// Default language configuration
export const DEFAULT_LANG: 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru' = 'en';
