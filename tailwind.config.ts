import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'glitch': 'glitch 1s ease-in-out infinite',
        'click-pulse': 'click-pulse 0.6s ease-out',
        'sparkle': 'sparkle 0.8s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.5)',
            transform: 'scale(1)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(255, 215, 0, 1), 0 0 30px rgba(255, 215, 0, 0.8)',
            transform: 'scale(1.05)',
          },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
          '0%, 100%': {
            transform: 'translate(0)',
            opacity: '1',
          },
          '20%': {
            transform: 'translate(-2px, 2px)',
            opacity: '0.8',
          },
          '40%': {
            transform: 'translate(-2px, -2px)',
            opacity: '0.8',
          },
          '60%': {
            transform: 'translate(2px, 2px)',
            opacity: '0.8',
          },
          '80%': {
            transform: 'translate(2px, -2px)',
            opacity: '0.8',
          },
        },
        'click-pulse': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0.6',
          },
        },
        sparkle: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5) rotate(0deg)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.2) rotate(180deg)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.5) rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
