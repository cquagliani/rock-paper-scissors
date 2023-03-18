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
        primary: '#6876CF',
        secondary: '#38BDF8',
        tertiary: '#0F182A',
        details: '#E86EAE',
        subtitles: '#647386',
      }
    },
  },
  plugins: [],
}