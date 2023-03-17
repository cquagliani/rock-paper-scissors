/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  corePlugins: {
    preflight: false,
  },
  content: [    
    "./src/**/*.{html, js}", 
    "./src/**/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}