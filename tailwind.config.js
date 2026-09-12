/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scrapbook: {
          dark: '#0D0614',
          'dark-paper': '#180B28',
          'dark-card': '#210E36',
          purple: '#9333EA',
          'purple-light': '#C084FC',
          'purple-dark': '#4C1D95',
          red: '#E11D48',
          'red-light': '#FB7185',
          'red-dark': '#881337',
          black: '#0A0410',
          cream: '#FFF1F2',
          pink: '#F43F5E',
          dusty: '#C084FC',
          rose: '#E11D48',
          brown: '#A855F7',
          paper: '#1A0C2B',
          tape: '#E11D48',
          'tape-pink': '#9333EA',
          'note-yellow': '#2B123A',
          'note-pink': '#35102C',
          'note-green': '#122B2A',
          'note-blue': '#10223B',
          'note-purple': '#2A103D',
        }
      },
      fontFamily: {
        handwriting: ['"Dancing Script"', '"Caveat"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'paper': '0 8px 25px -4px rgba(147, 51, 234, 0.25), 0 2px 8px -1px rgba(225, 29, 72, 0.2)',
        'paper-lg': '0 20px 40px -10px rgba(147, 51, 234, 0.35), 0 5px 15px -3px rgba(225, 29, 72, 0.25)',
        'polaroid': '0 12px 35px -5px rgba(0, 0, 0, 0.6), 0 2px 10px -2px rgba(147, 51, 234, 0.3)',
        'tape': '0 2px 4px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.85' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
