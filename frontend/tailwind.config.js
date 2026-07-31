/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(30px,20px) scale(1.06)' },
        },
        'slow-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'drift-slow': 'drift 24s ease-in-out infinite',
        'drift-slower': 'drift 34s ease-in-out infinite',
        'slow-float': 'slow-float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
