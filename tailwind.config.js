/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmMono: ['DM Mono', 'monospace'],
        kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
