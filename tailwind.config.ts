import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
   './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1C1917',      // Warm Stone 900 (Main text, dark sections)
          primary: '#78350F',   // Amber 900 (Rich wood accent)
          accent: '#D97706',    // Amber 600 (CTAs, Badges)
          muted: '#78716C',     // Stone 500 (Subtext)
          surface: '#FAFAF9',   // Stone 50 (Section backgrounds)
          border: '#E7E5E4',    // Stone 200 (Borders, Dividers)
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;