/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{html, js}",
  ],
  corePlugins: {
    preflight: false,
  },
  content: [    
    "./src/**/*.{html, js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'Inter', 'sans-serif'],
        body: ['Sora', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: '#6AFFAE',
        secondary: '#5CE2FF',
        tertiary: '#1F2021',
      }
    },
  },
  plugins: [],
}