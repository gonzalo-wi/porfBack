/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        console: {
          bg: '#080d16',
          surface: '#0f1724',
          border: '#1a2332',
          primary: '#3b82f6',
          accent: '#06d6a0',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          muted: '#64748b',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'count-up': 'countUp 1s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'fade-up-in': 'fadeUpIn 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'zoom-in': 'zoomIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        fadeUpIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        zoomIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
      },
    },
  },
  plugins: [],
}
