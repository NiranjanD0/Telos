/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./newtab.html",
    "./script.js"
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--bg-panel)',
        'panel-2': 'var(--bg-panel-2)',
        line: 'var(--line)',
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        blue: 'var(--blue)',
        'blue-2': 'var(--blue-2)',
        red: 'var(--red)',
      },
      fontFamily: {
        mono: ['var(--mono)'],
        sans: ['var(--sans)'],
      },
      boxShadow: {
        'toggle': '0 1px 4px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}
