/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#1e254a',
        // borderLine: rgba(255, 255, 255, 65),
        // borderFill: rgba(255, 255, 255, 5)
      },
      fontFamily: {
        'inter': '\'Inter\', sans-serif;',
        'quicksand': '\'Quicksand\', sans-serif;',
        'general': '\'General Sans\', sans-serif;'
      },
      backgroundImage: {
        'cards': 'url("/public/cards.svg")',
        'noir': 'url("/public/noir.svg")',
        'guessomania': 'url("/public/guessomania.svg")',
        'polydash': 'url("/public/polydash.svg")'
      }
    },
  },
  plugins: [],
}
