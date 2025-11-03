import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-deep': '#0a0a0a',
        'black-steel': '#1a1a1a',
        'green-quantum': '#00ff88',
        'green-matrix': '#1a4d2e',
        'green-cyber': '#6ac670',
        'white-pure': '#ffffff',
        'white-ghost': '#f5f5f5',
        'white-dim': 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        primary: ['var(--font-manrope)', 'sans-serif'],
        display: ['var(--font-jetbrains)', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 255, 136, 0.3)',
        'glow-md': '0 0 40px rgba(0, 255, 136, 0.4)',
        'glow-lg': '0 0 60px rgba(0, 255, 136, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'float': 'float 25s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9)' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(60px, 60px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
