/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ['Oswald'],
      spaceMono : ['Space Mono'],
      redditMono : ['Reddit Mono']
    }
  },
  plugins: [],
}

