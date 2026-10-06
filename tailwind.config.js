/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f5f7fa',
          100: '#ebeff5',
          200: '#d3ddec',
          300: '#abc0dc',
          400: '#7d9ec8',
          500: '#5c80b5',
          600: '#466699',
          700: '#39527d',
          800: '#324567',
          900: '#2d3b55',
          950: '#1b2333',
        },
        accent: {
          emerald: '#10b981',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          amber: '#f59e0b',
          rose: '#f43f5e',
          cyan: '#06b6d4',
        },
        surface: {
          light: '#ffffff',
          'light-subtle': '#f9fafb',
          'light-card': '#f3f4f6',
          dark: '#0a0d14',
          'dark-subtle': '#111726',
          'dark-card': '#161e31',
          'dark-border': '#1e293b',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
