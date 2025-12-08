/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
          950: '#000a1a',
        },
        'navy': {
          50: '#e8edf5',
          100: '#d1daeb',
          200: '#a3b5d7',
          300: '#7590c3',
          400: '#476baf',
          500: '#19469b',
          600: '#14387c',
          700: '#0f2a5d',
          800: '#0a1c3e',
          900: '#050e1f',
          950: '#02070f',
        },
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glass-border': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 102, 255, 0.15)',
        'glass-hover': '0 12px 48px 0 rgba(0, 102, 255, 0.25)',
        'glow-blue': '0 0 40px rgba(0, 102, 255, 0.3)',
        'glow-blue-lg': '0 0 80px rgba(0, 102, 255, 0.4)',
      },
    },
  },
  plugins: [],
};
