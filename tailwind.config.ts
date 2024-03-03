import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      colors: {
        background: '#040D12',
        'forest-green': '#183D3D',
        'flat-green': '#5C8374',
        'light-green': '#93B1A6',
        'almost-white': '#E9EDE4'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
export default config;
