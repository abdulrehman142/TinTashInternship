import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This is critical
  ],
  darkMode: 'class', 
  plugins: [],
};

export default config;
