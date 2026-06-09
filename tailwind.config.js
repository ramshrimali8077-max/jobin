/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          cyan: "#06B6D4",
          indigo: "#6366F1",
          pink: "#EC4899",
        },
        success: "#10B981",
        background: "#050816", // Deeper void background
        glass: "rgba(255, 255, 255, 0.03)",
        glassHover: "rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        aurora: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(5%, -5%) scale(1.05)' },
          '66%': { transform: 'translate(-5%, 5%) scale(0.95)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" }
        },
        spinSlow: {
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        'fade-in-slide-up': 'fadeInSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'aurora': 'aurora 15s ease-in-out infinite',
        'blob': 'blob 10s infinite alternate',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spinSlow 4s linear infinite',
      }
    },
  },
  plugins: [],
}
