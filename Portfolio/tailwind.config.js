/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1a202c',
        darkCard: '#2d3748',
        darkText: '#e2e8f0',
        darkHover: '#4a5568',
        darkBorder: '#4a5568',
      },
    },
  },
  plugins: [],
}

