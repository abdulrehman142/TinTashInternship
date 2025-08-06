import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This is critical
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Mono"', 'monospace'],
        jersey: ['"Jersey 10"', 'sans-serif'],
      },
    },
  },
  darkMode: 'class', // 👈 Enables class-based dark mode
  plugins: [],
};

export default config;
