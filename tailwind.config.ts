import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#020306',
          900: '#05070a',
          800: '#0a0d14',
          700: '#0f1420',
        },
        slate: {
          900: '#141a29',
          800: '#1e2638',
          700: '#2a354d',
        },
        rune: {
          gold: '#dfa84a',
          amber: '#e2a84b',
        },
        cyan: {
          hud: '#4ef2d2',
          terminal: '#3df6ff',
        },
        aurora: {
          emerald: '#00ff9d',
          purple: '#9000ff',
        },
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Courier New', 'monospace'],
      },
      animation: {
        'scanline-sweep': 'scanline 8s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
export default config;