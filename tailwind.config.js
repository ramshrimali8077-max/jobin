/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#2B83E4',
          purple: '#7B46D1',
          pink: '#D949A6',
          dark: '#1E1B4B'
        }
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-slide-up': 'fadeInSlideUp 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
