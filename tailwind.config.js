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
          cream: '#FFF8F0',
          pink: '#F7D6DC',
          dusty: '#D98C9A',
          rose: '#C76575',
          brown: '#8B625B',
          paper: '#FDFBF7',
          tape: '#E2CFB4',
          'tape-pink': '#F7C5D1',
          'note-yellow': '#FEF3C7',
          'note-pink': '#FCE7F3',
          'note-green': '#D1FAE5',
          'note-blue': '#E0F2FE',
          'note-purple': '#F3E8FF',
        }
      },
      fontFamily: {
        handwriting: ['"Dancing Script"', '"Caveat"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'paper': '0 8px 24px -4px rgba(139, 98, 91, 0.12), 0 2px 6px -1px rgba(139, 98, 91, 0.08)',
        'paper-lg': '0 20px 35px -10px rgba(139, 98, 91, 0.2), 0 5px 15px -3px rgba(139, 98, 91, 0.1)',
        'polaroid': '0 10px 30px -5px rgba(139, 98, 91, 0.18), 0 2px 8px -2px rgba(139, 98, 91, 0.1)',
        'tape': '0 1px 3px rgba(0, 0, 0, 0.1)',
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
