/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07090e",
        card: "rgba(13, 19, 34, 0.7)",
        "card-hover": "rgba(20, 29, 50, 0.85)",
        border: "rgba(255, 255, 255, 0.08)",
        "border-glow": "rgba(6, 182, 212, 0.3)",
        brand: {
          DEFAULT: "#06b6d4",
          light: "#38bdf8",
          dark: "#0284c7",
          gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",
        },
        accent: {
          cyan: "#06b6d4",
          blue: "#3b82f6",
          indigo: "#6366f1",
          emerald: "#10b981",
        },
        muted: {
          DEFAULT: "#94a3b8",
          foreground: "#64748b",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 4s infinite ease-in-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(30px)' },
          '50%': { opacity: '0.8', filter: 'blur(45px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
